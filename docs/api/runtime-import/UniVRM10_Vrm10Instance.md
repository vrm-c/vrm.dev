# UniVRM10.Vrm10Instance

vrm-1.0 のヒエラルキーのルートにアタッチされる MonoBehaviour です。

## ランタイム情報

### Vrm10Instance.Runtime

プレイ中のVrmを操作します。

```cs
public Vrm10Runtime Runtime;
```

[Vrm10Runtime](/api/runtime-import/UniVRM10_Vrm10Runtime)

## シーン情報

### Vrm10Instance.Vrm

```cs
public VRM10Object Vrm;
```

```cs
// 抜粋
public class VRM10Object
{
    public VRM10ObjectMeta Meta;
    public VRM10ObjectExpression Expression;
    public VRM10ObjectLookAt LookAt;
    public VRM10ObjectFirstPerson FirstPerson;
}
```

### Vrm10Instance.SpringBone

```cs
public Vrm10InstanceSpringBone SpringBone;
```

```cs
// 抜粋
public class Vrm10InstanceSpringBone
{
  public List<VRM10SpringBoneColliderGroup> ColliderGroups;
  public List<Spring> Springs;
}
```
