---
date: 2018-04-16T16:30:00+09:00
weight: 3
aliases: ["/univrm/components/univrm_firstperson/"]
tags: ["unity"]
---

# VRMFirstPerson

## Overview

VRMFirstPerson has two types of settings: headset positioning and VR visibility settings.

**This setting is valid only if the application supports it.**

## Headset Position

This setting specifies the VR headset (HMD) position within the VRM model. You can adjust the HMD and avatar's head tracking.

### FirstPersonBone

This is a bone that follows the HMD when in first person. Please specify the head bone.

### FirstPersonOffset

Adjust the following position from the FirstPersonBone position. Adjust between the avatar's eyes.

## VR Visibility Setting

This is a setting that separates camera visibility settings for each mesh for VR applications. Two types of cameras are assumed for VR applications.
In order to deal with the inconvenience that occurs when your avatar is visible with this first-person camera, visibility can be set for each mesh.

### First-Person Camera

Video output to HMD

### Third-Person Camera

Video output to a device other than the HMD, video for distribution, mirrors, and other users' HMDs in multiplayer

### VR Visibility Setting

| Setting         | First-Person Camera | Third-Person Camera | Note                                                                       |
| --------------- | ------------------- | ------------------- | -------------------------------------------------------------------------- |
| Auto            | △                   | △                   | Initial setting. Details below                                             |
| Both            | 〇                  | 〇                  | The part with a certain distance from the head (e.g. body, hands and feet) |
| ThirdPersonOnly |                     | 〇                  | Only visible from the external camera (e.g. head, hair, hat)               |
| FirstPersonOnly | 〇                  |                     | The setting item itself may not be necessary.                              |

### Example of inconvenience

- Model's head gets cut by the near plane
- The view is blocked by the Model's hair
- The contents of your avatar, such as your teeth, are exposed

## Recommended Structure

We recommend dividing the mesh into the head and body at the avatar creation stage.

- Specify `ThirdPersonOnly` for `Head`
- Specify `Both` for `Body`

![Alicia's `Body` is set as `Both`, while the parts related to `Head` are set as `ThirdPersonOnly`.](/images/vrm/firstperson.png)

![The meshes with `ThirdPersonOnly` setting are not rendered in FirstPerson.](/images/vrm/firstperson_runtime.png)

## VR Visibility Setting

[VRMFirstPerson.Setup()](/api/firstperson)
Automatic division using Auto is a heavy process.

### Division criteria

Split the mesh into two groups: the first group contains triangles with HeadBone-related vertices while the second group contains triangles with the rest of the vertices

## Reset Visibility Setting

FirstPerson is set to Auto by default, but if export fails, you can reset VRMFirstPerson to reset it.
Export may fail when the reference becomes `Missing` when the configuration of the avatar changes, such as when the mesh increases or decreases.

### Reset Visibility Setting

Click the `gear icon ⚙` on the upper right corner of `VRM First Person(Script)` inspector and select `Reset` shown as follow:

![firstperson を reset](/images/vrm/firstperson_reset.gif)
