---
title: "拡張を実装する"
tags: ["unity", "gltf", "api"]
---

`UniVRM-0.63.2` から [UniGLTF]({{< relref "unigltf.md" >}}) の構成が変わって、 `extensions` / `extras` の実装方法が変わりました。

## GLTF 拡張とは

例 https://github.com/KhronosGroup/glTF/tree/master/extensions#extensions-vs-extras
```json
{
  "asset": {
    "version": 2.0,
    "extras": {
      "guid": "9abb92a3-39cf-4986-a758-c43d4bb4ab58",
    }
  }
}
```

名前が `asset.extras.guid` で値が `"9abb92a3-39cf-4986-a758-c43d4bb4ab58"` です。
`extensions` (`extras`) がどんなプロパティを持つかの取り決めが、 GTTF 拡張です。
複数形。

`extensions` はオフィシャルに仕様を公開する、
`extras` はアプリケーション独自に手軽に追加という違いがあります。

> This enables glTF models to contain application-specific properties without creating a full glTF extension

`extensions` は、`{ベンダー名}_{拡張名}` という命名規則です。
ベンダー名は、 https://github.com/KhronosGroup/glTF に申し込んで登録できます。

## UniGLTF の extensions

`v0.63.0` 以前は、`GLTF 型` の `extensions` フィールドに、`GLTFExtensions` 型を定義して、`VRM` フィールドを定義するという方法をとっていました。

```cs
class VRM
{

}

class GLTFExtensions
{
    public VRM VRM;
}

// すべての拡張の型を事前に知っている必要があり、拡張を分離できない
class GLTF
{
    public GLTFExtensions extensions;
}
```

`v0.63.1` から設計を変更して、すべての `extensions/extras` に同じ型の入れ物を使うように変更しました。
UniGLTF は `import/export` の具体的な型を知りません。

* `import` 時は、拡張が後で部分的にデシリアライズします。
* `export` 時は、拡張が先に部分的にシリアライズします。

```cs
// extensions / extras の入れ物として使う型
// Dictionary<string, Json> 的なもの。
public abstract class glTFExtension
{

}

class GLTF
{
    // UniGLTFは具体的な型を知らない。利用側が処理する
    public glTFExtension extensions;
}
```

### import の書き方

`glTFExtension` を継承した `glTFExtensionImport` を使います。
UniGLTF で JSON をパースしたときに、`extensions / extras` はすべて `glTFExtensionImport` 型になります。

```cs
// 拡張をデシリアライズする関数。拡張が実装する
public void DeserializeExtension(UniGLTF.glTFExtension src)
{
    if(src is UniGLTF.glTFExtensionImport extensions) // null check と　代入
    {
        foreach(var kv in extensions.ObjectItems())
        {
            if(kv.Key.GetString() == "VRMC_vrm") // extension の名前をチェック
            {
                ListTreeNode<JsonValue> value = kv.Value;

                // value に extension に対応する JSON の部分が入っている
                // どんな値が入っているかは Extension が知っている。ここでデシリアライズする。

                // デシリアライザーは手書きしてもよいし、コード生成を使うこともできる(後述)
            }
        }
    }
}
```

### export の書き方

`glTFExtension` を継承した `glTFExtensionExport` を使います。
UniGLTF で Export するために `UniGLTF.glTF` 型に値を詰め込むときに、先に部分的にシリアライズします。

```cs
// 拡張をシリアライズする関数。拡張が実装する
public void SerializeTo(ref UniGLTF.glTFExtension dst, VRMC_vrm extension)
{
    if (dst is glTFExtensionImport)
    {
        // unittest 等で 来るときがある
        throw new NotImplementedException();
    }

    if (!(dst is glTFExtensionExport extensions))
    {
        // extensions に複数のエクステンションを差し込むことがありえる(ex. materialの unlit と mtoon など)
        // 無い時だけ新規に入れ物を作る。
        extensions = new glTFExtensionExport();
        dst = extensions;
    }

    // extension を独自にシリアライズするコードここに書く
    // シリアライザーは手書きしてもよいし、コード生成を使うこともできる(後述)
    var bytes = Serialize(extension);

    // シリアライズ済みのバイト列を差し込む
    extensions.Add(VRMC_vrm.ExtensionName, bytes);
}
```

