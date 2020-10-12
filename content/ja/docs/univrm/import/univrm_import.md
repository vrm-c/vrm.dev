---
title: "VRMをインポートする"
date: 2020-10-12T15:28:09+09:00
weight: 1
tags: ["unity"]
---

## エディタモードでVRMファイルをインポートする

### 1.Unityで空のプロジェクトを作る
{{< img src="images/vrm/unity_new_project.png" >}}

Unityを起動し、プロジェクトを新規作成します。New→Create projectをクリック。

### 2.UnityにUniVRMをインストール
{{< img src="images/vrm/package_import.png" width="400" alt="package_import" >}}

[UniVRM/releases](https://github.com/vrm-c/UniVRM/releases)から最新のunitypackageをダウンロードし、`Assets/VRM`、`Assets/VRMShaders`及び`Assets/MeshUtility`にインストールします。
**既存のUniVRMが存在している場合、あらかじめVRM、VRMShaders、そしてMeshUtilityフォルダを削除することを推奨**しています。
UniVRM-XXX.unitypackageファイルをUnityにインポートしてください。

### 3.VRMファイルをUnity上に読み込む
{{< img src="images/vrm/vrm_prefab.png" >}}

**VRMファイルを、UnityのAssetsにドラッグ＆ドロップする**だけで、VRMファイルがインポートされ**モデルデータのPrefabが生成されます**。

{{< img src="images/vrm/alicia_scene2.png" >}}

**VRMから生成されたPrefabをあらためてシーンに配置します**。
すると、モデルデータが表示されます。

{{< img src="images/vrm/vrm_settings.png" >}}

読み込まれたモデルデータをHierarchyで選択すると、インスペクタに各種情報が表示されます。