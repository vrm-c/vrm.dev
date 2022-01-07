# LookAt の設定

[VrmObject](/univrm1/vrm1_tutorial/vrm_object) の LookAt GUI で設定します。

![img](/_static/images/vrm10/tutorial/vrm_lookat_settings.jpg)

VRM ３種類の LookAt をサポートしています。
モデルに応じて、以下の３種類の何れかの設定をしてください。

## Boneタイプ

`Alicia` を例に説明します。
デフォルトでボーンタイプに設定されるので特に変更する必要ありません。
以下の項目が関連します。

humanoid に eye ボーンが存在する。
![img](/_static/images/vrm10/tutorial/alicia_humanoid.jpg)

`VrmObject` の `LookAt` 設定で `LookAtType` に `Bone` を指定。
![img](/_static/images/vrm10/tutorial/lookat_bone.jpg)

![img](/_static/images/vrm10/tutorial/lookat_bone_anim.gif)


動作確認 の項に進んでください。

## Expressionタイプ(Morph Target タイプ)

`new_seedsan` を例に説明します。

| preset      | expression                                                      |
|-------------|-----------------------------------------------------------------|
| `LookLeft`  | ![img](/_static/images/vrm10/tutorial/expression_lookleft.jpg)  |
| `LookRight` | ![img](/_static/images/vrm10/tutorial/expression_lookright.jpg) |
| `LookUp`    | ![img](/_static/images/vrm10/tutorial/expression_lookup.jpg)    |
| `LookDown`  | ![img](/_static/images/vrm10/tutorial/expression_lookdown.jpg)  |

`VrmObject` の `LookAt` 設定で `LookAtType` に `Expression` を指定。
![img](/_static/images/vrm10/tutorial/lookat_expression.jpg)
`Y Range` に 1 を設定

![img](/_static/images/vrm10/tutorial/lookat_expression_anim.gif)


動作確認 の項に進んでください。

## Expressionタイプ(Texture Transform タイプ)

`unity chan` を例に説明します。

> © Unity Technologies Japan/UCL

| preset      | expression                                          |
|-------------|-----------------------------------------------------|
| `LookLeft`  | ![img](/_static/images/vrm10/tutorial/uv_left.jpg)  |
| `LookRight` | ![img](/_static/images/vrm10/tutorial/uv_right.jpg) |
| `LookUp`    | ![img](/_static/images/vrm10/tutorial/uv_up.jpg)    |
| `LookDown`  | ![img](/_static/images/vrm10/tutorial/uv_down.jpg)  |

`VrmObject` の `LookAt` 設定で `LookAtType` に `Expression` を指定。
![img](/_static/images/vrm10/tutorial/lookat_expression.jpg)
`Y Range` に 1 を設定

![img](/_static/images/vrm10/tutorial/lookat_uv_anim.gif)

## 動作確認

* シーンに Cube を作成(scale [0.1, 0.1, 0.1])
* VrmController の Gaze にセット
* VrmController の LookAtTargetType に `Calc Yaw Pitch To Gaze` を設定(デフォルト)

![img](/_static/images/vrm10/tutorial/lookat_targettype.jpg)

* Play
* Cube を動かして目が動くことを確認

### LookAt 基準位置を調整

`HeadBone位置` + `Offset From Head` が LookAt の基準位置になります。
両目の間辺りを目安に設定してください。
この設定は、 VR 時の HMD 座標と兼用です。

TODO: UI

### 可動範囲を調整

VrmObject の LookAt 画面下部の `HorizontalOuter`, `HorizontalInner`, `VerticalDown`, `VerticalUp` のスライダーを調整してください。

#### Curve X Range

* 大きくするゆっくり動く
* 小さくすると速く動く

LookAt は 以下の２直線の角度を計算します。

* LookAt 基準位置から Head ボーンの正面方向(local Z+)
* LookAt 基準位置から 注視点方向(VrmControllerのGaze)

角度を Yaw(水平) と Pitch(垂直) に分解します。
Yaw は `+-180度`、Pitch は `+-90度` になります。
Yaw, Pitch の上限角度を設定できます。
`Curve X Range` がその設定で初期設定は `90度` です。

#### Curve Y Range(LookAt Type: Bone)

* ボーンの回転角度の制限

上限を制限された角度をそのまま、 EyeBone  に代入すると回転しすぎになる場合が多いです。
これを適当な角度に減らす設定が `Curve Y Range` です。
初期設定は `10度` です。上限角度のときに `10度` 回転します。

初期設定では、注視点が `90度` のときに EyeBone が `10度` 回転します。
`0-90度` では比例して回転し、`90度` を超えないようになっています。

#### Curve Y Range(LookAt Type: Expression)

Expression は角度ではなく `0-1` の Weight になります。
`1` を設定してください。

`1` で多すぎる場合はいかのいずれかの方法で調整してください。

* `1` 以下に減らす
* `Expression` の設定を調整(お勧め)
