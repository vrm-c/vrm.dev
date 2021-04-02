---
title: "UniVRM Version"
date: 2021-02-01T07:16:52+09:00
tags: ["unity"]
---

# Version

* If bugs are introduced after version bump, we will fix them as quick as we can and bump the minor version

| Date | Version                                                                                                                          | Bugs                              | Notes                                                                        |
| ---- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------- |
| 2019 | [0.55.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.55.0)                                                                    |                                   | The final version to support Unity-5.6                                       |
| 2020 | [0.56.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.0)                                                                    | x                                 | The minimum version support for Unity is 2018.4                              |
|      | [0.56.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.1)                                                                    | x                                 |                                                                              |
|      | [0.56.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.2)                                                                    | x                                 |                                                                              |
|      | [0.56.3](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.3)                                                                    |                                   |                                                                              |
|      | [0.57.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.57.0)                                                                    |                                   | Bones with the same names will be renamed automatically                      |
|      | [0.57.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.57.1)                                                                    |                                   |                                                                              |
|      | [0.58.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.58.0)                                                                    | [^firstperson_import]             | Remade export dialog                                                         |
|      | [0.58.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.58.1)                                                                    |                                   |                                                                              |
|      | [0.59.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.59.0)                                                                    |                                   | Improved validation checks on VRMSpringBone settings                         |
|      | [0.60.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.60.0)                                                                    |                                   | Enhanced null-checks on VRM's components when exporting                      |
|      | [0.61.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.61.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/20?closed=1) | [^springcollider]                 | Made UniUnlit's vertex color working properly. Fixed AOT compilation issue   |
|      | [0.61.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.61.1)                                                                    |                                   |                                                                              |
|      | [0.62.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.62.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/21?closed=1) |                                   | Fixed bugs when baking BlendShape                                            |
| 2021 | [0.63.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.63.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/25?closed=1) | [^jpg] [^kwmap] [^upm]            | JPG export bug. Separated UniGLTF from UniVRM                                |
|      | [0.63.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.63.1)                                                                    | [^jpg] [^kwmap]                   | JPG export bug                                                               |
|      | [0.63.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.63.2)                                                                    |                                   |                                                                              |
|      | [0.64.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.64.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/23?closed=1) | [^asmdef]                         | Empty submesh will not be exported. vrm-1.0 Experiment kick-off              |
|      | [0.65.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.0)                                                                    | [^build]                          |                                                                              |
|      | [0.65.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.1) [misestone](https://github.com/vrm-c/UniVRM/milestone/28?closed=1) | [^build]                          | Fixed export errors when Turkish locale is on [\#696](https://github.com/vrm-c/UniVRM/issues/696)|
|      | [0.65.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.2) [milestone](https://github.com/vrm-c/UniVRM/milestone/29?closed=1) |                                   |                                                                              |
|      | [0.65.3](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.3)                                                                    |                                   | Updated UniGLTF version number for UPM package. No unity package release     |
|      | [0.66.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.66.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/26?closed=1) |                                   | Added Warning messages when non-normalized Hierarchy contains spring bone colliders|
|      | [0.67.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.67.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/27?closed=1) |                                   | Maintenance release                                                          |
|       | [0.67.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.67.1)                                                                    |                                  | Only for UPM package. No unity package release                               |
|       | [0.68.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/30?closed=1) | [^material_import] [^import_bug] | Added glb/gltf ReverseAxis settings. ImporterContext API                     |
| 03/16 | [0.68.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.1)                                                                    | [^import_bug]                    |                                                                              |
| 03/17 | [0.68.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.2)                                                                    |                                  |                                                                              |
| 03/22 | [0.69.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.69.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/31?closed=1) | [^EncodeToPng] [^NotUnique]      | Fixed SmoothTexture conversion [\#388](https://github.com/vrm-c/UniVRM/issues/388), support Unity2020 |
| 03/23 | [0.69.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.69.1)                                                                    | [^EncodeToPng]                   |                                                                              |
| 03/31 | [0.70.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.70.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/32?closed=1) |                                  | impl `WEIGHTS_0` not float4                                                  |

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