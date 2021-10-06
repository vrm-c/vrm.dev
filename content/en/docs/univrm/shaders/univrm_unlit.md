---
title: "UniUnlit"
date: 2020-08-03
weight: 1
tags: ["unity"]
---

Probably `UnLighting` for short `Unlit`

## Unlit

It is saved as a glTF [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_unlit) extension.

## Shaders that can be exported as Unlit in Unity

| Function                   | color | texture | vertex_color | alpha / cutout | no culling |
|----------------------------|-------|---------|--------------|----------------|------------|
| glTF                       | ✅     | ✅       | ✅            | ✅              | ✅          |
| UniGLTF / UniUnlit         | ✅     | ✅       | ✅            | ✅              | ✅          |
| Unlit / Color              | ✅     |         |              |                |            |
| Unlit / Texture            |       | ✅       |              |                |            |
| Unlit / Transparent        |       | ✅       |              | blend          |            |
| Unlit / Transparent Cutout |       | ✅       |              | cutout         |            |

{{% alert title = "vertex color" color = "warning"%}}

Only `UniGLTF / UniUnlit` supports vertex colors.

* Mesh contains vertex colors
* Material is a `Unlit`

In some cases, importing will apply the vertex color.
If you apply Unity's `unlit` system material to a model that does not require vertex color and export it,
The next time you import, the colors may change unintentionally.
In this case, you can export `Mesh` without vertex colors by enabling` RemoveVertexColor` at the time of export.

{{% / alert%}}
