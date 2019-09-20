---
title: Frequently asked questions
linkTitle: FAQ
date: 2018-05-09
lastmod: 2019-09-20T14:00:00Z
url: /en/univrm/faq/
weight: 6
aliases:
- /en/univrm/univrm_faq/
---

## Report errors

Please check the contents in console (`Window -> Console`).

{{< imgproc window_console Fit "363x810"/ >}}

If an error messages (red) is shown in console, there might be something wrong somewhere:

{{< imgproc error Fit "666x272"/ >}}

Please report the errors you got in:

- https://github.com/vrm-c/UniVRM/issues

More details provided in the report will be very helpful for us to look into your problem. For example:

- OS (Windows10 64bit, etc.)
- Unity version (Unity-5.6.3p1, etc.)
- UniVRM version (0.40, etc.)

## VRMSpringBone set before was gone
VRMSpringBone was attached to the node `secondary` during import.

[VRMSpringBone](/en/univrm/components/secondary/#nodes-attached-by-spring-bones)

## I got errors when loading the built application 
Shaders used by UniVRM may not be included in the application.

Please double check:

```
Edit - Project Settings - Graphics - Shader preloading
```

[The procedure for setting Shader preloading](/en/univrm/install/#shader-preloading-setting)
