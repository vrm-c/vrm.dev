# VRM.VrmUtility

VRM-0.x importer

:::info vrm-1.0 として load することができます

[vrm-1.0](/api/runtime-import/UniVRM10_Vrm10)

- canLoadVrm0X

:::

## LoadAsync

ファイルパス(文字列)からロードします。

```cs
Task<RuntimeGltfInstance> VrmUtility.LoadAsync(
  string path,
  IAwaitCaller awaitCaller = null,
  MaterialGeneratorCallback materialGeneratorCallback = null,
  MetaCallback metaCallback = null,
  ITextureDeserializer textureDeserializer = null,
  bool loadAnimation = false
)
```

仕様例

```cs
var vrm = await VrmUtility.LoadBytesAsync(path);
```

### return: RuntimeGltfInstance

[RuntimeGltfInstance](/api/runtime-import/UniGLTF_RuntimeGltfInstance)

### awaitCaller: 非同期の制御

`await` しない場合は以下のようにしてください。
`ImmediateCaller` により内部の await が即時実行されるので、
完了済みの Task が返ります。

```cs
var task = VrmUtility.LoadAsync(vrm_path, new ImmediateCaller());
var vrm = task.Value;
```

### `advanced` materialGeneratorCallback

### metaCallback: metaを受けます

```cs
public delegate void MetaCallback(VRMMetaObject meta);
```

### `advanced` textureDeserializer

### `no spec` loadAnimation

:::note
vrmとしては仕様がありません。
glbとしてAnimationClipを生成。

https://github.com/vrm-c/UniVRM/pull/1719
:::

## LoadBytesAsync

バイト列からロードします。 オプションは LoadAsync と同じです。

```cs
Task<RuntimeGltfInstance> VrmUtility.LoadBytesAsync(
  string path,
  byte[] bytes,
  IAwaitCaller awaitCaller = null,
  MaterialGeneratorCallback materialGeneratorCallback = null,
  MetaCallback metaCallback = null,
  ITextureDeserializer textureDeserializer = null,
  bool loadAnimation = false,
  IVrm0XSpringBoneRuntime springboneRuntime = null
)
```

:::info sampleの使用例

https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM_Samples/SimpleViewer/ViewerUI.cs#L422

:::
