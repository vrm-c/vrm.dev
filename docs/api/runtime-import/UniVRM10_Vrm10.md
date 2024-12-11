# UniVRM10.Vrm10

`Assets/VRM10/Runtime/IO/Vrm10.cs`

## LoadPathAsync

ファイルパス(文字列)からロードします。

```cs
Task<Vrm10Instance> Vrm10.LoadPathAsync(
  string path,
  bool canLoadVrm0X = true,
  ControlRigGenerationOption controlRigGenerationOption = ControlRigGenerationOption.Generate,
  bool showMeshes = true,
  IAwaitCaller awaitCaller = null,
  ITextureDeserializer textureDeserializer = null,
  IMaterialDescriptorGenerator materialGenerator = null,
  VrmMetaInformationCallback vrmMetaInformationCallback = null,
  CancellationToken ct = default(CancellationToken),
  ImporterContextSettings importerContextSettings = null,
  IVrm10SpringBoneRuntime springboneRuntime = null
)
```

仕様例

```cs
var vrm = await Vrm10.LoadPathAsync(vrm_path);
```

:::info sample の仕様例

https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM10_Samples/VRM10Viewer/VRM10ViewerUI.cs#L763

:::

### return: Vrm10Instance

[Vrm10Instance](/api/runtime-import/UniVRM10_Vrm10Instance)

### canLoadVrm0X: vrm-0.x をマイグレートするか？

`true` の場合(default) vrm-0.x は vrm-1.0 に変換してロードされます。
vrm-0.x とアタッチされるコンポーネントが異なります。

### controlRigGenerationOption: ControlRig を生成するか？

unity の humanoid を経由せずに直接操作する場合のユーティリティーです。

[正規化されていないモデルを操作する](/api/vrm1_controlrig)

### showMeshes: Load完了時に表示させるか

[ShowMeshes](/api/runtime-import/RuntimeGltfInstance/#showmeshes)

### awaitCaller: 非同期の制御

`await` しない場合は以下のようにしてください。
`ImmediateCaller` により内部の await が即時実行されるので、
完了済みの Task が返ります。

```cs
var task = Vrm10.LoadPathAsync(vrm_path, new ImmediateCaller());
var vrm = task.Value;
```

### `advanced` textureDeserializer: テクスチャーの生成のカスタマイズ

[ktx](/api/runtime-import/import_basisu) で使われます。

### `advanced` materialGenerator: マテリアル生成のカスタマイズ

デフォルトとは別のマテリアルをロードすることができます。

:::warning URPとBuiltin-RPは自動でスイッチするようになりました

[glTF/VRM1.0 ScriptedImporters can detect the project&#39;s RenderPipeline. or a user can select manually. by Santarh · Pull Request #2393 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/pull/2393)

:::

### vrmMetaInformationCallback: meta情報を取得

0.xからマイグレートした場合は、0.xの方のmetaを取得します。

```cs
public delegate void VrmMetaInformationCallback(
  Texture2D thumbnail,
  UniGLTF.Extensions.VRMC_vrm.Meta vrm10Meta,
  Migration.Vrm0Meta vrm0Meta
);
```

### `TODO` CancellationToken: async のキャンセル実装

未実装

### `advanced` importerContextSettings: その他のオプション

```cs
public class ImporterContextSettings
{
    public bool LoadAnimation { get; }
    public Axes InvertAxis { get; }
}
```

### springboneRuntime: SpringBone の Runtime 選択

[SpringBone Runtime](/api/springbone/vrm1/runtime)

## LoadBytesAsync

バイト列からロードします。
オプションは LoadPathAsync と同じです。

```cs
Task<Vrm10Instance> Vrm10.LoadBytesAsync(
  byte[] bytes,
  bool canLoadVrm0X = true,
  ControlRigGenerationOption controlRigGenerationOption = ControlRigGenerationOption.Generate,
  bool showMeshes = true,
  IAwaitCaller awaitCaller = null,
  ITextureDeserializer textureDeserializer = null,
  IMaterialDescriptorGenerator materialGenerator = null,
  VrmMetaInformationCallback vrmMetaInformationCallback = null,
  CancellationToken ct = default(CancellationToken),
  ImporterContextSettings importerContextSettings = null
)
```
