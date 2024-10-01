# SpringBone Runtime

## import 時の Springbone Runtime 切り替えについて `from v0.127.0`

```cs
clss Vrm10Importer {
  public Vrm10Importer(
    Vrm10Data vrm,
    IReadOnlyDictionary<SubAssetKey, UnityEngine.Object> externalObjectMap = null,
    ITextureDeserializer textureDeserializer = null,
    IMaterialDescriptorGenerator materialGenerator = null,
    bool useControlRig = false,
    ImporterContextSettings settings = null,
    IVrm10SpringBoneRuntime springboneRuntime = null // 👈
  )
}
```

この引き数により SpringBone の Runtime をカスタマイズできます。
`new Vrm10FastSpringboneRuntime` または `new Vrm10FastSpringboneRuntimeStandalone` を渡してください。
`null` の場合は `Vrm10FastSpringboneRuntime` になります。

## scene 配置時の Springbone Runtime 切り替えについて `from v0.127.0`

`Vrm10FastSpringboneRuntimeProvider` または `Vrm10FastSpringboneRuntimeStandaloneProvider` をアッタチしてください。

## Vrm10FastSpringboneRuntime

default の SpringBone Runtime です。

### 特徴

- Unity job system で実装されている
- すべての Vrm の SpringBone を Singleton でまとめて処理する
  - 非play時に動作できません。DontDestroyOnLoad

## FastSpringBoneService(シングルトン)について

FastSpringBone が実行されると、`FastSpringBone Service` GameObject が `DontDestroyOnLoad` で生成されます。

```cs
[DefaultExecutionOrder(11010)]
public sealed class FastSpringBoneService : MonoBehaviour
{
  public static FastSpringBoneService Instance
  {
    get {
      DontDestroyOnLoad(gameObject);
    }
  }

  private void LateUpdate()
}
```

これは全 VRM の FastSpringBone を集め、バッファの構築や FastSpringBone の実行タイミングの制御などを行う GameObject です。

明示的に破棄を行いたい場合は `FastSpringBoneService.Free` を呼んでください。

## Vrm10FastSpringboneRuntimeStandalone

Vrm10FastSpringboneRuntime と同じ job を使用します。シングルトンでは無いバージョンです。

### 特徴

- Unity job system で実装されている

```cs
public class Vrm10Runtime : IDisposable
{
  public void Process()
  {
      // 1. Update From VrmAnimation
      // 2. Control Rig
      // 3. Constraints
      // 4. Gaze control
      // 5. Apply Expression
      // 6. SpringBone
      SpringBone.Process(); // 👈
  }
}
```

## Runtime の操作

### Runtime を取得する

Vrm10Instance から取得してください。

```cs
Vrm10Instance vrm;
IVrm10SpringBoneRuntime springboneRuntime = vrm.Runtime.Springbone;
```

### 初期姿勢にする

すべての Joint の localRotation を初期化したときの値に戻します。

### 一時停止する

SpringBone の処理は継続しますが、結果を Transform に書き戻す処理を停止します。

#### warm start

### 再構築する

SpringBone の構成が変わったり、T-Poseが変わった場合に最初から再構築します。
重い処理となります。

### Spring設定の反映

stiffness, dragForce などのパラメーター変更を反映します。
再構築より軽量です。

### 外力

風など一時的な外からのフォースを加えます。
