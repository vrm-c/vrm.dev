# fbx の import, T-Pose 初期エクスポート

## 使用する素材

* new_seedsan.fbx
* 関連する *.png

## fbx の import

Assets に作業用のフォルダ `Assets/seedsan/fbx` を作ります。

### Texture を import

関連する png を `Assets/seedsan/fbx` に import します。

* backpack.png
* body.png
* faceparts.png
* gradation.png
* hair.png
* nm_backpack_normals.png
* nm_body_normals.png
* nm_wear.png
* planekun_face.png
* robo_arm.png
* wear.png

### fbx を import

`new_seedsan.fbx` を `Assets/seedsan/fbx` に import します。

```{admonition} fbx import
:class: note



import した fbx シーンに出しました。

![img](/_static/images/vrm10/tutorial/fbx_import.jpg)

テクスチャの割り当てが一部うまくいきませんでした。
次の手順で修正します。


```


## material の調整

### extract

import した状態では material が SubAsset なっていて設定を変更することができません。

```{admonition} subasset
:class: note



subasset というのは asset の子アセットでファイルとして独立していません。
また、設定を変更できないので inspector がグレーアウトしています。

![img](/_static/images/vrm10/tutorial/embedded_subasset.jpg)


```


subasset を取り出します。

fbx importer の `Materials` タブの `Extract Materials...` ボタンを押してください。

![img](/_static/images/vrm10/tutorial/extract_materials.jpg)

folder 選択ダイアログが現れるので `Assets/seedsan/materials` を選択します。
fbx の subasset であった material が指定したフォルダの中に取り出され、fbx importer の `Materials` タブの `Remapped Materials` にセットされます。

![img](/_static/images/vrm10/tutorial/extracted.jpg)

```{admonition} fbx reset
:class: note



fbx を初期状態に戻すには ⚙メニューから `reset` でできます。

![img](/_static/images/vrm10/tutorial/fbx_reset.jpg)


```


### material の修正

seedsan の 各マテリアルの texture は下記のとおりです。
テクスチャの割り当てを確認するだけなので Shader は `Standard` のままにします。

|                  | Albedo            | Normal Map               |
|------------------|-------------------|--------------------------|
| huku_bake        | wear.png          | ✅nm_wear.png             |
| hair             | hair.png          |                          |
| body_bake        | body.png          |                          |
| eye              | ✅faceparts.png    |                          |
| eye_trans        | ✅faceparts.png    |                          |
| arm_mat          | ✅robo_arm.png     |                          |
| arm_plastic      | ✅robo_arm.png     |                          |
| green_emit       |                   |                          |
| body_bake        | body.png          | ✅nm_body_normals.png     |
| body_nm          | body.png          | ✅nm_body_normals.png     |
| wear_metal       | wear.png          | ✅nm_wear.png             |
| huku_bake        | wear.png          |                          |
| armgear_plastic  | wear.png          |                          |
| robo_face        | planekun_face.png |                          |
| glass            |                   |                          |
| backpack_metal   | backpack.png      | ✅nm_backpack_normals.png |
| green_emit       | backpack.png      |                          |
| backpack_nm      | backpack.png      | ✅nm_backpack_normals.png |
| backpack_plastic | backpack.png      | ✅nm_backpack_normals.png |
| anim_logo        | gradation.png     |                          |

次に、法線マップの TextureType を `Normal map` に変更して、右下の `apply` ボタンを押します。

![img](/_static/images/vrm10/tutorial/texturetype_normalmap.jpg)

## mesh の調整

### BlendShape の法線確認

head を選択して、`SkinnedMeshRenderer` のインスペクタを表示します。
`BlendShapes` を開いて、スライダーを操作して確認します。

```{admonition} 法線確認
:class: note



blend shape の法線を確認したいので、shader は Standard のままにしています。


```


それほど目だないのですが唇の印影が付きすぎています。

![img](/_static/images/vrm10/tutorial/blendshape_normal_aa.jpg)

fbx の import 設定を修正します。
fbx の inspector の `Model` タブの `BlendShape normals` から `None` を選択します。
`Apply` で適用します。

![img](/_static/images/vrm10/tutorial/fbx_model_blendshapenormals.jpg)

![img](/_static/images/vrm10/tutorial/blendshape_normal_aa.jpg)
![img](/_static/images/vrm10/tutorial/blendshape_normal_none.jpg)

[#828](https://github.com/vrm-c/UniVRM/issues/828)

## humanoid の調整

### AnimationType を humanoid にする

fbx の import 設定を修正します。

`Rig` タブの AnimationType を `Humanoid` にして `Apply` します。

![img](/_static/images/vrm10/tutorial/fbx_animation_type.jpg)

### jaw ボーンの割り当てを解除します。

`Rig` タブの `Configure` ボタンを押して、Humanoid のボーン割り当て設定画面に入ります。

fbx importer の自動割り当てで `jaw` (顎) ボーンに `hair_A` が割り当てられてしまいました。

![img](/_static/images/vrm10/tutorial/humanoid_jaw.jpg)

割り当てを削除して 右下の 'Done` ボタン押します。

```{admonition} jaw ボーンにご注意
:class: warning



fbx の自動割り当てで前髪などが誤って `jaw` に割り当てられることがよくあります。
前髪が変な動きをする場合、これが原因のことがあります。


```


## VRM1 としてエクスポートします

VRMの詳細なセットアップをする前にここで一度出力します。
このエクスポートにより以下の状態になります。

* モデルが T-Pose になる
* モデルが T-Pose の状態で 回転とスケールが 除去された状態になる
* VRM1 として最低限必要な Meta が設定される
* VRM1 としてインポートしなおすことで VRM1 のコンポーネントがアタッチされた状態になる

### prefab をシーンに出して T-Pose にする

### VRM1 の Export Dialog を出して 最小限の meta を入力する

### export する
