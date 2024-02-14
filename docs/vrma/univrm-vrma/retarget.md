# 初期姿勢の差異の解決について

:::info vrm-0.x 互換のデータを使用している場合は問題が顕在化しない場合があります

- Model のスケルトン
- Animation のスケルトン

が vrm 互換の正規化された T-Pose の場合は変換せずに動きます。
:::

## UniVRM の実装

UniVRM の vrm-1.0 実装には、初期姿勢の変換をサポートする `ControlRig` が
含まれています。
ランタイムロードでは自動的にセットアップされます。

[ControlRig 正規化されていないモデルを操作する](/vrm1_controlrig/)

:::tip Unity の mecanim humanoid に肩代りしてもらうこともできます

モーション元と先の両方に`humanoid avatar` がセットアップされている場合
:::

## 実装

UniVRM 以外でもアニメーション変換を実装できます。

https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm_animation-1.0/how_to_transform_human_pose.ja.md

