# VRM.VRMSpringBone

## インタフェース抜粋

```cs
public sealed class VRMSpringBone : MonoBehaviour
{
    [SerializeField] public string m_comment;
    [SerializeField] private Color m_gizmoColor = Color.yellow;
    [SerializeField] public float m_stiffnessForce = 1.0f;
    [SerializeField] public float m_gravityPower;
    [SerializeField] public Vector3 m_gravityDir = new Vector3(0, -1.0f, 0);
    [SerializeField][Range(0, 1)] public float m_dragForce = 0.4f;
    [SerializeField] public Transform m_center;
    [SerializeField] public List<Transform> RootBones = new List<Transform>();
    [SerializeField] public float m_hitRadius = 0.02f;
    [SerializeField] public VRMSpringBoneColliderGroup[] ColliderGroups;

    /// <summary>
    /// - アプリケーション開発者用のパラメタである
    /// - Runtime 制御用のパラメタである
    /// - シリアライズ対象でない
    /// - true にすることで、モデルをスケーリングしたときも SpringBone の見た目上の動き(角速度)がなるべく保たれるようになる
    /// - Non-Uniform scaling 下における動作は保証しない        
    /// </summary>
    public bool UseRuntimeScalingSupport { get; set; }

    /// <summary>
    /// VRM-1.0 からのバックポート。
    /// - Runtime 制御用のパラメタである
    /// - シリアライズ対象でない
    /// - World座標系
    /// </summary>
    public Vector3 ExternalForce { get; set; }

    public enum SpringBoneUpdateType
    {
        LateUpdate,
        FixedUpdate,
        Manual,
    }
    [SerializeField] public SpringBoneUpdateType m_updateType = SpringBoneUpdateType.LateUpdate;

    [ContextMenu("Reset bones")]
    public void Setup(bool force = false)
    {
        if (RootBones != null)
        {
            m_system.Setup(Scene, force);
        }
    }

    public void ReinitializeRotation()
    {
        m_system.ReinitializeRotation(Scene);
    }

    public void SetModelLevel(UniGLTF.SpringBoneJobs.Blittables.BlittableModelLevel modelSettings)
    {
        UseRuntimeScalingSupport = modelSettings.SupportsScalingAtRuntime;
        ExternalForce = modelSettings.ExternalForce;
    }

    public void ManualUpdate(float deltaTime)
    {
        if (m_updateType != SpringBoneUpdateType.Manual)
        {
            throw new System.ArgumentException("require SpringBoneUpdateType.Manual");
        }
        m_system.UpdateProcess(deltaTime, Scene, Settings);
    }
}
```

## Update の手動呼び出し

from [v0.106.0](/release/100/v0.106.0)

[\#1866](https://github.com/vrm-c/UniVRM/pull/1886)

- VRMSpringBone.SpringBoneUpdateType.Manual を追加
- VRMSpringBone.ManualUpdate を追加

- spring.ManualUpdate を使う前に spring.m_updateType を `Manual` に設定します。

以下のように呼び出すことができます。

```csharp
VRMSpringBone spring;

// setup
spring.m_updateType = VRMSpringBone.SpringBoneUpdateType.Manual;

// each frame
spring.ManualUpdate(time.deltaTime);
```

## 拡大縮小の対応状況

:::warning スケーリングは uniform(xyz が同じ) のみの対応です
:::

- `0.x` [SpringBone does not work correctly if you change the model size, for example scale (8,8,8). · Issue #2242 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2242)
- `0.x` [Scale が VRM Spring Bone に正しく適用されません · Issue #922 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/922)
- [SpringBone does not work correctly if you change the model size, for example scale (8,8,8). · Issue #2242 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2242)
