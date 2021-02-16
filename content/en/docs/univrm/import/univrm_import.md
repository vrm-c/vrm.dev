---
title: "VRM Import"
date: 2020-10-12T15:19:15+09:00
weight: 1
tags: ["unity"]
---

## Import VRM file in Editor Mode

### 1. Create an empty project in Unity

Launch Unity and create a new project (``New -> Create project``):

{{< img src="images/vrm/unity_new_project.png" >}}
<hr>

For Unity Hub, click ``Projects -> New -> 3D template -> CREATE``:

{{< img src="images/vrm/new_project_en.jpg" >}}
<hr>

### 2. Import UniVRM package into the created project

Download the latest unitypackage (UniVRM-0.XX) from [UniVRM/releases](https://github.com/vrm-c/UniVRM/releases) and import it into the current project (``Assets -> Import Package -> Custom Package``). The imported files will be in ``../Assets/VRM``, ``../Assets/UniGLTF`` and ``../Assets/VRMShaders``. **To replace UniVRM with a newer version, it is recommended to delete the existing VRM, UniGLTF, VRMShaders and MeshUtility folders (if any) before package import**.

{{< img src="images/vrm/package_import.jpg" width="400" alt="package_import" >}}
<hr>

### 3. Import VRM file into Unity 

**Drag and drop a VRM file (~.vrm) into the Assets folder**. The **prefab** file associated with the VRM file can be automatically generated.

{{< img src="images/vrm/vrm_prefab_en.png" >}}
<hr>

Create a new scene by `File` - `New Scene` or use an existing one, then drag the prefab file to the Hierarchy window. The model can be visualized as shown in the image below:

{{< img src="images/vrm/alicia_scene2.png" >}}
<hr>

By clicking the prefab's GameObject in `Hierarchy`, the VRM model's information will be displayed in the Inspector window. Note that spring bone settings can be found in the GameObject named `secondary`.

{{< img src="images/vrm/vrm_settings.png" >}}
<hr>

## Related Sections

- [VRM Export]({{< relref "univrm_export" >}})