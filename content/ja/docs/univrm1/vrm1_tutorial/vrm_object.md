---
title: VrmObject と Extract
weight: 2
---

## vrm-1.0 の subasset を extract する

vrm-1.0 を import した状態では、付属するアセット(texture, material, meshなど)は fbx と同様に subasset になります。

{{< img width=400 src="images/vrm10/tutorial/vrm1_subasset.jpg" >}}

この状態では、subasset の中身を変更することができません。
extract により subasset を個別の Asset に展開します。

### Texture/Material の Extract

{{< img width=600 src="images/vrm10/tutorial/vrm_extract_material_before.jpg" >}}

vrm の subasset の texture と material を外部アセットに展開します。

{{< img width=600 src="images/vrm10/tutorial/vrm_extract_material.jpg" >}}
{{< img width=400 src="images/vrm10/tutorial/vrm_extract_material_assets.jpg" >}}

### VRM 関連の Extract

{{< img width=600 src="images/vrm10/tutorial/vrm_extract_vrm_before.jpg" >}}

vrm の subasset の vrmobject と expression を外部アセットに展開します。

{{< img width=600 src="images/vrm10/tutorial/vrm_extract_vrm.jpg" >}}

## VrmObject

VRM モデルには `VrmController` コンポーネントがアタッチされており、
`VrmController` は `VrmObject` を参照します。

{{< img width=600 src="images/vrm10/tutorial/vrm_controller.jpg" >}}


VrmObject は以下の４つの設定を持っています。
これらの変更は、シーンではなくアセットに対する変更になります。

{{< img width=600 src="images/vrm10/tutorial/vrm_object.jpg" >}}

## [Meta 画面]({{< relref "meta.md" >}})

{{< img width=400 src="images/vrm10/tutorial/vrm_meta_settings.jpg" >}}

## [Expression 画面]({{< relref "expression.md" >}})

{{< img width=400 src="images/vrm10/tutorial/vrm_expression_settings.jpg" >}}

## [LookAt 画面]({{< relref "lookat.md" >}})

{{< img width=400 src="images/vrm10/tutorial/vrm_lookat_settings.jpg" >}}

## [FirstPerson 画面]({{< relref "firstperson.md" >}})

{{< img width=400 src="images/vrm10/tutorial/vrm_firstperson_settings.jpg" >}}
