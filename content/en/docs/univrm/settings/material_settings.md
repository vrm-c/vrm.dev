---
title: Material-Settings
url: "/en/univrm/settings/material_settings/"
---

About material settings:

## Troubleshooting

* The issue of causing glossy reflections:
    * It occurs when the shader type is `Standard` (Unity standard) and the values of `metallic` and `smooth` are high. If you set the material's shader to `Unlit / UniUnlit`, the texture can be displayed as it supposes to be.
    * When an unknown shader is selected (not supported by `VRM`), the shader is defaulted to Standard shader and it may result in glossy reflections. If you set the material's shader to `Unlit / UniUnlit`, the texture can be displayed as it supposes to be.

## Standard Shader
Unity's standard shader is compatible with GLTF's standard PBR shader.

`WIP`

## Unlit Type Shader
The unlit type shaders `Unlit / Color`, `Unlit / Texture`, `Unlit / Transparent`, and `Unilt / Transparent Cutout` are built-in shaders in Unity.
In GLTF, they are supported by the `KHR_material_unlit` extension.

In GLTF, you can utilize `doubleSided`, the multiplication of `Texture` and `Color`, `VertexColor` and the alpha mode of `color`. However, there is no shader that can handle these features on Unity side.
In order to bring in this features, we have added the shader `UniGLTF / Unlit` in Unity (v0.44).

`WIP`

## MToon Shader
* https://www.slideshare.net/VirtualCast/vrm-mtoon (written in Japanese)
* [MToon Shader](../../../../univrm/shaders/mtoon/)
