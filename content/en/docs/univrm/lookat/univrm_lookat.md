---
title: "Eye Control"
date: 2018-04-16T16:30:00+09:00
weight: 1
aliases: ["/en/univrm/components/univrm_lookat/"]
---

VRMでは頭から目標(注視点)への相対的な回転(Yaw, Pitch)を得て、
目に適用できます。

* VRMLookAtHead + VRMLookAtBoneApplyer または VRMLookAtBlendShapeApplyer の２つのコンポーネントで設定します。

## LookAtの種類

注視点への Yaw, Pitch 角を適用する方法が以下の３種類あります。
モデルに応じて選択してください。

### Bone

[eye ボーンが回転するタイプ]({{< relref "lookat_bone.md" >}})

### BlendShape

[BlendShapeの頂点移動で制御するタイプ]({{< relref "lookat_blendshape.md" >}})

### TextureUV

[目のテクスチャの `UV Offset` で制御するタイプ]({{< relref "lookat_uv.md" >}})

## VRMLookAtHead

|{{< img src="images/vrm/VRMLookAtHead.png" >}}|
|-----|
|VRMLookAtHead|

This component calculates the direction from the model's head to the target.

### Target
The target to be tracked by the model's eyes. If a camera is set as Target, the model will always look at the camera.

## 視線計算の基準位置

VRMFirstPerson の FirstPersonOffset で Head ボーンからの相対的な基準位置を設定できます。

> eye bone を使う場合は目の間が推定できるのですがblendShape を使う場合には位置がわからないので、明示的に設定するようになっています。
