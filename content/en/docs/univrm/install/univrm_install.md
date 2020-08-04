---
title: "UniVRM installation"
linkTitle: "Install UniVRM"
date: 2018-04-16T16:30:00+09:00
weight: 1
aliases: ["/en/univrm/univrm_install/"]
---

## Unity Version

Starting from `UniVRM-0.56`, UniVRM supports `Unity-2018.4LTS+` `.Net4.x`.

To install UniVRM with Unity Package Manager, please refer to [Install UniVRM with UPM]({{< relref "univrm_upm.md" >}})

## unitypackage

Get unity package in https://github.com/vrm-c/UniVRM/releases.

The package name will look like this: `UniVRM-0.XX.X_XXXX.unitypackage`

## Before Installation

* Create a new Unity project (`Unity-2018.4LTS+`)
* Show Console: click `clear` button on the upper-left of the window to see if any error message (in red) left before installation.

{{< img src="images/vrm/show_console.jpg"  width="500" alt="show console">}}

{{< img src="images/vrm/clear_console.jpg" width="500" alt="clear console" >}}
<hr>

* Go to `Linear``ProjectSettings` - `Player` - `Other Settings` - `Rendering` - `ColorSpace` and set `ColorSpace` to `Linear` (recommended setting)

{{< img src="images/vrm/linear_setting.jpg" width="600" alt="linear setting">}}

### Install UniVRM in an Existing Project

* Go to `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` and set `Scripting Runtime Version` to `.Net4.X equivalent` (Unity 2018). 
* If old UniVRM version exists, please delete `Assets/VRM` before installation

## Import unitypackage

Go to `Assets` - `Import Package` - `Custom Package` and select `UniVRM-0.XX.X_XXXX.unitypackage`.

The two folders: `Assets/VRM` and `Assets/VRMShaders` will be imported into the Unity project.

|{{< img src="images/vrm/package_import.png" width="350" alt="package_import" >}}|
|-----|
|Import Unity Package|

## Check if UniVRM has been imported successfully

if UniVRM import successes, VRM menu will be displayed on the top:

{{< img src="images/vrm/vrm_menu.jpg" alt="vrm menu" >}}
<hr>

If menu does not show up:

* Check if `.Net4.X equivalent` has been selected (`ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version`)
* Open Console and check if any error (message in red) occurs



