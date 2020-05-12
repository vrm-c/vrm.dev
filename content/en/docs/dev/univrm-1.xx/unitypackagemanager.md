---
title: "Employ Unity Package Manager"
date: 2020-05-11T17:06:05+09:00
url: "en/dev/univrm-1.xx/package/"
---

## UniVRM-1.0's UnityPackage

UnityPackage is adopted experimentally in UniVRM-1.0.

As `package.json` is placed in each module in github repository's `Assets` folder,
`Unity 2019.3.4f1 or later version` is required.

### How to use

UnityPackageManager's Window

{{< img src="images/vrm10/menu_packagemanager.jpg" >}}

`add package from git URL`

{{< img src="images/vrm10/from_git.jpg" >}}

Since there is no function that can automatically download the dependencies between packages, please add the following git urls in order:

* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/dotnet.system.memory`
* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/vrmlib` => Depends on system.memory
* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/VRM` => UniVRM-0.XX's import/export, MToon

* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/ProtobufSerializer` => Depends on vrmlib

* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/UniVRM0XReader`=> Depends on vrmlib and VRM

* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/UniVRM-1.0` => Depends on vrmlib, ProtobufSerializer, and UniVRM0XReader


#### Add dependencies in Packages/manifest.json

An alternative way is to add necessary dependencies right in Packages/manifest.json. Please copy and paste the following contents:

```json
{
  "dependencies": {
    // ...
    "com.vrmc.protobufserializer": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/ProtobufSerializer",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/UniVRM-1.0",
    "com.vrmc.univrm0xreader": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/UniVRM0XReader",
    "com.vrmc.vrmlib": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/vrmlib",
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/VRM",
    "dotnet.system.memory": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/dotnet.system.memory",
    // ...
}
```

https://github.com/vrm-c/UniVRMUtility/blob/master/Packages/manifest.json is an example of using `UniVRM-1.0`'s `UnityPackage`.

The hash values in `lock` can be updated automatically by Unity, there is no need to manually change them. 

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
