# Root Node specifications

glTF can write multiple root nodes (nodes without parents) on the scene.
On the other hand, an asset that is `import` in UniGLTF becomes a single root GameObject.
We will explain how UniGLTF handles this gap.

## import

UniGLTF creates an empty root when `import`.
Make glTF's root node (there may be more than one) a child object of this empty.

## export

Consider the root GameObject of `export` to be a glTF scene.
Export the child objects of root GameObject as glTF root Node.

:::danger
- `export root` disappears as glTFNode
:::

:::danger
- `export root` cannot record translation, rotation, scaling.
:::

:::danger
- `export root` cannot be referenced because there is no glTFNode index
- Cannot specify `export root` for SpringBone's `Center` (no index)
- `export root` cannot be animated (no index)
  - AnimationBehaviour is not eligible for `export`
:::
