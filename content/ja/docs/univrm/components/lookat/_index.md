---
title: 視線制御
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T16:00:00Z
url: /univrm/components/lookat/
weight: 4
aliases:
- /univrm/components/univrm_lookat/
---

## VRMLookAtHead

{{< imgproc vrm_look_at_head Fit "556x205" >}}
VRMLookAtHead
{{< /imgproc >}}

このコンポーネントは頭から見たTargetの方向を計算します。

### Target
注視する対象物です。目を向けたい場所にあるオブジェクトをセットしてください。
カメラをセットすればカメラ目線になります。

## ボーン制御の視線: VRMLookAtBoneApplyer

{{< imgproc vrm_look_at_bone_applyer Fit "546x473" >}}
VRMLookAtBoneApplyer
{{< /imgproc >}}

VRMLookAtHeadの計算した視線方向のパラメーターをEyeBoneに適用します。

### DegreeMapping

EyeBoneに回転を適用する際に角度を調節します。

- HorizontalOuter: 横方向外向きの角度制限です
- HorizontalInner: 横方向内向きの角度制限です
- VerticalDown: 縦方向下向きの角度制限です
- VerticalUp: 縦方向上向きの角度制限です

## モーフ制御の視線: VRMLookAtBlendShapeApplyer

BlendShapeで視線制御するモデル用のコンポーネントです。VRMLookAtBoneApplyerを削除して、代わりにこれをアタッチしてください。VRMLookAtBlendShapeに関する設定方法は[こちら](https://github.com/vrm-c/UniVRM/wiki/LookAtの設定)を参照してください。
