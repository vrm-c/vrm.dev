---
title: "UniVRM-0.44のマテリアル"
date: 2018-10-05T16:30:00+09:00
---

UniVRM-0.44でマテリアル関連の修正と追加があります。

## UniGLTF/UniUnlitシェーダーの導入
UniVRM-0.43は以下のUnlitシェーダーのインポート・エクスポートに対応していました。

* Unlit/Color
* Unlit/Texture, VRM/UnlitTexture
* Unlit/Transparent, VRM/UnlitTransparent
* Unlit/Transparent Coutout, VRM/UnlitCutout
* VRM/UnlitTransparentZWrite(GLTF非互換)

GLTFで設定可能な次のようなマテリアルを表現することができませんでした。

* doubleSided
* colorとtextureの乗算
* colorでtransparent
* vertex color

GLTF互換のUnlitシェーダー `UniGLTF/UnLit` を導入しました。

* RenderType: `Opaque`, `Cutout`, `Transparent`, `TransparentZWrite`(VRM拡張)
* CullMode: `Off`(doubleSided=True), `Back`(doublueSided=False), `Front`(VRM拡張)
* VertexColorBlend: `None`, `Multiply`

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
