---
title: "1. Create VRM from Humanoid 3D Models"
date: 2020-08-25T17:10:30+09:00
url: "/en/how_to_make_vrm/convert_from_humanoid_model/"
tags: ["unity"]
weight: 2
---

After the UniVRM package is [installed]({{< relref "setup_unity.md" >}}) successfully, we can start converting the humanoid 3D model to VRM. 

### Prepare a 3D model that can be handled as "Humanoid" in Unity
Prepare a 3D model that can be [imported](https://docs.unity3d.com/2019.4/Documentation/Manual/HOWTO-importObject.html) into Unity such as FBX 3D model. To be recognized as a humanoid model, the [required bones](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.md#defined-bones) must be set up. 
Also, **be sure to use your own model or a model licensed for use as VR avatar**. As we will describe later, **there are items that describe license information in the VRM file, authors need to fill up those information for their own VRM models**.

{{% alert title="Base VRM Model" color="info" %}}
The conditions for creating a VRM model [can be found here]({{< relref "base_model.md" >}})
{{% /alert %}}

We use [Alicia Solid](https://3d.nicovideo.jp/works/td14712) as an example:

{{< img src="images/vrm/DragImportedModel.png" width="300" height="300" alt="DragImported3DModel" >}}
<br>
<br>
{{< img src="images/vrm/ModelConversionMenu.png" width="900" height="200" alt="ModelConversionMenu" >}}

First, drag the imported humanoid 3D model from the Project window to the Hierarchy window. Click the 3D model in the Hierarchy window then you will see the menu as shown in the Figure above. Click `Select` and then click `Materials`. Set `Location` as `Use External Materials (Legacy)`.

{{< img src="images/vrm/SetAsExternalMaterialsLegacy.png" width="900" height="200" alt="SetAsExternalMaterialsLegacy" >}}

Next, click `Rig` and set `Animation Type` as `Humanoid`, and then click `Apply` button:

{{< img src="images/vrm/humanoid_apply.jpg" width="900" height="200" alt="humanoid_apply" >}}

After `Apply` button is clicked, click `Configure` button to configure your model. A message box will pop up asking whether you want to save the current scene. Click `Save` to save it.

{{< img src="images/vrm/SetModelAsHumanoid.png" width="900" height="200" alt="SetModelAsHumanoid" >}}

Now you will see the bone mapping details for this model. Unity will perform auto-mapping for each bone initially. You can check the model's Body, Head, etc. if an assigned component fits, the leftmost icon will show as green, otherwise it will show as red. In this situation, click rightmost icon for a bone that has the failure bone mapping and select a component you think it fits this bone. To re-map the bones automatically, simply click `Mapping` in the lowerleft of the interface, click `clear` and then click `Automap`.

{{< img src="images/vrm/BoneMapping.png" width="600" height="700" alt="BoneMapping" >}}
<br>
<br>
{{< img src="images/vrm/BoneAssignment.png" width="900" height="650" alt="BoneAssignment" >}}

However, in some cases the bone mapping results are not reasonable even all of them appear as green as shown in the figure below:

{{< img src="images/vrm/fix_eye.png" >}}

We can see the Jaw and Eyes are assigned by the wrong components. As mentioned above, we can fix them by assigning the right corresponding components manually (e.g. eye_light_L will be replaced with eye_L). If the bone mappings are all right, click `Done` button to proceed to the next step.

### Adjust the model data
{{< img src="images/vrm/alicia_scene.png" >}}

Now click the model in the Hierarchy window, you shall see sub-components attached to this model. Please click any of them. We are going to check/adjust the items listed below:

{{< img src="images/vrm/initial_position_rotation.jpg" width="800" height="450" alt="initial_position_rotation" >}}

* Model Position
	* The model should be placed at the origin
* Model Scale
	* 1.0 = 1m
* Model Pose
	* The model should face towards +Z(axis) direction
* Texture（material / shader）
    * The shaders listed below are **highly recommended**:
		* Toon shader
			* [VRM/MToon]({{< relref "shader_mtoon.md" >}}) (lighting supported toon shader）
		* Unlit type shader
			* [UniGLTF/UniUnlit]({{< relref "univrm_unlit.md" >}})
		* PBR
			* [Standard]({{< relref "univrm_standard.md" >}}) (Unity standard)

{{< img src="images/vrm/shader_option.jpg" width="800" height="450" alt="shader_option" >}}

Note that if the materials are not assigned or you want to change them, click the rightmost icon of `Element X` to select available materials in your computer. There are several parameters that you can adjust rendering effects based on what shader you select. Here we select `VRM/MToon` as an example as shown below. Please refer to [MToon]({{< relref "shader_mtoon.md" >}}) for more information.

{{< img src="images/vrm/MToonMaterialSetting.png" width="700" height="800" alt="MToonMaterialSetting" >}}

### Check BlendShape Normal

Check whether the imported fbx has the correct BlendShape normals. The details [can be found here]({{< relref "check_blendshape_normal.md" >}}).

### Export the model as VRM from menu (model normalization)

After adjustments are completed, select the model in `Hierarchy` window and export it from``VRM -> UniVRM-0.XX -> Export humanoid``.

{{< img src="images/vrm/UniVRMExportHumanoid.jpg" width="400" height="225" alt="UniVRMExportHumanoid">}}

Enter your name in the `Author` field and click the `Export` button. The VRM file can then be created. To easily track this file, it is recommended to name the file like this: "Model_Name_Normalized.vrm". The file will be saved in the `Assets` folder by default.

Related Pages about UniVRM export:
  * [UniVRM Export]({{< relref "univrm_export.md" >}})
  * [VRM Size]({{< relref "vrm_size.md" >}})

{{< img src="images/vrm/export062_dialog_en.png" width="900" alt="vrm export" >}}

* Force T Pose
    * Force the model pose to become [T-Pose]({{< relref "humanoid_overview.md#t-pose" >}}) before removing rotation / scaling.
* Pose Freeze
    * Whether the rotation / scaling removal processing should be performed. This is **the process of normalizing model** for conforming to the VRM rules. Please make sure to check the boxes at the **first time of use**. After this process is done, all the components can work correctly.

In the next section, we will introduce how to [import and set up VRM file first time]({{< relref "setup_vrm.md" >}}).