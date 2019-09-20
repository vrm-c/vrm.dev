---
title: UniVRMのインストール
linkTitle: インストール
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T14:00:00Z
url: /univrm/install/
weight: 1
aliases:
- /univrm/univrm_install/
---

## Unity Version

Unity5.6以降をサポートしています。

## インストール

`Assets/VRM`にインストールします。

既存のVRMが存在している場合、あらかじめVRMフォルダを削除することを推奨しています。

UniVRM-XXX.unitypackageファイルをUnityにインポートしてください。

{{< imgproc package_import Fit "402x752" >}}
UnityPackageをインポート
{{< /imgproc >}}

## AssetPostProcessorを止める

UniVRMのインポーターは`AssetPostprocessor`で実装しています。UnityプロジェクトにUniVRMを含めるときに`AssetPostProcessor`が都合が悪い場合があり、これを無効にするシンボルを追加しました (v0.39から)。

`Editor - ProjectSettings - Player`の`Other Settings - Scripting Define Symbols`に`VRM_STOP_ASSETPOSTPROCESSOR`を設定します。

{{< imgproc stop_assetpostprocessor Fit "313x149" >}}
AssetPostProcessorを停止
{{< /imgproc >}}

## シェーダーバリアント

{{< imgproc shaders Fit "212x94" >}}
同梱されるシェーダー。
{{< /imgproc >}}

## Shader Preloadingの設定

**v0.36からShaderがResourcesフォルダに移動して不要になりました**

プロジェクトに以下のように設定してください。

{{< imgproc graphics_setting Fit "482x770" >}}
Editor - Project Settings - Graphics
{{< /imgproc >}}

{{< imgproc shader_preloading Fit "297x82" >}}
shader preloadingの設定
{{< /imgproc >}}
