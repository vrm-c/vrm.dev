# SpringBone and Scaling

## Status by implementation

| implementation       | scaling | Dynamic parameter | manual update |
| -------------------- | ------- | ----------------- | ------------- |
| vrm-0                | v0.74   | ?                 | ?             |
| vrm-0 fastspringbone | ?       | ?                 | ?             |
| vrm-1                | ?       | v0.106(gravity)   | ✅            |

:::warning Only uniform (xyz is the same) scaling is supported
:::

:::warning There are parameters that are fixed during initialization
:::

- `0.x` [SpringBone does not work correctly if you change the model size, for example scale (8,8,8). · Issue #2242 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2242)
- `0.x` [VRM 0 系で FastSpringBone を使用した際に VRM の最親のゲームオブジェクトに FastSpringBone が追従しない · Issue #2047 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2047)
- `0.x` [Scale が VRM Spring Bone に正しく適用されません · Issue #922 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/922)
