---
title: "VRMファイルを眺めてみたい"
date: 2018-04-16T16:30:00+09:00
---

##  VRMファイルの読み込みかた

[UniVRMTest/releases](https://github.com/vrm-c/UniVRMTest/releases)からVRMファイルのビューアーアプリケーションをダウンロードしてください。プログラムを実行してVRMモデルを選んでモデルが表示されます。
また、以下の方法は少し面倒ですが、UnityでVRMファイルを読み込むことで内容を確認することができます。

### 1.Unityで空のプロジェクトを作る
{{< img src="images/vrm/unity_new_project.png" >}}
Unityを起動し、プロジェクトを新規作成します。New→Create projectをクリック。

### 2.UnityにUniVRMをインストール
{{< img src="images/vrm/package_import.png" alt="package_import" >}}
[UniVRM/releases](https://github.com/vrm-c/UniVRM/releases)から最新のunitypackageをダウンロードし、``Assets/VRM``にインストールします。
**既存のVRMが存在している場合、あらかじめVRMフォルダを削除することを推奨**しています。
UniVRM-XXX.unitypackageファイルをUnityにインポートしてください。

### 3.VRMファイルをUnity上に読み込む
{{< img src="images/vrm/vrm_prefab.png" >}}

**VRMファイルを、UnityのAssetsにドラッグ＆ドロップする**だけで、VRMファイルがインポートされ**モデルデータのPrefabが生成されます**。

{{< img src="images/vrm/alicia_scene2.png" >}}

**VRMから生成されたPrefabをあらためてシーンに配置します**。
すると、モデルデータが表示されます。

{{< img src="images/vrm/vrm_settings.png" >}}

読み込まれたモデルデータをHierarchyで選択すると、**インスペクタに各種情報が表示されます**。

## VRMファイルの読み込みかた（簡易版）

{{< img src="images/vrm/alicia_3dbuilder.png" >}}

～.vrmとなっているファイル拡張子を ～.glb に変更すると、**Windows 10標準搭載の3D Builderで読み込み確認することができます**。（ただしVRM独自の設定は反映されません）

## VRMファイルを投稿する・探す

現在、[ニコニ立体](https://3d.nicovideo.jp/)または[VRoid Hub](https://hub.vroid.com/)でVRMファイルの投稿ができます。
ニコニ立体では[こちら](https://3d.nicovideo.jp/search?word_type=tag&word=VRM)から投稿されたVRMモデルデータのリストが見られます。ライセンスなど確認して使ってみてください。

なお、ニコニ立体にご自分でVRMファイルを投稿する際、「バーチャルキャスト連携」を有効にすると[バーチャルキャスト](https://virtualcast.jp/)から利用できます。