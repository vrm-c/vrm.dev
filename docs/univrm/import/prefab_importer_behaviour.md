---
weight: 2
aliases: ["/univrm/settings/prefab_importer_behaviour/"]
tags: ["unity"]
---

# Precautions on Prefab Import and Overwrite Issue

## 0.49

When VRM is imported with Unity Editor, Material and BlendShapeAvatar will not be overwritten if they already exist in the `Assets` folder .In that case, the Material's and BlendShapeAvatar's references from Prefab will be set to reference existing files.

## 0.46

When VRM is imported with Unity Editor, Material, BlendShapeAvatar, BlendShapeClip will not be overwritten if they already exist in the `Assets` folder.However, Mesh, Texture and Prefab will be overwritten.

Considering that users may have their own settings for Material, BlendShapeAvatar, BlendShapeClip, existing Material, BlendShapeAvatar and BlendShapeClip files will not be overwritten.If you want to overwrite, delete them before importing.

## 0.45 and before

When VRM is imported with Unity Editor, Material, Mesh, Texture, Material, BlendShape, Prefab will be overwritten.