## 実装例

### GLTF: GLTF全体
`C#の型からコード生成`

* `Assets\UniGLTF\Runtime\UniGLTF\Format\GltfSerializer.g.cs`
* `Assets\UniGLTF\Runtime\UniGLTF\Format\GltfDeserializer.g.cs`

ジェネレーターの呼び出しコード

* `Assets\UniGLTF\Editor\UniGLTF\Serialization\SerializerGenerator.cs`
* `Assets\UniGLTF\Editor\UniGLTF\Serialization\DeserializerGenerator.cs`

生成コードの呼び出し

### GLTF: `meshes[*].extras.targetNames`
`コード生成せずに手書き`

* `Assets\UniGLTF\Runtime\UniGLTF\Format\ExtensionsAndExtras\gltf_mesh_extras_targetNames.cs`

生成コードの呼び出し

### GLTF: `materials[*].extensions.KHR_materials_unlit`
`コード生成せずに手書き`

* `Assets\UniGLTF\Runtime\UniGLTF\Format\ExtensionsAndExtras\KHR_materials_unlit.cs`

生成コードの呼び出し

### GLTF: `materials[*].extensions.KHR_texture_transform`
`コード生成せずに手書き`

* `Assets\UniGLTF\Runtime\UniGLTF\Format\ExtensionsAndExtras\KHR_texture_transform.cs`

生成コードの呼び出し

* https://github.com/vrm-c/UniVRM/blob/master/Assets/UniGLTF/Runtime/UniGLTF/IO/MaterialImporter.cs#L296
* https://github.com/vrm-c/UniVRM/blob/master/Assets/UniGLTF/Runtime/UniGLTF/IO/MaterialExporter.cs#L193

### VRM0: `extensions.VRM`
`C#の型からコード生成`

* `Assets\VRM\Runtime\Format\VRMSerializer.g.cs`
* `Assets\VRM\Runtime\Format\VRMDeserializer.g.cs`

ジェネレーターの呼び出しコード

* `Assets\VRM\Editor\VRMSerializerGenerator.cs`
* `Assets\VRM\Editor\VRMDeserializerGenerator.cs`

生成コードの呼び出し

* https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/Runtime/IO/VRMImporterContext.cs#L41
* https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/Runtime/IO/VRMExporter.cs#L209

### VRM1: `materials[*].extensions.VMRC_maetrials_mtoon`
`JsonSchemaからコード生成`

5つの Extensions にわかれたので、個別に作成

* `Assets\VRM10\Runtime\Format\Constraints`
* `Assets\VRM10\Runtime\Format\MaterialsMToon`
* `Assets\VRM10\Runtime\Format\NodeCollider`
* `Assets\VRM10\Runtime\Format\SpringBone`
* `Assets\VRM10\Runtime\Format\VRM`

ジェネレーターの呼び出しコード

* `Assets\VRM10\Editor\GeneratorMenu.cs`

生成コードの呼び出し


## コード生成
JSON と C# の型との シリアライズ/デシリアライズは定型コードになるので、ジェネレーターがあります。
C# の型から生成するものと、JsonSchema から C# の型とともに生成するものがあります。

### C# の型から生成

#### シリアライザー

生成するコードを作成します。

* 元になる型
* 出力先

の２つを決めます。static関数を生成するので、namespace と static class で囲ってあげます。

例

* `Assets\UniGLTF\Editor\UniGLTF\Serialization\SerializerGenerator.cs`

