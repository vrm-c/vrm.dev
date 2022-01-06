---
title: "VRMの動作を確認する"
date: 2020-08-26T15:52:48+09:00
url: "/how_to_make_vrm/vrm_behavior_confirmation/"
description: "Unityを Play モードにして、BlendShape、SpringBone などの動作を確認する"
tags: ["unity"]
weight: 4
---

このセクションでは、作成したVRMモデルをUnity上で再生し挙動を確認することを想定しています。

### 目の動きを確認する

`AnimationClip/AnimationController`をセットしたり、`VRMLookAtHead`の`Target`に[GameObject](/univrm/lookat/univrm_lookat#target)をセットしたり（視線がどこを向くかの設定）、`Head`欄にヘッドコンポーネントを探したり、実際にUnity上で動作を確認します。モデルはプレイモードでターゲット位置を追跡します（たとえば、``GameObject -> 3D Object -> Cube``からターゲットとしてキュ​​ーブをヒエラルキーに作成できます）。シーンに配置されたオブジェクトをドラッグして、モデルの目がリアルタイムでオブジェクトを追跡しているかどうかをテストできます。モデルのクローズアップフェイスは、インスペクターウィンドウで見れます。

![LookAtTarget](/_static/images/vrm/LookAtTarget.png)
<br>
<br>
![TargetTracking](/_static/images/vrm/TargetTracking.png)

### 表情を確認する

モデルの表情を確認するには、非常に簡単なテストスクリプト「AIUEO」と「Blinker」を用意しています。[BlendShape](/univrm/blendshape/univrm_blendshape#vrmblendshapeproxy)をセットアップした後、`Add Component`から「AIUEO」を選んでセットすれば「あ」「い」「う」「え」「お」の口の形に順番に切り替わるアニメーションが、「Blinker」を選んでセットすれば定期的にまばたきのアニメーションが行われます。

| ![BlendShapeProxy](/_static/images/vrm/BlendShapeProxy.png)                    |
|--------------------------------------------------------------------------------|
| ``BlendShapeAvatar``フィールドにダブルクリックして、3Dモデルの表情を設定します |

![AddExpressionScripts](/_static/images/vrm/AddExpressionScripts.png)
<br>
<br>
![InspectorFaceView](/_static/images/vrm/InspectorFaceView.png)