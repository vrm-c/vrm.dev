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

* `https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders`
* `https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/Vrm10` => Depends on VRMShaders


#### Add dependencies in Packages/manifest.json

An alternative way is to add necessary dependencies right in Packages/manifest.json. Please copy and paste the following contents:

```json
{
  "dependencies": {
    // ...
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM_1_0.git?path=/Assets/Vrm10",
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders",
    // ...
}
```

https://github.com/vrm-c/UniVRMUtility/blob/master/Packages/manifest.json is an example of using `UniVRM-1.0`'s `UnityPackage`.

The hash values in `lock` can be updated automatically by Unity, there is no need to manually change them. 

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
