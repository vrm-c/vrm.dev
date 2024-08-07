# URP 対応状況

## URP版 shader の実装状況

| glTF extensions      | built-in           | URP                                       | 備考                                     |
| -------------------- | ------------------ | ----------------------------------------- | ---------------------------------------- |
| (PBR)                | `Standard`         | `Universal Render Pipeline/Lit`           |                                          |
| KHR_materials_unlit  | `UniGLTF/UniUnlit` | `UniGLTF/UniUnlit`                        | URP shader and Built-in shader is same.  |
| VRMC_materials_mtoon | `VRM10/MToon10`    | `VRM10/Universal Render Pipeline/MToon10` |                                          |
| VRM                  | `UniGLTF/UniUnlit` | `UniGLTF/UniUnlit`                        | URP is not supported. fallback to unlit. |

:::tip editor
glb と vrm-1.0 は、inspector から URP Material への差し替えができます。
:::

:::warning VRM-0.x 版 MToon の URP 対応はありません
unlit に fallback します。
import 時に VRM-1.0 にマイグレートすることで、MToon-1.0 の URP 版を使うことを検討してください。
:::

## URP Import

| glTF extensions      | IMaterialDescriptorGenerator        | 備考                        |
| -------------------- | ----------------------------------- | --------------------------- |
| (PBR)                | UrpGltfMaterialDescriptorGenerator  |                             |
| KHR_materials_unlit  | UrpGltfMaterialDescriptorGenerator  |                             |
| VRMC_materials_mtoon | UrpVrm10MaterialDescriptorGenerator |                             |
| VRM                  | UrpVrmMaterialDescriptorGenerator   | URP版 VRM0.X MToon が未実装 |

### RuntimeImport

`IMaterialDescriptorGenerator` 引数により生成する Material を Built-in / URP でスイッチできます。

## URP Export

WIP

| glTF extensions      | IMaterialExporter       | 備考       |
| -------------------- | ----------------------- | ---------- |
| (PBR)                | UrpGltfMaterialExporter | `v0.125.0` |
| KHR_materials_unlit  | UrpGltfMaterialExporter | `v0.125.0` |
| VRMC_materials_mtoon |                         | 未実装     |
| VRM                  |                         | 未実装     |
