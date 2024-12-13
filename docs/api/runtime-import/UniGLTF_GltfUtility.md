# UniGLTF.GltfUtility

glb / glTF importer

:::info glTF形式
glTF は テクスチャーなどが別ファイルで提供されるため、
扱いが難しい場合があります。
Platformによっては自由にファイルシステムにアクセスできないことが想定されます。
`gltf` と `glb` では、 `glb` を推奨します。
:::

## LoadAsync

ファイルパス(文字列)からロードします。

```cs
Task<RuntimeGltfInstance> GltfUtility.LoadAsync(
  string path,
  IAwaitCaller awaitCaller = null,
  IMaterialDescriptorGenerator materialGenerator = null
) `
```

### awaitCaller: 非同期の制御

`await` しない場合は以下のようにしてください。
`ImmediateCaller` により内部の await が即時実行されるので、
完了済みの Task が返ります。

```cs
var task = GltfUtility.LoadAsync(path, new ImmediateCaller());
var gltf = task.Value;
```

### `advanced` materialGenerator

## LoadBytesAsync

バイト列からロードします。
オプションは LoadAsync と同じです。

path には `glTF` ファイルへのパスを指定してください。
テクスチャーなど外部ファイルの相対パスの起点になります。

```cs
Task<RuntimeGltfInstance> GltfUtility.LoadBytesAsync(
  string path, byte[] bytes,
  IAwaitCaller awaitCaller = null,
  IMaterialDescriptorGenerator materialGenerator = null
)
```
