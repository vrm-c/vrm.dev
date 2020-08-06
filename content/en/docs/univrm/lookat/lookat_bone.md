---
title: LookAt(Bone)
weight: 2
aliases: [
    "/en/univrm/settings/lookat_settings/",
    "/en/docs/univrm/settings/lookat_settings/",
    ]
---

VRMLookAtHead + VRMLookAtBoneApplyer の２つのコンポーネントを組み合わせます。

## Eye control with bone: VRMLookAtBoneApplyer

|{{< img src="images/vrm/VRMLookAtBoneApplyer.png" >}}|
|-----|
|VRMLookAtBoneApplyer|

Apply the parameters of the calculated eye gaze direction of VRMLookAtHead to EyeBone.

### DegreeMapping

Adjust angles when applying rotation to EyeBone.

* HorizontalOuter: The angle limit of horizontally outward direction
* HorizontalInner: The angle limit of horizontally inward direction
* VerticalDown: The angle limit of vertically downward direction
* VerticalUp: The angle limit of vertically upward direction 
