---
title: UniVRM-1.XX and UniVRM-0.XX coexistence
date: 2020-04-21T17:12:49+09:00
url: "/en/dev/univrm-1.xx/use_with_univrm-0.xx/"
---

Both UniVRM-1.XX and UniVRM-0.XX importers work.

The uniVRM-0.XX importer can be stopped by defining the c# symbol `VRM_STOP_ASSETPOSTPROCESSOR`

* Go to `Edit` -> `preference` -> `UniVRM` and check `StopVrmAssetPostProcessor`

or

* Go to `Edit` -> `project settings` -> `other settings` -> `Scripting Define Symbols` and add `VRM_STOP_ASSETPOSTPROCESSOR`

