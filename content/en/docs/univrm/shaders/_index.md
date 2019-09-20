---
title: Available shaders in UniVRM
linkTitle: Shaders
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T14:00:00Z
url: /en/univrm/shaders/
weight: 4
aliases:
- /en/univrm/univrm_shaders/
---

[UniVRM-0.44 material](/en/univrm/sharders/0.44/)

## PBR

### Standard shader

Unity standard.

## Unlit type shader

### VRM/UnlitTexture

Same as Unit/Texture.

### VRM/UnlitCutout

Same as Unit/Coutout.

### VRM/UnlitTransparent

Same as Unit/Transparent.

It is assumed to be applied to particle things such as smokes, semi-transparent objects without substances (depth value) such as rosy cheeks.

### VRM/UnlitTransparentZWrite

Alpha blending and ZWrite are available. It is assumed to be applied to semi-transparent objects with substances (depth value) such as semi-transparent clothes and hairs.

{{< imgproc transparent_z_write Fit "379x479" >}}
The ends of the hair are semi-transparent
{{< /imgproc >}}

## Toon shader

### VRM/MToon

[Details about MToon](/en/univrm/sharders/mtoon/)

## The other shaders

If the same shaders exist on the importing side of VRM, they can be used. For external services or applications, please use the standard shaders described above. For self-made applications, feel free to use any shader.
