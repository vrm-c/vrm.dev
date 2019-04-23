---
title: "APIの変更履歴"
date: 2018-05-21T10:00:00+09:00
---

プログラムに影響のある変更についてです。

最新バージョンは[UniVRM/Wiki](https://github.com/vrm-c/UniVRM/wiki)をご覧ください。

# v0.36

## テクスチャ名の格納位置の修正

GLTFの仕様に準拠しました。

* extraはextrasの間違い
* imageはnameを持っていた

```json
json.images[i].extra.name
```

変更後

```json
json.images[i].name
```

## ブレンドシェイプ名の格納位置の修正

GLTFの仕様に準拠しました。

* extraはextrasの間違い
* targetにextrasは不許可
* https://github.com/KhronosGroup/glTF/issues/1036#issuecomment-314078356 

```json
json.meshes[i].primitives[j].targets[k].extra.name
```

変更後

```json
json.meshes[i].primitives[j].extras.targetNames[k]
```
