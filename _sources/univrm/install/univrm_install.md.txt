---
date: 2020-07-07
weight: 2
aliases: ["/univrm/univrm_install/", "/univrm/install/univrm_install/"]
tags: ["unity"]
---

# UniVRMをインストールする

## Unity Version

* Unity-2019.4 が推奨バージョンです。その他のバージョンは、[Unityのバージョン](/univrm/install/unity_version) を参照してください。

## unitypackage の入手

https://github.com/vrm-c/UniVRM/releases

`UniVRM-0.XX.X_XXXX.unitypackage`

です。

## インストール前の準備

* Unityで新規のプロジェクトを作成します

* `ProjectSettings` - `Player` - `Other Settings` - `Rendering` - `ColorSpace` を `Linear` に設定します(推奨)

```{figure} /_static/images/vrm/linear_setting.jpg
linear setting
```

```{admonition} Unity-2018.3, Unity-2018.4, Unity-2019.1 で作業する場合
:class: warning



* `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` を `.Net4.X equivalent` にしてください

```

```{admonition} 既存のプロジェクト
:class: warning


事前に、古いバージョンの VRM を削除することを推奨しています。
[UniVRMをアンインストール](/univrm/install/univrm_uninstall) を参照してください。

```

## unitypackage の import

`unitypackage` を Import します。

`Assets` - `Import Package` - `Custom Package...` で `UniVRM-0.XX.X_XXXX.unitypackage` を選択します。

`Assets/VRM`、`Assets/UniGLTF`お及び`Assets/VRMShaders` の３つのフォルダに import されます。

```{figure} /_static/images/vrm/package_import.jpg
:name: package_import

UnityPackageをインポート
```

## import が成功したか確認する方法

VRM menu が表示されていれば動作しています：

```{figure} /_static/images/vrm/vrm_menu.jpg
vrm menu
```

前のバージョン：

```{figure} /_static/images/vrm/vrm_menu_old.jpg
vrm menu old
```

menu が出てこない場合は、

* Console を表示させます。左上の clear ボタンを推して、エラー(赤いメッセージ)が無いことを確認してください

```{figure} /_static/images/vrm/show_console.jpg
show console
```

```{figure} /_static/images/vrm/clear_console.jpg
clear console
```

## 関連セクション

- [VRMファイルを作ってみたい](/vrm/how_to_make_vrm/index)
- [VRMをインポートする](/univrm/import/univrm_import)
