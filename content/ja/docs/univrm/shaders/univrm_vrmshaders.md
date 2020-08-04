---
title: "VRMShaders UPMパッケージ"
date: 2020-07-29
weight: 8
tags: ["material", "upm"]
aliases: ["/univrm/shaders/univrm_vrmshaders/"]
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

[unlit]({{< relref "univrm_unlit.md" >}})

### MToon

https://github.com/Santarh/MToon

で開発しています。
git submodule で、VRMShaders 配下になるようにしています。

https://github.com/vrm-c/UniVRM/tree/master/Assets/VRMShaders

[mtoon]({{< relref "mtoon.md" >}})
