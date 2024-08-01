# URP 対応状況

## Built-in と URP の shader 対応

:::tip editor
glb と vrm-1.0 は、inspector から URP Material への差し替えができます。
:::

| glTF extensions      | built-in           | URP                                       | 備考                                     |
| -------------------- | ------------------ | ----------------------------------------- | ---------------------------------------- |
| VRMC_materials_mtoon | `VRM10/MToon10`    | `VRM10/Universal Render Pipeline/MToon10` |                                          |
| KHR_materials_unlit  | `UniGLTF/UniUnlit` | `UniGLTF/UniUnlit`                        | URP shader and Built-in shader is same.  |
|                      | `Standard`         | `Universal Render Pipeline/Lit`           |                                          |
| VRM                  | `UniGLTF/UniUnlit` | `UniGLTF/UniUnlit`                        | URP is not supported. fallback to unlit. |

:::warning VRM-0.x 版 MToon の URP 対応はありません
unlit に fallback します。
import 時に VRM-1.0 にマイグレートすることで、MToon-1.0 の URP 版を使うことを検討してください。
:::

## Export

URP shader からエクスポートする経路が未実装です。

## RuntimeImport

`IMaterialDescriptorGenerator` 引数により生成する Material を Built-in / URP でスイッチできます。
