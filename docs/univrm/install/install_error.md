# エラーが出る場合

## Multiple scripted importers

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

## Shader error in 'VRM10/Universal Render Pipeline/MToon10': Couldn't open include file

```txt
Shader error in 'VRM10/Universal Render Pipeline/MToon10': Couldn't open include file 'Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl'. at /My project/Library/PackageCache/com.vrmc.vrmshaders@c684b72477/VRM10/MToon10/Resources/VRM10/vrmc_materials_mtoon_depthnormals_vertex.hlsl(5)
```

:::warning Universal RP がインストールされていません
:::

:::tip URP を使っていない場合は無視して問題ありません

URP版MToon の参照するファイルが見つからないエラーです。

:::

## エラーの報告

コンソール画面の内容をご確認ください。
コンソール画面はメニューから表示できます。

![コンソール画面を表示するメニュー](/images/vrm/window_console.png)

表示されたコンソール画面にエラーメッセージ(赤い)が表示されている場合、なんらかの不具合がある可能性があります。

![エラーの例](/images/vrm/error.png)

エラー報告は、起こった現象に

- OS(Windows10 64bit など)
- Unity のバージョン(Unity-5.6.3p1 など)
- UniVRM のバージョン(0.40 など)

を添えて

- https://github.com/vrm-c/UniVRM/issues

にお知らせください。
