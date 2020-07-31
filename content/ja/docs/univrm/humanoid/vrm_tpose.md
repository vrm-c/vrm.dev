---
title: "VRMのT-Poseについて"
linkTitle: "Tポーズについて"
date: 2018-04-16T16:30:00+09:00
url: "/dev/univrm-0.xx/vrm/vrm_tpose/"
---

VRMの第１実装のUnityのHumanoidに準拠したT-Pose[^tpose]を採用しています。

|{{< img src="images/vrm/T_pose.png" alt="T_pose" >}}|
|-----|
|T-Poseの例|

胴体と頭・足については自明ですが、腕と手の指についても規約があります。

* 手の平は下向き
* 親指は水平でXZ平面(上から見て)45度

[^tpose]: [Mecanim Humanoids](https://blogs.unity3d.com/jp/2014/05/26/mecanim-humanoids/)
