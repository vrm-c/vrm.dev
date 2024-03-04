# Null reference exeption

- [Null reference exeption on 2022.3.6f1 · Issue #2206 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2206)

:::tip The location of this error is important
:::

## at Assets/UniGLTF/Runtime/MeshUtility/MeshAttachInfo.cs:23

```cs
Mesh.bindposes = Bones.Select(x => x.worldToLocalMatrix * dst.transform.localToWorldMatrix).ToArray();
```

Has the gameobject used for skinning been deleted?

### workaround

Please try disable instead of remove.

## at Assets/VRM10/Runtime/IO/Model/ModelExporter.cs:306

```cs
skin.Joints = skinnedMeshRenderer.bones.Select(x => nodes[x.gameObject]).ToList();
```

Has the gameobject used for skinning been deleted?

### workaround

Please try disable instead of remove.

