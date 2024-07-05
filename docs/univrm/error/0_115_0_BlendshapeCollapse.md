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
