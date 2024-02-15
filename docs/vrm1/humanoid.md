# VRMC_vrm: humanoid

必須ボーンの見直し。

|                     | VRM0 | VRM1 |
| ------------------- | ---- | ---- |
| neck                | 必須 |      |
| head                | 必須 | 必須 |
| hips                | 必須 | 必須 |
| spine               | 必須 | 必須 |
| chest               | 必須 |      |
| left/right UpperArm | 必須 | 必須 |
| left/right LowerArm | 必須 | 必須 |
| left/right Hand     | 必須 | 必須 |
| left/right UpperLeg | 必須 | 必須 |
| left/right LowerLeg | 必須 | 必須 |
| left/right Foot     | 必須 | 必須 |

以下の項目が廃止になります(`VRMHumanoidDescription` に記録されていたが未使用)。

- armStretch
- legStretch
- upperArmTwist
- lowerArmTwist
- upperLegTwist
- lowerLegTwist
- feetSpacing
- hasTranslationDoF
