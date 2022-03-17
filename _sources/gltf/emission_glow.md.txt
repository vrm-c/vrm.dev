---
weight: 10
tags: ["gltf", "mtoon-1.0"]
---

# Emission と グロー(発光)

`vrm-1.0 向けの独自拡張です`

## 対象のシェーダー

* `Standard`
* `VRM10/MToon10`

## Unity の PostEffect の グロー

Emission の値が 1 を越える場合に発光させるポストエフェクトです。

```{figure} /_static/images/vrm10/glow.jpg
```

1を超えて3や4にすることで強くなりますが `glTF` の仕様上この値を格納することができません。

```{admonition} 割り算で1におさめる
:class: note

エクスポート時に下記の処理をして 最大値 1 に強制します。
```

```csharp
Vector3 emission;
var max_value = get_max(emission); // r, g, b で最大の値を得る
if(max_value>1)
{
  emission = emission / max_value;
}
```

```{admonition} vrm-0.x は保存できる
:class: note

vrm-0.x は [0-1] 制限が無いので保存できます。
```

## VRMC_materials_hdr_emissiveMultiplier 拡張を作成しました

emission に1を越える値を格納するために、`VRMC_materials_hdr_emissiveMultiplier` を作りました。
EmissiveFactor に対して乗算する float 値 を定義します。

`EmissiveFactor = EmissiveFactor * multiplier(1より大きい値)` となります。

`UniVRM-0.79` 以降でVRM1/GLB/GLTF でエクスポート可能です。

MToon と PBR マテリアルで有効です。

PostEffectを設定済みのサンプルシーンがありますので
お試しください。

`UniVRM10-XXX.unitypackage`

* `Assets\UniGLTF.Samples\LookDev\ballroom_1k.unity`
* `Assets\UniGLTF.Samples\LookDev\lilienstein_1k.unity`
* `Assets\UniGLTF.Samples\LookDev\moonless_golf_1k.unity`
* `Assets\UniGLTF.Samples\LookDev\spruit_sunrise_1k.unity`

* https://github.com/vrm-c/UniVRM/pull/1123

## Unity アプリでロードする方法

* `UniVRM-0.79` 以降でロードしてください
* シーンに PostEffect を設定してください
  * `Assets/UniGLTF.Samples/LookDev/RenderingServicePostProcessingProfile.asset` サンプルの profile があります

## 仕様

<https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_materials_hdr_emissiveMultiplier-1.0_draft>
