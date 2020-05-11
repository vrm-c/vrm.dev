---
title: Structure
date: 2020-04-21T17:12:49+09:00
url: "/en/dev/univrm-1.xx/structure/"
weight: 2
---

### VrmLib(namespace VrmLib)

`VrmLib.Model`: An intermediate container generated from the GLTF array buffer to make handling VRM model data easier. It can access the GLTF hierarchy in the VRM model without index referencing.

### ProtobufSerializer

VRM-1.0's reading/writing.
Defined by ProtocolBuffer and generate a Json serializer.

#### Google.Protobuf

Google.Protobuf

#### VrmProtobuf(namespace VrmProtobuf)

C# container and JSON serializer exported from the GLTF's Protobuf definition.
Implement `JSON(VRM-1.0) => C#(VrmProtobuf)` and `C#(VrmProtobuf) => JSON(VRM-1.0)`.

#### ProtobufSerializer(namespace VrmProtobuf)

Transfer from C# serialized container to the intermediate format `VrmLib.Model`.
Implement `VrmProtobuf => VrmLib.Model` and `VrmLib.Model => VrmProtobuf`.

### Builder(namespace UniVRM10)

Implement `VrmLib.Model => Unity`(UnityBuilder) and `Unity => VrmLib.Model`(VRMBuilder).

* Transformation between right-handed and left-handed coordinate system
* Must be run in ScriptThread
* GLTF-related (Mesh, Texture, Material, GameObject, SkinnedMeshRenderer, etc.)
* VRM-related (HumanoidAvatar, BlendShapeProxy, LookAt, FirstPerson, etc.)
