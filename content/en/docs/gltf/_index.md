---
title: glTF
date: 2020-08-03T16:07:54+09:00
weight: 3
aliases: [
    "/en/dev/univrm-0.xx/gltf/",
    "/en/docs/univrm/gltf/gltf_about/", 
    "/en/docs/univrm/gltf/unigltf/", 
    "/en/docs/gltf/unigltf/",
    "/en/docs/gltf/scripted_importer/",
    "/en/docs/gltf/update/"
]
---

[glTF™ (GL Transmission Format)](https://www.khronos.org/gltf/) 
is a 3D format by `KHRONOS`, which is the specification of `OpenGL`.
Version 2 was formulated in 2017.

* [glTF™ 2.0 Specification](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html)
* [github](https://github.com/KhronosGroup/glTF)

`VRM` is a format based on `glTF-2.0`.

## UniGLTF

The `UniGLTF` contained in the `UniVRM` package can read and write the `glTF` file and the binary version of the` glb` file.

|                              | UniGLTF | UniVRM |                      |
|------------------------------|---------|--------|----------------------|
| mesh(morph target, skinning) | ✅       | ✅      |                      |
| material(pbr)                | ✅       | ✅      |                      |
| material(unlit)              | ✅       | ✅      | KHR_materials_unlit  |
| material(MToon)              |         | ✅      |                      |
| animation                    | ✅       |        | Not supported by VRM |
| camera                       |         |        |                      |

{{% alert title = "Display glTF part of VRM in 3D Builder" color = "warning"%}}

{{<img width = 400 src = "images/vrm/alicia_3dbuilder.png">}}

If you change the extension from `.vrm` to` .glb`, you can load it with an application that supports `gltf` (such as 3D Builder that comes standard with Windows 10).
(However, VRM-specific settings are not reflected)

{{% / alert%}}
