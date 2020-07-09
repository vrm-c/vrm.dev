---
title: "Install UniVRM with UPM"
date: 2020-07-07T18:33:59+09:00
url: "/en/univrm/univrm_upm/"
weight: 3
---

## UniVRM-0.XX's UnityPackage

Starting from UniVRM-0.56, UniVRM can be imported with Unity Package Manager.

Requirement: `Unity 2019.3.4f1 or later version`.

### How to use

To open UPM, go to `Windows` -> `Package Manager`:

{{< img src="images/vrm10/menu_packagemanager.jpg" >}}
<hr>

Select `add package from git URL` to import the target package specified by its git url.

{{< img src="images/vrm10/from_git.jpg" >}}
<hr>

Whenever a new UniVRM version comes out, we will post git urls associated with this release. 

For example, the git urls of [v0.56.3](https://github.com/vrm-c/UniVRM/releases/tag/v0.56.3) are:

* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.56.3`
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.56.3` => depends on VRMShaders

Since there is no function that can automatically download the dependencies between packages, please add above git urls in order.

By changing the version number, You can switch to different version based on your needs.

#### Add dependencies in Packages/manifest.json

An alternative way is to add necessary dependencies right in Packages/manifest.json. 
Open manifest.json with text/code editor and paste the following contents (example of [v0.56.3](https://github.com/vrm-c/UniVRM/releases/tag/v0.56.3)):

```json
{
  "dependencies": {
    // ...
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.56.3",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.56.3",
    // ...
}
```

The hash values in `lock` can be updated automatically by Unity, there is no need to manually change them.

```json
  "lock": {
    "com.vrmc.vrmshaders": {
      "revision": "v0.56.3",
      "hash": "3b68eb7f99bfe78ea9c83ea75511282ef1782f1a"
    },
    "com.vrmc.univrm": {
      "revision": "v0.56.3",
      "hash": "3b68eb7f99bfe78ea9c83ea75511282ef1782f1a"
    }
  }
```

However, if you want to switch to the specific commit, you can manually change the hash value or append the specific commit in `dependencies`.

Example:

```json
{
  "dependencies": {
    // ...
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#155acf354735288db0335878179f483901541851",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#155acf354735288db0335878179f483901541851",
    // ...
}
```