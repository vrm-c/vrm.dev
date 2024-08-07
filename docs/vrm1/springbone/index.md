# VRMC_springBone

|          | VRM0                    | VRM1                |
| -------- | ----------------------- | ------------------- |
| 設定単位 | 房                      | 節                  |
| 子       | children[0]             | children のいずれか |
| 末端     | 7cm の遠さに 自動で追加 | 追加しない          |

- 拡張を分離 => 独立した `VRMC_springBone` 拡張
- Collider 形状に Capsule を追加
- Unity 座標系の混在を修正
