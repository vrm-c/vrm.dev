---
title: ヒューマノイド
url: "/dev/univrm-0.xx/vrm/humanoid/"
---

WIP

* 主にモーションキャプチャーのFKのモーションを投入できることを基準に決めました

## 関連イシュー
https://github.com/vrm-c/vrm-specification/issues/87

## 用語

* ボーン: ヒューマノイドを構成するgltfノード
* ボーン名
    * hips
    * spine
    * chest(UnityHumanoidでは option。VRMでは必須?)
    * upperChest(option)
    * neck(UnityHumanoidでは option。VRMでは必須?)
    * head
    * Left/Right eye(option)
    * left/Right shoulder(UnityHumanoidでは option。VRMでは必須?)
    * Left/Right upperArm
    * Left/Right lowerArm
    * Left/Right hand
    * Left/Right upperLeg
    * Left/Right lowerLeg
    * Left/Right foot
    * Left/Right toe(UnityHumanoidでは option。VRMでは必須?)
    * Left/Right thumb proximal, intermediate, distal(option)
    * Left/Right index proximal, intermediate, distal(option)
    * Left/Right middle proximal, intermediate, distal(option)
    * Left/Right ring proximal, intermediate, distal(option)
    * Left/Right little proximal, intermediate, distal(option)

## ヒューマノイドの要件(仮)

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

加えて
* T-Poseになっていること
* 各ノードの回転・拡大は無いこと

あたりになるかと思います。
