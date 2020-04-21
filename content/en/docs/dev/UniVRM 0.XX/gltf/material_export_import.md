---
Title: Material Import Export
---

|Export           |Contents recorded in VRM / GLTF file | Rendering in GLTF application |VRM import, etc.|
|---------------- |-------------------------------------|-------------------------------|----------------|
|Stanard          |GLTF Material                        |pbr                            |Standard        |
|Unlit/Color      |GLTF Material + unlit extension|unlit extension (shown as Standard if unlit extension is not supported)|UniGLTF/UniUnlit|
|Unlit/Texture    |GLTF Material + unlit extension|unlit extension (shown as Standard if unlit extension is not supported)|UniGLTF/UniUnlit|
|Unlit/Transparent|GLTF Material + unlit extension|unlit extension (shown as Standard if unlit extension is not supported)|UniGLTF/UniUnlit|
|Unlit/TransparentCutout|GLTF Material + unlit extension|unlit extension (shown as Standard if unlit extension is not supported)|UniGLTF/UniUnlit|
|VRM/UnlitTransparentZWrite|VRM Material + GLTF Material|unlit extension (shown as Standard if unlit extension is not supported. It is processed as normal Transparent)|VRM/UnlitTransparentZWrite|
|VRM/MToon|VRM Material + GLTF Material|unlit extension (shown as Standard if unlit extension is not supported)|VRM Material + GLTF Material|

The GLTF unlit extension is KHR_material_unlit.