---
title: 🚧アップグレードに対応する機能
weight: 10
---

ここでは VRM-0.x モデルから VRM-1.0β モデルにアップグレードする際の機能の対応を述べます。
主に名称の変更と、明確に変更される機能について述べます。

## 動作確認環境
- Unity 2019.4.30f1
- UniVRM 0.80.0

## Meta

## Humanoid
ほとんどの表現は維持されます。

ただし Unity に依存しているが VRM としては使用していなかった内部のデータが一部削除されます。

## BlendShape
表現は維持されます。
また名称は VRM-0.x の BlendShape から VRM-1.0β の Expression に変わります。

ただし `Neutral` の BlendShape は非推奨となります。

## LookAt
ほとんどの表現は維持されます。

ただし、目線の角度と実際の BlendShape の値の対応付けからカーブの情報がなくなり、リニアのみになります。

## FirstPerson
通常の使用範囲では表現が維持されます。

一人称の位置の親ボーン指定がなくなり、頭ボーンのみになりました。

## SpringBone
表現が維持されます。

VRM-1.0β ではより自由度の高い SpringBone が表現できるようになっています。

## Material

### PBR

### Unlit
ほとんどの Unlit シェーダは `UniGLTF/UniUnlit` シェーダにアップグレードされます。
`VRM/UnlitTransparentZWrite` シェーダは `MToon10` シェーダにアップグレードされます。

### MToon
`VRM/MToon` シェーダは `VRM10/MToon10` シェーダにアップグレードされます。

ほとんどのプロパティは引き継がれて表現は維持されますが、以下のプロパティが削除されます。
削除の理由は、効果が薄く使用頻度が低いためです。 ([vrm-specification#161](https://github.com/vrm-c/vrm-specification/issues/161))

|          プロパティ           | アップグレード時の動作 |
| ----------------------------- | ---------------------- |
| Shadow Receive Multiplier     | 削除されます.          |
| Lit & Shade Mixing Multiplier | 削除されます.          |
| LightColorAttenuation         | 削除されます.          |
| WidthScaledMaxDistance        | 削除されます.          |