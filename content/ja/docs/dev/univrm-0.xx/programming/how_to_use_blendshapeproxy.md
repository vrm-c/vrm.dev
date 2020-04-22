---
Title: BlendShapeProxyの使い方
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

## AccumerateValue + Apply
下記のSetValuesを推奨しています。

## SetValues
BlendShape合成器が必要に応じ呼び出すことを想定しています。
