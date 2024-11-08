# Material

Import 時に Project のレンダリングパイプラインに応じて、使用される `Shader` がスイッチします。

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

:::warning VRM-0.x 版 MToon の URP 対応はありません
unlit に fallback します。
Import 時に VRM-1.0 にマイグレートすることで、MToon-1.0 の URP 版を使うことを検討してください。
:::

### URP Export

| glTF extensions      | IMaterialExporter             | note            |
| -------------------- | ----------------------------- | --------------- |
| (glTF default)       | UrpGltfMaterialExporter       | `v0.125.0`      |
| KHR_materials_unlit  | UrpGltfMaterialExporter       | `v0.125.0`      |
| VRMC_materials_mtoon | UrpVrm10MToonMaterialExporter | `v0.128.0`      |
| VRM                  |                               | `not supported` |
