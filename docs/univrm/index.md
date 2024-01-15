---
weight: 2
menu:
  main:
    weight: 11
aliases: ["/univrm/"]
---

# UniVRM

## How to Install

* From `v0.81.0`, require two `unitypackage`
* Install for `v0.80.0` or before is [univrm_install](/univrm/install/univrm_install)
* [Download](https://github.com/vrm-c/UniVRM/releases)

### UnityPackage Install

Download from https://github.com/vrm-c/UniVRM/releases .Install `UniGLTF_VRMShaders` and `UniVRM` unitypackage.

|          | UniGLTF_VRMShaders | UniVRM  | VRM     |
|----------|--------------------|---------|---------|
| for GLTF | install            |         |         |
| for VRM  | install            | install |         |
| for VRM1 | install            |         | install |

* `Sample` merged to above.
* Can install `UPM` PackageWindow `Sample` button.

### UPM Install

From `v0.81.0`Rename `com.vrmc.unigltf` to `com.vrmc.gltf`. for `com.vrmc.unigltf` version issue.

```js
{
  "dependencies": {
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.81.0",
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.81.0", // <= change from unigltf(v0.81.0)
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.81.0",
    // for VRM-1.0
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.81.0",} // <= change from univrm1(v0.81.0)
}
```

### Bug Report

Please check messages in Console (``Window -> Console``).

![menu](/images/vrm/window_console.png)

If messages like the following are shown in the Console window, there may be errors somewhere in the program. 

![error](/images/vrm/error.png)

Please report bugs you got via:

* OS (Windows10 64bit, etc.)
* Unity version (Unity-5.6.3p1, etc.)
* UniVRM version (0.40, etc.)

* https://github.com/vrm-c/UniVRM/issues/new/choose

More details provided in the report will be very helpful for us to look into your problem. For example:

