---
title: "Export Import"
date: 2020-08-03T10:39:04+09:00
weight: 4
tags: ["material"]
aliases: ["/univrm/shaders/univrm_material_shader/"]
---

## Export

### GLTF Layer

There are only two types: PBR (Physically based rendering) and Unlit.
A material will be `unlit` if it is one of the shaders in the following list:

* Unlit/Color
* Unlit/Texture
* Unlit/Transparent
* Unlit/Transparent Cutout
* UniGLTF/UniUnlit

Other shaders will be set as `standard` and recorded in gltf's `/materials[]`.

### VRM Layer

Shaders are recorded in gltf's `/extensions/VRM/materialProperties[]`.

Available shaders in VRM Layer:

* VRM/UnlitTransparentZWrite
* VRM/MToon

Other shaders will be set as `VRM_USE_GLTFSHADER` in `shaderName`.

## Import

### GLTF Layer

Create Unity material from GLTF's `/materials[]`.

Select either one in the followings:

* Standard
* UniGLTF/UniUnlit

### VRM Layer

Create Unity material from GLTF's `/extensions/VRM/materialProperties[]`.

## Import/Export

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
| Others                     |                                      | Standard                   |
