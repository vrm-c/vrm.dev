---
title: Humanoid Component
tags: ["unity"]
---

`UniVRM-0.60.0~`

A humanoid avatar can be created directly from the Scene without fbx.

# How to use

Prepare a rigged model in the scene.

We will take the model in the following link as an example:

https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0/RiggedFigure/glTF-Binary

First, import `RiggedFigure.glb` into the `Assets` folder.
If UniVRM package is installed, the `Prefab` file can be automatically generated from the imported `glb`.

Drag the `Prefab` file into the Scene. A GameObject associated with this `Prefab` is instantiated.

Click on the GameObject in the `Hierarchy` window, then add a humanoid component (`Inspector -> Add Component -> Humanoid`).

{{< img src="images/vrm/bone_required.jpg" >}}

Assign required bones as shown from messages:

{{< img src="images/vrm/create_avatar.jpg" >}}

Press `Create UnityEngine.Avatar` button.

{{< img src="images/vrm/humanoid_animator.jpg" >}}

Now a humanoid avatar is created. You can make a T-pose for the model and convert it to VRM.  
