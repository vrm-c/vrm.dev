---
title: "VRM-1.0の変更点"
weight: 1
---

## VRM-0.X からの変更点

- VRM0 z- forward => z+ forward
- VRM0 shared bufferView => divided bufferView
- VRM0 meta => VRMC_vrm meta
- VRM0 humanoid => VRMC_vrm humanoid
- VRM0 blendshape => VRMC_vrm expression
- VRM0 lookat => VRMC_vrm lookat
- VRM0 firstperson => VRMC_vrm firstperson
- VRM0 springBone => VRMC_springBone
- `新規` => VRMC_materials_hdr_emissiveMultiplier
- VRM0 mtoon => VRMC_materials_mtoon
- `新規` => VRMC_node_constraint

## z+ forward

モデルは Z+ 方向が前方になるように格納します。

|         | VRM0 | VRM1 |
| ------- | ---- | ---- |
| forward | z-   | z+   |
| right   | x+   | x-   |

## divided vertex buffer

bufferView の primitive 間での共有をやめます。

|            | VRM0                                                      | VRM1                                                                                             |
| ---------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| bufferView | shared                                                    | divided                                                                                          |
| 利点       | GameEngine メモリレイアウトに近いので変換が少ない         | UniVRM 以外の glTF ローダーでメモリ使用量が爆発しない                                            |
| 欠点       | UniVRM 以外の glTF ローダーでメモリ使用量が爆発する可能性 | export 時に頂点の増加・並び順の変化がありえる。import 時に連結する手間。morphTarget の扱いが煩雑 |

## VRMC_vrm: meta

`TODO`

## VRMC_vrm: humanoid

|                     | VRM0 | VRM1 |
| ------------------- | ---- | ---- |
| neck                | 必須 |      |
| head                | 必須 | 必須 |
| hips                | 必須 | 必須 |
| spine               | 必須 | 必須 |
| chest               | 必須 |      |
| left/right UpperArm | 必須 | 必須 |
| left/right LowerArm | 必須 | 必須 |
| left/right Hand     | 必須 | 必須 |
| left/right UpperLeg | 必須 | 必須 |
| left/right LowerLeg | 必須 | 必須 |
| left/right Foot     | 必須 | 必須 |

## VRMC_vrm: expression

|      | VRM0                                                                  | VRM1       |
| ---- | --------------------------------------------------------------------- | ---------- |
| name | BlendShape(Unity における MorphTarget 機能のことであり紛らわしかった) | Expression |
| 喜   | joy                                                                   | happy      |
| 怒   | angry                                                                 | angry      |
| 哀   | sorrow                                                                | sad        |
| 楽   | fun                                                                   | relaxed    |
| 驚   |                                                                       | surprised  |
| あ   | a                                                                     | aa         |
| い   | i                                                                     | ih         |
| う   | u                                                                     | ou         |
| え   | e                                                                     | ee         |
| お   | o                                                                     | oh         |

- overrideMouse, overrideLipSync, overrideBlink 設定の追加
- VRM0 の materialBind から MaterialColorBind と TextureTransformBind に整理

## VRMC_vrm: lookat

* `degreemap.curve` が廃止になります

## VRMC_vrm: firstperson

* `firstPersonBone` は廃止になり、`Head` 固定になります
* `firstPersonBoneOffset` は、`lookAt.offsetFromHeadBone` になります

## VRMC_springBone

|          | VRM0                    | VRM1                |
| -------- | ----------------------- | ------------------- |
| 設定単位 | 房                      | 節                  |
| 子       | children[0]             | children のいずれか |
| 末端     | 7cm の遠さに 自動で追加 | 追加しない          |

- 拡張を分離
- Collider 形状に Capsule を追加

## VRMC_materials_hdr_emissiveMultiplier

エミッションによる発光表現です。

glTF では emissiveFactor(float3) の値域が [0.0, 1.0] です。
これに係数を追加することで、1.0 を越える値を表せるようにします。

|                         | VRM0                                | VRM1                                                    |
| ----------------------- | ----------------------------------- | ------------------------------------------------------- |
| mtoon の emissiveFactor | 独自に格納していた(0, 1 制限が無い) | gltf material の emissiveFactor に格納(0, 1 制限がある) |

gltf-2.0 の標準マテリアル(PBR), VRMC_materials_mtoon から利用します。

## VRMC_materials_mtoon

- 拡張を分離

`TODO`

## VRMC_node_constraint

`開発中`

### translation

### rotation

### aim
