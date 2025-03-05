# URP 対応について

| vrm material | urp-shader                                       | note          |
| ------------ | ------------------------------------------------ | ------------- |
| pbr          | `unity` Universal Render Pipeline/Lit            |               |
| Unlit        | `univrm` UniGLTF/UniUnlit                        |               |
| vrm-1.0      | `univrm` VRM10/Universal Render Pipeline/MToon10 | `from v0.112` |
| vrm-0.x      | ❌                                               | not supported |

## URP で vrm-0.x を描画したい

UniVRM は、vrm-0.x の urp shader を提供していません。

vrm-1.0 ローダーでvrm-0.x を変換ロードすることができます。
[UniVRM10_Vrm10](/api/runtime-import/UniVRM10_Vrm10)

:::warning
今後も VRM-0.x 版の URP MToon 提供の予定はありません。
:::

## 'Universal Render Pipeline/Lit' のビルド時間が長すぎる

:::warning `Universal Render Pipeline/Lit` は `Always Included Shaders` として使うことが想定されていない
https://discussions.unity.com/t/urp-lit-sample-is-missing-all-shaders-in-webgl-build/863894/6
:::

<GitHubIssue issue="2498" title="[urp][build] ビルドすると膨大な時間がかかるため削除" />

代替マテリアルを ShaderGraph で作成する例を作りました。

- [CustomMaterial の作り方](/api/material/make_custom_material/)
- [PBR詳細](/api/material/make_custom_material/custom_pbr/)

[VRM10Viewer](/api/sample/vrm10/VRM10Viewer/) に作例が含まれています。

:::note
後日、UniVRM 本体に正式版を含める予定ですが、当面 Sample の作成例となります。
:::

## WebGL で 'VRM10/Universal Render Pipeline/MToon10' のシェーディングが乱れる

:::warning
WebGL + URP 個有の問題で、他のビルドでは再現しません。
:::

<GitHubIssue issue="2548" title="Unity WebGLで動的にインポートしたvrmのShadeがおかしい" />

代替マテリアルを ShaderGraph で作成する例を作りました。

- [CustomMaterial の作り方](/api/material/make_custom_material/)
- [MToon 詳細](/api/material/make_custom_material/custom_mtoon/)

[VRM10Viewer](/api/sample/vrm10/VRM10Viewer/) に作例が含まれています。

:::note
ShaderGraph で MToon を再現することが難しい機能があります(Outlineなど)。
簡易な代替シェーダーとなります。
:::
