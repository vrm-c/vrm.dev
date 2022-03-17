---
weight: 3
aliases: [
    "/docs/univrm/gltf/gltf_about/", 
    "/docs/univrm/gltf/unigltf/", 
    "/docs/gltf/unigltf/",
    "/docs/gltf/scripted_importer/",
    "/docs/gltf/update/"
]
---

# glTF

[glTF™ (GL Transmission Format)](https://www.khronos.org/gltf/) は `OpenGL` の仕様策定をしている `KHRONOS` による3Dフォーマットです。
2017年にVersion2が策定されました。

* [glTF™ 2.0 Specification](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html)
* [github](https://github.com/KhronosGroup/glTF)

`VRM` は `glTF-2.0` をベースとしたフォーマットです。

## UniGLTF

`UniVRM` のパッケージに含まれる `UniGLTF` は、 `glTF` ファイルとバイナリ版の `glb` ファイルを読み書きできます。

|                              | UniGLTF | UniVRM |                             |
|------------------------------|---------|--------|-----------------------------|
| mesh(morph target, skinning) | ✅       | ✅      |                             |
| material(pbr)                | ✅       | ✅      |                             |
| material(unlit)              | ✅       | ✅      | KHR_materials_unlit 拡張    |
| material(MToon)              |         | ✅      |                             |
| animation                    | ✅       |        | VRMではサポートしていません |
| camera                       |         |        |                             |

```{figure} /_static/images/vrm/alicia_3dbuilder.png
:name: VRMのglTF部分を3D Builderで表示する

拡張子を `.vrm` から `.glb` に変えると、`gltf` 対応のアプリケーション(Windows 10標準搭載の3D Builderなど)でロードできます。
（ただしVRM独自の設定は反映されません)
```

```{toctree}
:maxdepth: 1
glb_import
glb_export
animation_exporter
emission_glow
mesh_utility
```
