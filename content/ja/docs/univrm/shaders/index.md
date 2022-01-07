---
date: 2018-04-16T16:30:00+09:00
weight: 15
aliases: ["/univrm/shaders/univrm_shaders/"]
---

# Material

VRM のサポートしているマテリアル(シェーダー)は ３種類 で、
`unlit`, `standard`, `MToon` です。

UniGLTF では `unlit`, `standard` の２種類をサポートしています。

## export / import の対応表

| support  | export                              | gltf                              | import           |                                    |
|----------|-------------------------------------|-----------------------------------|------------------|------------------------------------|
| ✅        | Standard(Unity標準)                 | PBR                               | Standard         |                                    |
| ❌v0.xx.0 | UniGLTF/StandardVColor              |                                   |                  | UniUnlitに頂点カラーがあります     |
| ✅        | Unlit/Color(Unity標準)              | KHR_materials_unlit               | UniGLTF/UniUnlit |                                    |
| ✅        | Unlit/Texture(Unity標準)            | KHR_materials_unlit               | UniGLTF/UniUnlit |                                    |
| ✅        | Unlit/Transparent(Unity標準)        | KHR_materials_unlit               | UniGLTF/UniUnlit |                                    |
| ✅        | Unlit/Transparent Cutout(Unity標準) | KHR_materials_unlit               | UniGLTF/UniUnlit |                                    |
| ✅        | UniGLTF/UniUnlit(VRMShaders)        | KHR_materials_unlit               | UniGLTF/UniUnlit |                                    |
| ❌v0.76.0 | VRM/UnlitTexture(UniVRM)            | KHR_materials_unlit               | UniGLTF/UniUnlit | UniUnlitをご利用ください           |
| ❌v0.76.0 | VRM/UnlitTransparent(UniVRM)        | KHR_materials_unlit               | UniGLTF/UniUnlit | UniUnlitをご利用ください           |
| ❌v0.76.0 | VRM/UnlitCutout(UniVRM)             | KHR_materials_unlit               | UniGLTF/UniUnlit | UniUnlitをご利用ください           |
| ❌v0.76.0 | VRM/UnlitTransparentZWrite(UniVRM)  | gltf表現が無い                    |                  | MToonにTransparentZWriteがあります |
| ✅        | VRM/MToon                           | extensions.VRM.materialProperties | VRM/MToon        |                                    |
| 🚧       | VRM10/MToon10                       | VRMC_materials_mtoon              | VRM10/MToon10    |                                    |

```{toctree}
:maxdepth: 1
univrm_unlit
univrm_standard
shader_mtoon
```
