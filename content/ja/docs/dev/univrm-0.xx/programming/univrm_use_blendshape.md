---
title: "BlendShapeを操作する"
linkTitle: "実行時にBlendShapeを操作する"
date: 2018-04-16T16:30:00+09:00
url: "/dev/univrm-0.xx/programming/univrm_use_blendshape/"
weight: 3
---
## 環境
UniVRM v0.58.0

## 使用するメソッド

* [推奨] `SetValues`
* [非推奨] `ImmediatelySetValue`
* [上級者向け] `AccumulateValue`
* [上級者向け] `Apply`

## スクリプトから BlendShape weight を適用する

{{< highlight cs >}}
var proxy = GetComponent<VRMBlendShapeProxy>();

proxy.SetValues(new Dictionary<BlendShapeKey, float>
{
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.A), 1f}, // [0, 1] の範囲で Weight を指定
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.Joy), 1f}, // システム定義の表情は enum で指定
    {BlendShapeKey.CreateUnknown("USER_DEFINED_FACIAL"), 1f}, // ユーザ定義の表情は string で指定
});
{{< / highlight >}}

## 複数の BlendShape weight を適用する際の競合の問題について

たとえば 2 つの VRMBlendShape `Blink_L` と `Blink_R` が

VRMBlendShape `Blink_L`
* Mesh `A` の Blendshape `eye_close_L` の weight 値 `100`
* Mesh `A` の Blendshape `eye_close_R` の weight 値 `1`

VRMBlendShape `Blink_R`
* Mesh `A` の Blendshape `eye_close_L` の weight 値 `1`
* Mesh `A` の Blendshape `eye_close_R` の weight 値 `100`

で定義されているとします。
このとき両目を閉じたいモチベーションから、両方を有効にする意図で下記のように実行します。

{{< highlight cs >}}
proxy.ImmediatelySetValue(BlendShapePreset.Blink_L, 1.0f);
proxy.ImmediatelySetValue(BlendShapePreset.Blink_R, 1.0f);
{{< / highlight >}}

すると後から `ImmediateSetValue` した `Blink_R` が weight を上書きしてしまい、左目が開いてしまいます。
したがって VRM の表情制御においては下記の 2 通りのどちらかで書くことが求められます。

{{< highlight cs >}}
proxy.SetValues(new Dictionary<BlendShapeKey, float>
{
    {new BlendShapeKey(BlendShapePreset.Blink_L), 1.0f},
    {new BlendShapeKey(BlendShapePreset.Blink_R), 1.0f},
});
{{< / highlight >}}

または

{{< highlight cs >}}
proxy.AccumerateValue(BlendShapePreset.Blink_L, 1.0f); // すぐに適用せずにたくわえる
proxy.AccumerateValue(BlendShapePreset.Blink_R, 1.0f);
proxy.Apply(); // 蓄積した値をまとめて適用する
{{< / highlight >}}
