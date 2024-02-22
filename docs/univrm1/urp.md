# URP 対応状況

UniGLTF(vrm-0.x と vrm-1.0 を含む)は、
runtime import 時に material をカスタム版に差し替えることができます。
この機能を使用して material を URP 版に差し替えることができます。

:::warning editor 対応
glb と vrm-1.0 inspector から URP Material への差し替えができます。
ただし、export はできません。
VRM セットアップには、builtin material をご利用ください。
:::

| glTF                 | built-in           | URP 版の差し替え                          |
| -------------------- | ------------------ | ----------------------------------------- |
| PBR                  | `Standard`         | `Universal Render Pipeline/Lit`           |
| KHR_materials_unlit  | `UniGLTF/UniUnlit` | `UniGLTF/UniUnlit`                        |
| VRMC_vrm             | `UniGLTF/UniUnlit` | `UniGLTF/UniUnlit`                        |
| VRMC_materials_mtoon | `VRM10/MToon10`    | `VRM10/Universal Render Pipeline/MToon10` |

:::warning VRM-0.x MToon の URP 対応はありません
unlit に fallback します。
import 時に VRM-1.0 にマイグレートすることで、MToon-1.0 の URP 版を使うことを検討してください。
:::
