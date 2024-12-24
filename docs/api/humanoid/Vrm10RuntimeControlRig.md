# Vrm10RuntimeControlRig

初期姿勢の変換をサポートする `ControlRig` が含まれています。
ランタイムロードでは自動的にセットアップされます。

:::info vrm-0.x 互換のデータを使用している場合は問題が顕在化しない場合があります

- Model のスケルトン
- Animation のスケルトン

が vrm 互換の正規化された T-Pose の場合は変換せずに動きます。
:::

:::tip Unity の mecanim humanoid に肩代りしてもらうこともできます

モーション元と先の両方に`humanoid avatar` がセットアップされている場合
:::

:::info VRM-1.0 は正規化が仕様から除かれました。

正規化とは、ヒエラルキーからの 回転、スケールの除去。
その状態での Binding 行列再生成。
です。

すべてのノードの回転が 0 のときが初期姿勢(T-Pose)であるという仕様で、
プログラムから統一的にモデルを操作することが可能でした。
:::

## ControlRig は ランタイムロード時に生成されます

デフォルトで ControlRig を生成 `ControlRigGenerationOption.Generate` します。
`ControlRigGenerationOption.None` は ControlRig を生成しません。

```csharp
public static async Task<Vrm10Instance> Vrm10.LoadPathAsync(
    string path,
    bool canLoadVrm0X = true,
    ControlRigGenerationOption controlRigGenerationOption = ControlRigGenerationOption.Generate, // 👈
    bool showMeshes = true,
    IAwaitCaller awaitCaller = null,
    IMaterialDescriptorGenerator materialGenerator = null,
    VrmMetaInformationCallback vrmMetaInformationCallback = null,
    CancellationToken ct = default)
```

:::warning ランタイムロード専用

`v0.103` 現在この機能は Editor で Asset 生成されたモデルでは動作しません。
VRM モデルをセットアップするときに邪魔になってしまうので、Editor では生成しないようにしています。
:::

:::info HumanoidAvatar の材料に ControlRig のボーンを使う

ControlRigGenerationOption.Generate の時は、AvatarBuilder.BuildHumanAvatar の引き数にオリジナルのヒエラルキーでは無く、 ControlRig のボーンを渡します。
:::

:::info getBoneTransform
`ControlRigGenerationOption.Generate` でロードしたモデルは、 `Animator.getBoneTransform` が
ControlRig の該当ボーンを返します。

ControlRig でないオリジナルのボーンを取得するには

`Vrm10Instance.Humanoid.GetBoneTransform` を使ってください。
:::

## ControlRig によるポーズ適用例

正規化済みの bvh ヒエラルキーの `Animator src` のポーズを、
未正規化かもしれない `vrm-1.0` モデルにコピーする例です。

各ボーンの localRotation を代入するだけで動きます。

```csharp
// VRM10_Samples/VRM10Viewer(v0.104) からの抜粋
/// <summary>
/// from v0.104
/// </summary>
/// <param name="src"></param>
public void UpdateControlRigImplicit(Animator src)
{
    var dst = m_controller.GetComponent<Animator>();

    foreach (HumanBodyBones bone in CachedEnum.GetValues<HumanBodyBones>())
    {
        if (bone == HumanBodyBones.LastBone)
        {
            continue;
        }

        // v0.104 から Animator.GetBoneTransform が
        // ControlRig のボーンを返します。
        var boneTransform = dst.GetBoneTransform(bone);
        if (boneTransform == null)
        {
            continue;
        }

        var bvhBone = src.GetBoneTransform(bone);
        if (bvhBone != null)
        {
            // set normalized pose
            boneTransform.localRotation = bvhBone.localRotation;
        }

        if (bone == HumanBodyBones.Hips)
        {
            // TODO: hips position scaling ?
            boneTransform.localPosition = bvhBone.localPosition;
        }
    }
}
```

