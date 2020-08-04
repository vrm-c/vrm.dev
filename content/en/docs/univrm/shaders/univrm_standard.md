---
title: "Standard"
tags: ["material"]
weight: 3
aliases: ["/univrm/shaders/material_settings/"]
---

## Standard

The majority of [material parameters](https://docs.unity3d.com/Manual/StandardShaderMaterialParameters.html) in Unity's standard shader are compatible with GLTF PBR materials:

| Unity Standard      | GLTF PBR                                                 |
|:--------------------|:---------------------------------------------------------|
| Albedo Color        | /materials/pbrMetallicRoughness/baseColorFactor          |
| Albedo Texture      | /materials/pbrMetallicRoughness/baseColorTexture         |
| Metallic Level      | /materials/pbrMetallicRoughness/metallicFactor           |
| Smoothness Level    | 1.0f - (/materials/pbrMetallicRoughness/roughnessFactor) |
| Metallic Texture    | /materials/pbrMetallicRoughness/metallicRoughnessTexture |
| Normal Map          | /materials/normalTexture                                 |
| Bump scale          | /materials/normalTexture/scale                           |
| Height Map          | N/A                                                      |
| Occlusion Texture   | /materials/occlusionTexture                              |
| Occlusion Strength  | /materials/occlusionTexture/strength                     |
| Emission Color      | /materials/emissiveFactor                                |
| Emission Texture    | /materials/emissiveTexture                               |
| Detail Mask         | N/A                                                      |
| Secondary Maps      | N/A                                                      |
| Rendering Mode      | /materials/alphaMode                                     |

For UniVRM's material import, the roughnessFactor value is baked into the Metallic Texture. For material export, the smoothness value is baked into the Metallic Texture ([discussion](https://github.com/vrm-c/UniVRM/pull/222)).

Since part of the texture specifications between Unity and GLTF are not interchangeable, we use UniVRM's `export/import` to convert textures between Unity and GLTF. 

## Improvement: StandardShader's Texture Conversion

The processing of textures other than color texture type has been improved.

* NormalMap's import/export correction: since this fix is also applied to MToon shader, we put the details in the next section
* Metallic, Roughness, OcclusionMap conversion:
    * RGBA channel recombination
    * The relative relation between Roughness value and Smoothness value
    * Support sRGB and Linear
    * Convert Texture by Importer, reverse conversion on Texture by Exporter

## Correction: NormalMap's Import/Export

Target for the textures of `Standard` and `MToon`.
Normal map can be identified by the keyword `_BumpMap` in the material property.

* EditorImport: `TextureImporterType.NormalMap`
* RuntimeImport: pack normal texture
* Export: unpack normal texture
* Support sRGB and Linear 
* Support Tangent

## Troubleshooting

* The issue of causing glossy reflections:
    * It occurs when the shader type is `Standard` (Unity standard) and the values of `metallic` and `smooth` are high. If you set the material's shader to `Unlit/UniUnlit`, the texture can be displayed as it supposes to be.
    * When an unknown shader is selected (not supported by `VRM`), the shader is defaulted to Standard shader and it may result in glossy reflections. If you set the material's shader to `Unlit/UniUnlit`, the texture can be displayed as it supposes to be.
