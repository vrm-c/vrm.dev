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

For example, the git urls of [v0.63.1](https://github.com/vrm-c/UniVRM/releases/tag/v0.63.1) are:

* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.63.1`
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.63.1` => depends on VRMShaders
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.63.0` => depends on UniGLTF, VRMShaders

Since there is no function that can automatically download the dependencies between packages, please add above git urls in order.

Now check your project window. You shall see packages above in the Packages folder:

{{< img src="images/vrm/upm_package.jpg" >}}
<hr>

By changing the version number, you can switch to different version based on your needs.

#### Add dependencies in Packages/manifest.json

An alternative way is to add necessary dependencies right in Packages/manifest.json. 
Open manifest.json with text/code editor and paste the following contents (example of [v0.63.1](https://github.com/vrm-c/UniVRM/releases/tag/v0.63.1)):

```json
{
  "dependencies": {
    // ...
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.63.1",
    "com.vrmc.unigltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.63.1",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.63.1",
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
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#d8d9ff481f426150273e123d152f12183756267f",
    "com.vrmc.unigltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#d8d9ff481f426150273e123d152f12183756267f",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#d8d9ff481f426150273e123d152f12183756267f",
    // ...
}
```
