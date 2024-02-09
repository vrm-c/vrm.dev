# Mesh Bake の実装

## Mesh Bake とは

:::tip この機能を Freeze と呼ぶこともあります
:::

Unity にはその名もずばり BakeMesh という関数があります。

[SkinnedMeshRenderer-BakeMesh - Unity スクリプトリファレンス](https://docs.unity3d.com/jp/current/ScriptReference/SkinnedMeshRenderer.BakeMesh.html)

SkinnedMesh で bone を動かしてからこの関数を呼ぶと、その状態の mesh を得ることができます。

:::warning blendShape の変更も Bake されます
:::

:::warning mesh に入っている blendshape は変更されません
:::

## Bake と Mesh.bindposes

bake された Mesh を SkinnedMeshRenderer で動かすには、
bake した状態の bone から Mesh.bindposes を計算して置き換える必要があります。
以下のコードでできます。

```cs
SkinnedMeshRenderer smr;
mesh.bindposes = smr.bones.Select(x => x.worldToLocalMatrix).ToArray();
```

:::tip
逆に言うとこの計算で得られる値と異なる bindposes には、
なんからの mesh 変形が含まれています。

- scaling, mirrorring … etc
- A スタンスの T スタンスへの補正
- Z-UP を Y-UP に回転
  :::

:::tip クリーンナップする効果があります。
例えば、mirror を表現する負のスケーリングをクリアする効果があります。

mesh が反転して格納されていて、bondpose でミラーリングする手法があった。
:::

## bindposes の変更

bone の world 位置を維持して回転と拡大縮小を変更してから bindposes を計算した場合でも、
Skinning が壊れることはありません。

:::tip bone の position が関節の回転原点
:::

:::tip 回転は自由に設定しても問題ありません
任意の流儀の rig に合わせられます。
:::

:::danger スケールは 1 がお勧め

- lossyScale と同じ問題があり、行列では表現できるが scale では表現できないなどのトラブルがあります。
  :::

## blendshape に対応する

blendshape を列挙してひとつずつ weight を上げてから bake して、
元の mesh の vertices を引き算することで blendshape の bake を得ることができます。

`Assets\UniGLTF\Runtime\MeshUtility\MeshFreezer.cs`

:::danger ヒエラルキーに拡大縮小が含まれているとうまくいかない例がある
:::

:::warning position だけを処理対象にしておくのが無難と思われます
:::

## vrm-0.x 正規化

BakeMesh に対する boneposes 計算前に回転と拡大縮小を変更することが可能であることを利用して、
無回転、無拡大縮小にするのが vrm-0.x の正規化処理です。
MeshBake ですが、事前に T-Pose にするという規約が追加されています。

`Assets\UniGLTF\Runtime\MeshUtility\MeshFreezer.cs`

## 関連

- https://github.com/vrm-c/UniVRM/issues?q=is%3Aissue+bake+is%3Aclosed
- https://github.com/vrm-c/UniVRM/issues?q=is%3Aissue+freeze+is%3Aclosed

## bake 処理の改修

[v0.116](/release/112/v0.116.0/)
, [v0.117](/release/112/v0.117.0/)
, [v0.119](/release/112/v0.119.0/)

https://github.com/vrm-c/UniVRM/blob/v0.115.0/Assets/UniGLTF/Runtime/MeshUtility/BoneNormalizer.cs#L226

正規化処理を複数のステップに分割して、
読めるようにする。

- Mesh の bake
- Hierarchy の正規化
- SkinnedMeshRenderer へのアタッチと bindposes の計算

