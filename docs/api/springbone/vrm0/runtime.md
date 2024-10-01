# SpringBone Runtime

## import 時の Springbone Runtime 切り替えについて `from v0.127.0`

```cs
class VRMImporterContext {
  public VRMImporterContext(
    VRMData data,
    IReadOnlyDictionary<SubAssetKey, Object> externalObjectMap = null,
    ITextureDeserializer textureDeserializer = null,
    IMaterialDescriptorGenerator materialGenerator = null,
    ImporterContextSettings settings = null,
    IVrm0XSpringBoneRuntime springboneRuntime = null // 👈
  )
}
```

この引き数により SpringBone の Runtime をカスタマイズできます。
`new Vrm0XSpringBoneDefaultRuntime` または `new Vrm0XFastSpringboneRuntime` を渡してください。
`null` の場合は `Vrm0XSpringBoneDefaultRuntime` になります。

## Vrm0XSpringBoneDefaultRuntime

default の SpringBone Runtime です。

### 特徴

- 普通のMonoBehaviour

:::note v0.125.0 までは 1ファイル に処理がまとまっています
SpringBoneだけ他のプロジェクトにコピーするときに便利です。

- https://github.com/vrm-c/UniVRM/blob/v0.125.0/Assets/VRM/Runtime/SpringBone/VRMSpringBone.cs

:::

```cs

[DefaultExecutionOrder(11000)]
// [RequireComponent(typeof(VCIObject))]
public sealed class VRMSpringBone : MonoBehaviour
{
  private void LateUpdate()
}
```

## Vrm0XSpringBoneDefaultRuntime

Vrm10FastSpringboneRuntime と同じ job を使用します`from v0.126.0`。
シングルトンです。

### 特徴

- Unity job system で実装されている
- すべての Vrm の SpringBone を Singleton でまとめて処理する
  - 非play時に動作できません。DontDestroyOnLoad

## import 時の Springbone Runtime 切り替えについて `from v0.85.0 ~ to v0.126.0`

Import 後に `FastSpringBoneReplacer.ReplaceAsync` を呼び出してください

これを明示的に呼ばなければ、従来のSpringBoneのまま動作します。

```cs
using (var loader = new UniGLTF.ImporterContext(data))
{
    var instance = await loader.LoadAsync();
    SetModel(instance);
}
FastSpringBoneReplacer.ReplaceAsync(instance.Root) // 👈

instance.EnableUpdateWhenOffscreen();
instance.ShowMeshes();
```

## FastSpringBoneService(シングルトン)について

FastSpringBone が実行されると、`FastSpringBone Service` GameObject が `DontDestroyOnLoad` で生成されます。

```cs
[DefaultExecutionOrder(11000)]
public class FastSpringBoneService : MonoBehaviour
{
  public static FastSpringBoneService Instance
  {
    get{
      DontDestroyOnLoad(gameObject);
    }
  }
  private void LateUpdate()
}
```

これは全 VRM の FastSpringBone を集め、バッファの構築や FastSpringBone の実行タイミングの制御などを行う GameObject です。

明示的に破棄を行いたい場合は `FastSpringBoneService.Free` を呼んでください。
