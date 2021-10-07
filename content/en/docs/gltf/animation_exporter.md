---
title: Animation
date: 2020-08-03T16:07:54+09:00
weight: 3
aliases: ["/en/dev/univrm-0.xx/gltf/animation_exporter/"]
tags: ["gltf", "unity"]
---

The definition for Animation is available in GLTF.

> VRM specification does not include the Animation.

### Version
* v0.44

### Support Status
| KeyName        |   |
|:---------------|:-:|
| TranslationKey | ○ |
| RotationKey    | ○ |
| ScaleKey       | ○ |
| BlendShapeKey  | × |

***

### How to Export an Animator
1. Add an Animator component to a root GameObject
2. Create an AnimatorController and set it in the Controller box (`Animator`->`Controller`) in the Inspector window
3. From the UnityEditor's toolbar, select `Windows`->`Animation`->`Animation` to open the Animation window
4. Make sure the root GameObject is selected and click the Create button in the center of the Animation window for creating AnimationClip
5. Add animation keys to this clip
6. Export as the glb file from `UniGLTF`->`Export`

### How to Export an Animation
1. Add an Animation component to a root GameObject
2. From the UnityEditor's toolbar, select `Windows`->`Animation`->`Animation` to open the Animation window
3. Make sure the root GameObject is selected and click the Create button in the center of the Animation window for creating AnimationClip
4. Now select the created AnimationClip (the Project window) and switch to Debug mode (the Inspector window), and then turn on `Legacy`

![Interpolation](/images/wiki/LegacyClip.png)

5. Set the created AnimationClip in the Animation box (`Animation`->`Animation`) in the Inspector window
6. Add animation keys to this clip
7. Export as the glb file from `UniGLTF`->`Export`

### Notes
1. Please set the Interpolation of RotationKey to either Quaternion or Euler Angles (Quaternion)
![Interpolation](/images/wiki/Interpolation.png)
2. For the Animator, all edited clips can be exported. However, the Animator states are not saved
3. Though a created Animator goes through multiple animations (Animation State Machine), the UniGLTF Importer (UniGLTF-1.25) will only import the first one




