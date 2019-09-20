---
title: UniVRM-0.44 Material
linkTitle: v0.44
date: 2018-10-05T16:30:00+09:00
lastmod: 2019-09-20T13:00:00Z
url: /univrm/shaders/0.44/
weight: 1
aliases:
- /en/univrm/shaders/univrm_shaders_044/
---

Material-related fixes and additions in UniVRM-0.44.

## Introduction of UniGLTF / UniUnlit shader

UniVRM-0.43 was capable of importing / exporting the following Unlit shaders:

- Unlit/Color
- Unlit/Texture, VRM/UnlitTexture
- Unlit/Transparent, VRM/UnlitTransparent
- Unlit/Transparent Coutout, VRM/UnlitCutout
- VRM/UnlitTransparentZWrite (not compatible with GLTF)

The following materials that are set with GLTF were not functional:

- doubleSided
- the multiplication of color and texture
- transparent with color
- vertex color

Hence, we introduced the GLTF-compatible Unlit shader `UniGLTF / UnLit`:

- RenderType: `Opaque`, `Cutout`, `Transparent`, `TransparentZWrite` (VRM extension)
- CullMode: `Off` (doubleSided=True), `Back` (doublueSided=False), `Front` (VRM extension)
- VertexColorBlend: `None`, `Multiply`

## Improvement of texture conversion of Standard shaders

The processing of textures other than Standard shader color has been improved.

- Normal map correction: Since it is also applied to MToon, we put the details in the next section
- Metallic, Roughnes, OcclusionMap conversion
    - RGBA channel recombination
    - Inversion of Roughness and Smoothness values
    - sRGB's and Linear's correspondence
    - Conversion with Importer, reverse conversion with Exporter

## Correction of normal map import / export 

The texture of `Standard` and `MToon`. Parse material's property name according to `_BumpMap`.

- EditorImport: `TextureImporterType.NormalMap`
- RuntimeImport: Normal texture's Pack
- Export: Normal texture's Unpack
- sRGB's and Linear's correspondence
- Tangent's correspondence
