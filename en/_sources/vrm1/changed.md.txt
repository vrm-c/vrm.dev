---
weight: 1
date: 2021-08-05
---

# VRM-1.0の変更点

## VRM-0.X からの変更点

- glTF: z- forward => z+ forward
- glTF: shared bufferView => divided bufferView
- VRM0: meta => `VRMC_vrm` meta
- VRM0: humanoid => `VRMC_vrm` humanoid
- VRM0: blendshape => `VRMC_vrm` expression
- VRM0: lookat => `VRMC_vrm` lookat
- VRM0: firstperson => `VRMC_vrm` firstperson
- VRM0: springBone => `VRMC_springBone`
- `新規` => `VRMC_materials_hdr_emissiveMultiplier`
- VRM0: mtoon => `VRMC_materials_mtoon`
- `新規` => `VRMC_node_constraint`

## glTF: z+ forward

モデルは Z+ 方向が前方になるように格納します。

|         | VRM0 | VRM1 |
|---------|------|------|
| forward | z-   | z+   |
| right   | x+   | x-   |

```{admonition} 実装
:class: warning



Y軸 180 度の回転になります。

```csharp
Vector3 vrm0;
var vrm1 = new Vector3(-vrm0.x, vrm0.y, -vrm0.z);
```

`TODO`

## glTF: divided vertex buffer

bufferView の primitive 間での共有をやめます。

|            | VRM0                                                                                                            | VRM1                                                                                             |
|------------|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| bufferView | shared                                                                                                          | divided                                                                                          |
| 利点       | GameEngine メモリレイアウトに近いので変換が少ない                                                               | 一般的な glTF ローダーでロードできる                                                             |
| 欠点       | UniVRM 以外の glTF ローダーでメモリ使用量が爆発する可能性(ロードできるが頂点バッファに未使用領域ができてしまう) | export 時に頂点の増加・並び順の変化がありえる。import 時に連結する手間。morphTarget の扱いが煩雑 |

```{admonition} 実装
:class: warning



`Vrm` 専用の共有頂点ローダーをやめて、
一般的な `glTF` ローダーで問題ありません。


```


## VRMC_vrm: meta

`TODO`

## VRMC_vrm: humanoid

必須ボーンの見直し。

|                     | VRM0 | VRM1 |
|---------------------|------|------|
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

以下の項目が廃止になります(`VRMHumanoidDescription` に記録されていた)。

* armStretch
* legStretch 
* upperArmTwist
* lowerArmTwist
* upperLegTwist
* lowerLegTwist
* feetSpacing
* hasTranslationDoF

## VRMC_vrm: expression

BlendShapeは、Expression に名称を変更します。

```{admonition} BlendShape
:class: warning



BlendShapeは Unity の MorphTarget 機能のことで、区別が付きにくかったためです。


```


preset の見直し

|      | VRM0                                                                  | VRM1       |
|------|-----------------------------------------------------------------------|------------|
| 喜   | joy(joyとfunが曖昧)                                                   | happy      |
| 怒   | angry                                                                 | angry      |
| 哀   | sorrow(文語)                                                          | sad        |
| 楽   | fun(joyとfunが曖昧)                                                   | relaxed    |
| 驚   | (新規追加)                                                            | surprised  |
| あ   | a(非日本語で自然なように変更)                                         | aa         |
| い   | i(非日本語で自然なように変更)                                         | ih         |
| う   | u(非日本語で自然なように変更)                                         | ou         |
| え   | e(非日本語で自然なように変更)                                         | ee         |
| お   | o(非日本語で自然なように変更)                                         | oh         |

- overrideMouse, overrideLipSync, overrideBlink 設定の追加
- VRM0 の materialBind から MaterialColorBind と TextureTransformBind に整理

## VRMC_vrm: lookat

* `degreemap.curve` が廃止になります

## VRMC_vrm: firstperson

* `firstPersonBone` は廃止になり、`Head` 固定になります
* `firstPersonBoneOffset` は、`lookAt.offsetFromHeadBone` になります

## VRMC_springBone

|          | VRM0                    | VRM1                |
|----------|-------------------------|---------------------|
| 設定単位 | 房                      | 節                  |
| 子       | children[0]             | children のいずれか |
| 末端     | 7cm の遠さに 自動で追加 | 追加しない          |

- 拡張を分離 => 独立した `VRMC_springBone` 拡張
- Collider 形状に Capsule を追加
- Unity座標系の混在を修正

## VRMC_materials_hdr_emissiveMultiplier

エミッションによる発光表現です。

glTF では emissiveFactor(float3) の値域が [0.0, 1.0] です。
これに係数を追加することで、1.0 を越える値を表せるようにします。

|                         | VRM0                                | VRM1                                                    |
|-------------------------|-------------------------------------|---------------------------------------------------------|
| mtoon の emissiveFactor | 独自に格納していた(0, 1 制限が無い) | gltf material の emissiveFactor に格納(0, 1 制限がある) |

gltf-2.0 の標準マテリアル(PBR), VRMC_materials_mtoon から利用します。

## VRMC_materials_mtoon

- 拡張を分離 => 独立した `VRMC_materials_mtoon` 拡張

`TODO`

## VRMC_node_constraint

`開発中`

### translation

### rotation

### aim
