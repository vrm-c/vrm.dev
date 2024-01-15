---
linkTitle: "BlendShape"
date: 2018-04-16T16:30:00+09:00
weight: 1
aliases: ["/univrm/components/univrm_blendshape/"]
tags: ["unity"]
---

# BlendShape Setting

New features introduced in UniVRM v0.45:

* [BlendShape setting in Inspector](/univrm/blendshape/blendshape_setup)
* [Bake BlendShape state](/univrm/blendshape/univrm_bake_blendshape)

## VRMBlendShapeProxy

![figure](/images/vrm/VRMBlendShapeProxy.png)

The figure above is VRMBlendShapeProxy in the Inspector window at runtime. VRMBlendShapeProxy can be enabled by clicking the play button in edit mode

How to use:

* Set BlendShapeAvatar `VRMBlendShapeProxy->BlendShapeAvatar` in the Inspector
* Change BlendShapeClip value between 0 and 1 at runtime (e.g. BLINK, JOY)

## BlendShapeAvatar

Expressions can be created in the Inspector.

![Double click the``Blend Shape Avatar``field](/images/vrm/VRMBlendShapeProxyEditor.png)

Or

![Click``BlendShape``directly in the Project view](/images/vrm/BlendShapeAvatarAsset.png)

![The Inspector of BlendShape editor](/images/vrm/BlendShapeAvatarEditor.png)

Select expressions and customize the values. For example, we select``Fun``and edit its expressions as shown in the following: 

![Example: Set`mouth_smile`,`eye_smile`and`eyeblow_smile`to 100](/images/vrm/BlendShapeClip.png)

The individual blend shapes such as eyebrow, eye and mouth can be merged into one expression like the image above. Created BlendShape names can be specified. 

After changing slider value and creating BlendShape, click the Apply button for saving the current status.

## BlendShape preset

![Select `Preset`](/images/vrm/BlendShape_Preset.png)

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

New created expressions are specified as `Unknown`.

## Change the value of BlendShapeProxy (at runtime)

![`Preset`is used](/images/vrm/VRMBlendShapeProxyRuntime.png)

You can operate expressions from the Inspector.


## [Option] Add additional facial expressions

![figure](/images/vrm/VRMBlendShapeProxyRuntime.png)

Enter a name for the new BlendShapeClip file (BlendShapeClipName.asset) and save it. Then, select the new generated button in the BlendShapeClip list (the last button) and enter a name. Also, please set facial expression values for new BlendShape clips.

![figure](/images/vrm/BlendShapeClipOption.png)

You can call it from the codes shown as follows:

```csharp
// unknownなのでstringで呼び出し
proxy.ImmediatelySetValue("びっくり", 1.0f); // 0から1で指定
```

## [Option] Morph material color

![figure](/images/vrm/BlendShapeClipMaterial.png)

The setting of Material morph. Double click the``Current clip``field or directly select the BlendShape clip (e.g. BlendShape.XXX or your created name) in the Project view

