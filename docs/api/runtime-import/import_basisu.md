# v0.122 KHR_texture_basisu 拡張対応

:::warning これは実験的機能です
:::

[KHR_texture_basisu 拡張](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md) に対応する機能です。

KHR_texture_basisu 拡張を使用した glTF / VRM ファイルを用意することで、実行時ロードと描画の効率化が図れます。

## 対応するモデルと環境

モデルファイルに含まれる KTX basisu テクスチャは、予め上下反転しておく必要があります。

|  | Editor | Runtime |
| --- | --- | --- |
| 通常のテクスチャ | - | TBD |
| 上下反転したテクスチャ | - | ✅ |

:::warning
Unity は内部的にすべてのテクスチャを上下反転しています。
したがって Runtime に圧縮テクスチャをロードしようとした場合、上下反転した状態で圧縮しておくのが効率的です。
ただし上下反転した状態では glTF として正しい状態にはならないため、Unity 以外のツールでの利用には注意が必要です。

- https://docs.unity3d.com/Packages/com.unity.cloud.ktx@3.4/manual/creating-textures.html
- https://github.com/atteneder/KtxUnity/issues/18
:::

## 導入方法

### 1. KTX for Unity パッケージを導入
[KTX for Unity](https://docs.unity3d.com/Packages/com.unity.cloud.ktx@3.4/manual/index.html) パッケージが必要です。
[パッケージ公式の導入方法](https://docs.unity3d.com/Packages/com.unity.cloud.ktx@3.4/manual/get-started.html) に従ってインストールしてください。

:::note
UniVRM は KTX for Unity パッケージの存在を検知して、自動的に対応コードを有効化します。
具体的には [`USE_COM_UNITY_CLOUD_KTX` シンボルが有効化されます](https://github.com/vrm-c/UniVRM/blob/master/Assets/VRMShaders/GLTF/IO/Runtime/VRMShaders.GLTF.IO.Runtime.asmdef#L18)。
:::

### 2. ロード時にオプションを有効化
glTF ファイルをパースして得られる `GltfData` クラスに存在する `ExtensionSupportFlags` プロパティを設定します。
具体的には以下の 2 点です。

- `GltfData.ExtensionSupportFlags.ConsiderKhrTextureBasisu` を `true` に設定
- `GltfData.ExtensionSupportFlags.IsAllTexturesYFlipped` を `true` に設定

これらを設定した `GltfData` を、通常の手順でロードします。
以下がサンプルコードです。

```csharp
public class LoadYFlippedBasisuModel : MonoBehaviour
{
    async void Start()
    {
        await LoadGltfModelAsync();
        await LoadVrm10ModelAsync();
    }

    async Task LoadGltfModelAsync()
    {
        var path = @"C:\foo\bar\baz.gltf";
        using var data = new AutoGltfFileParser(path).Parse();

        // NOTE: KHR_texture_basisu 拡張のロードを有効化します。これは Runtime でのみ有効です。
        data.ExtensionSupportFlags.ConsiderKhrTextureBasisu = true;

        // NOTE: 上下反転されたテクスチャを含むモデルの場合、このフラグを有効化します。
        //       現在はこのフラグを有効化しないと読み込めません。
        data.ExtensionSupportFlags.IsAllTexturesYFlipped = true;

        using var loader = new ImporterContext(data);
        var model = await loader.LoadAsync(new RuntimeOnlyAwaitCaller());
        model.ShowMeshes();
    }

    async Task LoadVrm10ModelAsync()
    {
        var path = @"C:\foo\bar\baz.vrm";
        using var data = new AutoGltfFileParser(path).Parse();

        data.ExtensionSupportFlags.ConsiderKhrTextureBasisu = true;
        data.ExtensionSupportFlags.IsAllTexturesYFlipped = true;

        var vrm10Data = Vrm10Data.Parse(data);
        using var loader = new Vrm10Importer(vrm10Data);
        var model = await loader.LoadAsync(new RuntimeOnlyAwaitCaller());
        model.ShowMeshes();
    }
}
```

## 関連するソースコード
### テクスチャのイメージバイナリを読み込む機能
https://github.com/vrm-c/UniVRM/blob/v0.121.0/Assets/VRMShaders/GLTF/IO/Runtime/Texture/Importer/KtxTextureDeserializer.cs
