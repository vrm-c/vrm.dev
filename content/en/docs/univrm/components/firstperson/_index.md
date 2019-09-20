---
title: First-Person View
linkTitle: First-Person
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T16:00:00Z
url: /en/univrm/components/firstperson/
weight: 3
aliases:
- /en/univrm/components/univrm_firstperson/
---

## VRMFirstPerson

Settings related to first-person perspectives.

### FirstPersonBone

FirstPersonBone keeps track of a VR headset in a first-person view. Normally the head bone is assigned as FirstPersonBone.

### FirstPersonOffset

The offset from the tracking position to the FirstPersonBone position. We assume the default value [0, 0.06, 0] is the offset between the head and the middle of the eyes.

### Renderers

The settings for controlling mesh rendering on/off in a first-person view.

When a VRM model is used in VR applications, the user may see the model's head inside inadvertently, which is not a good experience of being immersed in VR worlds. To address this problem, we provide the function **VRMFirstPerson** which can hide the model's head in the first-person view. To test out first-person mode in Unity project, set up [render layer](/en/docs/dev/programming/univrm_use_firstperson/#specify-the-additional-render-layers-for-the-application) in the inspector window and call [first-person setup function](/en/docs/dev/programming/univrm_use_firstperson/#call-setup-function-at-runtime-and-set-layermask-in-camera). Then, go to `camera->cull mask` and select `EVERYTHING` but `THIRDPERSON_ONLY_LAYER`.

#### The case for the head being separated

Set **ThirdPersonOnly** on the head. Set **Both** on the rest parts.

{{< imgproc firstperson Fit "319x235" >}}
For a VRM model (below), the head is set to <strong>ThirdPersonOnly</strong> and the rest parts of the body are set to <strong>Both</strong>.
{{< /imgproc >}}

{{< imgproc firstperson_runtime Fit "860x181" >}}
Example: The meshes set to <strong>ThirdPersonOnly</strong> are not displayed in the first-person view.
{{< /imgproc >}}

#### The case for the head not being separated

Please set **Auto**. Except the model's head, the other parts are copied and treated as **FirstPersonOnly**. The original model is treated as **ThirdPersonOnly**. The parts regarding the head bone and its descendants with weights will be eliminated. 

#### The case for no particular setting

Please set **Both**.
