---
title: "0. Unityを用意して、UniVRMをインストールする"
date: 2020-08-26T15:52:30+09:00
weight: 1
tags: ["unity"]
description: "作業準備、Unity Download, UnityのProject作成, UniVRM Download, UniVRM package導入"
---

## UniVRM をダウンロードする

https://github.com/vrm-c/UniVRM/releases

から最新版をダウンロードしてください。
ファイル名は、`UniVRM-0.XX.0_YYYY.unitypackage` です。

![download_unitypackage](/images/vrm/download_unitypackage.png)

{{% alert title="XX YY" color="info" %}}
XX は UniVRM のバージョン。YYYY は バージョン識別 ID です。
{{% /alert %}}

## Unity をインストールする

https://create.unity3d.com/jp-howto-install-win

UniVRMの対応するバージョンの Unity をインストールしてください。
対応するUnityのバージョンは、`UniVRM をダウンロードする` の URL をご確認ください。

推奨バージョン以外を使う場合は、 [インストール](/docs/univrm/install/) もご確認ください。

## Unityで空のプロジェクトを作る

{{< img src="images/vrm/unity_new_project.png" >}}

もしくは

{{< img src="images/vrm/new_project.jpg" >}}

Unityを起動し、プロジェクトを新規作成します。New→Create projectをクリック。

## Unity に UniVRM unitypackage を Import

メニューの `Assets` - `Import pacakge` - `Custom Package` を選択して、
ダウンロードした `UniVRM-0.XX.0_YYYY.unitypackage` を選んでください。

{{< img src="images/vrm/package_import.png" width="400" alt="package_import" >}}

右下の `import` ボタンを押します。

## import が成功したか確認する方法

VRM menu が表示されていれば動作しています。

{{< img src="images/vrm/vrm_menu.jpg" alt="vrm menu" >}}
<hr>

{{% alert title="Unity-2018 で menu が出てこない場合" color="warning" %}}
`ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` を `.Net4.X equivalent` になっていることを確認してください
{{% /alert %}}

### Console

Console を表示させると、Unity のエラーメッセージが見れます。

{{< img src="images/vrm/show_console.jpg"  width="500" alt="show console">}}

Console左上の clear ボタンを押して赤いメッセージが消えない場合は unitypackage のインストールに失敗しているなど、unity project に異常があります。

{{< img src="images/vrm/error_in_console.jpg" width="500" alt="clear console" >}}

## Manual

➡ [インストール](/docs/univrm/install/)
