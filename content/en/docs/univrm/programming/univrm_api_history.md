---
title: "API Change History"
linkTitle: "API change history"
date: 2018-05-21T10:00:00+09:00
aliases: ["/en/dev/univrm-0.xx/programming/univrm_api_history/"]
weight: 1
tags: ["api"]
---

## v0.68 Reworked ImporterContext

[Runtime Importer]({{< relref "runtime_import.md" >}})

## v0.63.2 Changed implementation method of gltf extension

[Implement GLTF Extension]({{< relref "how_to_impl_extension.md" >}})

## v0.56 Updated BlendShapeKey's Specifications

[Rework BlendShapeKey's Interface](https://github.com/vrm-c/UniVRM/wiki/ReleaseNote-v0.56.0%28en%29#reworks-blendshapekeys-interface)

## v0.36

### Changed Storage Position of Texture Name

Conforming to the GLTF specification.

```json
json.images[i].extra.name
```

After the change

```json
json.images[i].name
```

### Changed Storage Position BlendShape Name

Conforming to the GLTF specification.

* "extras" is not allowed in target
* https://github.com/KhronosGroup/glTF/issues/1036#issuecomment-314078356 

```json
json.meshes[i].primitives[j].targets[k].extra.name
```

After the change 

```json
json.meshes[i].primitives[j].extras.targetNames[k]
```
