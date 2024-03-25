# GameObject.Destory で vrm 関連リソースを破棄します

:::tip RuntimeGltfInstance は runtime 専用
Editor import(Prefab や ScriptedImporter)では Attach されません。
:::

`RuntimeGltfInstance.OnDestroy` で関連リソースを破棄します。

```
ImporterContext
    [Own]List<Mesh>
    AnimationClipFactory[Own]List<Animation>
    TextureFactory[Own]List<Texture>
    MaterialFactory[Own]List<Material>

👇  ImporterContext.LoadAsync
      RuntimeGltfInstance.AttachTo
        ImporterContext.TransferOwnership

RuntimeGltfInstance
    [Own]List<Mesh>
    [Own]List<Animation>
    [Own]List<Texture>
    [Own]List<Material>
```
