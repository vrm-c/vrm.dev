---
weight: 10
tags: ["gltf", "mtoon-1.0"]
---

# Emission と グロー(発光)

`v0.99` から `KHR_materials_emissive_strength` の読み書きをサポートしています。

```{admonition} VRMC_materials_hdr_emissiveMultiplier は、非推奨になりました 
:class: warning
同じ機能である `VRMC_materials_hdr_emissiveMultiplier` は、非推奨になりました。
以降も読み込み能力は保持しますが、書き出し時は `KHR_materials_emissive_strength` を使い `VRMC_materials_hdr_emissiveMultiplier` は使われません。
```

## 対象のシェーダー

* `Standard`
* `VRM10/MToon10`

## Unity の PostEffect の グロー

Emission の値が 1 を越える場合に発光させるポストエフェクトです。

```{figure} /_static/images/vrm10/glow.jpg
```

1を超えて3や4にすることで強くなりますが、 `glTF` の Emission 最大値は `1` となっています。

```{admonition} 割り算で1におさめる
:class: note

エクスポート時に下記の処理をして Emission の 最大値を 1 に修正します。
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

## KHR_materials_emissive_strength に対応

`v0.99` から `KHR_materials_emissive_strength` の読み書きに対応しています。

<https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_emissive_strength>

`UniVRM-0.99` 以降、 VRM1/GLB/GLTF で MToon/PBR で有効です。

## VRMC_materials_hdr_emissiveMultiplier (deprecated)

<https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_materials_hdr_emissiveMultiplier-1.0>

`KHR_materials_emissive_strength` と機能が重複したので不要になりました。

emission に1を越える値を格納するために、`VRMC_materials_hdr_emissiveMultiplier` を作りました。
EmissiveFactor に対して乗算する float 値 を定義します。

`EmissiveFactor = EmissiveFactor * multiplier(1より大きい値)` となります。

`UniVRM-0.79` 以降、 VRM1/GLB/GLTF で MToon/PBR で有効です。

## サンプルシーン

PostEffectを設定済みのサンプルシーンがありますので
お試しください。

`UniVRM10-XXX.unitypackage`

* `Assets\UniGLTF.Samples\LookDev\ballroom_1k.unity`
* `Assets\UniGLTF.Samples\LookDev\lilienstein_1k.unity`
* `Assets\UniGLTF.Samples\LookDev\moonless_golf_1k.unity`
* `Assets\UniGLTF.Samples\LookDev\spruit_sunrise_1k.unity`

* https://github.com/vrm-c/UniVRM/pull/1123

## Unity アプリでロードする方法

* `UniVRM-0.99` 以降でロードしてください
* シーンに PostEffect を設定してください
  * `Assets/UniGLTF.Samples/LookDev/RenderingServicePostProcessingProfile.asset` サンプルの profile があります
