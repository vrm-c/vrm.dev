---
title: UniVRMでよくある質問
linkTitle: よくある質問
date: 2018-05-09
lastmod: 2019-09-20T14:00:00Z
url: /univrm/faq/
weight: 6
aliases:
- /univrm/univrm_faq/
---

## エラーの報告

コンソール画面の内容をご確認ください。
コンソール画面はメニューから表示できます。

{{< imgproc window_console Fit "363x810"/ >}}

表示されたコンソール画面にエラーメッセージ(赤い)が表示されている場合、なんらかの不具合がある可能性があります。

{{< imgproc error Fit "666x272"/ >}}

エラー報告は、起こった現象に

- OS (Windows10 64bitなど)
- Unityのバージョン (Unity-5.6.3p1など)
- UniVRMのバージョン (0.40など)

を添えて

* https://github.com/vrm-c/UniVRM/issues

等にお知らせください。

## 設定したVRMSpringBoneが居なくなった

VRMSpringBoneはインポート時に`secondary`ノードにアタッチされます。

[VRMSpringBone](/univrm/components/secondary/#コンポーネントのアタッチされるノード)

## プロジェクトをビルドするとローダーが動かなくなる

UniVRMで使うシェーダーがビルド対象に含まれていない可能性があります。

```
Edit - ProjectSettings - GraphicsSettings - ShaderPreloading
```

をご確認ください。

[Shader Preloadingの設定手順](/univrm/install/#shader-preloadingの設定)
