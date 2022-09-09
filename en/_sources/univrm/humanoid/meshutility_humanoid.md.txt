---
tags: ["unity"]
weight: 3
---

# HumanoidComponent

`UniVRM-0.60.0`

fbx が無くても、シーンから直接 humanoid avatar を作成できます。

## 使い方

ヒューマノイドボーンがあるシーンを用意します。

例として

https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0/RiggedFigure/glTF-Binary

で説明します。

まず、 `RiggedFigure.glb` を Asset フォルダに import してください。
UniVRM の `glb` import で prefab が生成されます。

新規のシーンに `RiggedFigure` prefab をインスタンス化します。

AddComponent で `Humanoid` を追加してください。(MeshUtility.Humanoid。UniVRMに含まれています。)

```{figure} /_static/images/vrm/bone_required.jpg
```

適当に Bone を当てはめます。

```{figure} /_static/images/vrm/create_avatar.jpg
```

`Create UnityEngine.Avatar` ボタンを押します。

```{figure} /_static/images/vrm/humanoid_animator.jpg
```

humanoid avatar が新規に作成されます。

このまま、T-Pose にして VRM 化することもできます。
