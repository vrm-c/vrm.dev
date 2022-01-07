# 🚧Material の設定

## new_seedsan のマテリアル構成

* SkinnedMeshRenderer: hair
  * Material0: hair(頭髪)
  * Material1: huku_bake(髪留め)
* SkinnedMeshRenderer: hair_tail
  * Material0: hair(頭髪。おさげ)
* SkinnedMeshRenderer: head
  * Material0: body_bake(頭部、顔)
  * Material1: eye(瞳)
  * Material2: eye_trans(?)
* SkinnedMeshRenderer: robo_arm(背中のロボアーム)
  * Material0: arm_mat(ロボーアームの白パーツで覆われていない部分)
  * Material1: arm_plastic(ロボアームの白いパーツ)
  * Material2: green_emit(ロボアームの緑の発光部分)
* SkinnedMeshRenderer: wear(体、バックパック)
  * Material0: body_bake(肌)
  * Material1: body_nm(衣服)
  * Material2: wear_metal(グローブの電極)
  * Material3: huku_bake(衣服)
  * Material4: armgear_plastic(グローブの白いパーツ)
  * Material5: robo_face(グローブの顔モニター)
  * Material6: glass(グローブの顔モニター)
  * Material7: backpack_metal(ロボアームとバックパックをつなぐ円柱パーツ)
  * Material8: green_emit(ロボアームとバックパックをつなぐ円柱パーツの発光部分)
  * Material9: backpack_nm(バックパック下部水色のパーツ)
  * Material10: backpack_plastic(バックパックの白いパーツ)
  * Material11: anim_logo(胸の模様)

## `VRM10/MToon10` newhair(頭髪)

`Opaque`

| property        | color    | texture  |  |
|-----------------|----------|----------|--|
| LitColor, Alpha | 0xFFFFFF | hair.png |  |
| Shader          | 0x959595 | hair.png |  |

## `VRM10/MToon10` huku_bake(髪留め)(衣服)

`Opaque`

| property        | color    | texture            |  |
|-----------------|----------|--------------------|--|
| LitColor, Alpha | 0xFFFFFF | wear.png           |  |
| Shader          | 0x7D7D7D | wear.png           |  |
| Normal Map      |          | nm_wear_normal.png |  |
| OutlineMode     | World    |                    |  |
| OutlineWidth    | 0.001    |                    |  |
| OutlineColor    | 0x6C7A82 |                    |  |

## `VRM10/MToon10` body_bake(頭部、顔)(肌)

`Opaque`

| property        | color    | texture              |  |
|-----------------|----------|----------------------|--|
| LitColor, Alpha | 0xFFFFFF | body_bake.png        |  |
| Shader          | 0x7D7D7D | body_bake.png        |  |
| OutlineMode     | World    | outlinemask_body.png |  |
| OutlineWidth    | 0.001    |                      |  |
| OutlineColor    | 0x87766E |                      |  |

## `VRM10/MToon10` body_nm(衣服)

`Opaque`

| property        | color    | texture             |  |
|-----------------|----------|---------------------|--|
| LitColor, Alpha | 0xFFFFFF | robo_arm.png        |  |
| Shader          | 0xB0A9BC | robo_arm.png        |  |
| NormalMap       |          | nm_body_normals.png |  |
| OutlineMode     | World    |                     |  |
| OutlineWidth    | 0.002    |                     |  |
| OutlineColor    | 0x25242C |                     |  |

## `VRM10/MToon10` eye(瞳)

`Opaque`

| property        | color    | texture       |  |
|-----------------|----------|---------------|--|
| LitColor, Alpha | 0xFFFFFF | faceparts.png |  |
| Shader          | 0xB0A9BC | faceparts.png |  |

## `VRM10/MToon10` eye_trans(?)

`Opaque`

| property        | color    | texture       |  |
|-----------------|----------|---------------|--|
| LitColor, Alpha | 0xFFFFFF | faceparts.png |  |
| Shader          | 0xFFFFFF |               |  |

## `VRM10/MToon10` arm_mat(ロボーアームの白パーツで覆われていない部分)

`Opaque`

| property           | color    | texture      |  |
|--------------------|----------|--------------|--|
| LitColor, Alpha    | 0xFFFFFF | robo_arm.png |  |
| Shader             | 0xB0A9BC | robo_arm.png |  |
| ParametricRimColor | 0x4F4F4F |              |  |
| OutlineMode        | World    |              |  |

## `VRM10/MToon10` arm_plastic(ロボアームの白いパーツ)

`Opaque`

| property           | color    | texture              |  |
|--------------------|----------|----------------------|--|
| LitColor, Alpha    | 0xFFFFFF | robo_arm.png         |  |
| Shader             | 0x9EA4B0 | robo_arm.png         |  |
| Matcap Rim         |          | mat_oneside_spec.png |  |
| ParametricRimColor | 0x9F9F9F |                      |  |
| OutlineMode        | World    |                      |  |
| OutlineWidth       | 0.002    |                      |  |
| OutlineColor       | 0x4F4F4F |                      |  |

## `Standard` green_emit(ロボアームの緑の発光部分)

`Opaque`

| property | color                   | texture      |  |
|----------|-------------------------|--------------|--|
| Albedo   | 0xFFFFFF                | backpack.png |  |
| Emission | 34,191,36:intensity=1.8 |              |  |

## `Standard` wear_metal(グローブの電極)

`Opaque`

| property | color    | texture  |  |
|----------|----------|----------|--|
| Albedo   | 0xFFFFFF | wear.png |  |

## `VRM10/MToon10` armgear_plastic(グローブの白いパーツ)

`Opaque`

| property           | color    | texture              |  |
|--------------------|----------|----------------------|--|
| LitColor, Alpha    | 0xFFFFFF | wear.png             |  |
| Shader             | 0xB0A9BC | wear.png             |  |
| MatcapRim          |          | mat_oneside_spec.png |  |
| ParametricRimColor | 0xB0B0B0 |                      |  |
| OutlineMode        | World    |                      |  |
| OutlineWidth       | 0.001    |                      |  |
| OutlineColor       | 0x000000 |                      |  |

## `VRM10/MToon10` robo_face(グローブの顔モニター)

`Opaque`



## glass(グローブの顔モニター)
## backpack_metal(ロボアームとバックパックをつなぐ円柱パーツ)
## green_emit(ロボアームとバックパックをつなぐ円柱パーツの発光部分)
## backpack_nm(バックパック下部水色のパーツ)
## backpack_plastic(バックパックの白いパーツ)
## anim_logo(胸の模様)
