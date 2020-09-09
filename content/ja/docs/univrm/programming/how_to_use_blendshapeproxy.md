---
title: BlendShapeProxyの使い方
aliases: ["/dev/univrm-0.xx/programming/how_to_use_blendshapeproxy/"]
---

WIP

## 何故、複数のSetterがあるのか

* LipSync
* 瞬き
* 視線制御(BlendShapeで視線を動かすタイプのモデル)
* プログラムによる喜怒哀楽

上記のような複数のBlendShapeが別々のコンポーネントから設定された場合に、
BlendShape同士が競合することがわかりました。
後で設定した値で上書きされて希望のBlendShapeが適用されないという状態になります。
これを解決するために、一か所で中央集権的に制御する必要があります。

合成したり排他制御した、BlendShapeClipの集合のスナップショットをまとめて適用することを想定して `SetValues`

## ImmediatelySetValue

簡単なテストプログラムでの利用を想定しています。

例：

```cs
var proxy = GetComponent<VRMBlendShapeProxy>();

proxy.ImmediatelySetValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.A), 1.0f);
```

## AccumulateValue + Apply

例：

```cs
var proxy = GetComponent<VRMBlendShapeProxy>();

proxy.AccumulateValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_L), 1.0f); // すぐに適用せずにたくわえる
proxy.AccumulateValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_R), 1.0f);
proxy.Apply(); // 蓄積した値をまとめて適用する
```

下記のSetValuesを推奨しています。

## SetValues

BlendShape合成器が必要に応じ呼び出すことを想定しています。

例：

```cs
var proxy = GetComponent<VRMBlendShapeProxy>();

proxy.SetValues(new Dictionary<BlendShapeKey, float>
{
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_L), 1.0f},
    {BlendShapeKey.CreateFromPreset(BlendShapePreset.Blink_R), 1.0f},
});
```
