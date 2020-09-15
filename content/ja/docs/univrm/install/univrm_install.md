---
title: "UniVRMをインストールする"
date: 2020-07-07
weight: 1
aliases: ["/univrm/univrm_install/", "/univrm/install/univrm_install/"]
tags: ["unity"]
---

## Unity Version

`UniVRM-0.56` から
Unity2018.4LTS以降 + `.Net4` 設定をサポートしています。

UPMでUniVRMをインストールする場合は、[UPMでUniVRMをインストールする]({{< relref "univrm_upm.md" >}})ページをご覧ください。

## unitypackage の入手

https://github.com/vrm-c/UniVRM/releases

`UniVRM-0.XX.X_XXXX.unitypackage`

です。

## インストール前の準備

* Unity2018.4LTS以降で新規のプロジェクトを作成します
* Console を表示させます。左上の clear ボタンを推して、UniVRMを導入する前にエラー(赤いメッセージ)が無いことを確認してください

{{< img src="images/vrm/show_console.jpg"  width="500" alt="show console">}}

{{< img src="images/vrm/clear_console.jpg" width="500" alt="clear console" >}}
<hr>

* `ProjectSettings` - `Player` - `Other Settings` - `Rendering` - `ColorSpace` を `Linear` に設定します(推奨)

{{< img src="images/vrm/linear_setting.jpg" width="600" alt="linear setting">}}

### 既存のプロジェクトで作業する場合

* `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` を `.Net4.X equivalent` にしてください
* 旧バージョンのVRMがインストールされている場合、`Assets/VRM`、`Assets/VRMShaders`（存在する場合）、そして`Assets/MeshUtility`（存在する場合） を削除してください

## unitypackage の import

`unitypackage` を Import します。

`Assets` - `Import Package` - `Custom Package...` で `UniVRM-0.XX.X_XXXX.unitypackage` を選択します。

`Assets/VRM`、`Assets/VRMShaders`お及び`Assets/MeshUtility` の３つのフォルダに import されます。

|{{< img src="images/vrm/package_import.png" width="350" alt="package_import" >}}|
|-----|
|UnityPackageをインポート|

## import が成功したか確認する方法

VRM menu が表示されていれば動作しています。

{{< img src="images/vrm/vrm_menu.jpg" alt="vrm menu" >}}
<hr>

menu が出てこない場合は、

* `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` を `.Net4.X equivalent` になっていることを確認してください
* Console を表示させます。左上の clear ボタンを推して、UniVRMを導入する前にエラー(赤いメッセージ)が無いことを確認してください



