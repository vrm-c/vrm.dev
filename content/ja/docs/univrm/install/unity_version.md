---
title: "Unity のバージョン"
weight: 1
tags: ["unity"]
---

## UniVRM-0.56.0 ～

Unity サポート状況は以下のようになっています。

| Unity Version    | 動作 | Scripting Runtime Version | UPM | 備考                                                                 |
|------------------|------|---------------------------|-----|----------------------------------------------------------------------|
| Unity-2017       | ×    | -                         |     |                                                                      |
| Unity-2018.1     | ×    | -                         |     |                                                                      |
| Unity-2018.2     | ×    | -                         |     |                                                                      |
| Unity-2018.3     | △    | .Net4.X equivalent        |     | C#7.3。動くかもしれないが未確認                                      |
| Unity-2018.4 LTS | ◎    | .Net4.X equivalent        |     | UniVRMの開発に使っているバージョン                                   |
| Unity-2019.1     | ○    | .Net4.X equivalent        |     |                                                                      |
| Unity-2019.2     | ○    | -                         |     | .Net3.5が無くなったので Scripting Runtime Version 設定が不要になった |
| Unity-2019.3     | ○    | -                         |     | 2019.3.4f1 から UPM(githubのサブフォルダ) が動作する                 |
| Unity-2019.4 LTS | ◎    | -                         | ○   | リリース時にUPMの動作確認をしてるバージョン                          |
| Unity-2020       | △    | -                         | ○   | Prefab 周りの動作が変わっていてEditor機能が一部動作せず。            |

## ～ UniVRM-0.55

* Unity-5.6 以降
