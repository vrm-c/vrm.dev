---
title: "VRMSpringBone"
linkTitle: "Spring bone"
date: 2018-04-16T16:30:00+09:00
weight: 5
url: "univrm/springbone/univrm_secondary/"
---

This section is about spring bone settings.

# Nodes attached by spring bones
When VRM is imported, nodes attached by components related to spring bones can be found as described below:

* VRMSpringBone is attached to the node``secondary``.
* VRMSpringBoneColliderGroup is attached to nodes exported last time.

|{{< img src="images/vrm/vrm_settings.png">}}|
|-----|
|Please check``secondary``in the Hierarchy window if you cannot find VRMSpringBone|

# VRMSpringBone
The setting for making objects swaying such as tail, hair, clothes and so on. Please set the target object's parent Gameobject in``Root Bones``. To do that, drag a target object (e.g.``hair1_L``) from``Hierarchy``to the``Element X``field (or click the rightmost icon of``Element X``then you can see a list of selectable components). Adjust``Size``to change the number of``Root Bones``you want to put in.

|{{< img src="images/vrm/VRMSpringBone.png" alt="lookat" >}}|
|-----|
|Example: Set the hair and ribbon in``Root Bones``|

That's it. Try to adjust``Stiffness Force``,``Gravity Power``, etc. The target objects will perform swaying movements.

# [Option] VRMSpringBoneColliderGroup (Collision detection)
The collision detection mechanism can be added to prevent swaying objects from penetrating user-specified parts.

|{{< img src="images/vrm/collider.png" alt="collider" >}}|
|-----|
|Add the collision detection mechanism on the head (VRMSpringBoneColliderGroup)|

For example, hit``Add Component``to attach VRMSpringBoneColliderGroup script to``head``and drag``head``to the``Element 0``field in``Collider Groups``. You can change its offset and radius value by double clicking the``Element 0``field in``Collider Groups``.

|{{< img src="images/vrm/set_collider.png" alt="set_collider" >}}|
|-----|
|Attach the VRMSpringBoneColliderGroup script to``head``and set``head``in``Collider Groups``|

|{{< img src="images/vrm/spring_gizmo.png" alt="gizmo" >}}|
|-----|
|Gizmo at runtime (check``Draw Gizmo``in the Inspector of VRMSpringBone)|

## Set multiple collision detections in VRMSpringBoneColliderGroup
Though the default is only set for one collision detection (a sphere range from the target), users can change the setting to multiple detections (multiple sphere ranges from multiple targets) by adjusting the value of``Size``and multiple targets can then be put into``Element``fields.
