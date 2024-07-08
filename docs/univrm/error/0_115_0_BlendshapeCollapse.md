# Exporting: BlendShape is broken

:::danger
Bug in MeshBake (normalization) processing
:::

Please use `UniVRM-0.124.1`.
`UniVRM-0.124.0` fixes this issue and contains another bug.
Please use `UniVRM-0.115.0 or earlier`.

:::warning
Occurred with `UniVRM-0.116.0 ~ UniVRM-0.123.0`.
:::

:::info

- Normalize on export
- Appears when the original model is scaled
- Appears when the original model is rotated (Blender Z-UP)

:::

## ISSUES

- [Scaling があるときに BlendShape を bake すると変になる？ · Issue #2327 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2327)
- [v0.119.0での正規化の処理順が逆な気がする · Issue #2244 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2244)
- [UniVRMの正規化処理の際に表情の正規化がされていない · Issue #2234 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2234)

## PR

- [fix blendshape bake. by ousttrue · Pull Request #2329 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/pull/2329)
- [hierarchy にスケーリングがある場合の blend shape の正規化修正 by ousttrue · Pull Request #2240 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/pull/2240)
