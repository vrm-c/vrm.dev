# SpringBone Runtime

## `v0.127` import 時の Springbone Runtime 切り替えについて

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

- `new Vrm0XSpringBoneDefaultRuntime` (default)
- `new Vrm0XFastSpringboneRuntime`

を渡してください。
`null` の場合は `Vrm0XSpringBoneDefaultRuntime` になります。

## Vrm0XSpringBoneDefaultRuntime

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

## `v0.126` Vrm0XFastSpringboneRuntime

Vrm10FastSpringboneRuntime と同じ job を使用します。
シングルトンです。

### 特徴

- Unity job system で実装されている
- すべての Vrm の SpringBone を Singleton でまとめて処理する
  - 非play時に動作できません。DontDestroyOnLoad

### FastSpringBoneService(シングルトン)について

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

:::note
明示的に破棄を行いたい場合は `FastSpringBoneService.Free` を呼んでください。
:::

## `v0.128.0` Runtime の操作

### Runtime を取得する

importer に渡した sprinboneruntime 引数を保存しておいてください。

```cs
IVrm0XSpringBoneRuntime springboneRuntime = m_useFastSpringBone.isOn
  ? new Vrm0XFastSpringboneRuntime()
  : new Vrm0XSpringBoneDefaultRuntime();
var instance = await VrmUtility.LoadBytesAsync(path, bytes, GetIAwaitCaller(m_useAsync.isOn),
    materialCallback, metaCallback,
    loadAnimation: m_loadAnimation.isOn,
    springboneRuntime: springboneRuntime
    );

// 呼び出す
springboneRuntime.ReconstructSpringBone();
```

### 再構築する

SpringBone の構成が変わったり、T-Poseが変わった場合に最初から再構築します。
重い処理となります。

```cs
IVrm0XSpringBoneRuntime springruntime;
springruntime.ReconstructSpringBone();
```

:::info
モデルのスケーリングを変更した場合は、呼び出しが必要です。
初期値の中にスケーリングの影響を受ける項目があるためで、最初期化が必要です。
:::

### 初期姿勢にする

すべての Joint の localRotation を初期化したときの値に戻します。

```cs
IVrm0XSpringBoneRuntime springruntime;
springruntime.RestoreInitialTransform();
```

### model level

```cs
namespace UniGLTF.SpringBoneJobs.Blittables
{
    public struct BlittableModelLevel
    {
        /// <summary>
        /// World 座標系の追加の力。風など。
        /// </summary>
        public Vector3 ExternalForce;

        /// <summary>
        /// 処理結果の Transform への書き戻しを停止する。
        /// </summary>
        public bool StopSpringBoneWriteback;

        /// <summary>
        /// スケール値に連動して SpringBone のパラメータを自動調整する。
        /// (見た目の角速度が同じになるようにする)
        /// </summary>
        public bool SupportsScalingAtRuntime;
    }
}

IVrm0XSpringBoneRuntime springruntime;
springruntime.SetModelLevel(vrm.transform, new {
  StopSpringBoneWriteback = true,
  SupportsScalingAtRuntime = true,
  ExternalForce = new Vector3(x, y, z),
});
```

#### StopSpringBoneWriteback: 一時停止する

SpringBone の処理は継続しますが、結果を Transform に書き戻す処理を停止します。

#### ExternalForce: 外力

風など一時的な外からのフォースを加えます。

:::note
world座標です。
:::

:::note
gravity 設定と同じ効果です。
model 一体に対してまとめて force を加えることができます。
:::

#### SupportsScalingAtRuntime: Scaling のモード変更

- [スケールを大きくすると、SpringBoneの動きがおかしくなる。 · Issue #2403 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2403)
