---
weight: 1
tags: ["unity"]
---

# Unity のバージョン

## UniVRM-0.80.0 ～

Unity-2018.4LTS のサポートを終了して、開発バージョンを `Unity-2019.4LTS` に更新しました。

| Unity Version    | 備考                                                                                  |
|------------------|---------------------------------------------------------------------------------------|
| Unity-2019.4 LTS | UniVRMの開発に使っているバージョン                                                    |
| Unity-2020.4 LTS | リリース時にUPMの動作確認をしてるバージョン                                           |
| Unity-2021       | 問題が発生した場合は [github](https://github.com/vrm-c/UniVRM/issues) にご報告ください|

## UniVRM-0.56.0 ～ 0.79.0

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
| Unity-2020       | ○    | -                         | ○   | Editor機能(Prefabなど)が一部動作せず。`UniVRM-0.69.0` で修正         |

## ～ UniVRM-0.55

* Unity-5.6 以降

