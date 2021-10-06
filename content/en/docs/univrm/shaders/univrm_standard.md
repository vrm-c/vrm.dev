---
title: "Standard"
tags: ["detail"]
weight: 2
aliases: ["/en/univrm/shaders/material_settings/"]
---

`Physically Based Rendering`

## Standard Shader

`UniVRM` uses Unity's standard` Standard shader` instead of creating your own shader for PBR.

{{% alert title = "Reflects shiny" color = "warning"%}}

The Shader type is `Standard` (Unity standard) and the `metallic` and `smooth` values ​​are high.
If you set the material shader to `Unlit/UniUnlit`, the texture can be displayed as it is.

{{% / alert%}}

## Correspondence table of Metallic, Roughness, Occlusion

| Applications | glTF material                                 |   |   | Unity Standard Shader                          |
|:-------------|:----------------------------------------------|---|:--|------------------------------------------------|
| Occlusion    | occlusionTexture                              | R | G | _MetallicGlossMap                              |
| Roughness    | pbrMetallicRoughness.metallicRoughnessTexture | G | A | _MetallicGlossMap (smoothness = 1 - roughness) |
| Metallic     | pbrMetallicRoughness.metallicRoughnessTexture | B | R | _OcclusionMap                                  |

{{% alert title="MetallicSmoothOcclusion Combine textures into one  `v0.69.0`" color="warning" %}}

From `v0.69.0`, it works to combine textures into one sheet.

* import: The metallicRoughnessTexture and occlusionTexture of glTF are combined into one (see the table above).
* export: Standard _MetallicGlossMap and _OcclusionMap are combined into one (see the table above).

`v0.68.0` or earlier

* import: Convert and import two textures, one for _MetallicGlossMap and one for _OcclusionMap
* export: Convert two textures from Standard's _MetallicGlossMap and _OcclusionMap and export

{{% /alert %}}