---
title: "UniVRMでよくある質問"
linkTitle: "FAQ"
date: 2018-05-09
weight: 2
url: "univrm/univrm_faq/"
---

# エラーの報告

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

* https://github.com/vrm-c/UniVRM/issues

等にお知らせください。

# 設定したVRMSpringBoneが居なくなった
VRMSpringBoneはインポート時に```secondary```ノードにアタッチされます。

[VRMSpringBone]({{< relref "univrm_secondary.md#コンポーネントのアタッチされるノード" >}})

# プロジェクトをビルドするとローダーが動かなくなる

UniVRMで使うシェーダーがビルド対象に含まれていない可能性があります。

```Edit - ProjectSettings - GraphicsSettings - ShaderPreloading```

をご確認ください。
