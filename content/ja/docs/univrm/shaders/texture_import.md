---
title: "テクスチャーのインポート"
---

## テクスチャの変換

glTF の PBR material と Unity の Standard は、 
`MetallicRoughness` テクスチャーと `Occlusion` テクスチャーの RGB チャンネルの使い方が違います。
`UniGLTF` では、import 時に変換しています。

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
