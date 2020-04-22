---
title: How to export
date: 2020-04-21T17:12:49+09:00
---

The export procedure has a slight change from the UniVRM-0.XX:

1. The model should be placed at the origin and face towards +Z(axis) direction. If necessary, please make the model as T-pose manually. Force `T-Pose` feature has been removed in UniVRM-1.XX
2. Right click the selected model in Hierarchy window and select [UniVRM-1.0.0] - [Export VRM]. The export window will then prompt
3. In the export window, click `Export` button
4. Select a file path you want to save your model in the dialog

The selected model can be judged whether it can be exported as VRM format in the export window. The exportable VRM model must fulfill requirements below:

* An Animator component has been added and a Humanoid avatar has been set to the root (a.k.a. topmost parent) of the VRM game object
* Entered the information in the following three necessary items in Meta
  * Title
  * Version
  * Authors
  