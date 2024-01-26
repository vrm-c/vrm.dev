# import の手順

`v0.118`

`UniGLTF.GltfData` の生成、
`UniGLTF.GltfData` からシーンを構築するの 2 ステップになっています。

## `UniGLTF.GltfData` の生成

:::info UniGLTF.GltfData は vrm-0, vrm-1, glb, gltf で共通です
:::

:::tip UniGLTF.GltfData の生成はスレッドセーフです
Unity にアクセスしません。
:::

[glb_import](/api/0_82_glb_import)

## `UniGLTF.GltfData` からシーンを構築する

### glb(gltf)

[glb_import](/api/0_82_glb_import)

### vrm-0.x

GltfData から VrmData を生成し、
VrmData から シーンを構築します。

TODO:

`Assets/VRM/Runtime/IO/VrmUtility.cs` に使用例があります。

### vrm-1.0

GltfData から Vrm10Data を生成し、
Vrm10Data から シーンを構築します。

[vrm-1.0](/api/vrm1_load)
