# SpringBone の設定

## Spring の設定場所

Vrm-1.0 のルートGameObjectにアタッチされているVRMInstanceの `Spring Bone` に設定があります。

## Springs に Spring を追加する

![spring_empty](./vrm1_spring_empty.jpg)

:::note
`springs` の `+` を押します。
:::

![spring_add](./vrm1_spring_add.jpg)

### Joint コンポーネントをアタッチする

### Spring に Joint を追加する

![spring_add_joint](./vrm1_spring_add_component_joint.jpg)

:::warning

![spring_joint_isolated](./vrm1_spring_isolated_joint.jpg)

joint が VRMInstance の Spring に登録されていないときに⚠️ が表示されます。
VRMInstance の Spring[x].Joints リストにセットしてください。

![spring_register_joint](./vrm1_spring_register_joint.jpg)

:::

### Spring に Center を設定する

SpringBoneにはCenterというプロパティが存在し、設定することで揺れを制御することができます。
詳しくは、 [centerで揺れを抑制する](./center.md) を参照してください。

## SpringBone の Collider

### Collider コンポーネントをアタッチする

![spring_add_collider](./vrm1_spring_add_component_collider.jpg)

### ColliderGroup コンポーネントをアタッチする

![spring_add_collidergroup](./vrm1_spring_add_component_collidergroup.jpg)

### Spring に ColliderGroup を追加する

![spring_spring_collidergroups](./vrm1_spring_spring_collidergroups.jpg)

### ColliderGroups

![spring_collidergroups](./vrm1_spring_collidergroups.jpg)

:::info
vrm1 import 時に自動で更新されるので、手で更新する必要はありません。

`glTF: extensions.VRMC_springBone.colliderGroups` がそのまま表示されます。

TODO: readonly にするなど操作対象でないことがわかるようにする。
:::
