---
date: 2020-08-26T15:52:30+09:00
weight: 1
tags: ["unity"]
description: "作業準備、Unity Download, UnityのProject作成, UniVRM Download, UniVRM package導入"
---

# 0 Create a Unity project and install UniVRM

## Download UniVRM

https://github.com/vrm-c/UniVRM/releases

Download the latest version of UniVRM (`UniVRM-0.XX.0_YYYY.unitypackage`) in the release page:

:::note XX YY

XX is UniVRM version. YYYY is version ID

![download_unitypackage](/images/vrm/download_unitypackage.png)

:::

## Install Unity

https://create.unity3d.com/jp-howto-install-win

Make sure the [Unity Version](/univrm/install/unity_version) you are going to download is compatible with UniVRM.

## Create an empty project in Unity

![figure](/images/vrm/unity_new_project.png)

or

![figure](/images/vrm/new_project.jpg)

For Unity Hub, click ``Projects -> New -> 3D template -> CREATE``:

## Import UniVRM package into the created project

Import the downloaded `UniVRM-0.XX.0_YYYY.unitypackage` into the current project (``Assets -> Import Package -> Custom Package``). The imported files will be in the folders ``../Assets/VRM``, ``../Assets/UniGLTF`` and  ``../Assets/VRMShaders``

![package_import](/images/vrm/package_import.jpg)

click `import` button.

## Check if UniVRM has been imported successfully

If UniVRM import successes, `VRM` menu will be displayed in the menu bar:

![vrm menu](/images/vrm/vrm_menu.jpg)

![Previous versions](/images/vrm/vrm_menu_old.jpg)

:::warning If you are using Unity-2018 and the VRM menu does not show up:

"Go to `ProjectSettings` - `Player` - `Other Settings` - `Scripting "
"Runtime Version` and check whether `Scripting Runtime Version` is set to "
"`.Net4.X equivalent`"

:::

### Console

The errors occurred in a Unity project can be shown in the Console window:

![show console](/images/vrm/show_console.jpg)

Click `clear` button on the upper-left corner of the Console window and see if any error (message in red) is left in the console. In most of the cases, errors originate from the UniVRM installation failure.

![clear console](/images/vrm/error_in_console.jpg)

## Manual

➡ [Install](/univrm/install/univrm_install)

