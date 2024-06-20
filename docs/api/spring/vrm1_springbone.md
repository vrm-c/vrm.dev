# vrm-1.0 の SpringBone 実装

## 構成

### Model

:::info
`vrm10Instance.SpringBone`にモデル側の情報が格納されています
:::

### System(シングルトン)

:::info
`FastSpringBoneService.Instance` はシングルトンですべての VRM-1.0 モデルのスプリングをまとめて処理します
:::

## 実行

### Update

:::info
`FastSpringBoneService.LateUpdate`

```csharp
[DefaultExecutionOrder(11010)]
```

:::

:::tip

Vrm10Instance より後ろです。

```csharp
[DefaultExecutionOrder(11000)]
public class Vrm10Instance : MonoBehaviour
```

:::

### `v0.106.0` 手動更新

:::info 手動更新

開始前に処理を回して SpringBone を安定させるなど、毎フレームの更新ではない想定です。
:::

- FastSpringBoneService.UpdateTypes.Manual を追加
- FastSpringBoneService.ManualUpdate を追加

```csharp
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

## 機能

### `v0.106.0` 毎フレーム外力を加える

- [\# 1863](https://github.com/vrm-c/UniVRM/pull/1868)

:::info 外力

ジャンプや風など、一時的な力の表現を想定した機能です。
:::

```csharp
VRM10Instance instance;

// each frame
// 既存の Gravity に加算されます
instance.Runtime.ExternalForce = new Vector3(0.1f, 0, 0);
```

- [アプリケーションから動的に Spring に対する外力を作用させるインタフェース by ousttrue · Pull Request #1861 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/pull/1861)

## MonoBehaviour詳細

`Vrm10InstanceSpringBone Vrm10Instance.SpringBone`

### Spring

```csharp
[SerializeField]
public List<Spring> Springs = new List<Spring>();
```

### ColliderGroup

```
public List<VRM10SpringBoneColliderGroup> ColliderGroups = new List<VRM10SpringBoneColliderGroup>();
```

#### Collider

```csharp
public List<VRM10SpringBoneCollider> Colliders = new List<VRM10SpringBoneCollider>();
```

## Job詳細

### FastSpringBoneScheduler.Schedule(entry point)

```csharp
JobHandle Schedule(float deltaTime)
```

```csharp
private void LateUpdate()
{
    if (UpdateType == UpdateTypes.LateUpdate)
    {
        _fastSpringBoneScheduler.Schedule(Time.deltaTime).Complete();
    }
}
```

### job の構成

```csharp
        public JobHandle Schedule(float deltaTime)
        {
            var handle = default(JobHandle);
            handle = _bufferCombiner.ReconstructIfDirty(handle);
            if (!_bufferCombiner.HasBuffer)
            {
                return handle;
            }

            handle = new PullTransformJob
                {
                    Transforms = _bufferCombiner.Transforms
                }.Schedule(_bufferCombiner.TransformAccessArray, handle);

            handle = new UpdateFastSpringBoneJob
            {
                Colliders = _bufferCombiner.Colliders,
                Joints = _bufferCombiner.Joints,
                Logics = _bufferCombiner.Logics,
                Springs = _bufferCombiner.Springs,
                Transforms = _bufferCombiner.Transforms,
                DeltaTime = deltaTime,
            }.Schedule(_bufferCombiner.Springs.Length, 1, handle);

            handle = new PushTransformJob
                {
                    Transforms = _bufferCombiner.Transforms
                }.Schedule(_bufferCombiner.TransformAccessArray, handle);

            return handle;
        }
```
