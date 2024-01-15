---
date: 2020-07-27T19:28:41+09:00
tags: ["unity"]
aliases: ["/univrm/univrm_bake_blendshape/"]
weight: 3
---

# Bake BlendShape State When Exporting

When exporting the VRM model, current BlendShape value can be set to the basic state.For example, in `SkinnedMeshRenderer`, click on `BlendShapes` and adjust `bs_face.eye_blink` slider to change the value from 0 to 57.8.

![figure](/images/vrm/blendshape_value.jpg)

In export dialog, enabling `Pose Freeze` is required.

![figure](/images/vrm/check_freeze.jpg)

After VRM export:

![figure](/images/vrm/bake_blink.gif)

Basic state (BlendShape value = 0) is changed (eyes are not open fully).

