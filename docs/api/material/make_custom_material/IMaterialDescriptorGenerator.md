# IMaterialDescriptorGenerator

```
glTF => IMaterialDescriptorGenerator => MaterialDescriptor => UnityEngine.Material
```
`IMaterialDescriptorGenerator` を実装して importer に渡すことで, Material の生成をカスタマイズできます。

```cs title="Assets/UniGLTF/Runtime/UniGLTF/IO/MaterialIO/Import/IMaterialDescriptorGenerator.c"
namespace UniGLTF
{
    public interface IMaterialDescriptorGenerator
    {
        MaterialDescriptor Get(GltfData data, int i);
        MaterialDescriptor GetGltfDefault(string materialName = null);
    }

    public sealed class MaterialDescriptor
    {
        public delegate Task MaterialGenerateAsyncFunc(Material m, GetTextureAsyncFunc getTexture, IAwaitCaller awaitCaller);
        public readonly string Name;
        public readonly Shader Shader;
        public readonly IReadOnlyList<MaterialGenerateAsyncFunc> AsyncActions;

        public MaterialDescriptor(
            string name,
            Shader shader,
            IReadOnlyList<MaterialGenerateAsyncFunc> asyncActions);
    }
}
```

## IMaterialDescriptorGenerator.Get の実装

`IMaterialDescriptorGenerator.Get` は glTF の material 情報から MaterialDescriptor を生成する責務があります。
以下の2stepを実装します。

### MToon, unlit, pbr のどれを生成するのか判断する

1. VRM material であれば MToon を作る
2. unlit であれば Unlit を作る
3. PBR であれば PBR を作る
4. その他であれば null を反す。

:::note
前ページのサンプルは、分岐せずに PBR を作成しました。
:::

### MaterialGenerateAsyncFunc に Material 構築を記述する

