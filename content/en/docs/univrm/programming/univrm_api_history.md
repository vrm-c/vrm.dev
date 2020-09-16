---
title: "API Change History"
linkTitle: "API change history"
date: 2018-05-21T10:00:00+09:00
aliases: ["/en/dev/univrm-0.xx/programming/univrm_api_history/"]
weight: 1
tags: ["api"]
---

This section describes about changes affecting the program.

Please go to [UniVRM/Wiki](https://github.com/vrm-c/UniVRM/wiki) to get the latest information of the API update.

# v0.36

## Texture Name Save Locations Changed

Conforming to the GLTF specification.

```json
json.images[i].extra.name
```

After the change

```json
json.images[i].name
```

## BlendShape Name Save Locations Changed

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
