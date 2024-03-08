# SkinnedMeshRenderer.rootBone

2 つの機能があるようで、可視判定 BoundingBox の中心制御と boneWeight が無いときの transform に影響します。
たぶん、3 種類の挙動があります。

| bone weight | rootBone |                                          |
| ----------- | -------- | ---------------------------------------- |
|             |          | SkinnedMeshRenderer.transform の上に乗る |
| ✅          |          | bone weight に従う                       |
|             | ✅       | rootBone の上に乗る                      |
| ✅          | ✅       | bone weight に従う                       |

## UniVRM の SkinnedMeshRenderer.root は正しく読み書きできません

:::danger UniGLTF では、SkinnedMeshRenderer.rootBone をサポートしません
glTF に対応する項目が無くて、正しく読み書きできないためです。
:::

:::warning glTF の skin.skeleton は似て非なる別の機能です
https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#_skin_skeleton
:::

## 問題が起きやすい例

- 頭に BoneWeight を付与していない
- 頭に BlendShape がある
- SkinnedMeshRenderer が 頭に attach されている => 無問題
- SkinnedMeshRenderer が root 付近に atttach されていて、rootBone に頭が指定されてい => 該当

## 対策

### DCC での対策

- 頭に BoneWeight を付与してください

### UniVRM での対策

**bake** してください。

- vrm-0.x は正規化時に解決されます。
- glTF は、exportOption `freezeMesh` を有効にしてください( `from 0.121` )
- vrm-1.0 は、exportOption `freezeMesh` を有効にしてください( `from 0.121` )

:::info export と別に MeshUtility の Mesh 統合で同じ機能を使うことができます
:::

## 参考

- [skin.skeleton と SkinnedMeshRenderer.RootBone 違う機能なのでは？ · Issue #730 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/730)

- [SkinnedMeshRenderer.rootBone の boneWeight==0 の頂点を動かす機能を打ち消す · Issue #1675 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1675)

- [ボーン変形を持たないSkinnedMeshRendererをVRM1.0でエクスポートするとローカル座標が反映されない · Issue #2119 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2119)
