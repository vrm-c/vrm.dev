---
date: 2020-09-02T12:29:28+09:00
weight: 4
tags: ["api"]
---

# Install UniVRM Samples

In this section, we assume you have [installed UniVRM package](/univrm/install/univrm_install).

## UniVRM Samples Package

Starting with `v0.81.0`, UniVRM Samples are included in the UniVRM package

### ~ v0.80.0

<https://github.com/vrm-c/UniVRM/releases>

`UniVRM-samples-0.XX.X_XXXX.unitypackage`

### Import

From the menu, go to `Assets -> Import Package` and then click `Custom Package` to import the package `UniVRM-samples-0.XX.X_XXXX.unitypackage`.

After you see the file information in the package as shown below, click `Import` button:

```{figure} /_static/images/vrm/sample_package_import.jpg
sample_package_import
```

## Run UniVRM Samples

Now the folder `VRM.Samples` should be in `Assets`. In Project window, please select `SampleViewer`:

```{figure} /_static/images/vrm/sample_scene.jpg
sample_scene
```

Next, select `Game` view. You will see the `SampleViewer` interface:

```{figure} /_static/images/vrm/sample_viewer.jpg
sample_viewer
```

Click `Play` button to enable `SampleViewer`, and then click `Open` button to import a VRM model into the scene at runtime:

```{figure} /_static/images/vrm/play_mode.jpg
play_mode
```

```{figure} /_static/images/vrm/sample_viewer_activate.jpg
sample_viewer_activate
```
Other samples such as [Runtime VRM export](https://github.com/vrm-c/UniVRM/tree/master/Assets/VRM/Samples/RuntimeExporterSample)

and [FirstPerson rendering](https://github.com/vrm-c/UniVRM/tree/master/Assets/VRM/Samples/FirstPersonSample) are available in `VRM.Samples`.

Alicia model [can be found here](https://github.com/vrm-c/UniVRM/blob/master/Tests/Models/Alicia_vrm-0.51/AliciaSolid_vrm-0.51.vrm).

