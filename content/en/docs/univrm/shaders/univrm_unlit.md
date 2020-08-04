---
title: "UniUnlit"
date: 2020-08-03
weight: 2
tags: ["material"]
---

## `UniGLTF/UniUnlit` shader

Unity has Unlit-type shaders:

* Unlit/Color
* Unlit/Texture
* Unlit/Transparent
* Unlit/Transparent Cutout

In GLTF, unlit is supported by `KHR_materials_unlit` extension. 
You can utilize `doubleSided`, the product of `Texture`, `Color` and `VertexColor` (if any), and `color`'s alpha mode. 
Given that there is no shader that can handle these features on Unity side, we introduce `UniGLTF/UniUnlit`, which is fully compatible with all `unlit` shaders in Unity.

If Unlit-type shaders are re-imported after exporting, the shader will become `UniGLTF/UniUnlit`.

Below is the summary for Unlit-type shaders' export/import:

| export                     | gltf                                 | import                     |
|----------------------------|--------------------------------------|----------------------------|
| Unlit/Color                | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Unlit/Texture              | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Unlit/Transparent          | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Unlit/Transparent Cutout   | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitTexture           | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitTransparent       | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitCutout            | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| UniGLTF/UniUnlit           | KHR_materials_unlit                  | UniGLTF/UniUnlit           |

Note that Only `UniGLTF/UniUnlit` supports `VertexColor`.
More specifically, `VertexColor` can be enabled if the following two requirements are fulfilled:

* Mesh contains `VertexColor` data
* Material is identified as `Unlit`

To disable `VertexColor`, enabling `RemoveVertexColor` in export dialog before exporting the VRM model. Otherwise, `VertexColor` will be applied automatically to the mesh that has `Unlit` material after importing.

If `KHR_materials_unlit` is declared, core PBR properties are ignored except baseColor. Color values, alpha coverage and double sided will still apply to unlit materials.

## GLTF

| UniUnlit            | GLTF Unlit                                               |
|:--------------------|:---------------------------------------------------------|
| Color Factor        | /materials/pbrMetallicRoughness/baseColorFactor          |
| Color Texture       | /materials/pbrMetallicRoughness/baseColorTexture         |
| Rendering Mode      | /materials/alphaMode                                     |
| Cull Mode           | /materials/doubleSided                                   |
