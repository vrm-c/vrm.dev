---
title: "How to view VRM file"
date: 2018-04-16T16:30:00+09:00
url: "/en/how_to_view_vrm/"
weight: 3
---

## Import VRM file into VRM Viewer
Download VRM Viewer from [UniVRMTest/releases](https://github.com/vrm-c/UniVRMTest/releases). Next, run the program and click``VRM Model``. Then, select a VRM model available on your computer. The VRM model can be shown in the scene. Other VRM viewers [can be found here]({{< relref "vrm_applications.md#viewer" >}}).

## Import VRM file into Unity Project
Importing VRM file by this way is a little tedious but you can see the information of a VRM model:

### 1. Create an empty project in Unity
{{< img src="images/vrm/unity_new_project.png" >}}

Create a new project at the start page (``New -> Create project``).

### 2. Import UniVRM package into the created project
{{< img src="images/vrm/package_import.png" alt="package_import" >}}

Download the latest unitypackage (UniVRM-0.XX) from [UniVRM/releases](https://github.com/vrm-c/UniVRM/releases) and import it into the current project (``Assets -> Import Package -> Custom Package``). The imported files will be in ``../Assets/VRM`` and ``../Assets/VRMShaders``. **To replace UniVRM with a newer version, it is recommended to delete the existing VRM and VRMShaders folders (if any) before package import**.

### 3. Import VRM file into Unity 
{{< img src="images/vrm/vrm_prefab_en.png" >}}

**Drag and drop VRM file (~.vrm) into Assets folder**. The **prefab** file of the imported VRM model data can be automatically generated.

{{< img src="images/vrm/alicia_scene2.png" >}}

**Drag and drop the prefab file under the scene in the Hierarchy window**. The model data can be visualized as shown in the following image:

{{< img src="images/vrm/vrm_settings.png" >}}

**The VRM model's information will be shown in the Inspector window** once the GameObject of the model data in``Hierarchy``is selected.

## Import VRM file into 3D Builder

{{< img src="images/vrm/alicia_3dbuilder.png" >}}

**Another simple way to visualize a VRM model or check whether a VRM file is viable is using Windows 3D Builder**. Please change file extension from ~. vrm to ~.glb. However, custom settings for VRM model will not be reflected.

## Upload / Download VRM file
Currently you can submit your VRM files to [THE SEED ONLINE](https://seed.online/), [VRoid Hub](https://hub.vroid.com/) or [Nikoni 3D](https://3d.nicovideo.jp/). For Nikoni 3D, the submitted VRM file [can be found here](https://3d.nicovideo.jp/search?word_type=tag&word=VRM). Please check license information and try out those VRM models.
Also, when uploading a VRM file to Nikoni 3D, there is an option「バーチャルキャスト連携」(virtual cast cooperation) which can let users use the VRM model in [Virtual Cast](https://virtualcast.jp/).