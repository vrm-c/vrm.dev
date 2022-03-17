---
date: 2020-10-12T15:28:09+09:00
weight: 1
tags: ["unity"]
---

# VRMをインポートする

## エディタモードでVRMファイルをインポートする

### 1.Unityで空のプロジェクトを作る

```{figure} /_static/images/vrm/unity_new_project.png
```

もしくは

```{figure} /_static/images/vrm/new_project.jpg
```

Unityを起動し、プロジェクトを新規作成します。

### 2.UnityにUniVRMをインストール

[UniVRM/releases](https://github.com/vrm-c/UniVRM/releases)から最新のunitypackageをダウンロードし、`Assets/VRM`、`Assets/UniGLTF`及び`Assets/VRMShaders`にインストールします。
**既存のUniVRMが存在している場合、あらかじめVRM、UniGLTF、VRMShaders、そしてMeshUtilityフォルダを削除することを推奨**しています。
UniVRM-XXX.unitypackageファイルをUnityにインポートしてください。

```{figure} /_static/images/vrm/package_import.jpg
package_import
```

### 3.VRMファイルをUnity上に読み込む

**VRMファイルを、UnityのAssetsにドラッグ＆ドロップする**だけで、VRMファイルがインポートされ**モデルデータのPrefabが生成されます**。

```{figure} /_static/images/vrm/vrm_prefab.png
```

**VRMから生成されたPrefabをシーンに配置します**。すると、モデルデータが表示されます。

```{figure} /_static/images/vrm/alicia_scene2.png
```

読み込まれたモデルデータをHierarchyで選択すると、インスペクタに各種情報が表示されます。

```{figure} /_static/images/vrm/vrm_settings.png
```

## 関連セクション

- [vrm独自の設定を行う](/vrm/how_to_make_vrm/setup_vrm#vrm独自の設定を行う)
- [VRMをエクスポートする](/univrm/export/univrm_export)
