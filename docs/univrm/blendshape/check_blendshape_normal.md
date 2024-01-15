---
weight: 4
tags: ["unity", "fbx"]
---

# Check BlandShape Normal

Since Unity 2018, when importing fbx into Unity, the BlendShape normal is automatically recalculated. As a result, there is a possibility that artifacts are produced on the model's surface.

:::note Details

If the BlendShape normal is (0, 0, 0), the value of the surface normal should not be changed. It seems that the original BlendShape normal is replaced by the recalculated BlendShape normal, resulting in unexpected changes on the model's surface

:::

## Validate surface normal using MToon's debugging options

Drag fbx to the Hierarchy window and select it. In the Inspector, click `Select -> Materials -> Extract Materials` and choose a folder to save these materials.

Next, select all materials

and change `Shader` to `VRM/MToon`.

:::note Surface normal validation

At this point we set all the materials to MToon for surface normal validation only, so setting up textures' properties is not required.
:::

To visualize the surface normal, go to `Options - Debugging Options - Visualize` and select `Normal`:

![debug normal](/images/vrm/mtoon_normal.gif)

Select a GameObject containing `SkinnedMeshRenderer` with BlendShape. Drag the slider while observing surface normals:

We can see surface normals around nose tip and mouth are not correct.

![debug normal](/images/vrm/broken_normal.jpg)

* Surface normals around the norse tip
* and mouth (e.g. tongue, lower lip)

are totally different 

:::note detail

* import vroid model by blender
* fbx export from blender
* import to unity import
:::

## fix BlendShape normal

How to fix BlendShape if you find something wrong with the above method

Select the `Model` tab in fbx.

Check and Apply `Legacy Blend Shape Normals`.

![fixed normal](/images/vrm/legacy_normal_fixed.jpg)

Make sure the BlendShape is correct.

:::note Differences from before correction

In addition to the tip of the nose and lower lip, the tongue has a completely different normal line.
:::

