---
title: Humanoid
aliases: ["/univrm/humanoid/humanoid/"]
tags: ["detail"]
---

Work In progress

* Mainly based on whether MotionCapture's FK (Forward Kinematics) can be used.

## Related Issues
https://github.com/vrm-c/vrm-specification/issues/87

## Terminology

* Bone: Gltf node that contains `Humanoid` -> `HumanBones`
* Bone Name
    * hips
    * spine
    * chest (`optional` for Unity's Humanoid, `required` for VRM?)
    * upperChest(option)
    * neck (`optional` for Unity's Humanoid, `required` for VRM?)
    * head
    * Left/Right eye (`optional`)
    * left/Right shoulder (`optional` for Unity's Humanoid, `required` for VRM?)
    * Left/Right upperArm
    * Left/Right lowerArm
    * Left/Right hand
    * Left/Right upperLeg
    * Left/Right lowerLeg
    * Left/Right foot
    * Left/Right toe (`optional` for Unity's Humanoid, `required` for VRM?)
    * Left/Right thumb proximal, intermediate, distal (`optional`)
    * Left/Right index proximal, intermediate, distal (`optional`)
    * Left/Right middle proximal, intermediate, distal (`optional`)
    * Left/Right ring proximal, intermediate, distal (`optional`)
    * Left/Right little proximal, intermediate, distal (`optional`)

## Humanoid Requirements (Tentative)

* Target nodes can be selected regardless of skinning (GLTF skin, joint and Unity SkinnedMeshRenderer, etc.)
* All required bones are contained
* The Bone's parent-child relationship follows the humanoid definition (The first ancestor bone found in LowerLeg is UpperLeg etc.)
* The parent-child relationships for hips as root are described below. Bones that are in parentheses are non-required bones (optional):
    * hips - spine - chest - (upper chest) - neck - head
        * [Branch] from head - left - (eye)
        * [Branch] from head - right - (eye)
        * [Branch] from chest or upper chest - left - (shoulder) - upper arm - lower arm - hand - (fingers)
        * [Branch] from chest or upper chest - right - (shoulder) - upper arm - lower arm - hand - (fingers)
        * [Branch] from hips - left - upper leg - lower leg - foot - (toes)
        * [Branch] from hips - right - upper leg - lower leg - foot - (toes)

    * Inserting a node that is not related to humanoid is allowable as long as it follows an order above (e.g. LowerLeg's parent is object cube and this cube's parent is UpperLeg, etc.)
    * Non-required bones can be skipped (UpperArm's parent is not shoulder, but chest)

In addition

* Be the T-pose
* No rotation/scaling for each node

That's pretty much it.
