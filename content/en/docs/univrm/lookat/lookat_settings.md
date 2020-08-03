---
title: LookAt-Settings
---

## Control the Eye Gaze with the Eye Bone
Please refer to [Eye Control]({{< relref "univrm_lookat.md" >}}).

## Control the Eye Gaze with the BlendShape
Please refer to [Eye Control]({{< relref "univrm_lookat.md" >}}).

## Control the Eye Gaze with the UV Texture
A method that can move the model's eyes by sliding Texture up, down, left, or right.
`Unity chan` belongs to this type.

### Search the eye material

Please search the eye material in the Project window. The `Tiling Offset` setting will be displayed in the Inspector window.

![image](/images/wiki/material_tiling_offset.png)

The values should be `1, 1, 0, 0` (if the values are different, the followings are for reference only).

Now you can try to change the values of `Offset` X and Y. X value is left or right movements for the eyes. Y value is for moving the eyes up and down.
Since we have found where the eye materials are, we set the X and Y values back to `0` and proceed to the next step.

## Set up LookUp, LookDown, LookLeft and LookRight
In the following example, we choose `unlit/transparent cutout` for material

### LookLeft example
Please select the `LookLeft` asset in the Project window

![image](/images/wiki/lookleft.png)

* Click `Material List`
* Click `+`
* Select `eye_L1` - `_MainTex_ST`
* Set `Tliling = 1, 1`, `Offset = 0, 0`

![image](/images/wiki/tiling_offset_1100.png)

* Adjust Offset value in the LookLeft setting
* Repeat the same procedure for `eye_R1`
* Adjust `Offset` X for Left and Right and `Offset` Y for Up and Down. For example, `LookLeft Offset = -0.2, 0`, `LookRight Offset = 0.2, 0`, `LookUp Offset = 0, -0.2`, `LookDown Offset = 0, 0.2`

![image](/images/wiki/look_left.png)

[© UTJ/UCL](http://unity-chan.com/)

### Add VRMLookAtBlendShapeApplyer in the VRM model's Inspector window

* Remove VRMLookAtBoneApplyer
* Add VRMLookAtBlendShapeApplyer

![image](/images/wiki/blendshape_applyer.png)

In the default setting, when the look angle between the target and the model's head reaches 90 degrees, the BlendShape value is set to 1. Any angle greater than 90 degrees will clamp the BlendShape value to 1. By setting Curve X Range Degree to a lower degree, the pupil will move widely even at a small angle change.
