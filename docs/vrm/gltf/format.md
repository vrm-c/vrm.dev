# VRMフォーマット

VRM は、[Khronos](https://www.khronos.org/) の開発している 3D Format である [glTF](https://www.khronos.org/Gltf) の version `2.0` をベースにしています。

:::note VRM file
VRM は、glTF の バイナリーバージョンである glb のファイル拡張子を `.vrm` に変更します。

`.vrm` を `.glb` に戻すことで `vrm` 未対応の `glTF` 対応アプリケーションでも、3D Model としてロードできることが期待できます。
:::

- https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html

## vrm-0.x

- https://github.com/vrm-c/vrm-specification/tree/master/specification/0.0

## vrm-1.0

- https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_vrm-1.0
- https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_materials_mtoon-1.0
- https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_springBone-1.0
- https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_node_constraint-1.0
- https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_springBone_extended_collider-1.0

VRM と 並用することが想定される他の glTF extension

- [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_unlit/README.md)
- KHR_texture_transform
- KHR_materials_emissive_strength

## vrma

- https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_vrm_animation-1.0

## glb フォーマット概説

:::note 仕様
https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#glb-file-format-specification
:::

シーンヒエラルキーをJSONで記述するテキスト部と、画像や頂点配列を記録するバイナリ部の２つの部分からなります。

`glTFヘッダ + JSON CHUNk + BINARY CHUNK`という構成です。

### glTFヘッダ部

| 長さ | 内容           | 型    | 値     |
| :--- | :------------- | :---- | :----- |
| 4    |                | ascii | "glTF" |
| 4    | gltfバージョン | int32 | 2      |
| 4    | file size      | int32 |        |

### チャンク部

| 長さ       | 内容       | 型       | 値                  |
| :--------- | :--------- | :------- | :------------------ |
| 4          | chunk size | int32    |                     |
| 4          | chunk type | ascii    | "JSON" or "BIN\x00" |
| chunk size | chunk body | バイト列 |                     |

```python title="python3によるパース例"
import struct
import json

class Reader:
    def __init__(self, data: bytes)->None:
        self.data = data
        self.pos = 0

    def read_str(self, size):
        result = self.data[self.pos: self.pos + size]
        self.pos += size
        return result.strip()

    def read(self, size):
        result = self.data[self.pos: self.pos + size]
        self.pos += size
        return result

    def read_uint(self):
        result = struct.unpack('I', self.data[self.pos:self.pos + 4])[0]
        self.pos += 4
        return result


def parse_glb(data: bytes):
    reader = Reader(data)
    magic = reader.read_str(4)
    if  magic != b'glTF':
        raise Exception(f'magic not found: #{magic}')

    version = reader.read_uint()
    if version != 2:
        raise Exception(f'version:#{version} is not 2')

    size = reader.read_uint()
    size -= 12

    json_str = None
    body = None
    while size > 0:
        #print(size)

        chunk_size = reader.read_uint()
        size -= 4

        chunk_type = reader.read_str(4)
        size -= 4

        chunk_data = reader.read(chunk_size)
        size -= chunk_size

        if chunk_type == b'BIN\x00':
            body = chunk_data
        elif chunk_type == b'JSON':
            json_str = chunk_data
        else:
            raise Exception(f'unknown chunk_type: {chunk_type}')

    return json.loads(json_str), body


with open('AliciaSolid.vrm', 'rb') as f:
    parsed, body = parse_glb(f.read())
```
