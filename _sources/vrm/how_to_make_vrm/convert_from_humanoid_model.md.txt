---
date: 2020-08-26T15:52:06+09:00
url: "/how_to_make_vrm/convert_from_humanoid_model/"
description: "ベースモデル(fbx)を Unity にインポートして、Bone割り当てを確認、T-Pose にする、ライセンスを記述して出力(正規化)する"
tags: ["unity"]
weight: 2
---

# 1. VRMファイルを作成する

## UnityでHumanoidとして扱えるモデルデータを用意します

ヒューマノイドモデルは、

* **必ずご自分で作られたモデル、ないし、加工しVRアバターとして使うことが許諾されているモデルデータをご用意ください**。

後述しますが、

* **VRMファイル自体にライセンス情報を記述する項目がありますので、特にその項目については権利者自身が設定する** ようにしてください。

また、Humanoid として認識させるために必須のボーンがすべて含まれている必要があります。

```{admonition} ベースモデル
:class: note


使用可能なベースモデルの詳細は、 [BaseModel](/univrm/humanoid/base_model) を参照してください。

```


[必須ボーン](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.ja.md#%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%83%9C%E3%83%BC%E3%83%B3)

## unity に fbx を import する

fbx のフォルダを unityの Assets フォルダにドロップします。

```{figure} /_static/images/vrm/fbx_folder.jpg
```

unity

```{figure} /_static/images/vrm/assets_fbx.jpg
```

青いアイコンが fbx の asset(prefab) です。

## fbx の material を設定する

```{figure} /_static/images/vrm/fbx_default.jpg
```

この時点では fbx importer による初期状態になっており、マテリアルがデフォルト状態(StandardShaderでColor, ColorTexture割り当てのみ。半透明設定が無いなど)なので、マテリアルを最低限設定します。
VRM 向けなので、この例では全部 `MToon` にします。

```{admonition} Shader
:class: note


VRMは、[MToon](/univrm/shaders/shader_mtoon)、[Unlit](/univrm/shaders/univrm_unlit) と [Standard](/univrm/shaders/univrm_standard) の３種類を記録できます。

```


`Extract Materials` ボタンを押して fbx のフォルダに `Materials` フォルダを作成してそこを選択。

```{figure} /_static/images/vrm/extract_materials.jpg
extract_materials
```

Shader をすべて `VRM/Mtoon` に変更

```{figure} /_static/images/vrm/change_to_mtoon.jpg
change_to_mtoon
```

MToon の `Shade Color` を白に変更

```{figure} /_static/images/vrm/shade_color_to_white.jpg
shade_color_to_white
```

```{figure} /_static/images/vrm/alicia_preview.jpg
```

ちゃんとした設定はこちら。[MToonの設定](/univrm/shaders/shader_mtoon)

手順の説明なので先に進みます。

## fbx を humanoid 設定にする

fbx デフォルトは、generic 設定です。

```{figure} /_static/images/vrm/rig_generic.jpg
```

humanoid に変更します。

```{figure} /_static/images/vrm/select_humanoid.jpg
```

`apply` を押します。

```{admonition} humanoid
:class: note


このとき fbx importer がヒューマノイドボーンの割り当てを自動で推定します。
失敗する時もあり、成功しても間違っている場合もあります。

```


humanoid のボーン割り当て画面に入ります。

`configure` ボタンを押します。

```{figure} /_static/images/vrm/BoneMapping.png
BoneMapping
```

ボーンの割り当てを確認してください。

```{admonition} bone
:class: note

* 前髪に顎ボーンが割り当てられる
* 目のハイライトに目ボーンが割り当てられる

などにご注意ください。
```

## prefab をシーンに展開

`File` - `New Scene` として、
fbx の prefab をシーンに展開します。

```{figure} /_static/images/vrm/DragImportedModel.png
```

## fbx の blendshpae の法線が乱れていないか確認する

BlendShapeで変な影が出る場合の対策です。

[BlendShape の法線を確認しよう](/univrm/blendshape/check_blendshape_normal)

## エクスポート

```{figure} /_static/images/vrm/vrm_menu.jpg
vrm_menu
```

`VRM0` - `Export UniVRM-0.XX` を押してダイアログを表示します。

```{figure} /_static/images/vrm/UniVRMExportHumanoid.jpg
UniVRMExportHumanoid
```

前のバージョンは `VRM` - `UniVRM-0.XX` - `Export humanoid`。

```{figure} /_static/images/vrm/export058_empty.jpg
```

`Export Root` に prefab をシーンに展開した GameObject をドロップします。

```{admonition} エラー
:class: warning


エクスポートダイアログで各種エラーチェックをしています。
* 赤いメッセージは解決する必要があります。
* 黄色いメッセージは無視してエクスポートできます。

[エクスポートダイアログ](/univrm/export/univrm_export)
```

```{figure} /_static/images/vrm/export_dialog_title_version_author.jpg
```

ライセンス情報を入力してください。赤いメッセージな無くなれば Export を押せます。
次の作業のため、`Assets/models/vrm` フォルダを作成してそこにエクスポートしました。

```{admonition} エクスポート先
:class: note


エクスポート先には、Unity の Assets 内、外どちらでも選択できます。
Assets 内を選択すると、Export 直後に Import が発動します(Importの方が重い)。
Assets 内を選択する場合は、新規に専用のフォルダを作成すると分かりやすくなります。
```

## エクスポートオプション

```{figure} /_static/images/vrm/export_options.jpg
```

```{admonition} T-Poseにする
:class: note


自動で T-Pose 化します。このオプションを使わずにシーン上で見た目で T-Pose にしても問題ありません。

```


```{admonition} Pose Freeze
:class: note


エクスポート時に正規化します。
最新版は、 `ExportRoot` をセットしたときにヒエラルキーに回転・拡縮があるかどうかを調べて、このチェックボックスを自動で設定するようになっています。

```
