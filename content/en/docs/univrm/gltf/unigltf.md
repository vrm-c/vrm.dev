---
title: "UniGLTF"
date: 2021-01-08T17:13:11+09:00
weight: 5
tags: ["unity", "gltf", "api"]
---

Starting with `UniVRM-0.63.2`, `UniGLTF` is separated from `UniVRM` and can be used as a UPM package. 

The directory for `UniGLTF` is `Assets/UniGLTF`.

## UnityPackage

UniGLTF can be installed by importing UniVRM unity package (`UniVRM-0.XX.unitypackage`). gltf/glb import/export can still be used even the VRM folder (`Assets/VRM`) is deleted.

## UPM

UniGLTF depends on VRMShaders.

```json
{
  "dependencies": {
    // ...
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.63.2",
    "com.vrmc.unigltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.63.2",
    // ...
}
```

## UniGLTF Features

* glTF/glb import/export

### glTF Extensions

* KHR_materials_unlit import/export
    * export: unity's unlit-type shaders
    * import: VRMShaders' [UniUnlit]({{< relref "univrm_unlit.md" >}}) shader
* KHR_texture_transform import/export
* The name of MorphTarget (BlendShape) is imported/exported to `/meshes/*/primitives/*/extras/targetNames`, `/meshes/*/extras/targetNames`
