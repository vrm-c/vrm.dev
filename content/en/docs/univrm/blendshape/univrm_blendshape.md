---
title: "BlendShape Setting"
linkTitle: "BlendShape"
date: 2018-04-16T16:30:00+09:00
weight: 2
---

New features introduced in UniVRM v0.45 
[can be found here](../../settings/blendshape_setup/)

## VRMBlendShapeProxy

|{{< img src="images/vrm/VRMBlendShapeProxy.png" >}}|
|-----|
|The figure above is VRMBlendShapeProxy in the Inspector window at runtime. VRMBlendShapeProxy can be enabled by clicking the play button in edit mode|

How to use:

* Set BlendShapeAvatar `VRMBlendShapeProxy->BlendShapeAvatar` in the Inspector
* Change BlendShapeClip value between 0 and 1 at runtime (e.g. BLINK, JOY)

## BlendShapeAvatar

Expressions can be created in the Inspector.

|{{< img src="images/vrm/VRMBlendShapeProxyEditor.png" >}}|
|-----|
|Double click the``Blend Shape Avatar``field|

or

|{{< img src="images/vrm/BlendShapeAvatarAsset.png" >}}|
|-----|
|Click``BlendShape``directly in the Project view|

|{{< img src="images/vrm/BlendShapeAvatarEditor.png" >}}|
|-----|
|The Inspector of BlendShape editor|

Select expressions and customize the values. 
For example, we select``Fun``and edit its expressions as shown in the following: 

|{{< img src="images/vrm/BlendShapeClip.png" >}}|
|-----|
|Example: Set`mouth_smile`,`eye_smile`and`eyeblow_smile`to 100|

The individual blend shapes such as eyebrow, eye and mouth can be merged into one expression like the image above. Created BlendShape names can be specified. 

After changing slider value and creating BlendShape, click the Apply button for saving the current status.

## BlendShape preset

|{{< img src="images/vrm/BlendShape_Preset.png" >}}|
|-----|
|Select``Preset``|

The predefined names for the BlendShape clips. The following predefined expressions are available:

### NEUTRAL
Specified as the standard facial expression and assumed to be used in standby state.

### A, I, U, E, O
Corresponds to the sound of lip-sync``aa・ih・ou・E・oh``.

### Blink
Eye blink.

### Blink_L, Blink_R
Blinks with only one eye.

### Joy, Angry, Sorrow, Fun
Emotion.

### LookUp, LookDown, LookLeft, LookRight
Used when the model's eyes are controlled by BlendShape.

### Unknown
New created expressions are specified as "Unknown".

## Change the value of BlendShapeProxy (at runtime)

|{{< img src="images/vrm/VRMBlendShapeProxyRuntime.png" >}}|
|-----|
|``Preset``is used|

You can operate expressions from the Inspector.

## [Option] Add additional facial expressions

|{{< img src="images/vrm/VRMBlendShapeProxyRuntime.png" >}}|
|-----|
|Double click the``Blend Shape Avatar``field and click``Add BlendShapeClip``|

Enter a name for the new BlendShapeClip file (BlendShapeClipName.asset) and save it. Then, select the new generated button in the BlendShapeClip list (the last button) and enter a name. Also, please set facial expression values for new BlendShape clips.

|{{< img src="images/vrm/BlendShapeClipOption.png" >}}|
|-----|
|Click the new expression "びっくり" (surprised)|

You can call it from the codes shown as follows:

```cs
// Call this expression with string since it belongs to unknown category
proxy.ImmediatelySetValue("びっくり", 1.0f); // Assign a value between the range 0~1
```

After the setting is done, don't forget to export VRM file for being able to use the created expressions at runtime.  

## [Option] Morph material color

|{{< img src="images/vrm/BlendShapeClipMaterial.png" >}}|
|-----|
|The setting of Material morph. Double click the``Current clip``field or directly select the BlendShape clip (e.g. BlendShape.XXX or your created name) in the Project view|