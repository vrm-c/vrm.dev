# import の最適化について

## GltfData

:::tip UniGLTF.GltfData の生成はスレッドセーフです
Unity にアクセスしません。
Parse を別スレッドで実行可能です。

```cs
// 使用例
var task = Task.Run(()=>{
  // スレッド OK
  return new GlbBinaryParser(bytes, path).Parse();
});

using(var data = await task){

}
```

:::

## IAwaitCaller

Task を小出しにすることでフレームレートの低下に対策できます。

[0_87_runtime_import](/api/0_87_runtime_import)

### ImmediateCaller

小出しにせずに普通に処理します。
UnityEditor や UnitTest など Unity の frame が回っていない環境でも
動くように作られています。

### RuntimeOnlyAwaitCaller

Unity の `yield return` と似た感じです。
後続の処理を次のフレームに先送りします。

:::tip フレーム当りの処理量は減るがトータルで必要な時間は長くなります
:::
