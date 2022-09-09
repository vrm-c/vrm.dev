---
linkTitle: "揺れモノ"
date: 2018-04-16T16:30:00+09:00
weight: 5
aliases: ["/univrm/components/univrm_secondary/"]
tags: ["unity"]
---

# VRMSpringBone
## 概要

揺れモノ設定に関するコンポーネント群です。

## コンポーネントが追加される場所
### VRMSpringBone

VRMのインポートの際は、自動的生成される```secondary```という名前のゲームオブジェクトに追加されます。

### VRMSpringBoneColliderGroup

VRMのインポートの際は、エクスポートの際に追加したゲームオブジェクトにそのまま追加されます。

```{figure} /_static/images/vrm/vrm_settings.png
VRMSpringBoneが見つからない場合には``secondary``という名前のゲームオブジェクトをご確認ください。
```
## VRMSpringBone

揺れモノとして尻尾・髪の毛・衣装などの動きに合わせて揺れて欲しい部位の設定です。  
揺らしたい部位の一番親のGameObjectをRootBonesに指定してください。

```{figure} /_static/images/vrm/VRMSpringBone.png
RootBonesに髪の毛とリボンの根本を指定
```

RootBonesに指定した部位の子ボーンも含めて動きに合わせて揺れます。

## [オプション] VRMSpringBoneColliderGroup

揺れモノが特定の部位を貫通しないように当たり判定を追加できます。

```{figure} /_static/images/vrm/collider.png
頭に当たり判定(VRMSpringBoneColliderGroup)を追加
```

当たり判定を入れたいボーンにVRMSpringBoneColliderGroupを追加した後にVRMSpringBoneのColliderGroupsで指定してください。

```{figure} /_static/images/vrm/set_collider.png
headにVRMSpringBoneColliderGroupを追加して、VRMSpringBoneのCollierGroupsに指定
```

```{figure} /_static/images/vrm/spring_gizmo.png
動作時のGizmo。
```

## 設定したVRMSpringBoneが無い

VRMSpringBoneはインポート時に```secondary```ノードに追加されます。エクスポート時と違う場所に現れるのでご注意ください。

## 複雑な当たり判定の設定

複雑な当たり判定の設定をする際は、追加した１つのVRMSpringBoneColliderGroupで複数の球を設定します。

## 移動する際の揺れ防止

通常のVRMSpringBoneはワールド原点を基準に計算しています。VRMSpringBoneのCenterにゲームオブジェクトを指定すると揺れモノの基準点を変更できます。
例えば、歩行の際に移動する親ゲームオブジェクトを指定すると揺れモノの不要な揺れが防止できます。
