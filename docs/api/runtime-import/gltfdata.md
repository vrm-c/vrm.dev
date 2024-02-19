# GltfData

`.glb`, `.vrm`, `.vrma` など から GltfData をロードします。

GltfData が入手できたら中身に合わせた GameObject 生成へと分岐してください。

## `byte[]` からロードする

```cs
public sealed class GlbBinaryParser
{
    public GlbBinaryParser(byte[] data, string uniqueName)
}

// 使用例
using (GltfData data = new GlbBinaryParser(bytes, path).Parse())
{
}
```

## filepath からロードする

```cs
public sealed class GlbFileParser
{
    public GlbFileParser(string glbFilePath)
}

// 使用例
using (GltfData data = new GlbFileParser(path).Parse())
{
}
```

## Dispose

- [0_95_dispose](/api/0_95_dispose)
