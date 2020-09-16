---
title: "UniVRM Coordinate Transformations"
linkTitle: "Coordinate transformations"
date: 2018-04-16T16:30:00+09:00
aliases: ["/en/dev/univrm-0.xx/programming/univrm_coordinate/"]
weight: 4
tags: ["detail"]
---

UniVRM automatically performs the coordinate transformation with GLTF during import / export.

## VRM coordinate system

Since VRM is an extension of GLTF, it conforms to the coordinate system of GLTF.
It is right-handed Y-UP (OpenGL standard) coordinate system.

* Right: X+
* Up: Y+
* In front: Z-

## Unity coordinate system

Left-handed Y-UP coordinate system。

* Right:X+
* Up:Y+
* In front:Z+ (+- is inverted)

## Transformation matrix

Z-axis is inverted.

### Vector3 (Position, Normal, etc.)

{{< highlight cs >}}
public static Vector3 ReverseZ(this Vector3 v)
{
    return new Vector3(v.x, v.y, -v.z);
}
{{< / highlight >}}

### Quaternion (Rotation)

{{< highlight cs >}}
public static Quaternion ReverseZ(this Quaternion q)
{
    float angle;
    Vector3 axis;
    q.ToAngleAxis(out angle, out axis);
    return Quaternion.AngleAxis(-angle, ReverseZ(axis));
}
{{< / highlight >}}

### Matrix (BindMatrices)
Not working well if a scale value is contained.

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
