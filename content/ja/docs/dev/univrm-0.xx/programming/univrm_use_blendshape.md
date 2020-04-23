---
title: "BlendShapeを操作する"
linkTitle: "実行時にBlendShapeを操作する"
date: 2018-04-16T16:30:00+09:00
url: "/dev/univrm-0.xx/programming/univrm_use_blendshape/"
weight: 3
---

## スクリプトからBlendShapeを適用する

{{< highlight cs >}}
var proxy=GetComponent<VRMBlendShapeProxy>();

// enumで呼び出し
proxy.ImmediatelySetValue(BlendShapePreset.A, 1.0f); // 0から1で指定

// stringで呼び出し
proxy.ImmediatelySetValue("A", 1.0f);
{{< / highlight >}}

## 複数のBlendShapeをまとめて適用する

たとえば

Blink_Lが

* MeshAのeye_L=100
* MeshAのeye_R=1

Blink_Rが

* MeshAのeye_L=1
* MeshAのeye_R=100

で定義されている場合に両方を有効にする意図で下記のようにすると、後からセットしたものだけが適用されてしまいます。

{{< highlight cs >}}
proxy.ImmediatelySetValue(BlendShapePreset.Blink_L, 1.0f);
proxy.ImmediatelySetValue(BlendShapePreset.Blink_R, 1.0f);
{{< / highlight >}}

この場合は、以下のようにできます。

{{< highlight cs >}}
proxy.AccumerateValue(BlendShapePreset.Blink_L, 1.0f); // すぐに適用せずにたくわえる
proxy.AccumerateValue(BlendShapePreset.Blink_R, 1.0f);
proxy.Apply(); // 蓄積した値をまとめて適用する
{{< / highlight >}}

または

{{< highlight cs >}}
proxy.SetValues(new Dictionary<BlendShapeKey, float>
{
    {new BlendShapeKey(BlendShapePreset.Blink_L), 1.0f},
    {new BlendShapeKey(BlendShapePreset.Blink_R), 1.0f},
});
{{< / highlight >}}