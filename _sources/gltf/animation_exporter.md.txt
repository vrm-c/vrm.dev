---
tags: ["unity", "gltf"]
weight: 3
aliases: ["/dev/univrm-0.xx/gltf/animation_exporter/"]
---

# アニメーション

> VRM は、Animation を使わないという仕様です

## 対応バージョン
* v0.44

## 対応状況
| KeyName        |   |
|:---------------|:-:|
| TranslationKey | ○ |
| RotationKey    | ○ |
| ScaleKey       | ○ |
| BlendShapeKey  | × |

***

## Animatorをエクスポートする場合
1. ルートGameObjectにAnimatorコンポーネントを追加
2. AnimatorControllerを作成し、それをAnimatorのController項目に設定
3. UnityEditorのツールバーからWindow>AnimationでAnimationウインドウを開く
4. ルートGameObjectが選択状態であることを確認してAnimationウインドウ中央に表示されているCreateボタンを押してAnimationClipを作る
5. このクリップに対してアニメーションキーを追加
6. UniGLTF>Exportからglbを出力する

## Animationをエクスポートする場合
1. ルートGameObjectにAnimationコンポーネントを追加
2. UnityEditorのツールバーからWindow>AnimationでAnimationウインドウを開く
3. ルートGameObjectが選択状態であることを確認してAnimationウインドウ中央に表示されているCreateボタンを押してAnimationClipを作る
4. Inspectorの設定をDebugモードにしてAnimationClipのLegacyフラグをONにする 
```{figure} /_static/images/wiki/LegacyClip.png
Interpolation
```

5. AnimationコンポーネントのAnimation項目に作成したAnimationClipを設定
6. クリップに対してアニメーションキーを追加
7. UniGLTF>Exportからglbを出力する

## 注意事項
1. RotationKeyのInterpolation設定をQuaternionかまたはEulerAngles(Quaternion)にすること  
```{figure} /_static/images/wiki/Interpolation.png
Interpolation
```

2. Animatorの場合は設定されている全てのClipを検索して書き出しをしているが、ステートの状態などは出力されない
3. Animator経由だと複数のアニメーションが書き込まれるが、UniGLTFのImporterが読み込むのは最初の１つだけ(UniGLTF-1.25時点）
