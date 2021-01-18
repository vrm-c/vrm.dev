---
title: "UniVRMをインストールする"
date: 2020-07-07
weight: 2
aliases: ["/univrm/univrm_install/", "/univrm/install/univrm_install/"]
tags: ["unity"]
---

## Unity Version

* Unity-2019.4 が推奨バージョンです。その他のバージョンは、[Unityのバージョン]({{< relref "unity_version.md" >}}) を参照してください。

## unitypackage の入手

https://github.com/vrm-c/UniVRM/releases

`UniVRM-0.XX.X_XXXX.unitypackage`

です。

## インストール前の準備

* Unityで新規のプロジェクトを作成します

* `ProjectSettings` - `Player` - `Other Settings` - `Rendering` - `ColorSpace` を `Linear` に設定します(推奨)

{{< img src="images/vrm/linear_setting.jpg" width="600" alt="linear setting">}}

{{% alert title="Unity-2018.3, Unity-2018.4, Unity-2019.1 で作業する場合" color="warning" %}}

* `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` を `.Net4.X equivalent` にしてください
{{% /alert %}}

{{% alert title="既存のプロジェクト" color="warning" %}}
事前に、古いバージョンの VRM を削除することを推奨しています。
[UniVRMをアンインストール]({{< relref "univrm_uninstall.md" >}}) を参照してください。
{{% /alert %}}


## unitypackage の import

`unitypackage` を Import します。

`Assets` - `Import Package` - `Custom Package...` で `UniVRM-0.XX.X_XXXX.unitypackage` を選択します。

`Assets/VRM`、`Assets/UniGLTF`お及び`Assets/VRMShaders` の３つのフォルダに import されます。

|{{< img src="images/vrm/package_import.jpg" width="350" alt="package_import" >}}|
|-----|
|UnityPackageをインポート|

## import が成功したか確認する方法

VRM menu が表示されていれば動作しています：

{{< img src="images/vrm/vrm_menu.jpg" alt="vrm menu" >}}
<hr>

前のバージョン：

{{< img src="images/vrm/vrm_menu_old.jpg" alt="vrm menu old" >}}
<hr>

menu が出てこない場合は、

* Console を表示させます。左上の clear ボタンを推して、エラー(赤いメッセージ)が無いことを確認してください

{{< img src="images/vrm/show_console.jpg"  width="500" alt="show console">}}

{{< img src="images/vrm/clear_console.jpg" width="500" alt="clear console" >}}

## 関連セクション

- [VRMファイルを作ってみたい]({{< relref "how_to_make_vrm" >}})
- [VRMをインポートする]({{< relref "univrm_import" >}})
