---
title: "Export Import"
date: 2020-08-03T10:39:04+09:00
weight: 4
tags: ["material"]
aliases: ["/univrm/shaders/univrm_material_shader/"]
---

## Export

### GLTF Layer

The information is recorded in gltf's `/materials[]`.

Only support the following two types:

* PBR (default) 
* Unlit (KHR_materials_unlit extension) 

#### Details

If the material is one of the shaders in the following list, add `KHR_materials_unlit` extension.

* Unlit/Color (Unity default)
* Unlit/Texture (Unity default)
* Unlit/Transparent (Unity default)
* Unlit/Transparent Cutout (Unity default)
* UniGLTF/UniUnlit (UniVRM)
* VRM/UnlitTexture (UniVRM)
* VRM/UnlitTransparent (UniVRM)
* VRM/UnlitCutout (UniVRM)

### VRM Layer

The information is recorded in gltf's `/extensions/VRM/materialProperties[]`.

Available shaders in VRM Layer:

* VRM/UnlitTransparentZWrite
* VRM/MToon

Other shaders will be set as `VRM_USE_GLTFSHADER` in `shaderName`.

## Import

### GLTF Layer

Create Unity material from GLTF's `/materials[]`.
If `KHR_materials_unlit` extension is found, the material `UniGLTF/UniUnlit` is created.

[UniUnlit]({{< relref "univrm_vrmshaders.md" >}}#uniunlit)

### VRM Layer

Create Unity material from GLTF's `/extensions/VRM/materialProperties[]`.
If `shaderName` is `VRM_USE_GLTFSHADER`, use the information recorded in `/materials[]` and process as `GLTF`'s `PBR` or `Unlit`.

## Shader Change

The shader may be changed after export/import:

* if unsupported shaders are imported, they will be changed to `Standard`. GLTF's `PBR` will be set to `Standard` due to the majority of the properties are compatible
* if shaders are unlit type, they will be [UniGLTF/UniUnlit]({{< relref "univrm_unlit.md" >}}) (this is the normal conversion).

## VRM_USE_GLTFSHADER

The information is recorded in:

`/extensions/VRM/materialProperties[]`

Supported Shaders:

* VRM/MToon

Currently VRM supported shaders are  `PBR(Standard)`, `Unlit`, `MToon`.
