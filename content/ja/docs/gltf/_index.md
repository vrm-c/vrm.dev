---
title: "glTF"
weight: 3
aliases: [
    "/docs/univrm/gltf/gltf_about/", 
    "/docs/univrm/gltf/unigltf/", 
    "/docs/gltf/unigltf/",
    "/docs/gltf/scripted_importer/",
    "/docs/gltf/update/"
]
---

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

* `KHR_materials_unlit` の読み書き
    * unityの unlit 系マテリアルのエクスポート
    * VRMShadersの [UniUnlit]({{< relref "univrm_unlit.md" >}}) shader としてのインポート
* `KHR_texture_transform` の読み書き
* morphTarget(blendShape)の名前を `/meshes/*/primitives/*/extras/targetNames`, `/meshes/*/extras/targetNames` に読み書きする

{{% alert title="VRMのglTF部分を3D Builderで表示する" color="warning" %}}

{{< img width=400 src="images/vrm/alicia_3dbuilder.png" >}}

～.vrmとなっているファイル拡張子を ～.glb に変更すると、**Windows 10標準搭載の3D Builderなどの gltf対応アプリケーションで読み込み確認することができます**（ただしVRM独自の設定は反映されません)。

{{% /alert %}}
