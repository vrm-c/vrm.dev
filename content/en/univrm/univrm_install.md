---
title: "UniVRM installation"
date: 2018-04-16T16:30:00+09:00
---

## Unity Version

UniVRM supports Unity5.6 and later versions.

## Installation

Download the latest unitypackage (UniVRM-0.XX) from [UniVRM/releases](https://github.com/vrm-c/UniVRM/releases) and import it into the current project (``Assets -> Import Package -> Custom Package``). The imported files will be in ``../Assets/VRM``. **To update UniVRM to a newer version, deleting the previously created VRM folder before package import is recommended**.

|{{< img src="images/vrm/package_import.png" alt="package_import" >}}|
|-----|
|Import UniVRM package|

## Stop AssetPostProcessor

The importer of UniVRM is implemented with``AssetPostprocessor``.
There may be cases where AssetPostProcessor is inconvenient when including UniVRM in Unity project. We have added a symbol to invalidate this (from v0.39).

Set``VRM_STOP_ASSETPOSTPROCESSOR``in``Edit - ProjectSettings - Player``--->``Other Settings - Scripting Define Symbols``.

|{{< img src="images/vrm/stop_assetpostprocessor.png" >}}|
|-----|
|Stop AssetPostProcessor|

## Shader option

|{{< img src="images/vrm/shaders.png" >}}|
|-----|
|The shaders provided in UniVRM|

## Shader preloading setting

**There is no need to move shader into Resources folder (VRM/Resources) since v0.36.**

Please set up project as follows:

|{{< img src="images/vrm/graphics_setting.png" >}}|
|-----|
|Editor - Project Settings - Graphics - Shader preloading|

|{{< img src="images/vrm/shader_preloading.png" >}}|
|-----|