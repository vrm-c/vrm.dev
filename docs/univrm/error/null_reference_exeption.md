# NullReferenceExeption

## at Assets/VRM10/Runtime/IO/Model/ModelExporter.cs:306

```cs
skin.Joints = skinnedMeshRenderer.bones.Select(x => nodes[x.gameObject]).ToList();
```

Has the gameobject used for skinning been deleted?

### workaround

Please try disable instead of remove.
