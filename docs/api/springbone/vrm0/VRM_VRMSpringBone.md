# VRM.VRMSpringBone

## Update の手動呼び出し

from [v0.106.0](/release/100/v0.106.0)

[\#1866](https://github.com/vrm-c/UniVRM/pull/1886)

- VRMSpringBone.SpringBoneUpdateType.Manual を追加
- VRMSpringBone.ManualUpdate を追加

- spring.ManualUpdate を使う前に spring.m_updateType を `Manual` に設定します。

以下のように呼び出すことができます。

```csharp
VRMSpringBone spring;

// setup
spring.m_updateType = VRMSpringBone.SpringBoneUpdateType.Manual;

// each frame
spring.ManualUpdate(time.deltaTime);
```

## 拡大縮小の対応状況

:::warning スケーリングは uniform(xyz が同じ) のみの対応です
:::

- `0.x` [SpringBone does not work correctly if you change the model size, for example scale (8,8,8). · Issue #2242 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2242)
- `0.x` [Scale が VRM Spring Bone に正しく適用されません · Issue #922 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/922)
- [SpringBone does not work correctly if you change the model size, for example scale (8,8,8). · Issue #2242 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2242)
