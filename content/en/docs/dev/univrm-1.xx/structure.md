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

### Current Implementation Status
#### File IO
- [x] Runtime&Editor export in vrm-1.0 format
- [x] Runtime&Editor import in vrm-1.0 format
- [ ] vrm-0.X import
- [x] Use ScriptedImporter when exporting with Unity Editor
- [X] Force the model to be normalized at export
- [ ] Be able to check whether the model is in T-Pose

#### Material
- [X] MToonMaterial import/export
- [X] UnlitMaterial import/export
- [ ] PbrMaterial import/export
- [X] Unify ColorProperty to Linear
- [X] Modified to handle MapTexture as Linear
- [ ] jpeg texture
- [ ] import/export tests

#### BlendShape
- [X] Exclusion options for Blink, LookAt, Mouth
- [X] LookAt target is set to Head
- [X] Modify to export LookAt's coordinate system to right-handed system
- [ ] Organize MaterialBind's specifications
- [ ] Change Mesh specification of FirstPerson to NodeIndex
- [ ] Change BlendShapeBind specification to NodeIndex

#### SpringBone
- [X] Modify to export as right-handed coordinate system
- [ ] Add the capsule-typed collider to SpringBone
- [ ] Move to an individual extension (VRMC_springBone)

#### Constraint
- [ ] Add Constraint

#### Schema 
- [ ] Be able to handle content changes in Meta

#### Gltf Extension
- [X] KHR_materials_unlit
- [ ] KHR_texture_transform
- [ ] KHR_materials_pbrSpecularGlossiness
- [ ] MSFT_lod
- [ ] KHR_compressed_texture_transmission?

#### Other
- [ ] IL2CPP support, AOT operation verification
