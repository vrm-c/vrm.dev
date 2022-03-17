---
linkTitle: "MToonの設定"
date: 2018-04-16T16:30:00+09:00
weight: 3
aliases: ["/univrm/shaders/mtoon/", "/docs/univrm/shaders/mtoon/"]
tags: ["unity"]
---

# MToon

[MToonの使い方](https://www.slideshare.net/VirtualCast/vrm-mtoon)

## MToon について
MToon は日本のアニメ的表現をすることを目標としています。
主色 (Lit Color) と陰色 (Shade Color) の 2 色を、Lighting パラメータや光源環境に応じて混合することでそれを実現します。

```{figure} /_static/images/vrm/mtoon_about.png
:name: alicia MToon

MToon を適用したニコニ立体ちゃん
```

## 手早く設定したい人向け
### 共通項目
- 目的のマテリアルを選択し、シェーダを `VRM/MToon` に変更
- `Color->Lit Color, Alpha` と `Color->Shade Color` に同じテクスチャを設定
- `Color->Lit Color, Alpha` は白色 `Color->Shade Color` は好きな陰色を設定
- `Shading->Toony` は好きな値。主色と影色をパキッとさせたいときは `1`
- `Rim->Additive` は `Spheremap` や `MatCap` と同等のテクスチャを設定
- `Outline->Width->Mode` は輪郭線を必要とするなら `WorldCoordinates` で、しないなら `None`
- `Outline->Width->Width` は 見た目上好きな値

### 普通のマテリアル
- `Shading Shift` は `0`
- `Shading Toony->Shadow Receive Multiplier` は `1`

### キャラクタの顔など、影があまりついてほしくないマテリアル
- `Shading Shift` はマイナスの値
- `Shading Toony->Shadow Receive Multiplier` は `0`

# 設定項目
## 準備
目的のマテリアルを選択し、シェーダを `VRM/MToon` に変更します。

```{figure} /_static/images/vrm/set_mtoon.png
:name: select MToon

Material の Shader を VRM/MToon に変更.
```

## Rendering

```{figure} /_static/images/vrm/mtoon_inspector_rendering.png
:name: MToon Rendering

Rendering Inspector に含まれる項目.
```

Rendering 項目では主色と影色、および描画方法を設定します。

### Rendering Type
マテリアルが不透明か半透明かどうかを設定します。

- Opaque
    - 不透明です。基本的には Opaque を設定することを推奨します。
- Cutout
    - 不透明ですが `Color->Lit Color, Alpha` のアルファ値情報を参照して `Color->Alpha->Cutoff` の値より小さな箇所の描画をスキップします。
- Transparent
    - 半透明です。`Color->Lit Color, Alpha` のアルファ値どおりの不透明度になります。
    - デメリットとして輪郭線描画は正しく行われません。

### Cull Mode
ポリゴンのどちら側の面を描画するかを設定します。

- Back
    - 表側を描画します。基本的にはこの Back を選択します。
- Front
    - 裏側を描画します。
- None
    - 両面を描画します。

### Alpha
`Rendering Type` が `Cutout` であるときだけ設定する必要があります。

- Cutoff (`Color->Alpha`)
    - 描画するしないのしきい値を設定します。

## Color
描画色を設定します。
テクスチャと色は乗算されます。
光が当たる主色は `Lit Color, Alpha` に、光が当たらない陰色は `Shade Color` に設定します。
また `Lit Color, Alpha` のアルファ値には不透明度情報を設定します。

## Lighting
### Shading Shift
光の当たり方に対して、主色と陰色のしきい値を調整します。
`0` のとき普通のライティングになります。
マイナス値にするとアニメ的な、主色の範囲が広いライティングになります。
マイナス値のときはセルフシャドウを無効化する必要があるため、表示された警告に従い `Shadow Receive Multiplier` を `0` に設定する必要があります。

### Shading Toony
`Shading Shift` の項目における主色と陰色のしきい値付近を滑らかに変化させるか否かを設定します。
`0` のときは通常の Lambert モデルのような写実寄りの滑らかさになります。
`1` のときはしきい値ではっきり主色と陰色が変化するアニメ調のライティングになります。

### Shadow Receive Multiplier
セルフシャドウや落影の影響度を設定します。
`0` のときは影響を受けません。
`1` のときは影響を受けます。

### LightColor Attenuation
光源の色の影響度を設定します。
`0` のときは光源の色の影響を受けます。
`1` のときは光源の色の影響を無効化し、光源の色の輝度だけを反映します。

### Rim Additive
カメラと法線の関係による追加光源を表現します。
一般にはスフィアマップや MatCap と呼ばれます。

### Emission
光源環境によらず一定な色を設定します。

### Normal Map
法線マップを設定します。
右側の値は法線マップの強さを設定します。

## Outline
輪郭線を設定します。

### Width Mode
- None
    - 輪郭線を描画しません
- WorldCoordinates
    - 世界に対して一定の幅の輪郭線を描画します
- ScreenCoordinates
    - スクリーンに対して一定の幅の輪郭線を描画します

### Width
輪郭線の幅を設定します。
`Width Mode` が `WorldCoordinates` のとき単位はメートルです。

### Color Mode
- FixedColor
    - 固定色で描画します
- MixedLighting
    - ライティングの影響を乗算します

### Color
輪郭線の色を設定します。

### Color Lighting Mix
`Color Mode` が `MixedLighting` のとき、その乗算係数を設定します。
