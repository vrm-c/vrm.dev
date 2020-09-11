---
title: "VRMFirstPerson"
date: 2018-04-16T16:30:00+09:00
weight: 3
aliases: ["/en/univrm/components/univrm_firstperson/"]
---

VRM FirstPerson has two types of setting:

* VR headset position
* The visibility setting of a mesh from a camera in VR

※ These settings only work on VRM application side

## Headset Position

You can adjust how the movement of the headset is reflected on the model's head by the followings:

### FirstPersonBone

FirstPersonBone keeps track of a VR headset in the first-person view.
Normally the Head bone is assigned as FirstPersonBone.

### FirstPersonOffset

The offset from the FirstPersonBone position to the tracking position. [0, 0.06, 0] is the default offset from the head to the middle of the eyes.

## VR Visibility Setting

The visibility setting is for VR applications.
For a VR application, two types of camera, First-person camera and Third-person camera, are expected to be used.

* First-person camera (Head-mounted display)
* Third-person camera (Other users' HMD, mirror, etc. For streaming)

However, for first-person camera, the user may encounter the following situations:

* Model's head gets cut by the near plane
* The view is blocked by the Model's hair
* The inside of the model's head can be seen such as teeth

To address the above issues, you can set up the visibility of each mesh for First-person camera and Third-person camera:

| Setting         | First-Person Camera | Third-Person Camera | Note                                                                       |
|-----------------|---------------------|---------------------|----------------------------------------------------------------------------|
| Both            | 〇                  | 〇                  | The part with a certain distance from the head (e.g. body, hands and feet) |
| FirstPersonOnly | 〇                  |                     |                                                                            |
| ThirdPersonOnly |                     | 〇                  | Only visible from the external camera (e.g. head, hair, hat)               |
| Auto            | Described below     | Described below     | Default                                                                    |

### Reset Visibility Setting

The default setting for Mesh Renderer in VRMFirstPerson is `Auto`.
If you increase/decrease the number of meshes (i.e. change the model's structure), the reference to the original mesh may become `Missing`, resulting in VRM Export failure.
We can fix the missing problem by resetting VRMFirstPerson.
Click the `gear icon ⚙` on the upper right corner of `VRM First Person(Script)` inspector and select `Reset` shown as follow:

{{< img src="images/vrm/firstperson_reset.gif" width="600" alt="firstperson reset" >}}

### Use Auto to split Mesh into Both and ThirdPersonOnly

If `Auto` is specified, the mesh will be split into two parts (`Both` and `ThirdPersonOnly`) automatically during import.
In UniVRM, call [VRMFirstPerson.Setup()]({{< relref "univrm_use_firstperson.md#call-setup-function-at-runtime-and-set-layermask-in-camera" >}}) for auto splitting.

#### MeshAnnotation.Auto Algorithm

* For a mesh specified as `Auto`, each vertex will be checked whether it contains the weight of Head bone (or the child of the Head bone)
* Split the mesh into two groups: the first group contains triangles with HeadBone-related vertices while the second group contains triangles with the rest of the vertices
* Set the mesh containing the HeadBone-related vertices as `ThirdPersonOnly`. And another mesh is set as `Both`

Note that auto splitting is a heavy processing.

### Recommended Structure

Split the model into `Head` and `Body`.

* Specify `ThirdPersonOnly` for `Head`
* Specify `Both` for `Body` 

| {{< img src="images/vrm/firstperson.png" >}}                                                      |
|---------------------------------------------------------------------------------------------------|
| Alicia's `Body` is set as `Both`, while the parts related to `Head` are set as `ThirdPersonOnly`. |

| {{< img src="images/vrm/firstperson_runtime.png" alt="firstperson" >}}     |
|----------------------------------------------------------------------------|
| The meshes with `ThirdPersonOnly` setting are not rendered in FirstPerson. |
