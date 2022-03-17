---
weight: 3
aliases: [
    "/univrm/settings/lookat_settings/",
    "/docs/univrm/settings/lookat_settings/",
    ]
tags: ["unity"]
---

# LookAt(Blendshape)

VRMLookAtHead + VRMLookAtBlendShapeApplyer の２つのコンポーネントを組み合わせます。
`VRMLookAtBoneApplyer` を削除して、代わりに `VRMLookAtBlendShapeApplyer` をアタッチしてください。

`Inspector -> Add Component -> VRMLookAtBlendShapeApplyer`.

```{figure} /_static/images/vrm/add_vrm_lookat_blendshape.jpg
```

## モーフ制御の視線: VRMLookAtBlendShapeApplyer

```{figure} /_static/images/wiki/blendshape_applyer.png
```

BlendShapeで視線制御するモデル用のコンポーネントです。
事前に、 `LookUp`, `LookDown`, `LookLeft`, `LookRight` の４つの BlendShape を設定してください。

### DegreeMapping

以下の設定で、目標物への相対角度 yaw, pitch の適用度合を調整できます。

* yaw, pitch 角の上限値 => Curve X Range Degree
* yaw, pitch が上限の時の blendShape の適用割合(0 ～ 1)。1にしてください => Curve Y Range Degree

次の３つを設定してください。

* VerticalDown
* VerticalUp
* Horizontal
