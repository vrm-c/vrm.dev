---
title: "Bake BlendShape State When Exporting"
date: 2020-07-27T19:28:41+09:00
tags: ["blendshape"]
---

When exporting the VRM model, current BlendShape value can be set to the basic state.
For example, in `SkinnedMeshRenderer`, click on `BlendShapes` and adjust `bs_face.eye_blink` slider to change the value from 0 to 57.8.

{{<img width="400" src="images/vrm/blendshape_value.jpg" >}}

In export dialog, enabling `Pose Freeze` is required.

{{<img width="400" src="images/vrm/check_freeze.jpg">}}

After VRM export:

{{<img src="images/vrm/bake_blink.gif">}}

Basic state (BlendShape value = 0) is changed (eyes are not open fully).
