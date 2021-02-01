---
title: "UniVRM Version"
date: 2021-02-01T07:16:52+09:00
tags: ["unity"]
---

# Version

| version     | milestone                                             | Bug                        | Note                                              |
| ----------- | ----------------------------------------------------- | -------------------------- | ------------------------------------------------- |
| 0.55.0 2019 |                                                       |                            | The final version to support Unity-5.6            |
| 0.56.0 2020 |                                                       | x                          | Bug fixes after version upgrade                   |
| 0.56.1      |                                                       | x                          | Same as above                                     |
| 0.56.2      |                                                       | x                          | Same as above                                     |
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
| 0.63.0 2021 | https://github.com/vrm-c/UniVRM/milestone/25?closed=1 | [^ss] [^keywordmap] [^upm] | UniGLTF is separated from UniVRM                  |
| 0.63.1      |                                                       | [^ss] [^keywordmap]        |                                                   |
| 0.63.2      |                                                       |                            | Fixed serializer. Screenshots can only be created as .png format |
| 0.64.0      |                                                       | [^asmdef]                  | vrm-1.0 Experiment kick-off                       |
| 0.65.0      |                                                       | [^turkish] [^build]        |                                                   |
| 0.65.1      |                                                       | [^build]                   | Fixed export bugs                                 |
| 0.65.2      | https://github.com/vrm-c/UniVRM/milestone/29?closed=1 |                            | Fixed compile errors                              |

[^springcollider]: Fixed bugs where SpringBone Collider transformation was done twice. [\#576](https://github.com/vrm-c/UniVRM/issues/576)
[^ss]: Bugs occurred when creating a screenshot as .jpg format. [\#639](https://github.com/vrm-c/UniVRM/issues/639)
[^keywordmap]: Fixed serialization bugs when exporting VRM file. [\#654](https://github.com/vrm-c/UniVRM/issues/654)
[^upm]: Fixed MeshUtility's reference issues.
[^asmdef]: Fixed MeshUtility's assembly definitions. [\#687](https://github.com/vrm-c/UniVRM/pull/687)
[^turkish]: Fixed an issue where exports would fail in the Turkish locale. [\#696](https://github.com/vrm-c/UniVRM/issues/696)
[^build]: Fixed compile errors when building a program including UniVRM. [\#701](https://github.com/vrm-c/UniVRM/issues/701)
