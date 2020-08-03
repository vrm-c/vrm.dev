---
title: マテリアル設定
---

## トラブルシューティング

* ピカピカに反射してしまう。
    * Shaderの種類が `Standard` (Unityの標準) で `metallic` と `smooth` 値が高い状態になっています。 マテリアルのシェーダーを `Unlit/UniUnlit` にするとテクスチャがそのまま表示できます。
    * Shaderの種類が、`VRM` のサポートしてないシェーダーになっています。サポート外シェーダーロード時は `Standard` として処理する関係でピカピカに反射する場合があります。マテリアルのシェーダーを `Unlit/UniUnlit` にするとテクスチャがそのまま表示できます。

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

## Unlit系
Unityでは、`Unlit/Color`, `Unlit/Texture`, `Unlit/Transparent`, `Unlit/Transparent Cutout` があります。
GLTFでは、 `KHR_materials_unlit` 拡張でサポートしています。

GLTFでは、`doubleSided`、`Texture`と`Color`の乗算、`VertexColor`, `Color` のアルファモードが表現できますが Unityでは対応するシェーダーがありませんでした。
まとめて対応するために `UniGLTF/Unlit` シェーダーを追加しました(v0.44)。

| UniUnlit            | GLTF Unlit                                               |
|:--------------------|:---------------------------------------------------------|
| カラーファクター     | /materials/pbrMetallicRoughness/baseColorFactor          |
| カラーテクスチャ    | /materials/pbrMetallicRoughness/baseColorTexture          |
| レンダリングモード   | /materials/alphaMode                                     |
| カリングモード       | /materials/doubleSided                                   |

`KHR_materials_unlit`を宣言されているの場合は、コアPBRプロパティは無視されます（baseColorを除く）。色の値、アルファと両面プロパティはまだUnlitマテリアルに適用されます。

## MToon
* https://www.slideshare.net/VirtualCast/vrm-mtoon
*[MToon Shader]({{< relref "mtoon.md" >}})  
