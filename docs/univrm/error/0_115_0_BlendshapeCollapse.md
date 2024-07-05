# Export時にBlendShapeが乱れる

:::danger
MeshBake(正規化)処理のバグ
:::

`UniVRM-0.124.1` を使ってください。
`UniVRM-0.124.0` はこの件の修正で別のバグが入っています。
`UniVRM-0.115.0 以前` を使ってください。

:::warning
`UniVRM-0.116.0 ~ UniVRM-0.123.0` で発生。
:::

:::info

- エクスポート時に正規化
- 元のモデルにスケールがかかっていると顕在化
- 元のモデルに回転がかかっていると顕在化(Blender Z-UP)

:::

## ISSUES

- [Scaling があるときに BlendShape を bake すると変になる？ · Issue #2327 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2327)
- [v0.119.0での正規化の処理順が逆な気がする · Issue #2244 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2244)
- [UniVRMの正規化処理の際に表情の正規化がされていない · Issue #2234 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2234)

## PR

- [fix blendshape bake. by ousttrue · Pull Request #2329 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/pull/2329)
- [hierarchy にスケーリングがある場合の blend shape の正規化修正 by ousttrue · Pull Request #2240 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/pull/2240)
