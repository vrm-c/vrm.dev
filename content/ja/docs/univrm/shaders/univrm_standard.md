---
title: "Standard"
weight: 3
tags: ["material"]
url: "univrm/shaders/standard/"
---

## Standard

Unityの[デフォルト](https://docs.unity3d.com/ja/2019.3/Manual/StandardShaderMaterialParameters.html)でGLTF標準のPBRマテリアルとほぼ互換性があります。

| Unityのデフォルト        | GLTFのPBRマテリアル                                       |
|:------------------------|:---------------------------------------------------------|
| Albedo カラー            | /materials/pbrMetallicRoughness/baseColorFactor          |
| Albedo テクスチャ        | /materials/pbrMetallicRoughness/baseColorTexture         |
| Metallic レベル          | /materials/pbrMetallicRoughness/metallicFactor           |
| Smoothness レベル        | 1.0f - (/materials/pbrMetallicRoughness/roughnessFactor) |
| Metallic テクスチャ      | /materials/pbrMetallicRoughness/metallicRoughnessTexture |
| 法線マップ               | /materials/normalTexture                                 |
| バンプスケール           | /materials/normalTexture/scale                           |
| ハイトマップ             | N/A                                                      |
| オクルージョンテクスチャ  | /materials/occlusionTexture                              |
| オクルージョン強度       | /materials/occlusionTexture/strength                     |
| Emission カラー         | /materials/emissiveFactor                                |
| Emission テクスチャ      | /materials/emissiveTexture                               |
| 詳細マスク               | N/A                                                      |
| セカンダリマップ         | N/A                                                      |
| レンダリングモード       | /materials/alphaMode                                      |

UniVRMのマテリアルインポートに関して、roughnessFactor値はMetallicテクスチャにベイクされる。マテリアルエクスポートではsmoothness値はMetallicテクスチャにベイクされる[[参照]](https://github.com/vrm-c/UniVRM/pull/222)。

Unity と GLTF でテクスチャーの仕様に非互換があるので、 `export/import` で変換しています。

## テクスチャ変換

Standardシェーダーのカラー以外のテクスチャ(Linear)の処理について。

* ノーマルマップの修正。MToonと共通なので次項で説明します
    * Materialのプロパティ名 `_BumpMap` で判定します。
    * EditorImport: `TextureImporterType.NormalMap`
    * RuntimeImport: 法線テクスチャのPack
    * Export: 法線テクスチャのUnpack
    * sRGBとLinearの対応
    * Tangentの対応

* Metallic, Roughnes, OcclusionMapの変換
    * RGBAチャンネル組み換え
    * Roughness値とSmoothness値の反転
    * sRGBとLinearの対応
    * Importerで変換、Exporterで逆変換

## トラブルシューティング

* ピカピカに反射してしまう。
    * Shaderの種類が `Standard` (Unityの標準) で `metallic` と `smooth` 値が高い状態になっています。 マテリアルのシェーダーを `Unlit/UniUnlit` にするとテクスチャがそのまま表示できます。
