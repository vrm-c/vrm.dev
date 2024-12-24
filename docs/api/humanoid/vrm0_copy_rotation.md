# `vrm-0.x` humanoid bone の回転をコピーする

```cs
foreach(var bone in bones)
{
}
```

:::info
骨格とモーションの初期姿勢が一致するときに可能です。
:::

:::tip vrm-0.x と T-Pose 向けモーション

vrm-0.x はスケルトンが正規化されているので、
初期姿勢が TPose のモーションを適用できます。

:::

:::danger vrm-1.0 は正しく動作しない場合があります

モデルによって異なることに注意してください。
:::

:::warning bvh は vrm-0.x と互換性があるものもあります
BVH の初期姿勢は特に決まっていません。
:::

