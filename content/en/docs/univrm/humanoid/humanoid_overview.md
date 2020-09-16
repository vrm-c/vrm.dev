---
title: Humanoid
aliases: [
    "/univrm/humanoid/humanoid/", 
    "/en/docs/univrm/humanoid/humanoid/", 
    "/en/univrm/settings/t_pose/", 
    "/en/docs/univrm/humanoid/vrm_tpose/",
    "/en/docs/univrm/humanoid/t_pose/"
]
tags: ["detail"]
weight: 1
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

VRM T-Pose[^tpose] conforms to Unity's Humanoid of the first implementation of VRM.

|{{< img src="images/vrm/T_pose.png" alt="T_pose" >}}|
|-----|
|T-Pose example|

Besides fundamental parts such as body, head, and leg, rules on arm and finger are also formulated:

* Palm faces downward, parallel to the ground along x axis
* Thumbs are parallel to the ground half way 45 degrees between x and z axis (the perspective view from the top) 

[^tpose]: [Mecanim Humanoids](https://blogs.unity3d.com/2014/05/26/mecanim-humanoids/)

## Supplementary Information regarding T-Pose
To normalize a model, the model with T-Pose is required.

If the model doesn't have T-Pose, you can make a T-Pose by doing any of the followings:

* Click `Menu` on top and select `Export humanoid` from `VRM` -> `UniVRM-0.XX` -> `Export humanoid`. The export dialog will pop up. Enable `force T-Pose` 
* Make T-Pose for the model by manually adjusting the rotation of the arm etc.

If the T-Pose made by the first option (automatic T-Pose) didn't go well, try to make T-Pose manually.

Also, if a model's normalization have been done once before, please avoid re-normalizing the model as much as you can as the accuracy may gradually deviate from standard.

The `Force T-Pose` option will be unchecked by default if the model's normalization was already done before. That being said, the system will detect whether the model contain Meta component.

## Common Issues

* Jaw's position is incorrect: during T-Pose process, there is a possibility that the jaw's position is different than before. If this is the case, please remove `jaw` (chin) bone setting from the model's (FBX) `Import setting` -> `Rig`. There is no influence on model if jaw bone is not used

* Facial parts (bangs, etc.) have weird movements: during T-Pose process, there is a possibility that the jaw's position is different than before. That is, facial parts (e.g. bangs) are mis-recognized as jaw and being assigned to Jaw bone. As such, bangs' movements become weird due to this issue. Please remove `jaw` bone setting from the model's (FBX) `Import setting` -> `Rig`.



