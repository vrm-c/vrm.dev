---
title: VRMのTポーズについて
linkTitle: Tポーズについて
date: 2018-04-16T07:30:00Z
lastmod: 2019-09-18T11:30:00Z
url: /vrm_tpose/
weight: 1
resources:
- src: "*.png"
---

VRMの第１実装のUnityのHumanoidに準拠したT-Pose[^tpose]を採用しています。

{{< imgproc t_pose Fit "375x473" >}}
T-Poseの例
{{< /imgproc >}}

胴体と頭・足については自明ですが、腕と手の指についても規約があります。

* 手の平は下向き
* 親指は水平でXZ平面(上から見て)45度

[^tpose]: [Mecanim Humanoids](https://blogs.unity3d.com/jp/2014/05/26/mecanim-humanoids/)
