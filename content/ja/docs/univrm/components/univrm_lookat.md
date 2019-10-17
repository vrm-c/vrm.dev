---
title: "視線制御"
date: 2018-04-16T16:30:00+09:00
url: /univrm/components/univrm_lookat/
weight: 4
---

## VRMLookAtHead

|{{< img src="images/vrm/VRMLookAtHead.png" >}}|
|-----|
|VRMLookAtHead|

このコンポーネントは頭から見たTargetの方向を計算します。

### Target
注視する対象物です。目を向けたい場所にあるオブジェクトをセットしてください。
カメラをセットすればカメラ目線になります。

## ボーン制御の視線: VRMLookAtBoneApplyer

|{{< img src="images/vrm/VRMLookAtBoneApplyer.png" >}}|
|-----|
|VRMLookAtBoneApplyer|

VRMLookAtHeadの計算した視線方向のパラメーターをEyeBoneに適用します。

### DegreeMapping

EyeBoneに回転を適用する際に角度を調節します。

* HorizontalOuter: 横方向外向きの角度制限です
* HorizontalInner: 横方向内向きの角度制限です
* VerticalDown: 縦方向下向きの角度制限です
* VerticalUp: 縦方向上向きの角度制限です

## モーフ制御の視線: VRMLookAtBlendShapeApplyer

BlendShapeで視線制御するモデル用のコンポーネントです。
VRMLookAtBoneApplyerを削除して、代わりにこれをアタッチしてください。
VRMLookAtBlendShapeに関する設定方法は[こちら](../../../docs/univrm/settings/lookat_settings)を参照してください。
