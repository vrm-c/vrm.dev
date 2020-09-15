---
title: LookAt(Bone)
date: 2020-08-06T11:25:13+09:00
weight: 2
aliases: [
    "/en/univrm/settings/lookat_settings/",
    "/en/docs/univrm/settings/lookat_settings/",
    ]
tags: ["unity"]
---

`LookAt Bone` requires `VRMLookAtHead` and `VRMLookAtBoneApplyer` components. 

## Control the Eye Gaze with bone: VRMLookAtBoneApplyer

|{{< img src="images/vrm/VRMLookAtBoneApplyer.png" >}}|
|-----|
|VRMLookAtBoneApplyer|

Apply the parameters of the calculated eye gaze direction of `VRMLookAtHead` to EyeBone.

### DegreeMapping

* yaw, pitch maximum angle  => `Curve X Range Degree`
* eye bone's rotation angle when yaw, pitch angle is at maximum => `Curve Y Range Degree`

Please set up `VerticalDown`, `VerticalUp`, `HorizontalOuter`, `HorizontalInner`:

* HorizontalOuter: The movable range of horizontal outward direction
* HorizontalInner: The movable range of horizontal inward direction
* VerticalDown: The movable range of vertical downward direction
* VerticalUp: The movable range of vertical upward direction
