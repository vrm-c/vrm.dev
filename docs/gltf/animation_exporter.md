---
tags: ["unity", "gltf"]
weight: 3
aliases: ["/dev/univrm-0.xx/gltf/animation_exporter/"]
---

# アニメーション

- <https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#animations>

`v0.44` から部分的に対応しています。

```{admonition} VRM のアニメーション
:class: warning
VRM は、Animation を使わないという仕様です。
```

```{admonition} Export は Runtime では動作しません
:class: warning
Runtime では AnimationClip の情報を取得できないため、Export は動作しません。
```

## 対応状況

| channel.path         | type       | import | export |
|:---------------------|------------|:------:|:------:|
| translation          | vec3       |   ○    |   ○    |
| rotation             | quaternion |   ○    |   ○    |
| scale                | vec3       |   ○    |   ○    |
| weights(morphTarget) | float[]    |   ○    |   ○    |

| interpolation | import | export |
|---------------|--------|--------|
| LINEAR        | ○      | ○      |
| STEP          | ○      | ○      |
| CUBICSPLINE   | ○      | LINEAR |

## Export
### Animatorをエクスポートする場合
1. ルートGameObjectにAnimatorコンポーネントを追加
2. AnimatorControllerを作成し、それをAnimatorのController項目に設定
3. UnityEditorのツールバーからWindow>AnimationでAnimationウインドウを開く
4. ルートGameObjectが選択状態であることを確認してAnimationウインドウ中央に表示されているCreateボタンを押してAnimationClipを作る
5. このクリップに対してアニメーションキーを追加
6. UniGLTF>Exportからglbを出力する

### Animationをエクスポートする場合
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


### 注意事項
1. RotationKeyのInterpolation設定をQuaternionかまたはEulerAngles(Quaternion)にすること  
```{figure} /_static/images/wiki/Interpolation.png
Interpolation
```

2. Animatorの場合は設定されている全てのClipを検索して書き出しをしているが、ステートの状態などは出力されない
3. Animator経由だと複数のアニメーションが書き込まれるが、UniGLTFのImporterが読み込むのは最初の１つだけ(UniGLTF-1.25時点）

### export properties

`Assets/UniGLTF/Editor/Animation/AnimationExporter.cs`

| property            |                                                      |
|---------------------|------------------------------------------------------|
| m_LocalPosition     | vec3                                                 |
| localEulerAnglesRaw | 未実装                                               |
| m_LocalRotation     | quaternion                                           |
| m_LocalScale        | vec3                                                 |
| blendShape          | float[] すべての blendShape の状態をまとめて記録する |

### interpolation

`Assets/UniGLTF/Editor/Animation/AnimationExporter.cs`

| unity                                 | export                                    |
|---------------------------------------|-------------------------------------------|
| AnimationUtility.TangentMode.Linear   | glTFAnimationTarget.Interpolations.LINEAR |
| AnimationUtility.TangentMode.Constant | glTFAnimationTarget.Interpolations.STEP   |
| その他                                | glTFAnimationTarget.Interpolations.LINEAR |

## glTF: CUBICSPLINE == AnimationUtility.TangentMode.Free

- <https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#interpolation-cubic>
