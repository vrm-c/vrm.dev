---
title: "テクスチャーのインポート"
---

## Unity Standardシェーダー向け のテクスチャ変換

glTF の material(Physically Based Rendering) と Unity の Standard は、 
`MetallicRoughness` テクスチャーと `Occlusion` テクスチャーの RGB チャンネルの使い方が違います。

| 用途      | glTF                                                                    | Unity                                  |
|:----------|:------------------------------------------------------------------------|:---------------------------------------|
| Occlusion | materials[*].occlusionTexture の R channel                              | G channel                              |
| Roughness | materials[*].pbrMetallicRoughness.metallicRoughnessTexture の G channel | A channel (smoothness = 1 - roughness) |
| Metallic  | materials[*].pbrMetallicRoughness.metallicRoughnessTexture の B channel | R channel                              |

`UniGLTF` では、import 時に変換しています。

### glTF

* https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#materialocclusiontexture

> The occlusion values are sampled from the R channel

* https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#pbrmetallicroughnessmetallicroughnesstexture

> The metalness values are sampled from the B channel. The roughness values are sampled from the G channel

### Unity

* https://docs.unity3d.com/Manual/StandardShaderMaterialParameterMetallic.html

> the Metallic levels for the material are controlled by the values in the Red channel of the texture
> the Smoothness levels for the material are controlled by the Alpha channel of the texture

* https://docs.unity3d.com/Manual/StandardShaderMaterialParameterOcclusionMap.html

G channel を使うというドキュメントを探しています。

### `MetallicRoughness` テクスチャー

* glTF の Metallic => Blue
* glTF の Roughness => Green

https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/material.pbrMetallicRoughness.schema.json#L45

> The metalness values are sampled from the B channel. The roughness values are sampled from the G channel.

* Unity の Standard(Metallic Alpha) の Metallic => Alpha
* Unity の Standard(Metallic Alpha) の Smooth => Red

となっており RGBA の割り当てと `Roughness`, `Smoothness` の持ち方が異なります。
UniGLTF ではまず `png/jpg` をロードして、それを元に変換テクスチャを作成します。

### `Occlusion` テクスチャー


## Unity の linear の テクスチャーの挙動について

### Runtime

new する場合は、 

```cs
var texture = new Texture2D(width, height, format, mipChain, linear = true);
```

とする。

### Asset

AssetFolder の png/jpg からloadする場合は、
ロードする前に設定が必用。

```cs
var textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
textureImporter.sRGBTexture = false; // Linear
textureImporter.SaveAndReimport();

// linear でロードされます
var texture =AssetDatabase.LoadAssetAtPath<Texture2D>(assetPath);
```

## Unity の NormalMap の挙動について

> MToon の NormalMap も同じです

### Runtime

new する場合は、 

```cs
var texture = new Texture2D(width, height, format, mipChain, linear = true);
```

とする。
また、 `DXT5nm` という仕様で格納する必要があるので変換します。
y と w の２要素だけを使います。

```hlsl
half4 normal;
normal.x = 1.0;
normal.y = col.y;
normal.z = 1.0;
normal.w = col.x;
```

### Asset

AssetFolder の png/jpg からloadする場合は、
ロードする前に設定が必用。

```cs
var textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
textureImporter.textureType = TextureImporterType.NormalMap; // normalMap
textureImporter.SaveAndReimport();

// DXT5nm でロードされます。
var texture =AssetDatabase.LoadAssetAtPath<Texture2D>(assetPath);
```
