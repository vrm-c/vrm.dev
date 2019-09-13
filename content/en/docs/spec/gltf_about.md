---
title: "About GLTF"
linkTitle: "What is GLTF?"
date: 2018-04-16T16:30:00+09:00
url: "/en/gltf_about/"
weight: 1
---

glTF is a 3D format created by Khronos Group, which is developing openGL specifications. glTF 2.0 was released in 2017. VRM is based on glTF 2.0.

* https://github.com/KhronosGroup/glTF

# What kind of information can be recorded by glTF?

* Mesh (Vertex array、index array)
    * Morph target
    * Skinning (4weight)
* Texture
* Material (PBR)
* Scene
* Animation[^vrm_not_supported]
* Camera[^vrm_not_supported]
* Light source[^vrm_not_supported]

An entire 3D scene can be recorded.

* OpenGL right-handed, Y-UP coordinate system
* Meter (unit)
* Little endian

[^vrm_not_supported]: Not supported in VRM

# glTF format outline

glTF format comprises two parts: a JSON scene description part and a binary part that records images and vertex arrays. External binary data can be accessed by referencing Url or path. For glb format, it combines a JSON part and a binary part into one file. The binary data can be accessed via the offset into the buffer (byteOffset). For a program, it is easier to handle the glb format which is no need to access external files[^VRM_glb].

[^VRM_glb]: glb is adopted in VRM.

# glb format

A structure that has``Header part + Chunk parts``.
More specifically, it is``Header part + JSON CHUNk + BINARY CHUNK``.

Header part

|Length|Content          |Type   |Value|
|:---|:------------|:----|:-----|
|4   |             |ascii|"glTF"|
|4   |glTF version|int32|2|
|4   |file size    |int32| |

Chunk part

|Length      |Content       |Type   |Value|
|:---------|:---------|:----|:-----|
|4         |chunk size|int32||
|4         |chunk type|ascii|"JSON" or "BIN\x00"|
|chunk size|chunk body|byte array||

## Example of parsing with python3

{{< highlight python >}}
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

{{< / highlight >}}

# VRM extension
Information of VRM extension is stored in``json['extensions']['VRM']``.

* [VRM specifications](../vrm_spec/)