---
date: 2020-07-08T11:42:13+09:00
weight: 3
aliases: ["/univrm/univrm_upm/", "/univrm/install/univrm_upm/"]
tags: ["unity"]
---

# Install UniVRM with UPM

* require `Unity 2019.4 or later version`
* require [Git client](https://git-scm.com/)

## Install git for Unity

Please refer to [`Git dependencies -> Requirements`](https://docs.unity3d.com/Manual/upm-git.html#req) for more information.

> To use Git dependencies in a project, make sure the [Git client](https://git-scm.com/) is installed on your machine and that you have added the Git executable path to the PATH system environment variable.

If git is not installed, the error messages like below will be shown: 

> An error occurred while resolving packages:
Project has invalid dependencies:
com.vrmc.vrmshaders: No 'git' executable was found. Please install Git on your system then restart Unity and Unity Hub

```{admonition} Check whether git.exe can be found on your machine
:class: warning

As mentioned above, install [Git client](https://git-scm.com/) and get the directory of git.exe (by default, git.exe is in `C:\\Program Files\\Git\\cmd`). Then, add it to the PATH system environment variable.
```

* To check the git version, for instance, open Windows PowerShell and type the command `git --version`:

```
> git --version
git version 2.29.2.windows.2
```

## Install using UnityPackageManager window

```{figure} /_static/images/vrm10/menu_packagemanager.jpg
UnityPackageManagerのWindow
```

```{figure} /_static/images/vrm10/from_git.jpg
add package from git URL
```

Whenever a new UniVRM version comes out, we will post git urls associated with this release.

For example, the git urls of [v0.66.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.66.0) are:

* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.66.0`
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.66.0` => depends on VRMShaders
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.66.0` => depends on UniGLTF and VRMShaders

Since there is no function that can automatically download the dependencies between packages, please add above git urls in order.

```{figure} /_static/images/vrm/upm_package.jpg
```

By changing the version number, you can switch to different version based on your needs.

## By changing the version number, you can switch to different version based on your needs.

An alternative way is to add necessary dependencies right in Packages/manifest.json

```js
{
  "dependencies": {
    // ...
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.66.0",
    "com.vrmc.unigltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.66.0",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.66.0",
    // ...
}
```

### Specify git commit

However, if you want to switch to the specific commit, you can manually change the hash value or append the specific commit in `dependencies`.

Example:

```js
{
  "dependencies": {
    // ...
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#39d54ce7d3b0061d2d9ee236017dca129c7cdc51",
    "com.vrmc.unigltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#39d54ce7d3b0061d2d9ee236017dca129c7cdc51",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#39d54ce7d3b0061d2d9ee236017dca129c7cdc51",
    // ...
}
```

