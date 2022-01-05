---
title: 🚧VRM-0.x モデルを VRM-1.0β モデルにアップグレードする
weight: 10
---

UniVRM は従来の VRM-0.x モデルを VRM-1.0β モデルにアップグレードすることができます。

ほとんどの要素は元の表現を維持したままアップグレードされますが、一部の要素はアップグレードされない場合があります。
たとえば、ライセンス情報は自動的にアップグレードできないため、元の情報が維持されます。
([#181](https://github.com/vrm-c/vrm-specification/issues/181))

アップグレードは [VRM モデル制作者が手動で行う]({{< relref "migrate_editor.md" >}}) ことができます。
また [VRM 組み込みアプリケーション開発者が対応する]({{< relref "migrate_runtime.md" >}}) こともできます。

VRM 組み込みアプリケーション開発者が対応する場合、アプリケーション利用者は自身のモデルが VRM-0.x か VRM-1.0β かを意識することなく利用することができます。


## 動作確認環境
- Unity 2019.4.30f1
- UniVRM 0.80.0

```{toctree}
:maxdepth: 1
feature
migrate_editor
migrate_runtime
```
