---
title: Unity Assets
date: 2020-04-21T17:12:49+09:00
url: "/en/dev/univrm-1.xx/unity_assets/"
---

Asset Handling Change

In UniVRM1.XX, we adopt [ScriptedImporter](https://docs.unity3d.com/ScriptReference/Experimental.AssetImporters.ScriptedImporter.html), which has different asset handling behaviors compared with [AssetPostprocessor](https://docs.unity3d.com/ScriptReference/AssetPostprocessor.html).


## 0.xx

Put `model.vrm` in the Assets folder => AssetPostprocessor is triggered for files with extension `.vrm`

* Extract Texture from vrm
* Extract Material from vrm
* Extract Mesh from vrm vrm
* Extract BlendShape from vrm
* Construct Prefab from the extracted assets

Many assets are generated in the Assets folder.

* model.vrm
* model.vrm.meta
* model.prefab
* model.prefab.meta
* model.Materials.meta
* model.Materials/*.assets
* model.Materials/*.meta
* ...etc

## 1.0

Put `model.vrm` in the Assets folder => ScriptedImporter is triggered for files with extension `.vrm`

* ScriptedImporter asset can be created
* Extracted textures from vrm will be a sub-asset of ScriptedImporter's asset(readonly)
* Extracted materials from vrm will be a sub-asset of ScriptedImporter's asset(readonly)
* Extracted meshes from vrm will be a sub-asset of ScriptedImporter's asset(readonly)
* Extracted blendshapes from vrm will be a sub-asset of ScriptedImporter's asset(readonly)
* Construct Prefab from extracted assets and make it as a sub-asset of ScriptedImporter's asset(readonly)

Only one asset is generated in the Assets folder.

* model.vrm
* model.vrm.meta

## Extract
`ScriptedImporter` asset cannot be modified with readonly state
To make it modifiable, select components you want to extract and click `Extract` button in the Prefab's inspector window (same as `Extract` in fbx importer) 
`Extract` is not required if there is no intention to modify it.
