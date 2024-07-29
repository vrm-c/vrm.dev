# Root Node の仕様

glTF はシーン上に複数の root node (親の無いnode) を記述できます。
一方 UniGLTF で `import` された asset は、単一の root GameObject になります。
UniGLTF でこのギャップをどのように処理しているのかついて説明します。

## import

UniGLTF は `import` 時に root になる empty を作成します。
glTF の root node(複数存在しうる) をこの empty の子Objectにします。

## export

`export` の root GameObject を glTF のシーンであるとみなします。
root GameObject の子オブジェクトを glTF の root Node としてエクスポートします。

:::danger
- `export root` は glTFNode としては消滅します
:::

:::danger
- `export root` は 移動回転拡縮は記録できません
:::

:::danger
- `export root` は glTFNode の index が無いので参照できません
- SpringBone の `Center` に `export root` を指定できません(indexが無い)
- `export root` は Animation できません(indexが無い)
  - AnimationBehaviour は `export` 対象外です
:::
