# SpringBone の実装状況

| type  | job | update          | load    | note                                  |
| ----- | --- | --------------- | ------- | ------------------------------------- |
| vrm-0 |     | spring root     | default | v0.74(scaling), v0.126(scaling param) |
| vrm-0 | job | model root      | (todo)  | job かつ singleton でないバージョン   |
| vrm-0 | job | scene singleton | custom  |                                       |
| vrm-1 | job | model root      | (todo)  | job かつ singleton でないバージョン   |
| vrm-1 | job | scene singleton | default | v0.106(重力), v0.126(editor)          |

:::info ３つのSpringBone実装の部品を共通化予定

- https://github.com/vrm-c/UniVRM/issues/2422

:::

:::note job かつ singleton でないバージョン

複数VRM を同時に処理する場合は scene singleton の方がパフォーマンスが向上します。

:::

:::note job は房並列です

joint 毎ではなく房(根元 から末端まで)単位の並列です。

根元から順番に長さで拘束して位置を確定させるため再帰処理が必須。

- 伸縮せずに見た目がきれい
- 配列化できない

というトレードオフがあります。

:::

:::warning スケーリングは uniform(xyz が同じ) のみの対応です
:::

- `0.x` [SpringBone does not work correctly if you change the model size, for example scale (8,8,8). · Issue #2242 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2242)
- `0.x` [VRM 0 系で FastSpringBone を使用した際に VRM の最親のゲームオブジェクトに FastSpringBone が追従しない · Issue #2047 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2047)
- `0.x` [Scale が VRM Spring Bone に正しく適用されません · Issue #922 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/922)
