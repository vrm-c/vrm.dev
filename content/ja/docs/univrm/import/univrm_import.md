---
title: "VRMをインポートする"
date: 2020-10-12T15:28:09+09:00
weight: 1
tags: ["unity"]
---

## エディタモードでVRMファイルをインポートする

### 1.Unityで空のプロジェクトを作る

{{< img src="images/vrm/unity_new_project.png" >}}
<hr>

もしくは

{{< img src="images/vrm/new_project.jpg" >}}
<hr>

Unityを起動し、プロジェクトを新規作成します。

### 2.UnityにUniVRMをインストール

[UniVRM/releases](https://github.com/vrm-c/UniVRM/releases)から最新のunitypackageをダウンロードし、`Assets/VRM`、`Assets/UniGLTF`及び`Assets/VRMShaders`にインストールします。
**既存のUniVRMが存在している場合、あらかじめVRM、UniGLTF、VRMShaders、そしてMeshUtilityフォルダを削除することを推奨**しています。
UniVRM-XXX.unitypackageファイルをUnityにインポートしてください。

{{< img src="images/vrm/package_import.jpg" width="400" alt="package_import" >}}
<hr>

### 3.VRMファイルをUnity上に読み込む

**VRMファイルを、UnityのAssetsにドラッグ＆ドロップする**だけで、VRMファイルがインポートされ**モデルデータのPrefabが生成されます**。

{{< img src="images/vrm/vrm_prefab.png" >}}
<hr>

**VRMから生成されたPrefabをシーンに配置します**。すると、モデルデータが表示されます。

{{< img src="images/vrm/alicia_scene2.png" >}}
<hr>

読み込まれたモデルデータをHierarchyで選択すると、インスペクタに各種情報が表示されます。

{{< img src="images/vrm/vrm_settings.png" >}}
<hr>

## 関連セクション

- [vrm独自の設定を行う](/vrm/how_to_make_vrm/setup_vrm#vrm独自の設定を行う)
- [VRMをエクスポートする](/univrm/export/univrm_export)