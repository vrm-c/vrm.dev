---
title: UniVRMモデルのワークフロー
linkTitle: ワークフロー
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T13:00:00Z
url: /univrm/workflow/
weight: 2
aliases:
- /univrm/univrm_workflow/
---

## ワークフロー

{{< imgproc vrm_workflow Fit "960x540"/ >}}

## humanoid avatarがセット済みの人間型モデルを用意します

Fbx等のUnityのHumanoidモデルを用意してください。ボーンの設定もされている必要があります。

{{< imgproc drag_imported_model Fit "300x749"/ >}}

{{< imgproc model_conversion_menu Fit "900x214"/ >}}

インポート後、Humanoidモデルをプロジェクトウィンドウからヒエラルキーウィンドウにドラッグし、ヒエラルキーウィンドウでモデルをクリックすると、上の図に示すようなメニューが表示されます。メニューに`Select`をクリックして、`Rig`をクリックして`Animation Type`を`Humanoid`に設定し、`Configure`ボタンをクリックします。現在のシーンを保存するかどうかのメッセージボックスが表示されます。`Save`をクリックして保存します。

{{< imgproc set_model_as_humanoid Fit "900x178" >}}
<code>Humanoid</code>に設定して、<code>Configure</code>をクリックします
{{< /imgproc >}}

これで、このモデルのボーンマッピングの詳細が表示されます。 Unityは最初に各ボーンの自動認識を実行します。モデルの体、頭などを確認できます。割り当てられたコンポーネントが適合する場合、左端のアイコンが緑色で表示されます。適合しない場合は赤色で表示されます。

{{< imgproc bone_mapping Fit "600x722"/ >}}

### rigのconfigureでボーンの割り当てを修正
ボーンマッピングエラーを修正するには、ボーンマッピング失敗したボーンの右端のアイコンをクリックし、このボーンに適合するコンポーネントを選択します。ボーンを自動的に再割り当てるには、インターフェースの左下にある`Mapping`をクリックし、`clear`をクリックして`Automap`をクリックします。

{{< imgproc bone_assignment Fit "900x630" >}}
適切なボーンコンポーネントを選択してください
{{< /imgproc >}}

ただし、場合によってはFBXインポート時の自動認識が食い違うことがありますので(緑色で表示されます)、ボーンの設定が間違っていたら修正します。

例

- 前髪に顎ボーンが割り当てられる
- 目のハイライトに目ボーンが割り当てられる

{{< imgproc fix_eye Fit "271x139" >}}
立体ちゃんでは目のボーンの自動認識がうまくいっていなかったので手動で修正します。たとえば、eye_light_Lはeye_Lに置き換えられます
{{< /imgproc >}}

## メニューからエクスポート

{{< imgproc univrm_export_humanoid Fit "400x225" >}}
ヒエラルキーでhumanoid avatarをセットしたanimatorを選択すると有効になります。ファイルはデフォルトで`Assets`フォルダに保存されます
{{< /imgproc >}}

{{< imgproc vrm_exporter Fit "245x450" >}}
<code>Author</code>欄に名前を入力して<code>Export</code>を押してください
{{< /imgproc >}}

### Force T Pose

回転・スケールの除去前にモデルを強制的に[T-Pose](/docs/dev/vrm/vrm_tpose/)にします。

#### 手動でT Poseにすることができます

自動で`T Pose`にすると姿勢が変わってしまう場合などに、手動で`T Pose`化することができます。あらかじめモデルを手動で[T-Pose](/docs/dev/vrm/vrm_tpose/)にしてからエクスポートメニューを実行し、上記の``Force T Pose``チェックボックスをオフにしてください。

### Pose Freeze

回転・スケールの除去処理を実行するか否か。VRMの規約に合致するようにモデルを正規化する処理です。初回のみ必要です。事前にこの処理を通過させることにより各種コンポーネントが正しく動作するようになります。

#### ヒエラルキーの正規化

{{< imgproc rot Fit "316x16" >}}
ボーンの向きに意味を持たせてあるタイプのモデル
{{< /imgproc >}}

{{< imgproc rot_scale Fit "423x74" >}}
Z-UPかつ非メートル単位のモデル (Blenderのデフォルト)
{{< /imgproc >}}

回転とスケールを除去します。

{{< imgproc without_rot_scale Fit "423x37" >}}
正規化済み
{{< /imgproc >}}

#### メッシュの正規化

{{< imgproc zup_mesh Fit "313x306" >}}
非T-PoseかつZ-UPで格納されているメッシュ
{{< /imgproc >}}

SkinnedMeshRenderer.BakeMeshを使ってT-Pose状態のメッシュを作り、座標操作でY-UP化します。

{{< imgproc yup_mesh Fit "321x305" >}}
T-PoseかつY-UPで格納されているメッシュ
{{< /imgproc >}}

## Import

vrmファイルをAssetsフォルダにインポートしてください。

{{< imgproc alicia_imported Fit "254x688" >}}
立体ちゃんのVRMをインポート|
{{< /imgproc >}}

Texture, Material, PrefabがVRMから自動生成されます。

{{< imgproc vrm_prefab Fit "445x307"/ >}}

- 対象のProjectビューにvrmが表示されない場合、右クリックから`refresh`してみてください
- Prefabが生成されない場合、vrmファイルを右クリックして`reimport`してみてください
