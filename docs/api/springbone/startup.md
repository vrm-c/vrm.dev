# 初期化問題

## 原点前向き以外で初期化

- [Imported VRM hair and clothes goes to the left no matter the position · Issue #2440 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2440)

## T-Pose 以外で初期化

`SpringBone` の初期化は T-Pose が必須です。
対策として `T-Pose` である間に SpringBone の初期化を完了してください。

- `1.0` `~v0.126` 最初 SpringBone が動作する直前で初期化をしていました。`load` => 姿勢変更 => springbone初期化 という順番になったときにspringbone初期化で問題が発生していました。
- `1.0` `v0.127` Import 関数の中で SpringBone の初期化をするように変更しました。`runtime` load では初期姿勢に配慮する必要はありません。

- [After using the “FastSpringBoneReplacer.ReplaceAsync” interface, scaling the VRM model results in incorrect behavior. · Issue #2158 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2158)
- [\[0.77\]AsyncでランタイムロードしたモデルのScaleを1以上にするとSpringBoneの動作が怪しくなる · Issue #1115 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/1115)
