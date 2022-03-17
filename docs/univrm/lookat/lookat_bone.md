---
weight: 2
aliases: [
    "/univrm/settings/lookat_settings/",
    "/docs/univrm/settings/lookat_settings/",
    ]
tags: ["unity"]
---

# LookAt(Bone)

VRMLookAtHead + VRMLookAtBoneApplyer の２つのコンポーネントを組み合わせます。

## ボーン制御の視線: VRMLookAtBoneApplyer

```{figure} /_static/images/vrm/VRMLookAtBoneApplyer.png
VRMLookAtBoneApplyer
```

VRMLookAtHeadの計算した視線方向のパラメーターをEyeBoneに適用します。

### DegreeMapping

目標物への相対角度 yaw, pitch を、eye bone のローテンションにそのまま代入すると目が動きすぎてしまいます。

* yaw, pitch 角の上限値 => Curve X Range Degree
* yaw, pitch が上限の時の eye bone の回転角度 => Curve Y Range Degree

で設定できます。
次の４方向を設定してください。

* VerticalDown
* VerticalUp
* HorizontalOuter
* HorizontalInner

横方向は左右ではなく、内外になります。
