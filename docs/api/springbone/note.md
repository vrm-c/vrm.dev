# note

:::info job版のロジックは vrm-0.x と vrm-1.0 で共通化されました

- https://github.com/vrm-c/UniVRM/issues/2422

:::

:::note job は房並列です

joint 毎ではなく房(根元 から末端まで)単位の並列です。
根元から順番に長さで拘束して位置を確定させる都合で親の位置・方向が先に決まる必要があるためです。

- 伸縮せずに見た目がきれい
- 並列化できない

というトレードオフがあります。

:::

## Spring の状態変化

| input                                           | 変化     | 備考                            |
| ----------------------------------------------- | -------- | ------------------------------- |
| 初期姿勢                                        | 不変     | bone local. スケール抜き？      |
| 構成(joint アタッチ情報)                        | 不変     | editor では変わりうる。再初期化 |
| runtime(center, scale, exernal...etc)           | フレーム | center, scale で難              |
| joint設定(stiffness, dragForce, gravity... etc) | フレーム |                                 |
| collider(radius)                                | フレーム |                                 |

- `0.x` [VRM 0 系で FastSpringBone を使用した際に VRM の最親のゲームオブジェクトに FastSpringBone が追従しない · Issue #2047 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2047)
