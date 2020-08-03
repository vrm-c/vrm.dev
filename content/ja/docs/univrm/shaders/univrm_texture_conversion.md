---
title: "テクスチャー変換"
date: 2020-07-29
weight: 5
url: "univrm/shaders/univrm_texture_conversion/"
---

Unity と GLTF でテクスチャーの仕様に非互換があるので、 `export/import` で変換しています。

## Standardシェーダーのテクスチャ変換の改善

Standardシェーダーのカラー以外のテクスチャの処理を改善しました。

* ノーマルマップの修正。MToonと共通なので次項で説明します
* Metallic, Roughnes, OcclusionMapの変換
    * RGBAチャンネル組み換え
    * Roughness値とSmoothness値の反転
    * sRGBとLinearの対応
    * Importerで変換、Exporterで逆変換

## ノーマルマップのインポート・エクスポートの修正

`Standard` と `MToon` のテクスチャです。
Materialのプロパティ名 `_BumpMap` で判定します。

* EditorImport: `TextureImporterType.NormalMap`
* RuntimeImport: 法線テクスチャのPack
* Export: 法線テクスチャのUnpack
* sRGBとLinearの対応
* Tangentの対応
