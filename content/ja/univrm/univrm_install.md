---
title: "UniVRMのインストール"
date: 2018-04-16T16:30:00+09:00
---

## Unity Version

Unity5.6以降をサポートしています。

## インストール

``Assets/VRM``にインストールします。

既存のVRMが存在している場合、あらかじめVRMフォルダを削除することを推奨しています。

UniVRM-XXX.unitypackageファイルをUnityにインポートしてください。

|{{< img src="images/vrm/package_import.png" alt="package_import" >}}|
|-----|
|UnityPackageをインポート|

## AssetPostProcessorを止める

UniVRMのインポーターは``AssetPostprocessor``で実装しています。
UnityプロジェクトにUniVRMを含めるときにAssetPostProcessorが都合が悪い場合があり、これを無効にするシンボルを追加しました(v0.39から)。

``Editor - ProjectSettings - Player`` の ``Other Settings - Scripting Define Symbols``に``VRM_STOP_ASSETPOSTPROCESSOR``を設定します。

|{{< img src="images/vrm/stop_assetpostprocessor.png" >}}|
|-----|
|AssetPostProcessorを停止|

## シェーダーバリアント

|{{< img src="images/vrm/shaders.png" >}}|
|-----|
|同梱されるシェーダー。|

## Shader Preloadingの設定

**v0.36からShaderがResourcesフォルダに移動して不要になりました**

プロジェクトに以下のように設定してください。

|{{< img src="images/vrm/graphics_setting.png" >}}|
|-----|
|Editor - Project Settings - Graphics|

|{{< img src="images/vrm/shader_preloading.png" >}}|
|-----|
|shader preloadingの設定|
