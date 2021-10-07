---
title: Emission and glow
weight: 10
tags: ["gltf", "mtoon-1.0"]
---

`This is not an official extension of gltf.`

## Target shader

* `Standard`
* `VRM10/MToon10`

## Glow of PostEffect in Unity

A post effect that emits light when the Emission value exceeds 1.

{{< img width=300 src="images/vrm10/glow.jpg" >}}

It becomes stronger by exceeding 1 to 3 or 4, but this value cannot be stored due to the specifications of `glTF`.

{{% alert title="Divide to 1" color="info" %}}

When exporting, do the following to force the maximum value to 1.

```cs
Vector3 emission;
var max_value = get_max(emission); // Get the maximum value with r, g, b
if(max_value>1)
{
  emission = emission / max_value;
}
```

{{% /alert %}}

{{% alert title="vrm-0.x can be saved" color="info" %}}

vrm-0.x can be saved as there is no [0-1] limit.

{{% /alert %}}

## VRMC_materials_hdr_emissiveMultiplier

We created `VRMC_materials_hdr_emissiveMultiplier` to store a value greater than 1 in the emission.
Defines a float value to multiply against EmissiveFactor.

`EmissiveFactor = EmissiveFactor * multiplier (value greater than 1)`.

It can be exported as VRM1 / GLB / GLTF with `UniVRM-0.79` or later.

Valid for MToon and PBR materials.

Since there is a sample scene with PostEffect set
Please try it.

`UniVRM10-XXX.unitypackage`

* `Assets/UniGLTF/Samples/LookDev/ballroom_1k.unity`
* `Assets/UniGLTF/Samples/LookDev/lilienstein_1k.unity`
* `Assets/UniGLTF/Samples/LookDev/moonless_golf_1k.unity`
* `Assets/UniGLTF/Samples/LookDev/spruit_sunrise_1k.unity`

* https://github.com/vrm-c/UniVRM/pull/1123

## How to load in Unity app

* Please load with `UniVRM-0.79` or later
* Set PostEffect for your scene
  * `Assets/UniGLTF/Samples/LookDev/RenderingServicePostProcessingProfile.asset` There is a sample profile

## Specification

<https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_materials_hdr_emissiveMultiplier-1.0_draft>
