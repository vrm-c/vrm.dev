---
date: 2024-02-05T18:30:00+09:00
url: /vrma_about/
weight: 1
---

https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_vrm_animation-1.0

# VRM Animation

## 「VRM アニメーション」とは？

VRM アニメーションは、VRM で定義された人型モデルのアニメーションを記述できます。

- 同じ VRM アニメーションファイルが**あらゆる VRM ファイルで利用できます。**
- フォーマットは**glTF**で記述され、**クロスプラットフォーム**で取り扱うことができます。
- UniVRM を通じて、**Unity で VRM アニメーションを読み書きする標準実装が提供されます。**

## ファイルの内容

- アニメーションは**glTF のアニメーション**として記述されます。
- **VRM の各コンポーネントととアニメーション対象の glTF ノードを対応付ける情報**が拡張内に定義されています。
  - `VRMC_vrm_animation` という拡張で定義されます。
  - 拡張子として `.vrma` を利用することが推奨されます。
- 🦴 **Humanoid ボーンアニメーション**を記述可能です。
  - glTF ノードがどの Humanoid ボーンに対応するかを拡張内で記述します。
  - アニメーションで定義されたボーン回転を宛先となる VRM に適切に反映するよう、回転の変換を行うことを実装に期待します。
- 😄 **表情アニメーション**を記述可能です。
  - 表情のウェイトを glTF ノードの座標に変換した状態で保持します。
  - VRM で定義されたプリセット表情のほか、宛先 VRM に相当する表情が定義されていればカスタム表情についても反映が可能です。
- 👀 **視線制御アニメーション**を記述可能です。
  - 視線がどの方向に向くべきかを表す glTF ノードを拡張内で指定します。

## VRM アニメーションでできること

VRM アニメーションを利用することで、人型モデルに対するアニメーションを**アプリケーションやモデルをまたいで利用できます。**

例えば、以下のような使い方が想定されます。

- VRM アニメーションに対応したオーサリングツールを利用して、アニメーションを作成する
- モーションキャプチャで記録したアニメーションをさまざまなアプリケーションで利用する
- 作ったアニメーションを配信アプリや撮影アプリで再生する
- 作ったアニメーションをメタバースに持っていって再生するほか、他のユーザとシェアして一緒に使う
- VRM アニメーションファイルをゲームエンジンで読み込み、ゲーム等の開発で利用する

## VRM アニメーションが使えるアプリケーション

[showcase](/showcase/?flags=2)

:::warning

VRM アニメーションの仕様を検討するにあたり、多くのアプリケーションに draft 仕様への対応にご協力いただきました。VRM アニメーション仕様は正式リリースされたばかりです。draft 版に対応したアプリケーションを利用する場合、正式版の仕様と動作が異なったり、想定通りの動作をしない場合があります。

:::

:::info

このリストにアプリケーションを追加したい場合、

[GitHub の issues](https://github.com/vrm-c/vrm.dev/issues)か
[GitHub の Pull Request](https://github.com/vrm-c/vrm.dev/pulls)を
送ってください。

名前と URL が必要です。

:::

- [UniVRM](https://github.com/vrm-c/UniVRM)
- [@pixiv/three-vrm](https://github.com/pixiv/three-vrm)
- [VRM Add-on for Blender](https://vrm-addon-for-blender.info/)
- [bvh2vrma](https://vrm-c.github.io/bvh2vrma/)
- [VRoid Hub](https://hub.vroid.com/)
- [AnimationClipToVrmaSample](https://github.com/malaybaku/AnimationClipToVrmaSample)
- [VMagicMirror](https://malaybaku.github.io/VMagicMirror/)
- [VRM Posing Desktop](https://store.steampowered.com/app/1895630/VRM_Posing_Desktop/)
- [VRM スプリングボーン調整ツール](https://napharmonia.com/vrmtool/)
- [VRMA, BVH をアップロードして VRM を動かすやつ](https://tfuru.github.io/vrma-loader-sample/)
- [VRMポーズファイラー](https://hub.vroid.com/apps/y213JgHLrqgiMUYriWnssR9iOIvoEAQOPOLedBvcmbA)

## VRM アニメーションを利用したアプリケーションを開発する

VRM-1.0 の方に、VRM-Animation サポートが実装されています。

### import

[import](/vrma/univrm-vrma/vrma-import)
と
[retarget](/vrma/univrm-vrma/retarget)
を参照してください。

### export

また、Unity 上に humanoid のアニメーションがある場合に、
コマ送りして VRM-Animation として export することが可能です。

:::warning editor 専用です
:::

[export](/vrma/univrm-vrma/vrma-export)

を参照してださい。
