---
linkTitle: "揺れモノ"
date: 2018-04-16T16:30:00+09:00
weight: 5
aliases: ["/univrm/components/univrm_secondary/"]
tags: ["unity"]
---

# VRMSpringBone
## Overview

A group of components related to oscillating mono settings.

## Where components are added
### VRMSpringBone

When importing a VRM, it will be added to an automatically generated game object named secondary.

### VRMSpringBoneColliderGroup

When importing VRM, it will be added to the game object added during export.

![Please check `secondary` in the Hierarchy window if you cannot find VRMSpringBone](/images/vrm/vrm_settings.png)

## VRMSpringBone

The setting for making objects swaying such as tail, hair, clothes and so on. Please set the target object's parent Gameobject in``Root Bones``. To do that, drag a target object (e.g.``hair1_L``) from``Hierarchy``to the``Element X``field (or click the rightmost icon of``Element X``then you can see a list of selectable components). Adjust``Size``to change the number of``Root Bones``you want to put in.

![Example: Set the hair and ribbon in `Root Bones`](/images/vrm/VRMSpringBone.png)

That's it. Try to adjust `Stiffness Force`, `Gravity Power`, etc. The target objects will perform swaying movements.

## [Option] VRMSpringBoneColliderGroup (Collision detection)

The collision detection mechanism can be added to prevent swaying objects from penetrating user-specified parts.

![Add the collision detection mechanism on the head (VRMSpringBoneColliderGroup)](/images/vrm/collider.png)

For example, hit `Add Component` to attach VRMSpringBoneColliderGroup script to``head``and drag``head``to the``Element 0``field in``Collider Groups``. You can change its offset and radius value by double clicking the``Element 0``field in``Collider Groups``.

![Attach the VRMSpringBoneColliderGroup script to `head` and set `head` in `Collider Groups`](/images/vrm/set_collider.png)

![Gizmo at runtime (check `Draw Gizmo` in the Inspector of VRMSpringBone)](/images/vrm/spring_gizmo.png)

## There is no set VRMSpringBone

VRMSpringBone was attached to the node `secondary` during import.

## Complex hit detection settings

When setting up complex collision detection, set multiple spheres in one added VRMSpringBoneColliderGroup.

## Prevents shaking when moving

Normal VRMSpringBone is calculated based on the world origin. By specifying a game object as the Center of VRMSpringBone, you can change the reference point of the shaking object.
Normal VRMSpringBone is calculated based on the world origin. By specifying a game object as the Center of VRMSpringBone, you can change the reference point of the shaking object.

