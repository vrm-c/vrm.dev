---
title: "glTF"
weight: 3
---


`UniVRM-0.79.0` 以降でリニューアルした `glTF` 関連の情報。

## フォルダ

* `Assets/UniGLTF`
* `Assets/VRMShaders`

## unitypackage

`UniVRM-0.81.0` ～

* `UniGLTF_VRMShaders-XXX.unitypackage`

## UPM

`UniVRM-0.81.0` ～ 

* UPM の id を `com.vrmc.unigltf` から `com.vrmc.gltf` に id を変更しました。
* UPM のバージョン番号を `UniGLTF` と同じに統一しました。

```json
{
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.81.0",
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.81.0",
}
```
