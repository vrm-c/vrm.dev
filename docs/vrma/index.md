---
date: 2024-02-05T18:30:00+09:00
url: /vrma_about/
weight: 1
---

# VRM Animation

## 「VRMアニメーション」とは？

VRMアニメーションは、VRMで定義された人型モデルのアニメーションを記述できます。

- 同じVRMアニメーションファイルが**あらゆるVRMファイルで利用できます。**
- フォーマットは**glTF**で記述され、**クロスプラットフォーム**で取り扱うことができます。
- UniVRMを通じて、**UnityでVRMアニメーションを読み書きする標準実装が提供されます。**

:::warning

**VRMアニメーションの仕様は現在draftとなっています。** 正式版がリリースされるまでの間、仕様が変更される可能性があります。

:::

## ファイルの内容

- アニメーションは**glTFのアニメーション**として記述されます。
- **VRMの各コンポーネントととアニメーション対象のglTFノードを対応付ける情報**が拡張内に定義されています。
    - `VRMC_vrm_animation` という拡張で定義されます。
    - 拡張子として `.vrma` を利用することが推奨されます。
- **Humanoidボーンアニメーション**を記述可能です。
    - glTFノードがどのHumanoidボーンに対応するかを拡張内で記述します。
    - アニメーションで定義されたボーン回転を宛先となるVRMに適切に反映するよう、回転の変換を行うことを実装に期待します。
- **表情アニメーション**を記述可能です。
    - 表情のウェイトをglTFノードの座標に変換した状態で保持します。
    - VRMで定義されたプリセット表情のほか、宛先VRMに相当する表情が定義されていればカスタム表情についても反映が可能です。
- **視線制御アニメーション**を記述可能です。
    - 視線がどの方向に向くべきかを表すglTFノードを拡張内で指定します。

## VRMアニメーションでできること

VRMアニメーションを利用することで、人型モデルに対するアニメーションを**アプリケーションやモデルをまたいで利用できます。**

例えば、以下のような使い方が想定されます。

- VRMアニメーションに対応したオーサリングツールを利用して、アニメーションを作成する
- モーションキャプチャで記録したアニメーションをさまざまなアプリケーションで利用する
- 作ったアニメーションを配信アプリや撮影アプリで再生する
- 作ったアニメーションをメタバースに持っていって再生するほか、他のユーザとシェアして一緒に使う
- VRMアニメーションファイルをゲームエンジンで読み込み、ゲーム等の開発で利用する

## VRMアニメーションが使えるアプリケーション

:::note

TODO

:::

## VRMアニメーションを利用したアプリケーションを開発する

:::note

TODO: UniVRMへのリンクを貼る

:::