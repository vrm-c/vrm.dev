---
title: "UniVRM Version"
date: 2021-02-01T07:16:52+09:00
tags: ["unity"]
---

## v0.55.0 (Last Unity-5.6 compatible version)

| Date | Version                                                       | Bugs             | Notes                                      |
|------|---------------------------------------------------------------|------------------|--------------------------------------------|
| 2019 | [0.55.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.55.0) | ◎ Stable Version | The final version for supporting Unity-5.6 |

## v0.56.0 ~

* If bugs are introduced after version bump, we will fix them as quick as we can and bump the minor version

| Date       | Version                                                                                                                          | Bugs                   | Notes                                                                                             |
|------------|----------------------------------------------------------------------------------------------------------------------------------|------------------------|---------------------------------------------------------------------------------------------------|
| 2020       | [0.56.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.0)                                                                    | x                      | The minimum version support for Unity is 2018.4                                                   |
|            | [0.56.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.1)                                                                    | x                      |                                                                                                   |
|            | [0.56.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.2)                                                                    | x                      |                                                                                                   |
|            | [0.56.3](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.3)                                                                    |                        |                                                                                                   |
|            | [0.57.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.57.0)                                                                    |                        | Bones with the same names will be renamed automatically                                           |
|            | [0.57.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.57.1)                                                                    |                        |                                                                                                   |
|            | [0.58.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.58.0)                                                                    | [^firstperson_import]  | Remade export dialog                                                                              |
|            | [0.58.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.58.1)                                                                    |                        |                                                                                                   |
|            | [0.59.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.59.0)                                                                    |                        | Improved validation checks on VRMSpringBone settings                                              |
|            | [0.60.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.60.0)                                                                    |                        | Enhanced null-checks on VRM's components when exporting                                           |
|            | [0.61.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.61.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/20?closed=1) | [^springcollider]      | Made UniUnlit's vertex color working properly. Fixed AOT compilation issue                        |
|            | [0.61.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.61.1)                                                                    |                        |                                                                                                   |
|            | [0.62.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.62.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/21?closed=1) |                        | Fixed bugs when baking BlendShape                                                                 |
| 2021 01/05 | [0.63.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.63.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/25?closed=1) | [^jpg] [^kwmap] [^upm] | JPG export bug. Separated UniGLTF from UniVRM                                                     |
| 01/07      | [0.63.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.63.1)                                                                    | [^jpg] [^kwmap]        | JPG export bug                                                                                    |
| 01/08      | [0.63.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.63.2)                                                                    |                        |                                                                                                   |
| 01/15      | [0.64.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.64.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/23?closed=1) | [^asmdef]              | Empty submesh will not be exported. vrm-1.0 Experiment kick-off                                   |
| 01/26      | [0.65.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.0)                                                                    | [^build]               |                                                                                                   |
| 01/28      | [0.65.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.1) [milestone](https://github.com/vrm-c/UniVRM/milestone/28?closed=1) | [^build]               | Fixed export errors when Turkish locale is on [\#696](https://github.com/vrm-c/UniVRM/issues/696) |
| 01/28      | [0.65.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.2) [milestone](https://github.com/vrm-c/UniVRM/milestone/29?closed=1) |                        |                                                                                                   |
|            | [0.65.3](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.3)                                                                    |                        | Updated UniGLTF version number for UPM package. No unity package release                          |
| 02/03      | [0.66.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.66.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/26?closed=1) | ✅ Stable Version       | Added Warning messages when non-normalized Hierarchy contains spring bone colliders               |
|            | [0.67.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.67.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/27?closed=1) |                        | Maintenance release                                                                               |
|            | [0.67.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.67.1)                                                                    |                        | Only for UPM package. No unity package release                                                    |

## v0.68.0 ~ (VRM-1.0 pre release)

Working on VRM-1.0...

* [API](https://vrm-c.github.io/UniVRM/en/)

| Date  | Version                                                                                                                           | Bugs                                             | Notes                                                                                                                                                                                                   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       | [0.68.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/30?closed=1)  | [^material_import] [^import_bug]                 | Added glb/gltf ReverseAxis settings. ImporterContext API                                                                                                                                                |
| 03/16 | [0.68.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.1)                                                                     | [^import_bug]                                    |                                                                                                                                                                                                         |
| 03/17 | [0.68.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.2)                                                                     |                                                  |                                                                                                                                                                                                         |
| 03/22 | [0.69.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.69.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/31?closed=1)  | [^MetallicOcclusion] [^EncodeToPng] [^NotUnique] | Fixed SmoothTexture conversion [\#388](https://github.com/vrm-c/UniVRM/issues/388), support Unity2020                                                                                                   |
| 03/23 | [0.69.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.69.1)                                                                     | [^MetallicOcclusion] [^EncodeToPng]              |                                                                                                                                                                                                         |
| 03/31 | [0.70.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.70.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/32?closed=1)  | [^MetallicOcclusion]                             | impl `WEIGHTS_0` not float4                                                                                                                                                                             |
| 04/05 | [0.71.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.71.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/33?closed=1)  | IOS build                                        |                                                                                                                                                                                                         |
| 04/13 | [0.72.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.72.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/34?closed=1)  |                                                  | DivideVertexBuffer Option                                                                                                                                                                               |
| 04/22 | [0.73.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.73.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/35?closed=1) |                                                  | * [Fix/other permission url](https://github.com/vrm-c/UniVRM/pull/897) * [Fixed an issue where LookAtBlendShape cannot be exported after model normalization](https://github.com/vrm-c/UniVRM/pull/894) |
| 05/12 | [0.74.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.74.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/36?closed=1) |                                                  | * [Fixed the behavior of the SpringBone scale after runtime import](https://github.com/vrm-c/UniVRM/issues/922)                                                                                         |
| 05/25 | [0.75.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.75.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/37?closed=1) |                                                  | Fixed an issue where LookAtBone Applier mapping values were reset during the normalization process                                                                                                      |
| 06/08 | [0.76.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.76.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/38?closed=1) |                                                  | Fixed an issue where namespace MeshUtility conflicts with UnityEditor.MeshUtility                                                                                                                       |
| 06/17 | [0.77.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.77.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/39?closed=1) |                                                  | [API Update](https://vrm.dev/en/docs/univrm/programming/univrm_api_history/), [issue 1022](https://github.com/vrm-c/UniVRM/issues/1022), [issue 496](https://github.com/vrm-c/UniVRM/issues/496)        |
| 06/23 | [0.78.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.78.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/40?closed=1) |                                                  | https://github.com/vrm-c/UniVRM/pull/1049                                                                                                                                                               |

## v0.79.0 ~

* From version `0.80.0`, Minimum version of Unity is `2019.4LTS`.[Unity Version]({{< relref "unity_version.md" >}})
* From version `0.80.0`, Start `VRM-1.0β` UnityPackage.

| date  | version                                                                                                                          | Bugs              | Notes                                     |
|-------|----------------------------------------------------------------------------------------------------------------------------------|-------------------|-------------------------------------------|
| 07/20 | [0.79.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.79.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/41?closed=1) |                   | Changed `Pre release` to `Latest release` |
| 08/12 | [0.80.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.80.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/42?closed=1) |                   | VRM-1.0β unitypackage                     |
| 08/20 | [0.81.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.81.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/43?closed=1) |                   | 3 packages(UniGLTF, VRM, VRM-1.0beta)     |
| 09/01 | [0.82.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.82.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/44?closed=1) | glb editor import | URP API                                   |
| 09/03 | [0.82.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.82.1) [milestone](https://github.com/vrm-c/UniVRM/milestone/45?closed=1) |                   | URP API                                   |

[^springcollider]: Fixed bugs where SpringBone Collider transformation was done twice. [\#576](https://github.com/vrm-c/UniVRM/issues/576)
[^jpg]: Bugs occurred when creating a screenshot as .jpg format. [\#639](https://github.com/vrm-c/UniVRM/issues/639)
[^kwmap]: Fixed serialization bugs when exporting VRM file. [\#654](https://github.com/vrm-c/UniVRM/issues/654)
[^upm]: Fixed MeshUtility's reference issues.
[^asmdef]: Fixed MeshUtility's assembly definitions. [\#687](https://github.com/vrm-c/UniVRM/pull/687)
[^build]: Fixed compile errors when building a program including UniVRM. [\#701](https://github.com/vrm-c/UniVRM/issues/701)
[^firstperson_import]: Fixed a bug where Renderers in VRMFirstPerson were replicated after VRM import [/#515](https://github.com/vrm-c/UniVRM/issues/515)
[^material_import]: [\#786](https://github.com/vrm-c/UniVRM/issues/786) [\#788](https://github.com/vrm-c/UniVRM/issues/788)
[^import_bug]: [\#790](https://github.com/vrm-c/UniVRM/issues/790) [\#794](https://github.com/vrm-c/UniVRM/issues/794)
[^NotUnique]: [\#812](https://github.com/vrm-c/UniVRM/pull/812)
[^EncodeToPng]: [\#831](https://github.com/vrm-c/UniVRM/pull/831)
[^MetallicOcclusion]: [\#836](https://github.com/vrm-c/UniVRM/issues/836)
