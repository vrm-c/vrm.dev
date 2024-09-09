# SpringBone implementation

| type  | job | update          | load    | note                                  |
| ----- | --- | --------------- | ------- | ------------------------------------- |
| vrm-0 |     | spring root     | default | v0.74(scaling), v0.126(scaling param) |
| vrm-0 | job | scene singleton | custom  |                                       |
| vrm-1 | job | scene singleton | default | v0.106(重力), v0.126(editor)          |

:::info ３つのSpringBone実装の部品を共通化予定

- https://github.com/vrm-c/UniVRM/issues/2422

:::

:::note job は房並列です

joint 毎ではなく房(根元 から末端まで)単位の並列です。

根元から順番に長さで拘束して位置を確定させるため再帰処理が必須。

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

### scaling

:::warning スケーリングは uniform(xyz が同じ) のみの対応です

:::

- `0.x` [SpringBone does not work correctly if you change the model size, for example scale (8,8,8). · Issue #2242 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2242)
- `0.x` [Scale が VRM Spring Bone に正しく適用されません · Issue #922 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/922)

## 実行時に SpringBone 実行システムをカスタマイズするインタフェース

- runtime load
- scene から start ?

- https://github.com/vrm-c/UniVRM/issues/2422

:::note 追加予定

job かつ singleton でないバージョン

| type  | job | update     | load   | note |
| ----- | --- | ---------- | ------ | ---- |
| vrm-0 | job | model root | (todo) |      |
| vrm-1 | job | model root | (todo) |      |

複数VRM を同時に処理する場合は scene singleton の方がパフォーマンスが向上します。

:::
