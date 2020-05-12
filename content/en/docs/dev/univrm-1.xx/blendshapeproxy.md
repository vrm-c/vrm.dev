---
title: "BlendShapeProxy Updates"
date: 2020-05-11T17:05:49+09:00
url: "en/dev/univrm-1.xx/blendshapeproxy/"
---

## Update order for BlendShape-related components

As described in https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm-1.0_draft/README.md#update-order, it is recommended to update as the following order:

* Humanoid
* LookAt
* BlendShape

## Integrate with LookAt

To reduce the processing order problem of LookAt and BlendShape, `VRMLookAtHead`, `VRMLookAtBoneApplyer` and `VRMLookAtBlendShapeApplyer` have been integrated into `VRMBlendShapeProxy`.

## BlendShapeClip's exclude functions

For example, when `fun` and `blink` are applied at the same time, there are models whose eyes become weird.
To address this issue, a function that can disable `blink` when applying `fun` is created. As of vrm1.0, there are three types of exclude functions:

https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm-1.0_draft/README.md#blendshape-specification

* ignoreBlink
* ignoreLookAt
* ignoreMouth

## SetValue and Apply

In `UniVRM-0.X` there are two systems `BlendShapeProxyy.SetValueImmediate` and `BlendSahpeProxy.SetValue + Apply`. In `UniVRM-1.X`, `BlendShapeProxyy.SetValueImmediate` has been removed.

To make `ignoreBlink`, etc. functional, it is necessary to accumulate the rest of the included blendshape values and then process them at once. (Initially it was designed to be stored and applied by the application side)

## The timing of using Apply function

### None

Please call `Apply` explicitly on the user application side.

### Update

`Apply` is called in VRMBlendShapeProxy.Update.

Note that it is better to use VRMBlendShapeProxy.Apply when the necessary blendshape values are set.

### LateUpdate

`Apply` is called in VRMBlendShapeProxy.LateUpdate.

When fine controlling is not required.

