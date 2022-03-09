---
weight: 4
tags: ["unity", "fbx"]
---

# BlendShape の法線を確認しよう

最近のバージョンの Unity（Unity 2018~）では、 fbx を import したときに blendshape 法線が自動で再計算される挙動になっていて blendshape の見た目がおかしくなることがあります。

```{admonition} 詳細
:class: note

BlendShape の法線が (0, 0, 0) ならば、法線が変化しません。
これに、計算された法線が設定されて意図しない変化をするようです。
ベースになるメッシュの法線が加工されている場合、
ミラーリングで左右が分かれている場合の境界などで顕著です。
```


## MToonの法線デバッグ表示で法線を確認する

fbx の `Materials` タブの `Extract Materials...` を実行してマテリアルを取り出します。

すべてのマテリアルを選択します。

マテリアルの種類を `VRM/MToon` に変更します。

```{admonition} 法線確認
:class: note

法線確認のために仮に MToon 化するだけなので、テクスチャ等の設定は不要です。
```


MToon の `Options - Debugging Options - Visualize` を `Normal` に変更します。

```{figure} /_static/images/vrm/mtoon_normal.gif
debug normal
```

SkinnedMeshRenderer を選択します。

BlendShape のスライダーを動かして法線を確認します。

```{figure} /_static/images/vrm/broken_normal.jpg
debug normal
```

* 鼻先
* 下唇

の法線が顕著に乱れています。

```{admonition} モデル情報
:class: note

* vroid さんの vrm を blender に import
* blender から fbx export
* unity に import

したものです。
```


## BlendShape の法線をなおす

上記の方法で BlendShape がおかしいことが分かった場合に修復する方法。

fbx の `Model` タブを選択。

`Legacy Blend Shape Normals` をチェックして Apply。

```{figure} /_static/images/vrm/legacy_normal_fixed.jpg
fixed normal
```

BlendShape がなおっていることを確認します。

```{admonition} 修正前との違い
:class: note

鼻先、下唇に加えて、舌が全然違う法線になってます。
```
