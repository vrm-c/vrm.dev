---
title: 構成
date: 2020-04-21T17:12:49+09:00
url: "/dev/univrm-1.xx/structure/"
weight: 1
---

## Assets/vrmlib

GLTFからバイト列を切り出して、index 参照を実体化して作業しやすくした中間の入れ物 `VrmLib.Model`。

## Assets/ProtobufSerializer

VRM-1.0 の読み書き。
ProtocolBufferで定義して、Jsonのシリアライザを生成したもの。

VRM-1.0 から中間形式の `VrmLib.Model` に移し替える。

* `VRM-1.0 <=> VrmLib.Model` 

## Assets/VRM

UniVRM-0.55 に `package.json` を追加したもの。

* MToon shader
* UniUnlit shader
* VRM-0.X のシリアライザ

## Assets/UniVRM0XReader

VRM-0.X から中間形式の `VrmLib.Model` に移し替える。

* `VRM-0.x => VrmLib.Model` 

## Assets/UniVRM-1.0

* `VrmLib.Model <=> Unity`
* 右手系・左手系の変換
* スクリプトスレッドで実行する必要あり
* GLTF部分(Mesh, Texture, Material, GameObject, SkinnedMeshRendererなど)
* VRM部分(HumanoidAvatar, BlendShapeProxy, LookAt, FirstPersonなど)
