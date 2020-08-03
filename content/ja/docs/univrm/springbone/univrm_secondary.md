---
title: "VRMSpringBone"
linkTitle: "揺れモノ"
date: 2018-04-16T16:30:00+09:00
weight: 5
url: "univrm/springbone/univrm_secondary/"
---

揺れモノ設定。

# コンポーネントのアタッチされるノード
VRMをインポートしたとき、揺れモノ関連のコンポーネントは以下のようにアタッチされます。

* VRMSpringBoneは、名前が```secondary```のノードが自動的に作成されてそこにアタッチされます。
* VRMSpringBoneColliderGroupは、エクスポート時にアタッチされていたノードに復旧されます。

|{{< img src="images/vrm/vrm_settings.png">}}|
|-----|
|VRMSpringBoneが見つからない場合には``secondary``ノードをご確認ください。|

# VRMSpringBone
尻尾、髪の毛、衣装などで動きに合わせて揺れて欲しいものの設定です。
揺らしたいオブジェクトの一番親のGameObjectをRootBonesにセットしてください。

|{{< img src="images/vrm/VRMSpringBone.png" alt="lookat" >}}|
|-----|
|RootBonesに髪の毛とリボンを設定|

これだけで、指定したボーンが動きに合わせて揺れます。

# [オプション]VRMSpringBoneColliderGroup(当たり判定)
揺れモノが特定の部位を貫通しないように、当たり判定を入れることができます。

|{{< img src="images/vrm/collider.png" alt="collider" >}}|
|-----|
|headに頭に当たり判定(VRMSpringBoneColliderGroup)を設定|

当たり判定を入れたいボーンにVRMSpringBoneColliderGroupをアタッチして、VRMSpringBoneのColliderGroupsにセットしてください。

|{{< img src="images/vrm/set_collider.png" alt="set_collider" >}}|
|-----|
|headにVRMSpringBoneColliderGroupをアタッチして、VRMSpringBoneのCollierGroupsに設定|

|{{< img src="images/vrm/spring_gizmo.png" alt="gizmo" >}}|
|-----|
|動作時のGizmo。|

## ひとつのVRMSpringBoneColliderGroupに複数の当たり判定を設定できます
VRMSpringBoneColliderGroupには最初からひとつの球が設定されますが、複数の球をセットすることができます。
