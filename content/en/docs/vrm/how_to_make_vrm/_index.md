---
title: "How to make VRM file"
url: "/en/how_to_make_vrm/"
weight: 2
aliases: ["/en/docs/univrm/univrm_workflow/"]
---

A VRM file can be made by [UniVRM](https://github.com/vrm-c/UniVRM), which is a standard implementation of VRM in [Unity](https://unity3d.com/). 
Before we dive into the details, let's take a look at 4 core steps for making a VRM file:

1. Import a 3D model and [UniVRM](https://github.com/vrm-c/UniVRM) into a Unity project. Set up/adjust the model's materials, etc. 
1. Export the 3D model as VRM in Unity (Model Normalization)
1. Import the VRM file into the Unity project and customize the settings such as [license]({{< relref "univrm_meta.md" >}}), [spring bone]({{< relref "univrm_secondary.md" >}}), [expression]({{< relref "univrm_blendshape.md" >}}), [eyelook]({{< relref "univrm_lookat.md" >}}), [first-person]({{< relref "univrm_firstperson.md" >}})
     * To make sure customized settings (e.g. facial expression) are working, check your model in play mode
1. Export the 3D model as VRM again. Setup completed.

| {{< img src="images/vrm/VRM_changeVRM_EN.png" alt="vrm workflow" >}}  |
|-----------------------------------------------------------------------|
| **Workflow for making VRM files**             |

The figure above provides an overview of converting humanoid 3D models to VRM.

The environment Setup for UniVRM is in Section `0`.
The detailed walkthrough is presented in the Section `1` and `2`. 
The last Section is about VRM model testings such as eye movement and expression.
