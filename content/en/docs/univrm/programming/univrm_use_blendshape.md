---
title: "BlendShape Manipulations"
linkTitle: "BlendShape manipulations at runtime"
date: 2018-04-16T16:30:00+09:00
aliases: ["/en/dev/univrm-0.xx/programming/univrm_use_blendshape/"]
weight: 3
---

## Environment
UniVRM v0.58.0

## Methods

* [Recommended] `SetValues`
* [Not Recommended] `ImmediatelySetValue`
* [For Advanced Users] `AccumulateValue`, `Apply`

## Apply BlendShape weight from Script

Call `SetValues` function once to create the specific expression (merged by multiple BlendShapes) in a frame:

{{< highlight cs >}}
var proxy = GetComponent<VRMBlendShapeProxy>();

proxy.SetValues(new Dictionary<BlendShapeKey, float>
{
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.A), 1f}, // Assign the Weight of a BlendShape clip between 0 and 1
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.Joy), 1f}, // Specify a system-defined BlendShape clip by enum
    {BlendShapeKey.CreateUnknown("USER_DEFINED_FACIAL"), 1f}, // Specify a user-defined BlendShape clip by string
});
{{< / highlight >}}

## Why use SetValues when applying multiple BlendShape at once?

We found that multiple BlendShapes compete with each other when the following expressions are specified:

* LipSync
* Eye Blink
* Eye Gaze control (if eye gaze movements are controlled by BlendShape)
* Emotions

A BlendShape set first may be overwritten with followed BlendShapes so it turns out that the specified expression is not actually shown. In order to solve this issue, it is necessary to centralize the management of the BlendShape control.

For `SetValues`, it can merge multiple BlendShapes without concerning overwritten issues so the specified expression can then be generated correctly.

Blink example:

For Blink_L

  * The weight value for BlendShape `eye_L` of `Mesh_A` is 100
  * The weight value for BlendShape `eye_R` of `Mesh_A` is 1

For Blink_R

  * The weight value for BlendShape `eye_L` of `Mesh_A` is 1
  * The weight value for BlendShape `eye_R` of `Mesh_A` is 100

If we use `ImmediatelySetValue` function for eye blinking,

{{< highlight cs >}}
proxy.ImmediatelySetValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_L), 1.0f);
proxy.ImmediatelySetValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_R), 1.0f);
{{< / highlight >}}

The weight values set for Blink_L will be overwritten by Blink_R. To resolve this issue, we use `SetValues` or `AccumulateValue` to correctly manipulate specified BlendShapes:

{{< highlight cs >}}
proxy.SetValues(new Dictionary<BlendShapeKey, float>
{
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_L), 1.0f},
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_R), 1.0f},
});
{{< / highlight >}}

{{< highlight cs >}}
proxy.AccumulateValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_L), 1.0f);
proxy.AccumulateValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_R), 1.0f);
// Apply all the specified BlendShapes at once
proxy.Apply();
{{< / highlight >}}
