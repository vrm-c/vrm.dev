---
title: "対応するシェーダー"
date: 2020-07-29
weight: 2
url: "univrm/shaders/univrm_material_shader/"
---

## エクスポート

### GLTF レイヤー

PBR と Unlit の２種類しかない。
マテリアルが以下の何れかのシェーダーである場合に `unlit` であると見做されます。

* Unlit/Color
* Unlit/Texture
* Unlit/Transparent
* Unlit/Transparent Cutout
* UniGLTF/UniUnlit

それ以外は、 `standard` と見做して処理し、 gltf の `/materials[]` に記録します。

### VRM レイヤー

gltf の `/extensions/VRM/materialProperties[]` に記録します。
shader名が、

* VRM/UnlitTransparentZWrite
* VRM/MToon

以外の時は、 `shaderName` に `VRM_USE_GLTFSHADER` が記録されます。

## インポート

### GLTF レイヤー

GLTFの `/materials[]` からUnityマテリアルを作成します。

* Stanard
* UniGLTF/UniUlit

の何れかを選択します。

###  VRM レイヤー

GLTFの `/extensions/VRM/materialProperties[]` からUnityマテリアルを作成します。
`shaderName` が `VRM_USE_GLTFSHADER` の場合は、 `/materials[]` から GLTFのマテリアル生成ロジックに移譲します。

## インポート・エクスポート

| export                     | gltf                                 | import                     |
|----------------------------|--------------------------------------|----------------------------|
| Unlit/Color                | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Unlit/Texture              | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Unlit/Transparent          | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Unlit/Transparent Cutout   | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitTexture           | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitTransparent       | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitCutout            | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitTransparentZWrite | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| UniGLTF/UniUnlit           | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Standard                   |                                      | Standard                   |
| VRM/MToon                  | extensions.VRM.materialsProperties[] | VRM/MToon                  |
| VRM/UnlitTransparentZWrite | extensions.VRM.materialsProperties[] | VRM/UnlitTransparentZWrite |
| その他                     |                                      | Standard                   |

という動きになります。
