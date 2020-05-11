---
title: 構成
date: 2020-04-21T17:12:49+09:00
url: "/dev/univrm-1.xx/structure/"
weight: 1
---

### VrmLib(namespace VrmLib)

GLTFからバイト列を切り出して、index 参照を実体化して作業しやすくした中間の入れ物 `VrmLib.Model`。

### ProtobufSerializer

VRM-1.0 の読み書き。
ProtocolBufferで定義して、Jsonのシリアライザを生成したもの。

#### Google.Protobuf

Google.Protobuf

#### VrmProtobuf(namespace VrmProtobuf)

GLTFの Protobuf 定義から出力した C# コンテナとJSONシリアライザー。
`JSON(VRM-1.0) => C#(VrmProtobuf)` と `C#(VrmProtobuf) => JSON(VRM-1.0)` を実装する。

#### ProtobufSerializer(namespace VrmProtobuf)

C#にシリアライズされた入れ物から、中間形式の `VrmLib.Model` に移し替える。
`VrmProtobuf => VrmLib.Model` と `VrmLib.Model => VrmProtobuf` を実装する。

### Builder(namespace UniVRM10)
UnityBuilder               VRMBuilder
`VrmLib.Model => Unity` と `Unity => VrmLib.Model` を実装する。

* 右手系・左手系の変換
* スクリプトスレッドで実行する必要あり
* GLTF部分(Mesh, Texture, Material, GameObject, SkinnedMeshRendererなど)
* VRM部分(HumanoidAvatar, BlendShapeProxy, LookAt, FirstPersonなど)
