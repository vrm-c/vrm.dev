---
title: "install UPM"
date: 2020-07-08T11:42:13+09:00
weight: 2
aliases: ["/univrm/install/univrm_upm/"]
---

## UniVRM-0.XX の UnityPackage

UniVRM-0.56から、 UniVRMはUnityPackageManagerでインポートできるようになった。

github リポジトリのルート以外に `package.json` を配置する機能を使っているので、
`Unity 2019.3.4f1以降` が必要です。

### 導入方法

UnityPackageManagerのWindow

{{< img src="images/vrm10/menu_packagemanager.jpg" >}}
<hr>

`add package from git URL`

{{< img src="images/vrm10/from_git.jpg" >}}
<hr>

新しいUniVRMバージョンがリリースされる時に、このバージョンに関連するgit urlsを公開します。

たとえば、[v0.56.3](https://github.com/vrm-c/UniVRM/releases/tag/v0.56.3) のgit urlは次のとおりです：

* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.56.3`
* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.56.3` => VRMShaders に依存

パッケージ同士の依存関係を自動でダウンロードしてくれる機能は無いので、以上の git url を順に追加してください。

バージョン番号を変更することで、お好きなバージョンに切り替えることができます。

#### もしくは、 Packages/manifest.json に直接コピーペーストする。

以下の内容を追記してください（[v0.56.3](https://github.com/vrm-c/UniVRM/releases/tag/v0.56.3)の例)。

```json
{
  "dependencies": {
    // ...
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.56.3",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.56.3",
    // ...
}
```

以下の "lock" はUnityが自動で更新するので、編集する必要はありません。

```json
  "lock": {
    "com.vrmc.vrmshaders": {
      "revision": "v0.56.3",
      "hash": "3b68eb7f99bfe78ea9c83ea75511282ef1782f1a"
    },
    "com.vrmc.univrm": {
      "revision": "v0.56.3",
      "hash": "3b68eb7f99bfe78ea9c83ea75511282ef1782f1a"
    }
  }
```

ただし、特定のコミットに切り替える場合は、ハッシュ値を手動で変更できます。

もしくは`dependencies`に特定のコミットに付きます。

例：

```json
{
  "dependencies": {
    // ...
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#155acf354735288db0335878179f483901541851",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#155acf354735288db0335878179f483901541851",
    // ...
}
```
