---
title: Humanoid Overview
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

## Overview

VRM humanoid is compatible with the motion of MotionCapture's FK (Forward Kinematics).

The motion for one frame has the following information: 

* The Translation for Hips bone
* The Rotation for each bone

To reproduce the same pose in the Unity Scene (transferring data to a GameObject containing humanoid structure), the following conditions need to be satisfied: 

* Each bone (hips, spine, chest...) corresponds to its humanoid skeleton in GLTF Node (Unity GameObject) 
* The Bones' parent-child relationships are known.
* T-Pose must be the initial pose

{{% alert title="Note" color="info" %}}
If the ratio (e.g. crotch - knee - foot) is uncommon, the same pose cannot be reproduced. 
{{% /alert %}}

The creation of humanoid avatar is pretty much the same as the original: 

https://docs.unity3d.com/Manual/AvatarCreationandSetup.html

In addition, to make it easier to handle in the program, VRM Humanoid has the following features: 

* For the initial pose, all the Gltf Nodes (Unity GameObject) have no rotation
* No scaling changes

## T-Pose

|{{< img src="images/vrm/T_pose.png" alt="T_pose" >}}|
|-----|
|T-Pose example|

* Palm faces downward, and it is parallel to the ground along x axis
* Thumb is parallel to the ground half way 45 degrees between x and z axis (the perspective view from the top) 

## Unity Humanoid

In Unity, there is an object called `Avatar`.
This `Avatar` object can set up the model in humanoid mode.
Since the Humanoid Avatar settings are part of `fbx importer`, the model with Humanoid Avatar from data other than fbx cannot be created.
However, we can still create the Humanoid Avatar via program. See [humanoid component]({{< relref "meshutility_humanoid.md" >}}).

## Compatible with BVH

Compatible with BVH that has the initial pose as `T-Pose`.

* Substitute the translation value into hips
* Substitute the relative rotation value into its child

## Details

For the list of human bones, please refer to:

https://docs.unity3d.com/2019.4/Documentation/ScriptReference/HumanBodyBones.html

* Target nodes not containing skinning (GLTF skin, joint and Unity SkinnedMeshRenderer, etc.) can be selected
* All required bones must be included
* The Bone's parent-child relationship follows the humanoid definition (The first ancestor bone found in LowerLeg is UpperLeg etc.)
* The parent-child relationships for hips as root are described below. Bones that are in parentheses are non-required bones (optional):
    * hips - spine - chest - (upper chest) - neck - head
        * [Branch] from head - left - (eye)
        * [Branch] from head - right - (eye)
        * [Branch] from chest or upper chest - left - (shoulder) - upper arm - lower arm - hand - (fingers)
        * [Branch] from chest or upper chest - right - (shoulder) - upper arm - lower arm - hand - (fingers)
        * [Branch] from hips - left - upper leg - lower leg - foot - (toes)
        * [Branch] from hips - right - upper leg - lower leg - foot - (toes)

    * Inserting non-bone objects between humanoid bones is allowable (e.g., LowerLeg’s parent is a Cube GameObject and this Cube’s parent is UpperLeg, etc.)
    * Non-required bones can be skipped (UpperArm's parent can be chest instead of shoulder)

## Related Issues

* https://github.com/vrm-c/vrm-specification/issues/87

## References

* [Mecanim Humanoids](https://blogs.unity3d.com/jp/2014/05/26/mecanim-humanoids/)
* [BlenderからUnityのHumanoid互換でfbxをエクスポートする](https://qiita.com/ousttrue/items/aead1c943855561b62e7)

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
