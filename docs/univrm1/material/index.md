# Material

The Shader used will be switched depending on the Project's rendering pipeline during import.

## built-in

| glTF extensions      | unity shader       | note                                    |
| -------------------- | ------------------ | --------------------------------------- |
| (glTF default)       | `Standard`         | PBR                                     |
| KHR_materials_unlit  | `UniGLTF/UniUnlit` | URP shader and Built-in shader is same. |
| VRMC_materials_mtoon | `VRM10/MToon10`    |                                         |
| VRM(vrm-0.x)         | `UniGLTF/UniUnlit` | `not supported`. fallback to unlit.     |

## URP

| glTF extensions      | URP                                       | note                                    |
| -------------------- | ----------------------------------------- | --------------------------------------- |
| (PBR)                | `Universal Render Pipeline/Lit`           |                                         |
| KHR_materials_unlit  | `UniGLTF/UniUnlit`                        | URP shader and Built-in shader is same. |
| VRMC_materials_mtoon | `VRM10/Universal Render Pipeline/MToon10` |                                         |
| VRM(vrm-0.x)         | `UniGLTF/UniUnlit`                        | `not supported`. fallback to unlit.     |

### URP Import

| glTF extensions      | IMaterialDescriptorGenerator        | note                                                                |
| -------------------- | ----------------------------------- | ------------------------------------------------------------------- |
| (glTF default)       | UrpGltfMaterialDescriptorGenerator  |                                                                     |
| KHR_materials_unlit  | UrpGltfMaterialDescriptorGenerator  |                                                                     |
| VRMC_materials_mtoon | UrpVrm10MaterialDescriptorGenerator |                                                                     |
| VRM(vrm-0.x)         | UrpVrmMaterialDescriptorGenerator   | `not supported`. [#2375](https://github.com/vrm-c/UniVRM/pull/2375) |

:::warning VRM-0.x version of MToon does not support URP.
Fallback to unlit.
Please consider using the URP version of MToon-1.0 by migrating to VRM-1.0 during import.
:::

### URP Export

| glTF extensions      | IMaterialExporter       | note            |
| -------------------- | ----------------------- | --------------- |
| (glTF default)       | UrpGltfMaterialExporter | `v0.125.0`      |
| KHR_materials_unlit  | UrpGltfMaterialExporter | `v0.125.0`      |
| VRMC_materials_mtoon |                         | `TODO`          |
| VRM                  |                         | `not supported` |

:::warning MToon-1.0's urp export is not implemented

Please use the built-in project for export.

:::
