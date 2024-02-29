# ■v0.68～v0.78■

* VRM-1.0 作業中
* `.Net-3.5` が無くなって `coRoutine` を `Task` に置き換え
* glb/gltf に `ScriptedImporter` の導入
* `Standard` マテリアルの import/export や mipmapパたメーター などの改修

- [API](/api/)

| date  | version                                                        | 安定性・バグ                                    | 更新内容・備考                                                                                                                                                                       |
| ----- | -------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|       | [0.68.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.0)  | [^material_import] [^import_bug]                | glb/gltf 座標軸オプション。ImporterContext API                                                                                                                                       |
| 03/16 | [0.68.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.1)  | [^import_bug]                                   |                                                                                                                                                                                      |
| 03/17 | [0.68.2](http://github.com/vrm-c/UniVRM/releases/tag/v0.68.2)  |                                                 |                                                                                                                                                                                      |
| 03/22 | [0.69.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.69.0)  | [^MetallicOcclusion][^EncodeToPng] [^NotUnique] | SmoothTexture 変換の修正[\#388](https://github.com/vrm-c/UniVRM/issues/388), Unity2020 対応                                                                                          |
| 03/23 | [0.69.1](http://github.com/vrm-c/UniVRM/releases/tag/v0.69.1)  | [^MetallicOcclusion][^EncodeToPng]              |                                                                                                                                                                                      |
| 03/31 | [0.70.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.70.0)  | [^MetallicOcclusion]                            | impl `WEIGHTS_0` not float4                                                                                                                                                          |
| 04/05 | [0.71.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.71.0)  | IOS build                                       |                                                                                                                                                                                      |
| 04/13 | [0.72.0](http://github.com/vrm-c/UniVRM/releases/tag/v0.72.0)  |                                                 | 頂点バッファを分割するオプション。T-Pose                                                                                                                                             |
| 04/22 | [0.73.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.73.0) |                                                 | _ [OtherPermissionUrl 欄の修正](https://github.com/vrm-c/UniVRM/pull/897) _ [正規化するときに BlendShape を使う LookAt が Export されない](https://github.com/vrm-c/UniVRM/pull/894) |
| 05/12 | [0.74.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.74.0) |                                                 | \* [Runtime ロード後の　 SpringBone 　スケーリング挙動の修正](https://github.com/vrm-c/UniVRM/issues/922)                                                                            |
| 05/25 | [0.75.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.75.0) |                                                 | 正規化時に LookAt のパラメーターが落ちてしまうのを修正                                                                                                                               |
| 06/08 | [0.76.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.76.0) |                                                 | namespace MeshUtility が UnityEditor.MeshUtility class と競合するのを修正                                                                                                            |
| 06/17 | [0.77.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.77.0) |                                                 | [API 更新](/api/) https://github.com/vrm-c/UniVRM/issues/1022 https://github.com/vrm-c/UniVRM/issues/496                                                   |
| 06/23 | [0.78.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.78.0) |                                                 | https://github.com/vrm-c/UniVRM/pull/1049                                                                                                                                            |

