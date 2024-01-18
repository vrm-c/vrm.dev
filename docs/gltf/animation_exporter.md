---
tags: ["unity", "gltf"]
weight: 3
aliases: ["/dev/univrm-0.xx/gltf/animation_exporter/"]
---

# Animation

- https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#animations

Partially supported from `v0.44`.

:::warning Animation
VRM specification does not include the Animation.
:::

:::warning Export does not work in Runtime
Export will not work because Runtime cannot retrieve AnimationClip information.
:::

## Support Status

| channel.path         | type       | import | export |
|:---------------------|------------|:------:|:------:|
| translation          | vec3       |   ○    |   ○    |
| rotation             | quaternion |   ○    |   ○    |
| scale                | vec3       |   ○    |   ○    |
| weights(morphTarget) | float[]    |   ○    |   ○    |

| interpolation | import | export |
|---------------|--------|--------|
| LINEAR        | ○      | ○      |
| STEP          | ○      | ○      |
| CUBICSPLINE   | ○      | LINEAR |

## Export
### How to Export an Animator

1. Add an Animator component to a root GameObject
2. Create an AnimatorController and set it in the Controller box (`Animator`->`Controller`) in the Inspector window
3. From the UnityEditor's toolbar, select `Windows`->`Animation`->`Animation` to open the Animation window
4. Make sure the root GameObject is selected and click the Create button in the center of the Animation window for creating AnimationClip
5. Add animation keys to this clip
6. Export as the glb file from `UniGLTF`->`Export`

### How to Export an Animation

1. Add an Animation component to a root GameObject
2. Open the Animation window by selecting Window>Animation from the UnityEditor toolbar.
3. Make sure that the root GameObject is selected and press the Create button displayed in the center of the Animation window to create an AnimationClip.
4. Set the Inspector settings to Debug mode and turn on the Legacy flag of AnimationClip

![Interpolation](/images/wiki/LegacyClip.png)

5. Set the created AnimationClip in the Animation item of the Animation component
6. Add animation keys to this clip
7. Output glb from UniGLTF>Export

### Notes

1. Please set the Interpolation of RotationKey to either Quaternion or Euler Angles (Quaternion)

![Interpolation](/images/wiki/Interpolation.png)

2. For the Animator, all edited clips can be exported. However, the Animator states are not saved
3. Though a created Animator goes through multiple animations (Animation State Machine), the UniGLTF Importer (UniGLTF-1.25) will only import the first one

### export properties

`Assets/UniGLTF/Editor/Animation/AnimationExporter.cs`

| property            |                                                      |
|---------------------|------------------------------------------------------|
| m_LocalPosition     | vec3                                                 |
| localEulerAnglesRaw | Unimplemented|
| m_LocalRotation     | quaternion                                           |
| m_LocalScale        | vec3                                                 |
| blendShape          | float[] Record the state of all blendShapes together

### interpolation

`Assets/UniGLTF/Editor/Animation/AnimationExporter.cs`

| unity                                 | export                                    |
|---------------------------------------|-------------------------------------------|
| AnimationUtility.TangentMode.Linear   | glTFAnimationTarget.Interpolations.LINEAR |
| AnimationUtility.TangentMode.Constant | glTFAnimationTarget.Interpolations.STEP   |
| その他                                | glTFAnimationTarget.Interpolations.LINEAR |

## glTF: CUBICSPLINE == AnimationUtility.TangentMode.Free

- https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#interpolation-cubic
