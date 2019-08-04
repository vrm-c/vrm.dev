---
title: "How to make VRM file"
date: 2018-04-16T16:30:00+09:00
url: "/en/how_to_make_vrm/"
weight: 2
---

## Conversion from existing 3D model

{{< img src="images/vrm/vrm_workflow_en.png" alt="vrm workflow" >}}
To make VRM file, we use [Unity](https://unity3d.com/) and [UniVRM](https://github.com/vrm-c/UniVRM). The workflow is as follow:

1. Import the 3D model data and [UniVRM](https://github.com/vrm-c/UniVRM) into the current unity project. Adjust and set the size, material, etc. 
1. Export the 3D model data as VRM in Unity (normalization processing)
1. Import the VRM file into the current unity project and customize the settings (license, spring bone, expression, eyelook, etc.)
     * In some cases, make sure the model is working (e.g. facial expression change) in play mode first
1. Export the 3D model data after the adjustment is finished. The new settings now are saved in the updated VRM file.

Briefly speaking, **A 3D model can be adjusted and exported as VRM file in Unity. Once a VRM file is made, it can be imported again for model fine tuning**.

---
### 1. Create an empty project in Unity
{{< img src="images/vrm/unity_new_project.png" >}}

Create a new project at the start page (``New -> Create project``).

### 2. Import UniVRM package into the created project
{{< img src="images/vrm/package_import.png" alt="package_import" >}}

Download the latest unitypackage (UniVRM-0.XX) from [UniVRM/releases](https://github.com/vrm-c/UniVRM/releases) and import it into the current project (``Assets -> Import Package -> Custom Package``). The path of imported files is``../Assets/VRM``. **It is recommended to delete existing VRM folder included VRM in advance before package import**.

### 3. Prepare a 3D model that can be handled as "Humanoid" in Unity
{{< img src="images/vrm/alicia_generic.png" >}}

Prepare a humanoid model that can be [imported](https://docs.unity3d.com/2018.3/Documentation/Manual/HOWTO-importObject.html) into Unity such as FBX format. The bone setting is also required. Also, **be sure to use your own model or the licensed model data that is processed and used as VR avatar**. As we will describe later, **there are items that describe license information in VRM file itself, authors need to set those items for their own VRM models**. 

Go to the model's``Import Settings -> Rig -> Animation Type``and select``Humanoid``after the model is imported.

{{< img src="images/vrm/fix_eye.png" >}}

When the model file is imported, bone assignments done by auto-recognition may be different from expectations (see image above):

* Jaw is assigned to mouth
* Eye is assigned to eye highlight

We can fix them by assigning the right corresponding parts manually.

### 4. Adjust the model data and export it as VRM from menu（normalization processing）
{{< img src="images/vrm/alicia_scene.png" >}}

**Drag and drop the model data (made in step 3) under the scene in the Hierarchy window** and adjust the following parameters:

* Model Position
	* The model should be placed at the origin
* Model Scale
	* 1.0 = 1m
* Model Pose
	* The model should face towards +Z(axis) direction
* Texture（material / shader）
    * Go to``Import Settings -> Materials -> Location``and select``Use External Materials (Legacy)``to enable shader option. It is **highly recommended** to use the shaders listed below:
		* PBR
			* Standard shader (Unity standard)
		* Unlit type shader
			* VRM/UnlitTexture (same as Unit/Texture)
			* VRM/UnlitCutout (same as Unit/Coutout)
			* VRM/UnlitTransparent (same as Unit/Transparent)
			* VRM/UnlitTransparentZWrite (Alpha blending and ZWrite are available. It is assumed to be applied to semi-transparent objects)
		* Toon shader
			* VRM/MToon (lighting supported toon shader）

{{< img src="images/vrm/vrm_menu_enable.png" >}}

After the adjustment is finished, select the model data in``Hierarchy``and export the model from``menu -> VRM -> export humanoid``.

{{< img src="images/vrm/export_dialog.png" >}}

Check the boxes and click the``Export``button

* Force T Pose
    * Force the model pose to become [T-Pose](../vrm_tpose/) before removing rotation / scale.
* Pose Freeze
    * Whether the rotation / scale removal processing should be performed. It is **the process of normalizing model** for conforming to the VRM rules. Please make sure to check the boxes at the **first time of use**. After this process is done, all the components can work correctly.

By clicking the``Export``button, the VRM file can be created. To easily track this file, it is recommended to name the file like this: "Model_Name_Normalized.vrm". Details about model's T-Pose normalization [can be found here](https://github.com/vrm-c/UniVRM/wiki/T-Pose-Normalization-for-Model).

### 5. Import the VRM file
{{< img src="images/vrm/vrm_prefab_en.png" >}}

**Drag and drop the VRM file (~.vrm) from step 4 into Assets folder**. The **prefab** file of the imported VRM model data can be automatically generated.

{{< img src="images/vrm/alicia_scene2.png" >}}

Now remove the model data (step 4), and **drag and drop the prefab file under the scene in the Hierarchy window**. Normalized model data such as mesh, etc. can then be shown.  

### 6. Custom setting in VRM
{{< img src="images/vrm/vrm_settings.png" >}}

The VRM model's information will be shown in the Inspector window once the GameObject of the model data (step 5) in``Hierarchy``is selected. In addition, the setting about **spring bone (object swaying) is available in "secondary"**. Please at least fill in title, author, license information. **Specially, license information is crucial!**

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
		* Permission to perform violent acts with this avatar
			* Disallow
			* Allow
		* Permission to perform sexual acts with this avatar
			* Disallow
			* Allow
		* For commercial use
			* Disallow
			* Allow
		* Other License Url
			* If there are any conditions not mentioned above, put the URL link of the license document here

	* License redistribution / modification
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

Besides, please set up necessary items listed below:

* [Expression and lip-sync (BlendShape)](../univrm/components/univrm_blendshape/)
* [First-person point of view (Get rid of model's head for VR applications)](../univrm/components/univrm_firstperson/)
* [Movable range for eye gaze/eyeball controlled by bone or BlendShape](../univrm/components/univrm_lookat/)
* [Spring bone (SpringBone/SpringBoneCollider)](../univrm/components/univrm_secondary/)

### 7. Check model expressions/movements in play mode（If necessary）
{{< img src="images/vrm/aiueo.png" >}}

Set``AnimationClip/AnimationController``and set [viewing target](../univrm/components/univrm_lookat/#target) in``VRMLookAtHead -> Target``(the head orientation towards the target). Then, check model's movements and expressions. Also, fairly simple test scripts "AIUEO" and "Blinker" are provided. Click``Add Component``at the bottom of model's Inspector window to add “AIUEO” script or drag the script directly to Inspector. After "AIUEO" is set, lip synchronization animation that "aa", "ih", "ou", "E", "oh" switches in turn can be created. Similarly, if "Blinker" is set, eye blink animation that plays periodically can be created. See [runtime VRM loader sample](https://github.com/vrm-c/UniVRM/releases) (download UniVRM-RuntimeLoaderSample-0.XX) for more details on how to use these scripts.

### 8. Export the adjusted VRM model
{{< img src="images/vrm/vrm_menu_enable.png" >}}

After the adjustment is completed, select the model data in``Hierarchy``and again export the model from``menu -> VRM -> export humanoid``.

This time **please uncheck "Force T Pose" and "Pose Freeze"**. They are only used for the first time (normalization processing). Name the file and export the adjusted VRM model.

### Done！
Your VRM file is good to go. Let’s try to import the VRM file into applications that support VRM!