---
title: "UniVRM Version"
tags: ["unity"]
---

# Version

| version     | milestone                                             | バグ                       | 備考                                              |
| ----------- | ----------------------------------------------------- | -------------------------- | ------------------------------------------------- |
| 0.55.0 2019 |                                                       |                            | Unity-5.6 対応最終版                              |
| 0.56.0 2020 |                                                       | x                          | Unity-2018.4以降。更新内容が多すぎてバグ          |
| 0.56.1      |                                                       | x                          |                                                   |
| 0.56.2      |                                                       | x                          |                                                   |
| 0.56.3      |                                                       |                            |                                                   |
| 0.57.0      |                                                       |                            |                                                   |
| 0.57.1      |                                                       |                            |                                                   |
| 0.58.0      |                                                       |                            |                                                   |
| 0.58.1      |                                                       |                            |                                                   |
| 0.59.0      |                                                       |                            |                                                   |
| 0.60.0      |                                                       |                            |                                                   |
| 0.61.0      | https://github.com/vrm-c/UniVRM/milestone/20?closed=1 | [^springcollider]          |                                                   |
| 0.61.1      |                                                       |                            |                                                   |
| 0.62.0      | https://github.com/vrm-c/UniVRM/milestone/21?closed=1 |                            |                                                   |
| 0.63.0 2021 | https://github.com/vrm-c/UniVRM/milestone/25?closed=1 | [^keywordmap] [^ss] [^upm] | UniGLTF分離                                       |
| 0.63.1      |                                                       | [^keywordmap] [^ss]        |                                                   |
| 0.63.2      |                                                       |                            | シリアライザ修正。スクリーンショットの jpg やめた |
| 0.64.0      |                                                       | [^asmdef]                  | vrm-1.0 Experimental 開始                         |
| 0.65.0      |                                                       | [^build]                   |                                                   |
| 0.65.1      |                                                       | [^build]                   | トルコ語のExportを修正                            |
| 0.65.2      | https://github.com/vrm-c/UniVRM/milestone/29?closed=1 |                            |

[^springcollider]: スプリングボーンのコライダーの座標変換バグ。https://github.com/vrm-c/UniVRM/issues/576
[^keywordmap]: シリアライザのバグ。エクスポートしたファイルの互換性。https://github.com/vrm-c/UniVRM/issues/654
[^ss]: エクスポートダイアログのスクリーンショットボタンの jpg バグ https://github.com/vrm-c/UniVRM/issues/639
[^upm]: meshutilty フォルダの移動と参照の問題
[^build]: build すると Exception( `#if UNITY_EDITOR` )。https://github.com/vrm-c/UniVRM/issues/701
[^asmdef]: 他のパッケージと併用するときに install で問題が出る？ https://github.com/vrm-c/UniVRM/pull/687
