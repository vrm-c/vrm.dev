---
title: "How to make VRM file"
url: "/en/how_to_make_vrm/"
weight: 2
aliases: ["/en/docs/univrm/univrm_workflow/"]
---

We use [UniVRM](https://github.com/vrm-c/UniVRM) to make VRM files.
The workflow of making a VRM file is summarized as follows:

1. Import a 3D model into a Unity project and set up its materials, etc.
1. Make a T-Pose for the model and enable the model normalization, and then export the 3D model as VRM in Unity
1. Import the VRM file into the Unity project and customize settings such as [license]({{< relref "univrm_meta.md" >}}), [spring bone]({{< relref "univrm_secondary.md" >}}), [expression]({{< relref "univrm_blendshape.md" >}}), [eyelook]({{< relref "univrm_lookat.md" >}}), [first-person]({{< relref "univrm_firstperson.md" >}})
     * To make sure customized settings (e.g. facial expression) are working, check your model in play mode
1. Export the 3D model as VRM again. Setup completed

| {{< img src="images/vrm/VRM_changeVRM_EN.png" alt="vrm workflow" >}}  |
|-----------------------------------------------------------------------|
| **Workflow for making VRM files**             |

The figure above provides an overview of converting humanoid 3D models to VRM.

The environment Setup for UniVRM is in Section `0`.
The detailed walkthrough is presented in the Section `1` and `2`. 
The last Section is about VRM model testings such as eye movement and expression.
