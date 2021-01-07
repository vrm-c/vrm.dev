---
title: "UniGLTF"
tags: ["unity", "gltf", "api"]
---

この記事は、 `UniVRM-0.63.1` 以降を対象としています。

`UniVRM` に内包されていた `UniGLTF` を単体で使えるように整理しました。
`Assets/UniGLTF` フォルダに展開されます。

## UnityPackage

`UniVRM-0.XX.unitypackage` でインストールできます。
`Assets/VRM` を削除すると `glTF` 関連の機能だけを単体で利用できます。

## UPM

UniGLTF は　VRMShaders に依存しています。

```json
{
  "dependencies": {
    // ...
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.63.1",
    "com.vrmc.unigltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.63.1",
    // ...
}
```

## UniGLTF に含まれる機能

* glTF/glb の読み書き

### glTF拡張

* KHR_materials_unlit の読み書き
    * unityの unlit 系マテリアルのエクスポート
    * VRMShadersの [UniUnlit]({{< relref "univrm_unlit.md" >}}) shader としてのインポート
* KHR_texture_transform の読み書き
* morphTarget(blendShape)の名前を `/meshes/*/primitives/*/extras/targetNames`, `/meshes/*/extras/targetNames` に読み書きする
