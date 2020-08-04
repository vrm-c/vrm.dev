---
title: "VRMShaders"
date: 2020-08-03T10:39:04+09:00
weight: 8
tags: ["material", "upm"]
url: "univrm/shaders/univrm_vrmshaders/"
---

Starting from `UniVRM-0.56`, the folder structure in UniVRM has been changed.
Material-related parts in `UniVRM` has been moved to `Assets/VRMShaders`.

## UPM Package

VRMShaders can be used as a package to be imported into a Unity Project via Unity Package Manger.
Besides that, VRMShaders can be used independently without `UniVRM` (`UniVRM` uses `VRMShaders`).
VRMShaders includes `UniUnlit` and `MToon`.

```json
// manifest.json 
{
  "dependencies": {
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.57.0",
  }
}
```

In this example, the version of UniVRM being imported is v0.57.0. 
The imported version can be changed to different version (e.g. v0.56.0).
`VRMShaders` version number is the same as UniVRM.

### UniUnlit

[unlit]({{< relref "univrm_unlit.md" >}})

### MToon

In VRMShaders, MToon shader is managed by `git submodule`:

https://github.com/vrm-c/UniVRM/tree/master/Assets/VRMShaders

For the latest update about MToon, please refer to:

https://github.com/Santarh/MToon

