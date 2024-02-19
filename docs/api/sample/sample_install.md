# UniVRM サンプルをインストールする

このセクションでは、[UniVRM パッケージをインストール](/univrm/install/univrm_install)したことを想定しています。

## UniVRM サンプルのパッケージ

`v0.81.0` から UniVRM サンプルは UniVRM パッケージに含まれています。  
最新の UniVRM バージョンがインストールされている場合は、**UniVRM サンプルのシーンを実行する**セクションをご覧ください。

### ~ v0.80.0

https://github.com/vrm-c/UniVRM/releases

`UniVRM-samples-0.XX.X_XXXX.unitypackage`

です。

### インポート

メニューから `Assets -> Import Package -> Custom Package` で `UniVRM-samples-0.XX.X_XXXX.unitypackage` を選択します。

以下の画像ようにインポートウィンドウを見たら、`Import`ボタンをクリックしてください：

![sample_package_import](/images/vrm/sample_package_import.jpg)

## UniVRM サンプルのシーンを実行する

`VRM.Samples`フォルダは`Assets`にあります。プロジェクトウィンドウに`SampleViewer`を選択します：

![sample_scene](/images/vrm/sample_scene.jpg)

`Game`タブをクリックして、`SampleViewer`のインタフェースを表示させます：

![sample_viewer](/images/vrm/sample_viewer.jpg)

`Play`ボタンをクリックして`SampleViewer`を有効になります。実行時に`Open`ボタンをクリックして VRM モデルをシーンにインポートします：

![play_mode](/images/vrm/play_mode.jpg)

![sample_viewer_activate](/images/vrm/sample_viewer_activate.jpg)

`VRM.Samples`に[ランタイム VRM エクスポート](https://github.com/vrm-c/UniVRM/tree/master/Assets/VRM/Samples/RuntimeExporterSample)と[一人称レンダリング](https://github.com/vrm-c/UniVRM/tree/master/Assets/VRM/Samples/FirstPersonSample)のサンプルがあります。

Alicia モデルは[こちら](https://github.com/vrm-c/UniVRM/blob/master/Tests/Models/Alicia_vrm-0.51/AliciaSolid_vrm-0.51.vrm)。
