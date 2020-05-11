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

* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/dotnet.system.memory`
* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/vrmlib` => system.memory に依存
* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/VRM` => UniVRM-0Xの読み書き、MToon

* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/ProtobufSerializer` => vrmlib に依存

* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/UniVRM0XReader`=> vrmlib と VRMに依存

* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/UniVRM-1.0` => vrmlib, ProtobufSerializer, UniVRM0XReader に依存


#### もしくは、 Packages/manifest.json に直接コピーペーストする。

以下の内容を追記してください。

```json
{
  "dependencies": {
    // 省略
    "com.vrmc.protobufserializer": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/ProtobufSerializer",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/UniVRM-1.0",
    "com.vrmc.univrm0xreader": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/UniVRM0XReader",
    "com.vrmc.vrmlib": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/vrmlib",
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/VRM",
    "dotnet.system.memory": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/dotnet.system.memory",
    // 省略
}
```

https://github.com/vrm-c/UniVRMUtility/blob/master/Packages/manifest.json は、 `UniVRM-1.0` の `UnityPackage` を使う例です。


以下の "lock" はUnityが自動で更新するので、編集する必要はありません。

```json
  "lock": {
    "com.vrmc.protobufserializer": {
      "revision": "HEAD",
      "hash": "bf5f59be929f4e3ce2451062a5e39706b0bd8749"
    },
    "com.vrmc.univrm": {
      "revision": "HEAD",
      "hash": "bf5f59be929f4e3ce2451062a5e39706b0bd8749"
    },
    "com.vrmc.vrmlib": {
      "revision": "HEAD",
      "hash": "bf5f59be929f4e3ce2451062a5e39706b0bd8749"
    },
    "com.vrmc.vrmshaders": {
      "revision": "HEAD",
      "hash": "bf5f59be929f4e3ce2451062a5e39706b0bd8749"
    },
    "dotnet.system.memory": {
      "revision": "HEAD",
      "hash": "bf5f59be929f4e3ce2451062a5e39706b0bd8749"
    },
    "com.vrmc.univrm0xreader": {
      "revision": "HEAD",
      "hash": "bf5f59be929f4e3ce2451062a5e39706b0bd8749"
    }
  }
```
