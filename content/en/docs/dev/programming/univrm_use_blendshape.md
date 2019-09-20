---
title: "Use BlendShape"
linkTitle: "Use BlendShape at runtime"
date: 2018-04-16T16:30:00+09:00
weight: 3
---

## Apply BlendShape from a script

{{< highlight cs >}}
var proxy=GetComponent<VRMBlendShapeProxy>();

// Call enum 
proxy.SetValue(BlendShapePreset.A, 1.0f); // Assign a value between 0 and 1

// Call string
proxy.SetValue("A", 1.0f);
{{< / highlight >}}

## Apply multiple BlendShapes at once

For example,

For Blink_L

* MeshA eye_L=100
* MeshA eye_R=1

For Blink_R

* MeshA eye_L=1
* MeshA eye_R=100

If both BlendShapes are defined and enabled as shown below, later only those items set before can be applied.

{{< highlight cs >}}
proxy.SetValue(BlendShapePreset.Blink_L, 1.0f);
proxy.SetValue(BlendShapePreset.Blink_R, 1.0f);
{{< / highlight >}}

In this case, the following codes are workable:

{{< highlight cs >}}
// Keep the value and wait for Apply function
proxy.SetValue(BlendShapePreset.Blink_L, 1.0f, false);
proxy.SetValue(BlendShapePreset.Blink_R, 1.0f, false);
// Apply all the BlendShapes at once
proxy.Apply();
{{< / highlight >}}
