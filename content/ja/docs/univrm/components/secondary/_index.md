---
title: VRMSpringBone
linkTitle: 揺れモノ
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T16:00:00Z
url: /univrm/components/secondary/
weight: 5
aliases:
- /univrm/components/univrm_secondary/
---

揺れモノ設定。

## コンポーネントのアタッチされるノード

VRMをインポートしたとき、揺れモノ関連のコンポーネントは以下のようにアタッチされます。

- VRMSpringBoneは、名前が`secondary`のノードが自動的に作成されてそこにアタッチされます。
- VRMSpringBoneColliderGroupは、エクスポート時にアタッチされていたノードに復旧されます。

{{< imgproc vrm_settings Fit "1166x726" >}}
VRMSpringBoneが見つからない場合には<code>secondary</code>ノードをご確認ください。
{{< /imgproc >}}

## VRMSpringBone

尻尾、髪の毛、衣装などで動きに合わせて揺れて欲しいものの設定です。
揺らしたいオブジェクトの一番親のGameObjectをRootBonesにセットしてください。

{{< imgproc vrm_spring_bone Fit "570x533" >}}
RootBonesに髪の毛とリボンを設定
{{< /imgproc >}}

これだけで、指定したボーンが動きに合わせて揺れます。

## [オプション] VRMSpringBoneColliderGroup (当たり判定)

揺れモノが特定の部位を貫通しないように、当たり判定を入れることができます。

{{< imgproc collider Fit "685x243" >}}
headに頭に当たり判定 (VRMSpringBoneColliderGroup) を設定
{{< /imgproc >}}

当たり判定を入れたいボーンにVRMSpringBoneColliderGroupをアタッチして、VRMSpringBoneのColliderGroupsにセットしてください。

{{< imgproc set_collider Fit "594x199" >}}
headにVRMSpringBoneColliderGroupをアタッチして、VRMSpringBoneのCollierGroupsに設定
{{< /imgproc >}}

{{< imgproc spring_gizmo Fit "191x155" >}}
動作時のGizmo。
{{< /imgproc >}}

### ひとつのVRMSpringBoneColliderGroupに複数の当たり判定を設定できます

VRMSpringBoneColliderGroupには最初からひとつの球が設定されますが、複数の球をセットすることができます。
