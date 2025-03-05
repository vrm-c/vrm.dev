import sg from './pbr_shadergraph.svg'
import sg_basecolor from './pbr_shadergraph_basecolor.svg'
import sg_cutoff from './pbr_shadergraph_cutoff.svg'
import sg_blend from './pbr_shadergraph_alphablend.svg'
import sg_metallic_roughness_occlusion from './pbr_shadergraph_metallic_roughness_occlusion.svg'
import sg_normal from './pbr_shadergraph_normal.svg'
import sg_emission from './pbr_shadergraph_emission.svg'

# TinyPBR 詳細

`glTF の PBR` と `Unity ShaderGraph の Lit` は機能がだいたい同じです。
おおむねプロパティを連結するだけです。
URP の Lit をベースに ShaderGraph を作成してください。

:::note
下の画像は、SubGraph になっています。
`AlphaBlend` と `Opaque | Cutoff` の2バージョンのための共通部品です。
`AlphaBlending | Cutoff` については、後述します。
:::

<img src={sg} />

:::note glTF material
https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#materials
:::

## BaseColor

```js title="glTF"
{
    "materials": [
        {
            "pbrMetallicRoughness": {
                "baseColorFactor": [ 1.000, 0.766, 0.336, 1.0 ],
                "baseColorTexture": {
                    "index": 0,
                    "texCoord": 1
                },
            }
        }
    ]
}
```

<img src={sg_basecolor} />

glTF の baseColorFactor と baseColorTexture を、
ShaderGraph の BaseColor と BaseMap に入力します。

```cs title="TinyPbrMaterialImporter.ImportBaseColorAsync"
        public static async Task ImportBaseColorAsync(GltfData data, glTFMaterial src, TinyPbrMaterialContext context, GetTextureAsyncFunc getTextureAsync, IAwaitCaller awaitCaller)
        {
            var baseColorFactor = GltfMaterialImportUtils.ImportLinearBaseColorFactor(data, src);
            if (baseColorFactor.HasValue)
            {
                context.BaseColorSrgb = baseColorFactor.Value.gamma;
            }

            if (src is { pbrMetallicRoughness: { baseColorTexture: { index: >= 0 } } })
            {
                if (GltfPbrTextureImporter.TryBaseColorTexture(data, src, out _, out var desc))
                {
                    context.BaseTexture = await getTextureAsync(desc, awaitCaller);
                    context.BaseTextureOffset = desc.Offset;
                    context.BaseTextureScale = desc.Scale;
                }
            }
        }
```

### AlphaBlending | Cutoff

glTF では alpha 値に対する挙動が3つあります。

:::note
MASK は, Unity では cuttoff と呼ばれます。
:::

```json title="https://github.com/KhronosGroup/glTF/blob/main/specification/2.0/schema/material.schema.json"
"alphaMode": {
    "default": "OPAQUE",
    "description": "The alpha rendering mode of the material.",
    "gltf_detailedDescription": "The material's alpha rendering mode enumeration specifying the interpretation of the alpha value of the base color.",
    "anyOf": [
        {
            "const": "OPAQUE",
            "description": "The alpha value is ignored, and the rendered output is fully opaque."
        },
        {
            "const": "MASK",
            "description": "The rendered output is either fully opaque or fully transparent depending on the alpha value and the specified `alphaCutoff` value; the exact appearance of the edges **MAY** be subject to implementation-specific techniques such as \"`Alpha-to-Coverage`\"."
        },
        {
            "const": "BLEND",
            "description": "The alpha value is used to composite the source and destination areas. The rendered output is combined with the background using the normal painting operation (i.e. the Porter and Duff over operator)."
        },
        {
            "type": "string"
        }
    ],
    "alphaCutoff": {
        "type": "number",
        "minimum": 0.0,
        "default": 0.5,
        "description": "The alpha cutoff value of the material.",
        "gltf_detailedDescription": "Specifies the cutoff threshold when in `MASK` alpha mode. If the alpha value is greater than or equal to this value then it is rendered as fully opaque, otherwise, it is rendered as fully transparent. A value greater than `1.0` will render the entire material as fully transparent. This value **MUST** be ignored for other alpha modes. When `alphaMode` is not defined, this value **MUST NOT** be defined."
    },
},
```

ShaderGraph の設定を変更することで、AlphaBlending を有功にします。
そのため `OPAQUE | MASK` と `BLEND` の2つのバージョンの ShaderGraph を作成します。
共通の部分は `SubGraph` とします。

#### OPAQUE | MASK

BaseColor で得た alpha 値が alphaCutoff 値より小さっかた場合に fragment を破毀します。
OPAQUE のときは、alphaCutoff が 0 であるとみなします。

<img src={sg_cutoff} />

#### BLEND

<img src={sg_blend} />

## Metallic | Roughness | Occulusion

Metallic | Roughness | Occulusion はそれぞれ float で 0-1 値をとります。
テクスチャーを使うことができて、それぞれ blue | green | red を使うことになっています。
3つを1つのテクスチャーにまとめることができます。
OcculusionTexture だけ別のファイルに分けることが可能です。

:::note glTFの roughness は、unity の smooth に対応します。

`smooth=1 - roughness` です。

:::

```js title="glTF"
{
    "materials": [
        {
            "name": "gold",
            "pbrMetallicRoughness": {
                "baseColorFactor": [ 1.000, 0.766, 0.336, 1.0 ],
                "baseColorTexture": {
                    "index": 1,
                    "texCoord": 1
                },
                "metallicFactor": 1.0,
                "roughnessFactor": 0.0
                "metallicRoughnessTexture": {
                    "index": 2,
                    "texCoord": 1
                }
            },
        }
    ]
}
```

<img src={sg_metallic_roughness_occlusion} />

## Normal

<img src={sg_normal} />

## Emission

<img src={sg_emission} />

KHR_materials_emissive_strength

## VertexColor

TODO:

## DoubleSided

TODO:
