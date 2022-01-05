---
title: "UniVRMサンプルをインストールする"
date: 2020-09-02T12:29:28+09:00
weight: 4
tags: ["api"]
---

このセクションでは、[UniVRMパッケージをインストール](/univrm/install/univrm_install)したことを想定しています。

## UniVRMサンプルのパッケージ

`v0.81.0` からUniVRMサンプルはUniVRMパッケージに含まれています。  
最新のUniVRMバージョンがインストールされている場合は、[UniVRMサンプルのシーンを実行する](#univrmサンプルのシーンを実行する)セクションをご覧ください。

### ~ v0.80.0

https://github.com/vrm-c/UniVRM/releases

`UniVRM-samples-0.XX.X_XXXX.unitypackage`

です。

### インポート

メニューから `Assets -> Import Package -> Custom Package` で `UniVRM-samples-0.XX.X_XXXX.unitypackage` を選択します。

以下の画像ようにインポートウィンドウを見たら、`Import`ボタンをクリックしてください：

{{< img src="images/vrm/sample_package_import.jpg" width="300" height="300" alt="sample_package_import" >}}

## UniVRMサンプルのシーンを実行する

`VRM.Samples`フォルダは`Assets`にあります。プロジェクトウィンドウに`SampleViewer`を選択します：

{{< img src="images/vrm/sample_scene.jpg" width="300" height="300" alt="sample_scene" >}}
<hr>

`Game`タブをクリックして、`SampleViewer`のインタフェースを表示させます：

{{< img src="images/vrm/sample_viewer.jpg" width="500" alt="sample_viewer" >}}
<hr>

`Play`ボタンをクリックして`SampleViewer`を有効になります。実行時に`Open`ボタンをクリックしてVRMモデルをシーンにインポートします：

{{< img src="images/vrm/play_mode.jpg" width="150" alt="play_mode" >}}
<br>
<br>
{{< img src="images/vrm/sample_viewer_activate.jpg" width="600" alt="sample_viewer_activate" >}}

`VRM.Samples`に[ランタイムVRMエクスポート](https://github.com/vrm-c/UniVRM/tree/master/Assets/VRM/Samples/RuntimeExporterSample)と[一人称レンダリング](https://github.com/vrm-c/UniVRM/tree/master/Assets/VRM/Samples/FirstPersonSample)のサンプルがあります。

Aliciaモデルは[こちら](https://github.com/vrm-c/UniVRM/blob/master/Tests/Models/Alicia_vrm-0.51/AliciaSolid_vrm-0.51.vrm)。
