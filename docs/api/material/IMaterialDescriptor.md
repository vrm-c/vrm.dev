# IMaterialDescriptor

インポート時のマテリアル生成をカスタマイズします。
`IMaterialDescriptorGenerator` 引数を渡します。

```cs
Task<Vrm10Instance> Vrm10.LoadPathAsync(
  string path,
  IMaterialDescriptorGenerator materialGenerator = null,
)
```

```
    IMaterialDescriptorGenerator
         |                MaterialFactory
         |                     |
GltfData => MaterialDescriptor => UnityEngine.Material
```

IMaterialDescriptorGenerator を作成します。

## IMaterialDescriptorGenerator

```cs
namespace UniGLTF
{
    /// <summary>
    /// 指定の index の glTFMaterial から Import できる Material の生成情報を生成する。
    /// glTFMaterial と Unity Material は 1:1 対応する。
    /// </summary>
    public interface IMaterialDescriptorGenerator
    {
        /// <summary>
        /// Generate the MaterialDescriptor generated from the index i.
        /// </summary>
        MaterialDescriptor Get(GltfData data, int i);

        /// <summary>
        /// Generate the MaterialDescriptor for the non-specified glTF material.
        /// </summary>
        MaterialDescriptor GetGltfDefault(string materialName = null);
    }
}
```

```cs
using System;
using System.Collections.Generic;
using UniGLTF;
using UnityEngine;

namespace UniVRM10.VRM10Viewer
{
    public class VRM10ViewerWebGLMaterialDescriptorGenerator : IMaterialDescriptorGenerator
    {
        private readonly Material _Lit;
        private readonly Material _MToon;

        /// <summary>
        /// PBRとMToonのマテリアルをカスタマイズする。
        /// unlit は既存のものを使う。
        /// </summary>
        /// <param name="Lit"></param>
        /// <param name="MToon"></param>
        public VRM10ViewerWebGLMaterialDescriptorGenerator(Material Lit, Material MToon)
        {
            if (Lit == null) throw new ArgumentNullException("Lit");
            _Lit = Lit;

            if (MToon == null) throw new ArgumentNullException("MToon");
            _MToon = MToon;
        }

        public MaterialDescriptor Get(GltfData data, int i)
        {
            var matDesc = new MaterialDescriptor(
                $"Material#{i}",
                _Lit.shader,
                null,
                new Dictionary<string, TextureDescriptor>(),
                new Dictionary<string, float>(),
                new Dictionary<string, Color>(),
                new Dictionary<string, Vector4>(),
                new List<Action<Material>>()
            );
            return matDesc;
        }

        public MaterialDescriptor GetGltfDefault(string materialName = null)
        {
            // FIXME
            return new MaterialDescriptor(
                string.IsNullOrEmpty(materialName) ? "__default__" : materialName,
                _Lit.shader,
                default,
                new Dictionary<string, TextureDescriptor>(),
                new Dictionary<string, float>(),
                new Dictionary<string, Color>(),
                new Dictionary<string, Vector4>(),
                new List<Action<Material>>()
            );
        }
    }
}
```

## MaterialDescriptor

```cs
class ImprterContext {

        public async Task LoadMaterialsAsync(IAwaitCaller awaitCaller)
        {
            if (awaitCaller == null)
            {
                throw new ArgumentNullException();
            }

            if (Data.GLTF.materials != null)
            {
                for (int i = 0; i < Data.GLTF.materials.Count; ++i)
                {
                    await awaitCaller.NextFrameIfTimedOut();
                    // GltfData => MaterialDescriptor
                    var param = MaterialDescriptorGenerator.Get(Data, i);
                    // MaterialDescriptor => UnityEngine.Material
                    await MaterialFactory.LoadAsync(param, TextureFactory.GetTextureAsync, awaitCaller);
                }
            }
        }
}
```

```cs
    class MaterialFactory {

        public async Task<Material> LoadAsync(MaterialDescriptor matDesc, GetTextureAsyncFunc getTexture, IAwaitCaller awaitCaller)
        {
            if (m_externalMap.TryGetValue(matDesc.SubAssetKey, out Material material))
            {
                m_materials.Add(new MaterialLoadInfo(matDesc.SubAssetKey, material, true));
                return material;
            }

            if (getTexture == null)
            {
                getTexture = (x, y) => Task.FromResult<Texture>(null);
            }

            if (matDesc.Shader == null)
            {
                throw new ArgumentNullException(nameof(matDesc.Shader));
            }

            material = new Material(matDesc.Shader);
            material.name = matDesc.SubAssetKey.Name;

            foreach (var kv in matDesc.TextureSlots)
            {
                var texture = await getTexture(kv.Value, awaitCaller);
                if (texture != null)
                {
                    material.SetTexture(kv.Key, texture);
                    material.SetTextureOffset(kv.Key, kv.Value.Offset);
                    material.SetTextureScale(kv.Key, kv.Value.Scale);
                }
            }

            foreach (var kv in matDesc.Colors)
            {
                material.SetColor(kv.Key, kv.Value);
            }

            foreach (var kv in matDesc.Vectors)
            {
                material.SetVector(kv.Key, kv.Value);
            }

            foreach (var kv in matDesc.FloatValues)
            {
                material.SetFloat(kv.Key, kv.Value);
            }

            if (matDesc.RenderQueue.HasValue)
            {
                material.renderQueue = matDesc.RenderQueue.Value;
            }

            foreach (var action in matDesc.Actions)
            {
                action(material);
            }

            foreach (var asyncAction in matDesc.AsyncActions)
            {
                await asyncAction(material, getTexture, awaitCaller);
            }

            m_materials.Add(new MaterialLoadInfo(matDesc.SubAssetKey, material, false));

            return material;
        }
    }
```

```cs
    public sealed class MaterialDescriptor
    {
        public delegate Task MaterialGenerateAsyncFunc(Material m, GetTextureAsyncFunc getTexture, IAwaitCaller awaitCaller);

        public readonly string Name;
        public readonly Shader Shader;

        public readonly int? RenderQueue;
        public readonly IReadOnlyDictionary<string, TextureDescriptor> TextureSlots;
        public readonly IReadOnlyDictionary<string, float> FloatValues;
        public readonly IReadOnlyDictionary<string, Color> Colors;
        public readonly IReadOnlyDictionary<string, Vector4> Vectors;
        public readonly IReadOnlyList<Action<Material>> Actions;
        public readonly IReadOnlyList<MaterialGenerateAsyncFunc> AsyncActions;

        public SubAssetKey SubAssetKey => new SubAssetKey(SubAssetKey.MaterialType, Name);

        public MaterialDescriptor(
            string name,
            Shader shader,
            int? renderQueue,
            IReadOnlyDictionary<string, TextureDescriptor> textureSlots,
            IReadOnlyDictionary<string, float> floatValues,
            IReadOnlyDictionary<string, Color> colors,
            IReadOnlyDictionary<string, Vector4> vectors,
            IReadOnlyList<Action<Material>> actions,
            IReadOnlyList<MaterialGenerateAsyncFunc> asyncActions = null)
        {
            Name = name;
            Shader = shader;
            RenderQueue = renderQueue;
            TextureSlots = textureSlots;
            FloatValues = floatValues;
            Colors = colors;
            Vectors = vectors;
            Actions = actions;
            AsyncActions = asyncActions ?? new List<MaterialGenerateAsyncFunc>();
        }
    }
```
