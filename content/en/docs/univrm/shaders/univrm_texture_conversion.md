---
title: "Texture Conversion"
date: 2020-08-03T10:39:04+09:00
weight: 5
url: "univrm/shaders/univrm_texture_conversion/"
---

Since the texture specifications between Unity and GLTF are not interchangeable, we use UniVRM's `export/import` to convert textures between Unity and GLTF. 

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
