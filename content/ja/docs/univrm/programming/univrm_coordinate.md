---
title: "UniVRMの座標系変換について"
linkTitle: "座標系の変換について"
date: 2018-04-16T16:30:00+09:00
aliases: ["/dev/univrm-0.xx/programming/univrm_coordinate/"]
weight: 4
---

UniVRMは、インポート・エクスポート時に自動でGLTFとの座標変換を実行しています。

## VRMの座標系

VRMはGLTFの拡張なので、GLTFの座標系に準拠します。
OpenGL標準の右手系Y-UP座標系です。

* 右:X+
* 上:Y+
* 前:Z-

## Unityの座標系

左手系Y-UP座標系です。

* 右:X+
* 上:Y+
* 前:Z+(+-が反転)

## 各値の変換

Z軸を反転します。

### Vector3(Position, Normalなど)

{{< highlight cs >}}
public static Vector3 ReverseZ(this Vector3 v)
{
    return new Vector3(v.x, v.y, -v.z);
}
{{< / highlight >}}

### Quaternion(Rotation)

{{< highlight cs >}}
public static Quaternion ReverseZ(this Quaternion q)
{
    float angle;
    Vector3 axis;
    q.ToAngleAxis(out angle, out axis);
    return Quaternion.AngleAxis(-angle, ReverseZ(axis));
}
{{< / highlight >}}

### Matrix(BindMatrices)

スケール値が入っているとうまくいきません

{{< highlight cs >}}
public static Matrix4x4 ReverseZ(this Matrix4x4 m)
{
#if UNITY_2017_1_OR_NEWER
    m.SetTRS(m.GetColumn(3).ReverseZ(), m.rotation.ReverseZ(), Vector3.one);
#else
    m.SetTRS(m.ExtractPosition().ReverseZ(), m.ExtractRotation().ReverseZ(), Vector3.one);
#endif
    return m;
}
{{< / highlight >}}
