---
title: "Outline"
date: 2020-04-21T19:56:48+09:00
url: "/en/dev/univrm-1.xx/outline/"
weight: 1
---

# UniVRM-1.0 draft

Unity implementation of VRM-1.0 draft.

* Please do not use VRM-1.0 draft in your products until the official version is released. The current specifications may be modified/changed later on

* SupportUnityVersion: `Unity2019.3`
* Recommended ColorSpaceSetting: `Linear`

## Library Dependencies

VrmLib's byte array operation depends on `System.Memory` and` System.Span` (included in standard library starting from `.NET Standard-2.1`)

* /Assets/dotnet.system.memory/Runtime
    * System.Memory.dll
    * System.Buffers.dll
    * System.Runtime.CompilerServices.Unsafe.dll
* https://www.nuget.org/packages/System.Memory/
* https://github.com/dotnet/corefx/blob/master/LICENSE.TXT

ProtobufSerializer's JSON reading/writing. Depends on the JSONSerializer's `Google.Protobuf`

* /Assets/ProtobufSerializer/Google.Protobuf 
* https://github.com/protocolbuffers/protobuf/tree/master/csharp/src/Google.Protobuf 
* https://github.com/protocolbuffers/protobuf/blob/master/LICENSE

## Implementation

```
+-------------------+
| GameObject        |
| Assets            |Left handed, Y-UP system
+-------------------+
 ^                 |
 |[UnityBuilder]   |[VrmConverter]
 |                 |
 Unity-2019.3      |
===============================================
.NET Standard-2.0 + System.Memory
 |                 |
 | Right handed,   |
 | Y-UP system     v  
+-------------------+
|VrmLib.Model       |
+-------------------+
 ^                 |
 | VrmLib          |
 |[import]         v[export]
+-------------------+
|VrmProtobuf        |
+-------------------+
 ^                 |
 | Protobuf        v
+-------------------+
|GLB(GLTF+BIN)      |VRM-1.0
+-------------------+
```