# NullReferenceExeption(MeshAttachInfo)

:::note
SkinnedMeshRenderers.bones に null が含まれているモデルを
正規化するときに NullReferenceExeption が発生する。

```cs
Mesh.bindposes = Bones.Select(x => x.worldToLocalMatrix * dst.transform.localToWorldMatrix).ToArray();
```

:::

`UniVRM-0.124.1` を使ってください。

:::tip
https://github.com/vrm-c/UniVRM/issues/2326

`v0.124.1` で null の場合に例外が発生しないように無視するようにしました。
:::

:::warning
SkinnedMeshRenderers.bones に null が含まれているのはデータ異常扱いでした。
:::

:::warning
null であるボーンを参照していた頂点は動かなくなります。

- null を参照している頂点がそもそも存在しない
- null を参照している頂点が見える三角形を構成していない

場合は問題ないと思われます。

:::

- [\[MeshAttachInfo.cs:23\] Null reference exeption on 2022.3.6f1 · Issue #2206 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2206)

## at Assets/UniGLTF/Runtime/MeshUtility/MeshAttachInfo.cs:23

Has the gameobject used for skinning been deleted?

## Finally, SkinnedMeshRenderers.bones is now allowed to contain null

https://github.com/vrm-c/UniVRM/issues/2326


## at Assets/VRM10/Runtime/IO/Model/ModelExporter.cs:306

```cs
skin.Joints = skinnedMeshRenderer.bones.Select(x => nodes[x.gameObject]).ToList();
```

Has the gameobject used for skinning been deleted?

### workaround

Please try disable instead of remove.
