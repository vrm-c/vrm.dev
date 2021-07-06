---
title: "VRM-1.0について"
weight: 2
menu:
  main:
    weight: 2
---

VRM-1.0 は VRMの正式版です。

## VRM-0.X からの変更点

* VRM0 z- forward => z+ forward
* VRM0 shared bufferView => divided bufferView
* VRM0 meta => VRMC_vrm meta
* VRM0 humanoid => VRMC_vrm humanoid
* VRM0 blendshape => VRMC_vrm expression
* VRM0 lookat => VRMC_vrm lookat
* VRM0 firstperson => VRMC_vrm firstperson
* VRM0 springBone => VRMC_springBone
* `新規` => VRMC_materials_hdr_emissiveMultiplier
* VRM0 mtoon => VRMC_materials_mtoon
* `新規` => VRMC_node_constraint

## z+ forward

モデルは Z+ 方向が前方になるように格納します

## divided vertex buffer

### shared bufferView

* glTF2 的には合法なのだけど、特別な解釈をしないとメモリ使用量が爆発するのでとりやめ

### divided bufferView

* Export時に頂点の増減、並び順の変化がありえる
* morphTarget の扱いが煩雑
* 通常のゲームエンジン(Unityなど)のメモリレイアウトに近いので変換が不要

## VRMC_vrm: meta

## VRMC_vrm: humanoid

内容に変更はない？
必須ボーンについて確認せよ

## VRMC_vrm: expression

* BlendShape を Expression に改名しました。
* 喜怒哀楽 が 喜怒哀楽驚になり、一部の名称が変更になった。
* Override設定の追加
* MaterialColorBind と TextureTransformBind の整理

## VRMC_vrm: lookat

特に変更無し

## VRMC_vrm: firstperson

特に変更無し

## VRMC_springBone

拡張を分離。

* CapsuleColliderを追加
* 房ごとではなく、節ごとに設定できるように変更
* 末端の仕様を変更

## VRMC_materials_hdr_emissiveMultiplier

glTF では emissiveFactor(float3) の値域が [0.0, 1.0] です。
これに係数を追加することで、1.0 を越える値を表せるようにします。
gltf-2.0 の標準マテリアル(PBR), VRMC_materials_mtoon から利用します。

## VRMC_materials_mtoon

諸々

## VRMC_node_constraint

開発中

### translation
### rotation
### aim

