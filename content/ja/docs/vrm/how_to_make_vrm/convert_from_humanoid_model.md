---
title: "1. VRMファイルを作成する"
date: 2020-08-26T15:52:06+09:00
url: "/how_to_make_vrm/convert_from_humanoid_model/"
description: "ベースモデル(fbx)を Unity にインポートして、Bone割り当てを確認、T-Pose にする、ライセンスを記述して出力(正規化)する"
tags: ["unity"]
weight: 2
---

## UnityでHumanoidとして扱えるモデルデータを用意します

ヒューマノイドモデルは、

* **必ずご自分で作られたモデル、ないし、加工しVRアバターとして使うことが許諾されているモデルデータをご用意ください**。

後述しますが、

* **VRMファイル自体にライセンス情報を記述する項目がありますので、特にその項目については権利者自身が設定する** ようにしてください。

また、Humanoid として認識させるために必須のボーンがすべて含まれている必要があります。

{{% alert title="ベースモデル" color="info" %}}
使用可能なベースモデルの詳細は、 [BaseModel]({{< relref "base_model.md" >}}) を参照してください。
{{% /alert %}}

[必須ボーン](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.ja.md#%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%83%9C%E3%83%BC%E3%83%B3)

## unity に fbx を import する

fbx のフォルダを unityの Assets フォルダにドロップします。

{{< img src="images/vrm/fbx_folder.jpg" >}}

unity

{{< img src="images/vrm/assets_fbx.jpg" >}}

青いアイコンが fbx の asset(prefab) です。

## fbx の material を設定する

{{< img src="images/vrm/fbx_default.jpg" >}}

この時点では fbx importer による初期状態になっており、マテリアルがデフォルト状態(StandardShaderでColor, ColorTexture割り当てのみ。半透明設定が無いなど)なので、マテリアルを最低限設定します。
VRM 向けなので、この例では全部 `MToon` にします。

{{% alert title="Shader" color="info" %}}
VRMは、Standard, Unlit, MToon の３種類を記録できます。
{{% /alert %}}

* `Extract Materials` ボタンを押して fbx のフォルダに `Materials` フォルダを作成してそこを選択。
* Shader をすべて `VRM/Mtoon` に変更
* MToon の `Shade Color` を白に変更

{{< img src="images/vrm/alicia_preview.jpg" >}}

ちゃんとした設定はこちら。[MToonの設定]({{< relref "shader_mtoon.md" >}})

手順の説明なので先に進みます。

## fbx を humanoid 設定にする

fbx デフォルトは、generic 設定です。

{{< img src="images/vrm/rig_generic.jpg" >}}

humanoid に変更します。

{{< img src="images/vrm/select_humanoid.jpg" >}}

`apply` を押します。

{{% alert title="humanoid" color="info" %}}
このとき fbx importer がヒューマノイドボーンの割り当てを自動で推定します。
失敗する時もあり、成功しても間違っている場合もあります。
{{% /alert %}}

humanoid のボーン割り当て画面に入ります。

`configure` ボタンを押します。

{{< img src="images/vrm/BoneMapping.png" width="600" height="700" alt="BoneMapping" >}}

ボーンの割り当てを確認してください。

{{% alert title="bone" color="info" %}}
* 前髪に顎ボーンが割り当てられる
* 目のハイライトに目ボーンが割り当てられる

などにご注意ください。
{{% /alert %}}

## prefab をシーンに展開

`File` - `New Scene` として、
fbx の prefab をシーンに展開します。

{{< img src="images/vrm/DragImportedModel.png" width="600" height="700" >}}

## fbx の blendshpae の法線が乱れていないか確認する

BlendShapeで変な影が出る場合の対策です。

[BlendShape の法線を確認しよう]({{< relref "check_blendshape_normal.md" >}})

## エクスポート

{{< img src="images/vrm/export058_menu.jpg" width="600" height="700" >}}

`VRM` - `UniVRM-0.XX.Y` - `Export Humanoid` を押してダイアログを表示します。

{{< img src="images/vrm/export058_empty.jpg" width="600" height="700" >}}

`Export Root` に prefab をシーンに展開した GameObject をドロップします。

{{% alert title="エラー" color="warning" %}}
エクスポートダイアログで各種エラーチェックをしています。
* 赤いメッセージは解決する必要があります。
* 黄色いメッセージは無視してエクスポートできます。

[エクスポートダイアログ]({{< relref "univrm_export.md" >}})
{{% /alert %}}

{{< img src="images/vrm/export_dialog_title_version_author.jpg" width="600" height="700" >}}
<br>
ライセンス情報を入力してください。赤いメッセージな無くなれば Export を押せます。
次の作業のため、`Assets/models/vrm` フォルダを作成してそこにエクスポートしました。

{{% alert title="エクスポート先" color="info" %}}
エクスポート先には、Unity の Assets 内、外どちらでも選択できます。
Assets 内を選択すると、Export 直後に Import が発動します(Importの方が重い)。
Assets 内を選択する場合は、新規に専用のフォルダを作成すると分かりやすくなります。
{{% /alert %}}

## エクスポートオプション

{{< img src="images/vrm/export_options.jpg" width="600" height="700" >}}

{{% alert title="Force T-Pose" color="info" %}}
エクスポートするときに自動で T-Pose 化します。このオプションを使わずにシーン上で見た目で T-Pose にしても問題ありません。
{{% /alert %}}

{{% alert title="Pose Freeze" color="info" %}}
エクスポート時に正規化します。
最新版は、 `ExportRoot` をセットしたときにヒエラルキーに回転・拡縮があるかどうかを調べて、このチェックボックスを自動で設定するようになっています。
{{% /alert %}}
