# IVrm10SpringBoneRuntime

`v0.127`

runtime に以下のようにアクセスできます。

```cs
Vrm10Instance vrm;
IVrm10SpringBoneRuntime springbone = vrm.Runtime.SpringBobe;
```

:::info SpringBone 関連の操作をまとめました

```cs
vrm.Runtime.ReconstructSpringBone();
// 👇
vrm.Runtime.SpringBone.ReconstructSpringBone();
```

:::

## interface 抜粋

```cs
public interface IVrm10SpringBoneRuntime : IDisposable
{
    /// <summary>
    /// SpringBone の構成変更を反映して再構築する。
    /// </summary>
    public bool ReconstructSpringBone();

    /// <summary>
    /// initialTransform 状態に復帰。verlet の速度 も 0 に。
    /// </summary>
    public void RestoreInitialTransform();

    /// <summary>
    /// Joint レベルの可変情報をセットする
    /// stiffness,
    /// </summary>
    public void SetJointLevel(Transform joint, BlittableJointMutable jointSettings);

    /// <summary>
    /// Model レベルの可変情報をセットする
    /// 風, pause, scaling
    /// </summary>
    public void SetModelLevel(Transform modelRoot, BlittableModelLevel modelSettings);
}
```

### 再構築する

SpringBone の構成が変わったり、T-Poseが変わった場合に最初から再構築します。
重い処理となります。

```cs
Vrm10Instance vrm;
vrm.Runtime.Springbone.ReconstructSpringBone();
```

:::info
モデルのスケーリングを変更した場合は、呼び出しが必要です。
初期値の中にスケーリングの影響を受ける項目があるためで、最初期化が必要です。
:::

### 初期姿勢にする

すべての Joint の localRotation を初期化したときの値に戻します。

```cs
Vrm10Instance vrm;
vrm.Runtime.Springbone.RestoreInitialTransform();
```

- [SpringBoneの状態をリセットする機能 · Issue #2348 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2348)

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

Vrm10Instance vrm;
vrm.Runtime.Springbone.SetModelLevel(vrm.transform, new {
  StopSpringBoneWriteback = true,
  SupportsScalingAtRuntime = true,
  ExternalForce = new Vector3(x, y, z),
});
```

#### StopSpringBoneWriteback: 一時停止する

SpringBone の処理は継続しますが、結果を Transform に書き戻す処理を停止します。

- [SpringBoneをアバターごとに停止、再開させる機能 · Issue #2347 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2347)

#### ExternalForce: 外力

風など一時的な外からのフォースを加えます。

:::note
world座標です。
:::

:::note
gravity 設定と同じ効果です。
model 一体に対してまとめて force を加えることができます。
:::

- [\[1.0\] SpringBone の外力(重力的な)を毎フレームアプリから制御できるインタフェース · Issue #1860 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1860)
- [【VRM1】Unity実行中にVRM10 Spring Boneの重力設定の変更をリアルタイムに画面に反映したい · Issue #1829 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1829)
- [Wind effects · Issue #1732 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1732)
- [\# 1863](https://github.com/vrm-c/UniVRM/pull/1868)
- [アプリケーションから動的に Spring に対する外力を作用させるインタフェース by ousttrue · Pull Request #1861 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/pull/1861)

#### SupportsScalingAtRuntime: Scaling のモード変更

- [スケールを大きくすると、SpringBoneの動きがおかしくなる。 · Issue #2403 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2403)

### joint level

stiffness, dragForce などのパラメーター変更を反映します。
再構築より軽量です。

```cs
// TODO
Vrm10Instance vrm;
Vrm10SpringBoneJoint joint;
vrm.Runtime.Springbone.SetModelLevel(joint.transform, joint.Blittable);
```

- [VRM1.0でエディターの再生中にSpringBobeの調整ができない · Issue #2410 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2410)

- `Vrm10FastSpringboneRuntimeStandalone`

になります。

- `Vrm10FastSpringboneRuntimeProvider`
- `Vrm10FastSpringboneRuntimeStandaloneProvider`

をアッタチしてください。

## Vrm10FastSpringboneRuntime

vrm-1.0 デフォルトの SpringBone ランタイムです。

- Unity C# Job System
- シングルトンでシーンすべての vrm-1.0 をバッチングする

という特徴があります。

### RuntimeImport

デフォルトで Vrm10FastSpringboneRuntime になります。
特に作業は必要ありません。

### シーン配置

シーンに配置された `vrm-1.0` のルートに `Vrm10FastSpringboneRuntimeProvider` をアタッチしてください。

### FastSpringBoneService(singleton)

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

:::tip

Vrm10Instance より後ろです。

```csharp
[DefaultExecutionOrder(11000)]
public class Vrm10Instance : MonoBehaviour
```

:::

:::warning 非play時に動作できません

DontDestroyOnLoad

:::

:::note
明示的に破棄を行いたい場合は `FastSpringBoneService.Free` を呼んでください。
:::

### FastSpringBoneService(manual update)

`v0.106.0`

- FastSpringBoneService.UpdateTypes.Manual を追加
- FastSpringBoneService.ManualUpdate を追加

```cs
// 管理している VRM-1.0 がすべて入っている
List<VRM10Instance> instances;

// setup
foreach(var instance in instances)
{
    // SpringBone を手動にするために、
    // VRM-1.0 本体も手動に変更している。
    // VRM本体 => SpringBone という処理順を守る。
    instance.UpdateType = UpdateTypes.None;
}
FastSpringBoneService.Instance.UpdateType = FastSpringBoneService.UpdateTypes.Manual;

// each frame
foreach(var instance in instances)
{
    // SpringBone よりも先に VRM10Instance を更新
    instance.Runtime.Process();
}
// 最後に FastSpringBoneService を更新
// すべての VRM-1.0 の SpringBone がまとめて処理されます。
FastSpringBoneService.Instance.ManualUpdate(time.deltaTime);
```

## Vrm10FastSpringboneRuntimeStandalone

Vrm10FastSpringboneRuntime のシングルトンをやめて Vrm10Instance.LateUpdate から駆動するように 改造した版です。
EditorPlay など小規模なシーンを想定しています。

- [UniVRM タイムライン…プレイモードとエデットモードで挙動が異なる · Issue #1971 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1971)
- [\[1.0\] FastSpringBone Service does not disposed when I change the code while playing in editor · Issue #1567 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1567)

- Unity job system で実装されている
- Vrm10Runtime.Process 処理の 6 番目に実行される

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

### RuntimeImport

`importer` の引数に `Vrm10FastSpringboneRuntimeStandalone` を明示的に渡してください。

### シーン配置

デフォルトで Vrm10FastSpringboneRuntimeStandalone になります。
特に作業は必要ありません。

:::info editor の scene play 時は Standalone 版がデフォルトになりました

`v0.128`

:::
