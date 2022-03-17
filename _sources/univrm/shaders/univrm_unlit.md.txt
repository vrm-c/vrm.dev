---
date: 2020-08-03
weight: 1
tags: ["unity"]
---

# UniUnlit

おそらく `UnLighting` 略して `Unlit`

## Unlit

glTF の [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_unlit) 拡張として保存されます。

## Unity で Unlit としてエクスポート可能なシェーダー

| 機能                     | color | texture | vertex_color | alpha/cutout | no culling |
|--------------------------|-------|---------|--------------|--------------|------------|
| glTF                     | ✅     | ✅       | ✅            | ✅            | ✅          |
| UniGLTF/UniUnlit         | ✅     | ✅       | ✅            | ✅            | ✅          |
| Unlit/Color              | ✅     |         |              |              |            |
| Unlit/Texture            |       | ✅       |              |              |            |
| Unlit/Transparent        |       | ✅       |              | blend        |            |
| Unlit/Transparent Cutout |       | ✅       |              | cutout       |            |

```{admonition} 頂点カラー
:class: warning



`UniGLTF/UniUnlit` だけが頂点カラーをサポートしています。

* Meshに頂点カラーが含まれている
* Materialが `Unlit` 判定である

場合に、import すると頂点カラーが適用されます。
頂点カラーが不要であるモデルに、Unity の `unlit` 系マテリアルを適用してエクスポートすると、
次にインポートするときに意図せずに色が変わる場合があります。
この場合、エクスポート時に `RemoveVertexColor` を有効にすることで、頂点カラーを含まない `Mesh` をエクスポートすることができます。


```

