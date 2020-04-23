---
title: Material Import Export
url: "/dev/univrm-0.xx/gltf/material_export_import/"
---

|エクスポート     |VRM/GLTFファイルに記録される内容    |GLTFアプリの見え方 |VRMインポートなど|
|----------------|----------------------------------|------------------|------------|
|Stanard         |GLTF Material                     |pbr               |Standard
|Unlit/Color     |GLTF Material + unlit拡張|unilt拡張(unlit拡張に対応していない場合Standardとして見える)|UniGLTF/UniUnlit|
|Unlit/Texture    |GLTF Material + unlit拡張|unilt拡張(unlit拡張に対応していない場合Standardとして見える)|UniGLTF/UniUnlit|
|Unlit/Transparent|GLTF Material + unlit拡張|unilt拡張(unlit拡張に対応していない場合Standardとして見える)|UniGLTF/UniUnlit|
|Unlit/TransparentCutout|GLTF Material + unlit拡張|unilt拡張(unlit拡張に対応していない場合Standardとして見える)|UniGLTF/UniUnlit|
|VRM/UnlitTransparentZWrite|VRMマテリアル + GLTF Material|unilt拡張(unlit拡張に対応していない場合Standardとして見える。通常のTransparentとして処理)|VRM/UnlitTransparentZWrite|
|VRM/MToon|VRMマテリアル + GLTF Material|unilt拡張(unlit拡張に対応していない場合Standardとして見える|VRMマテリアル + GLTF Material    |△(Standardとして見える)|Standard(0.43以前はunlit。gltfに準拠するため修正)|

GLTFのunlit拡張は、KHR_material_unlit です。