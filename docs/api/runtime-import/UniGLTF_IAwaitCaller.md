# UniGLTF.IAwaitCaller

Import 時のスパイク対策に
Task を小出しに処理します。

フレームレートの低下に対策できます。

:::warning VRMShadersからUniGLTFに移動しました

`v0.125.0`

namespace も変わりました。

https://github.com/vrm-c/UniVRM/pull/2377

:::

## ImmediateCaller

即時に処理します。

UnityEditor や UnitTest など Unity の frame が回っていない環境でも
動くように作られています。

```cs
var task = Vrm10.LoadPathAsync(vrm_path, new ImmediateCaller());
var vrm = task.Value;
```

:::tip このクラスがデフォルトです。
:::

## RuntimeOnlyAwaitCaller

Unity の `yield return` と似た感じです。
後続の処理を次のフレームに先送りします。

:::tip このクラスが推奨です。

デフォルトではないので、明示的に指定してください。
このクラスを使うことでフレーム落ちを回避できます。

:::

:::tip スパイクは減るがトータルで必要な時間は長くなります
:::
