---
title: How to Use BlendShapeProxy
aliases: ["/en/dev/univrm-0.xx/programming/how_to_use_blendshapeproxy/"]
---

Work In Progress

## Why use multiple setters at the same time?

* LipSync
* Eye Blink
* Eye Gaze control (the case where the model's eye gaze movements are controlled by BlendShape)
* Emotions

We found that multiple BlendShapes competed with each other when the above expressions were set from different components.
A BlendShape set before may be overwritten with followed BlendShapes so it turns out that the desired BlendShape is not actually shown.
In order to solve this issue, it is necessary to centralize the management of the BlendShape control.

For `SetValues`, it is assumed to have the ability of synthesizing and excluding BlendShapes so aggregated BlendShapeClips can then generate a proper output.

## ImmediatelySetValue
Assumed to be used for a simple test program.

## AccumerateValue + Apply
We recommend `SetValues` (below) to handle possible accumulated BlendShape values.

## SetValues
Call `SetValues` to combine BlendShapes.
