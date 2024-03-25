# Multiple scripted importers

```txt
Multiple scripted importers are targeting the extension 'glb' and have all been rejected: UniGLTF.GlbScriptedImporter (assembly: \My project\Library\ScriptAssemblies\UniGLTF.Editor.dll), GLTFast.Editor.GltfImporter (assembly: \My project\Library\ScriptAssemblies\glTFast.Editor.dll)
UnityEditor.AssetImporters.ScriptedImporter:RegisterScriptedImporters ()
```

:::warning

`glb` や `gltf` 拡張子を処理できる plugin が重複しています。

:::

:::tip UniGLTF の glb / gltf 処理を止めることができます。

`UnityMenu` - `Projeoct Settings` - `Player` - `ScriptingDefineSymbols`

- UNIGLTF_DISABLE_DEFAULT_GLB_IMPORTER
- UNIGLTF_DISABLE_DEFAULT_GLTF_IMPORTER

UniGLTF の editor importer が無効になります.

:::
