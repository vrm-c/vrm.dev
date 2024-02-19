---
date: 2020-08-26T15:52:06+09:00
url: "/how_to_make_vrm/convert_from_humanoid_model/"
description: "ベースモデル(fbx)を Unity にインポートして、Bone割り当てを確認、T-Pose にする、ライセンスを記述して出力(正規化)する"
tags: ["unity"]
weight: 2
---

# 1 Create VRM from Humanoid 3D

## Prepare a 3D model that can be handled as `Humanoid in Unity`

First prepare

* **a 3D model made by your own or allowed to be modified for use as VR avatar** 

As there are

* **license settings embedded in VRM file, users need to set them up according to Author's (yourself or others) permission usage.**

Then, ensure the [required bones](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.md#defined-bones) are included so that the model can be recognized as `Humanoid`.

:::note BaseModel

For more information on available base models, see [BaseModel](/univrm/humanoid/base_model).

:::

[required bones](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.ja.md#%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%83%9C%E3%83%BC%E3%83%B3)

## Import a FBX model into Unity

Drag and drop the FBX folder into the `Assets` folder

![figure](/images/vrm/fbx_folder.jpg)

unity

![figure](/images/vrm/assets_fbx.jpg)

In the Project window, click blue icon (Alicia_Solid_Unity), which is fbx's asset (prefab):

## FBX's Material Setup

![figure](/images/vrm/fbx_default.jpg)

As shown in the image above, by default FBX's materials are set as `Standard` shader with default parameters. For the demonstration of VRM conversion under the minimum material setup, we set the material's `Shader` to `MToon` and `Color` to white.

:::note Shader

VRM supports three types of shaders: 
[MToon](/univrm/shaders/shader_mtoon), 
[Unlit](/univrm/shaders/univrm_unlit) and 
[Standard](/univrm/shaders/univrm_standard)

:::

Create a folder (e.g. name the folder as `Materials`) in FBX folder (`/Assets/FBX/Materials`). In FBX's Inspector window, click `Materials` -> `Extract Materials` and save extracted materials into `Materials` folder. If the reference for each material has been assigned in `On Demand Remap` section, skip this step. Another way to set up materials is by setting `Location` as `Use External Materials (Legacy)`. Here we only focus on the former one.

![extract_materials](/images/vrm/extract_materials.jpg)

Next, select all materials and set `Shader` to `VRM` -> `MToon`:

![change_to_mtoon](/images/vrm/change_to_mtoon.jpg)

Change `Shade Color` to white:

![shade_color_to_white](/images/vrm/shade_color_to_white.jpg)

![figure](/images/vrm/alicia_preview.jpg)

For more details about how to set up `MToon` shader, refer to [MToon settings](/univrm/shaders/shader_mtoon).

## Humanoid Setup

Originally the `Animation Type` for FBX is `generic`. Now we need to set it to `Humanoid`.

![figure](/images/vrm/rig_generic.jpg)

Change to `Humanoid`

![figure](/images/vrm/select_humanoid.jpg)

and click `Apply` button:

:::note humanoid

Next,

:::

click `Configure` button to configure your model. 

A message box will pop up asking whether you want to save the current scene. Click `Save` to save it.

![BoneMapping](/images/vrm/BoneMapping.png)

Check the bone assignments.

:::note bone

* Jaw bone is assigned to bangs
* The eye bone is assigned to the eye highlight.

Please be careful of the above.
:::

## Put Prefab into the Scene

Drag the prefab from the Project window to the Hierarchy window.

![figure}(/images/vrm/DragImportedModel.png)

## Check if the normals of fbx's blendshpae are not disordered

This is a solution for when strange shadows appear with BlendShape.

[Check the normals of BlendShape](/univrm/blendshape/check_blendshape_normal)

## Export the model as VRM from menu

![vrm_menu](/images/vrm/vrm_menu.jpg)

click `VRM0` - `Export UniVRM-0.XX`. Show dialog.

![UniVRMExportHumanoid](/images/vrm/UniVRMExportHumanoid.jpg)

Previous versions: `VRM -> UniVRM-0.XX -> Export humanoid`.

![figure](/images/vrm/export058_empty.jpg)

Drop the GameObject with the prefab expanded into the scene on `Export Root`.

:::warning Error

Various error checks are performed in the export dialog.
* The error messages (red) need to be resolved
* The warning messages (yellow) can be ignored if you want to export VRM straight away

[Export Dialog](/univrm/export/univrm_export)
:::

![figure](/images/vrm/export_dialog_title_version_author.jpg)

Please enter your license information. Once the red message disappears, you can press Export.
For the next task, I created a folder `Assets/models/vrm` and exported it there.

:::note Export destination

You can choose to export to either within or outside of Unity's Assets.
If you select within Assets, Import will be activated immediately after Export (Import is heavier).
When selecting within Assets, it will be easier to understand if you create a new dedicated folder.
:::

## Export Options

![figure](/images/vrm/export_options.jpg)

:::note Pose Freeze

If the model is not in [T-Pose](/univrm/humanoid/humanoid_overview), click `Make T-Pose` to make one.

`Pose Freeze` is for model normalization during export. The exporter will automatically check whether the export target needs to be normalized
:::
