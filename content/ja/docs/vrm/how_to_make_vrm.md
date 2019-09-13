---
title: "VRMファイルを作ってみたい"
date: 2018-04-16T16:30:00+09:00
url: /how_to_make_vrm/
weight: 2
---

##  VRMファイルのつくりかた（既存3Dモデルからのコンバート）

{{< img src="images/vrm/vrm_workflow.png" alt="vrm workflow" >}}
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
[UniVRM/releases](https://github.com/vrm-c/UniVRM/releases)から最新のunitypackageをダウンロードし、``Assets/VRM``にインストールします。
**既存のVRMが存在している場合、あらかじめVRMフォルダを削除することを推奨**しています。
UniVRM-XXX.unitypackageファイルをUnityにインポートしてください。


### 3.UnityでHumanoidとして扱えるモデルデータを用意します
{{< img src="images/vrm/alicia_generic.png" >}}
FBX等のUnityで読み込めるHumanoidモデルを用意しUnityにインポートします。ボーンの設定もされている必要があります。また、**必ずご自分で作られたモデル、ないし、加工しVRアバターとして使うことが許諾されているモデルデータをご用意ください**。後述しますが、**VRMファイル自体にライセンス情報を記述する項目がありますので、特にその項目については権利者自身が設定するようにしてください**。

インポート後、FBXのImport SettingsのRigタブでAnimationTypeをHumanoidにしてください。

{{< img src="images/vrm/fix_eye.png" >}}
FBXインポート時の自動認識が食い違うことがありますので、ボーンの設定が間違っていたら修正します

例

* 前髪に顎ボーンが割り当てられる
* 目のハイライトに目ボーンが割り当てられる

### 4.モデルデータを調整し、メニューから一度VRMをエクスポートする（※正規化）
{{< img src="images/vrm/alicia_scene.png" >}}
3.で用意したモデルデータを**一度Unityのシーンに配置します**。その上で、以下の項目を調整します。

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

{{< img src="images/vrm/vrm_menu_enable.png" >}}
調整が終わったら、UnityのHierarchyでモデルデータを選択し、メニューからVRM→Export humanoidを実行します

{{< img src="images/vrm/export_dialog.png" >}}
チェックボックスを設定してExportを押してください。

* Force T Pose
	* 回転・スケールの除去前にモデルを強制的に[T-Pose](../vrm_tpose/)にします。
* Pose Freeze
	* 回転・スケールの除去処理を実行するか否か。VRMの規約に合致するように**モデルを正規化する処理**です。**初回は必ずチェックを入れてください**。事前にこの処理を通過させることにより各種コンポーネントが正しく動作するようになります。

Exportを押すと、VRMファイルが出力されます。ファイル名はわかりやすいように「(元のモデル名)_Normalized.vrm」などとしておくとよいでしょう。T-Poseとモデルの正規化の詳細は[こちら](https://github.com/vrm-c/UniVRM/wiki/T-Poseとモデルの正規化の詳細)。

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
	* アバターの人格に関する許諾範囲 (Personation / Charaterization Permission)
		* アバターに人格を与えることの許諾範囲 (A person who can perform with this avatar)
			* アバターを操作することはアバター作者にのみ許される(Only Author)
			* 明確に許可された人限定(Explictly Licensed Person)
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

ほかに、

* [表情や口パクの設定（BlendShape）](../univrm/components/univrm_blendshape/)
* [一人称視点の設定（一人称視点でモデルを操作する場合、邪魔になる頭などのパーツを指定する、標準の視点位置を設定する）](../univrm/components/univrm_firstperson/)
* [視線・眼球の可動範囲と可動曲線の設定。ボーンによる眼球回転だけでなく、BlendShapeによる眼球アニメーションにも対応。](../univrm/components/univrm_lookat/)
* [揺れ物（SpringBone/SpringBoneCollider）の設定](../univrm/components/univrm_secondary/)

がありますので必要に応じて設定していきます。

### 7.Unity上で再生し挙動を確認する（※必要であれば）
{{< img src="images/vrm/aiueo.png" >}}

AnimationClip/AnimationControllerをセットしたり、VRMLookAtHeadのTargetに[GameObject](../univrm/components/univrm_lookat/#target)をセットしたり（視線がどこを向くかの設定）して、実際にUnity上で動作を確認します。
また、非常に簡単なテストスクリプト「AIUEO」と「Blinker」を用意しています。Add Componentから「AIUEO」を選んでセットすれば「あ」「い」「う」「え」「お」の口の形に順番に切り替わるアニメーションが、「Blinker」を選んでセットすれば定期的にまばたきのアニメーションが行われます。


### 8.VRMファイルを出力する
{{< img src="images/vrm/vrm_menu_enable.png" >}}
調整が終わったら、UnityのHierarchyでモデルデータを選択し、再度メニューからVRM→Export humanoidを実行します

このとき、**「Force T Pose」と「Pose Freeze」のチェックは外してください**。このチェックは初回（正規化）のときのみ使用します。
ファイル名を指定してVRMファイルを出力します

### 完成！
これでセットアップ済のVRMファイルが出来ました。対応アプリケーションに読み込ませてみましょう！

