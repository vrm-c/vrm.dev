---
title: "Export Import"
date: 2020-07-29
weight: 4
tags: ["material"]
---

## エクスポート

### GLTF レイヤー

gltf の `/materials[]` に記録します。

* PBR(default) 
* Unlit(KHR_materials_unlit extension) 

の２種類のみをサポートしています。

#### 詳細

`standard` と見做して処理します。

Unityマテリアルが以下の何れかのシェーダーである場合に、
`KHR_materials_unlit` extension を追加します。

* Unlit/Color(Unity標準)
* Unlit/Texture(Unity標準)
* Unlit/Transparent(Unity標準)
* Unlit/Transparent Cutout(Unity標準)
* UniGLTF/UniUnlit(UniVRM)
* VRM/UnlitTexture(UniVRM)
* VRM/UnlitTransparent(UniVRM)
* VRM/UnlitCutout(UniVRM)

### VRM レイヤー

gltf の `/extensions/VRM/materialProperties[]` に記録します。

* VRM/UnlitTransparentZWrite
* VRM/MToon

以外の時は、 `shaderName` に `VRM_USE_GLTFSHADER` が記録されて、 `unknown shader` として GLTF 処理されます。

## インポート

### GLTF レイヤー

GLTFの `/materials[]` からUnityマテリアルを作成します。
`KHR_materials_unlit` extension を発見した場合に、

* UniGLTF/UniUnlit

でマテリアルを作成します。

[UniUnlit]({{< relref "univrm_vrmshaders.md" >}}#uniunlit)

###  VRM レイヤー

GLTFの `/extensions/VRM/materialProperties[]` からUnityマテリアルを作成します。
`shaderName` が `VRM_USE_GLTFSHADER` の場合は、 `/materials[]` に記録されている情報を使って `GLTF` の `PBR` か `Unlit` として処理します。

## エクスポートしてインポートしたときのシェーダーの変化

エクスポートしてからインポートすると元と違うシェーダーになる場合があります。

* サポート外のシェーダーの場合。 `Standard` になります。GLTF のデフォルトが `PBR` で、それに対応するのが `Standard` です。
* unlit 系の場合。 [UniGLTF/UniUnlit]({{< relref "univrm_unlit.md" >}}) になります。正常な動作です。

## VRM_USE_GLTFSHADER

`/extensions/VRM/materialProperties[]`

に記録した情報を使ってすべてのシェーダーを読みこめます。

* Runtimeは問題ない
* EditorはインスペクターをアクティブにしたタイミングでGUIに値が変更されたりして個別の対応が必要な場合があり完全ではない

ただし、この機能は

* VRM/UnlitTransparentZWrite
* VRM/MToon

以外では `VRM_USE_GLTFSHADER` で無効になるように封じています(v0.44くらい)。実質 MToon 専用です。
VRMがサポートするシェーダーは、 `PBR(Standard)`, `Unlit`, `MToon` の３種類です。

> 歴史的経緯で `UnlitTransparentZWrite` が存在していますが、整理予定です。 `MToon` の `ZWrite` 機能を使ってください

以前にエクスポートするなどして `VRM_USE_GLTFSHADER` を回避していればロード出来る場合があります。
最初は、`VRM` と無関係に Unity のマテリアルを読み書きする機能だった名残です。
