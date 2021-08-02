---
title: 新しいEditorImporterの動作
weight: 1
---

## AssetFile の作られ方

VRM0 とv0.67以前のGLB/GLTF の Importerは、以下のように import されます。

{{% alert title="vrm0 の import" color="warning" %}}

{{< img src="images/vrm10/vrm0_import.jpg" >}}

*.vrm(*.glb) import 時に AssetPostprocessor 機能で、必要な Asset を作成します。

{{% /alert %}}

VRM1 とv0.68以降のGLB/GLTF の Importerは、以下のように import されます。

{{% alert title="vrm1 の import" color="warning" %}}

{{< img src="images/vrm10/vrm1_import.jpg" >}}

ScriptedImporter 機能で、 `*.vrm` 自体を Asset 化して、 必要な Asset は SubAsset になります。
この時点ではアセットファイルは増えません。

{{% /alert %}}

## SubAsset を変更するには Extract する

新しい Importer で作られた SubAsset(Materialなど) は 変更ができません。
これは SubAsset は VRM 内のリソースを参照していることを表しているためで、変更用に VRM 内のリソースを外部にコピーする必要があります。
変更用に SubAsset を外部にコピーすることを `Extract` といいます。

{{% alert title="fbx extract" color="warning" %}}

{{< img src="images/vrm10/fbx_extract.jpg" >}}

FBX の Material タブとの `Export Textures...` や `Export Materials...` と同じ考え方です。

{{% /alert %}}

VRM では、Material タブと VRM タブでリソースの extract ができます。

* Materialsタブ: Texture と Material を Extract できます
* Vrmタブ: VRM1Object(Meta, LookAt, FirstPerson) と VRM1Expression を Extract できます

{{< img src="images/vrm10/extract_material.jpg" >}}
