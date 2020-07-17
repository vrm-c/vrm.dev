---
title: "VRMファイルを作ってみたい"
date: 2018-04-16T16:30:00+09:00
url: /how_to_make_vrm/
weight: 2
---

##  VRMファイルのつくりかた（既存3Dモデルからのコンバート）
{{< img src="images/vrm/VRM_changeVRM_jp.png" alt="vrm workflow" >}}

VRMファイルをつくるためには、[Unity](https://unity3d.com/jp)と[UniVRM](https://github.com/vrm-c/UniVRM)を使用します。
おおまかな作業のながれは以下のようになります

1. Unityで3Dモデルデータと[UniVRM](https://github.com/vrm-c/UniVRM)を読み込む。Unity上で大きさやマテリアルなどを調整・設定する
1. 一度UnityからVRMファイルを出力する（※正規化と呼びます）
1. 上記出力した VRMファイルをUnityで読み込み、Unity上でVRM独自の設定（ライセンス・揺れ物・表情・目線など）を行う
	* 場合によってはここでUnity上でモデルを実際に動かして（再生して）挙動を確認する
1. 設定が終わったら再度VRMファイルを出力する。すべての設定が埋め込まれたVRMファイルが出力されます。

ポイントは、 **すでに作られた3DモデルをUnity上で調整し、Unityから出力する**ということと、**一度VRMファイルを作り、それを再度読み込んでから細かい調整・設定を行う**ところとなります。

---
### 1.Unityで空のプロジェクトを作る
{{< img src="images/vrm/unity_new_project.png" >}}

Unityを起動し、プロジェクトを新規作成します。New→Create projectをクリック。

### 2.UnityにUniVRMをインストール
{{< img src="images/vrm/package_import.png" alt="package_import" >}}

[UniVRM/releases](https://github.com/vrm-c/UniVRM/releases)から最新のunitypackageをダウンロードし、`Assets/VRM`にインストールします。
**既存のVRMが存在している場合、あらかじめVRMフォルダを削除することを推奨**しています。
UniVRM-XXX.unitypackageファイルをUnityにインポートしてください。

### 3.UnityでHumanoidとして扱えるモデルデータを用意します
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

### 4.モデルデータを調整し、メニューから一度VRMをエクスポートする（※正規化）
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
		* PBR
			* Standardシェーダー(Unity標準)
		* Unlit系シェーダー
			* VRM/UnlitTexture (UnityのUnit/Textureと同じ)
			* VRM/UnlitCutout (UnityのUnit/Cutoutと同じ)
			* VRM/UnlitTransparent (UnityのUnit/Transparentと同じ)
			* VRM/UnlitTransparentZWrite (アルファブレンディングかつZWriteありです。実体のある半透明物への適用を想定しています)
		* Toonシェーダー
			* VRM/MToon (照明対応トゥーンシェーダ）

{{< img src="images/vrm/shader_option.jpg" width="800" height="450" alt="shader_option" >}}

マテリアルが割り当てられていない場合、または変更する場合は、`Element X`の右端のアイコンをクリックして、パソコンで使用可能なマテリアルを選択してください。選択したシェーダーに基づいてレンダリング効果を調整できるパラメーターがいくつかあります。ここでは、次の図に示すように例として`VRM/MToon`を選択します。詳細については、[MToon](../univrm/shaders/mtoon/)を参照してください。

{{< img src="images/vrm/MToonMaterialSetting.png" width="700" height="800" alt="MToonMaterialSetting" >}}

調整が完了したら、ヒエラルキーウィンドウでモデルを選択し、``VRM -> UniVRM-0.56.3 -> Export humanoid``からエクスポートします。

{{< img src="images/vrm/UniVRMExportHumanoid.png" width="400" height="225" alt="UniVRMExportHumanoid">}}

`Author`欄に名前を入力し、`Export`を押すと、VRMファイルが出力されます。ファイル名はわかりやすいように「(元のモデル名)_Normalized.vrm」などとしておくとよいでしょう。ファイルはデフォルトで`Assets`フォルダに保存されます。
詳しくは[UniVRMのエクスポート](../univrm/univrm_export)をご覧ください。

{{< img src="images/vrm/export_dialog_56.jpg" width="600"alt="vrm export" >}}

* Force T Pose
	* 回転・スケールの除去前にモデルを強制的に[T-Pose](../dev/univrm-0.xx/vrm/vrm_tpose/)にします。
* Pose Freeze
	* 回転・スケールの除去処理を実行するか否か。VRMの規約に合致するように**モデルを正規化する処理**です。**初回は必ずチェックを入れてください**。事前にこの処理を通過させることにより各種コンポーネントが正しく動作するようになります。

T-Poseとモデルの正規化の詳細は[こちら](../univrm/settings/t_pose/)。

### 5.先ほどエクスポートしたVRMを再度Unity上に読み込む
{{< img src="images/vrm/vrm_prefab.png" >}}

**4.で出力したVRMファイルを、UnityのAssetsにドラッグ＆ドロップする**だけで、VRMファイルがインポートされ**モデルデータのPrefabが生成されます**。

{{< img src="images/vrm/alicia_scene2.png" >}}

さきほど4.で配置したモデルデータをいったん消し、**VRMから生成されたPrefabをあらためてシーンに配置します**。
すると、メッシュなどが正規化されたモデルデータが表示されます。

### 6.VRM独自の設定を行う
{{< img src="images/vrm/vrm_settings.png" >}}

5.で読み込まれたモデルデータをHierarchyで選択すると、**インスペクタにさまざまな設定項目**があらわれます。また、**secondaryには揺れ物の設定**が入っています。これらを設定していきます。
**少なくとも、タイトル・作者・ライセンス情報**は埋めるようにしてください。**特にライセンス情報は重要です！**

* Information（一般情報）
	* Title
		* アバターモデル名称。自由入力
	* Version
		* アバターモデルのバージョン。自由入力
	* Author
		* 作者名
	* Contact Information
		* 作者への連絡先
	* Reference
		* アバターの「親作品」となるようなものがあれば、その情報

* License（使用許諾・ライセンス情報）
	* アバターの人格に関する許諾範囲 (Personation / Characterization Permission)
		* アバターに人格を与えることの許諾範囲 (A person who can perform with this avatar)
			* アバターを操作することはアバター作者にのみ許される(Only Author)
			* 明確に許可された人限定(Explicitly Licensed Person)
			* 全員に許可(Everyone)
		* このアバターを用いて暴力表現を演じることの許可(Violent acts using this avatar)
			* 不許可(Disallow)
			* 許可(Allow)
		* このアバターを用いて性的表現を演じることの許可(Sexuality acts using this avatar)
			* 不許可(Disallow)
			* 許可(Allow)
		* 商用利用の許可(For commercial use)
			* 不許可(Disallow)
			* 許可(Allow)
		* その他のライセンス条件(Other License Url)
			* 上記許諾条件以外のライセンス条件がある場合はそのライセンス文書へのURLを記述

	* 再配布・改変に関する許諾範囲(Redistribution / Modifications License)
		* ライセンスタイプ(License Type)
			* 再配布禁止(Redistribution Prohibited)
			* [著作権放棄(CC0)](https://creativecommons.org/publicdomain/zero/1.0/deed.ja)
			* [Creative Commons CC BYライセンス(CC_BY)](https://creativecommons.org/licenses/by/4.0/deed.ja)
			* [Creative Commons CC BY NCライセンス(CC_BY_NC)](https://creativecommons.org/licenses/by-nc/4.0/deed.ja)
			* [Creative Commons CC BY SAライセンス(CC_BY_SA)](https://creativecommons.org/licenses/by-sa/4.0/deed.ja)
			* [Creative Commons CC BY NC SAライセンス(CC_BY_NC_SA)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja)
			* [Creative Commons CC BY NDライセンス(CC_BY_ND)](https://creativecommons.org/licenses/by-nd/4.0/deed.ja)
			* [Creative Commons CC BY NC NDライセンス(CC_BY_NC_ND)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja)
			* その他(Other)

		* その他ライセンス条件(Other License Url)
			* 上記許諾条件以外のライセンス条件がある場合はそのライセンス文書へのURLを記述

Unityバージョン2018.3から、インポートセッティングのインターフェースは少し変わったのでご注意してください:

{{< img src="images/vrm/NewInterfaceForPrefab.png" width="700" height="200" alt="NewInterfaceForPrefab" >}}

ほかに、

* [表情や口パクの設定（BlendShape）](../univrm/components/univrm_blendshape/)
* [一人称視点の設定（一人称視点でモデルを操作する場合、邪魔になる頭などのパーツを指定する、標準の視点位置を設定する）](../univrm/components/univrm_firstperson/)
* [視線・眼球の可動範囲と可動曲線の設定。ボーンによる眼球回転だけでなく、BlendShapeによる眼球アニメーションにも対応。](../univrm/components/univrm_lookat/)
* [揺れ物（SpringBone/SpringBoneCollider）の設定](../univrm/components/univrm_secondary/)

がありますので必要に応じて設定していきます。

### 7.Unity上で再生し挙動を確認する（※必要であれば）
`AnimationClip/AnimationController`をセットしたり、`VRMLookAtHead`の`Target`に[GameObject](../univrm/components/univrm_lookat/#target)をセットしたり（視線がどこを向くかの設定）、`Head`欄にヘッドコンポーネントを探したり、実際にUnity上で動作を確認します。モデルはプレイモードでターゲット位置を追跡します（たとえば、``GameObject -> 3D Object -> Cube``からターゲットとしてキュ​​ーブをヒエラルキーに作成できます）。シーンに配置されたオブジェクトをドラッグして、モデルの目がリアルタイムでオブジェクトを追跡しているかどうかをテストできます。モデルのクローズアップフェイスは、インスペクターウィンドウで見れます。

{{< img src="images/vrm/LookAtTarget.png" width="900" height="280" alt="LookAtTarget" >}}
<br>
<br>
{{< img src="images/vrm/TargetTracking.png" width="500" height="330" alt="TargetTracking" >}}

モデルの表情を確認するには、非常に簡単なテストスクリプト「AIUEO」と「Blinker」を用意しています。[BlendShape](../univrm/components/univrm_blendshape/#vrmblendshapeproxy)をセットアップした後、`Add Component`から「AIUEO」を選んでセットすれば「あ」「い」「う」「え」「お」の口の形に順番に切り替わるアニメーションが、「Blinker」を選んでセットすれば定期的にまばたきのアニメーションが行われます。

|{{< img src="images/vrm/BlendShapeProxy.png" width="650" height="75" alt="BlendShapeProxy" >}}|
|-----|
|``BlendShapeAvatar``フィールドにダブルクリックして、3Dモデルの表情を設定します|
{{< img src="images/vrm/AddExpressionScripts.png" width="650" height="260" alt="AddExpressionScripts" >}}
<br>
<br>
{{< img src="images/vrm/InspectorFaceView.png" width="400" height="280" alt="InspectorFaceView" >}}

### 8.VRMファイルを出力する
{{< img src="images/vrm/UniVRMExportHumanoid.png" width="400" height="225" alt="UniVRMExportHumanoid">}}

調整が終わったら、UnityのHierarchyでモデルデータを選択し、再度メニューから``VRM -> UniVRM-0.56.3 -> Export humanoid``を実行します

このとき、**「Force T Pose」と「Pose Freeze」のチェックは外してください**。このチェックは初回（正規化）のときのみ使用します。
ファイル名を指定してVRMファイルを出力します

### 完成！
これでセットアップ済のVRMファイルが出来ました。対応アプリケーションに読み込ませてみましょう！

