---
title: "UniVRM workflow"
date: 2018-04-16T16:30:00+09:00
weight: 2
aliases: ["/en/univrm/univrm_workflow/"]
---

## Workflow

{{< img src="images/vrm/VRM_changeVRM_EN.png" alt="vrm workflow" >}}

## Prepare a 3D model that can be handled as "Humanoid" in Unity

Prepare a 3D model that can be [imported](https://docs.unity3d.com/2019.3/Documentation/Manual/HOWTO-importObject.html) into Unity such as FBX format. The model's bones must be set.

{{< img src="images/vrm/DragImportedModel.png" width="300" height="300" alt="DragImported3DModel" >}}
<br>
<br>
{{< img src="images/vrm/ModelConversionMenu.png" width="900" height="200" alt="ModelConversionMenu" >}}

First, drag the imported humanoid 3D model from the Project window to the Hierarchy window. Click the 3D model in the Hierarchy window then you will see the menu as shown in the Figure above. Click `Select` and then click `Rig`. Set `Animation Type` as `Humanoid`, and then click `Configure` button. A message box will pop up asking whether you want to save the current scene. Click `Save` to save it.

|{{< img src="images/vrm/SetModelAsHumanoid.png" width="900" height="200" alt="SetModelAsHumanoid" >}}|
|-----|
|Select``Humanoid`` and click `Configure`|

Now you will see the bone mapping details for this model. Unity will perform auto-mapping for each bone initially. You can check the model's Body, Head, etc. if an assigned component fits, the leftmost icon will show as green, otherwise it will show as red.

{{< img src="images/vrm/BoneMapping.png" width="600" height="700" alt="BoneMapping" >}}

### Correct bone mapping with rig configuration
To corrent bone mapping errors, click rightmost icon for a bone that has the failure bone mapping and select a component you think it fits this bone. To re-map the bones automatically, simply click `Mapping` in the lowerleft of the interface, click `clear` and then click `Automap`.

|{{< img src="images/vrm/BoneAssignment.png" width="900" height="650" alt="BoneAssignment" >}}|
|-----|
|Choose a right component to fit a bone|

However, in some cases the bone mapping results are not reasonable even all of them appear as green as shown in the figure below:

{{< img src="images/vrm/fix_eye.png" >}}

We can see the Jaw and Eyes are assigned by the wrong components. As mentioned above, we can fix them by assigning the right corresponding components manually (e.g. eye_light_L will be replaced with eye_L). If the bone mappings are all right, click `Done` button to proceed to the next step.

## Export from menu
|{{< img src="images/vrm/UniVRMExportHumanoid.png" width="400" height="225" alt="UniVRMExportHumanoid">}}|
|-----|
|In the Hierarchy window, if 3D model data with a setup-completed humanoid is selected, the `Export humanoid` option will become available (`VRM -> UniVRM-0.XX -> Export humanoid`). The file will be saved in the `Assets` folder by default.|

|{{< img src="images/vrm/export_dialog_56.jpg" width="600"alt="vrm export" >}}|
|-----|
|Enter your name in the `Author` field and click the `Export` button.|

### Force T Pose
Force the model pose to become [T-Pose]({{< relref "vrm_tpose.md" >}})   before removing rotation / scaling.

#### Change to T Pose manually
You can manually change the model pose to [T-Pose]({{< relref "vrm_tpose.md" >}})   (done automatically by default). Make sure to deselect the `Force T Pose` checkbox.

### Pose Freeze
Whether the rotation / scaling removal processing should be performed. It is **the process of normalizing model** for conforming to the VRM rules. Please make sure to check the boxes at the **first time of use**. After this process is done, all the components can work correctly.

#### Hierarchy normalization 

|{{< img src="images/vrm/rot.png" >}}|
|-----|
|The model that has the bone rotation.|


|{{< img src="images/vrm/rot_scale.png" >}}|
|-----|
|The model made by Z-UP coordinate system. The unit of distance is non-meter (Blender default).|

Remove rotation and scaling

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

{{< img src="images/vrm/vrm_prefab_en.png" >}}

* If the VRM file is not shown in the project view, right click and select``refresh``
* If the Prefab file cannot be generated, right click the VRM file and select``reimport``




