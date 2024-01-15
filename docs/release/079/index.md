# v0.79～ (Unity-2019.4) 最新版をご利用ください

## ReleaseNote

* `0.80.0` からサポートする Unity の最低バージョンを `2019.4LTS` に更新しました。
* `0.80.0` から `VRM-1.0β` のパッケージ提供を開始しました。

```{toctree}
:glob:
:maxdepth: 1
 
v0.*
```

## パッケージ(v0.81~)

| unitypackage       | folder                            | contents              |
|--------------------|-----------------------------------|-----------------------|
| VRMShaders_UniGLTF | Assets/VRMShaders, Assets/UniGLTF | VRMShaders と UniGLTF |
| UniVRM             | Assets/VRM                        | VRM-0.X               |
| VRM                | Assets/VRM10                      | VRM-1.0(β)            |

```
+----------++----------+
|UniVRM-0.X||UniVRM-1.0|
+----------++----------+
+----------------------+
|       UniGLTF        |
+----------------------+
|      VRMShaders      |
+----------------------+
```

## UPM(v0.81~)

```js
// manifest.json 抜粋
{
  "dependencies": {
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.82.1",
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.82.1", // rename unigltf to gltf
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.82.1",
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.82.1", // rename univrm1 to vrm
  }
}
```
