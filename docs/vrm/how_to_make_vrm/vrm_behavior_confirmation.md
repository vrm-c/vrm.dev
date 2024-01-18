---
date: 2020-08-26T15:52:48+09:00
url: "/how_to_make_vrm/vrm_behavior_confirmation/"
description: "Unityを Play モードにして、BlendShape、SpringBone などの動作を確認する"
tags: ["unity"]
weight: 4
---

# Check Your VRM in Play Mode

In this section, we assume you have made a VRM model and want to test it in play mode.

## Check Model's Eye Movements

Set `AnimationClip/AnimationController` and set [viewing target](/univrm/lookat/univrm_lookat.md#target) in``VRMLookAtHead -> Target``(the head orientation towards the target). For example, you can create a cube as a target from ``GameObject -> 3D Object -> Cube``. Next, serach head component in``VRMLookAtHead -> Head``. After the corresponding components are assigned, check the model's motion in the scene. The model will track the target position in Play Mode. You can drag the object position to test whether the model's eyes are constantly tracking the object. The model's close-up face can be viewed in Inspector window.

![LookAtTarget](/images/vrm/LookAtTarget.png)

![TargetTracking](/images/vrm/TargetTracking.png)

## Check Model's Expressions

"To test the model's expressions, fairly simple test scripts `AIUEO` and `Blinker` are provided. After setting up [BlendShape](/univrm/blendshape/univrm_blendshape.md#vrmblendshapeproxy), click `Add Component` at the bottom of model's Inspector window to add `AIUEO` script or drag the script directly to Inspector. After `AIUEO` is set, lip synchronization animation that `aa`, `ih`, `ou`, `E`, `oh` switches in turn can be created in the scene. Similarly, if `Blinker` is set, eye blink animation that plays periodically can be created. See [runtime VRM loader sample](https://github.com/vrm-c/UniVRM/releases) (download UniVRM-RuntimeLoaderSample-0.XX) for more details on how to use these scripts.

![BlendShapeProxy](/images/vrm/BlendShapeProxy.png)

Double click the``BlendShapeAvatar`` field to set up expressions for the 3D model

![AddExpressionScripts](/images/vrm/AddExpressionScripts.png)

![InspectorFaceView](/images/vrm/InspectorFaceView.png)

