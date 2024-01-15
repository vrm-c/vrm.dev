---
date: 2020-08-26T15:52:30+09:00
weight: 1
tags: ["unity"]
description: "作業準備、Unity Download, UnityのProject作成, UniVRM Download, UniVRM package導入"
---

# 0. Unityを用意して、UniVRMをインストールする

## UniVRM をダウンロードする

https://github.com/vrm-c/UniVRM/releases

から最新版をダウンロードしてください。
ファイル名は、`UniVRM-0.XX.0_YYYY.unitypackage` です。

:::note XX YY

XX は UniVRM のバージョン。YYYY は バージョン識別 ID です。

![download_unitypackage](/images/vrm/download_unitypackage.png)

:::

## Unity をインストールする

https://create.unity3d.com/jp-howto-install-win

UniVRMの対応するバージョンの Unity をインストールしてください。
対応するUnityのバージョンは、`UniVRM をダウンロードする` の URL をご確認ください。

推奨バージョン以外を使う場合は、 [インストール](/univrm/install/) もご確認ください。

## Unityで空のプロジェクトを作る

![figure](/images/vrm/unity_new_project.png)

もしくは

![figure](/images/vrm/new_project.jpg)

Unityを起動し、プロジェクトを新規作成します。New→Create projectをクリック。

## Unity に UniVRM unitypackage を Import

メニューの `Assets` - `Import pacakge` - `Custom Package` を選択して、
ダウンロードした `UniVRM-0.XX.0_YYYY.unitypackage` を選んでください。

![package_import](/images/vrm/package_import.jpg)

右下の `import` ボタンを押します。

## import が成功したか確認する方法

VRM menu が表示されていれば動作しています：

![vrm menu](/images/vrm/vrm_menu.jpg)

![前のバージョン](/images/vrm/vrm_menu_old.jpg)

:::warning Unity-2018 で menu が出てこない場合

`ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` を `.Net4.X equivalent` になっていることを確認してください

:::

### Console

Console を表示させると、Unity のエラーメッセージが見れます。

![show console](/images/vrm/show_console.jpg)

Console左上の clear ボタンを押して赤いメッセージが消えない場合は unitypackage のインストールに失敗しているなど、unity project に異常があります。

![clear console](/images/vrm/error_in_console.jpg)

## Manual

➡ [インストール](/univrm/install/)
