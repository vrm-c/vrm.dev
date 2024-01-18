---
tags: ["unity"]
---

# UniVRM Version

## v0.55.0 (Last Unity-5.6 compatible version)

| date | version                                                       |
|------|---------------------------------------------------------------|
| 2019 | [0.55.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.55.0) |

## v0.56.0 ~

* If bugs are introduced after version bump, we will fix them as quick as we can and bump the minor version

| date       | version                                                                                                                          | Bugs           | Notes                                                               |
|------------|----------------------------------------------------------------------------------------------------------------------------------|------------------------|------------------------------------------------------------------------------|
| 2020       | [0.56.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.0)                                                                    | x                      | The minimum version support for Unity is 2018.4                                                          |
|            | [0.56.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.1)                                                                    | x                      |                                                                              |
|            | [0.56.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.2)                                                                    | x                      |                                                                              |
|            | [0.56.3](http://github.com/vrm-c/UniVRM/releases/tag/v0.56.3)                                                                    |                        |                                                                              |
|            | [0.57.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.57.0)                                                                    |                        | Bones with the same names will be renamed automatically                         |
|            | [0.57.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.57.1)                                                                    |                        |                                                                              |
|            | [0.58.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.58.0)                                                                    | [^firstperson_import]  | Remade export                                             |
|            | [0.58.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.58.1)                                                                    |                        |                                                                              |
|            | [0.59.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.59.0)                                                                    |                        | Improved validation checks on VRMSpringBone settings                                   |
|            | [0.60.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.60.0)                                                                    |                        | Enhanced null-checks on VRM's components when exporting      |
|            | [0.61.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.61.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/20?closed=1) | [^springcollider]      | Made UniUnlit's vertex color working properly. Fixed AOT compilation issue                                         |
|            | [0.61.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.61.1)                                                                    |                        |                                                                              |
|            | [0.62.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.62.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/21?closed=1) |                        | Fixed bugs when baking BlendShape                                         |
| 2021 01/05 | [0.63.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.63.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/25?closed=1) | [^jpg] [^kwmap] [^upm] | JPG export bug. Separated UniGLTF from UniVRM                                                     |
| 01/07      | [0.63.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.63.1)                                                                    | [^jpg] [^kwmap]        | JPG export bug                                                                  |
| 01/08      | [0.63.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.63.2)                                                                    |                        |                                                                              |
| 01/15      | [0.64.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.64.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/23?closed=1) | [^asmdef]              | Empty submesh will not be exported. vrm-1.0 Experiment kick-off |
| 01/26      | [0.65.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.0)                                                                    | [^build]               |                                                                              |
| 01/28      | [0.65.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.1) [milestone](https://github.com/vrm-c/UniVRM/milestone/28?closed=1) | [^build]               | Fixed export errors when Turkish locale is on [\\#696](https://github.com/vrm-c/UniVRM/issues/696)    |
| 01/28      | [0.65.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.2) [milestone](https://github.com/vrm-c/UniVRM/milestone/29?closed=1) |                        |                                                                              |
|            | [0.65.3](http://github.com/vrm-c/UniVRM/releases/tag/v0.65.3)                                                                    |                        | Updated UniGLTF version number for UPM package. No unity package release                         |
| 02/03      | [0.66.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.66.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/26?closed=1) | Stable✅                  | Warning message when there is a springbone in an unnormalized hierarchy             |
|            | [0.67.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.67.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/27?closed=1) |                        | For UPM only. No package release                                              |
|            | [0.67.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.67.1)                                                                    |                        | For UPM only. No package release                                              |

## v0.68.0 ~ (VRM-1.0 pre release)

WIP VRM-1.0

* [API](https://vrm-c.github.io/UniVRM/ja/)

| date  | version                                                                                                                           | Bugs                                    | Notes                                                                                                                                                                |
|-------|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       | [0.68.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/30?closed=1)  | [^material_import] [^import_bug]                | glb/gltf axes options. ImporterContext API                                                                                                                                |
| 03/16 | [0.68.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.1)                                                                     | [^import_bug]                                   |                                                                                                                                                                               |
| 03/17 | [0.68.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.2)                                                                     |                                                 |                                                                                                                                                                               |
| 03/22 | [0.69.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.69.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/31?closed=1)  | [^MetallicOcclusion][^EncodeToPng] [^NotUnique] | Fixed SmoothTexture conversion[\#388](https://github.com/vrm-c/UniVRM/issues/388), Unity2020対応                                                                                    |
| 03/23 | [0.69.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.69.1)                                                                     | [^MetallicOcclusion][^EncodeToPng]              |                                                                                                                                                                               |
| 03/31 | [0.70.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.70.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/32?closed=1)  | [^MetallicOcclusion]                            | impl `WEIGHTS_0` not float4                                                                                                                                                   |
| 04/05 | [0.71.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.71.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/33?closed=1)  | IOS build                                       |                                                                                                                                                                               |
| 04/13 | [0.72.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.72.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/34?closed=1)  |                                                 | Option to split vertex buffer. T-Pose                                                                                                                                      |
| 04/22 | [0.73.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.73.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/35?closed=1) |                                                 | * [OtherPermissionUrl欄の修正](https://github.com/vrm-c/UniVRM/pull/897) * [正規化するときにBlendShapeを使うLookAtがExportされない](https://github.com/vrm-c/UniVRM/pull/894) |
| 05/12 | [0.74.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.74.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/36?closed=1) |                                                 | * [Runtime ロード後の　SpringBone　スケーリング挙動の修正](https://github.com/vrm-c/UniVRM/issues/922)                                                                        |
| 05/25 | [0.75.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.75.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/37?closed=1) |                                                 | 正規化時にLookAtのパラメーターが落ちてしまうのを修正                                                                                                                          |
| 06/08 | [0.76.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.76.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/38?closed=1) |                                                 | namespace MeshUtilityがUnityEditor.MeshUtility classと競合するのを修正                                                                                                        |
| 06/17 | [0.77.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.77.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/39?closed=1) |                                                 | [API更新](https://vrm-c.github.io/UniVRM/) https://github.com/vrm-c/UniVRM/issues/1022 https://github.com/vrm-c/UniVRM/issues/496                 |
| 06/23 | [0.78.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.78.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/40?closed=1) |                                                 | https://github.com/vrm-c/UniVRM/pull/1049                                                                                                                                     |

## v0.79.0 ~

* `0.80.0` からサポートする Unity の最低バージョンを `2019.4LTS` に更新しました。[Unity Version](/univrm/install/unity_version)。
* `0.80.0` から `VRM-1.0β` のパッケージ提供を開始しました。

| date  | version                                                                                                                          | 安定性・バグ  | 更新内容・備考                              |
|-------|----------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------|
| 07/20 | [0.79.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.79.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/41?closed=1) |               | pre release 運用終了                        |
| 08/12 | [0.80.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.80.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/42?closed=1) |               | `Unity-2019.4LTS` 以降                      |
| 08/20 | [0.81.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.81.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/43?closed=1) |               | ３パッケージ構成(UniGLTF, VRM, VRM-1.0beta) |
| 09/01 | [0.82.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.82.0) [milestone](https://github.com/vrm-c/UniVRM/milestone/44?closed=1) | glb の import | URP API                                     |
| 09/03 | [0.82.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.82.1) [milestone](https://github.com/vrm-c/UniVRM/milestone/45?closed=1) |               | URP API                                     |

[^springcollider]: スプリングボーンのコライダーの座標変換バグ。 [\#576](https://github.com/vrm-c/UniVRM/issues/576)
[^jpg]: エクスポートダイアログのスクリーンショットボタンの jpg バグ。[\#639](https://github.com/vrm-c/UniVRM/issues/639)
[^kwmap]: シリアライザのバグ。エクスポートしたファイルの互換性。 [\#654](https://github.com/vrm-c/UniVRM/issues/654)
[^upm]: MeshUtility フォルダの移動と参照の問題。
[^asmdef]: 他のパッケージと併用するときに install で問題が出る？ [\#687](https://github.com/vrm-c/UniVRM/pull/687)
[^build]: build すると Exception( `#if UNITY_EDITOR` )。 [\#701](https://github.com/vrm-c/UniVRM/issues/701)
[^firstperson_import]: VRMFirstPerson のエディターインポートのバグ [/#515](https://github.com/vrm-c/UniVRM/issues/515)
[^material_import]: [\#786](https://github.com/vrm-c/UniVRM/issues/786) [\#788](https://github.com/vrm-c/UniVRM/issues/788)
[^import_bug]: [\#790](https://github.com/vrm-c/UniVRM/issues/790) [\#794](https://github.com/vrm-c/UniVRM/issues/794)
[^NotUnique]: [\#812](https://github.com/vrm-c/UniVRM/pull/812)
[^EncodeToPng]: [\#831](https://github.com/vrm-c/UniVRM/pull/831)
[^MetallicOcclusion]: [\#836](https://github.com/vrm-c/UniVRM/issues/836)
