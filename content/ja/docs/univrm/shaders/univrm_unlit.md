---
title: "UniUnlit"
date: 2020-08-03
weight: 2
tags: ["material"]
---

## `UniGLTF/UniUnlit` シェーダー

Unity の `Unlit` 系シェーダーは、機能ごとに

* Unlit/Color
* Unlit/Texture
* Unlit/Transparent
* Unlit/Transparent Cutout

のように分かれています。

また、`GLTF` では設定可能なのだけど、標準の `Unlit` 系シェーダーでは再現できない組み合わせがあります。

* `Texture` かつ `Color` の乗算
* 頂点カラー

これらを解決する、統一 `unlit` シェーダーとして `UniGLTF/UniUnlit` があります。

`UniVRM` で、`GLTF` で `Unlit` 設定のマテリアルをインポートすると、
すべて `UniGLTF/UniUnlit` 使うようになります。

エクスポートしてからインポートする場合の対応表。

| export                     | gltf                                 | import                     |
|----------------------------|--------------------------------------|----------------------------|
| Unlit/Color                | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Unlit/Texture              | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Unlit/Transparent          | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| Unlit/Transparent Cutout   | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitTexture           | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitTransparent       | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| VRM/UnlitCutout            | KHR_materials_unlit                  | UniGLTF/UniUnlit           |
| UniGLTF/UniUnlit           | KHR_materials_unlit                  | UniGLTF/UniUnlit           |

なお、UniVRM がサポートするシェーダーの中で、`UniGLTF/UniUnlit` だけが頂点カラーをサポートしています。

* Meshに頂点カラーが含まれている
* Materialが `Unlit` 判定である

場合に、import すると頂点カラーが適用されます。
頂点カラーが不要であるモデルに、Unity の `unlit` 系マテリアルを適用してエクスポートすると、
次にインポートするときに意図せずに色が変わる場合があります。
この場合、エクスポート時に `RemoveVertexColor` を有効にすることで、頂点カラーを含まない `Mesh` をエクスポートすることができます。

## GLTF

| UniUnlit            | GLTF Unlit                                               |
|:--------------------|:---------------------------------------------------------|
| カラーファクター     | /materials/pbrMetallicRoughness/baseColorFactor          |
| カラーテクスチャ    | /materials/pbrMetallicRoughness/baseColorTexture          |
| レンダリングモード   | /materials/alphaMode                                     |
| カリングモード       | /materials/doubleSided                                   |
