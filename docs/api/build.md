# Unity Build

UniVRMを使うアプリケーションのビルドに関する注意事項

## ビルドに含めるシェーダー

`Project Settings = Graphics - Always Included Shaders` などに設定して、以下のシェーダーがビルドに含まれるようにしてください。

### URP

#### Standard

- `Universal Render Pipeline/Lit`

#### Unlit

- `Assets\VRMShaders\GLTF\UniUnlit\Resources\UniGLTF\UniUnlit.shader`

```{admonition} Always Included Shaders
`Resources` に配置しているので明示的に指定しなくてもビルドに含まれます。
```

#### MToon

- `Assets/VRMShaders/VRM10/MToon10/Resources/VRM10/vrmc_materials_mtoon_urp.shader`

```{admonition} Always Included Shaders
`Resources` に配置しているので明示的に指定しなくてもビルドに含まれます。
```

### builtin

#### Standard

- `Standard`

GLTF の PBR マテリアルが使用します。

```{admonition} Always Included Shaders
:class: warning
明示的に指定する必要があります
```

#### Unlit

- `Assets\VRMShaders\GLTF\UniUnlit\Resources\UniGLTF\UniUnlit.shader`

```{admonition} Always Included Shaders
`Resources` に配置しているので明示的に指定しなくてもビルドに含まれます。
```

#### MToon

- `Assets\VRMShaders\VRM\MToon\MToon\Resources\Shaders\MToon.shader`

```{admonition} Always Included Shaders
`Resources` に配置しているので明示的に指定しなくてもビルドに含まれます。
```

### テクスチャー変換用のシェーダー

import/export 時に使用します。

:::note
ビルトイン/URP の両方で使われます
:::

- `Assets\VRMShaders\GLTF\IO\Resources\UniGLTF\NormalMapExporter.shader`
- `Assets\VRMShaders\GLTF\IO\Resources\UniGLTF\StandardMapExporter.shader`
- `Assets\VRMShaders\GLTF\IO\Resources\UniGLTF\StandardMapImporter.shader`

```{admonition} Always Included Shaders
`Resources` に配置しているので明示的に指定しなくてもビルドに含まれます。
```
