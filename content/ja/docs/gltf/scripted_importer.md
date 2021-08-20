---
title: 新しいEditorImporterの動作
weight: 12
tags: ["gltf", "vrm-1.0"]
---

## AssetFile の作られ方

### 以前の動作(独立したasset)

VRM0 とv0.67以前のGLB/GLTF の Importerは、以下のように import されます。

{{% alert title="vrm0 の import" color="warning" %}}

{{< img width=300 src="images/vrm10/vrm0_import.jpg" >}}

* mesh や texture や material や blendshape などの関連アセットファイルが作成されます。

{{% /alert %}}

### 新しい動作(subasset)

VRM1 とv0.68以降のGLB/GLTF の Importerは、以下のように import されます。

{{% alert title="vrm1 の import" color="warning" %}}

{{< img width=300 src="images/vrm10/vrm1_import.jpg" >}}

* mesh や material や texture や Expression が SubAsset として作成されます。

{{% /alert %}}

{{% alert title="glb の import" color="warning" %}}

{{< img width=600 src="images/gltf/glb_extract_before.jpg" >}}

* material と texture が SubAsset として作成されます

{{% /alert %}}

## SubAsset を変更するには Extract する

新しい Importer で作られた SubAsset は 内容を変更ができません。

{{% alert title="subasset" color="warning" %}}

SubAsset は VRM 内のリソースを表しているためで、
例えば Material を変更しても、その変更を即座に VRM に反映することができないためです。

FBX の Importer も同様の動作です。

{{% /alert %}}

VRM1 とv0.68以降のGLB/GLTF では、Material タブなどで extract ができます。

{{< img width=300 src="images/vrm10/extract_material.jpg" >}}
{{< img width=300 src="images/vrm10/extract_vrm_empty.jpg" >}}
{{< img width=300 src="images/vrm10/extract_vrm.jpg" >}}

{{% alert title="fbx の extract" color="warning" %}}

fbx importer の material タブには下記のようなボタンがあります。

{{< img src="images/vrm10/fbx_extract.jpg" >}}

`Export Textures...` や `Export Materials...` すると fbx の中の material を 外にコピーして独立した Asset とすることができます。
このコピーされた Asset は自由に変更することができます。

{{% /alert %}}

## 外部の Asset と VRM を関連付ける Remap

初期状態では vrm 内部の Asset が使用されますが、これを外部の Asset と置き換えることができます。
置き換えの関連付けを管理するのが Remap です。

* None になっているときは、 `vrm`, `glb` に内部の SubAsset を使用しているという意味になります。
* Extract以外にも、個別に既存のAssetを割り当てできます

{{% alert title="extract 後" color="warning" %}}

{{< img width=300 src="images/vrm10/remap_materials.jpg" >}}

{{< img width=700 src="images/gltf/glb_extract_after.jpg" >}}

{{< img width=700 src="images/gltf/vrm1_extract_after.jpg" >}}

SubAsset が書き出され、それが Remap に代入されます。

{{% /alert %}}

## まとめ

VRM1 と GLB/GLTF(0.68以降) は `ScriptedImporter` の導入により、 `extract` と `remap` の仕組みがあります。
既存の `fbx` importer の動きと似た動きになるように実装しています。

<https://docs.unity3d.com/ja/current/Manual/FBXImporter-Materials.html>
