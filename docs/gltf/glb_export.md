---
weight: 2
aliases: [
    "/dev/univrm-0.xx/gltf/how_to_create_glb/",
    "/docs/univrm/gltf/how_to_create_glb/", 
]
tags: ["gltf"]
---

# Glbエクスポート

`v0.68.0` 以降

UniVRMに含まれるUniGLTFでglbファイルを作成することが出来ます。
以下、手順を説明します。

## 手順
### 1. `UniGLTF/Export UniGLTF-2.X.Y` メニューからダイアログを開きます

```{figure} /_static/images/unigltf/glb_export_dialog.jpg
```

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

----

# `v0.68.0` より前

## 手順

UniVRMに含まれるUniGLTFでglbファイルを作成することが出来ます。
以下、手順を説明します。

### 1. 空のシーンを用意します。


### 2. 一番親になるemptyを作成します。移動・回転・拡縮は無し。

一番親は、GLTFのノードではなくシーンとして記録しています。シーンには、移動・回転・拡縮 がありません。

### 3. エクスポートしたいオブジェクトをemptyの子にします。
(この例ではCubeを作成しました。Prefab等任意のオブジェクトを追加できます)

```{figure} /_static/images/wiki/root_cube.png
```

### 4. 一番親のオブジェクトを選択して、エクスポートメニューを起動します。

```{figure} /_static/images/wiki/menu_unigltf_export.png
```

### 5. ファイル名を選択して `glb` ファイルを書き出せば完了です。

## Glbのエクスポート対象になるコンポーネント

* `MeshRenderer + MeshFilter` (一番親以外の子供につけてください)
* `SkinnedMeshRenderer` (一番親以外の子供につけてください)
* `Animation` (一番親のオブジェクトに付けてください。回転はQuaternionのキーフレームを打ってください。移動・回転・拡縮に対応しています。BlendShapeは未対応)

## 対応しているShader

* `Standard` もしくは `Unlit/Color`, `Unlit/Texture`, `Unlit/Transparent`, `Unlit/Transparent Cutout`, `UniGLTF/UniUnlit`
