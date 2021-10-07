---
title: "GLB Import"
date: 2020-10-12T15:51:08+09:00
weight: 1
tags: ["gltf"]
---

## Import GLB file in Editor Mode

The procedure is the same as [VRM import]({{< relref "univrm_import" >}}). Just drag and drop the GLB file into the **Assets** folder.

Starting with `v0.68.0`, we use [DamagedHelmet](https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0/DamagedHelmet) as an example to illustrate import settings. 

### `ReverseAxis` Setting

The axis you want to reverse can be selected when transforming from glTF's right-handed, Y-UP coordinate to Unity's left-handed Y-UP coordinate.

* Z-axis (same as before v0.68.0)
* X-axis (added from v0.68.0)

{{< img width=400 src="images/unigltf/glb_axis.gif" >}}
<hr>

Select `Reverse Axis` X or Z and click `Apply` button. The result will be reflected as shown in the image above.

### `Extract Materials and Textures ...`

Same as we did in [fbx import]({{< relref "convert_from_humanoid_model.md#fbxs-material-setup" >}}), initially material and textures will be imported into GLB.
In this state, the settings for materials/textures are unchangeable (`Readonly` mode).

{{< img width=400 src="images/unigltf/glb_material_tab.jpg" >}}
<hr>

By clicking `Extract Materials and Textures ...`, materials and textures are extracted as external assets (`Material.asset`, `Texture.png/jpg`). 
In this way, the settings for materials/textures can be changed.

{{< img width=400 src="images/unigltf/glb_material_tab_extracted.jpg" >}}
<hr>

The image above shows that reference resources for materials/textures are properly assigned in `Remapped Materials` and `Remapped Textures` sections.
Click `Clear` button to reset Material/Texture reference settings.

### glb extract

https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0/DamagedHelmet/glTF-Binary

#### clear

In the initial state (clear), the related Asset (Mesh, Material, Texture, AnimationClip) are stored as SubAsset of GLB:

* `texture_1.metallicRoughness` is converted from `texture_1` to be used in Unity's Standard Shader. 
* `texture_3.occlusion` is converted from `textrue_3` to be used in Unity's Standard Shader. 
* `texture_4.normal` is converted from `textrue_4` to be used in Unity's Standard Shader. 

{{< img width=400 src="images/unigltf/glb_clear.jpg" >}}

#### extract

By clicking `Extract Materials and Textures ...`, materials/textures listed below will be generated:  

* `Material_MR.mat`
* `texture_0.jpg` (color)
* `texture_1.metallicRoughness.png`. Converted from `texture_1` to be used in Unity's Standard Shader
* `texture_2.jpg` (emission)
* `texture_3.occlusion.png`. Converted from `texture_3` to be used in Unity's Standard Shader
* `texture_4.jpg` (normalMap)

{{< img width=400 src="images/unigltf/glb_extract.jpg" >}}

### gltf extract

https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0/DamagedHelmet/glTF

#### clear

In the initial state (clear), the related Asset (Mesh, Material, Texture, AnimationClip) are stored as SubAsset:

* `Default_AO.occlusion` is converted from `Default_AO` to be used in Unity's Standard Shader. 
* `Defualt_metalRoughness.metallicRoughness` is converted from `Defualt_metalRoughness` to be used in Unity's Standard Shader.

{{< img width=400 src="images/unigltf/gltf_clear.jpg" >}}

#### extract

By clicking `Extract Materials and Textures ...`, materials/textures listed below will be generated: 

* `Material_MR.mat`
* `Default_AO.occlusion.png`. Converted from `Default_AO` to be used in Unity's Standard Shader
* `Default_metalRoughness.metallicRoughness.png`. Converted from `Default_metalRoughness` to be used in Unity's Standard Shader

{{< img width=400 src="images/unigltf/gltf_extract.jpg" >}}