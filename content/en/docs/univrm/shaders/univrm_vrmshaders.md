---
title: "VRMShaders"
date: 2020-08-03T10:39:04+09:00
weight: 4
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

Since part of GLTF properties are not available in Unity's `unlit` shaders (e.g. vertex color), we introduced `UniUnlit` to solve this issue. In addition, `UniUnlit` is fully compatible with all `unlit` shaders in Unity.

Unity's `unlit` shaders will become `UniGLTF/UniUnlit` if they are exported, and then imported again. 

| export                   | gltf                | import           |
|--------------------------|---------------------|------------------|
| Unlit/Color              | KHR_materials_unlit | UniGLTF/UniUnlit |
| Unlit/Texture            | KHR_materials_unlit | UniGLTF/UniUnlit |
| Unlit/Transparent        | KHR_materials_unlit | UniGLTF/UniUnlit |
| Unlit/Transparent Cutout | KHR_materials_unlit | UniGLTF/UniUnlit |
| UniGLTF/UniUnlit         | KHR_materials_unlit | UniGLTF/UniUnlit |

### MToon

In VRMShaders, MToon shader is managed by `git submodule`:

https://github.com/vrm-c/UniVRM/tree/master/Assets/VRMShaders

For the latest update about MToon, please refer to:

https://github.com/Santarh/MToon

