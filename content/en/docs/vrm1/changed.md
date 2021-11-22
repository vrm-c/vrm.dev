---
title: "VRM-1.0 Changes"
weight: 1
date: 2021-11-22
---

## Changes from VRM-0.X

- glTF: z- forward => z+ forward
- glTF: shared bufferView => divided bufferView
- VRM0: meta => `VRMC_vrm` meta
- VRM0: humanoid => `VRMC_vrm` humanoid
- VRM0: blendshape => `VRMC_vrm` expression
- VRM0: lookat => `VRMC_vrm` lookat
- VRM0: firstperson => `VRMC_vrm` firstperson
- VRM0: springBone => `VRMC_springBone`
- `new addition` => `VRMC_materials_hdr_emissiveMultiplier`
- VRM0: mtoon => `VRMC_materials_mtoon`
- `new addition` => `VRMC_node_constraint`

## glTF: z+ forward

The model stores the Z+ direction forward.

|         | VRM0 | VRM1 |
|---------|------|------|
| forward | z-   | z+   |
| right   | x+   | x-   |

{{% alert title="implemantation" color="warning" %}}

Y-axis 180-degree rotation.

```cs
Vector3 vrm0;
var vrm1 = new Vector3(-vrm0.x, vrm0.y, -vrm0.z);
```

`TODO`

{{% /alert %}}

## glTF: divided vertex buffer

Stop sharing bufferView between primitives.

|            | VRM0                                                                                                            | VRM1                                                                                             |
|------------|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| bufferView | shared                                                                                                          | divided                                                                                          |
| Pros       | Less conversions due to close to GameEngine memory layout                                                               | Compatible with generic glTF loaders                                                             |
| Cons       | Non-UniVRM glTF loaders can cause memory usage to explode (can be loaded but unused space in the vertex buffer) | There can be an increase in vertices and a change in order at export. Effort to concatenated during import. Clutter handling morphTarget |

{{% alert title="implemantation" color="warning" %}}

Stop the 'Vrm' dedicated shared vertex loader and use the general 'glTF' loader.

{{% /alert %}}

## VRMC_vrm: meta

`TODO`

## VRMC_vrm: humanoid

Review of required bones.

|                     | VRM0     | VRM1     |
|---------------------|----------|----------|
| neck                | required |          |
| head                | required | required |
| hips                | required | required |
| spine               | required | required |
| chest               | required |          |
| left/right UpperArm | required | required |
| left/right LowerArm | required | required |
| left/right Hand     | required | required |
| left/right UpperLeg | required | required |
| left/right LowerLeg | required | required |
| left/right Foot     | required | required |

The following items will be removed (recorded in 'VRMHumanoidDescription'):

* armStretch
* legStretch 
* upperArmTwist
* lowerArmTwist
* upperLegTwist
* lowerLegTwist
* feetSpacing
* hasTranslationDoF

## VRMC_vrm: expression

Rename BlendShape to Expression.

{{% alert title="BlendShape" color="warning" %}}

BlendShape is Unity's MorphTarget feature, which is confusing.

{{% /alert %}}

Review of expresion preset.

| VRM0                                     | VRM1      |
|------------------------------------------|-----------|
| joy(joy and fun are ambiguous)           | happy     |
| angry                                    | angry     |
| sorrow(written language)                 | sad       |
| fun(joy and fun are ambiguous)           | relaxed   |
| (new addition)                           | surprised |
| a(Changed to be natural in non-Japanese) | aa        |
| i(Changed to be natural in non-Japanese) | ih        |
| u(Changed to be natural in non-Japanese) | ou        |
| e(Changed to be natural in non-Japanese) | ee        |
| o(Changed to be natural in non-Japanese) | oh        |

- Add overrideMouse, overrideLipSync and overrideBlink.
- Separate VRM0 materialBind from MaterialColorBind and TextureTransformBind.

## VRMC_vrm: lookat

* Remove `degreemap.curve`.

## VRMC_vrm: firstperson

* Remove `firstPersonBone` and fixed to `Head`.
* `firstPersonBoneOffset` is changed to `lookAt.offsetFromHeadBone`.

## VRMC_springBone

|                    | VRM0                           | VRM1            |
|--------------------|--------------------------------|-----------------|
| configuration unit | Spring                         | Joint           |
| child              | children[0]                    | One of children |
| leaf               | Automatically add 7cm distance | Not add         |

- Separate to independent extension `VRMC_springBone`
- Add `capsule shape` to collider.
- Fixed mixing of Unity coordinate systems.

## VRMC_materials_hdr_emissiveMultiplier

In glTF, the emissiveFactor(float3) value range is [0.0, 1.0].
Add a factor to this so that it can represent values beyond 1.0.

|                      | VRM0                                | VRM1                                                                   |
|----------------------|-------------------------------------|------------------------------------------------------------------------|
| mtoon emissiveFactor | stored in extension (0, 1 no limit) | stored in gltf material's emissiveFactor(The range is limited to 0, 1) |

Available from gltf-2.0 standard materials (PBR), VRMC_materials_mtoon.

## VRMC_materials_mtoon

- Separate to independent extension `VRMC_materials_mtoon`.

`TODO`

## VRMC_node_constraint

`in development`

### translation

### rotation

### aim
