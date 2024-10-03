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

- [UniVRM タイムライン…プレイモードとエデットモードで挙動が異なる · Issue #1971 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1971)
- [\[1.0\] FastSpringBone Service does not disposed when I change the code while playing in editor · Issue #1567 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1567)

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

`v0.128.0`

### Runtime を取得する

Vrm10Instance から取得してください。

```cs
Vrm10Instance vrm;
IVrm10SpringBoneRuntime springboneRuntime = vrm.Runtime.Springbone;
```

### 再構築する

SpringBone の構成が変わったり、T-Poseが変わった場合に最初から再構築します。
重い処理となります。

```cs
Vrm10Instance vrm;
vrm.Runtime.Springbone.ReconstructSpringBone();
```

### 初期姿勢にする

すべての Joint の localRotation を初期化したときの値に戻します。

```cs
Vrm10Instance vrm;
vrm.Runtime.Springbone.RestoreInitialTransform();
```

- [SpringBoneの状態をリセットする機能 · Issue #2348 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2348)

### model level
#### 一時停止する

SpringBone の処理は継続しますが、結果を Transform に書き戻す処理を停止します。

```cs
Vrm10Instance vrm;
vrm.Runtime.Springbone.SetModelLevel(vrm.transform, new {
  StopSpringBoneWriteback = true,
});
```

- [SpringBoneをアバターごとに停止、再開させる機能 · Issue #2347 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2347)

#### 外力

風など一時的な外からのフォースを加えます。

- [\[1.0\] SpringBone の外力(重力的な)を毎フレームアプリから制御できるインタフェース · Issue #1860 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1860)
- [【VRM1】Unity実行中にVRM10 Spring Boneの重力設定の変更をリアルタイムに画面に反映したい · Issue #1829 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1829)
- [Wind effects · Issue #1732 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1732)

#### Scaling のモード変更

```cs
Vrm10Instance vrm;
vrm.Runtime.Springbone.SetModelLevel(vrm.transform, new {
  SupportsScalingAtRuntime = true,
});
```

- [スケールを大きくすると、SpringBoneの動きがおかしくなる。 · Issue #2403 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2403)

### joint level

stiffness, dragForce などのパラメーター変更を反映します。
再構築より軽量です。

```cs
// TODO
Vrm10Instance vrm;
Vrm10SpringBoneJoint joint;
vrm.Runtime.Springbone.SetModelLevel(joint.transform, joint.ToParams());
```

- [VRM1.0でエディターの再生中にSpringBobeの調整ができない · Issue #2410 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2410)

