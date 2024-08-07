---
date: 2018-04-16T16:30:00+09:00
aliases: [/how_to_view_vrm/]
weight: 6
---

# VRM development

- [programming](/api/)

## VRM Features (for Developers)

- `vrm-0.x` `vrm-1.0` Right-handed Y-Up coordinate system ➡️[Coordinate](/api/coordinate)
- `vrm-0.x` `vrm-1.0` Metric unit is meter ➡️ You don't have to worry about whether 1 is 1 meter or 1 cm.
- `vrm-0.x` `vrm-1.0` It is a humanoid model and has a fixed bone configuration ➡️ Easy to use general-purpose humanoid motion and motion capture
- `vrm-0.x` `vrm-1.0` T-pose as the initial posture (`0.x towards Z-axis` `1.0 towards Z+axis`) ➡️ can be used directly for Third-Person-Shooter mode

:::tip
技術的に VRM-0.X は bake 済みの T-Pose を介して FK の humanoid motion を共有する仕組みです。

T-Pose bake をVrm-0.X 正規化と呼んでいます。

VRM-1.0 は bake しない T-Pose を介して humanoid motion を共有する仕組みです。
そのため異なる T-Pose 同士での retarget 手法を VRM-Animation で補完しました。

- [VRM 1.0](/vrm1)
- [VRM Animation](/vrma)

VRM-1.0 に対応するためには、FK retarget の実装が必要になります。
VRM-0.x(各ボーンの rotation を代入するだけ) に比べて RunTime の実装難易度がやや高くなります。

- [ポーズデータの互換性について](https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm_animation-1.0/how_to_transform_human_pose.ja.md)
:::

- Guaranteed that there is no rotation or scale in the initial posture ➡️ The burden of writing code that takes initial posture into account can be reduced.
- It is guaranteed that bones and mesh overlap in the initial posture (the skinning Bind matrix only includes movement) ➡️ The burden of baking before processing the mesh can be reduced.
- Expression/eye gaze manipulation are in BlendShapeProxy ➡️ [BlendShapeProxy](/api/0_58_blendshape)
- A non-physical shaking thing has been set up ➡️ It shakes without interfering with physics, so it won't interfere with the game's gimmicks or become violent.
- VR settings are available ➡️ [FirstPerson](/api/firstperson)
- License information is defined ➡️ You can avoid using the model in a way that does not meet the wishes of the model owner.

Rather than packaging it as an asset in a traditional game development project,
The intended use is to load it dynamically at runtime.

## Runtime Import with UniVRM

You can use UniVRM's loading functionality at runtime. UniVRM creates GameObjects directly on the scene without creating Assets (Prefabs). A loaded GameObject can be treated like an instantiated Prefab.

- [runtime load](/api/runtime-import)

## Runtime Export with UniVRM

You can use UniVRM's export functionality at runtime.
You can use this feature to implement a character creation tool.

- [samples](/api/sample/)

`Assets/VRM.Samples/Scenes/VRMRuntimeExporterSample.unity`

## Other VRM Implementations

[showcase](/showcase/?flags=8)

- https://github.com/ruyo/VRM4U
- https://github.com/saturday06/VRM_IMPORTER_for_Blender
- https://github.com/virtual-cast/babylon-vrm-loader/
- https://github.com/pixiv/three-vrm/
- https://github.com/V-Sekai/godot-vrm
