---
weight: 4
aliases: [
    "/univrm/settings/lookat_settings/",
    "/docs/univrm/settings/lookat_settings/",
    ]
tags: ["unity"]
---

# LookAt(UV)

VRMLookAtHead + VRMLookAtBlendShapeApplyer の２つのコンポーネントを組み合わせます。
`VRMLookAtBoneApplyer` を削除して、代わりに `VRMLookAtBlendShapeApplyer` をアタッチしてください。

`Inspector -> Add Component -> VRMLookAtBlendShapeApplyer`.

```{figure} /_static/images/vrm/add_vrm_lookat_blendshape.jpg
```

## TextureのUV操作による視線制御

```{figure} /_static/images/wiki/blendshape_applyer.png
```

Textureを上下左右にスライドさせることで目線を移動させる方法です。
`Unityちゃん` はこのタイプです。

## 目のマテリアルを探す

マテリアルのインスペクタの目のテクスチャの `Tiling Offset` の設定に注目してください。

```{figure} /_static/images/wiki/material_tiling_offset.png
```

`1, 1, 0, 0` になっているはずです(なっていない場合は特殊なので以降を適切に読み替えてください)。

試しに、`Offset` Xの値を増減させてみてください。目が左右に動きます。Yの値では上下に動くはずです。
目的の設定が見つかったので元に戻して次に進みます。

## BlendShapeの準備
LookUp, LookDown, LookLeft, LookRight が、目標のマテリアルのカラーマテリアルの UV を操作するようにします。
例では、Materialに `unlit/transparent cutout` を使用しています。

### LookLeftの例
`LookLeft` 選択してください。

```{figure} /_static/images/wiki/lookleft.png
```

* `Material List` タブを選択
* `+` を選択
* `eye_L1` - `_MainTex_ST` を選択
* `Tliling = 1, 1`, `Offset = 0, 0` に設定します

```{figure} /_static/images/wiki/tiling_offset_1100.png
```

* Offsetを調整してLookLeftを作ります
* `eye_R1` も同様に

```{figure} /_static/images/wiki/look_left.png
```

[© UTJ/UCL](http://unity-chan.com/)

### DegreeMapping

以下の設定で、目標物への相対角度 yaw, pitch の適用度合を調整できます。

* yaw, pitch 角の上限値 => Curve X Range Degree
* yaw, pitch が上限の時の blendShape の適用割合(0 ～ 1)。1にしてください => Curve Y Range Degree

次の３つを設定してください。

* VerticalDown
* VerticalUp
* Horizontal
