---
title: "Install UniVRM Samples"
date: 2020-09-02T12:28:08+09:00
weight: 4
tags: ["api"]
---

In this section, we assume you have [installed UniVRM package]({{< relref "univrm_install.md" >}}).

## UniVRM Samples Package

Get UniVRM Samples package in https://github.com/vrm-c/UniVRM/releases.

The package's name will look like this: `UniVRM-samples-0.XX.X_XXXX.unitypackage`.

Make sure the version you downloaded matches the installed UniVRM version (e.g. UniVRM and UniVRM Samples are both v0.66.0).

## Import

From the menu, go to `Assets -> Import Package` and then click `Custom Package` to import the package `UniVRM-samples-0.XX.X_XXXX.unitypackage`.

After you see the file information in the package as shown below, click `Import` button:

{{< img src="images/vrm/sample_package_import.jpg" width="300" height="300" alt="sample_package_import" >}}

## Run UniVRM Samples

Now the folder `VRM.Samples` should be in `Assets`. In Project window, please select `SampleViewer`:

{{< img src="images/vrm/sample_scene.jpg" width="300" height="300" alt="sample_scene" >}}

Next, select `Game` view. You will see the `SampleViewer` interface:

{{< img src="images/vrm/sample_viewer.jpg" width="500" alt="sample_viewer" >}}

Click `Play` button to enable `SampleViewer`, and then click `Open` button to import a VRM model into the scene at runtime:

{{< img src="images/vrm/play_mode.jpg" width="150" alt="play_mode" >}}
<br>
<br>
{{< img src="images/vrm/sample_viewer_activate.jpg" width="600" alt="sample_viewer_activate" >}}

Other samples such as [Runtime VRM export](https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM.Samples/Scripts/VRMRuntimeExporter.cs) and [FirstPerson rendering](https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM.Samples/Scripts/VRMRuntimeLoader.cs) are available in `VRM.Samples`.

Alicia model [can be found here](https://github.com/vrm-c/UniVRM/blob/master/Tests/Models/Alicia_vrm-0.51/AliciaSolid_vrm-0.51.vrm).
