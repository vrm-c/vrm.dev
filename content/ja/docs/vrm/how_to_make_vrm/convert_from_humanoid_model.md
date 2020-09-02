---
title: "1. VRMファイルを作成する"
date: 2020-08-26T15:52:06+09:00
url: "/how_to_make_vrm/convert_from_humanoid_model/"
weight: 1
---

VRMファイルをつくるためには、[Unity](https://unity3d.com/jp)と[UniVRM](https://github.com/vrm-c/UniVRM)を使用します。
おおまかな作業のながれは以下のようになります：

1. Unityで3Dモデルデータと[UniVRM](https://github.com/vrm-c/UniVRM)を読み込む。Unity上で大きさやマテリアルなどを調整・設定する
1. 一度UnityからVRMファイルを出力する（※正規化と呼びます）
1. 上記出力した VRMファイルをUnityで読み込み、Unity上でVRM独自の設定（[ライセンス]({{< relref "univrm_meta.md" >}})・[揺れ物]({{< relref "univrm_secondary.md" >}})・[表情]({{< relref "univrm_blendshape.md" >}})・[目線]({{< relref "univrm_lookat.md" >}})・[一人称表示]({{< relref "univrm_firstperson.md" >}})など）を行う
	* 場合によってはここでUnity上でモデルを実際に動かして（再生して）挙動を確認する
1. 設定が終わったら再度VRMファイルを出力する。すべての設定が埋め込まれたVRMファイルが出力されます。

ポイントは、 **すでに作られた3DモデルをUnity上で調整し、Unityから出力する**ということと、**一度VRMファイルを作り、それを再度読み込んでから細かい調整・設定を行う**ところとなります。

---
### Unityで空のプロジェクトを作る
{{< img src="images/vrm/unity_new_project.png" >}}

Unityを起動し、プロジェクトを新規作成します。New→Create projectをクリック。

### UnityにUniVRMをインストール
{{< img src="images/vrm/package_import.png" width="400" alt="package_import" >}}

[UniVRM/releases](https://github.com/vrm-c/UniVRM/releases)から最新のunitypackageをダウンロードし、`Assets/VRM`、`Assets/VRMShaders`及び`Assets/MeshUtility`にインストールします。
**既存のUniVRMが存在している場合、あらかじめVRM、VRMShaders、そしてMeshUtilityフォルダを削除することを推奨**しています。
UniVRM-XXX.unitypackageファイルをUnityにインポートしてください。

### UnityでHumanoidとして扱えるモデルデータを用意します
FBX等のUnityで読み込めるHumanoidモデルを用意しUnityにインポートします。ボーンの設定もされている必要があります。また、**必ずご自分で作られたモデル、ないし、加工しVRアバターとして使うことが許諾されているモデルデータをご用意ください**。後述しますが、**VRMファイル自体にライセンス情報を記述する項目がありますので、特にその項目については権利者自身が設定するようにしてください**。

{{< img src="images/vrm/DragImportedModel.png" width="300" height="300" alt="DragImported3DModel" >}}
<br>
<br>
{{< img src="images/vrm/ModelConversionMenu.png" width="900" height="200" alt="ModelConversionMenu" >}}

インポート後、Humanoidモデルをプロジェクトウィンドウからヒエラルキーウィンドウにドラッグし、ヒエラルキーウィンドウでモデルをクリックすると、上の図に示すようなメニューが表示されます。メニューに`Select`をクリックして、`Materials`をクリックします。`Location`を`Use External Materials（Legacy)`に設定します。

{{< img src="images/vrm/SetAsExternalMaterialsLegacy.png" width="900" height="200" alt="SetAsExternalMaterialsLegacy" >}}

次に、`Rig`をクリックして`Animation Type`を`Humanoid`に設定し、`Configure`ボタンをクリックします。現在のシーンを保存するかどうかのメッセージボックスが表示されます。`Save`をクリックして保存します。

{{< img src="images/vrm/SetModelAsHumanoid.png" width="900" height="200" alt="SetModelAsHumanoid" >}}

これで、このモデルのボーンマッピングの詳細が表示されます。 Unityは最初に各ボーンの自動認識を実行します。モデルの体、頭などを確認できます。割り当てられたコンポーネントが適合する場合、左端のアイコンが緑色で表示されます。適合しない場合は赤色で表示されます。この状況では、ボーンマッピング失敗したボーンの右端のアイコンをクリックし、このボーンに適合するコンポーネントを選択します。ボーンを自動的に再割り当てるには、インターフェースの左下にある`Mapping`をクリックし、`clear`をクリックして`Automap`をクリックします。

{{< img src="images/vrm/BoneMapping.png" width="600" height="700" alt="BoneMapping" >}}
<br>
<br>
{{< img src="images/vrm/BoneAssignment.png" width="900" height="650" alt="BoneAssignment" >}}

ただし、場合によってはFBXインポート時の自動認識が食い違うことがありますので(緑色で表示されます)、ボーンの設定が間違っていたら修正します

{{< img src="images/vrm/fix_eye.png" >}}

例

* 前髪に顎ボーンが割り当てられる
* 目のハイライトに目ボーンが割り当てられる

上記のように、適切な対応するコンポーネントを手動で割り当てることで修正できます（たとえば、eye_light_Lはeye_Lに置き換えられます）。ボーンマッピングに問題がない場合は、`Done`ボタンをクリックして次の手順に進みます。

### モデルデータを調整する
{{< img src="images/vrm/alicia_scene.png" >}}

ヒエラルキーウィンドウでモデルをクリックすると、このモデルにアタッチされたサブコンポーネントが表示されます。それらサブコンポーネントのいずれかをクリックしてください。以下の項目を確認して調整します：

{{< img src="images/vrm/initial_position_rotation.jpg" width="800" height="450" alt="initial_position_rotation" >}}

* モデルの位置
	* モデルは原点に位置する
* モデルのスケール
	* 1.0 = 1m
* モデルの向き
	* モデルは+Zの方向に向いている
* 質感（マテリアル/シェーダ）
	* 以下のシェーダの中から使用することを**強く推奨**します。
    	* Toonシェーダー
			* [VRM/MToon]({{< relref "mtoon.md" >}}) (照明対応トゥーンシェーダ）
		* Unlit系シェーダー
			* [UniGLTF/UniUnlit]({{< relref "univrm_unlit.md" >}})
        * PBR
			* [Standard]({{< relref "univrm_standard.md" >}}) (Unity標準)

{{< img src="images/vrm/shader_option.jpg" width="800" height="450" alt="shader_option" >}}

マテリアルが割り当てられていない場合、または変更する場合は、`Element X`の右端のアイコンをクリックして、パソコンで使用可能なマテリアルを選択してください。選択したシェーダーに基づいてレンダリング効果を調整できるパラメーターがいくつかあります。ここでは、次の図に示すように例として`VRM/MToon`を選択します。詳細については、[MToon]({{< relref "mtoon.md" >}})を参照してください。

{{< img src="images/vrm/MToonMaterialSetting.png" width="700" height="800" alt="MToonMaterialSetting" >}}

### メニューから一度VRMをエクスポートする（※正規化）

調整が完了したら、ヒエラルキーウィンドウでモデルを選択し、``VRM -> UniVRM-0.XX -> Export humanoid``からエクスポートします。

{{< img src="images/vrm/UniVRMExportHumanoid.png" width="400" height="225" alt="UniVRMExportHumanoid">}}

`Author`欄に名前を入力し、`Export`を押すと、VRMファイルが出力されます。ファイル名はわかりやすいように「(元のモデル名)_Normalized.vrm」などとしておくとよいでしょう。ファイルはデフォルトで`Assets`フォルダに保存されます。

UniVRMエクスポートに関するページ：
  * [エクスポートダイアログ]({{< relref "univrm_export.md" >}})
  * [VRMモデルのファイルサイズ]({{< relref "vrm_size.md" >}})

{{< img src="images/vrm/export058_dialog.jpg" width="600" alt="vrm export" >}}

* Force T Pose
	* 回転・スケールの除去前にモデルを強制的に[T-Pose]({{< relref "vrm_tpose.md" >}})にします。
* Pose Freeze
	* 回転・スケールの除去処理を実行するか否か。VRMの規約に合致するように**モデルを正規化する処理**です。**初回は必ずチェックを入れてください**。事前にこの処理を通過させることにより各種コンポーネントが正しく動作するようになります。

T-Poseとモデルの正規化の詳細は[こちら]({{< relref "t_pose.md" >}})。

次のセクションでは、[VRMファイルをインポートしセットアップする方法]({{< relref "setup_vrm.md" >}})を紹介します。