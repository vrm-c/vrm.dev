---
date: 2020-10-12T15:28:09+09:00
weight: 1
tags: ["unity"]
---

# VRM Import

## Import VRM file in Editor Mode

### 1 Create an empty project in Unity

![figure](/images/vrm/unity_new_project.png)

Or

![figure](/images/vrm/new_project.jpg)

Launch Unity and create a new project (`New -> Create project`):

### 2 Import UniVRM package into the created project

**To replace UniVRM with a newer version, it is recommended to delete the existing VRM, UniGLTF, VRMShaders and MeshUtility folders (if any) before package import**.

![package_import](/images/vrm/package_import.jpg)

### 3 Import VRM file into Unity

**Drag and drop a VRM file (~.vrm) into the Assets folder**. The **prefab** file associated with the VRM file can be automatically generated.

![figure](/images/vrm/vrm_prefab.png)
```

Create a new scene by `File` - `New Scene` or use an existing one, then drag the prefab file to the Hierarchy window. The model can be visualized as shown in the image below:

![figure](/images/vrm/alicia_scene2.png)
```

By clicking the prefab's GameObject in `Hierarchy`, the VRM model's information will be displayed in the Inspector window. Note that spring bone settings can be found in the GameObject named `secondary`.

![figure](/images/vrm/vrm_settings.png)

## Related Sections

- [Custom settings in VRM](/vrm/how_to_make_vrm/setup_vrm#custom-settings-in-vrm)\" >}})

- [VRM Export](/univrm/export/univrm_export)

