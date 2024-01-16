---
date: 2020-08-26T15:52:30+09:00
url: "/how_to_make_vrm/setup_vrm/"
description: "正規化済みのモデルに BlendShape、視線、SpringBone などをセットアップして再出力する"
tags: ["unity"]
weight: 3
---

# 2 Set up VRM

## VRM Model

In the previous section, we have introduced how to convert a Humanoid 3D model to VRM

First **drag and drop a VRM file (~.vrm) into the Assets folder**. The **prefab** file associated with the VRM file can be automatically generated.

![img](/images/vrm/vrm_prefab.png)
![img](/images/vrm/vrm_components.jpg)

- normalized
- Click the prefab file (normalized model) and check the inspector window. As seen in the image below, components such as `VRMMeta`, `Animator`, `VRMBlendShapeProxy`, `VRMFirstPerson`, `VRMLookAtHead`, `VRMLookAtBoneApplyer` are attached to the model:

## Open VRM prefab in the scene

`File` - `New Scene`

Deploy the prefab into a scene.

![figure](/images/vrm/alicia_scene2.png)

## Configure VRM-specific settings

Create a new scene by `File` - `New Scene` or use an existing one, then drag the prefab file to the Hierarchy window:

![figure](/images/vrm/vrm_settings.png)

By clicking the prefab's GameObject in `Hierarchy`, the VRM model's information will be displayed in the Inspector window. Note that **spring bone settings can be found in the GameObject named `secondary` **. Also, in `VRM Meta`, make sure [title, author, license (the most important one)](/univrm/meta/univrm_meta) are set.

To make a VRM model fully functional, please set up the following components:

- [Expression and lip-sync (BlendShape)](/univrm/blendshape/univrm_blendshape)
- [First-person settings (Exclude model's head in first-person view for VR applications)](/univrm/firstperson/univrm_firstperson)
- [Eye gaze movements controlled by bone or BlendShape](/univrm/lookat/univrm_lookat)
- [Spring bone (SpringBone/SpringBoneCollider)](/univrm/springbone/univrm_secondary.md)

### Export VRM model again

After the all settings are completed, select the the model (topmost parent GameObject) in `Hierarchy` and again export the model from `VRM0 -> Export UniVRM-0.XX`.

![vrm_menu](/images/vrm/vrm_menu.jpg)

Previous versions: `VRM -> UniVRM-0.XX -> Export humanoid`.

![UniVRMExportHumanoid](/images/vrm/UniVRMExportHumanoid.jpg)

:::note Pose Freeze

`Pose Freeze` is for model normalization during export. The exporter will automatically check whether the export target needs to be normalized.

* For instance,

in Hierarchy if a mesh's rotation or scale is not Default (first VRM export or adding accessories to the VRM model), the model normalization"needs to be performed.

* Other settings such as [Bake BlendShape State](/univrm/blendshape/univrm_bake_blendshape) is also available.

:::

### Done!

Your VRM file is good to go. Try to import the VRM file into [applications](/showcase) that support VRM!

