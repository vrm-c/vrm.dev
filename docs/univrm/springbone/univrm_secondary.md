---
linkTitle: "揺れモノ"
date: 2018-04-16T16:30:00+09:00
weight: 5
aliases: ["/univrm/components/univrm_secondary/"]
tags: ["unity"]
---

# VRMSpringBone

揺れモノ設定。

# コンポーネントのアタッチされるノード
VRMをインポートしたとき、揺れモノ関連のコンポーネントは以下のようにアタッチされます。

* VRMSpringBoneは、名前が```secondary```のノードが自動的に作成されてそこにアタッチされます。
* VRMSpringBoneColliderGroupは、エクスポート時にアタッチされていたノードに復旧されます。

```{figure} /_static/images/vrm/vrm_settings.png
VRMSpringBoneが見つからない場合には``secondary``ノードをご確認ください。
```

# VRMSpringBone
尻尾、髪の毛、衣装などで動きに合わせて揺れて欲しいものの設定です。
揺らしたいオブジェクトの一番親のGameObjectをRootBonesにセットしてください。

```{figure} /_static/images/vrm/VRMSpringBone.png
RootBonesに髪の毛とリボンを設定
```

これだけで、指定したボーンが動きに合わせて揺れます。

# [オプション]VRMSpringBoneColliderGroup(当たり判定)
揺れモノが特定の部位を貫通しないように、当たり判定を入れることができます。

```{figure} /_static/images/vrm/collider.png
headに頭に当たり判定(VRMSpringBoneColliderGroup)を設定
```

当たり判定を入れたいボーンにVRMSpringBoneColliderGroupをアタッチして、VRMSpringBoneのColliderGroupsにセットしてください。

```{figure} /_static/images/vrm/set_collider.png
headにVRMSpringBoneColliderGroupをアタッチして、VRMSpringBoneのCollierGroupsに設定
```

```{figure} /_static/images/vrm/spring_gizmo.png
動作時のGizmo。
```

## ひとつのVRMSpringBoneColliderGroupに複数の当たり判定を設定できます
VRMSpringBoneColliderGroupには最初からひとつの球が設定されますが、複数の球をセットすることができます。

# 設定したVRMSpringBoneが居なくなった
VRMSpringBoneはインポート時に```secondary```ノードにアタッチされます。
エクスポート時と違う場所に現れるのでご注意ください。

[VRMSpringBone](/univrm/springbone/univrm_secondary#コンポーネントのアタッチされるノード)
