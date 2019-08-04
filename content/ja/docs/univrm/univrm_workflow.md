---
title: "UniVRMモデルのワークフロー"
date: 2018-04-16T16:30:00+09:00
url: /univrm/univrm_workflow/
weight: 2
---

## ワークフロー

{{< img src="images/vrm/vrm_workflow.png" alt="vrm workflow" >}}

## humanoid avatarがセット済みの人間型モデルを用意します

Fbx等のUnityのHumanoidモデルを用意してください。

FbxのImport SettingsのRigタブでAnimationTypeをHumanoidにしてください。

|{{< img src="images/vrm/alicia_generic.png" >}}|
|-----|
|humanoidに設定します|

### rigのconfigureでボーンの割り当てを修正

fbxインポート時の自動認識が食い違うことがあります。

例

* 前髪に顎ボーンが割り当てられる
* 目のハイライトに目ボーンが割り当てられる

|{{< img src="images/vrm/fix_eye.png" >}}|
|-----|
|立体ちゃんでは目のボーンの自動認識がうまくいっていなかったので手動で修正しました|

## メニューからエクスポート

|{{< img src="images/vrm/vrm_menu_disable.png" >}}|
|-----|
|ヒエラルキーでhumanoid avatarをセットしたanimatorを選択すると有効になります|

|{{< img src="images/vrm/vrm_menu_enable.png" >}}|
|-----|
|ヒエラルキーでhumanoid avatarをセットしたanimatorを選択すると有効になります|

|{{< img src="images/vrm/export_dialog.png" >}}|
|-----|
|チェックボックスを設定してExportを押してください|

### Force T Pose
回転・スケールの除去前にモデルを強制的に[T-Pose](../../vrm_tpose/)にします。

#### 手動でT Poseにすることができます
自動で`T Pose`にすると姿勢が変わってしまう場合などに、手動で`T Pose`化することができます。
あらかじめモデルを手動で[T-Pose](../../vrm_tpose/)にしてからエクスポートメニューを実行し、
上記の``Force T Pose``チェックボックスをオフにしてください。

### Pose Freeze
回転・スケールの除去処理を実行するか否か。
VRMの規約に合致するようにモデルを正規化する処理です。
初回のみ必要です。
事前にこの処理を通過させることにより各種コンポーネントが正しく動作するようになります。

#### ヒエラルキーの正規化

|{{< img src="images/vrm/rot.png" >}}|
|-----|
|ボーンの向きに意味を持たせてあるタイプのモデル|

|{{< img src="images/vrm/rot_scale.png" >}}|
|-----|
|Z-UPかつ非メートル単位のモデル(Blenderのデフォルト)|

回転とスケールを除去します。

|{{< img src="images/vrm/without_rot_scale.png" >}}|
|-----|
|正規化済み|

#### メッシュの正規化

|{{< img src="images/vrm/zup_mesh.png" >}}|
|-----|
|非T-PoseかつZ-UPで格納されているメッシュ|

SkinnedMeshRenderer.BakeMeshを使ってT-Pose状態のメッシュを作り、座標操作でY-UP化します。

|{{< img src="images/vrm/yup_mesh.png" >}}|
|-----|
|T-PoseかつY-UPで格納されているメッシュ|

## Import
vrmファイルをAssetsフォルダにインポートしてください。

|{{< img src="images/vrm/alicia_imported.png" >}}|
|-----|
|立体ちゃんのVRMをインポート|

Texture, Material, PrefabがVRMから自動生成されます。

* 対象のProjectビューにvrmが表示されない場合、右クリックから``refresh``してみてください
* Prefabが生成されない場合、vrmファイルを右クリックして``reimport``してみてください
