---
title: LookAt(Blendshape)
date: 2020-08-06T11:21:06+09:00
weight: 3
aliases: [
    "/en/univrm/settings/lookat_settings/",
    "/en/docs/univrm/settings/lookat_settings/",
    ]
---

`LookAt Blendshape` requires `VRMLookAtHead` and `VRMLookAtBlendShapeApplyer` components. 
In the default setting, please remove `VRMLookAtBoneApplyer` and add `VRMLookAtBlendShapeApplyer` in the VRM model’s Inspector window.

![image](/images/vrm/add_vrm_lookat_blendshape.jpg)

## Control the Eye Gaze with BlendShape: VRMLookAtBlendShapeApplyer

![image](/images/wiki/blendshape_applyer.png)

Please set up the following blendshapes:

* `LookUp` 
* `LookDown` 
* `LookLeft` 
* `LookRight`

### DegreeMapping

In the default setting, when the look angle between the target and the model's head reaches 90 degrees, the BlendShape value is set to 1. Any angle greater than 90 degrees will clamp the BlendShape value to 1. If `Curve X Range Degree` is set to a lower degree, the pupil will move widely even at a small angle change.

* yaw, pitch maximum angle  => `Curve X Range Degree`
* yaw, pitch angle range is mapped to BlendShape [0, 1]. Please set `Curve Y Range Degree` to 1

Please set up `VerticalDown`, `VerticalUp` and `Horizontal`.
