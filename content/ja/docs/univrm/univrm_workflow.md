---
title: "ワークフロー"
date: 2018-04-16T16:30:00+09:00
url: /univrm/univrm_workflow/
weight: 1
---

## ワークフロー

{{< img src="images/vrm/VRM_changeVRM_jp.png" alt="vrm workflow" >}}

## humanoid avatarがセット済みの人間型モデルを用意します

Fbx等のUnityのHumanoidモデルを用意してください。ボーンの設定もされている必要があります。

{{< img src="images/vrm/DragImportedModel.png" width="300" height="300" alt="DragImported3DModel" >}}
<br>
<br>
{{< img src="images/vrm/ModelConversionMenu.png" width="900" height="200" alt="ModelConversionMenu" >}}

インポート後、Humanoidモデルをプロジェクトウィンドウからヒエラルキーウィンドウにドラッグし、ヒエラルキーウィンドウでモデルをクリックすると、上の図に示すようなメニューが表示されます。メニューに`Select`をクリックして、`Rig`をクリックして`Animation Type`を`Humanoid`に設定し、`Configure`ボタンをクリックします。現在のシーンを保存するかどうかのメッセージボックスが表示されます。`Save`をクリックして保存します。

|{{< img src="images/vrm/SetModelAsHumanoid.png" width="900" height="200" alt="SetModelAsHumanoid" >}}|
|-----|
|`Humanoid`に設定して、`Configure`をクリックします|

これで、このモデルのボーンマッピングの詳細が表示されます。 Unityは最初に各ボーンの自動認識を実行します。モデルの体、頭などを確認できます。割り当てられたコンポーネントが適合する場合、左端のアイコンが緑色で表示されます。適合しない場合は赤色で表示されます。

{{< img src="images/vrm/BoneMapping.png" width="600" height="700" alt="BoneMapping" >}}

### rigのconfigureでボーンの割り当てを修正
ボーンマッピングエラーを修正するには、ボーンマッピングに失敗したボーンの右端のアイコンをクリックし、このボーンに適合するコンポーネントを選択します。ボーンを自動的に再割り当てるには、インターフェースの左下にある`Mapping`をクリックし、`clear`をクリックして`Automap`をクリックします。

|{{< img src="images/vrm/BoneAssignment.png" width="900" height="650" alt="BoneAssignment" >}}|
|-----|
|適切なボーンコンポーネントを選択してください|

ただし、場合によってはFBXインポート時の自動認識が食い違うことがありますので(緑色で表示されます)、ボーンの設定が間違っていたら修正します。

例

* 前髪に顎ボーンが割り当てられる
* 目のハイライトに目ボーンが割り当てられる

|{{< img src="images/vrm/fix_eye.png" >}}|
|-----|
|立体ちゃんでは目のボーンの自動認識がうまくいっていなかったので手動で修正します。たとえば、eye_light_Lはeye_Lに置き換えられます|

## メニューからエクスポート
|{{< img src="images/vrm/UniVRMExportHumanoid.png" width="400" height="225" alt="UniVRMExportHumanoid">}}|
|-----|
|ヒエラルキーでhumanoid avatarをセットしたanimatorを選択すると有効になります。ファイルはデフォルトで`Assets`フォルダに保存されます|

|{{< img src="images/vrm/export_dialog_56.jpg" width="600"alt="vrm export" >}}|
|-----|
|`Author`欄に名前を入力して`Export`を押してください|

### Force T Pose
回転・スケールの除去前にモデルを強制的[T-Pose]({{< relref "vrm_tpose.md" >}})  にします。

#### 手動でT Poseにすることができます
自動で`T Pose`にすると姿勢が変わってしまう場合などに、手動で`T Pose`化することができます。
あらかじめモデルを手動[T-Pose]({{< relref "vrm_tpose.md" >}})  にしてからエクスポートメニューを実行し、
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

{{< img src="images/vrm/vrm_prefab.png" >}}

* 対象のProjectビューにvrmが表示されない場合、右クリックから``refresh``してみてください
* Prefabが生成されない場合、vrmファイルを右クリックして``reimport``してみてください
