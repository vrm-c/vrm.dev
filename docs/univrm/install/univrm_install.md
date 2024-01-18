---
date: 2020-07-07
weight: 2
aliases: ["/univrm/univrm_install/", "/univrm/install/univrm_install/"]
tags: ["unity"]
---

# Install UniVRM

## Unity Version

* The recommended version is `Unity-2019.4`. Other supported Unity versions [can be found here](/univrm/install/unity_version).

## Get unity package in

https://github.com/vrm-c/UniVRM/releases

`UniVRM-0.XX.X_XXXX.unitypackage`

## Before Installation

* Create a new Unity project

* "Go to `ProjectSettings` - `Player` - `Other Settings` - `Rendering` - `ColorSpace` and set `ColorSpace` to `Linear` (recommended setting)

![linear setting](/images/vrm/linear_setting.jpg)

:::warning If your Unity version is `Unity-2018.3, Unity-2018.4, Unity-2019.1`:

* "Go to `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` and set `Scripting Runtime Version` to `.Net4.X equivalent`

:::

:::warning Install UniVRM in an Existing Project:

"If old UniVRM version exists, please delete `Assets/VRM`, `Assets/UniGLTF` (if exists), `Assets/VRMShaders` (if exists) and `Assets/MeshUtility` (if exists) before installation. Refer to [Uninstall UniVRM](/univrm/install/univrm_uninstall) for more information"
:::

## `Import` unitypackage

`Import` `unitypackage`

Go to `Assets` - `Import Package` - `Custom Package` and select `UniVRM-0.XX.X_XXXX.unitypackage`.

Three folders: `Assets/VRM`, `Assets/UniGLTF` and `Assets/VRMShaders` will be imported into the Unity project.

![package_import](/images/vrm/package_import.jpg)

`Import` Unity Package

## Check if UniVRM has been imported successfully

If UniVRM import successes, `VRM` menu will be displayed in the menu bar:

![vrm menu](/images/vrm/vrm_menu.jpg)

Previous versions:

![vrm menu old](/images/vrm/vrm_menu_old.jpg)

If menu does not show up:

* Open Console: click `clear` button on the upper-left corner of the Console window to see if any error (message in red) occurs

![show console](/images/vrm/show_console.jpg)

![clear console](/images/vrm/clear_console.jpg)

## Related Sections

- [How to make VRM file](/vrm/how_to_make_vrm/)
- [VRM Import](/univrm/import/univrm_import)