```cs
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using UniJSON;
using UnityEditor;
using UnityEngine;

namespace UniGLTF
{
    public static class SerializerGenerator
    {
        const BindingFlags FIELD_FLAGS = BindingFlags.Instance | BindingFlags.Public;

        const string Begin = @"using System;
using System.Collections.Generic;
using UniJSON;

namespace UniGLTF {

    static public class GltfSerializer
    {

";

        const string End = @"
    } // class
} // namespace
";

        static string OutPath
        {
            get
            {
                return Path.Combine(UnityEngine.Application.dataPath,
                "UniGLTF/UniGLTF/Scripts/IO/GltfSerializer.g.cs");
            }
        }

        [MenuItem(UniGLTFVersion.MENU + "/GLTF: Generate Serializer")]
        static void GenerateSerializer()
        {
            var info = new ObjectSerialization(typeof(glTF), "gltf", "Serialize_");
            Debug.Log(info);

            using (var s = File.Open(OutPath, FileMode.Create))
            using (var w = new StreamWriter(s, new UTF8Encoding(false)))
            {
                w.Write(Begin);
                info.GenerateSerializer(w, "Serialize");
                w.Write(End);
            }

            Debug.LogFormat("write: {0}", OutPath);
            UnityPath.FromFullpath(OutPath).ImportAsset();
        }
    }
}
```

#### デシリアライザー

生成するコードを作成します。

* 元になる型
* 出力先

の２つを決めます。static関数を生成するので、namespace と static class で囲ってあげます。

例

* `Assets\UniGLTF\Editor\UniGLTF\Serialization\DeserializerGenerator.cs`

```cs
using System.IO;
using System.Reflection;
using System.Text;
using UnityEditor;
using UnityEngine;

namespace UniGLTF
{
    /// <summary>
    /// Generate deserializer from ListTreeNode<JsonValue> to glTF using type reflection
    /// </summary>
    public static class DeserializerGenerator
    {
        public const BindingFlags FIELD_FLAGS = BindingFlags.Instance | BindingFlags.Public;

        const string Begin = @"using UniJSON;
using System;
using System.Collections.Generic;
using UnityEngine;

namespace UniGLTF {

public static class GltfDeserializer
{

";

        const string End = @"
} // GltfDeserializer
} // UniGLTF 
";

        static string OutPath
        {
            get
            {
                return Path.Combine(UnityEngine.Application.dataPath,
                "UniGLTF/UniGLTF/Scripts/IO/GltfDeserializer.g.cs");
            }
        }

        [MenuItem(UniGLTFVersion.MENU + "/GLTF: Generate Deserializer")]
        static void GenerateSerializer()
        {
            var info = new ObjectSerialization(typeof(glTF), "gltf", "Deserialize_");
            Debug.Log(info);

            using (var s = File.Open(OutPath, FileMode.Create))
            using (var w = new StreamWriter(s, new UTF8Encoding(false)))
            {
                w.Write(Begin);
                info.GenerateDeserializer(w, "Deserialize");
                w.Write(End);
            }

            Debug.LogFormat("write: {0}", OutPath);
            UnityPath.FromFullpath(OutPath).ImportAsset();
        }
    }
}
```

#### キー出力の抑制

`index` に無効な値として `-1` を入れる場合に、JSONではキーを出力しないとしたいことがあります。

```cs
[JsonSchema(Minimum = 0)]
int index = -1;
```

のようにすることで、キーの出力を抑制できます。

TODO: `int?` を使えるようにする。

#### enum のエンコーディング

enumの値の名前を文字列で使う、enumの値の数値を使うの2種類がありえます。

```cs
[JsonSchema(EnumSerializationType = EnumSerializationType.AsInt)]
public glBufferTarget target;

[JsonSchema(EnumSerializationType = EnumSerializationType.AsLowerString)]
public ProjectionType type;
```

### JsonSchemaから生成
VRM-1.0 の実装

TODO:
