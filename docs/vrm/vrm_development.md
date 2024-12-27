# VRMで開発する

- [programming](/api/)

## VRMの特徴(開発者的な視点)

- `vrm-0.x` `vrm-1.0` 右手系Y-UPである ➡️ [Coordinate](/api/coordinate)
- `vrm-0.x` `vrm-1.0` メートル単位である ➡️ 1が、1メートルなのか、1cmなのか心配がありません
- `vrm-0.x` `vrm-1.0` 人型モデルでありボーン構成が決まっている ➡️ 汎用の人型モーションやモーションキャプチャーが使いやすい
- `vrm-0.x` `vrm-1.0` 初期姿勢が決まっている(`0.x Z-` `1.0 Z+` 向きのT-Pose) ➡️ TPS的な用途でそのまま使えます
- `vrm-0.x` 初期姿勢で回転・スケールが無いことが保証されている ➡️ 初期姿勢を加味したコードを書く負担が軽減できます

:::tip
技術的に VRM-0.X は bake 済みの T-Pose を介して FK の humanoid motion を共有する仕組みです。

T-Pose bake をVrm-0.X 正規化と呼んでいます。

VRM-1.0 は bake しない T-Pose を介して humanoid motion を共有する仕組みです。
そのため異なる T-Pose 同士での retarget 手法を VRM-Animation で補完しました。

- [VRM 1.0](/vrm1)
- [VRM Animation](/vrma)

VRM-1.0 に対応するためには、FK retarget の実装が必要になります。
VRM-0.x(各ボーンの rotation を代入するだけ) に比べて RunTime の実装難易度がやや高くなります。

- [ポーズデータの互換性について](https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm_animation-1.0/how_to_transform_human_pose.ja.md)
  :::

* `vrm-0.x` 初期姿勢でボーンとMeshが重なることが保証されている(スキニングのBind行列に移動しか含まれていない) ➡️ Meshを加工する前にBakeするなどの負担が軽減できます
* `vrm-1.0` 初期姿勢でボーンとMeshが重なることが保証できない。Bind行列に制限を課すことができなかった。
* `vrm-0.x` `vrm-1.0` 表情・視線操作が統一されている ➡️ [BlendShapeProxy](/api/runtime-import/VRM_BlendShapeProxy)
* `vrm-0.x` `vrm-1.0` 物理でない揺れものがセットアップ済み ➡️ 物理と干渉せずに揺れるのでゲームのギミックと干渉したり、暴れたりしません
* `vrm-0.x` `vrm-1.0` VRの設定が含まれている ➡️ [FirstPerson](/api/firstperson)
* `vrm-0.x` `vrm-1.0` ライセンス情報が定義されている ➡️ モデルの持ち主の意思にそぐわない使用を回避できます

従来のゲーム開発のようにプロジェクトにアセットとして作り込むというよりは、
ランタイムにロードして動かす、という用途が想定されます。

## UniVRMで ランタイムロードする

ランタイムで UniVRM の ロード機能を使うことができます。
UniVRM は Asset(Prefab) を作成せずに、シーン上に直接 GameObject を作ります。
ロードした GameObject は、Instanciate した Prefab と同様に扱うことができます。

- [runtime load](/api/runtime-import)

## UniVRMで ランタイムエクスポートする

ランタイムで UniVRM の エクスポート機能 を使うことができます。
この機能を使って、キャラクタークリエーションツール を実装することができます。

- [samples](/api/sample/)

`Assets/VRM.Samples/Scenes/VRMRuntimeExporterSample.unity`

が例です。

## UniVRM以外の実装

[showcase](/showcase/?flags=8)

- https://github.com/ruyo/VRM4U
- https://github.com/saturday06/VRM_IMPORTER_for_Blender
- https://github.com/virtual-cast/babylon-vrm-loader/
- https://github.com/pixiv/three-vrm/
- https://github.com/V-Sekai/godot-vrm
