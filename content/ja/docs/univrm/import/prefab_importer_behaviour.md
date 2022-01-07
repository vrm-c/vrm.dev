---
weight: 2
aliases: ["/univrm/settings/prefab_importer_behaviour/"]
tags: ["unity"]
---

# PrefabがImportされるタイミングと上書きの注意

## 0.49

UnityEditorでVRMをAssetImportしたときに、Material, BlendShapeAvatarが既存の場合は上書きしません。
その場合に、Prefab からの Material, BlendShapeAvatarへの参照は既存のファイルを参照するようにしました。

## 0.46

UnityEditorでVRMをAssetImportしたときに、Material, BlendShapeAvatar, BlendShapeClip が既存の場合は上書きしません。
Mesh, Texture, Prefabは上書きします。

Material, BlendShapeAvatar, BlendShapeClipはユーザーが変更しているかもしれないので上書きしないことにしました。
上書きしたい場合はImport前に削除してください。

## 0.45以前

UnityEditorでVRMをAssetImportしたときに、Mesh, Texture, Material, BlendShape, Prefabが既存の場合は上書きされます。



