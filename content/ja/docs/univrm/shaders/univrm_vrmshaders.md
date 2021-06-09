---
title: "VRMShadersパッケージ"
date: 2020-07-29
weight: 8
tags: ["unity"]
aliases: ["/univrm/shaders/univrm_vrmshaders/", "/univrm/shaders/univrm_export_import"]
---

`UniVRM-0.56` からフォルダ構成を変更して、
`UniVRM` のマテリアル関連の機能は、 `Assets/VRMShaders` に移動しました。
`VRMShaders` 単体で独立したパッケージとして使用することができます。

## サポートしている Unity の Shader と glTF マテリアル の対応関係

vrm は、

* `PBR(gltfデフォルト)`
* `unlit(KHR_materials_unlit extensions)` https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
* `MToon` 

の３種類をサポートしています。
`v0.44` から、`PBR`, `unlit` に関しては glTF として記録するようになった。( `VRM_USE_GLTFSHADER` 導入 )

これらを unity に import すると、unity の 

* `Standard`
* `UniGLTF/UniUnlit` [unlit]({{< relref "univrm_unlit.md" >}})
* `VRM/MToon` [mtoon]({{< relref "shader_mtoon.md" >}})

シェーダーになります。
エクスポートするときは、その他の `unlit` 系の shader にも対応しています。
また、過去のバージョンに含まれていた `shader` についてもここに記述します。

| Shader                              | glTF export                       | import           | comment                                                                                            |
|-------------------------------------|-----------------------------------|------------------|----------------------------------------------------------------------------------------------------|
| Standard(Unity標準)                 | PBR                               | Standard         |                                                                                                    |
| UniGLTF/StandardVColor              |                                   |                  | v0.xx.0 で削除されます。UniUnlitで代用を検討してください                                           |
| Unlit/Color(Unity標準)              | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| Unlit/Texture(Unity標準)            | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| Unlit/Transparent(Unity標準)        | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| Unlit/Transparent Cutout(Unity標準) | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| UniGLTF/UniUnlit(VRMShaders)        | KHR_materials_unlit               | UniGLTF/UniUnlit |                                                                                                    |
| VRM/UnlitTexture(UniVRM)            | KHR_materials_unlit               | UniGLTF/UniUnlit | v0.76.0 で削除されます。UniUnlitをご利用ください                                                   |
| VRM/UnlitTransparent(UniVRM)        | KHR_materials_unlit               | UniGLTF/UniUnlit | v0.76.0 で削除されます。UniUnlitをご利用ください                                                   |
| VRM/UnlitCutout(UniVRM)             | KHR_materials_unlit               | UniGLTF/UniUnlit | v0.76.0 で削除されます。UniUnlitをご利用ください                                                   |
| VRM/UnlitTransparentZWrite(UniVRM)  | gltf表現が無い                    |                  | v0.76.0 で削除されます。MToonをご利用ください。0.44以前は、Unityのすべてのシェーダーをダンプしてた |
| VRM/MToon                           | extensions.VRM.materialProperties | VRM/MToon        |                                                                                                    |
|                                     | VRMC_materials_mtoon              |                  | 1.0版のMToon。開発中。ちょっと変わる                                                               |

## Unity と glTF の互換性
### 頂点色

* Unity Standard は、頂点カラーをサポートしていません。VRMShaders の UniUnlit は頂点カラーをサポートしています。

### マルチUV

* glTF は任意のテクスチャが、複数のuvを使い分けることができる。Standard, UniUnlit, MToon ではできない。

## UPM パッケージ

```json
// manifest.json 抜粋
{
  "dependencies": {
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.76.0",
  }
}
```
