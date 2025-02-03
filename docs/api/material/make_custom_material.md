# CustomMaterial の作り方

## WebGL + RuntimeLoad 問題

WebGL で RuntimeLoad する場合に Unity の ShaderVariant の解決がうまくいかないようです。

https://github.com/vrm-c/UniVRM/issues/2548

## URP/Lit を Always Included Shaders にできない問題

`Universal Render Pipeline/Lit` は ShaderVariant が厖大で、 `Always Included Shaders` に登録することが非推奨です。

https://github.com/vrm-c/UniVRM/pull/2498

https://discussions.unity.com/t/urp-lit-sample-is-missing-all-shaders-in-webgl-build/863894/4

RuntimeLoad 向けではありません。

## ShaderGraph で CustomMaterial を作成

`v0.128.2` [VRM10Viewer Sample](/api/sample/vrm10/VRM10Viewer/) にて PBR と MToon1.0 のカスタムシェーダーを提供予定です。

応急処置のため Sample に入れて 正式サポート外としております。
PBR はそれなりに、MToon は簡易なものになります。

機能が不足する場合に改造や自作できるように、 `ShaderGraph Shader` 作成と `Vrm10Importer へのカスタムの MaterialLoader 組み込み` を説明します。

| shader        | comment                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| URP PBR       | VRM10Viewer の CustomPBR を使うか改造するなどしてください                                                                              |
| URP unlit     | `UniGLTF/UniUnlit` を使ってください                                                                                                    |
| URP MToon-1.0 | `VRM10/Universal Render Pipeline/MToon10` を使ってください。WebGLのときは、VRM10Viewer の CustomMtoon を使うか改造するなどしてください |

## 手順

### ShaderGraph で Shader を作成

![make shader graph asset](./create_shader_graph_menu.jpg)

`URP - Lit Shader Graph` で作成しました。

![color texure](./sg_first.jpg)

#### TextureNode

最低限の動作確認をするために color texture だけを作成ます。

- BaseColor に `Sample Texture 2D` を接続
- `Sample Texture 2D` に `Texture2D Asset` を接続
- `Texture2D Asset` を convert to property
- Name `BaseMap` (CustomMaterialContext.BaseMap と同じ)
- check `Use Tiling and Offsset`
- check `Exposed`

![texture node settings](./texture_node_settings.jpg)

- TextureProperty に MainTexture Flag

![MainTexture Flag](./set_as_main_texture.jpg)

### Importer に組込む

<details>
  <summary>CustomMaterialContext.cs</summary>
  <p>

```cs
using System;
using UniGLTF;
using UnityEngine;
using UnityEngine.Rendering;

namespace UniVRM10.VRM10Viewer
{
    public class CustomMaterialContext
    {
        private static readonly int BaseMap = Shader.PropertyToID("_BaseMap");
        public readonly Material Material;

        public Texture BaseTexture
        {
            get => Material.GetTexture(BaseMap);
            set => Material.SetTexture(BaseMap, value);
        }

        public Vector2 BaseTextureOffset
        {
            get => Material.GetTextureOffset(BaseMap);
            set => Material.SetTextureOffset(BaseMap, value);
        }

        public Vector2 BaseTextureScale
        {
            get => Material.GetTextureScale(BaseMap);
            set => Material.SetTextureScale(BaseMap, value);
        }

        public CustomMaterialContext(Material material)
        {
            Material = material;
        }

        public void Validate()
        {
        }
    }
}
```

  </p>
</details>

<details>
  <summary>CustomMaterialDescriptorGenerator.cs</summary>
  <p>

```cs
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UniGLTF;
using Unity.IO.LowLevel.Unsafe;
using UnityEngine;

namespace UniVRM10.VRM10Viewer
{
    /// <summary>
    /// GLTF の MaterialImporter
    /// </summary>
    public sealed class CustomMaterialDescriptorGenerator : IMaterialDescriptorGenerator
    {
        public UrpGltfPbrMaterialImporter PbrMaterialImporter { get; } = new();
        public UrpGltfDefaultMaterialImporter DefaultMaterialImporter { get; } = new();

        public Material CustomMaterial { get; set; }

        public CustomMaterialDescriptorGenerator(Material customMaterial)
        {
            CustomMaterial = customMaterial;
        }

        public MaterialDescriptor Get(GltfData data, int i)
        {
            // TODO: VRM

            // UNLIT
            MaterialDescriptor param;
            // if (BuiltInGltfUnlitMaterialImporter.TryCreateParam(data, i, out param)) return param;

            if (TryCreateParam(data, i, out param)) return param;

            // NOTE: Fallback to default material
            if (Symbols.VRM_DEVELOP)
            {
                Debug.LogWarning($"material: {i} out of range. fallback");
            }
            return GetGltfDefault(GltfMaterialImportUtils.ImportMaterialName(i, null));
        }

        public MaterialDescriptor GetGltfDefault(string materialName = null) => DefaultMaterialImporter.CreateParam(materialName);

        public bool TryCreateParam(GltfData data, int i, out MaterialDescriptor matDesc)
        {
            if (i < 0 || i >= data.GLTF.materials.Count)
            {
                matDesc = default;
                return false;
            }

            var src = data.GLTF.materials[i];
            matDesc = new MaterialDescriptor(
                GltfMaterialImportUtils.ImportMaterialName(i, src),
                CustomMaterial.shader,
                null,
                new Dictionary<string, TextureDescriptor>(),
                new Dictionary<string, float>(),
                new Dictionary<string, Color>(),
                new Dictionary<string, Vector4>(),
                new List<Action<Material>>(),
                new[] { (MaterialDescriptor.MaterialGenerateAsyncFunc)AsyncAction }
            );
            return true;

            Task AsyncAction(Material x, GetTextureAsyncFunc y, IAwaitCaller z) => GenerateMaterialAsync(data, src, x, y, z);
        }

        public static async Task GenerateMaterialAsync(GltfData data, glTFMaterial src, Material dst, GetTextureAsyncFunc getTextureAsync, IAwaitCaller awaitCaller)
        {
            var context = new CustomMaterialContext(dst);

            if (src is { pbrMetallicRoughness: { baseColorTexture: { index: >= 0 } } })
            {
                if (GltfPbrTextureImporter.TryBaseColorTexture(data, src, out _, out var desc))
                {
                    context.BaseTexture = await getTextureAsync(desc, awaitCaller);
                    context.BaseTextureOffset = desc.Offset;
                    context.BaseTextureScale = desc.Scale;
                }
            }
        }
    }
}
```

以下の部分が GltfData から ColorTexture を供給します。

```cs
        public static async Task GenerateMaterialAsync(GltfData data, glTFMaterial src, Material dst, GetTextureAsyncFunc getTextureAsync, IAwaitCaller awaitCaller)
        {
            var context = new CustomMaterialContext(dst);

            if (src is { pbrMetallicRoughness: { baseColorTexture: { index: >= 0 } } })
            {
                if (GltfPbrTextureImporter.TryBaseColorTexture(data, src, out _, out var desc))
                {
                    context.BaseTexture = await getTextureAsync(desc, awaitCaller);
                    context.BaseTextureOffset = desc.Offset;
                    context.BaseTextureScale = desc.Scale;
                }
            }
        }
```

  </p>
</details>

## IMaterialDescriptorGenerator 詳細

TODO:

## PBR 詳細

TODO:

## MToon 詳細

TODO:
