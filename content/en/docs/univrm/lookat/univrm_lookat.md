---
title: "Eye Control"
date: 2018-04-16T16:30:00+09:00
weight: 1
aliases: ["/en/univrm/components/univrm_lookat/"]
---

To control the eye, the relative rotation (Yaw, Pitch) between the VRM model's head and the LookAt target is calculated and then applied to the eye.

There are two types of eye control settings:

* `VRMLookAtHead` + `VRMLookAtBoneApplyer` components
* `VRMLookAtHead` + `VRMLookAtBlendShapeApplyer` components

## LookAt Type

There are three ways to apply Yaw and Pitch angles relative to LookAt target.
Please set up one of them listed in the followings based on the format of your model:

### Bone

[eye movement controlled by Eye Bone]({{< relref "lookat_bone.md" >}})

### BlendShape

[eye movement controlled by BlendShape vertices]({{< relref "lookat_blendshape.md" >}})

### TextureUV

[eye movement controlled by `UV Offset` of the eye's texture]({{< relref "lookat_uv.md" >}})

## VRMLookAtHead

|{{< img src="images/vrm/VRMLookAtHead.png" >}}|
|-----|
|VRMLookAtHead|

This component calculates the direction from the model's head to the target.

### Target

> This is the setting for Application, not for VRM model setup

The target to be tracked by the model's eyes. If a camera is set as Target, the model will always look at the camera.

## Viewpoint Position

The viewpoint position is obtained by `HeadBonePosition` + `FirstPersonOffset`

{{< img src="images/vrm/firstperson.png" >}}
