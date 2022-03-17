---
aliases: [
    "/univrm/humanoid/humanoid/", 
    "/docs/univrm/humanoid/humanoid/", 
    "/univrm/settings/t_pose/", 
    "/docs/univrm/humanoid/vrm_tpose/",
    "/docs/univrm/humanoid/t_pose/"
]
tags: ["detail"]
weight: 1
---

# ヒューマノイド概要

## 概要

VRMのヒューマノイドは、主にモーションキャプチャーの Forward kinematics のモーションを受けられることを基準に決めました。

１フレームのモーション(ポーズ)は以下の情報で表される想定です。

* hipsボーンの移動値
* 各ボーンの回転値

ある Gltf Scene (Unity Hierarhcy) がこのデータを受けて同じポーズを再現するには以下の条件必要です。

* Gltf Node (Unity GameObject) とボーン(hips, spine, chest...)の対応が分かっている
* ボーンの親子関係が決まっている
* ポーズを受ける前の姿勢が決まっている => T-Pose

```{admonition} 備考
:class: note


細かく言えば、ボーンの長さが違うと同じポーズになりません。
これを解決する技術を、リターゲットと言いますが VRM では特に指定していません。
例えば、股-膝-足首-踵 の比率が違うと地面に対してすべります。

```


Unity の HumanoidAvatar を元に決めたのでだいたい同じです。

https://docs.unity3d.com/Manual/AvatarCreationandSetup.html

さらに、プログラムでの扱いを簡単にするために

* すべての Gltf Node (Unity GameObject) の回転を0にしたときに初期ポーズになる
* スケールは変化しない

を追加したものが VRM のヒューマノイドです。

```{admonition} 備考
:class: note


特にスケールは難しい問題で、スケール中心が原点以外、負のスケール、XYZ別々のスケールなどを考慮したプログラム書くのは大変な負担となります。

```


## T-Pose

```{figure} /_static/images/vrm/T_pose.png
T-Poseの例
```

腕と手の指についても規約があります。

* 手の平は下向き
* 親指は水平でXZ平面(上から見て)45度

## Unityのヒューマノイド

Unity では、 Avatar というオブジェクトがあります。
これを、 Humanoid モードに設定できます。
Avatar は Unity の オブジェクトですが、Humanoid Avatar の設定画面は `fbx importer` の一部です。
このため、 fbx 以外のデータから Humanoid Avatar のあるモデルを作れません。
ただし、Program から Humanoid Avatar を作成する関数はあるので、
UniVRMは Humanoid Avatar を作成できます。 [humanoid component](/univrm/humanoid/meshutility_humanoid)

## 互換性のあるBVH

初期姿勢が、 `T-Pose` であるBVHと互換性があります。

* hips に移動値を代入して
* hips から子に向かって ローカル回転を代入します

## 詳細

ボーンの一覧は、

https://docs.unity3d.com/ja/2019.4/ScriptReference/HumanBodyBones.html

と同じです。

* 対象となるノードはスキニング(GLTFのskinおよびjoint、UnityのSkinnedMeshRendererなど)とは無関係に選択できる
* 必須のボーンがすべて含まれている
* ボーンの親子関係がヒューマノイドの定義を守っている(LowerLegの最初に見つかる祖先ボーンがUpperLegであるなど)
* hipsをrootに以下の親子関係。カッコは必須でないボーン
    * hips - spine - chest - (upper chest) - neck - head
        * headからleft - (eye)
        * headからright - (eye)
        * chestまたはupper chestからleft - (shoulder) - upper arm - lower arm - hand - (fingers)
        * chestまたはupper chestからright - (shoulder) - upper arm - lower arm - hand - (fingers)
        * hipsからleft - upper leg - lower leg - foot - (toes)
        * hipsからright - upper leg - lower leg - foot - (toes)

    * 間にヒューマノイドに関係ないノードが入ることは許す(LowerLegの親がemptyでその親がUpperLegであるなど)
    * 必須でないボーンは飛ばしてよい(UpperArmの親がshoulderじゃなくてchestなど)

## 関連イシュー

* https://github.com/vrm-c/vrm-specification/issues/87

## 参考

* [Mecanim Humanoids](https://blogs.unity3d.com/jp/2014/05/26/mecanim-humanoids/)
* [BlenderからUnityのHumanoid互換でfbxをエクスポートする](https://qiita.com/ousttrue/items/aead1c943855561b62e7)
