---
title: "0. Create a Unity project and install UniVRM"
date: 2020-11-12T11:24:17+09:00
description: "Unity download, Unity project creation, UniVRM package import"
tags: ["unity"]
weight: 1
---

## Download UniVRM

Download the latest version of UniVRM (`UniVRM-0.XX.0_YYYY.unitypackage`) in the release page:

https://github.com/vrm-c/UniVRM/releases

![download_unitypackage](/images/vrm/download_unitypackage.png)

{{% alert title="XX YY" color="info" %}}
XX is UniVRM version. YYYY is version ID
{{% /alert %}}

## Install Unity

https://docs.unity3d.com/Manual/GettingStartedInstallingUnity.html

Make sure the [Unity Version]({{< relref "unity_version.md" >}}) you are going to download is compatible with UniVRM.

## Create an empty project in Unity

Launch Unity and create a new project (``New -> Create project``):

{{< img src="images/vrm/unity_new_project.png" >}}

For Unity Hub, click ``Projects -> New -> 3D template -> CREATE``:

{{< img src="images/vrm/new_project_en.jpg" >}}

## Import UniVRM package into the created project

Import the downloaded `UniVRM-0.XX.0_YYYY.unitypackage` into the current project (``Assets -> Import Package -> Custom Package``). The imported files will be in the folders ``../Assets/VRM``, ``../Assets/UniGLTF`` and ``../Assets/VRMShaders``.

{{< img src="images/vrm/package_import.jpg" width="400" alt="package_import" >}}

**To replace UniVRM with a newer version, it is recommended to delete the existing VRM, UniGLTF, VRMShaders and MeshUtility folders (if any) before package import**.

## Check if UniVRM has been imported successfully

If UniVRM import successes, `VRM` menu will be displayed in the menu bar:

{{< img src="images/vrm/vrm_menu.jpg" alt="vrm menu" >}}
<hr>

Previous versions:

{{< img src="images/vrm/vrm_menu_old.jpg" alt="vrm menu old" >}}
<hr>

{{% alert title="If you are using Unity-2018 and the VRM menu does not show up:" color="warning" %}}
Go to `ProjectSettings` - `Player` - `Other Settings` - `Scripting Runtime Version` and check whether `Scripting Runtime Version` is set to `.Net4.X equivalent`
{{% /alert %}}

### Console

The errors occurred in a Unity project can be shown in the Console window:

{{< img src="images/vrm/show_console.jpg"  width="500" alt="show console">}}

Click `clear` button on the upper-left corner of the Console window and see if any error (message in red) is left in the console. In most of the cases, errors originate from the UniVRM installation failure.

{{< img src="images/vrm/error_in_console.jpg" width="500" alt="clear console" >}}

## UniVRM Manual

➡ [Install]({{< relref "install.md" >}})
