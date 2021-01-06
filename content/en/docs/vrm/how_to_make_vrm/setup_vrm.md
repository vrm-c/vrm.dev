---
title: "2. Set up VRM"
date: 2020-08-25T17:26:05+09:00
url: "/en/how_to_make_vrm/setup_vrm/"
tags: ["unity"]
weight: 3
---

In the previous section, we have introduced how to convert a Humanoid 3D model to VRM. 
Now we are going to show how to import and set up a VRM file.

### Import the VRM file
{{< img src="images/vrm/vrm_prefab_en.png" >}}

**Drag and drop the VRM file (~.vrm) into Assets folder**. The **prefab** file of the VRM model data can be automatically generated.

{{< img src="images/vrm/alicia_scene2.png" >}}

To avoid any confusion, remove the [GameObject of the original 3D model]({{< relref "convert_from_humanoid_model.md#adjust-the-model-data" >}}). 
**Please drag the prefab file to the Hierarchy window**.
Normalized model data such as mesh (i.e. rotation is Unity default) can then be shown.  

### Custom settings in VRM
{{< img src="images/vrm/vrm_settings.png" >}}

The VRM model's information will be shown in the Inspector window once the root GameObject of the model in `Hierarchy` is selected. Note that **spring bone settings are available in "secondary"**. Please at least fill in [title, author, license information]({{< relref "univrm_meta.md" >}}). **Specially, license information is crucial!**

To make a VRM model fully functional, please set up the following components:

* [Expression and lip-sync (BlendShape)]({{< relref "univrm_blendshape.md" >}})
* [First-person settings (Exclude model's head in first-person view for VR applications)]({{< relref "univrm_firstperson.md" >}})
* [Eye gaze movements controlled by bone or BlendShape]({{< relref "univrm_lookat.md" >}})
* [Spring bone (SpringBone/SpringBoneCollider)]({{< relref "univrm_secondary.md" >}})

### Export VRM model again
{{< img src="images/vrm/UniVRMExportHumanoid.jpg" width="400" height="225" alt="UniVRMExportHumanoid">}}

After the all settings are completed, select the the model (topmost parent GameObject) in `Hierarchy` and again export the model from``VRM -> UniVRM-0.XX -> Export humanoid``.

This time **please do not check "Force T Pose" and "Pose Freeze"**. They are only used for the first time (normalization processing). Name the file and export the adjusted VRM model.

### Done！
Your VRM file is good to go. Try to import the VRM file into [applications]({{< relref "vrm_applications.md" >}}) that support VRM!
