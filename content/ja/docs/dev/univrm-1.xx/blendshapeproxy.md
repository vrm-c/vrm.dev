---
title: BlendShapeProxyの更新
date: 2020-05-11
url: "/dev/univrm-1.xx/blendshapeproxy/"
---

## 推奨される BlendShape 周りの更新順番

https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm-1.0_draft/README.md#update-order

のように 

* Humanoid
* LookAt
* BlendShape

の順が推奨となります。

## LookAt との統合

LookAt と BlendShape の処理順の問題を軽減するため、 `VRMLookAtHead`, `VRMLookAtBoneApplyer`, `VRMLookAtBlendShapeApplyer` を `VRMBlendShapeProxy` に統合しました。

## BlendShapeClip の排他機能

例えば `fan` と `blink` が同時に適用されたときに、目がおかしくなるモデルがあります。
このとき、 `fan` に対して `blink` を無視するフラグを付けられるようにしました。

https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm-1.0_draft/README.md#blendshape-specification

* ignoreBlink
* ignoreLookAt
* ignoreMouth

の３種類があります。

## SetValue と Apply

`UniVRM-0.X` には `BlendShapeProxyy.SetValueImmediate` と `BlendSahpeProxy.SetValue + Apply` という２系統があったのですが、 `BlendShapeProxyy.SetValueImmediate` は廃止になりました。

`ignoreBlink` 等を動作させるにはすべての値を蓄積してからまとめて処理する必要があるためです。(最初は、外部にアプリケーション側が貯めて適用する設計だった)

## Apply の呼び出しタイミング

### None
ユーザーアプリケーション側で明示的に `Apply` を呼び出してください。

### Update
VRMBlendShapeProxy.Update で `Apply` が呼ばれます。
VRMBlendShapeProxy.Apply は、後ろの方で処理したいので注意が必要。

### LateUpdate
VRMBlendShapeProxy.LateUpdate で `Apply` が呼ばれます。
細かい制御が必要ないときに。
