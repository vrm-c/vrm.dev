---
title: Assetの扱いを変更しました
date: 2020-04-21T17:12:49+09:00
url: "/dev/univrm-1.xx/unity_assets/"
---

[ScriptedImporter](https://docs.unity3d.com/ScriptReference/Experimental.AssetImporters.ScriptedImporter.html) を使っていて、以前の[AssetPostprocessor](https://docs.unity3d.com/ScriptReference/AssetPostprocessor.html)と挙動が異なります。

## 0.xx

`model.vrm` を Assets フォルダに投入 => AssetPostprocessor が拡張子 `.vrm` のファイルに対して発動

* vrmからTextureを取り出し
* vrmからMaterialを取り出し
* vrmからMeshを取り出し
* vrmからBlendShpaeを取り出し
* 取り出したAssetからPrefabを組み立て

たくさんのアセットが生成される。
ファイルシステム上は、

* model.vrm
* model.vrm.meta
* model.prefab
* model.prefab.meta
* model.Materials.meta
* model.Materials/*.assets
* model.Materials/*.meta
* ...etc

## 1.0

`model.vrm` を Assets フォルダに投入 =>  ScriptedImporter が拡張子 `.vrm` のファイルに対して発動

* ScriptedImporterのアセットができる。
* vrmからTextureを取り出して、ScriptedImporterのアセットのサブアセット(readonly)とする
* vrmからMaterialを取り出して、ScriptedImporterのアセットのサブアセット(readonly)とする
* vrmからMeshを取り出して、ScriptedImporterのアセットのサブアセット(readonly)とする
* vrmからBlendShpaeを取り出して、ScriptedImporterのアセットのサブアセット(readonly)とする
* 取り出したAssetからPrefabを組み立てて、ScriptedImporterのアセットのサブアセット(readonly)とする

見た目上アセットは一つしかできない。
ファイルシステム上は、

* model.vrm
* model.vrm.meta

の２つ。

## Extract
ScriptedImporterのアセットのままではreadonlyで変更ができません。
変更可能にするにはExtractが必用です(fbxインポーターのExtractと同じものです)。
変更せずに使う場合は、Extractは不要です。
