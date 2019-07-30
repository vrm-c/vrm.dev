---
title: "UniVRMで使えるシェーダー"
date: 2018-04-16T16:30:00+09:00
---

[UniVRM-0.44のマテリアル](../univrm_shaders_044/)

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

|{{< img src="images/vrm/TransparentZWrite.png" >}}|
|-----|
|前髪が毛先に行くにつれて半透明|

## Toonシェーダー
### VRM/MToon
[MToonについての詳細](../mtoon)

## それ以外のシェーダー
VRMをインポートする側に同じシェーダーが存在すれば使うことができます。
外部のサービスやアプリで使う場合は、上記の標準シェーダーをご利用ください。
自作アプリの場合は、任意のシェーダーをご利用いただけます。
