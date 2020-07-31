---
title: Material-Settings
---

About material settings:

## Troubleshooting

* The issue of causing glossy reflections:
    * It occurs when the shader type is `Standard` (Unity standard) and the values of `metallic` and `smooth` are high. If you set the material's shader to `Unlit/UniUnlit`, the texture can be displayed as it supposes to be.
    * When an unknown shader is selected (not supported by `VRM`), the shader is defaulted to Standard shader and it may result in glossy reflections. If you set the material's shader to `Unlit/UniUnlit`, the texture can be displayed as it supposes to be.

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

## Unlit
Unity has Unlit type shader such as `Unlit/Color`, `Unlit/Texture`, `Unlit/Transparent`, and `Unlit/Transparent Cutout`. For GLTF, unlit is supported by `KHR_materials_unlit` extension.

In GLTF, you can utilize `doubleSided`, the product of `Texture`, `Color` and `VertexColor` (if any), and `color`'s alpha mode. Given that there is no shader that can handle these features on Unity side, we introduce `UniGLTF/Unlit` in Unity (v0.44).

| UniUnlit            | GLTF Unlit                                               |
|:--------------------|:---------------------------------------------------------|
| Color Factor        | /materials/pbrMetallicRoughness/baseColorFactor          |
| Color Texture       | /materials/pbrMetallicRoughness/baseColorTexture         |
| Rendering Mode      | /materials/alphaMode                                     |
| Cull Mode           | /materials/doubleSided                                   |

Note that when `KHR_materials_unlit` is declared, core PBR properties are ignored except baseColor. Color values, alpha coverage and double sided will still apply to unlit materials.

## MToon
* https://www.slideshare.net/VirtualCast/vrm-mtoon (written in Japanese)
*[MToon Shader]({{< relref "mtoon.md" >}})  
