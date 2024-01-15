---
weight: 2
aliases: ["/univrm/settings/blendshape_setup/"]
tags: ["unity"]
---

# BlendShape Setup (v0.45)

## Assets related to BlendShape

Once a VRM file is imported, BlendShapeClips (Preset) will be in a folder like this: `ModelName.BlendShapes`

![figure](/images/wiki/blendshapeclip_assets.png)

The Inspector of BlendShapeAvatar Asset

![figure](/images/wiki/blendshapeavatar.png)

## Setting screen

The Asset has the following setting screens

### The Inspector of BlendShapeAvatar Asset

#### Editor tab

BlendShapeClip Selection / Creation

![figure](/images/wiki/select_blendshapeavatar.png)

#### List tab (Starting from v0.45)

BlendShapeClip List

![figure](/images/wiki/list.png)

### The Inspector of BlendShapeClip Asset

#### BlendShape tab

Create the BlendShape setting:

![figure](/images/wiki/alicia_binary.png)

#### BlendShape List tab

You can see the values created from the BlendShape tab.

![figure](/images/wiki/blendshape_angry.png)

#### Material List tab

You can create a [BlendShape version of LookAt](/univrm/lookat/lookat_blendshape), change the color with BlendShape, etc.

![figure](/images/wiki/material_color.png)

## BlendShapeClip Settings

Create a facial expression for a BlendShapeClip (not limited to the face).

### 1 Select a BlendShapeClip

Select a BlendShapeClip from the Inspector of BlendShapeAvatar

![figure](/images/wiki/select_blendshapeavatar.png)

Or click a BlendShapeClip Asset directly in the Project window

![figure](/images/wiki/select_blendshapeclip.png)

### 2 Change the values of the sliders to make a facial expression

The names of the existing `SkinnedMeshRenderers` will list in the Inspector window once you click the BlendShape tab.Click any listed name and you can then adjust the BlendShape value.The change value is reflected immediately.The `Apply` button is removed starting from v0.45.\"

### 3 Check the model's BlendShape in Preview

You can test changes in BlendShape by sliding the value (`Preview Weight Slider`) between 0 ~ 1

Click and drag the `left / right` mouse button to change the viewing perspective

Click and drag the `middle` mouse button to move horizontally / vertically

### The Binary value setting for BlendShape (v0.45)

![figure](/images/wiki/alicia_binary.png)

The Binary option is added into the BlendShape setting in v0.45. It is for users who don't want to display the middle state of the BlendShape. The target value will be automatically rounded off. A BlendShape with the binary setting being active will only have a representative expression like a screenshot.

This feature will become effective when a v0.45-installed application is loaded

![figure](/images/wiki/binary.png)

