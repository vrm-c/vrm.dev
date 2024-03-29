---
date: 2020-07-07
weight: 2
aliases: ["/univrm/univrm_install/", "/univrm/install/univrm_install/"]
tags: ["unity"]
---

# .unitypackage ファイル

https://github.com/vrm-c/UniVRM/releases から `unitypackage` をダウンロードしてください。
`UniGLTF_VRMShaders` 、 `UniVRM` という順番で２つのパッケージをインストールしてください。

|          | UniGLTF_VRMShaders | UniVRM  | VRM     |
| -------- | ------------------ | ------- | ------- |
| for GLTF | install            |         |         |
| for VRM  | install            | install |         |
| for VRM1 | install            |         | install |

- `Sample` パッケージは廃止になり中に含まれます。
- `UPM` の `Sample` 機能でインストールできます。

## unitypackage の入手

https://github.com/vrm-c/UniVRM/releases

`UniVRM-0.XX.X_XXXX.unitypackage`

です。

## インストール前の準備

- Unity で新規のプロジェクトを作成します

- `ProjectSettings` - `Player` - `Other Settings` - `Rendering` - `ColorSpace` を `Linear` に設定します(推奨)

![linear setting](/images/vrm/linear_setting.jpg)

:::warning Unity-2018.3, Unity-2018.4, Unity-2019.1 で作業する場合

- `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` を `.Net4.X equivalent` にしてください

:::

:::warning 既存のプロジェクト

事前に、古いバージョンの VRM を削除することを推奨しています。
[UniVRM をアンインストール](/univrm/install/univrm_uninstall) を参照してください。

:::

## unitypackage の import

`unitypackage` を Import します。

`Assets` - `Import Package` - `Custom Package...` で `UniVRM-0.XX.X_XXXX.unitypackage` を選択します。

`Assets/VRM`、`Assets/UniGLTF`お及び`Assets/VRMShaders` の３つのフォルダに import されます。

![package_import](/images/vrm/package_import.jpg)

## import が成功したか確認する方法

VRM menu が表示されていれば動作しています：

![vrm menu](/images/vrm/vrm_menu.jpg)

前のバージョン：

![vrm menu old](/images/vrm/vrm_menu_old.jpg)

menu が出てこない場合は、

- Console を表示させます。左上の clear ボタンを推して、エラー(赤いメッセージ)が無いことを確認してください

![show console](/images/vrm/show_console.jpg)

![clear console](/images/vrm/clear_console.jpg)

## 関連セクション

- [VRM ファイルを作ってみたい](/vrm/how_to_make_vrm)
- [VRM をインポートする](/univrm/import/univrm_import)
