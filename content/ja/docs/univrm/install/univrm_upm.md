---
title: "UPMでUniVRMをインストールする"
date: 2020-07-08T11:42:13+09:00
weight: 3
aliases: ["/univrm/univrm_upm/", "/univrm/install/univrm_upm/"]
tags: ["unity"]
---

* `Unity 2019.4以降` が必要です。
* [Git client](https://git-scm.com/) のインストールが必要です。

### Unity 向けの git のインストール

Unity Manual [Requirements](https://docs.unity3d.com/Manual/upm-git.html#req) を参照してください。

> To use Git dependencies in a project, make sure the [Git client](https://git-scm.com/) is installed on your machine and that you have added the Git executable path to the PATH system environment variable.

未インストールだと

> An error occurred while resolving packages:
Project has invalid dependencies:
com.vrmc.vrmshaders: No 'git' executable was found. Please install Git on your system then restart Unity and Unity Hub

というようなエラーが出ます。


{{% alert title="他のgit" color="warning" %}}
https://git-scm.com/ からインストールした git.exe (デフォルトは、 `C:\Program Files\Git\cmd\git.exe`) が、Path の中で最初に見つかるように設定してください。

* powershell からバージョンを確認した例 (20201130)
```dos
> git --version
git version 2.29.2.windows.2
```

{{% /alert %}}



### UnityPackageManager ウインドウによるインストール

UnityPackageManagerのWindow

{{< img src="images/vrm10/menu_packagemanager.jpg" >}}
<hr>

`add package from git URL`

{{< img src="images/vrm10/from_git.jpg" >}}

<hr>

新しいUniVRMバージョンがリリースされる時に、このバージョンに関連するgit urlsを公開します。

たとえば、[v0.59.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.59.0) のgit urlは次のとおりです：

* `https://github.com/vrm-c/UniVRM.git?path=/Assets/MeshUtility#v0.59.0`
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.59.0`
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.59.0` => VRMShadersとMeshUtility に依存

パッケージ同士の依存関係を自動でダウンロードしてくれる機能は無いので、以上の git url を順に追加してください。

バージョン番号を変更することで、お好きなバージョンに切り替えることができます。

### packages/manifest.json 直接編集によるインストール

以下の内容を追記してください（[v0.59.0](https://github.com/vrm-c/UniVRM/releases/tag/v0.59.0)の例)。

```json
{
  "dependencies": {
    // ...
    "com.vrmc.meshutility": "https://github.com/vrm-c/UniVRM.git?path=/Assets/MeshUtility#v0.59.0",
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.59.0",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.59.0",
    // ...
}
```

## gitの特定コミットを指定する場合

`dependencies` に特定のコミットを指定します。

例：

```json
{
  "dependencies": {
    // ...
    "com.vrmc.meshutility": "https://github.com/vrm-c/UniVRM.git?path=/Assets/MeshUtility#873aec208c663c10dd825e9b006fec6809cfe6ca",
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#873aec208c663c10dd825e9b006fec6809cfe6ca",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#873aec208c663c10dd825e9b006fec6809cfe6ca",
    // ...
}
```
