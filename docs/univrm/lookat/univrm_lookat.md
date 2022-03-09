---
date: 2018-04-16T16:30:00+09:00
weight: 1
aliases: ["/univrm/components/univrm_lookat/"]
tags: ["unity"]
---

# LookAt

VRMでは頭から目標(注視点)への相対的な回転(Yaw, Pitch)を得て、
目に適用できます。

* VRMLookAtHead + VRMLookAtBoneApplyer または VRMLookAtBlendShapeApplyer の２つのコンポーネントで設定します。

## LookAtの種類

注視点への Yaw, Pitch 角を適用する方法が以下の３種類あります。
モデルに応じて選択してください。

### Bone

[eye ボーンが回転するタイプ](/univrm/lookat/lookat_bone)

### BlendShape

[BlendShapeの頂点移動で制御するタイプ](/univrm/lookat/lookat_blendshape)

### TextureUV

[目のテクスチャの `UV Offset` で制御するタイプ](/univrm/lookat/lookat_uv)

## VRMLookAtHead

```{figure} /_static/images/vrm/VRMLookAtHead.png
VRMLookAtHead
```

このコンポーネントは頭から見たTargetの方向を計算します。

### Target

> Application設定 です。モデルのセットアップには使いません

注視する対象物です。目を向けたい場所にあるオブジェクトをセットしてください。
カメラをセットすればカメラ目線になります。

## 視線計算の基準位置

VRMFirstPerson の FirstPersonOffset で Head ボーンからの相対的な基準位置を設定できます。

```{figure} /_static/images/vrm/firstperson.png
```
