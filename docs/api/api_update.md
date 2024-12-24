# 0.x to 1.0

The design of distributing functions to individual components of `VRM-0.x` has been changed to consolidating everything into `Vrm10Instance`.

| 0.x                           | 1.0                            |
| ----------------------------- | ------------------------------ |
| VRMBlendShapeProxy            | VRMInstance.Runtime.Expression |
| VRMLookAt                     | VRMInstance.Runtime.LookAt     |
| VRMSpringBone(各SpringのRoot) | VRMInstance.Runtime.SpringBone |

:::info It updates every frame in a fixed order.

1. Control Rig
2. Constraints
3. Gaze control
4. Expression

Considering posing and pose processing

- [-2] Pose the ControlRig (using Animator or your own process)
- [-1] ControlRig fixes. IK etc.
- [1] Applying ControlRig to transfer motion to the body
- [2] Constraints Solution
- [3] Gaze control solution
- [4] Expression apply
- [5] SpringBone Update

If you need control over the order, you can update the VRMInstance manually by switching it to update manually.
:::

## Expression

:::info VRMBlendShapeProxy is now Vrm10Instance.Runtime.Expression.

ImmediatelySetValue and AccumulateValue have been merged into SetWeight.
ImmediatelySetValue is gone.
:::

```csharp
var proxy = root.GetComponent<VRMBlendShapeProxy>();
proxy.ImmediatelySetValue(BlendShapeKey.CreateFromPreset(BlendShapePreset.A), 0.5f);
```

👇

```csharp
var vrm10 = root.GetComponent<Vrm10Instance>();
vrm10.Runtime.Expression.SetWeight(ExpressionKey.CreateFromPreset(ExpressionPreset.aa), 0.5f);
```

## LookAt

:::info VRMLookAt is now Vrm10Instance.Runtime.LookAt.

The values ​​previously updated by vrm10.Gaze.position or vrm10.Runtime.LookAt.SetLookAtYawPitch will be applied later by vrm10.Runtime.
:::

### Gaze

```csharp
var lookAt = root.GetComponent<VRMLookAt>();
lookAt.LookWorldPosition(new Vector3(x, y, z));
```

👇

```csharp
var vrm10 = root.GetComponent<Vrm10Instance>();
vrm10.LookAtTargetType = LookAtTargetTypes.CalcYawPitchToGaze;
vrm10.Gaze.position = new Vector3(x, y, z);
```

### SetYawPitch

```csharp
var lookAt = root.GetComponent<VRMLookAt>();
lookAt.ApplyRotations(yaw, pitch);
```

👇

```csharp
var vrm10 = root.GetComponent<Vrm10Instance>();
vrm10.LookAtTargetType = LookAtTargetTypes.SetYawPitch;
vrm10.Runtime.LookAt.SetLookAtYawPitch(yaw, pitch);
```
