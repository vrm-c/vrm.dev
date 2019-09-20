---
title: UniVRM installation
linkTitle: Installation
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T14:00:00Z
url: /en/univrm/install/
weight: 1
aliases:
- /en/univrm/univrm_install/
---

## Unity Version

UniVRM supports Unity5.6 and later versions.

## Installation

Download the latest unitypackage (UniVRM-0.XX) from [UniVRM/releases](https://github.com/vrm-c/UniVRM/releases) and import it into the current project (`Assets -> Import Package -> Custom Package`). The imported files will be in `../Assets/VRM`. **To update UniVRM to a newer version, deleting the previously created VRM folder before package import is recommended**.

{{< imgproc package_import Fit "402x752" >}}
Import UniVRM package
{{< /imgproc >}}

## Stop AssetPostProcessor

The importer of UniVRM is implemented with `AssetPostprocessor`. There may be cases where AssetPostProcessor is inconvenient when including UniVRM in Unity project. We have added a symbol to invalidate this (from v0.39).

Set `VRM_STOP_ASSETPOSTPROCESSOR` in `Edit - ProjectSettings - Player` ---> `Other Settings - Scripting Define Symbols`.

{{< imgproc stop_assetpostprocessor Fit "313x149" >}}
Stop AssetPostProcessor
{{< /imgproc >}}

## Shader option

{{< imgproc shaders Fit "212x94" >}}
The shaders provided in UniVRM
{{< /imgproc >}}

## Shader preloading setting

**There is no need to move shader into Resources folder (VRM/Resources) since v0.36.**

Please set up project as follows:

{{< imgproc graphics_setting Fit "482x770" >}}
Editor - Project Settings - Graphics - Shader preloading
{{< /imgproc >}}

{{< imgproc shader_preloading Fit "297x82"/ >}}
