---
title: Structure
date: 2020-04-21T17:12:49+09:00
url: "/en/dev/univrm-1.xx/structure/"
weight: 2
---

## Assets/vrmlib

`VrmLib.Model`: An intermediate container generated from the GLTF array buffer to make handling VRM model data easier. It can access the GLTF hierarchy in the VRM model without index referencing.

## Assets/ProtobufSerializer

VRM-1.0's reading/writing.
Defined by ProtocolBuffer and generate a Json serializer.

Transfer from VRM-1.0 to the intermediate format `VrmLib.Model`.

* `VRM-1.0 <=> VrmLib.Model` 

## Assets/VRM

Add `package.json` to reference the followings (UniVRM-0.55):

* MToon shader
* UniUnlit shader
* VRM-0.X's serializer

## Assets/UniVRM0XReader

Transfer from VRM-0.X to the intermediate format `VrmLib.Model`.

* `VRM-0.x => VrmLib.Model` 

## Assets/UniVRM-1.0

* `VrmLib.Model <=> Unity`
* Transformation between right-handed and left-handed coordinate system
* Must be run in ScriptThread
* GLTF-related (Mesh, Texture, Material, GameObject, SkinnedMeshRenderer, etc.)
* VRM-related (HumanoidAvatar, BlendShapeProxy, LookAt, FirstPerson, etc.)
