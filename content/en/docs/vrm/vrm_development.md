---
title: "VRM development"
date: 2020-10-08T18:48:17+09:00
weight: 6
---

WIP

* [programming](../../univrm/programming/)
* [samples]({{< relref "univrm_install_samples.md" >}})

## VRM Features (for Developers)

* Right-handed Y-Up coordinate system ➡️ [Coordinate]({{< relref "univrm_coordinate.md" >}})
* Metric unit is meter
* Humanoid bones ➡️ compatible with humanoid motion and motion capture
* T-pose as the initial posture (towards +Z-axis)
* The initial pose has no rotation and scale
* The mesh is aligned with the Humanoid Skeleton in the initial pose (only skin's bind matrices are not included)
* Expression/eye gaze manipulation are in BlendShapeProxy ➡️ [BlendShapeProxy]({{< relref "how_to_use_blendshapeproxy.md" >}})
* Spring physics setup on clothes, hair and others
* VR settings are available ➡️ [FirstPerson]({{< relref "univrm_use_firstperson.md" >}})
* Licenses settings such as permission to use the avatar, permissions for violent and sexual activities, etc. are defined

VRM is used for loading model into applications at runtime as opposed to the way that pre-makes models as asset for the use of the specific application.

## Runtime Import with UniVRM

UniVRM can load VRM into Unity as a GameObject instead of a prefab.
The imported GameObject is the same as the instantiated GameObject from Prefab

* [runtime load]({{< relref "univrm_import_runtime.md" >}})

## Runtime Export with UniVRM

UniVRM can export the VRM model at runtime in Unity.
The export function can be used for applications such as character maker tool.

* [samples]({{< relref "univrm_install_samples.md" >}})

Exporter sample can be found in:

`Assets/VRM.Samples/Scenes/VRMRuntimeExporterSample.unity`

## Other VRM Implementations

* https://github.com/ruyo/VRM4U
* https://github.com/saturday06/VRM_IMPORTER_for_Blender
* https://github.com/virtual-cast/babylon-vrm-loader/
* https://github.com/pixiv/three-vrm/
