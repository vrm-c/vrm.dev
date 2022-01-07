---
title: "1. Create VRM from Humanoid 3D Models"
date: 2020-08-25T17:10:30+09:00
url: "/en/how_to_make_vrm/convert_from_humanoid_model/"
description: "Base model (fbx) import, bone mapping, T-Pose, license setup"
tags: ["unity"]
weight: 2
---

After the UniVRM package is [installed]({{< relref "setup_unity.md" >}}) successfully, we can start converting the humanoid 3D model to VRM. 

## Prepare a 3D model that can be handled as "Humanoid" in Unity

First prepare **a 3D model made by your own or allowed to be modified for use as VR avatar. As there are [license settings]({{< relref "vrm_meta.md" >}}) embedded in VRM file, users need to set them up according to Author's (yourself or others) permission usage.**

Then, ensure the [required bones](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.md#defined-bones) are included so that the model can be recognized as `Humanoid`.

{{% alert title="Base VRM Model" color="info" %}}
The conditions for creating a VRM model [can be found here]({{< relref "base_model.md" >}})
{{% /alert %}}

## Import a FBX model into Unity

Here we use [Alicia Solid](https://3d.nicovideo.jp/works/td14712) as an example.
First, Drag and drop the FBX folder into the `Assets` folder:

{{< img src="images/vrm/fbx_folder.jpg" >}}
<hr>

In the Project window, click blue icon (Alicia_Solid_Unity), which is fbx's asset (prefab):

{{< img src="images/vrm/assets_fbx.jpg" >}}

## FBX's Material Setup

{{< img src="images/vrm/fbx_default.jpg" >}}
<hr>

As shown in the image above, by default FBX's materials are set as `Standard` shader with default parameters. For the demonstration of VRM conversion under the minimum material setup, we set the material's `Shader` to `MToon` and `Color` to white.

{{% alert title="Shader" color="info" %}}
VRM supports three types of shaders: [MToon]({{< relref "shader_mtoon.md" >}}), [Unlit]({{< relref "univrm_unlit.md" >}}) and [Standard]({{< relref "univrm_standard.md" >}})
{{% /alert %}}

Create a folder (e.g. name the folder as `Materials`) in FBX folder (`/Assets/FBX/Materials`). In FBX's Inspector window, click `Materials` -> `Extract Materials` and save extracted materials into `Materials` folder. If the reference for each material has been assigned in `On Demand Remap` section, skip this step. Another way to set up materials is by setting `Location` as `Use External Materials (Legacy)`. Here we only focus on the former one.

{{< img src="images/vrm/extract_materials.jpg" width="900" height="200" alt="extract_materials" >}}
<hr>

The result should look like this:

{{< img src="images/vrm/material_folder.jpg" alt="material_folder" >}}
<hr>

Next, select all materials and set `Shader` to `VRM` -> `MToon`:

{{< img src="images/vrm/change_to_mtoon.jpg" alt="change_to_mtoon" >}}
<hr>

Change `Shade Color` to white:

{{< img src="images/vrm/shade_color_to_white.jpg" alt="shade_color_to_white" >}}
<hr>

{{< img src="images/vrm/alicia_preview.jpg" >}}
<hr>

For more details about how to set up `MToon` shader, refer to [MToon settings]({{< relref "shader_mtoon.md" >}}).

## Humanoid Setup

Originally the `Animation Type` for FBX is `generic`. Now we need to set it to `Humanoid`.

{{< img src="images/vrm/rig_generic.jpg" >}}
<hr>

Change to `Humanoid` and click `Apply` button:

{{< img src="images/vrm/humanoid_apply.jpg" width="900" height="200" alt="humanoid_apply" >}}
<hr>

Next, click `Configure` button to configure your model. A message box will pop up asking whether you want to save the current scene. Click `Save` to save it.

{{< img src="images/vrm/SetModelAsHumanoid.png" width="900" height="200" alt="SetModelAsHumanoid" >}}
<hr>

Now you will see the bone mapping details for this model. Unity will perform auto-mapping for each bone initially. You can check the model's Body, Head, etc. if an assigned component fits, the leftmost icon will show as green, otherwise it will show as red. In this situation, click rightmost icon for a bone that has the failure bone mapping and select a component you think it fits this bone. To re-map the bones automatically, simply click `Mapping` in the lowerleft of the interface, click `clear` and then click `Automap`.

{{< img src="images/vrm/BoneMapping.png" width="600" height="700" alt="BoneMapping" >}}
<br>
<br>
{{< img src="images/vrm/BoneAssignment.png" width="900" height="650" alt="BoneAssignment" >}}

However, in some cases the bone mapping results are not reasonable even all of them appear as green as shown in the figure below:

{{< img src="images/vrm/fix_eye.png" >}}
<hr>

We can see the Jaw and Eyes are assigned by the wrong components. As mentioned above, we can fix them by assigning the right corresponding components manually (e.g. eye_light_L will be replaced with eye_L). If the bone mappings are all right, click `Done` button to proceed to the next step.

## Put Prefab into the Scene

Drag the prefab from the Project window to the Hierarchy window.

{{< img src="images/vrm/DragImportedModel.png" width="300" height="300" alt="DragImported3DModel" >}}
<hr>

Now click the model in the Hierarchy window and check its position, rotation and scale:

{{< img src="images/vrm/initial_position_rotation.jpg" width="800" height="450" alt="initial_position_rotation" >}}
<hr>

* Model Position
	* The model should be placed at the origin
* Model Pose
	* The model should face towards +Z(axis) direction
* Model Scale
	* 1.0 = 1m

## Check FBX's BlendShape Normal

Check whether the imported fbx has the correct BlendShape normals. The details [can be found here]({{< relref "check_blendshape_normal.md" >}}).

## Export the model as VRM from menu

Select the model GameObject in `Hierarchy` window and export it from `VRM0 -> Export UniVRM-0.XX`.

{{< img src="images/vrm/vrm_menu.jpg" width="250" height="225" alt="vrm_menu">}}
<hr>

Previous versions: `VRM -> UniVRM-0.XX -> Export humanoid`.

{{< img src="images/vrm/UniVRMExportHumanoid.jpg" width="400" height="225" alt="UniVRMExportHumanoid">}}
<hr>

[Export dialog]({{< relref "univrm_export.md" >}}):

{{< img src="images/vrm/export_dialog_title_version_author_en.jpg" width="900" alt="export_dialog_title_version_author_en" >}}
<hr>

Fill out required fields to resolve error messages displayed on the dialog. Also, don't forget to enter license information about this model.
If all red messages are gone, click `Export` button to export the model. To easily track this file, it is recommended to name the file like this: "Model_Name_Normalized.vrm". The file can be saved inside/outside the `Assets` folder. If the file is saved inside the `Assets` folder, its prefab file will be automatically generated.

{{% alert title="Error Messages" color="warning" %}}

{{< img src="images/vrm/export062_empty_en.jpg" width="600" alt="vrm export" >}}

Before exporting as VRM, validation checks on each component in the model will be conducted:

* The error messages (red) need to be resolved
* The warning messages (yellow) can be ignored if you want to export VRM straight away

For example, if ExportRoot is not valid, the error messages will be displayed on the dialog. See [Conditions for Valid ExportRoot]({{< relref "univrm_export.md#conditions-for-valid-exportroot" >}}) for more information.
{{% /alert %}}

## Export Options

{{< img src="images/vrm/export_options_en.jpg" width="900" height="700" >}}
<hr>

If the model is not in [T-Pose]({{< relref "humanoid_overview.md#t-pose" >}}), click `Make T-Pose` to make one.

{{% alert title="Pose Freeze" color="info" %}}

`Pose Freeze` is for model normalization during export. The exporter will automatically check whether the export target needs to be normalized.
For instance, in Hierarchy if a mesh's rotation or scale is not Default (first VRM export), the model normalization needs to be performed.

{{% /alert %}}

Related sections about UniVRM export:
  * [VRM Size (BlendShape size reduction)]({{< relref "vrm_size.md" >}})

In the next section, we will introduce how to [import and set up VRM file first time]({{< relref "setup_vrm.md" >}}).

## Online Resources

* [From Blender to VRM: Prepare your own Vtuber Model](https://www.youtube.com/watch?v=i2pOourRdFU)
