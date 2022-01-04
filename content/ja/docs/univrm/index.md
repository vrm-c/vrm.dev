---
title: "UniVRM"
weight: 2
menu:
  main:
    weight: 11
aliases: ["/univrm/"]
---

```{toctree}
install/index
export/index
import/index
blendshape/index
shaders/index
lookat/index
springbone/index
humanoid/index
meta/index
firstperson/index
programming/index
```

## Install 方法

* `v0.81.0` から `unitypackage` が２つ必要です。
* `v0.80.0` 以前のインストールは [こちら]({{< relref "univrm_install" >}})
* [Download](https://github.com/vrm-c/UniVRM/releases)

### UnityPackage を使ったインストール

<https://github.com/vrm-c/UniVRM/releases> から `unitypackage` をダウンロードしてください。
`UniGLTF_VRMShaders` 、 `UniVRM` という順番で２つのパッケージをインストールしてください。

|          | UniGLTF_VRMShaders | UniVRM  | VRM     |
|----------|--------------------|---------|---------|
| for GLTF | install            |         |         |
| for VRM  | install            | install |         |
| for VRM1 | install            |         | install |

* `Sample` パッケージは廃止になり中に含まれます。 
* `UPM` の `Sample` 機能でインストールできます。
### UPM を使ったインストール

`v0.81.0` から `com.vrmc.unigltf` が `com.vrmc.gltf` に変更になしました。(`com.vrmc.unigltf` が独自のバージョンを持っていたのをやめるため)。

```json
{
  "dependencies": {
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.81.0",
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.81.0", // <= unigltf から変わりました(v0.81.0)
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.81.0",
    // for VRM-1.0β
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.81.0",} // <= univrm1 から変わりました(v0.81.0)
}
```

### エラーが出る場合

コンソール画面の内容をご確認ください。
コンソール画面はメニューから表示できます。

{{< img src="images/vrm/window_console.png" alt="コンソール画面を表示するメニュー" >}}

表示されたコンソール画面にエラーメッセージ(赤い)が表示されている場合、なんらかの不具合がある可能性があります。

{{< img src="images/vrm/error.png" alt="エラーの例" >}}

エラー報告は、起こった現象に

* OS(Windows10 64bitなど)
* Unityのバージョン(Unity-5.6.3p1など)
* UniVRMのバージョン(0.40など)

を添えて

* https://github.com/vrm-c/UniVRM/issues/new/choose

にお知らせください。
