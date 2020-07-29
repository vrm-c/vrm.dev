---
title: "VRMShaders"
date: 2020-07-29
weight: 4
---

`UniVRM-0.56` からフォルダ構成を変更して、
`UniVRM` のマテリアル関連の機能は、 `Assets/VRMShaders` に移動しました。

## UPM パッケージ

パッケージとして独立して、 `UniVRM` とは関係なくマテリアル関連だけ単体で使うことできます。
( `UniVRM` が `VRMShaders` を使う関係)。
`UniUnlit` と `MToon` を内包しています。

```json
// manifest.json 抜粋
{
  "dependencies": {
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.57.0",
  }
}
```

`#0.57.0` 部分で UniVRM のリリース番号(github の tag)を指定します。
`VRMShaders` は `VRM` と同じリリース番号を適用する運用をしています。

### UniUnlit

GLTF の一部の機能が、Unity組み込みの `unlit` 系シェーダーでは表現できないもの(頂点カラーなど)があるので用意しました。
Unity組み込みの `unlit` 系シェーダーと違い、これひとつですべての `unlit` を表現できます。

unlit系シェーダーは、export して import すると `UniGLTF/UniUnlit` に変わります。
UniVRMが `unlit` 系でサポートするシェーダーは下記のとおりです。

| export                   | gltf                | import           |
|--------------------------|---------------------|------------------|
| Unlit/Color              | KHR_materials_unlit | UniGLTF/UniUnlit |
| Unlit/Texture            | KHR_materials_unlit | UniGLTF/UniUnlit |
| Unlit/Transparent        | KHR_materials_unlit | UniGLTF/UniUnlit |
| Unlit/Transparent Cutout | KHR_materials_unlit | UniGLTF/UniUnlit |
| UniGLTF/UniUnlit         | KHR_materials_unlit | UniGLTF/UniUnlit |

### MToon

https://github.com/Santarh/MToon

で開発しています。
git submodule で、VRMShaders 配下になるようにしています。

https://github.com/vrm-c/UniVRM/tree/master/Assets/VRMShaders
