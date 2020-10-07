---
title: "Install UniVRM"
linkTitle: "Install UniVRM"
date: 2018-04-16T16:30:00+09:00
weight: 2
aliases: ["/en/univrm/univrm_install/", "/en/univrm/install/univrm_install/"]
tags: ["unity"]
---

## Unity Version

* The recommended version is `Unity-2019.4`. Other supported Unity versions [can be found here]({{< relref "unity_version.md" >}}).

To install UniVRM with Unity Package Manager, please refer to [Install UniVRM with UPM]({{< relref "univrm_upm.md" >}}).

## unitypackage

Get unity package in https://github.com/vrm-c/UniVRM/releases.

The package's name will look like this: `UniVRM-0.XX.X_XXXX.unitypackage`

## Before Installation

* Create a new Unity project

* Go to `ProjectSettings` - `Player` - `Other Settings` - `Rendering` - `ColorSpace` and set `ColorSpace` to `Linear` (recommended setting)

{{< img src="images/vrm/linear_setting.jpg" width="600" alt="linear setting">}}

{{% alert title="If your Unity version is {Unity-2018.3, Unity-2018.4, Unity-2019.1}: " color="warning" %}}

* Go to `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` and set `Scripting Runtime Version` to `.Net4.X equivalent`
{{% /alert %}}

{{% alert title="Install UniVRM in an Existing Project: " color="warning" %}}
If old UniVRM version exists, please delete `Assets/VRM`, `Assets/VRMShaders`(if exists) and `Assets/MeshUtility`(if exists) before installation. Refer to [Uninstall UniVRM]({{< relref "univrm_uninstall.md" >}}) for more information
{{% /alert %}}

## Import unitypackage

Go to `Assets` - `Import Package` - `Custom Package` and select `UniVRM-0.XX.X_XXXX.unitypackage`.

Three folders: `Assets/VRM`, `Assets/VRMShaders` and `Assets/MeshUtility` will be imported into the Unity project.

|{{< img src="images/vrm/package_import.png" width="350" alt="package_import" >}}|
|-----|
|Import Unity Package|

## Check if UniVRM has been imported successfully

If UniVRM import successes, `VRM` will be displayed in the menu bar:

{{< img src="images/vrm/vrm_menu.jpg" alt="vrm menu" >}}
<hr>

If menu does not show up:

* Open Console: click `clear` button on the upper-left corner of the Console window to see if any error (message in red) occurs

{{< img src="images/vrm/show_console.jpg"  width="500" alt="show console">}}

{{< img src="images/vrm/clear_console.jpg" width="500" alt="clear console" >}}
