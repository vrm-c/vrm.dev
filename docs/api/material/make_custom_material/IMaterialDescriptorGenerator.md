# IMaterialDescriptorGenerator

glTF から unity の material を作成します。

```cs title="Assets/UniGLTF/Runtime/UniGLTF/IO/MaterialIO/Import/IMaterialDescriptorGenerator.c"
namespace UniGLTF
{
    /// <summary>
    /// generate a unity Material from a glTFMaterial.
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

## IMaterialDescriptorGenerator の分岐

`IMaterialDescriptorGenerator.Get` で分岐します。

1. VRM material であれば MToon を作る
2. unlit であれば Unlit を作る
3. PBR であれば PBR を作る
4. その他であれば デフォルトのマテリアル を作る( `GetGltfDefault` )

:::note
前ページのサンプルは、分岐せずに PBR を作成しました。
:::

## 分岐の書き方

```cs

// VRM default を使う

// WEBGL のときはカスタムのシェーダーが必要です

// unlit を使う。これは得に代える必要がありません

// PBR を使う。ビルド問題のためカスタムシェーダーが必要です
```
