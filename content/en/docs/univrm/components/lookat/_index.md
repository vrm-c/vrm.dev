---
title: Eye Control
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T16:00:00Z
url: /en/univrm/components/lookat/
weight: 4
aliases:
- /en/univrm/components/univrm_lookat/
---

## VRMLookAtHead

{{< imgproc vrm_look_at_head Fit "556x205" >}}
VRMLookAtHead
{{< /imgproc >}}

This component calculates the direction from the model's head to the target.

### Target

The target to be tracked by the model's eyes. If a camera is set as Target, the model will always look at the camera.

## Eye control with bone: VRMLookAtBoneApplyer

{{< imgproc vrm_look_at_bone_applyer Fit "546x473" >}}
VRMLookAtBoneApplyer
{{< /imgproc >}}

Apply the parameters of the calculated eye gaze direction of VRMLookAtHead to EyeBone.

### DegreeMapping

Adjust angles when applying rotation to EyeBone.

- HorizontalOuter: The angle limit of horizontally outward direction
- HorizontalInner: The angle limit of horizontally inward direction
- VerticalDown: The angle limit of vertically downward direction
- VerticalUp: The angle limit of vertically upward direction 

## Eye control with BlendShape: VRMLookAtBlendShapeApplyer

The component for controlling the eyes with BlendShape. Please delete VRMLookAtBoneApplyer and attach VRMLookAtBlendShapeApplyer instead. Settings related to VRMLookAtBlendShape [can be found here](https://github.com/vrm-c/UniVRM/wiki/LookAt-Settings).
