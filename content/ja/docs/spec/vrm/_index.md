---
title: VRM仕様
date: 2018-04-16T07:30:00Z
lastmod: 2019-09-18T11:30:00Z
url: /vrm_spec/
weight: 2
---

[glTF-2.0](https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md)のバイナリ形式`glb`をベースにした、VR向けモデルフォーマットです。

- [更新履歴](/vrm_spec/changes/)

## 拡張子

`.vrm`を使います。glTFのバイナリ形式`.glb`と互換性があるので、拡張子を`.glb`に変更するとGLTF対応のアプリケーションで読み込むことができます (VRM独自の追加情報は無くなります)。

## JSON拡張

GLBのJSON部に`VRM Extension`として拡張しています。

```json
{
    "extensionsUsed": {
        "VRM"
    },
    "extensions": {
        "VRM": {
            // VRMの拡張情報
        }
    },
    // 通常のGLTF-2.0の情報
}
```

**VRM JSON Schema**:

- https://github.com/vrm-c/vrm-specification/tree/master/specification/0.0/schema

**GLTF-2.0 JSON Schema**:

- https://github.com/KhronosGroup/glTF/tree/master/specification/2.0/schema

## VRM拡張: VRMバージョンなど

**v0.36から**: `/extensions/VRM/exporterVersion`

{{% readfile file="/vrm/specification/0.0/schema/vrm.schema.json" highlight="json" %}}

## 保存できる要素

人間型モデル一体分の情報を保存します。

### GLTF-2.0: Texture

- GLTF-2.0の`/textures/`

VRM拡張はありません。

### GLTF-2.0: Material(`json.extensions.VRM.materialProperties`)

- GLTF-2.0の`/materials/`

GLTFのマテリアルにフォールバックした情報を保存しています (拡張子をGLBに変更した場合に使われる)。

### VRM拡張: `/extensions/VRM/materialProperties`

