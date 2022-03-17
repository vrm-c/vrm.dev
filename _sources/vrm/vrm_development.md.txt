---
date: 2018-04-16T16:30:00+09:00
aliases: [/how_to_view_vrm/]
weight: 6
---

# VRMで開発する

* [programming](https://vrm-c.github.io/UniVRM/)
* [samples](/univrm/install/univrm_install_samples)

## VRMの特徴(開発者的な視点)

* 右手系Y-UPである ➡️ [Coordinate](https://vrm-c.github.io/UniVRM/ja/implementation/coordinate.html)
* メートル単位である ➡️ 1が、1メートルなのか、1cmなのか心配がありません
* 人型モデルでありボーン構成が決まっている ➡️ 汎用の人型モーションやモーションキャプチャーが使いやすい
* 初期姿勢が決まっている(Z-向きのT-Pose) ➡️ TPS的な用途でそのまま使えます
* 初期姿勢で回転・スケールが無いことが保証されている ➡️ 初期姿勢を加味したコードを書く負担が軽減できます
* 初期姿勢でボーンとMeshが重なることが保証されている(スキニングのBind行列に移動しか含まれていない) ➡️ Meshを加工する前にBakeするなどの負担が軽減できます
* 表情・視線操作が統一されている ➡️ [BlendShapeProxy](https://vrm-c.github.io/UniVRM/ja/vrm0/0_58_blendshape.html)
* 物理でない揺れものがセットアップ済み ➡️ 物理と干渉せずに揺れるのでゲームのギミックと干渉したり、暴れたりしません
* VRの設定が含まれている ➡️ [FirstPerson](https://vrm-c.github.io/UniVRM/ja/vrm0/firstperson.html)
* ライセンス情報が定義されている ➡️ モデルの持ち主の意思にそぐわない使用を回避できます

従来のゲーム開発のようにプロジェクトにアセットとして作り込むというよりは、
ランタイムにロードして動かす、という用途が想定されます。

## UniVRMで ランタイムロードする

ランタイムで UniVRM の ロード機能を使うことができます。
UniVRM は Asset(Prefab) を作成せずに、シーン上に直接 GameObject を作ります。
ロードした GameObject は、Instanciate した Prefab と同様に扱うことができます。

* [runtime load](https://vrm-c.github.io/UniVRM/ja/)

## UniVRMで ランタイムエクスポートする

ランタイムで UniVRM の エクスポート機能 を使うことができます。
この機能を使って、キャラクタークリエーションツール を実装することができます。

* [samples](/univrm/install/univrm_install_samples)

`Assets/VRM.Samples/Scenes/VRMRuntimeExporterSample.unity`

が例です。

## UniVRM以外の実装

* https://github.com/ruyo/VRM4U
* https://github.com/saturday06/VRM_IMPORTER_for_Blender
* https://github.com/virtual-cast/babylon-vrm-loader/
* https://github.com/pixiv/three-vrm/
* https://github.com/V-Sekai/godot-vrm
