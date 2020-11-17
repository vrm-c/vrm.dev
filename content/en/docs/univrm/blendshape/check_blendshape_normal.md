---
title: "Check BlandShape Normal"
date: 2020-11-16T11:21:12+09:00
weight: 4
tags: ["unity", "fbx"]
---

Since Unity 2018, when importing fbx into Unity, the BlendShape normal is automatically recalculated. As a result, there is a possibility that artifacts are produced on the model's surface.

{{% alert title="Details" color="info" %}}

If the BlendShape normal is (0, 0, 0), the value of the surface normal should not be changed. It seems that the original BlendShape normal is replaced by the recalculated BlendShape normal, resulting in unexpected changes on the model's surface

{{% /alert %}}

## Validate surface normal using MToon's debugging options

Drag fbx to the Hierarchy window and select it. In the Inspector, click `Select -> Materials -> Extract Materials` and choose a folder to save these materials.
Next, select all materials and change `Shader` to `VRM/MToon`.

{{% alert title="Surface normal validation" color="info" %}}

At this point we set all the materials to MToon for surface normal validation only, so setting up textures' properties is not required. 

{{% /alert %}}

To visualize the surface normal, go to `Options - Debugging Options - Visualize` and select `Normal`:

![debug normal](/images/vrm/mtoon_normal.gif)

Select a GameObject containing `SkinnedMeshRenderer` with BlendShape. Drag the slider while observing surface normals:

![debug normal](/images/vrm/broken_normal.jpg)

We can see surface normals around nose tip and mouth are not correct.

{{% alert title="Steps to reproduce:" color="info" %}}

* Import VRoid model into Blender
* Export vrm as fbx
* Import fbx into Unity

{{% /alert %}}

## Fix BlendShape normal

To fix BlendShape normal, in the fbx's inspector, click `Select -> Model -> Legacy Blend Shape Normals` and check the box.

Now confirm whether the BlendShape normal has been fixed:

![fixed normal](/images/vrm/legacy_normal_fixed.jpg)

{{% alert title="Compare with the previous results" color="info" %}}

Surface normals around the norse tip and mouth (e.g. tongue, lower lip) are totally different 

{{% /alert %}}
