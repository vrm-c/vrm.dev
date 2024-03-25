# import animation

VRM-1.0 を import します。

```cs title="load vrm-1.0"
var vrm10Instance = await Vrm10.LoadPathAsync(path,
    canLoadVrm0X: true,
    showMeshes: false,
    awaitCaller: m_useAsync.enabled
      ? (IAwaitCaller)new RuntimeOnlyAwaitCaller()
      : (IAwaitCaller)new ImmediateCaller(),
    materialGenerator: GetVrmMaterialDescriptorGenerator(m_useUrpMaterial.isOn),
    vrmMetaInformationCallback: m_texts.UpdateMeta,
    ct: cancellationToken);
if (cancellationToken.IsCancellationRequested)
{
    UnityObjectDestroyer.DestroyRuntimeOrEditor(vrm10Instance.gameObject);
    cancellationToken.ThrowIfCancellationRequested();
}

var instance = vrm10Instance.GetComponent<RuntimeGltfInstance>();
instance.ShowMeshes();
instance.EnableUpdateWhenOffscreen();
```

VRM-Animation を import します。

```cs title="load vrm-animation"
// gltf, glb etc...
using GltfData data = new AutoGltfFileParser(path).Parse();
using var loader = new VrmAnimationImporter(data);
var instance = await loader.LoadAsync(new ImmediateCaller());
var vrmAnimation = instance.GetComponent<Vrm10AnimationInstance>();
instance.GetComponent<Animation>().Play();
```

VRM-1.0 と VRM-Animation を連結します。

```cs title="connect model with vrm-animation"
vrm10Instance.Runtime.VrmAnimation = vrmAnimation;
```

:::info
以降 Vrm10Instance の Update もしくは LateUpdate で、
VRM-Animation のポーズが Vrm-1.0 に転送されます。
:::
