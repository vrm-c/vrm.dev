---
weight: 10
tags: ["gltf", "mtoon-1.0"]
---

# Emission and glow

Starting with version `v0.99`, it supports reading and writing of `KHR_materials_emissive_strength` .

```{admonition} VRMC_materials_hdr_emissiveMultiplier has been deprecated
:class: warning

The same feature, `VRMC_materials_hdr_emissiveMultiplier`, has been deprecated.It retains readability, but uses `KHR_materials_emissive_strength` when exporting, and does not use` VRMC_materials_hdr_emissiveMultiplier`.
```

## Target shader

* `Standard`
* `VRM10/MToon10`

## Glow of PostEffect in Unity

A post effect that emits light when the Emission value exceeds 1.

```{figure} /_static/images/vrm10/glow.jpg
```

It gets stronger by going over 1 to 3 or 4, but the maximum Emission value for `glTF` is` 1`.

```{admonition} Divide to 1
:class: note

When exporting, do the following to force the maximum value to 1.
```

```csharp
Vector3 emission;
var max_value = get_max(emission); // Get the maximum value with r, g, b
if(max_value>1)
{
  emission = emission / max_value;
}
```

```{admonition} vrm-0.x can be saved
:class: note

vrm-0.x can be saved as it has no [0-1] limit.
```

## Supports KHR_materials_emissive_strength

It supports reading and writing from `v0.99` to` KHR_materials_emissive_strength`.

<https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_emissive_strength>

Since `UniVRM-0.99`, it is valid for MToon / PBR with VRM1 / GLB / GLTF.

## VRMC_materials_hdr_emissiveMultiplier (deprecated)

<https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_materials_hdr_emissiveMultiplier-1.0>

It is no longer needed because it has the same function as `KHR_materials_emissive_strength`.

Defines a float value to multiply against EmissiveFactor.

`EmissiveFactor = EmissiveFactor * multiplier (value greater than 1)`
Since `UniVRM-0.79`, it is valid for MToon / PBR with VRM1 / GLB / GLTF.

## Sample scene

There is a sample scene with PostEffect set, so please try it.
Since there is a sample scene with PostEffect set. Please try it.

* `Assets\UniGLTF.Samples\LookDev\ballroom_1k.unity`
* `Assets\UniGLTF.Samples\LookDev\lilienstein_1k.unity`
* `Assets\UniGLTF.Samples\LookDev\moonless_golf_1k.unity`
* `Assets\UniGLTF.Samples\LookDev\spruit_sunrise_1k.unity`

* https://github.com/vrm-c/UniVRM/pull/1123

## How to load in Unity app

* Please load with `UniVRM-0.79` or later
* Set PostEffect for your scene
  * `Assets/UniGLTF/Samples/LookDev/RenderingServicePostProcessingProfile.asset` There is a sample profile

