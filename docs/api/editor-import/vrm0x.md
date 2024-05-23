# VRM-0.x の EidtorImport 動作

[vrmAssetPostprocessor](https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/Editor/Format/vrmAssetPostprocessor.cs) を起点に、
vrm の prefab を生成します。

:::info
`alicia.vrm` から `alicia.prefab` を生成します。
:::

## step1

[TextureExtractor](https://github.com/vrm-c/UniVRM/blob/master/Assets/UniGLTF/Editor/UniGLTF/ScriptedImporter/TextureExtractor.cs) で texture の画像ファイルを書き出します。

## step2

prefab を構築します。

:::info 調査中
[\[URP\] UrpでVrm0のEditorImportがエラーになる · Issue #2286 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2286)
:::
