---
title: LookAtの設定
---

## 目ボーンによる視線制御

[視線制御](../../../../univrm/components/univrm_lookat)
を参照してください。

## BlendShapeによる視線制御
[視線制御](../../../../univrm/components/univrm_lookat)
を参照してください。

## TextureのUV操作による視線制御
Textureを上下左右にスライドさせることで目線を移動させる方法です。
`Unityちゃん` がこのタイプです。

### 目のマテリアルを探す

マテリアルのインスペクタの目のテクスチャの `Tiling Offset` の設定に注目してください。

![image](/images/wiki/material_tiling_offset.png)

`1, 1, 0, 0` になっているはずです(なっていない場合は特殊なので以降を適切に読み替えてください・・・)。

試しに、`Offset` Xの値を増減させてみてください。目が左右に動きます。Yの値では上下に動くはずです。
目的の設定が見つかったので `0` に戻して次に進みます。

### LookUp, LookDown, LookLeft, LookRightを設定する
例では、Materialに `unlit/transparent cutout` を使用しています。

#### LookLeftの例
`LookLeft` アセットを選択してください。

![image](/images/wiki/lookleft.png)

* `Material List` タブを選択
* `+` を選択
* `eye_L1` - `_MainTex_ST` を選択
* `Tliling = 1, 1`, `Offset = 0, 0` に設定します

![image](/images/wiki/tiling_offset_1100.png)

* Offsetを調整してLookLeftを作ります
* `eye_R1` も同様に

![image](/images/wiki/look_left.png)

[© UTJ/UCL](http://unity-chan.com/)

### VRMLookAtBlendShapeApplyerをセットする

* VRMLookAtBoneApplyerを削除します
* VRMLookAtBlendShapeApplyerを追加します

![image](/images/wiki/blendshape_applyer.png)

初期設定では、目標物が頭部から見て90度の角度になったときにBlendShpaeを1.0にセットするという意味になります。90以上は1.0にクランプされます。
90を減らすことでより少ない角度で大きく瞳を動かすことが出来ます。

以上で完了です。
