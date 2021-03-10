---
title: Glbエクスポート
weight: 2
aliases: ["/dev/univrm-0.xx/gltf/how_to_create_glb/"]
tags: ["gltf"]
---

## 手順

UniVRMに含まれるUniGLTFでglbファイルを作成することが出来ます。
以下、手順を説明します。

### 1. `UniGLTF/Export UniGLTF-2.X.Y` メニューからダイアログを開きます

![image](/images/unigltf/glb_export_dialog.jpg)

### 2. `ExportRoot` に対象の GameIObject をセットしてください

ドラッグアンドドロップや、右の◎ボタンを押すことで選択できます。

* 一番親は、GLTFのノードではなくシーンとして記録しています。シーンには、移動・回転・拡縮 がありません。

### 3. `Export` を押す

ファイル保存ダイアログが表示されるので出力先を指定してください。

## Glbのエクスポート対象になるコンポーネント

* `MeshRenderer + MeshFilter` (一番親以外の子供につけてください)
* `SkinnedMeshRenderer` (一番親以外の子供につけてください)
* `Animation` (一番親のオブジェクトに付けてください。回転はQuaternionのキーフレームを打ってください。移動・回転・拡縮に対応しています。BlendShapeは未対応)

## 対応しているShader

* `Standard`
* `Unlit/Color`, `Unlit/Texture`, `Unlit/Transparent`, `Unlit/Transparent Cutout`, `UniGLTF/UniUnlit`
