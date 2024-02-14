---
date: 2021-08-05
---

# VRM-1.0

## VRM 1.0 とは

2018 年に発表した 3D アバターファイルフォーマット「VRM」において、
利用が進むにつれて判明した課題やエラーを修正し、 今後必要になると考えられる機能を追加した規格となります。

従来の VRM は今後 VRM 0.x と分類され非推奨となり、今後は VRM 1.0 が正式な規格となる予定です。

VRM 1.0 は、2022 年 9 月にリリースされました。

VRM 0.x の構成が整理されてまとまり毎に分割されました。
コアとなり humanoid, meta などを含む [VRMC_vrm-1.0](https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_vrm-1.0) 、トゥーン表現マテリアルの [VRMC_materials_mtoon-1.0](https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_materials_mtoon-1.0),
ゆれものの [VRMC_springBone-1.0](https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_springBone-1.0) です。

また、新規に [VRMC_node_constraint-1.0](https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_node_constraint-1.0) を追加しました。

:::info
[VRMC_materials_hdr_emissiveMultiplier-1.0](https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_materials_hdr_emissiveMultiplier-1.0) は内容が [KHR_materials_emissive_strength](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md) とほぼ同じであったため、
こちらを使うことにして利用されていません。
:::

## 公開文書

### VRM 1.0 仕様

文書 および JSON Schema を用いて定義された VRM 1.0 の仕様です。

https://github.com/vrm-c/vrm-specification/tree/master/specification

### サンプルモデル

https://github.com/vrm-c/vrm-specification/tree/master/samples

### VRM パブリック・ライセンス文書 1.0

アバターの人格に関する許諾を考慮した、VRM 独自のライセンスです。

[VRM パブリック・ライセンス文書 1.0](pathname:///licenses/1.0/index.html)

## 実装

公式の実装として Unity での実装「UniVRM」が存在します。

[UniVRM-1.0](/univrm1/)

### API

- [VRM-1.0 の API](/api/)

## 対応アプリケーション

- [アプリケーション](/showcase)
