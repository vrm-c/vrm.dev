# アップグレードの互換性

`VRM-0.X` と `VRM-1.0` では Unity のコンポーネントが異なります。
それぞれ別のコンポーネントがアタッチされます。

ここでは VRM-0.x モデルから VRM-1.0 モデルにアップグレードする際の機能の対応を述べます。
主に名称の変更と、明確に変更される機能について述べます。

## 動作確認環境

- Unity 2019.4.30f1
- UniVRM 0.103.0

## Meta

### Editor

VRM-0.x と VRM-1.0 で対応のある項目はコピーし、
対応が無い項目は不許可になります。

### Runtime

```{admonition} VRM-0.x として処理
:class: info

アプリケーションは、 VRM-0.x 情報で処理することが推奨されます。
```

## Humanoid

ほとんどの表現は維持されます。
ただし Unity に依存しているが VRM としては使用していなかった内部のデータが一部削除されます。

## BlendShape

表現は維持されます。
また名称は VRM-0.x の BlendShape から VRM-1.0 の Expression に変わります。

- `Neutral` の BlendShape は非推奨となります。

## LookAt

ほとんどの表現は維持されます。
ただし、目線の角度と実際の BlendShape の値の対応付けからカーブの情報がなくなり、リニアのみになります。

## FirstPerson

通常の使用範囲では表現が維持されます。
一人称の位置の親ボーン指定がなくなり、頭ボーンのみになりました。

## SpringBone

表現が維持されます。
VRM-1.0 ではより自由度の高い SpringBone が表現できるようになっています。

## Material

### PBR

- 同じです

### Unlit

- 基本的に同じです

```{admonition} 初期のVRMのUnlitバリエーション対応
:class: warning

ほとんどの Unlit シェーダは `UniGLTF/UniUnlit` シェーダにアップグレードされます。
`VRM/UnlitTransparentZWrite` シェーダは `MToon10` シェーダにアップグレードされます。
```

### MToon

`VRM/MToon` シェーダは `VRM10/MToon10` シェーダにアップグレードされます。

ほとんどのプロパティは引き継がれて表現は維持されますが、以下のプロパティが削除されます。
削除の理由は、効果が薄く使用頻度が低いためです。 ([vrm-specification#161](https://github.com/vrm-c/vrm-specification/issues/161))

| プロパティ                    | アップグレード時の動作 |
|-------------------------------|------------------------|
| Shadow Receive Multiplier     | 削除されます.          |
| Lit & Shade Mixing Multiplier | 削除されます.          |
| LightColorAttenuation         | 削除されます.          |
| WidthScaledMaxDistance        | 削除されます.          |

#### 特殊なマイグレーション
##### Shade Texture の指定がない場合

旧来の `VRM/MToon` の Global Illumination には実装不備がありました。
そこで `VRM10/MToon10` ではこの実装が修正され、全体の Global Illumination 反映がより良いものになりました。

しかしその修正により Shade Texture の指定がない場合の挙動に大きく差異があります。
その場合、旧来の `VRM/MToon` では実装不備により、通常のシーン光源下では一見して正しく描画できていました。
しかし `VRM10/MToon10` では正しくシーン照明が反映されるようになったので、Shade Texture の指定が無いことが明らかになる見た目になりました。

したがって以下のように Shade Texture を破壊的にマイグレーションし、モデル制作者の意図した見た目に近づけるようにします。

- 条件
  - Lit Texture が指定されている、かつ、Shade Texture が指定されていないとき
- マイグレーション方法
  - Shade Texture を Lit Texture と同じ Texture に指定する。
