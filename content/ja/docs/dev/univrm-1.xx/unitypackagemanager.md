---
title: UnityPackageManagerを使う
date: 2020-05-11
url: "/dev/univrm-1.xx/package/"
---

## UniVRM-1.0 の UnityPackage

試験的に、パッケージを導入しています。

github リポジトリのルート以外に `package.json` を配置する機能を使っているので、
`Unity 2019.3.4f1以降` が必要です。

### 導入方法

UnityPackageManagerのWindow

{{< img src="images/vrm10/menu_packagemanager.jpg" >}}

`add package from git URL`

{{< img src="images/vrm10/from_git.jpg" >}}

パッケージ同士の依存関係を自動でダウンロードしてくれる機能は無いので、以下の git url を順に追加してください。

* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders`
* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/Vrm10` => VRMShadersに依存

#### もしくは、 Packages/manifest.json に直接コピーペーストする。

以下の内容を追記してください。

```json
{
  "dependencies": {
    // 省略
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/Vrm10",
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders",
    // 省略
}
```

https://github.com/vrm-c/UniVRMUtility/blob/master/Packages/manifest.json は、 `UniVRM-1.0` の `UnityPackage` を使う例です。


以下の "lock" はUnityが自動で更新するので、編集する必要はありません。

```json
  "lock": {
    "com.vrmc.univrm": {
      "revision": "HEAD",
      "hash": "198c2c605ded711b21781421e71ba9bdbe0f8728"
    },
    "com.vrmc.vrmshaders": {
      "revision": "HEAD",
      "hash": "155acf354735288db0335878179f483901541851"
    }
  }
```
