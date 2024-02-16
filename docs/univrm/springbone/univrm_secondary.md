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

## VRMSpringBone

尻尾・髪の毛・衣装など揺れモノとして動きに合わせて揺れて欲しい部位の設定です。  
揺らしたい部位の一番親のボーンをRootBonesに指定してください。  
そうすることでRootBonesに指定した部位の子ボーンも動きに合わせて揺れます。

![RootBonesに髪の毛とリボンの根本を指定](/images/vrm/VRMSpringBone.png)

### 移動する際の揺れ防止
VRMSpringBoneは通常ワールド原点を基準に揺れ計算をします。  
一方で、VRMSpringBoneのCenterを活用すると揺れ計算の基準点をボーンなどに変更できます。  
以下のような場合にCenterの活用が効果的です。
- モデルが歩行などによって平行移動した場合にSpringBoneが揺れ過ぎてしまう
- 頭を動かした場合のみに髪の毛や髪飾りなど頭についているSpringBoneが動いてほしい

なお[VRM 1.0ではCenterに設定出来るノードの制約が決まりました](https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_springBone-1.0/README.ja.md)が、VRM 0.Xの段階ではCenterに設定出来るノードの制約が決まっていませんでした。  
> Centerノードは、そのSpringChainの0番目のJointもしくは、その祖先nodeである必要があります。 また、Centerノードには、他のSpringChainのJointノードおよびその子孫を指定することはできません。

## VRMSpringBoneColliderGroup

揺れモノが特定の部位を貫通しないようにボーンに当たり判定を追加できます。  
1つのボーンに追加したVRMSpringBoneColliderGroupで複数の当たり判定を設定することが可能です。

![頭に当たり判定(VRMSpringBoneColliderGroup)を追加](/images/vrm/collider.png)

VRMSpringBoneColliderGroupを追加した後はVRMSpringBoneのColliderGroupsに登録してください。

![headにVRMSpringBoneColliderGroupを追加して、VRMSpringBoneのCollierGroupsに指定](/images/vrm/set_collider.png)

![動作時のGizmo](/images/vrm/spring_gizmo.png)

## コンポーネントが追加される場所
### VRMSpringBone

VRMのインポートの際は、自動的生成される```secondary```という名前のゲームオブジェクトにVRMSpringBoneが追加されます。  
エクスポートの際と異なっていてVRMSpringBoneが見つからないことがあるのでご注意ください。

### VRMSpringBoneColliderGroup

VRMのインポートの際は、エクスポートの際に追加したゲームオブジェクトにVRMSpringBoneColliderGroupがそのまま追加されます。

![figure](/images/vrm/vrm_settings.png)
