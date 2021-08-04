---
title: 新しいEditorImporterの動作
weight: 1
---

## AssetFile の作られ方

VRM0 とv0.67以前のGLB/GLTF の Importerは、以下のように import されます。

{{% alert title="vrm0 の import" color="warning" %}}

{{< img width=200 src="images/vrm10/vrm0_import.jpg" >}}

*.vrm(*.glb) import 時

* *.vrm 自体は Asset にならずに白い Asset ファイルとなる(何もしない)
* この白いファイルに対して `*.meta` が作成されるときに AssetPostprocessor が動作して以下のリソースを作成します。
* prefab を作成
* prefab が参照するその他の Asset も作成
  * texture(vrm に内包されている png, jpg をファイルとして書き出し)
  * material
  * mesh
  * humanoid avatar
  * vrm blendshape などの ScriptableObject

{{% /alert %}}

VRM1 とv0.68以降のGLB/GLTF の Importerは、以下のように import されます。

{{% alert title="vrm1 の import" color="warning" %}}

{{< img width=200 src="images/vrm10/vrm1_import.jpg" >}}

* *.vrm 自体が Asset になります
* この Asset は、prefab の root の GameObject を表します(Prefabのようもの)
* この GameObject ヒエラルキーが参照する Asset は、 `*.vrm` Asset の SubAsset として作成されます(個別のファイルにならない)

{{% /alert %}}

## SubAsset を変更するには Extract する

新しい Importer で作られた SubAsset は 内容を変更ができません。

{{% alert title="subasset" color="warning" %}}

SubAsset は VRM 内のリソースを表しているためで、
例えば Material を変更しても、その変更を即座に VRM に反映することができないためです。

FBX の Importer も同様の動作です。

{{% /alert %}}

{{% alert title="fbx の extract" color="warning" %}}

fbx importer の material タブには下記のようなボタンがあります。

{{< img src="images/vrm10/fbx_extract.jpg" >}}

`Export Textures...` や `Export Materials...` すると fbx の中の material を 外にコピーして独立した Asset とすることができます。
このコピーされた Asset は自由に変更することができます。

{{% /alert %}}

VRM1 では、Material タブと VRM タブでリソースの extract ができます。

* Materialsタブ: Texture と Material を Extract できます
* Vrmタブ: VRM1Object(Meta, LookAt, FirstPerson) と VRM1Expression を Extract できます

{{< img width=300 src="images/vrm10/extract_material.jpg" >}}

## 外部の Asset と VRM を関連付ける Remap

初期状態では vrm 内部の Asset が使用されますが、これを外部の Asset と置き換えることができます。
置き換えの関連付けを管理するのが Remap です。

{{% alert title="remap" color="warning" %}}

{{< img width=300 src="images/vrm10/remap_materials.jpg" >}}

{{% /alert %}}

## まとめ

VRM1 と GLB/GLTF(0.68以降) は `ScriptedImporter` の導入により、 `extract` と `remap` の仕組みがあります。
既存の `fbx` importer の動きと似た動きになるようにしております。

<https://docs.unity3d.com/ja/current/Manual/FBXImporter-Materials.html>
