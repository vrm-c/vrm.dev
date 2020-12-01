---
title: "Install UniVRM with UPM"
date: 2020-07-07T18:33:59+09:00
weight: 3
aliases: ["/en/univrm/univrm_upm/", "/en/univrm/install/univrm_upm/"]
tags: ["unity"]
---

Starting with UniVRM-0.56, UniVRM can be installed with Unity Package Manager.

Installation prerequisites:

* `Unity 2019.4 or later version`
* [Git client](https://git-scm.com/)

## Install git for Unity

Please refer to [`Git dependencies -> Requirements`](https://docs.unity3d.com/Manual/upm-git.html#req) for more information.

> To use Git dependencies in a project, make sure the [Git client](https://git-scm.com/) is installed on your machine and that you have added the Git executable path to the PATH system environment variable.

If git is not installed, the error messages like below will be shown: 

> An error occurred while resolving packages:
Project has invalid dependencies:
com.vrmc.vrmshaders: No 'git' executable was found. Please install Git on your system then restart Unity and Unity Hub


{{% alert title="Check whether git.exe can be found on your machine" color="warning" %}}
As mentioned above, install [Git client](https://git-scm.com/) and get the directory of git.exe (by default, git.exe is in `C:\Program Files\Git\cmd`). Then, add it to the PATH system environment variable.

To check the git version, for instance, open Windows PowerShell and type the command `git --version`:

```dos
> git --version
git version 2.29.2.windows.2
```

{{% /alert %}}

### Install using UnityPackageManager window

To open UPM, go to `Windows` -> `Package Manager`:

{{< img src="images/vrm10/menu_packagemanager.jpg" >}}
<hr>

Select `add package from git URL` to import the target package specified by its git url.

{{< img src="images/vrm10/from_git.jpg" >}}
<hr>

Whenever a new UniVRM version comes out, we will post git urls associated with this release. 

For example, the git urls of [v0.59.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.59.0) are:

* `https://github.com/vrm-c/UniVRM.git?path=/Assets/MeshUtility#v0.59.0`
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.59.0`
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.59.0` => depends on VRMShaders and MeshUtility

Since there is no function that can automatically download the dependencies between packages, please add above git urls in order.

By changing the version number, you can switch to different version based on your needs.

#### Add dependencies in Packages/manifest.json

An alternative way is to add necessary dependencies right in Packages/manifest.json. 
Open manifest.json with text/code editor and paste the following contents (example of [v0.59.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.59.0)):

```json
{
  "dependencies": {
    // ...
    "com.vrmc.meshutility": "https://github.com/vrm-c/UniVRM.git?path=/Assets/MeshUtility#v0.59.0",
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.59.0",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.59.0",
    // ...
}
```

## Specify git commit

However, if you want to switch to the specific commit, you can manually change the hash value or append the specific commit in `dependencies`.

Example:

```json
{
  "dependencies": {
    // ...
    "com.vrmc.meshutility": "https://github.com/vrm-c/UniVRM.git?path=/Assets/MeshUtility#873aec208c663c10dd825e9b006fec6809cfe6ca",
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#873aec208c663c10dd825e9b006fec6809cfe6ca",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#873aec208c663c10dd825e9b006fec6809cfe6ca",
    // ...
}
```
