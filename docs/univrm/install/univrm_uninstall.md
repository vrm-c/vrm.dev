---
linkTitle: "UniVRMをアンインストールする"
date: 2020-08-31
weight: 5
aliases: []
tags: ["unity"]
---

# UniVRMをアンインストールする

以下のフォルダを削除してください。

| folder             | Version             | 備考                       |
|--------------------|---------------------|----------------------------|
| Assets/VRM         |                     | UniVRM-0.XX.0.unitypackage |
| Assets/UniGLTF     | v0.63.0以降         | UniVRM-0.XX.0.unitypackage |
| Assets/VRMShaders  | v0.56.0以降         | UniVRM-0.XX.0.unitypackage |
| Assets/MeshUtility | v0.59.0以降～v0.63.0 | UniVRM-0.XX.0.unitypackage |

| folder                             | Version | 備考                               |
|------------------------------------|---------|------------------------------------|
| Assets/VRM.Samples                 |         | UniVRM-samples-0.XX.0.unitypackage |
| Assets/StreamingAssets/VRM.Samples |         | UniVRM-samples-0.XX.0.unitypackage |

UniVRMのバージョンを更新する前に一度上記を削除する方が安全です。

* バージョン間でファイルが移動していた場合に、元の場所で上書きされて不整合を起こす場合があります。
