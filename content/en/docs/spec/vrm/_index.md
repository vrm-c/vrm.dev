---
title: VRM specifications
date: 2018-04-16T07:30:00Z
lastmod: 2019-09-18T11:30:00Z
url: /en/vrm_spec/
weight: 2
---

VRM is based on glb format, which is a binary form of [glTF 2.0](https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md). It is a model format for VR.

- [Update history](/en/vrm_spec/changes/)

## File extension

The file extension `.vrm` is used. It is compatible with `.glb`. If ModelFileName.vrm is changed to ModelFileName.glb, it can be loaded by GLTF-compatible applications (however, custom settings in VRM will not be shown).

## JSON extension

Extended as `VRM Extension` in the JSON part of GLB.

```json
{
    "extensionsUsed": {
        "VRM"
    },
    "extensions": {
        "VRM": {
            // The information of VRM extension
        }
    },
    // The information of general GLTF-2.0
}
```

**VRM JSON Schema**:

- https://github.com/vrm-c/vrm-specification/tree/master/specification/0.0/schema

**GLTF-2.0 JSON Schema**:

- https://github.com/KhronosGroup/glTF/tree/master/specification/2.0/schema

## VRM extension: VRM version, etc.

**Starting from v0.36**: `/extensions/VRM/exporterVersion`

{{% readfile file="/vrm/specification/0.0/schema/vrm.schema.json" highlight="json" %}}

## Savable elements

The information of an entire humanoid model. 

### GLTF-2.0: Texture

- GLTF-2.0 `/textures/`

No VRM extension.

### GLTF-2.0: Material (`json.extensions.VRM.materialProperties`)

- GLTF-2.0 `/materials/`

Saves information that can revert back to GLTF material (it is used when file extension is changed to GLB).

### VRM extension: `/extensions/VRM/materialProperties`

