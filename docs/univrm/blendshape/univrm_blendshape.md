---
linkTitle: "BlendShape"
date: 2018-04-16T16:30:00+09:00
weight: 1
aliases: ["/univrm/components/univrm_blendshape/"]
tags: ["unity"]
---

# ブレンドシェイプの設定

UniVRM v0.45で導入された新機能は

* [設定画面](/univrm/blendshape/blendshape_setup)
* [BlendShapeの状態をベイクする](/univrm/blendshape/univrm_bake_blendshape)

をご覧ください。

## VRMBlendShapeProxy

![実行時のVRMBlendShapeProxyのインスペクタ。Editorをプレイ状態にすると表示されます](/images/vrm/VRMBlendShapeProxy.png)

使い方は、

* BlendShapeAvatarのインスペクタで設定する(Editor)
* BlendShapeClipの値を０~１に変更する(実行時)

となっています。

## BlendShapeAvatar

このアセットのインスペクタで表情設定を作成します。

![これをダブルクリックする](/images/vrm/VRMBlendShapeProxyEditor.png)

か

![これを選択状態にする](/images/vrm/BlendShapeAvatarAsset.png)

![BlendShapeEditorのインスペクタ](/images/vrm/BlendShapeAvatarEditor.png)

作りたい表情の名前を選択して表示を切り替えます。
以下、Funを選択した例です。

![mouth_smileとeye_smileとeyeblow_smileを100にする](/images/vrm/BlendShapeClip.png)

画像のように眉毛と目と口のBlendShapeがわかれているBlendShapeをグループ化して名前とプリセットを指定することができます。

Sliderを変更してBlendShapeを作った後はApplyを押して値を記録してください。

## BlendShapeのプリセット

![Presetを選択する](/images/vrm/BlendShape_Preset.png)

BlendShapeClipに対して事前定義された名前です。
以下のものがあります。

### NEUTRAL
標準の表情を指定します。
待機状態で使うことを想定しています。

### A, I, U, E, O
リップシンクの``あ・い・う・え・お``の音声に対応します。

### Blink
まばたきです。

### Blink_L, Blink_R
片目だけつぶる動作です。

### Joy, Angry, Sorrow, Fun
喜怒哀楽です。

### LookUp, LookDown, LookLeft, LookRight
目線がモーフで制御されているタイプのモデルで使います。

### Unknown
事前定義に無い表情などを作るときに指定します。

## BlendShapeProxyの値を変更する(実行時)

![Presetを使う](/images/vrm/VRMBlendShapeProxyRuntime.png)

インスペクタから操作できます。

## [オプション]表情を追加する

![ボタンを押します](/images/vrm/VRMBlendShapeProxyRuntime.png)

保存ファイルを決めます。
一番後ろのボタンを選択して名前を入力して設定を作成してください。

![ボタンを押します](/images/vrm/BlendShapeClipOption.png)

コードからは以下のように呼び出せます。

```csharp
// unknownなのでstringで呼び出し
proxy.ImmediatelySetValue("びっくり", 1.0f); // 0から1で指定
```

## [オプション]マテリアルの色をモーフする

![Materialモーフの設定](/images/vrm/BlendShapeClipMaterial.png)

