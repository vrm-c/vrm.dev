---
title: "How to make VRM file"
date: 2018-04-16T16:30:00+09:00
url: "/en/how_to_make_vrm/"
weight: 2
---

## Conversion from existing 3D model
{{< img src="images/vrm/VRM_changeVRM_EN.png" alt="vrm workflow" >}}

The VRM file can be made by [Unity](https://unity3d.com/) and [UniVRM](https://github.com/vrm-c/UniVRM). The workflow is as follow:

1. Import the 3D model data and [UniVRM](https://github.com/vrm-c/UniVRM) into the current unity project. Adjust/set the model's size, material, etc. 
1. Export the 3D model data as VRM in Unity (normalization processing)
1. Import the VRM file into the current unity project and customize the settings (license, spring bone, expression, eyelook, etc.)
     * In some cases, make sure the model is working (e.g. facial expression change) in play mode first
1. Export the 3D model data as VRM again after the adjustment is finished. The new customized settings are now saved in the VRM file.

Briefly speaking, **A humanoid 3D model can be adjusted and exported as a VRM file in Unity. Once the VRM file is made, it can be imported again to adjust items such as VRM Meta, BlendShape, etc.**.

---
### 1. Create an empty project in Unity
{{< img src="images/vrm/unity_new_project.png" >}}

Create a new project at the start page (``New -> Create project``).

### 2. Import UniVRM package into the created project
{{< img src="images/vrm/package_import.png" alt="package_import" >}}

Download the latest unitypackage (UniVRM-0.XX) from [UniVRM/releases](https://github.com/vrm-c/UniVRM/releases) and import it into the current project (``Assets -> Import Package -> Custom Package``). The imported files will be in ``../Assets/VRM``. **To update UniVRM to a newer version, deleting the previously created VRM folder before package import is recommended**.

### 3. Prepare a 3D model that can be handled as "Humanoid" in Unity
Prepare a 3D model that can be [imported](https://docs.unity3d.com/2019.3/Documentation/Manual/HOWTO-importObject.html) into Unity such as FBX format. The model's bones must be set. Also, **be sure to use your own model or the model data that is processed and licensed for use as a VR avatar.**. As we will describe later, **there are items that describe license information in the VRM file, authors need to fill up those information for their own VRM models**. 

{{< img src="images/vrm/DragImportedModel.png" width="300" height="300" alt="DragImported3DModel" >}}
<br>
<br>
{{< img src="images/vrm/ModelConversionMenu.png" width="900" height="200" alt="ModelConversionMenu" >}}

First, drag the imported humanoid 3D model from the Project window to the Hierarchy window. Click the 3D model in the Hierarchy window then you will see the menu as shown in the Figure above. Click `Select` and then click `Materials`. Set `Location` as `Use External Materials (Legacy)`.

{{< img src="images/vrm/SetAsExternalMaterialsLegacy.png" width="900" height="200" alt="SetAsExternalMaterialsLegacy" >}}

Next, click `Rig` and set `Animation Type` as `Humanoid`, and then click `Configure` button. A message box will pop up asking whether you want to save the current scene. Click `Save` to save it.

{{< img src="images/vrm/SetModelAsHumanoid.png" width="900" height="200" alt="SetModelAsHumanoid" >}}

Now you will see the bone mapping details for this model. Unity will perform auto-mapping for each bone initially. You can check the model's Body, Head, etc. if an assigned component fits, the leftmost icon will show as green, otherwise it will show as red. In this situation, click rightmost icon for a bone that has the failure bone mapping and select a component you think it fits this bone. To re-map the bones automatically, simply click `Mapping` in the lowerleft of the interface, click `clear` and then click `Automap`.

{{< img src="images/vrm/BoneMapping.png" width="600" height="700" alt="BoneMapping" >}}
<br>
<br>
{{< img src="images/vrm/BoneAssignment.png" width="900" height="650" alt="BoneAssignment" >}}

However, in some cases the bone mapping results are not reasonable even all of them appear as green as shown in the figure below:

{{< img src="images/vrm/fix_eye.png" >}}

We can see the Jaw and Eyes are assigned by the wrong components. As mentioned above, we can fix them by assigning the right corresponding components manually (e.g. eye_light_L will be replaced with eye_L). If the bone mappings are all right, click `Done` button to proceed to the next step.

### 4. Adjust the model data and export it as VRM from menu（normalization processing）
{{< img src="images/vrm/alicia_scene.png" >}}

Now click the model in the Hierarchy window, you shall see sub-components attached to this model. Please click any of them. We are going to check and adjust the items listed below:

{{< img src="images/vrm/initial_position_rotation.jpg" width="800" height="450" alt="initial_position_rotation" >}}

* Model Position
	* The model should be placed at the origin
* Model Scale
	* 1.0 = 1m
* Model Pose
	* The model should face towards +Z(axis) direction
* Texture（material / shader）
    * The shaders listed below are **highly recommended**:
		* PBR
			* Standard shader (Unity standard)
		* Unlit type shader
			* VRM/UnlitTexture (same as Unit/Texture)
			* VRM/UnlitCutout (same as Unit/Coutout)
			* VRM/UnlitTransparent (same as Unit/Transparent)
			* VRM/UnlitTransparentZWrite (Alpha blending and ZWrite are available. It is assumed to be applied to semi-transparent objects)
		* Toon shader
			* VRM/MToon (lighting supported toon shader）

{{< img src="images/vrm/shader_option.jpg" width="800" height="450" alt="shader_option" >}}

Note that if the materials are not assigned or you want to change them, click the rightmost icon of `Element X` to select available materials in your computer. There are several parameters that you can adjust rendering effects based on what shader you select. Here we select `VRM/MToon` as an example as shown below. Please refer to [MToon]({{< relref "mtoon.md" >}}) for more information.

{{< img src="images/vrm/MToonMaterialSetting.png" width="700" height="800" alt="MToonMaterialSetting" >}}

After adjustments are completed, select the model in `Hierarchy` window and export it from``VRM -> UniVRM-0.XX -> Export humanoid``.

{{< img src="images/vrm/UniVRMExportHumanoid.png" width="400" height="225" alt="UniVRMExportHumanoid">}}

Enter your name in the `Author` field and click the `Export` button. The VRM file can then be created. To easily track this file, it is recommended to name the file like this: "Model_Name_Normalized.vrm". The file will be saved in the `Assets` folder by default. The details for export settings [can be found here]({{< relref "univrm_export.md" >}}).

{{< img src="images/vrm/export_dialog_56.jpg" width="600"alt="vrm export" >}}

* Force T Pose
    * Force the model pose to become [T-Pose]({{< relref "vrm_tpose.md" >}}) before removing rotation / scaling.
* Pose Freeze
    * Whether the rotation / scaling removal processing should be performed. This is **the process of normalizing model** for conforming to the VRM rules. Please make sure to check the boxes at the **first time of use**. After this process is done, all the components can work correctly.

Details about model's T-Pose normalization [can be found here]({{< relref "t_pose.md" >}}).

### 5. Import the VRM file
{{< img src="images/vrm/vrm_prefab_en.png" >}}

**Drag and drop the VRM file (~.vrm) from step 4 into Assets folder**. The **prefab** file of the imported VRM model data can be automatically generated.

{{< img src="images/vrm/alicia_scene2.png" >}}

Now remove the model data (step 4), and **drag and drop the prefab file to the Hierarchy window**. Normalized model data such as mesh, etc. can then be shown.  

### 6. Custom setting in VRM
{{< img src="images/vrm/vrm_settings.png" >}}

The VRM model's information will be shown in the Inspector window once the root of the model data (step 5) in `Hierarchy` is selected. In addition, the **spring bone (object swaying) settings are available in "secondary"**. Please at least fill in title, author, license information. **Specially, license information is crucial!**

* Information
	* Title
		* Avatar model name (any input)
	* Version
		* Avatar model version (any input)
	* Author
		* Author name
	* Contact Information
		* Author contact information
	* Reference
		* Original / Related works of this avatar, if any

* License
	* Personation / Characterization Permission
		* A person who can perform with this avatar
			* Only Author
			* Explicitly Licensed Person
			* Everyone
		* Violent acts using this avatar
			* Disallow
			* Allow
		* Sexuality acts using this avatar
			* Disallow
			* Allow
		* For commercial use
			* Disallow
			* Allow
		* Other License Url
			* If there are any conditions not mentioned above, put the URL link of the license document here

	* Redistribution / Modifications License
		* License Type
			* Redistribution Prohibited
			* [Copyright wavier (CC0)](https://creativecommons.org/publicdomain/zero/1.0/deed.en)
			* [Creative Commons CC BY License(CC_BY)](https://creativecommons.org/licenses/by/4.0/deed.en)
			* [Creative Commons CC BY NC License(CC_BY_NC)](https://creativecommons.org/licenses/by-nc/4.0/deed.en)
			* [Creative Commons CC BY SA License(CC_BY_SA)](https://creativecommons.org/licenses/by-sa/4.0/deed.en)
			* [Creative Commons CC BY NC SA License(CC_BY_NC_SA)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en)
			* [Creative Commons CC BY ND License(CC_BY_ND)](https://creativecommons.org/licenses/by-nd/4.0/deed.en)
			* [Creative Commons CC BY NC ND License(CC_BY_NC_ND)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en)
			* Other

		* Other License Url
			* If “Other” is selected, put the URL link of the license document here

Note that starting from Unity version 2018.3, the interface has slightly changes:

{{< img src="images/vrm/NewInterfaceForPrefab.png" width="700" height="200" alt="NewInterfaceForPrefab" >}}

Now the basic model conversion is finished. To complete the whole setup, please set up the items listed below:

* [Expression and lip-sync (BlendShape)]({{< relref "univrm_blendshape.md" >}})
* [First-person point of view (Get rid of model's head for VR applications)]({{< relref "univrm_firstperson.md" >}})
* [Movable range for eye gaze/eyeball controlled by bone or BlendShape]({{< relref "univrm_lookat.md" >}})
* [Spring bone (SpringBone/SpringBoneCollider)]({{< relref "univrm_secondary.md" >}})


### 7. Check model expressions/movements in play mode（If necessary）
Set `AnimationClip/AnimationController` and set [viewing target]({{< relref "univrm_lookat.md#target" >}}) in``VRMLookAtHead -> Target``(the head orientation towards the target). For example, you can create a cube as a target from ``GameObject -> 3D Object -> Cube``. Next, serach head component in``VRMLookAtHead -> Head``. After the corresponding components are assigned, check the model's motion in the scene. The model will track the target position in Play Mode. You can drag the object position to test whether the model's eyes are tracking the object in (near) real-time. The model's close-up face can be viewed in Inspector window.

{{< img src="images/vrm/LookAtTarget.png" width="900" height="280" alt="LookAtTarget" >}}
<br>
<br>
{{< img src="images/vrm/TargetTracking.png" width="500" height="330" alt="TargetTracking" >}}

To test the model's expressions, fairly simple test scripts "AIUEO" and "Blinker" are provided. After setting up [BlendShape]({{< relref "univrm_blendshape.md#vrmblendshapeproxy" >}}), click `Add Component` at the bottom of model's Inspector window to add "AIUEO" script or drag the script directly to Inspector. After "AIUEO" is set, lip synchronization animation that "aa", "ih", "ou", "E", "oh" switches in turn can be created in the scene. Similarly, if "Blinker" is set, eye blink animation that plays periodically can be created. See [runtime VRM loader sample](https://github.com/vrm-c/UniVRM/releases) (download UniVRM-RuntimeLoaderSample-0.XX) for more details on how to use these scripts.

|{{< img src="images/vrm/BlendShapeProxy.png" width="650" height="75" alt="BlendShapeProxy" >}}|
|-----|
|Double click the``BlendShapeAvatar`` field to set up expressions for the 3D model|

{{< img src="images/vrm/AddExpressionScripts.png" width="650" height="260" alt="AddExpressionScripts" >}}
<br>
<br>
{{< img src="images/vrm/InspectorFaceView.png" width="400" height="280" alt="InspectorFaceView" >}}

### 8. Export the adjusted VRM model
{{< img src="images/vrm/UniVRMExportHumanoid.png" width="400" height="225" alt="UniVRMExportHumanoid">}}

After the adjustment is completed, select the model data in `Hierarchy` and again export the model from``VRM -> UniVRM-0.XX -> Export humanoid``.

This time **please do not check "Force T Pose" and "Pose Freeze"**. They are only used for the first time (normalization processing). Name the file and export the adjusted VRM model.

### Done！
Your VRM file is good to go. Let’s try to import the VRM file into applications that support VRM!