Saves VRM unique material information and items necessary for Unity. Please refer to [Available shaders in VRM](#available-shaders-in-vrm).

- [vrm.material.schema.json](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/schema/vrm.material.schema.json)

{{% readfile file="/vrm/specification/0.0/schema/vrm.material.schema.json" highlight="json" %}}

### GLTF-2.0: Mesh

* GLTF-2.0 `/meshes/`

No VRM extension.

#### Vertex attribute

- GLTF-2.0 `/meshes/*/primitives/*/attributes`

  - TANGENT (vec4) // TANGENT information is not saved in the exported VRM model since v0.42. It can be obtained based on the calculation of Normal and UV during the import.

#### Morph target information

- Morph target names are saved in `/meshes/*/primitives/*/extras/targetNames`

### GLTF-2.0: Skinning information

- GLTF-2.0 `/skins/`

No VRM extension.

### GLTF-2.0: Node

- GLTF-2.0 `/nodes/`

No VRM extension.

- Node
  - name
  - position(vec3)
  - rotation(quaternion)
  - scale(vec3)

## Rules for saving values

### GLTF2 rules

Saved values conform to the GLTF2 rules.

* The unit of distance is meter
* Right-handed coordinate system. The y-axis points up[^OpenGLCoord].

[^OpenGLCoord]: OpenGL coordinate system: The x-axis points right. The y-axis points up. The z-axis points forward (towards viewers).

### VRM rules

To increase the compatibility of humanoid models, the following constraints are imposed:

- Model is placed at the origin
- Model faces towards -Z direction[^OpenGLCoord]
- Model hierarchy is Y-UP[^ZUP]
- Model mesh is Y-UP[^ZUP]
- Model hierarchy is T-Pose
- Model mesh is T-Pose
- No local rotation for bone
- No scale for bone
- Head bone faces front direction[^LookAt]

[^ZUP]: A model derived from Z-UP modelers such as Blender and 3ds Max may be rotated 90 degrees on the x-axis in the middle of the hierarchy.
[^LookAt]: The eye direction is based on the head orientation towards the target when the model is at T-pose.

## Available shaders in VRM

The following shaders are available assuming operation of cel-style character model:

### Unlit type

Texture color is displayed as it is without lighting / shading.
There are four types available for handling degree of transparency:

- UnlitTexture (opacity)
- UnlitCutout (Makes the part with its transparency below the threshold transparent)
- UnlitTransparent (Alpha blending. ZWrite is not used)[^Transparent]
- UnlitTransparentZWrite (Alpha blending. ZWrite is used)[^TransparentZWrite]

[^Transparent]: For objects without substances such as smoke and cheek color.
[^TransparentZWrite]: For objects with substances such as semi-transparent clothes and the ends of semi-transparent hairs.

### MToon

The shader that supports cel shading and outline. Texture can be set more finely than Unlit.

## VRM extension: Model's bone mapping (`json.extensions.VRM.humanoid`)

The table of standard bones defined by Node and Humanoid.

{{% readfile file="/vrm/specification/0.0/schema/vrm.humanoid.bone.schema.json" highlight="json" %}}

### Defined bones

| Bone Name                                        | Required/Optional |
|:-------------------------------------------------|:------------------|
| neck                                             | Required          |
| head                                             | Required          |
| left/right Eye                                   | Optional          |
| hips                                             | Required          |
| spine                                            | Required          |
| chest                                            | Required          |
| upperChest                                       | Optional          |
| left/right Shoulder                              | Optional          |
| left/right UpperArm                              | Required          |
| left/right LowerArm                              | Required          |
| left/right Hand                                  | Required          |
| left/right UpperLeg                              | Required          |
| left/right LowerLeg                              | Required          |
| left/right Foot                                  | Required          |
| left/right Toe                                   | Optional          |  
| left/right Thumb Proximal, Intermediate, Distal  | Optional          |
| left/right Index Proximal, Intermediate, Distal  | Optional          |
| left/right Middle Proximal, Intermediate, Distal | Optional          |
| left/right Ring Proximal, Intermediate, Distal   | Optional          |
| left/right Little Proximal, Intermediate, Distal | Optional          |

## VRM extension: Model information (`json.extensions.VRM.meta`)

{{% readfile file="/vrm/specification/0.0/schema/vrm.meta.schema.json" highlight="json" %}}

### Information

#### Title

Set the name of the VRM model

#### Author

Enter the author name of the VRM model

#### Contact Information

Enter the contact information of the author

#### Reference

Describe original / related works of this avatar (URL), if any

#### Thumbnail

Register the thumbnail of the VRM model. A texture resolution about 2048x2048 is recommended. A texture number is assigned in meta information.  

#### Version

Version that creates VRM model

### Permission / License information

#### Personation / Characterization Permission

##### A person who can perform with this avatar (`json.extensions.VRM.meta.allowedUserName`)

- Only Author
- Explicitly Licensed Person
- Everyone

#### Permission to perform violent acts with this avatar (`json.extensions.VRM.meta.violentUssageName`)

- Disallow
- Allow

##### Permission to perform sexual acts with this avatar (`json.extensions.VRM.meta.sexualUssageName`)

- Disallow
- Allow

##### For commercial use (`json.extensions.VRM.meta.commercialUssageName`)

- Disallow
- Allow

##### Other License Url (`json.extensions.VRM.meta.otherPermissionUrl`)

If there are any conditions not mentioned above, put the URL link of the license document here.

#### Redistribution / Modifications License

##### License type (`json.extensions.VRM.meta.licenseName`)

- Redistribution Prohibited
- [Copyright wavier(CC0)](https://creativecommons.org/publicdomain/zero/1.0/deed.en)
- [Creative Commons CC BY License(CC_BY)](https://creativecommons.org/licenses/by/4.0/deed.en)
- [Creative Commons CC BY NC License(CC_BY_NC)](https://creativecommons.org/licenses/by-nc/4.0/deed.en)
- [Creative Commons CC BY SA License(CC_BY_SA)](https://creativecommons.org/licenses/by-sa/4.0/deed.en)
- [Creative Commons CC BY NC SA License(CC_BY_NC_SA)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en)
- [Creative Commons CC BY ND License(CC_BY_ND)](https://creativecommons.org/licenses/by-nd/4.0/deed.en)
- [Creative Commons CC BY NC ND License(CC_BY_NC_ND)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en)
- Other

##### Other License URL (`json.extensions.VRM.meta.otherLicenseUrl`)

If “Other” is selected, put the URL link of the license document here.

## VRM extension: Morph setting (`json.extensions.VRM.blendShapeMaster`)

Set an array of BlendShapeGroups to group BlendShape.

{{% readfile file="/vrm/specification/0.0/schema/vrm.blendshape.schema.json" highlight="json" %}}

### BlendShape groups (`json.extensions.VRM.blendShapeMaster.blendShapeGroups`)

{{% readfile file="/vrm/specification/0.0/schema/vrm.blendshape.group.schema.json" highlight="json" %}}

{{% readfile file="/vrm/specification/0.0/schema/vrm.blendshape.bind.schema.json" highlight="json" %}}

{{% readfile file="/vrm/specification/0.0/schema/vrm.blendshape.materialbind.schema.json" highlight="json" %}}

#### Expression name

Using a name with capital letters (e.g. the predefined expression name) is recommended.

#### Predefined expression name

Standby expression

- Neutral

Lip-sync

- A (aa)
- I (ih)
- U (ou)
- E (E)
- O (oh)

Blink

- Blink
- Blink_L
- Blink_R

Emotion

- Fun
- Angry
- Sorrow
- Joy

Eye control

- LookUp
- LookDown
- LookLeft
- LookRight

Others

- Unknown

#### BlendShape name identifier

The following method determines the character string ID that uniquely recognizes BlendShape from the system:

```plain
// Pseudo code
function GetID(preset, name)
{
  if (Preset != BlendShapePreset.Unknown)
  {
      return preset.ToString().ToUpper();
  }
  else
  {
      return name.ToUpper();
  }
}
```

- Set Preset and Name to make BlendShape ID unique.  

## VRM extension: First-person settings (`json.extensions.VRM.firstPerson`)

{{% readfile file="/vrm/specification/0.0/schema/vrm.firstperson.schema.json" highlight="json" %}}

When the user-controlled avatar model is rendered in first-person view (VR applications), the user may inadvertently see inner surfaces of the model’s head[^firstperson]. To address this problem, we can specify model's display states in first-person view.

[^firstperson]: In some cases the user may see the gum of the model inadvertently.

### firstPersonBone (`json.extensions.VRM.firstPerson.firstPersonBone`)

The bone whose rendering should be turned off in first-person view. Usually``Head``is specified.

### firstPersonBoneOffset (`json.extensions.VRM.firstPerson.firstPersonBoneOffset`)

The target position of the VR headset in first-person view. 
It is assumed that an offset from the head bone to the VR headset is added.

### meshAnnotations (`json.extensions.VRM.firstPerson.meshAnnotations`)

Switch display / undisplay for each mesh in first-person view or the others. The following settings are available:  

* Auto: automatically undisplays polygons with bone weights for firstPersonBone and their descendants[^firstPersonAuto]
* FirstPersonOnly: polygons that are displayed only in first-person view
* ThirdPersonOnly: polygons that are displayed only in third-person view (specify meshes that are not displayed in first-person view such as head)
* Both: no particularly specifying meshes display / undisplay

[^firstPersonAuto]: Generates a model with its undisplayed parts deleted automatically at runtime.

### Eye control settings

Control the model's eyes based on the direction from the model's head to the target.

#### Eye controller types (`json.extensions.VRM.firstPerson.lookAtTypeName`)

* Bone: control eyes with bone.
* BlendShape: control eyes with BlendShape. BlendShapePreset.LookUp, LookDown, LookLeft and LookRight are used.

#### Angle adjustment

Adjust the angle when applying the angle difference between the head and the target to the eye bone.

##### `json.extensions.VRM.firstPerson.lookAtHorizontalInner`

##### `json.extensions.VRM.firstPerson.lookAtHorizontalOuter`

##### `json.extensions.VRM.firstPerson.lookAtVerticalDown`

##### `json.extensions.VRM.firstPerson.lookAtVerticalUp`

## VRM extension: Spring bone settings (`json.extensions.VRM.secondaryAnimation`)

The setting of automatic animation of string-like objects such as tails and hairs.

### Spring bone (`secondaryAnimation.boneGroups`)

{{% readfile file="/vrm/specification/0.0/schema/vrm.secondaryanimation.schema.json" highlight="json" %}}

{{% readfile file="/vrm/specification/0.0/schema/vrm.secondaryanimation.spring.schema.json" highlight="json" %}}

#### Root of spring bone (`json.extensions.VRM.secondaryAnimation.boneGroups[0].bones`)

Specify the node index of the root bone of the swaying object.

#### Colliders for colliding with spring bone (`json.extensions.VRM.secondaryAnimation.boneGroups[0].colliderGroups`)

Specify the index of the collider group for collisions with swaying objects.

#### Parameters

##### center (`json.extensions.VRM.secondaryAnimation.boneGroups[0].center`)

The reference point of a swaying object can be set at any location except the origin. When implementing UI moving with warp, the parent node to move with warp can be specified if you don't want to make the object swaying with warp movement. 

##### dragForce (`json.extensions.VRM.secondaryAnimation.boneGroups[0].dragForce`)

The resistance (deceleration) of automatic animation.

##### gravityDir (`json.extensions.VRM.secondaryAnimation.boneGroups[0].gravityDir`)

The direction of gravity. Set (0, -1, 0) for simulating the gravity. Set (1, 0, 0) for simulating the wind.

##### gravityPower (`json.extensions.VRM.secondaryAnimation.boneGroups[0].gravityPower`)

The strength of gravity.

##### hitRadius (`json.extensions.VRM.secondaryAnimation.boneGroups[0].hitRadius`)

The radius of the sphere used for the collision detection with colliders. 

##### stiffness (`json.extensions.VRM.secondaryAnimation.boneGroups[0].stiffiness`)

The resilience of the swaying object (the power of returning to the initial pose).

### Collider group settings (`json.extensions.VRM.secondaryAnimation.colliderGroups`)

Set sphere balls for colliders used for collision detections with swaying objects.

{{% readfile file="/vrm/specification/0.0/schema/vrm.secondaryanimation.collidergroup.schema.json" highlight="json" %}}

#### Node (`json.extensions.VRM.secondaryAnimation.colliderGroups[0].node`)

The node of the collider group for setting up collision detections.

#### Local coordinate (`json.extensions.VRM.secondaryAnimation.colliderGroups[0].colliders[1].offset`)

The local coordinate from the node of the collider group.

#### Radius (`json.extensions.VRM.secondaryAnimation.colliderGroups[0].colliders[1].radius`)

The radius of the collider.
