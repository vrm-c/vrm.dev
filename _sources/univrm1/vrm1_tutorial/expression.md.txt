# Expression の設定

```{admonition} 旧blendShape
:class: warning



Vrm-0.X の BlendShape は、 Vrm-1.0 の Expression に名称を変更しました。


```


## Expression の割り当て設定

[VrmObject](/univrm1/vrm1_tutorial/vrm_object) の Expression GUI で設定します。

![img](/_static/images/vrm10/tutorial/vrm_expression_settings.jpg)

## 個別の Expression 設定

ひとつずつ独立したアセットです。

![img](/_static/images/vrm10/tutorial/expression_asset.jpg)
![img](/_static/images/vrm10/tutorial/expression.jpg)

### MorphTarget

blend shape のある `SkinnedMeshRenderer` がリストされます。


### List
#### MorphTarget

* MorphTarget の List 表示です

#### MaterialColor

Material 色を [0-1] の weight値でアニメーションさせることができます。

* Color
* EmissionColor
* ShadeColor
* RimColor
* OutlineColor

#### TextureTransform

Texture の offset, scale を [0-1] の weight値でアニメーションさせることができます。

### Option

MorphTarget 以外の詳細な設定項目です。

#### IsBinary

漫画風の表現などで、中間の値を見せたくない場合に有効にしてください。
中間の値を取ることができなくなります。

#### Override

プロシージャルな Expression の値を制御します。

```{admonition} プロシージャルなExpression
:class: warning



アプリケーションが自動的に weight 値を生成することが多いと想定される Expression に対して `プロシージャルなExpression` を定義しました。
3つのグループ `Blink`, `LookAt`, `Mouth` を設定しています。

| グループ | weight生成例                            | 含まれる Expression preset            |
|----------|-----------------------------------------|---------------------------------------|
| Blink    | ランダム                                | Blink, BlinkLeft, BlinkRight          |
| LookAt   | VrmコンポーネントのLookAt機能による生成 | LookUp, LookDown, LookLeft, LookRight |
| Mouth    | 音声やテキスト解析による生成            | Aa, Ih, Ou, Ee, Oh                    |


```


プロシージャルな Expression の Weight はシステムにより自動生成されることが想定され、
その場合既存の Expression Weight との組み合わせで問題が発生する可能性があります。

```{admonition} Expressionの組み合わせで起こる問題の例
:class: warning



* 口が開く `happy` と同時に `aa` が適用される => 口が開きすぎて変になる
* 目を閉じる `sad` と同時に `blink` が適用される => 目が2回閉じて瞼が頬を貫通してしまう
* `blink` と同時に `lookRight` が適用される => 目が瞼を貫通してしまう


```


組み合わせ問題を回避するために自動生成される `Blink`, `LookAt`, `Mouth` の Weight 値を加工(Override)する機能です。
Override 設定した Expression の Weight 値が 0 より大きいときに機能が有効になります。

| 設定  | 機能                                       |
|-------|--------------------------------------------|
| None  | procedual.weight = procedual.weight        |
| Block | procedual.weight = 0                       |
| Blend | procedual.weight = (1 - expression.weight) |

### Preview

Expression アセットのインスペクターの下部の頭部表示画面です。
Expression の設定を適用した結果を描画します。

* Preview Prefab
* Preview Weight: スライダーを動かすことで、[0-1] 間での変化をプレビューできます。Advanced の `IsBinary` チェックボックスの影響をテストできます。

### 作業例

| asset | morphtarget       |
|-------|-------------------|
| aa    | head.lip_a => 100 |
