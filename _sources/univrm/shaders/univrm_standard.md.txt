---
weight: 2
tags: ["detail"]
aliases: ["/univrm/shaders/standard/"]
---

# Standard

`Physically Based Rendering`

## Standard シェーダー

`UniVRM` は PBR 向けのシェーダーを独自に作成せずに Unity 標準の `Standard シェーダー` を使います。

```{admonition} ピカピカに反射してしまう
:class: warning

Shaderの種類が `Standard` (Unityの標準) で `metallic` と `smooth` 値が高い状態になっています。 
マテリアルのシェーダーを `Unlit/UniUnlit` にするとテクスチャがそのまま表示できます。
```

## Metallic, Roughness, Occlusion の対応表

| 用途      | glTF material                                 |   |   | Unity Standard Shader                          |
|:----------|:----------------------------------------------|---|:--|------------------------------------------------|
| Occlusion | occlusionTexture                              | R | G | _MetallicGlossMap                              |
| Roughness | pbrMetallicRoughness.metallicRoughnessTexture | G | A | _MetallicGlossMap (smoothness = 1 - roughness) |
| Metallic  | pbrMetallicRoughness.metallicRoughnessTexture | B | R | _OcclusionMap                                  |

```{admonition} MetallicSmoothOcclusionテクスチャを１枚にまとめる v0.69.0
:class: warning

`v0.69.0` からテクスチャーを１枚にまとめる動作をします。

* import: glTFの metallicRoughnessTexture と occlusionTexture を１枚にまとめます(上表参照)
* export: Standard の _MetallicGlossMap と _OcclusionMap を1枚にまとめます(上表参照)

`v0.68.0` 以前

* import: _MetallicGlossMap 用と _OcclusionMap 用の２枚のテクスチャを変換して Import
* export: Standard の _MetallicGlossMap と _OcclusionMap から２枚のテクスチャを変換して Export
```
