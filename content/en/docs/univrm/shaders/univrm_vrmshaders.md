---
title: "VRMShaders UPM Package"
date: 2020-08-03T10:39:04+09:00
weight: 8
tags: ["unity"]
aliases: ["/univrm/shaders/univrm_vrmshaders/"]
---

Starting with `UniVRM-0.56`, the folder structure in UniVRM has been changed.
Material-related parts in `UniVRM` has been moved to `Assets/VRMShaders`.

## Supported Shaders in Unity and the interchangeability with GLTF materials

VRM supports three types of materials:

* `PBR (gltf default)`
* `unlit (KHR_materials_unlit extensions)` https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
* `MToon`

Starting with `v0.44`, the information regarding materials `PBR`, `unlit` can be recorded in glTF (symboled as `VRM_USE_GLTFSHADER`).

If these three materials are imported into unity, they will be turned into:

* `Standard`
* `UniGLTF/UniUnlit` [unlit]({{< relref "univrm_unlit.md" >}})
* `VRM/MToon` [mtoon]({{< relref "shader_mtoon.md" >}})

When exporting a VRM model, other `unlit` type shaders are also supported.  
The following table summarizes all the `shaders` used in the previous UniVRM versions:

| Shader                                    | glTF export                       | import           | comment                                                                                            |
|-------------------------------------------|-----------------------------------|------------------|----------------------------------------------------------------------------------------------------|
| Standard (Unity standard)                 | PBR                               | Standard         |                                                                                                    |
| UniGLTF/StandardVColor                    |                                   |                  | was removed in v0.xx.0. Please use UniUnlit instead                                                |
| Unlit/Color (Unity standard)              | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| Unlit/Texture (Unity standard)            | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| Unlit/Transparent (Unity standard)        | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| Unlit/Transparent Cutout (Unity standard) | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| UniGLTF/UniUnlit (VRMShaders)             | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| VRM/UnlitTexture (UniVRM)                 | KHR_materials_unlit               | UniGLTF/UniUnlit | was removed in v0.76.0. Please use UniUnlit instead                                                |
| VRM/UnlitTransparent (UniVRM)             | KHR_materials_unlit               | UniGLTF/UniUnlit | was removed in v0.76.0. Please use UniUnlit instead                                                |
| VRM/UnlitCutout (UniVRM)                  | KHR_materials_unlit               | UniGLTF/UniUnlit | was removed in v0.76.0. Please use UniUnlit instead                                                |
| VRM/UnlitTransparentZWrite (UniVRM)       | Not compatible with gltf          |                  | was removed in v0.76.0. Please use MToon instead.                                                  |
| VRM/MToon                                 | extensions.VRM.materialProperties | VRM/MToon        |                                                                                                    |
|                                           | VRMC_materials_mtoon              |                  | VRM 1.0's MToon (in development)                                                                   |

## Interchangeability between Unity and glTF
### Vertex Color

* `Unity Standard` does not support vertex color. `VRMShaders`'s UniUnlit supports vertex color.

### Multi-UV

* glTF can use multiple uv for any type of texture while Standard, UniUnlit and MToon do not support this feature.

## UPM Package

```json
// manifest.json
{
  "dependencies": {
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.76.0",
  }
}
```
