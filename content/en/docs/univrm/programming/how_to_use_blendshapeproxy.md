---
title: How to Use BlendShapeProxy
aliases: ["/en/dev/univrm-0.xx/programming/how_to_use_blendshapeproxy/"]
---

Work In Progress

## The issue of applying multiple BlendShapes at once

We found that multiple BlendShapes compete with each other when the following expressions are specified:

* LipSync
* Eye Blink
* Eye Gaze control (if eye gaze movements are controlled by BlendShape)
* Emotions

A BlendShape set first may be overwritten with followed BlendShapes so it turns out that the specified expression is not actually shown. In order to address this issue, it is necessary to centralize the management of the BlendShape control.

For `SetValues`, it can merge multiple BlendShapes while avoiding overwriting problems. As such, the specified expression can then be generated correctly.

## ImmediatelySetValue

Assumed to be used for a simple test program.

Example:

```cs
var proxy = GetComponent<VRMBlendShapeProxy>();

proxy.ImmediatelySetValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.A), 1.0f);
```

## AccumulateValue + Apply

Example:

```cs
var proxy = GetComponent<VRMBlendShapeProxy>();

proxy.AccumulateValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_L), 1.0f);
proxy.AccumulateValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_R), 1.0f);
// Apply all the specified BlendShapes at once
proxy.Apply();
```

We recommend `SetValues` (below) to handle the case of applying multiple BlendShapes.

## SetValues

Call `SetValues` to combine multiple BlendShapes.

Example:

```cs
var proxy = GetComponent<VRMBlendShapeProxy>();

proxy.SetValues(new Dictionary<BlendShapeKey, float>
{
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_L), 1.0f},
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_R), 1.0f},
});
```