VRM独自のマテリアル情報を保存しています。現状、Unityに必要な項目を保存しています。選択可能なShaderは[VRMが提供するシェーダー](#vrmが提供するシェーダー)を参照してください。

- [vrm.material.schema.json](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/schema/vrm.material.schema.json)

{{% readfile file="/vrm/specification/0.0/schema/vrm.material.schema.json" highlight="json" %}}

### GLTF-2.0: Mesh

- GLTF-2.0の`/meshes/`

VRM拡張はありません。

#### 頂点属性

- GLTF-2.0の`/meshes/*/primitives/*/attributes`

  - TANGENT (vec4) // v0.42から保存するのをやめて、import時にnormalとuvから計算するようにしています。

#### モーフターゲット情報

- `/meshes/*/primitives/*/extras/targetNames`

にMoprhTargetの名称を記録しています。

### GLTF-2.0: スキニング情報

- GLTF-2.0の`/skins/`

VRM拡張はありません。

### GLTF-2.0: Node

* GLTF-2.0の`/nodes/`

VRM拡張はありません。

- node
  - name
  - position(vec3)
  - rotation(quaternion)
  - scale(vec3)

## 保存する値に対する規約

### GLTF2の規約

GLTF2の規約に準拠します。
特に重要な項目です。

- メートル単位
- 右手Y-UP座標系[^OpenGLCoord]

[^OpenGLCoord]: OpenGL座標系。+Xが右、+Yが上、+Zが手前です。

### VRMの規約

人間型モデルに特化して互換性を高めるために、以下の制約を課します。

- モデルは原点に位置する
- モデルは-Z向き[^OpenGLCoord]
- モデルのヒエラルキーはY-UP[^ZUP]
- モデルのメッシュはY-UP[^ZUP]
- モデルのヒエラルキーはT-Pose
- モデルのメッシュはT-Pose
- ボーンに回転を入れない
- ボーンにスケールを入れない
- ヘッドボーンは真正面を向いている[^LookAt]

[^ZUP]: Blenderや3ds MaxなどのZ-UPのモデラーに由来するモデルでヒエラルキーの途中でx軸-90度の回転を入れてZ-UPが入れ子になっている場合があります。
[^LookAt]: 視線制御はT-Pose時のヘッドの向きを基準に目標物の方向を計算します。

## VRMが提供するシェーダー

セル調のキャラクタモデルの運用を想定して以下のシェーダーを用意しています。

### Unlit系

ライティング・シェーディングせずにテクスチャ色をそのまま表示します。
半透明の扱い別に４種類を用意しています。

- UnlitTexture(不透明)
- UnlitCutout(透明度が閾値以下の部分を透明とする)
- UnlitTransparent(アルファブレンド。ZWriteしない)[^Transparent]
- UnlitTransparentZWrite(アルファブレンド。ZWriteする)[^TransparentZWrite]

[^Transparent]: 煙や頬の色など実体の無いオブジェクト向けです。
[^TransparentZWrite]: 半透明の衣装や、髪の先が半透明など実体のあるオブジェクト向けです。

### MToon

セルシェーディング、輪郭線に対応したシェーダー。
Unlitよりもきめ細かく設定できます。

## VRM拡張: モデルのボーンマッピング (`json.extensions.VRM.humanoid`)

NodeとHumanoidで定義される標準ボーンの対応表です。

{{% readfile file="/vrm/specification/0.0/schema/vrm.humanoid.bone.schema.json" highlight="json" %}}

### 定義しているボーン

| ボーン名                                         |  必須/オプション |
|:-------------------------------------------------|:----------------|
| neck                                             | 必須            |
| head                                             | 必須            |
| left/right Eye                                   | オプション      |
| hips                                             | 必須            |
| spine                                            | 必須            |
| chest                                            | 必須            |
| upperChest                                       | オプション      |
| left/right Shoulder                              | オプション      |
| left/right UpperArm                              | 必須            |
| left/right LowerArm                              | 必須            |
| left/right Hand                                  | 必須            |
| left/right UpperLeg                              | 必須            |
| left/right LowerLeg                              | 必須            |
| left/right Foot                                  | 必須            |
| left/right Toe                                   | オプション      |  
| left/right Thumb Proximal, Intermediate, Distal  | オプション      |
| left/right Index Proximal, Intermediate, Distal  | オプション      |
| left/right Middle Proximal, Intermediate, Distal | オプション      |
| left/right Ring Proximal, Intermediate, Distal   | オプション      |
| left/right Little Proximal, Intermediate, Distal | オプション      |

## VRM拡張: モデル情報 (`json.extensions.VRM.meta`)

{{% readfile file="/vrm/specification/0.0/schema/vrm.meta.schema.json" highlight="json" %}}

### 情報

#### タイトル (Title)

アバターモデルの名前を設定します

#### 作者 (Author)

モデルの作者の名前を記述します

#### 連絡先 (Contact Information)

モデルの作者への連絡先を記述します

#### 参照 (Reference)

何か「親作品」に相当するものがある場合は参照URLなどを記述します

#### サムネイル (Thumbnail)

アバターモデルのサムネイルを登録します。2048x2048程度の解像度テクスチャを推奨します。meta情報内ではtexture番号を指定します。

#### バージョン

モデルの作成バージョンです。

### 使用許諾・ライセンス情報

License

#### アバターの人格に関する許諾範囲

Personation / Charaterization Permission

##### アバターに人格を与えることの許諾範囲 (`json.extensions.VRM.meta.allowedUserName`)

A person who can perform with this avatar

- アバターを操作することはアバター作者にのみ許される (Only Author)
- 明確に許可された人限定 (Explictly Licensed Person)
- 全員に許可 (Everyone)

##### このアバターを用いて暴力表現を演じることの許可 (`json.extensions.VRM.meta.violentUssageName`)

Violent acts using this avatar

- 不許可 (Disallow)
- 許可 (Allow)

##### このアバターを用いて性的表現を演じることの許可 (`json.extensions.VRM.meta.sexualUssageName`)

Sexuality acts using this avatar

- 不許可 (Disallow)
- 許可 (Allow)

##### 商用利用の許可 (`json.extensions.VRM.meta.commercialUssageName`)

For commercial use

- 不許可 (Disallow)
- 許可 (Allow)

##### その他のライセンス条件 (`json.extensions.VRM.meta.otherPermissionUrl`)

Other License URL

上記許諾条件以外のライセンス条件がある場合はそのライセンス文書へのURLを記述

#### 再配布・改変に関する許諾範囲

Redistribution / Modifications License

##### ライセンスタイプ (`json.extensions.VRM.meta.licenseName`)

License Type

- 再配布禁止(Redistribution Prohibited)
- [著作権放棄 (CC0)](https://creativecommons.org/publicdomain/zero/1.0/deed.ja)
- [Creative Commons CC BYライセンス (CC_BY)](https://creativecommons.org/licenses/by/4.0/deed.ja)
- [Creative Commons CC BY NCライセンス (CC_BY_NC)](https://creativecommons.org/licenses/by-nc/4.0/deed.ja)
- [Creative Commons CC BY SAライセンス (CC_BY_SA)](https://creativecommons.org/licenses/by-sa/4.0/deed.ja)
- [Creative Commons CC BY NC SAライセンス (CC_BY_NC_SA)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja)
- [Creative Commons CC BY NDライセンス (CC_BY_ND)](https://creativecommons.org/licenses/by-nd/4.0/deed.ja)
- [Creative Commons CC BY NC NDライセンス (CC_BY_NC_ND)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja)
- その他 (Other)

##### その他ライセンス条件 (`json.extensions.VRM.meta.otherLicenseUrl`)

Other License URL

上記許諾条件以外のライセンス条件がある場合はそのライセンス文書へのURLを記述

## VRM拡張: モーフ設定 (`json.extensions.VRM.blendShapeMaster`)

BlendShapeをグループ化するBlendShapeGroupの配列を設定します。

{{% readfile file="/vrm/specification/0.0/schema/vrm.blendshape.schema.json" highlight="json" %}}

### ブレンドシェイプグループ (`json.extensions.VRM.blendShapeMaster.blendShapeGroups`)

{{% readfile file="/vrm/specification/0.0/schema/vrm.blendshape.group.schema.json" highlight="json" %}}

{{% readfile file="/vrm/specification/0.0/schema/vrm.blendshape.bind.schema.json" highlight="json" %}}

{{% readfile file="/vrm/specification/0.0/schema/vrm.blendshape.materialbind.schema.json" highlight="json" %}}

#### 名前

名前です。事前定義名と同じ (大文字) を推奨します

#### 事前定義名

待機状態の表情

- Neutral

リップシンク

- A
- I
- U
- E
- O

瞬き

- Blink
- Blink_L
- Blink_R

喜怒哀楽

- Fun
- Angry
- Sorrow
- Joy

視線制御

- LookUp
- LookDown
- LookLeft
- LookRight

その他

- Unknown

#### ブレンドシェイプの名前の識別名

システムからブレンドシェイプを一意に認識する文字列IDを以下のロジックで決定します。

```plain
// 疑似コード
function GetID(preset, name)
{
  if (Preset != BlendShapePreset.Unknown)
  {
      return preset.ToString().ToUpper();
  }
  else
  {
      return name.ToUpper();
  }
}
```

- ブレンドシェイプIDがユニークになるようにPresetとNameを設定する

## VRM拡張: 一人称設定 (`json.extensions.VRM.firstPerson`)

{{% readfile file="/vrm/specification/0.0/schema/vrm.firstperson.schema.json" highlight="json" %}}

一人称視点のアバターを描画する場合、自モデルの頭部の中が見えてしまうという問題が生じます[^firstperson]。
これに対応するために、一人称時の表示状態を指定できます。

[^firstperson]: バックフェースカリングや近平面である程度対処できますが、口の中が作りこんであるモデルの歯茎が意図せずに見えてしまうなど不十分な場合があります。

### firstPersonBone (`json.extensions.VRM.firstPerson.firstPersonBone`)

一人称時に描画を切り替えるべきボーンを指定します。通常`Head`です。

### firstPersonBoneOffset (`json.extensions.VRM.firstPerson.firstPersonBoneOffset`)

一人時のヘッドセットの目標位置。
頭ボーンからヘッドセットへのオフセットを加味することを想定している。

### meshAnnotations (`json.extensions.VRM.firstPerson.meshAnnotations`)

各メッシュに対して一人称時とそれ以外で表示・非表示を切り替えることができます。
以下の設定があります。

- **Auto**: firstPersonBoneとその子孫に対するボーンWeightを持つポリゴンを自動で非表示にする[^firstPersonAuto]
- **FirstPersonOnly**: 一人称のみ表示
- **ThirdPersonOnly**: 三人称のみ表示(頭など一人称時に非表示にするメッシュに指定する)
- **Both**: 特に表示切替をしない

[^firstPersonAuto]: 実行時に自動で非表示部分を削除したモデルを生成します。

### 視線設定

ターゲットの方向を向くようにキャラクタの視線を制御します。

#### 目線タイプ (`json.extensions.VRM.firstPerson.lookAtTypeName`)

- **Bone**: ボーンにより目線を操作します。
- **BlendShape**: BlendShapeにより目線を操作します。BlendShapePreset.LookUp, LookDown, LookLeft, LookRightを使います。

#### 角度調整

頭と目標物の角度差を目ボーンに適用する場合の角度を調整します。

#### `json.extensions.VRM.firstPerson.lookAtHorizontalInner`

#### `json.extensions.VRM.firstPerson.lookAtHorizontalOuter`

#### `json.extensions.VRM.firstPerson.lookAtVerticalDown`

#### `json.extensions.VRM.firstPerson.lookAtVerticalUp`

# VRM拡張: 揺れモノ設定 (`json.extensions.VRM.secondaryAnimation`)

尻尾や髪の毛などのひも状のオブジェクトの自動アニメーションの設定です。

### 揺れるボーン (`secondaryAnimation.boneGroups`)

{{% readfile file="/vrm/specification/0.0/schema/vrm.secondaryanimation.schema.json" highlight="json" %}}

{{% readfile file="/vrm/specification/0.0/schema/vrm.secondaryanimation.spring.schema.json" highlight="json" %}}

#### 揺れるボーンの根元のボーン (`json.extensions.VRM.secondaryAnimation.boneGroups[0].bones`)

揺れモノの根元のボーンのノードインデックスを指定します。

#### 揺れるボーンと衝突する当たり判定 (`json.extensions.VRM.secondaryAnimation.boneGroups[0].colliderGroups`)

揺れモノに対する衝突判定グループのインデックスを指定します。

#### パラメーター

##### center (`json.extensions.VRM.secondaryAnimation.boneGroups[0].center`)

world原点以外の、揺れモノの基準点を設定できます。
ワープで移動するUIを実装した場合に、ワープ移動で揺れモノを揺らしたくない場合にワープで移動する親ノードを指定できます。

##### dragForce (`json.extensions.VRM.secondaryAnimation.boneGroups[0].dragForce`)

自動アニメーションの抵抗(減速)です。

##### gravityDir (`json.extensions.VRM.secondaryAnimation.boneGroups[0].gravityDir`)

重力の方向です。(0, -1, 0)にすると重力に、(1, 0, 0)にすると風のように作用します。

##### gravityPower (`json.extensions.VRM.secondaryAnimation.boneGroups[0].gravityPower`)

重力の強さです。

##### hitRadius (`json.extensions.VRM.secondaryAnimation.boneGroups[0].hitRadius`)

Colliderとの当たり判定の半径です

#### stiffness (`json.extensions.VRM.secondaryAnimation.boneGroups[0].stiffiness`)

揺れモノの復元力(初期姿勢に戻る力)です

### 揺れモノ当たり判定設定 (`json.extensions.VRM.secondaryAnimation.colliderGroups`)

揺れモノと衝突する球を設定します。

{{% readfile file="/vrm/specification/0.0/schema/vrm.secondaryanimation.collidergroup.schema.json" highlight="json" %}}

### ノード (`json.extensions.VRM.secondaryAnimation.colliderGroups[0].node`)

当たり判定を設置するノードです。

### ローカル座標 (`json.extensions.VRM.secondaryAnimation.colliderGroups[0].colliders[1].offset`)

当たり判定のノードからのローカル座標です。

### 半径 (`json.extensions.VRM.secondaryAnimation.colliderGroups[0].colliders[1].radius`)

当たり判定の半径です。
