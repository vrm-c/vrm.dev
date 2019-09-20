---
title: UniVRMで使えるシェーダー
linkTitle: シェーダー
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T13:00:00Z
url: /univrm/shaders/
weight: 4
aliases:
- /univrm/shaders/univrm_shaders/
---

[UniVRM-0.44のマテリアル](/univrm/sharders/0.44/)

## PBR

### Standardシェーダー

Unity標準です。

## Unlit系シェーダー

### VRM/UnlitTexture

UnityのUnit/Textureと同じです。

### VRM/UnlitCutout

UnityのUnit/Cutoutと同じです。

### VRM/UnlitTransparent

UnityのUnit/Transparentと同じです。

煙やエフェクトなどのパーティクル的なもの、頬の赤みなど実体(深度値)の無い半透明物への適用を想定しています。

### VRM/UnlitTransparentZWrite

アルファブレンディングかつZWriteありです。半透明な衣装や髪など実体(深度値)のある半透明物への適用を想定しています。

{{< imgproc transparent_z_write Fit "379x479" >}}
前髪が毛先に行くにつれて半透明
{{< /imgproc >}}

## Toonシェーダー

### VRM/MToon

[MToonについての詳細](/univrm/sharders/mtoon/)

## それ以外のシェーダー

VRMをインポートする側に同じシェーダーが存在すれば使うことができます。外部のサービスやアプリで使う場合は、上記の標準シェーダーをご利用ください。自作アプリの場合は、任意のシェーダーをご利用いただけます。
