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

|                              | UniGLTF | UniVRM |                                 |
|------------------------------|---------|--------|---------------------------------|
| mesh(morph target, skinning) | ✅      | ✅     |                                 |
| material(pbr)                | ✅      | ✅     |                                 |
| material(unlit)              | ✅      | ✅     | KHR_materials_unlit 拡張        |
| material(MToon)              |         | ✅     |                                 |
| animation                    | ✅      |        | VRMではサポートしていません     |
| camera                       |         |        | UniGLTFではサポートしていません |

```{figure} /_static/images/vrm/alicia_3dbuilder.png
:name: VRMのglTF部分を3D Builderで表示する

拡張子を `.vrm` から `.glb` に変えると、`gltf` 対応のアプリケーション(Windows 10標準搭載の3D Builderなど)でロードできます。
（ただしVRM独自の設定は反映されません)
```

## UniGLTFの全体設定

`Edit - Preferences - UniGLTF`

```{figure} unigltf_preference.jpg
```

### Lang

Editor 表示/メッセージの言語切り替え

### Default invert axis 

glTF は右手座標系であるのに対して Unity は左手座標系です。
import / export 時に座標を変換する必要があります。
2つの選択肢が有り、Z軸反転、 X軸反転を選択できます。
歴史的理由(vrm-0.x がZ軸反転)により、初期値は `Z軸反転` です。

### Enable zip importer that contains gltf

zip アーカイブの中に gltf が入っている場合に import できるようにします。
実験的な機能です。

```{toctree}
:maxdepth: 1
glb_import
glb_export
animation_exporter
emission_glow
mesh_utility
```

