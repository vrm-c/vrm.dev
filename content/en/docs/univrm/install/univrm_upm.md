---
title: "Install UniVRM with UPM"
date: 2020-07-07T18:33:59+09:00
weight: 2
aliases: ["/en/univrm/univrm_upm/", "/en/univrm/install/univrm_upm/"]
tags: ["unity"]
---

## UniVRM-0.XX's UnityPackage

Starting from UniVRM-0.56, UniVRM can be imported with Unity Package Manager.

Requirement: `Unity 2019.3.4f1 or later version`.

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

By changing the version number, You can switch to different version based on your needs.

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
