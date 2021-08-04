---
title: Emission と グロー(発光)
weight: 2
---

## glTF の Emission

float3 で値の範囲が [0-1] です。

## Unity などの PostEffect の グロー

Emission の値が 1 を越える場合に発光させる実装です。

{{% alert title="glow" color="info" %}}

{{< img width=300 src="images/vrm10/glow.jpg" >}}

{{% /alert %}}

## VRMC_materials_hdr_emissiveMultiplier 拡張を作成しました

emission に1を越える値を格納するために、`VRMC_materials_hdr_emissiveMultiplier` を作りました。
EmissiveFactor に対して乗算する float 値 を定義します。

`EmissiveFactor = EmissiveFactor * multiplier(1より大きい値)` となります。

`UniVRM-0.79` 以降でVRM1/GLB/GLTF でエクスポート可能です。

MToon と PBR マテリアルで有効です。

PostEffectを設定済みのサンプルシーンあります。

* https://github.com/vrm-c/UniVRM/pull/1123

TODO: UnityPackage

## Unity アプリでロードする方法

* `UniVRM-0.79` 以降でロードしてください
* シーンに PostEffect を設定してください
  * `Assets/UniGLTF.Samples/LookDev/RenderingServicePostProcessingProfile.asset` サンプルの profile があります

## 仕様

<https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_materials_hdr_emissiveMultiplier-1.0_draft>
