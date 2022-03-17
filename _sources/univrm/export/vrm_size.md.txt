---
date: 2020-08-13
weight: 3
tags: ["detail"]
aliases: []
---

# VRMモデルのファイルサイズ

VRMは、GLB形式なので、

`VRMエクスポートしたファイルのサイズ => glb のサイズ`

`glb => json + binary`

です。

json はテキストなので通常は 1MB にもなりません。

binary で主なものは、

`image` と `mesh` です。

5万頂点、5万三角形のモデルを例としてどれくらいの容量になるかを計算する目安を説明します。

## Image

Material が参照する Texture の PNG(JPG) のバイト列がそのまま入っています。
Meta の Thumbnail も対象になります。

> v0.56 でローカルの元ファイルをそのまま使うようにした結果、
元ファイルが巨大であった場合に、以前に比べて大きくなる問題が発生しています。4000x4000のような大きなファイルはPNG(JPG)を縮小してください。v0.58 修正予定。

https://github.com/vrm-c/UniVRM/issues/502

## Mesh

Index バッファ と 頂点バッファです。

### Indexバッファ

Indexバッファは、Intの配列を使っています。

5万三角形のモデルの場合、

`50000 x 4(Int=4byte) x 3(三角形の3頂点) => 0.6MB` の容量を使います。

> GLTFの仕様的には unsigned short も可能ですが、UniVRM のエクスポーターは未対応。65536 頂点までなので 50000 三角形は格納できません。

### 頂点バッファ

一頂点は、

```
{
    float3 Position; // 頂点位置 4(floatサイズ) x 3(xyz) => 12byte
    float3 Normal; // 頂点法線 4(floatサイズ) x 3(xyz) => 12byte
    float2 TEXCOORD_0; // 頂点UV 4(floatサイズ) x 2(xy) => 8byte
    short4 JOINTS_0; // 頂点BoneIndex 2(shortサイズ) x 4(4boneまで) => 8byte
    float4 WEIGHTS_0; // 頂点Weight 4(floatサイズ) x 4(4boneまで) => 16byte
}
```

となっています。

> 頂点カラー、2つめのUV(未対応)などバリエーションがありうる。

> GLTFにはTangent(float4)も保存できますが、UniVRMでは保存せずUnityに計算させています。法線とUVから `MIKK T Space` アルゴリズムで計算したものを使う仕様です。

５万頂点のモデルの場合、

`50000 x (12 + 12 + 8 + 8 + 16) => 2.8MB` の容量を使います。

## 基本容量

以上、 `画像サイズ合計 + インデックスバッファ + 頂点バッファ` の合計がモデルの基本容量になります。
5万頂点、5万三角形のモデルの場合、 `3.4MB + 画像サイズ合計` が基本容量になります。
基本容量は計算通りの値になります。
以降、時として容量爆発の原因となるブレンドシェイプの容量についてです。

## ブレンドシェイプ(MorphTarget)の容量

```
// ブレンドシェイプ頂点
{
    float3 Position; // 頂点位置 4 x 3 => 12byte. 必須
    float3 Normal; // 頂点法線 4 x 3 => 12byte. オプション
    float3 Tangent; // 頂点Tangent 4 x 3 => 12byte. 記録しない
}
```

ひとつのブレンドシェイプで `50000 x (12 + 12) => 1.2MB` の容量を使います。

20のブレンドシェイプがあったとすると,
`50000 x (12 + 12) x 20 => 24MB` の容量を使います。

60のブレンドシェイプがあると、
`50000 x (12 + 12) x 60 => 72MB` の容量を使います。

* 大量のBlendShapeがある
* BlendShapeのある場所と無い場所が分割されていない

の条件が揃うと大容量になることに注意してください。
以降、ブレンドシェイプ容量の削減方法についてです。

### ブレンドシェイプの容量対策

[エクスポートダイアログ](/univrm/export/univrm_export)
の以下のオプションがブレンドシェイプの容量に関連します。

#### エクスポートオプション

最初の２つは安全にです。３つめは修正中。4つめは、UniVRM-0.53(含む)以前でロードエラーになるバージョン問題があります。

##### ReduceBlendshape
BlendShapeClip設定から参照されないBlendShapeをエクスポートしない。
ファイルサイズを削減できます。

##### ReduceBlendshapeClip
Presetが Unknown であるBlendShapeClipをエクスポートしない。
ReduceBlendshapeと組み合わせて使います。

##### UseSparseAccessor
BlendShapeが多数ある場合にファイルサイズを削減できます。

ブレンドシェイプの値が、 `0` でない頂点のみを飛び飛びに記録することで容量を削減する GLTF の仕様です。

> 修正中: GLTFの互換性の問題があって、UniVRM以外のローダーでエラーになる

```
// ブレンドシェイプ頂点
{
    int Index; // 有効なブレンドシェイプの index => 4
    float3 Position; // 頂点位置 4 x 3 => 12byte. 必須
    float3 Normal; // 頂点法線 4 x 3 => 12byte. オプション
    float3 Tangent; // 頂点Tangent 4 x 3 => 12byte. 記録しない
}
```

`BlendShapeの有効な頂点数 x (12 + 12 + 4) => ?MB`

* 保存方法だけ変わる

##### OnlyBlendshapePosition
BlendShapeのNormal, Tangent をエクスポートしない。
ファイルサイズを削減できます。

> UniVRM-0.53 より前のバージョンはインポート時にエラーになるのに注意してください。

#### MeshUtility で BlendShape の あるMesh と ないMesh に分割する

例えば、顔(BlendShapeあり)が 10000 頂点、体(BlendShapeなし)が 40000 頂点に分割されていると、

ひとつのブレンドシェイプで `10000 x (12 + 12) => 0.24MB` の容量を使います。

分割前の一体型のモデル

`50000 x (12 + 12) => 1.2MB` 

に比べて容量を節約できます。

> ランタイムにも良い可能性があるが、ドローコールは増えるかもしれないのでトレードオフがある

[Mesh Utility](/gltf/mesh_utility)

## まとめ

予想より大容量になってしまうときはブレンドシェイプ、次に画像に注意してください。
