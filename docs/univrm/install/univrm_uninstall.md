---
linkTitle: "UniVRMをアンインストールする"
date: 2020-08-31
weight: 5
aliases: []
tags: ["unity"]
---

# Uninstall UniVRM

Please delete the folders below:

| folder             | Version             | Note                       |
|--------------------|---------------------|----------------------------|
| Assets/VRM         |                     | UniVRM-0.XX.0.unitypackage |
| Assets/UniGLTF     | v0.63.0 or later         | UniVRM-0.XX.0.unitypackage |
| Assets/VRMShaders  | v0.56.0 or later         | UniVRM-0.XX.0.unitypackage |
| Assets/MeshUtility | v0.59.0 or later ~ v0.63.0 | UniVRM-0.XX.0.unitypackage |

| folder                             | Version | Note                               |
|------------------------------------|---------|------------------------------------|
| Assets/VRM.Samples                 |         | UniVRM-samples-0.XX.0.unitypackage |
| Assets/StreamingAssets/VRM.Samples |         | UniVRM-samples-0.XX.0.unitypackage |

If you want to upgrade UniVRM to the latest version in a Unity project, it is recommended to delete all the folders mentioned above since the locations of files/folders may change between different versions.

* To remove packages installed by Unity Package Window, please click `Remove` button at the lower right of the package interface in UPM window.

