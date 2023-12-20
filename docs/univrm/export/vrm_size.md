---
date: 2020-08-13
weight: 3
tags: ["detail"]
aliases: []
---

# VRM file size

Since VRM is a GLB-based format.

`exported VRM file size => glb file size`

`glb => json + binary`

json is a text-based format. Generally it is less than 1MB.

`Image` and `Mesh` are two major parts in `binary`.

Here we show an example of how to calculate the size for a model with 50k

## Image

`Image` contains `Texture` (referenced by Material) and `Thumbnail` (in VRM Meta). Those images are stored as PNG(JPG) bytes.

> In v0.56, a large texture (e.g. 4096x4096) in the model fails to export as a smaller size texture (e.g. set to 1024x1024 by Texture Importer Settings -> MaxSize). We have fixed this issue in v0.58

https://github.com/vrm-c/UniVRM/issues/502

## Mesh

`Mesh` contains index buffer and vertex buffer.

### Index Buffer

Index buffer uses `Int` array.

To calculate the required size for a model with 50k triangles:

`50000 x 4(Int=4byte) x 3(three vertices in a triangle) => 0.6MB`

> It is possible to store index using `unsigned short` in GLTF. However, UniVRM does not support it due to the fact that the Max vertices number is 65536, which is unable to store 50k triangles or more in a model

### Vertex Buffer

The size for a vertex along with its attributes is: 

```
    float3 Position; // 頂点位置 4(float) x 3(xyz) => 12byte
    float3 Normal; // 頂点法線 4(float) x 3(xyz) => 12byte
    float2 TEXCOORD_0; // 頂点UV 4(float) x 2(xy) => 8byte
    short4 JOINTS_0; // 頂点BoneIndex 2(short) x 4(4bone) => 8byte
    float4 WEIGHTS_0; // 頂点Weight 4(float) x 4(4bone) => 16byte
}
```

> Some models contain Vertex Color or Secondary UV (not supported), so the required size may vary

> In UniVRM, Tangent(float4) can be calculated in Unity instead of being stored in GLTF. Given Vertex Normal and UV, Tangent can be obtained via `MIKK T Space` algorithm

The case for a model containing 50k vertices:

`50000 x (12 + 12 + 8 + 8 + 16) => 2.8MB`

## Basic Size

As described above, the basic size for a model is `Total Image Size + Index Buffer + Vertex Buffer`.The basic size for a model with 50k vertices and 50k triangles is `3.4MB + Total Image Size`.Next, we will introduce size calculation for BlendShape, which may cause total size explosion in some circumstances.

## BlendShape (MorphTarget) Size

```
// MorphTarget vertices
{
    float3 Position; // Position 4 x 3 => 12byte. required
    float3 Normal; // Normal 4 x 3 => 12byte. optional
    float3 Tangent; // Tangent 4 x 3 => 12byte. not export
}
```
If 1 BlendShape is added, the size will be: 

`50000 x (12 + 12) => 1.2MB`

If 20 BlendShapes are added, the size will be: 

`50000 x (12 + 12) x 20 => 24MB`

If 60 BlendShapes are added, the size will be: 

`50000 x (12 + 12) x 60 => 72MB`...

We can infer that if the number of BlendShapes are scaled to the hundreds, the size will become incredibly big. Moreover, most of the models do not actually use BlendShape on every single vertex. Reserving the space for BlendShape data for each vertex results in huge size.
To resolve this issue, below we provide several methods that may help shrink the total size.

### Options for BlendShape Size Reduction

In [Export Dialog](/univrm/export/univrm_export), there are several options related to BlendShape size optimization.

#### Export Option

To reduce BlendShape size, the first two, `ReduceBlendshape` and `ReduceBlendshapeClip`, are the safest ways (no errors). We are working on `UseSparseAccessor` to resolve the importing issue for some of the VRM loaders (UniVRM loader is fine). `OnlyBlendshapePosition` has importing errors if the model is made by UniVRM-0.53 or earlier versions.

##### ReduceBlendshape

BlendShapes that are not referenced by BlendShapeClips will not be exported. The file size can be reduced.

##### ReduceBlendshapeClip

BlendShapeClip belonging to Preset.Unknown will not be exported. Used in combination with ReduceBlendshape.

##### UseSparseAccessor

Uses Sparse Accessor feature in GLTF: only records BlendShape vertices with non-zero value.

If the model contains multiple BlendShapes, enabling this can help reduce the file size.

> WIP: fix importing error if the model has Sparse Accessor in GLTF (UniVRM is fine)

```
// MorphTarget vertices
{

    int Index; // MorphTarget indices => 4
    float3 Position; // Position 4 x 3 => 12byte. required
    float3 Normal; // Normal 4 x 3 => 12byte. option
    float3 Tangent; // Tangent 4 x 3 => 12byte. not exported
}
```

`The number of valid BlendShape vertices x (12 + 12 + 4) => ?MB`

##### OnlyBlendshapePosition

BlendShape’s Normal and Tangent will not be exported if this option is selected. 

> The file size can be reduced. Be aware that errors may occur during import if the export target is made by UniVRM-0.53 or earlier versions.

#### MeshUtility: Split Mesh with/without BlendShape

For instance, a model's mesh contains 50k vertices. It has 10k (with BlendShape) on face and 40k (without BlendShape) on body.

Setting up one BlendShape only needs: `10000 x (12 + 12) => 0.24MB`

Setting up one BlendShape needs:

`50000 x (12 + 12) => 1.2MB` 

> The runtime performance will benefit to this mesh splitting as well. The trade-off is that Draw call is likely increasing since the number of rendering meshes increases

[Mesh Utility](/gltf/mesh_utility)

## Summary

If you got a gigantic size of VRM model from export, check out the model's BlendShape and texture images first.

