# NullReferenceExeption(MeshAttachInfo)

- [\[MeshAttachInfo.cs:23\] Null reference exeption on 2022.3.6f1 · Issue #2206 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2206)

## at Assets/UniGLTF/Runtime/MeshUtility/MeshAttachInfo.cs:23

```cs
Mesh.bindposes = Bones.Select(x => x.worldToLocalMatrix * dst.transform.localToWorldMatrix).ToArray();
```

Has the gameobject used for skinning been deleted?

## Finally, SkinnedMeshRenderers.bones is now allowed to contain null

https://github.com/vrm-c/UniVRM/issues/2326

It is now possible to export from `v0.124.1`.
