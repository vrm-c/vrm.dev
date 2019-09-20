---
title: ブレンドシェイプの設定
linkTitle: ブレンドシェイプ
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T16:00:00Z
url: /univrm/components/blendshape/
weight: 2
aliases:
- /univrm/components/univrm_blendshape/
---

UniVRM v0.45で導入された新機能は[こちら](https://github.com/vrm-c/UniVRM/wiki/BlendShapeのセットアップ)をご覧ください。

## VRMBlendShapeProxy

{{< imgproc vrm_blend_shape_proxy Fit "540x359" >}}
実行時のVRMBlendShapeProxyのインスペクタ。Editorをプレイ状態にすると表示されます
{{< /imgproc >}}

使い方は、

- BlendShapeAvatarのインスペクタで設定する (Editor)
- BlendShapeClipの値を０~１に変更する (実行時)

となっています。

## BlendShapeAvatar

このアセットのインスペクタで表情設定を作成します。

{{< imgproc vrm_blend_shape_proxy_editor Fit "259x53" >}}
これをダブルクリックする
{{< /imgproc >}}

か

{{< imgproc blend_shape_avatar_asset Fit "213x602" >}}
これを選択状態にする
{{< /imgproc >}}

{{< imgproc blend_shape_avatar_editor Fit "273x428" >}}
BlendShapeEditorのインスペクタ
{{< /imgproc >}}

作りたい表情の名前を選択して表示を切り替えます。以下、Funを選択した例です。

{{< imgproc blend_shape_clip Fit "536x884" >}}
mouth_smileとeye_smileとeyeblow_smileを100にする
{{< /imgproc >}}

画像のように眉毛と目と口のBlendShapeがわかれているBlendShapeをグループ化して名前とプリセットを指定することができます。

Sliderを変更してBlendShapeを作った後はApplyを押して値を記録してください。

## BlendShapeのプリセット

{{< imgproc blend_shape_preset Fit "552x507" >}}
Presetを選択する
{{< /imgproc >}}

BlendShapeClipに対して事前定義された名前です。以下のものがあります。

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

{{< imgproc vrm_blend_shape_proxy_runtime Fit "412x86" >}}
Presetを使う
{{< /imgproc >}}

インスペクタから操作できます。


## [オプション]表情を追加する

{{< imgproc vrm_blend_shape_proxy_runtime Fit "412x86" >}}
ボタンを押します
{{< /imgproc >}}

保存ファイルを決めます。
一番後ろのボタンを選択して名前を入力して設定を作成してください。

{{< imgproc blend_shape_clip_option Fit "424x301" >}}
ボタンを押します
{{< /imgproc >}}

コードからは以下のように呼び出せます。

```cs
// unknownなのでstringで呼び出し
proxy.SetValue("びっくり", 1.0f); // 0から1で指定
```

## [オプション]マテリアルの色をモーフする

{{< imgproc blend_shape_clip_material Fit "551x453" >}}
Materialモーフの設定
{{< /imgproc >}}
