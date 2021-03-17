---
title: "Texture Import"
date: 2021-03-17T11:10:12+09:00
---

Work in progress

## Texture Conversion for Unity's Standard Shader

RGB channel conversion between glTF's material (PBR) and Unity Standard Shader:

| Texture Type | glTF                                                                | Unity                                  |
|:----------|:-----------------------------------------------------------------------|:---------------------------------------|
| Occlusion | materials[*].occlusionTexture's R channel                              | G channel                              |
| Roughness | materials[*].pbrMetallicRoughness.metallicRoughnessTexture's G channel | A channel (smoothness = 1 - roughness) |
| Metallic  | materials[*].pbrMetallicRoughness.metallicRoughnessTexture's B channel | R channel                              |

The texture conversion described above can be done with `UniGLTF` import.

### glTF

* https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#materialocclusiontexture

> The occlusion values are sampled from the R channel

* https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#pbrmetallicroughnessmetallicroughnesstexture

> The metalness values are sampled from the B channel. The roughness values are sampled from the G channel

### Unity

* https://docs.unity3d.com/Manual/StandardShaderMaterialParameterMetallic.html

> the Metallic levels for the material are controlled by the values in the Red channel of the texture
> the Smoothness levels for the material are controlled by the Alpha channel of the texture

* https://docs.unity3d.com/Manual/StandardShaderMaterialParameterOcclusionMap.html

### `MetallicRoughness` Texture

* glTF's Metallic => Blue
* glTF's Roughness => Green

https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/material.pbrMetallicRoughness.schema.json#L45

> The metalness values are sampled from the B channel. The roughness values are sampled from the G channel.

* Unity's Standard(Metallic Alpha) Metallic => Alpha
* Unity's Standard(Metallic Alpha) Smooth => Red
