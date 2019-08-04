---
title: "UniVRM workflow"
date: 2018-04-16T16:30:00+09:00
url: "/en/univrm/univrm_workflow/"
weight: 2
---

## Workflow

{{< img src="images/vrm/vrm_workflow_en.png" alt="vrm workflow" >}}

## Prepare a 3D model that can be handled as "Humanoid" in Unity

Prepare a humanoid model that can be [imported](https://docs.unity3d.com/2018.3/Documentation/Manual/HOWTO-importObject.html) into Unity such as FBX format.
Go to the model's``Import Settings -> Rig -> Animation Type``and select``Humanoid``after the model is imported.

|{{< img src="images/vrm/alicia_generic.png" >}}|
|-----|
|Select``Humanoid``|

### Correct bone assignment with rig configuration

When the model file is imported, bone assignments done by auto-recognition may be different from expectations (see image below):

* Jaw is assigned to mouth
* Eye is assigned to eye highlight

|{{< img src="images/vrm/fix_eye.png" >}}|
|-----|
|Since the eyebone (and jawbone) auto-recognition on "3D chan" is incorrect, we can fix it by assigning the right component manually.|

## Export from menu

|{{< img src="images/vrm/vrm_menu_disable.png" >}}|
|-----|
|In the Hierarchy window, if 3D model data with a setup-completed humanoid is selected, the export humanoid option in``VRM``will become available.|

|{{< img src="images/vrm/vrm_menu_enable.png" >}}|
|-----|
|In the Hierarchy window, if 3D model data with a setup-completed humanoid is selected, the export humanoid option in``VRM``will become available.|

|{{< img src="images/vrm/export_dialog.png" >}}|
|-----|
|Check the boxes and click``Export``button.|

### Force T Pose
Force the model pose to become [T-Pose](../../vrm_tpose/) before removing rotation / scale.

#### Change to T Pose manually
You can manually change the model pose to`T Pose`instead of changing it automatically. Make the model [T-Pose](../../vrm_tpose/) manually in advance, choose`menu -> VRM -> export humanoid`and uncheck``Force T Pose``.

### Pose Freeze
Whether the rotation / scale removal processing should be performed. It is **the process of normalizing model** for conforming to the VRM rules. Please make sure to check the boxes at the **first time of use**. After this process is done, all the components can work correctly.

#### Hierarchy normalization 

|{{< img src="images/vrm/rot.png" >}}|
|-----|
|The model that has the bone rotation.|


|{{< img src="images/vrm/rot_scale.png" >}}|
|-----|
|The model made by Z-UP coordinate system. The unit of distance is non-meter (Blender default).|

Remove rotation and scale

|{{< img src="images/vrm/without_rot_scale.png" >}}|
|-----|
|Normalization completed.|

#### Mesh normalization

|{{< img src="images/vrm/zup_mesh.png" >}}|
|-----|
|The mesh with non T-pose is stored in Z-UP coordinate system.|

Use``SkinnedMeshRenderer.BakeMesh``to change the mesh to T-pose state and change the coordinate to Y-Up through the coordinate operation.

|{{< img src="images/vrm/yup_mesh.png" >}}|
|-----|
|The mesh with T-pose is stored in Y-UP coordinate system.|

## Import
Please import VRM file into Assets folder

|{{< img src="images/vrm/alicia_imported.png" >}}|
|-----|
|Import the VRM model``Alicia``|

Texture, Material and Prefab are automatically generated from VRM.

* If the VRM file is not shown in the project view, right click and select``refresh``
* If the Prefab file cannot be generated, right click the VRM file and select``reimport``