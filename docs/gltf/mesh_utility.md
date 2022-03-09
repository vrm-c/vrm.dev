---
date: 2021-04-21T16:09:47+09:00
weight: 20
tags: ["unity", "gltf"]
---

# Mesh Utility


`MeshUtility`はメッシュ処理のツールです。  
現在利用可能な機能： `MeshSeparator`、`MeshIntegrator`、`StaticMeshIntegrator`と`BoneMeshEraser`。

## 使用例

ここでは、`MeshSeparator`の使い方を紹介していきます。他の機能の使い方は大体同じです。  
`MeshSeparator`が適用されると、BlendShapeを含むメッシュは分割されます。
先ず、ヒエラルキーにモデルのGameObjectを選択します。

```{figure} /_static/images/vrm/mesh_utility_exp1.jpg
```

または、GameObjectを`TargetObject`フィールドにドラッグ＆ドロップします。  
メッシュ処理のウィンドウを表示するため、メニューから`UniGLTF` -> `MeshUtility` -> `MeshProcessing Wizard`をクリックしてください：

```{figure} /_static/images/vrm/mesh_utility_ja_exp2.jpg
```

`Process`ボタンをクリックすると、処理したモデルのGameObjectを生成されます。このGameObjectを選択してエクスポータします（`VRM0` -> `Export UniVRM-0.xx`）。

```{figure} /_static/images/vrm/mesh_utility_exp3.jpg
```

分割されたメッシュも`Assets`フォルダーに保存されます。  
この例では、モデルのメッシュは顔と体の2つの部分に分割された。

|               顔: BlendShapeを含む               |             体: BlendShapeを含まない             |
|:------------------------------------------------:|:------------------------------------------------:|
| ![img](/_static/images/vrm/mesh_sep_result_1.jpg) | ![img](/_static/images/vrm/mesh_sep_result_2.jpg) |

### MeshSeparator

BlendShapeを含むメッシュは分割されます。BlendShapeのサイズを削減できます。

### MeshIntegrator

Prefab GameObjectのすべてのメッシュを統合します。BlendShapeを含むメッシュは独立して統合されます。

### StaticMeshIntegrator

Prefab GameObjectのすべての静的メッシュを一つに統合します。

### BoneMeshEraser

ボーン（Erase Rootのヒエラルキー）に関連するメッシュを削除します。
