---
title: "Glbインポート"
date: 2020-10-12T17:04:00+09:00
weight: 3
tags: ["gltf"]
---

## エディタモードでGlbファイルをインポートする

インポートする手順は[VRM import]({{< relref "univrm_import" >}})と同じです。UnityのAssetsにドラッグ＆ドロップするだけでGlbファイルをインポートできます。

`v0.68.0` 以降。

https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0/DamagedHelmet

をサンプルに使っています。

### `ReverseAxis` 反転軸の設定

glTFの右手系Y-UP から Unityの左手系Y-UP に変換するときに反転する軸を選択できます。

* Z軸 (v0.68.0 より前と同じ)
* X軸 (v0.68.0 から追加)

{{< img width=400 src="images/unigltf/glb_axis.gif" >}}

選択して `Apply` を押すと反映されます。

### `Extract Materials and Textures ...`

fbx の import と同様に Material と Texture が glb の配下に import されます。
この状態では、Material と Texture は Readonly で設定を変更できません。

`Extract Materials and Textures ...` を押すことで Material と Texture を外部アセット(`Material.asset`, `Texture.png/jpg`) として展開します。
通常の Material と同様に設定を変更できます。

`Clear` で extract する前の状態に戻ります。

### glb の extract

#### clear

初期状態(clear)では、関連する Asset (Mesh, Material, Texture, AnimationClip)は SubAsset として配下にあります。

* `texture_1.metallicRoughness` は、`texture_1` を元に Unity の Standard Shader 向けに変換したものです。[テクスチャーのインポート]({{< relref "texture_import.md" >}})
* `texture_3.occlusion` は、 `textrue_3` を元に Unity の Standard Shader 向けに変換したものです。[テクスチャーのインポート]({{< relref "texture_import.md" >}})
* `texture_4.normal` は、 `textrue_4` を元に Unity の Standard Shader 向けに変換したものです。[テクスチャーのインポート]({{< relref "texture_import.md" >}})

{{< img width=400 src="images/unigltf/glb_clear.jpg" >}}

#### extract

`Extract Materials and Textures ...` を押すと下記のように変化します。

* `Material_MR.mat` の生成
* `texture_0.jpg` の生成(color)
* `texture_1.metallicRoughness.png` の生成。`texture_1` を元に Unity の Standard Shader 向けに変換したものです。
* `texture_2.jpg` の生成(emission)
* `texture_3.occlusion.png` の生成。`textrue_3` を元に Unity の Standard Shader 向けに変換したものです。
* `texture_4.jpg` の生成(normalMap)

{{< img width=400 src="images/unigltf/glb_extract.jpg" >}}

### gltf の extract

#### clear

初期状態(clear)では、関連する Asset (Mesh, Material, Texture(変換が必要なもの), AnimationClip)は SubAsset として配下にあります。

* `Default_AO.occlusion` は、 `Default_AO` を元に Unity の Standard Shader 向けに変換したものです。[テクスチャーのインポート]({{< relref "texture_import.md" >}})
* `Defualt_metalRoughness.metallicRoughness` は、`Defualt_metalRoughness` を元に Unity の Standard Shader 向けに変換したものです。[テクスチャーのインポート]({{< relref "texture_import.md" >}})

{{< img width=400 src="images/unigltf/gltf_clear.jpg" >}}

#### extract

`Extract Materials and Textures ...` を押すと下記のように変化します。

* `Material_MR.mat` の生成
* `Default_AO.occlusion.png` の生成。`Default_AO` を元に Unity の Standard Shader 向けに変換したものです。
* `Default_metalRoughness.metallicRoughness.png` の生成。`Default_metalRoughness` を元に Unity の Standard Shader 向けに変換したものです。

{{< img width=400 src="images/unigltf/gltf_extract.jpg" >}}
