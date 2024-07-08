# AvatarBuilder duplicate human bone 'Hips'

:::note
SkinnedMeshRenderers.bones に null を含むモデルを export すると
不正な bone 参照が含まれる。 
Export されたモデルを Import して HumanoidAvatar を作成することに失敗する。
:::

`UniVRM-0.124.1` を使ってください。

:::tip
https://github.com/vrm-c/UniVRM/issues/2326

`v0.124.1` で null の場合に例外が発生しないように無視するようにしました。
:::

:::warning
SkinnedMeshRenderers.bones に null が含まれているのはデータ異常扱いでした。
:::

:::warning
null であるボーンを参照していた頂点は動かなくなります。

- null を参照している頂点がそもそも存在しない
- null を参照している頂点が見える三角形を構成していない

場合は問題ないと思われます。
:::
