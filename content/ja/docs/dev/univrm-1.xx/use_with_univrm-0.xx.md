---
title: UniVRM-0.XX と共存する
date: 2020-04-21T17:12:49+09:00
---

UniVRM-1.0 と UniVRM-0.XX の両方のインポーターが動作します。

C# のシンボル `VRM_STOP_ASSETPOSTPROCESSOR` を #define することで uniVRM-0.XX のインポーターを停止できます。

* Edit - preference - UniVRM

もしくは、

* Eidt - project settings - other settings - Scripting Define Symbols

から設定できます。
