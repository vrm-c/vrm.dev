---
title: "エクスポートダイアログ"
date: 2020-07-08
weight: 2
url: "univrm/export/univrm_export/"
---

## エクスポートダイアログ

v0.56

{{< img src="images/vrm/export_dialog_56.jpg" width="600"alt="vrm export" >}}

Unityの簡易ダイアログ機能で画面を作成しています。
v0.57 以降でダイアログを改善予定です。

| 用語         | 意味                             |
|--------------|----------------------------------|
| Root         | 一番親のオブジェクト(ひとつだけ) |
| ヒエラルキー | Rootの子孫全部                   |

### 警告メッセージ(オレンジの囲み)

エクスポート可能だけど、問題があるかもしれない。

#### Jaw bone is included. It may not be what you intended. Please check the humanoid avatar setting screen 

humanoid設定に顎が含まれている。 
FBXインポート時に意図せずに自動で割り当てられる場合があります。
間違えて、前髪等が顎になっていて顎にポーズが入力した場合に微妙に動く場合があります。
FBX importer の rig 設定に戻って設定を解除することをおすすめします。


#### This model contains vertex color

ヒエラルキーに含まれる mesh に頂点カラーが含まれている。

| 頂点カラー      | 含まれている挙動 | 挙動                         |
|-----------------|------------------|------------------------------|
| UniVRM-0.53以前 | 未対応           | 含まれているけど無視する挙動 |
| UniVRM-0.54～   | 使う             | 含まれているものは使う挙動   |

Unlitで頂点カラーが含まれているが使わないという設定がありせん。
必要ない場合は、`Remove Vertex Color` オプションで削除できます。

#### unknown material '{0}' is used. this will export as `Standard` fallback 

standard, unlit, mtoon 以外のマテリアルは、standard になります。

### エラーメッセージ(赤い囲み)

エクスポート不可能。問題を解決する必要があります。
このメッセージが表示されているときは、`export` ボタンが無効になります。

#### Require source
エクスポート可能なオブジェクトをシーンで選択してださい

#### The Root transform should have Default translation, rotation and scale.
Rootに移動・回転・スケール値が設定されている 。
0.56から禁止になりました。
0.55以前はエクスポートできたが、後でエラー等のトラブルが発生していました。
Rootの移動(0)・回転(0)・スケール(1)にしてください。
必要な場合は、Root の下に階層で移動・回転・スケールしてください。

#### Require animator.
RootにAnimatorコンポーネントがついていません(ヒューマノイドでない)

#### Require animator.avatar
RootのAnimatorにavatarがありません(ヒューマノイドでない)

#### Animator.avatar is not valid.
RootのAnimatorのavatarが正常でない(ヒューマノイドでない)

#### Animator.avatar is not humanoid. Please change model's AnimationType to humanoid.
RootのAnimatorのavatarがhumanoidでない。FBXのimport設定の rig で humanoidに変更してください

#### Find duplicate Bone names. Please check model's bone names.
ヒエラルキーの中に同じ名前のGameObjectが含まれている。
0.56で禁止になりました。
0.55以前はエクスポートできたが、後でエラー等のトラブルが発生していました。
リネームしてください。

#### Require Title.
ダイアログのタイトルを入力してください(必須項目)

#### Require Version.
ダイアログのバージョンを入力してください(必須項目)

#### Require Author.
ダイアログのAuthorを入力してください(必須項目)

#### No active mesh
ヒエラルキーに active なメッシュが含まれていない

#### FileName '{0}' is too long.
material, texture, mesh の名前が長すぎる。
リネームしてください

### オプション(青い囲み)

エクスポートのオプションです。
チェックするとエクスポート前に追加の処理を実行します。


#### Force T Pose
エクスポート前に強制的にT-Poseにします。
手動でだいたいT-Poseに出来た場合は、チェックしなくても問題ありません。

#### Pose Freeze
モデルを正規化します。
正規化済みのモデルを再正規化する必用はありませんが、正規化されていない部品を追加した場合は必要です。
正規化されているか否かは、ヒエラルキーのすべてのGameObjectの回転が0 スケールが1 であるか否かです。

#### UseExperimentalExporter
シリアライザーのバージョン。
どちらでも動作します。

#### UseSparseAccessor
BlendShapeが多数ある場合にファイルサイズを削減できます。

#### OnlyBlendshapePosition
BlendShapeのNormal, Tangent をエクスポートしない。
ファイルサイズを削減できます。
UniVRM-0.53 より前のバージョンはインポート時にエラーになるのに注意してください。

#### ReduceBlendshape
BlendShapeClip設定から参照されないBlendShapeをエクスポートしない。
ファイルサイズを削減できます。

#### ReduceBlendshapeClip
Presetが Unknown であるBlendShapeClipをエクスポートしない。
ReduceBlendshapeと組み合わせて使います。

#### RemoveVertexColor
頂点カラーをエクスポートしない。
GLTFには、頂点カラーを含むが使わないという設定がありません。
UniVRMでは、 `unlit` のみ頂点カラー対応です。
