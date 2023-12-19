---
date: 2018-04-16T16:30:00+09:00
aliases: [/how_to_view_vrm/]
weight: 6
---

# VRM development

* [programming](https://vrm-c.github.io/UniVRM/)
* [samples](/univrm/install/univrm_install_samples)

## VRM Features (for Developers)

* Right-handed Y-Up coordinate system ➡️[Coordinate](https://vrm-c.github.io/UniVRM/en/implementation/coordinate.html)

* Metric unit is meter ➡️  You don't have to worry about whether 1 is 1 meter or 1 cm.
* It is a humanoid model and has a fixed bone configuration ➡️  Easy to use general-purpose humanoid motion and motion capture
* T-pose as the initial posture (towards +Z-axis) ➡️ can be used directly for Third-Person-Shooter mode

* Guaranteed that there is no rotation or scale in the initial posture ➡️ The burden of writing code that takes initial posture into account can be reduced.
* It is guaranteed that bones and mesh overlap in the initial posture (the skinning Bind matrix only includes movement) ➡️ The burden of baking before processing the mesh can be reduced.
* Expression/eye gaze manipulation are in BlendShapeProxy ➡️ [BlendShapeProxy](https://vrm-c.github.io/UniVRM/en/vrm0/0_58_blendshape.html)
* A non-physical shaking thing has been set up ➡️ It shakes without interfering with physics, so it won't interfere with the game's gimmicks or become violent.
* VR settings are available ➡️ [FirstPerson](https://vrm-c.github.io/UniVRM/en/vrm0/firstperson.html)
* License information is defined ➡️ You can avoid using the model in a way that does not meet the wishes of the model owner.

Rather than packaging it as an asset in a traditional game development project,
The intended use is to load it dynamically at runtime.

## Runtime Import with UniVRM

You can use UniVRM's loading functionality at runtime. UniVRM creates GameObjects directly on the scene without creating Assets (Prefabs). A loaded GameObject can be treated like an instantiated Prefab.

* [runtime load](https://vrm-c.github.io/UniVRM/ja/)

## Runtime Export with UniVRM

You can use UniVRM's export functionality at runtime.
You can use this feature to implement a character creation tool.

* [samples](/univrm/install/univrm_install_samples)

`Assets/VRM.Samples/Scenes/VRMRuntimeExporterSample.unity`

## Other VRM Implementations

* https://github.com/ruyo/VRM4U
* https://github.com/saturday06/VRM_IMPORTER_for_Blender
* https://github.com/virtual-cast/babylon-vrm-loader/
* https://github.com/pixiv/three-vrm/
* https://github.com/V-Sekai/godot-vrm
