---
title: v0.66からv0.79の変更点
weight: 1
tags: ["gltf"]
---

`glTF` 部分の `UniVRM-0.66` からの主な更新点です。

## ScriptedImporter の採用

`glb`

* UIの変更
* SubAssetsの挙動変更
* `ForceText` 時の動作が軽快に

[ScriptedImporter]({{< relref "scripted_importer" >}})

### 反転軸オプション追加

`glb`

* https://github.com/vrm-c/UniVRM/pull/755
* https://github.com/vrm-c/UniVRM/pull/958

* Exporter
* RuntimeImport
* EditorImport

## Material関連
### Smoothness(glTF) と Roughness(Unity) の変換ロジックを修正

`pbr`

* https://github.com/vrm-c/UniVRM/issues/388

### Import/Export時に MetallicRoughnessOcclusion テクスチャーを一枚にまとめる

`pbr`

* https://github.com/vrm-c/UniVRM/issues/781

### MipMap のインポート設定を修正

`pbr`, `mtoon` 法線マップに影響が出やすい

* https://github.com/vrm-c/UniVRM/issues/947
