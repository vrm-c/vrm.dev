---
title: "UniVRMのインストール"
date: 2018-04-16T16:30:00+09:00
url: /univrm/univrm_install/
weight: 1
---

## Unity Version

`UniVRM-0.56` から
Unity2018.4LTS以降 + `.Net4` 設定をサポートしています。

## unitypackage の入手

https://github.com/vrm-c/UniVRM/releases

`UniVRM-0.XX.X_XXXX.unitypackage`

です。

## インストール前の準備

* Unity2018.4LTS以降で新規のプロジェクトを作成します
* Console を表示させます。左上の clear ボタンを推して、UniVRMを導入する前にエラー(赤いメッセージ)が無いことを確認してください

{{< img src="images/vrm/show_console.jpg" alt="show console" >}}

{{< img src="images/vrm/clear_console.jpg" alt="clear console" >}}

* `ProjectSettings` - `Player` - `Other Settings` - `Rendering` - `ColorSpace` を `Linear` に設定します(推奨)

{{< img src="images/vrm/linear_setting.jpg" alt="linear setting" >}}

### 既存のプロジェクトで作業する場合

* `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` を `.Net4.X equivalent` にしてください
* 旧バージョンのVRMがインストールされている場合、`Assets/VRM` を削除してください

## unitypackage の import

`unitypackage` を Import します。

`Assets` - `Import Package` - `Custom Package...` で `UniVRM-0.XX.X_XXXX.unitypackage` を選択します。

`Assets/VRM` と `Assets/VRMShaders` の２つのフォルダに import されます。

|{{< img src="images/vrm/package_import.png" alt="package_import" >}}|
|-----|
|UnityPackageをインポート|

## import が成功したか確認する方法

VRM menu が表示されていれば動作しています。

{{< img src="images/vrm/vrm_menu.jpg" alt="vrm menu" >}}

menu が出てこない場合は、

* `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` を `.Net4.X equivalent` になっていることを確認してください
* Console を表示させます。左上の clear ボタンを推して、UniVRMを導入する前にエラー(赤いメッセージ)が無いことを確認してください
