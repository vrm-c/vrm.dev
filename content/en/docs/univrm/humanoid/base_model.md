---
title: "Create Initial VRM Model"
date: 2020-10-14T17:46:52+09:00
weight: 2
tags: ["unity"]
---

The target `GameObject` can be exported as VRM if the following two conditions are fulfilled:

* `Animator` component is attached 
* `Animator's HumanoidAvatar` is set up

## FBX

To meet the conditions described above for an imported fbx, set the fbx model as `humanoid` from `Import Settings -> Rig -> Animation Type`.
After `humanoid` type is applied, `Animator` component with `HumanoidAvatar` will be attached to the fbx's prefab.

To convert the fbx model to `humanoid` type successfully:

* All required bones are included
* Bones' parent-child relationships are correct (e.g. hips -> leg -> foot. not the other way around).

No restrictions on bone naming.

## Modify FBX in the scene

You can modify fbx's GameObject by

* adding children GameObjects to Parent GameObjects
* disabling GameObjects

If you want to change the hierarchy structure, please refer to `HumanoidComponent`, which is described in the next section.

## Create HumanoidAvatar manually from GameObject

`HumanoidAvatar` can be created without using `fbx importer`. 
Check out [Humanoid Component]({{< relref "meshutility_humanoid.md" >}}) for more details.

If the following types of models are in the scene:

* Humanoid model in GLTF format
* Humanoid-like model made by cubes and so on

The `HumanoidAvatar` can be created as long as each required bone is assigned accordingly based on the object in Hierarchy.
Finally, to export the target `GameObject` as VRM, attach `Animator` component and assign the created `HumanoidAvatar` to `Avatar` field.
