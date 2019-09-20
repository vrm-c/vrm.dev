---
title: BlendShape Setting
linkTitle: BlendShape
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T16:00:00Z
url: /en/univrm/components/blendshape/
weight: 2
resouces:
- "*.png"
aliases:
- /en/univrm/components/univrm_blendshape/
---

New features introduced in UniVRM v0.45 [can be found here](https://github.com/vrm-c/UniVRM/wiki/BlendShape-Setup).

## VRMBlendShapeProxy

{{< imgproc vrm_blend_shape_proxy Fit "540x359" >}}
The figure above is VRMBlendShapeProxy in the Inspector window at runtime. VRMBlendShapeProxy can be enabled by clicking the play button in edit mode
{{< /imgproc >}}

How to use:

- Set BlendShapeAvatar `VRMBlendShapeProxy->BlendShapeAvatar` in the Inspector
- Change BlendShapeClip value between 0 and 1 at runtime (e.g. BLINK, JOY)

## BlendShapeAvatar

Expressions can be created in the Inspector.

{{< imgproc vrm_blend_shape_proxy_editor Fit "259x53" >}}
Double click the <code>Blend Shape Avatar</code> field
{{< /imgproc >}}

or

{{< imgproc blend_shape_avatar_asset Fit "213x602" >}}
Click <code>BlendShape</code> directly in the Project view
{{< /imgproc >}}

{{< imgproc blend_shape_avatar_editor Fit "273x428" >}}
The Inspector of BlendShape editor
{{< /imgproc >}}

Select expressions and customize the values. For example, we select `Fun` and edit its expressions as shown in the following: 

{{< imgproc blend_shape_clip Fit "536x884" >}}
Example: Set <code>mouth_smile</code>, <code>eye_smile</code> and <code>eyeblow_smile</code> to 100
{{< /imgproc >}}

The individual blend shapes such as eyebrow, eye and mouth can be merged into one expression like the image above. Created BlendShape names can be specified. 

After changing slider value and creating BlendShape, click the Apply button for saving the current status.

## BlendShape preset

{{< imgproc blend_shape_preset Fit "552x507" >}}
Select <code>Preset</code>
{{< /imgproc >}}

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

{{< imgproc vrm_blend_shape_proxy_runtime Fit "412x86" >}}
<code>Preset</code> is used
{{< /imgproc >}}

You can operate expressions from the Inspector.

## [Option] Add additional facial expressions

{{< imgproc vrm_blend_shape_proxy_runtime Fit "412x86" >}}
Double click the <code>Blend Shape Avatar</code> field and click <code>Add BlendShapeClip</code>
{{< /imgproc >}}

Enter a name for the new BlendShapeClip file (BlendShapeClipName.asset) and save it. Then, select the new generated button in the BlendShapeClip list (the last button) and enter a name. Also, please set facial expression values for new BlendShape clips.

{{< imgproc blend_shape_clip_option Fit "424x301" >}}
Click the new expression "びっくり" (surprised)
{{< /imgproc >}}

You can call it from the codes shown as follows:

```cs
// Call this expression with string since it belongs to unknown category
proxy.SetValue("びっくり", 1.0f); // Assign a value between the range 0~1
```

After the setting is done, don't forget to export VRM file for being able to use the created expressions at runtime.  

## [Option] Morph material color

{{< imgproc blend_shape_clip_material Fit "551x453" >}}
The setting of Material morph. Double click the <code>Current clip</code> field or directly select the BlendShape clip (e.g. BlendShape.XXX or your created name) in the Project view
{{< /imgproc >}}
