---
title: "VRMSpringBone"
linkTitle: "Spring bone"
date: 2018-04-16T16:30:00+09:00
url: "/en/univrm/components/univrm_secondary/"
weight: 5
---

Spring bone setting.

# The node attached by spring bones
When VRM is imported, components related to spring bones are attached as follows:

* VRMSpringBone is attached to the node``secondary``.
* VRMSpringBoneColliderGroup is restored to the node previously attached during the export.

|{{< img src="images/vrm/vrm_settings.png">}}|
|-----|
|Please check``secondary``in the Hierarchy window if you cannot find VRMSpringBone|

# VRMSpringBone
The setting for making objects swaying such as tail, hair, clothes and so on. Please set the parent GameObject of an object in``Root Bones``. Drag an object (e.g.``hair1_L``) to the``Element X``box (e.g.``Element 0``). The number of elements can be changed in``Size``.

|{{< img src="images/vrm/VRMSpringBone.png" alt="lookat" >}}|
|-----|
|Example: Set the hair and ribbon in``Root Bones``|

That's it. The specified objects will perform swaying movements.

# [Option] VRMSpringBoneColliderGroup (Collision detection)
The collision detection mechanism can be added to prevent swaying objects from penetrating user-specified parts.

|{{< img src="images/vrm/collider.png" alt="collider" >}}|
|-----|
|Add the collision detection mechanism on the head (VRMSpringBoneColliderGroup)|

For example, attach VRMSpringBoneColliderGroup script to``head``and drag``head``to the``Element 0``box in``Collider Groups``. You can change its offset and radius value by double clicking the``Element``box in``Collider Groups``.

|{{< img src="images/vrm/set_collider.png" alt="set_collider" >}}|
|-----|
|Attach and set``head``in``Collider Groups``|

|{{< img src="images/vrm/spring_gizmo.png" alt="gizmo" >}}|
|-----|
|Gizmo at runtime (check``Draw Gizmo``in the Inspector of VRMSpringBone)|

## Set multiple collision detections in one VRMSpringBoneColliderGroup
Though the default is only set for one collision detection (the range of a sphere ball), users can change the setting to multiple detections (multiple balls) by changing the value of``Size``.