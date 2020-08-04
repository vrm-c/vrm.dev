---
title: "UniUnlit"
date: 2020-08-03
weight: 2
tags: ["material"]
---

## `UniGLTF/UniUnlit` shader

Since part of GLTF properties are not available in Unity's `unlit` shaders (e.g. vertex color), we introduced `UniUnlit` to solve this issue. In addition, `UniUnlit` is fully compatible with all `unlit` shaders in Unity.

Unity's `unlit` shaders will become `UniGLTF/UniUnlit` if they are exported, and then imported again. 

| export                   | gltf                | import           |
|--------------------------|---------------------|------------------|
| Unlit/Color              | KHR_materials_unlit | UniGLTF/UniUnlit |
| Unlit/Texture            | KHR_materials_unlit | UniGLTF/UniUnlit |
| Unlit/Transparent        | KHR_materials_unlit | UniGLTF/UniUnlit |
| Unlit/Transparent Cutout | KHR_materials_unlit | UniGLTF/UniUnlit |
| UniGLTF/UniUnlit         | KHR_materials_unlit | UniGLTF/UniUnlit |
