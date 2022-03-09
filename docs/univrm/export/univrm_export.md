---
date: 2020-07-08
weight: 2
aliases: ["/univrm/univrm_export/", "/univrm/export/univrm_export/"]
tags: ["unity"]
---

# エクスポートダイアログ

| 用語         | 意味                                                   |
|--------------|--------------------------------------------------------|
| Root         | エクスポート対象となる一番親のオブジェクト(ひとつだけ) |
| ヒエラルキー | Root自身と子孫全部                                     |

## v0.58~

```{figure} /_static/images/vrm/export062_dialog.png
vrm export
```

Unityの [EditorWindow](https://docs.unity3d.com/ScriptReference/EditorWindow.html) で画面を作成しています。

### 使い方

#### Window を表示する

以前と同じメニューから表示できます。

```{figure} /_static/images/vrm/vrm_menu.jpg
vrm_menu
```

前のバージョン：

```{figure} /_static/images/vrm/UniVRMExportHumanoid.jpg
UniVRMExportHumanoid
```

* シーン側でエクスポート可能なオブジェクトを先に選択する必要が無くなりました

#### 対象のオブジェクトをセットする

* Drag

```{figure} /_static/images/vrm/export058_drag.gif
vrm export
```

* Selector

```{figure} /_static/images/vrm/export058_select.gif
vrm export
```

#### ExportRootの条件

```{figure} /_static/images/vrm/export058_empty.jpg
vrm export
```

ExportRoot が以下の条件を満たすと設定画面が表示されます。

* Root である(親が無い)
* Root に回転・スケールが無い(移動は可能)
* ヒューマノイドである(Animatorコンポーネントがアタッチしてあり、Humanoid.Avatarがセットしてある)
* Z+向きである(左足と右足のボーン位置から判定)
* ヒエラルキーの中に enable な mesh を含む

#### エクスポート設定画面

Metaやエクスポートオプションを設定してください。
警告は修正するかしないかを判断して、問題無ければ無視してください。
選択状態のオブジェクトがエクスポート可能であれば、ダイアログ右下の `export` ボタンを押すことができるようになります。
VRMモデルのファイルサイズの詳しい内容は[こちら](/univrm/export/vrm_size)を参考してください。

## オプション

エクスポートのオプションです。
チェックするとエクスポート前に追加の処理を実行します。

### Force T Pose
エクスポート前に強制的にT-Poseにします。
手動でだいたいT-Poseに出来た場合は、チェックしなくても問題ありません。

### Pose Freeze
モデルを正規化します。
正規化済みのモデルを再正規化する必用はありませんが、正規化されていない部品を追加した場合は必要です。
正規化されているか否かは、ヒエラルキーのすべてのGameObjectの回転が0 スケールが1 であるか否かです。

> 0.58 では自動でチェックボックスが On/Off されます

### UseExperimentalExporter
シリアライザーのバージョン。
どちらでも動作します。

### UseSparseAccessor
BlendShapeが多数ある場合にファイルサイズを削減できます。

### OnlyBlendshapePosition
BlendShapeのNormal, Tangent をエクスポートしない。
ファイルサイズを削減できます。
UniVRM-0.53 より前のバージョンはインポート時にエラーになるのに注意してください。

### ReduceBlendshape
BlendShapeClip設定から参照されないBlendShapeをエクスポートしない。
ファイルサイズを削減できます。

### ReduceBlendshapeClip
Presetが Unknown であるBlendShapeClipをエクスポートしない。
ReduceBlendshapeと組み合わせて使います。

### RemoveVertexColor
頂点カラーをエクスポートしない。
GLTFには、頂点カラーを含むが使わないという設定がありません。
UniVRMでは、 `unlit` のみ頂点カラー対応です。

## エラー項目

バージョン毎の判定。

| message                                                  | 0.56  | 0.57               | 0.58                     |
|----------------------------------------------------------|-------|--------------------|--------------------------|
| The Root translation, rotation and scale will be dropped | error | warn               | error(移動は可)          |
| Jaw bone                                                 | warn  | warn               | warn                     |
| Same name bone                                           | error | warn(自動リネーム) | warn                     |
| Vertex color                                             | warn  | warn               | warn                     |
| Unknown shader                                           | warn  | warn               | warn                     |
| Require source                                           | error | error              | error                    |
| Require no parent                                        | ok    | ok                 | error(新規)              |
| Require Z+ forward                                       | ok    | ok                 | error(新規)              |
| Require animator                                         | error | error              | error                    |
| Require humanoid avatar                                  | error | error              | error                    |
| Require Title/Version/Author                             | error | error              | error                    |
| No active mesh                                           | error | error              | error                    |
| Prefab export                                            | error | error              | ok(NO_ACTIVE_MESHだった) |
| Springbone validation                                    | ok    | ok                 | warn                     |

### Require source
エクスポート可能なオブジェクトをシーンで選択してださい

### Require animator.
RootにAnimatorコンポーネントがついていません(ヒューマノイドでない)

### Require animator.avatar
RootのAnimatorにavatarがありません(ヒューマノイドでない)

### Animator.avatar is not valid.
RootのAnimatorのavatarが正常でない(ヒューマノイドでない)

### Animator.avatar is not humanoid. Please change model's AnimationType to humanoid.
RootのAnimatorのavatarがhumanoidでない。FBXのimport設定の rig で humanoidに変更してください

### Require Title.
ダイアログのタイトルを入力してください(必須項目)

### Require Version.
ダイアログのバージョンを入力してください(必須項目)

### Require Author.
ダイアログのAuthorを入力してください(必須項目)

### No active mesh
ヒエラルキーに active なメッシュが含まれていない

### FileName '{0}' is too long.
material, texture, mesh の名前が長すぎる。
リネームしてください

### The Root translation, rotation and scale will be dropped
Rootに移動・回転・スケール値が設定されている。
そのままエクスポートした場合、ルートの TRS は無くなります。
移動に関しては問題がない場合が多いと思われますが、回転・スケールに関しては意図したとおりにならないこともありそうなのでご注意ください。

### Jaw bone is included. It may not what you intended. Please check the humanoid avatar setting screen 

humanoid設定に顎が含まれている。 
FBXインポート時に意図せずに自動で割り当てられる場合があります。
間違えて、前髪等が顎になっていて顎にポーズが入力した場合に微妙に動く場合があります。
FBX importer の rig 設定に戻って設定を解除することをおすすめします。

### There are bones with the same name in the hierarchy. They will be automatically renamed after export
ヒエラルキーの中に同じ名前のGameObjectが含まれている。
エクスポートした場合に自動でリネームする。

### This model contains vertex color

ヒエラルキーに含まれる mesh に頂点カラーが含まれている。

| 頂点カラー      | 含まれている挙動 | 挙動                         |
|-----------------|------------------|------------------------------|
| UniVRM-0.53以前 | 未対応           | 含まれているけど無視する挙動 |
| UniVRM-0.54～   | 使う             | 含まれているものは使う挙動   |

Unlitで頂点カラーが含まれているが使わないという設定がありせん。
必要ない場合は、`Remove Vertex Color` オプションで削除できます。

### unknown material '{0}' is used. this will export as `Standard` fallback 

standard, unlit, mtoon 以外のマテリアルは、standard になります。

## v0.57

```{figure} /_static/images/vrm/export_dialog_56.jpg
vrm export
```

Unityの [ScriptableWizard](https://docs.unity3d.com/ScriptReference/ScriptableWizard.html) で画面を作成しています。
v0.58 以降でダイアログを改善予定です。
