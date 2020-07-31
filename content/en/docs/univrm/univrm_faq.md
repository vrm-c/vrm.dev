---
title: "Frequently asked questions"
linkTitle: "FAQ"
date: 2018-05-09
weight: 3
---

# Report errors

Please check the contents in console (``Window -> Console``).

{{< img src="images/vrm/window_console.png" alt="コンソール画面を表示するメニュー" >}}

If an error messages (red) is shown in console, there might be something wrong somewhere:

{{< img src="images/vrm/error.png" alt="エラーの例" >}}

Please report the errors you got in:

* https://github.com/vrm-c/UniVRM/issues

More details provided in the report will be very helpful for us to look into your problem. For example:

* OS (Windows10 64bit, etc.)
* Unity version (Unity-5.6.3p1, etc.)
* UniVRM version (0.40, etc.)

# VRMSpringBone set before was gone
VRMSpringBone was attached to the node```secondary```during import.

[VRMSpringBone](../components/univrm_secondary/#nodes-attached-by-spring-bones)

# I got errors when loading the built application 
Shaders used by UniVRM may not be included in the application.

Please double check:

```Edit - Project Settings - Graphics - Shader preloading```

[The procedure for setting Shader preloading](../univrm_install/#shader-preloading-setting)