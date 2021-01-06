---
title: "VRM Import"
date: 2020-10-12T15:19:15+09:00
weight: 1
tags: ["unity"]
---

## Import VRM file in Editor Mode

### 1. Create an empty project in Unity
{{< img src="images/vrm/unity_new_project.png" >}}

Create a new project at the start page (``New -> Create project``).

### 2. Import UniVRM package into the created project
{{< img src="images/vrm/package_import.png" width="400" alt="package_import" >}}

Download the latest unitypackage (UniVRM-0.XX) from [UniVRM/releases](https://github.com/vrm-c/UniVRM/releases) and import it into the current project (``Assets -> Import Package -> Custom Package``). The imported files will be in ``../Assets/VRM``, ``../Assets/UniGLTF``, ``../Assets/VRMShaders`` and ``../Assets/MeshUtility``. **To replace UniVRM with a newer version, it is recommended to delete the existing VRM, UniGLTF, VRMShaders and MeshUtility folders (if any) before package import**.

### 3. Import VRM file into Unity 
{{< img src="images/vrm/vrm_prefab_en.png" >}}

**Drag and drop VRM file (~.vrm) into Assets folder**. The **prefab** file of the imported VRM model data can be automatically generated.

{{< img src="images/vrm/alicia_scene2.png" >}}

**Drag and drop the prefab file under the scene in the Hierarchy window**. The model data can be visualized as shown in the following image:

{{< img src="images/vrm/vrm_settings.png" >}}

**The VRM model's information will be shown in the Inspector window** once the GameObject of the model data in``Hierarchy``is selected.