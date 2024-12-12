## UniGLTF.RuntimeGltfInstance

`Assets/UniGLTF/Runtime/UniGLTF/RuntimeGltfInstance.cs`

`gltf` (vrm-0.x, vrm-1.0も含む) ヒエラルキーの root にアタッチされます。
glTF 層の情報を保持します。
Dispose すると関連リソース(Mesh, Texture ...etc)をリリースします。

:::info

Editor Import にはアタッチされません。

UniGLTF.RuntimeGltfInstance の有無で
runtime-import と editor-import を区別できます。

:::

### Nodes: Transforms with gltf node index.

```cs
public IReadOnlyList<Transform> Nodes;
```

### InitialTransformStates: Transform states on load

vrm の T-Pose として利用できます。
SpringBoneの再初期化などに利用します。

```cs
public IReadOnlyDictionary<Transform, TransformState> InitialTransformStates;
```

### Materials: Materials with gltf node index.

```cs
public IReadOnlyList<Material> Materials;
```

### ShowMeshes()

```cs
public void ShowMeshes();
```

ヒエラルキー内の Renderer(UnityEngine.SkinnedMeshRenderer と UnityEngine.MeshRenderer)
をまとめて `enabled=true` にする関数です。

:::info
Import オプションで enabled 状態を制御できます。
:::

### EnableUpdateWhenOffscreen()

```cs
public void EnableUpdateWhenOffscreen();
```

ヒエラルキー内の SkinnedMeshRenderer の `updateWhenOffscreen = true` をまとめてセットします。

### リソースの破棄

GameObject.Destory で自動的に破棄されます。

```cs
        void OnDestroy()
        {
            foreach (var (_, obj) in _resources)
            {
                UnityObjectDestroyer.DestroyRuntimeOrEditor(obj);
            }
        }
```
