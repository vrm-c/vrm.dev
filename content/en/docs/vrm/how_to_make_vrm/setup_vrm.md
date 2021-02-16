---
title: "2. Set up VRM"
date: 2020-08-25T17:26:05+09:00
url: "/en/how_to_make_vrm/setup_vrm/"
description: "Normalized vrm model, BlendShape, LookAt, SpringBone and FirstPerson configurations, model re-export"
tags: ["unity"]
weight: 3
---

In the previous section, we have introduced how to convert a Humanoid 3D model to VRM. 
Now we are going to show how to import and set up a VRM file.

## Import the VRM file

First **drag and drop a VRM file (~.vrm) into the Assets folder**. The **prefab** file associated with the VRM file can be automatically generated.

{{< img src="images/vrm/vrm_prefab_en.png" >}}
<hr>

Click the prefab file (normalized model) and check the inspector window. As seen in the image below, components such as `VRMMeta`, `Animator`, `VRMBlendShapeProxy`, `VRMFirstPerson`, `VRMLookAtHead`, `VRMLookAtBoneApplyer` are attached to the model:

{{< img src="images/vrm/vrm_components.jpg" width="350">}}
<hr>

## Open VRM prefab in the scene

Create a new scene by `File` - `New Scene` or use an existing one, then drag the prefab file to the Hierarchy window:

{{< img src="images/vrm/alicia_scene2.png" >}}
<hr>

### Custom settings in VRM

By clicking the prefab's GameObject in `Hierarchy`, the VRM model's information will be displayed in the Inspector window. Note that **spring bone settings can be found in the GameObject named "secondary"**. Also, in `VRM Meta`, make sure [title, author, license (the most important one)]({{< relref "univrm_meta.md" >}}) are set.

{{< img src="images/vrm/vrm_settings.png" >}}
<hr>

To make a VRM model fully functional, please set up the following components:

* [Expression and lip-sync (BlendShape)]({{< relref "univrm_blendshape.md" >}})
* [First-person settings (Exclude model's head in first-person view for VR applications)]({{< relref "univrm_firstperson.md" >}})
* [Eye gaze movements controlled by bone or BlendShape]({{< relref "univrm_lookat.md" >}})
* [Spring bone (SpringBone/SpringBoneCollider)]({{< relref "univrm_secondary.md" >}})

### Export VRM model again

After the all settings are completed, select the the model (topmost parent GameObject) in `Hierarchy` and again export the model from `VRM0 -> Export UniVRM-0.XX`. 

{{< img src="images/vrm/vrm_menu.jpg" width="250" height="225" alt="vrm_menu">}}
<br>

Previous versions: ``VRM -> UniVRM-0.XX -> Export humanoid``.

{{< img src="images/vrm/UniVRMExportHumanoid.jpg" width="400" height="225" alt="UniVRMExportHumanoid">}}
<br>

{{% alert title="Pose Freeze" color="info" %}}

`Pose Freeze` is for model normalization during export. The exporter will automatically check whether the export target needs to be normalized.
For instance, in Hierarchy if a mesh's rotation or scale is not Default (first VRM export or adding accessories to the VRM model), the model normalization needs to be performed.

{{% /alert %}}

Other settings such as [Bake BlendShape State]({{< relref "univrm_bake_blendshape.md" >}}) is also available.

### Done！
Your VRM file is good to go. Try to import the VRM file into [applications]({{< relref "vrm_applications.md" >}}) that support VRM!
