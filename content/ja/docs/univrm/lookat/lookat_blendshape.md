---
title: LookAt(Blendshape)
weight: 3
aliases: [
    "/univrm/settings/lookat_settings/",
    "/docs/univrm/settings/lookat_settings/",
    ]
---

VRMLookAtHead + VRMLookAtBlendShapeApplyer の２つのコンポーネントを組み合わせます。
`VRMLookAtBoneApplyer` を削除して、代わりに `VRMLookAtBlendShapeApplyer` をアタッチしてください。

## モーフ制御の視線: VRMLookAtBlendShapeApplyer

![image](/images/wiki/blendshape_applyer.png)

BlendShapeで視線制御するモデル用のコンポーネントです。
事前に、 `LookUp`, `LookDown`, `LookLeft`, `LookRight` の４つの BlendShape を設定してください。

VRMLookAtBlendShapeに関する設定方法[こちら]({{< relref "lookat_blendshape.md" >}})  を参照してください。

### DegreeMapping

以下の設定で、目標物への相対角度 yaw, pitch の適用度合を調整できます。

* yaw, pitch 角の上限値 => Curve X Range Degree
* yaw, pitch が上限の時の blendShape の適用割合(0 ～ 1)。1にしてください => Curve Y Range Degree

次の３つを設定してください。

* VerticalDown
* VerticalUp
* Horizontal
