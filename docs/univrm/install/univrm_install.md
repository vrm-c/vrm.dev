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

```{figure} /_static/images/vrm/linear_setting.jpg
linear setting
```

```{admonition} If your Unity version is {Unity-2018.3, Unity-2018.4, Unity-2019.1}:
:class: warning

* "Go to `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` and set `Scripting Runtime Version` to `.Net4.X equivalent`

```

```{admonition} Install UniVRM in an Existing Project:
:class: warning

"If old UniVRM version exists, please delete `Assets/VRM`, `Assets/UniGLTF` (if exists), `Assets/VRMShaders` (if exists) and `Assets/MeshUtility` (if exists) before installation. Refer to [Uninstall UniVRM](/univrm/install/univrm_uninstall) for more information"
```

## Import unitypackage

Import `unitypackage`

Go to `Assets` - `Import Package` - `Custom Package` and select `UniVRM-0.XX.X_XXXX.unitypackage`.

Three folders: `Assets/VRM`, `Assets/UniGLTF` and `Assets/VRMShaders` will be imported into the Unity project.

```{figure} /_static/images/vrm/package_import.jpg
:name: package_import

Import Unity Package
```

## Check if UniVRM has been imported successfully

If UniVRM import successes, `VRM` menu will be displayed in the menu bar:

```{figure} /_static/images/vrm/vrm_menu.jpg
vrm menu
```

Previous versions:

```{figure} /_static/images/vrm/vrm_menu_old.jpg
vrm menu old
```

If menu does not show up:

* Open Console: click `clear` button on the upper-left corner of the Console window to see if any error (message in red) occurs

```{figure} /_static/images/vrm/show_console.jpg
show console
```

```{figure} /_static/images/vrm/clear_console.jpg
clear console
```

## Related Sections

- [How to make VRM file](/vrm/how_to_make_vrm/index)
- [VRM Import](/univrm/import/univrm_import)

