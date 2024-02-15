# lookat & firstperson

:::tip
vrm-0.x では firstperson と lookat があまり区別されていませんでしたが、
別れました。
:::

## VRMC_vrm: lookat

- `degreemap.curve` が廃止になります

## VRMC_vrm: firstperson

- `firstPersonBone` は廃止になり、`Head` 固定になります
- `firstPersonBoneOffset` は、`lookAt.offsetFromHeadBone` になります

:::tip
vrm-0.x では VR head set の参照位置と look At の基準位置の区別が無く
共用で firstPersonBone + firstPersonBoneOffset でした。
(先に firstPersonBoneOffset が作成されて、あとから作った lookat に流用されていました)。

vrm-1.0 では、lookAt.offsetFromHeadBone になり
look At の基準位置を表します。

vrm-1.0 は VR head set の参照位置を含みません。
正確な位置を決めることができないためです。
引き続きアプリケーションでは lookAt.offsetFromHeadBone を VR head set の参照位置の参考に
使うことができます。
:::
