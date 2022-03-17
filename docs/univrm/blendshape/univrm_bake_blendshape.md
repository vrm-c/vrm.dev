---
date: 2020-07-27T19:28:41+09:00
tags: ["unity"]
aliases: ["/univrm/univrm_bake_blendshape/"]
weight: 3
---

# エクスポート時にBlendShapeの状態をベイクする

UniVRM ではエクスポートするときに、 `SkinnedMeshRenderer` のスライダーを上げておくとその状態を基本状態にすることができます。

```{figure} /_static/images/vrm/blendshape_value.jpg
```

`Pose Freeze` のチェックボックスを有効にする必要があります。

```{figure} /_static/images/vrm/check_freeze.jpg
```

エクスポートすると・・・

```{figure} /_static/images/vrm/bake_blink.gif
```

基本状態(blendShape が 0 の状態)が変更されます。
