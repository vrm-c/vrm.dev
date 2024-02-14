# VRM-Animation export

BVH Converter 実装を参照してください。

- `menu` - `VRM1` - `Experimental` - `Convert BVH to VRM-Animation...`

`Assets/VRM10/Editor/VrmAnimationMenu.cs`

## 説明

### 入力

VrmAnimation を出力するには以下が必要です。

- humanoid のGameObject hierarchy.
- himanoid ヒエラルキーが T-Pose になっていること。
- 時間毎に humanoid ヒエラルキーのポーズが変わること。

以上の条件を簡単に満たすために bvh を利用しています。

:::warning
初期姿勢が T-Pose でない BVH は動作しません
:::

:::tip Unity humanoid は必須ではありません
`Animator.GetBoneTransform` を使うのが簡単です。
:::

### 初期化

```cs title="VRM Animation exporter 使用手順"
Transform humanoid_hierarchy;

var data = new ExportingGltfData();
using var exporter = new VrmAnimationExporter(
            data, new GltfExportSettings());
exporter.Prepare(humanoid_hierarchy.gameObject);
```

```cs title="VRM Animation exporter 使用手順"
exporter.Export((VrmAnimationExporter vrma) =>
{
    // get human bones
    var map = new Dictionary<HumanBodyBones, Transform>();
    var animator = bvh.Root.GetComponent<Animator>();
    foreach (HumanBodyBones bone in Enum.GetValues(typeof(HumanBodyBones)))
    {
        if (bone == HumanBodyBones.LastBone)
        {
            continue;
        }
        var t = animator.GetBoneTransform(bone);
        if (t == null)
        {
            continue;
        }
        map.Add(bone, t);
    }

    vrma.SetPositionBoneAndParent(map[HumanBodyBones.Hips], bvh.Root.transform);

    foreach (var kv in map)
    {
        var vrmBone = Vrm10HumanoidBoneSpecification.ConvertFromUnityBone(kv.Key);
        var parent = GetParentBone(map, vrmBone) ?? bvh.Root.transform;
        vrma.AddRotationBoneAndParent(kv.Key, kv.Value, parent);
    }
```

### 時間を進めてフレームを登録する

```cs

    // get animation
    var animation = bvh.Root.gameObject.GetComponent<Animation>();
    var clip = animation.clip;
    var state = animation[clip.name];

    var time = default(TimeSpan);
    for (int i = 0; i < bvh.Bvh.FrameCount; ++i, time += bvh.Bvh.FrameTime)
    {
        state.time = (float)time.TotalSeconds;
        animation.Sample();
        vrma.AddFrame(time);
    }
```

### 出力

```cs
});
var glb =  data.ToGlbBytes();
```

:::tip
通常の glb に VRMC_vrm_animation が追加されたものです。

:::
