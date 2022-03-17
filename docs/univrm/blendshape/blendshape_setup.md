---
weight: 2
aliases: ["/univrm/settings/blendshape_setup/"]
tags: ["unity"]
---

# BlendShapeのセットアップ(v0.45)

## BlendShape関連のアセット
VRMをImportすると、`モデル名から拡張子を除いた名前 + BlendShapes` フォルダにPresetを表すBlendShapeClipが作成されます。

```{figure} /_static/images/wiki/blendshapeclip_assets.png
```

BlendShapeAvatarアセット。

```{figure} /_static/images/wiki/blendshapeavatar.png
```


## 設定画面
アセットには以下の設定画面があります。

### BlendShapeAvatarアセットのインスペクタ

#### Editorタブ

BlendShapeClip選択・設定作成

```{figure} /_static/images/wiki/select_blendshapeavatar.png
```

#### Listタブ(v0.45から)

BlendShapeClipのリスト

```{figure} /_static/images/wiki/list.png
```

### BlendShapeClipアセットのインスペクタ。

#### BlendShapeタブ

設定作成します。

```{figure} /_static/images/wiki/alicia_binary.png
```

#### BlendShape Listタブ

BlendShapeタブで作成した値を見ることが出来ます。
あまり使わない。

```{figure} /_static/images/wiki/blendshape_angry.png
```

#### Material Listタブ

`BlendShapeによる`[LookAt](/univrm/lookat/lookat_blendshape)(後述)や、BlendShapeで色を変える設定を作成することができます。

```{figure} /_static/images/wiki/material_color.png
```

## 各BlendShapeClipの設定

各BlendShapeClipに対して顔を作ります(顔以外も可)。

### 1. 対象のBlendShapeClipを選ぶ

BlendShapeAvatarのインスペクタから選択する

```{figure} /_static/images/wiki/select_blendshapeavatar.png
```

アセットのBlendShapeClipを直接選択する

```{figure} /_static/images/wiki/select_blendshapeclip.png
```

### 2. スライダを操作して顔を作る

モデルに存在するSKinnedMeshRendererの名前から、
目的のBlendShapeのスライダーを探して値を設定します。
変更値は即座に反映されます。
`Apply`ボタン不要になりました(v0.45)。

### 3. Previewの操作

`Preview Weight Slider` で0~1の効き具合をテストできます。

`左ドラッグ・右ドラッグ`向きを変えられます。

`中ドラッグ`移動できます。

### 中間値を許可しない設定(v0.45)

```{figure} /_static/images/wiki/alicia_binary.png
```

スクリーンショットのような記号的表現でBlendShapeの中間値を表示したくない場合を想定して、二値化フラグを追加しました。四捨五入(round)で実装しています。

ロードするアプリケーションがv0.45以降になっていると有効になります。

```{figure} /_static/images/wiki/binary.png
```
