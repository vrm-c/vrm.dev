# UniGLTF.GltfData

:::info UniGLTF.GltfData は低レベルインターフェースです

ハイレベルインタフェース [UniGLTF.GltfUtility](/api/runtime-import/UniGLTF_GltfUtility) で要件を満たせない場合向けです。

:::

## `byte[]` からロードする

```cs
public sealed class GlbBinaryParser
{
    public GlbBinaryParser(byte[] data, string uniqueName)
}

// 使用例
using (GltfData data = new GlbBinaryParser(bytes, path).Parse())
{
}
```

## filepath からロードする

```cs
public sealed class GlbFileParser
{
    public GlbFileParser(string glbFilePath)
}

// 使用例
using (GltfData data = new GlbFileParser(path).Parse())
{
}
```

## Dispose

Importer の内部で `NativeArray` を使うようにしたため、
終了時にこれを破棄する必要ができました。
使い終わったら `Dispose` してください。

```cs
class GltfData: IDisposable
```

### 使用例

```cs
// must dispose GltfData
using (GltfData data = new AutoGltfFileParser(path).Parse())
using (var loader = new UniGLTF.ImporterContext(data, materialGenerator: materialGenerator))
{
    return await loader.LoadAsync(awaitCaller);
}
```

### Dispose しなかった場合

NativeArray が Dispose されずに GC に回収されたタイミングで、
以下のエラーメッセージがコンソールに表示されます。

`A Native Collection has not been disposed`

このエラーがどこで起きたか分からない場合があります。
`com.unity.jobs package` により詳細メッセージを得ることができます。

https://forum.unity.com/threads/a-native-collection-has-not-been-disposed-enable-full-stack.1098973/

を参考にしてください。

### 関連

- https://github.com/vrm-c/UniVRM/pull/1483
- https://github.com/vrm-c/UniVRM/pull/1503

## GltfData を スレッド上で生成する

UniGLTF.GltfData の生成はスレッドセーフです。
Unity にアクセスしません。
Parse を別スレッドで実行可能です。

```cs
// 使用例
var task = Task.Run(()=>{
  // スレッド OK
  return new GlbBinaryParser(bytes, path).Parse();
});

using(var data = await task){

}
```

## 手順

以下のステップでロードします。

1. `GLB` / `GLTF` をパースして `GltfData` を得る。
2. `GltfData` から `Unity Hierarchy` を ロード する。`RuntimeGltfInstance` を得る。 ローダーを破棄する。
3. ロードした `RuntimeGltfInstance` 使う。`RuntimeGltfInstance` を破棄する。

### 1. パースする

#### glb ファイルパスからパースする

- `vrm` もこの関数を使います。

```csharp
GltfData Load(string path)
{
    return new GlbFileParser(path).Parse();
}
```

#### glb バイト列をパースする

- `vrm` もこの関数を使います。

```csharp
GltfData Load(byte[] bytes)
{
    return new GlbBinaryParser(bytes, "LOAD_NAME").parse();
}
```

#### gltf ファイルパスからパースする

```csharp
GltfData Load(string path)
{
    return new GltfFileWithResourceFilesParser(path).Parse();
}
```

#### zip アーカイブからパースする

gltf と関連するファイルを zip アーカイブしたファイルをパースできます(実験)。

```csharp
GltfData Load(string path)
{
    return new ZipArchivedGltfFileParser(path).Parse();
}
```

#### ファイルパスの拡張子でパースする

サンプルの `SimpleViewer` を参考にしてください。

```csharp
GltfData Load(string path)
{
    // ファイル拡張子で自動判定します
    return new AutoGltfFileParser(path).Parse();
}
```

### 2. ロードする

#### sync

```csharp
RuntimeGltfInstance Load(GltfData data)
{
    // ImporterContext は使用後に Dispose を呼び出してください。
    // using で自動的に呼び出すことができます。
    using(var loader = new UniGLTF.ImporterContext(data)
    {
        var instance = loader.Load();
        return instance;
    }
}
```

#### async

```csharp
async RuntimeGltfInstance Load(GltfData data)
{
    // ImporterContext は使用後に Dispose を呼び出してください。
    // using で自動的に呼び出すことができます。
    using(var loader = new UniGLTF.ImporterContext(data)
    {
        var instance = await loader.LoadAsync();
        return instance;
    }
}
```

### 3. インスタンスを使用する

```csharp
// SkinnedMeshRenderer に対する指示
instance.EnableUpdateWhenOffscreen();
// 準備ができたら表示する(デフォルトでは非表示)
instance.ShowMeshes();
```

使用後に以下のように破棄してください。関連する Asset(Texture, Material, Mesh など)も破棄されます。

```csharp
GameObject.Destroy(instance);
```
