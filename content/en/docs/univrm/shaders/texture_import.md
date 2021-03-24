---
title: "Texture Import"
date: 2021-03-17T11:10:12+09:00
---

## Texture Conversion for Unity's Standard Shader

The table below is the RGB channel conversion between glTF's material (PBR) and Unity Standard Shader:

| Texture Type | glTF                                                                   | Unity                                  |
|:-------------|:-----------------------------------------------------------------------|:---------------------------------------|
| Occlusion    | materials[*].occlusionTexture's R channel                              | Standard._MetallicGlossMap.G channel   |
| Roughness    | materials[*].pbrMetallicRoughness.metallicRoughnessTexture's G channel | Standard._MetallicGlossMap.A channel (smoothness = 1 - roughness) [^bug] |
| Metallic     | materials[*].pbrMetallicRoughness.metallicRoughnessTexture's B channel | Standard._OcclusionMap.R channel       |

UniGLTF will perform the RGB channel conversion when textures are imported into Unity.

[^bug]: Fixed roughness conversion in `v0.69.0` [#388](https://github.com/vrm-c/UniVRM/issues/388)

### Texture Import Behaviors

Starting with `v0.69.0`, Metallic, Smooth and Occlusion textures are integrated into one:

* import: glTF's metallicRoughnessTexture and occlusionTexture are integrated into one (as seen in the table above)
* export: Standard's _MetallicGlossMap and _OcclusionMap are integrated into one (as seen in the table above)

Before `v0.69.0`:

* import: convert and import textures to be used for _MetallicGlossMap and _OcclusionMap
* export: convert and export Standard's _MetallicGlossMap and _OcclusionMap

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

### `MetallicRoughness` Texture

* glTF's Metallic => Blue
* glTF's Roughness => Green

https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/material.pbrMetallicRoughness.schema.json#L45

> The metalness values are sampled from the B channel. The roughness values are sampled from the G channel.

In Unity,

* Unity's Standard(Metallic Alpha) Metallic => Alpha
* Unity's Standard(Metallic Alpha) Smooth => Red

which are assigned to different channels as compared to gltf spec.
For `UniGLTF`, it will load `png/jpg` images first, and then create converted textures to be used in Unity's Standard Shader.

## Unity's Linear Texture Behaviors

### Runtime

Initialize a new texture as linear:

```cs
var texture = new Texture2D(width, height, format, mipChain, linear = true);
```

### Asset

If textures are loaded from AssetFolder's png/jpg:

```cs
var textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
textureImporter.sRGBTexture = false; // Linear
textureImporter.SaveAndReimport();

// loaded as linear texture
var texture =AssetDatabase.LoadAssetAtPath<Texture2D>(assetPath);
```

## Unity's NormalMap Behaviors

> Same as MToon's NormalMap

### Runtime

Initialize a new texture for NormalMap: 

```cs
var texture = new Texture2D(width, height, format, mipChain, linear = true);
```

Since the normal texture needs to be converted to `DXT5nm` format, we do the conversion described below:

```hlsl
half4 normal;
normal.x = 1.0;
normal.y = col.y;
normal.z = 1.0;
normal.w = col.x;
```

### Asset

If textures are loaded from AssetFolder's png/jpg:

```cs
var textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
textureImporter.textureType = TextureImporterType.NormalMap; // normalMap
textureImporter.SaveAndReimport();

// loaded as DXT5nm format
var texture =AssetDatabase.LoadAssetAtPath<Texture2D>(assetPath);
```
