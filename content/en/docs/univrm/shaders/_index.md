---
title: "Material"
date: 2018-04-16T16:30:00+09:00
weight: 15
aliases: ["/en/univrm/shaders/univrm_shaders/"]
---

There are three types of materials (shaders) supported by VRM.
These are `unlit`,` standard`, and `MToon`.

UniGLTF supports two types, `unlit` and` standard`.

## Correspondence table export / import

| support  | export                                      | gltf                              | import           |                             |
|----------|---------------------------------------------|-----------------------------------|------------------|-----------------------------|
| ✅        | Standard(Included in Unity)                 | PBR                               | Standard         |                             |
| ❌v0.xx.0 | UniGLTF/StandardVColor                      |                                   |                  | UniUnlit has `VertexColor`  |
| ✅        | Unlit/Color(Included in Unity)              | KHR_materials_unlit               | UniGLTF/UniUnlit |                             |
| ✅        | Unlit/Texture(Included in Unity)            | KHR_materials_unlit               | UniGLTF/UniUnlit |                             |
| ✅        | Unlit/Transparent(Included in Unity)        | KHR_materials_unlit               | UniGLTF/UniUnlit |                             |
| ✅        | Unlit/Transparent Cutout(Included in Unity) | KHR_materials_unlit               | UniGLTF/UniUnlit |                             |
| ✅        | UniGLTF/UniUnlit(VRMShaders)                | KHR_materials_unlit               | UniGLTF/UniUnlit |                             |
| ❌v0.76.0 | VRM/UnlitTexture(UniVRM)                    | KHR_materials_unlit               | UniGLTF/UniUnlit | Please use UniUnlit         |
| ❌v0.76.0 | VRM/UnlitTransparent(UniVRM)                | KHR_materials_unlit               | UniGLTF/UniUnlit | Please use UniUnlit         |
| ❌v0.76.0 | VRM/UnlitCutout(UniVRM)                     | KHR_materials_unlit               | UniGLTF/UniUnlit | Please use UniUnlit         |
| ❌v0.76.0 | VRM/UnlitTransparentZWrite(UniVRM)          | no gltf representation            |                  | MToon has TransparentZWrite |
| ✅        | VRM/MToon                                   | extensions.VRM.materialProperties | VRM/MToon        |                             |
| 🚧       | VRM10/MToon10                               | VRMC_materials_mtoon              | VRM10/MToon10    |                             |
