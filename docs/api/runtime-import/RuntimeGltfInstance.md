# RuntimeGltfInstane

ヒエラルキーの root にアタッチされます。
リソースの破棄について。

## ShowMeshes

```cs
        public void ShowMeshes()
        {
            foreach (var r in VisibleRenderers)
            {
                r.enabled = true;
            }
        }
```

## EnableUpdateWhenOffscreen

```cs
        public void EnableUpdateWhenOffscreen()
        {
            foreach (var skinnedMeshRenderer in SkinnedMeshRenderers)
            {
                skinnedMeshRenderer.updateWhenOffscreen = true;
            }
        }
```

## Dispose

関連するリソースを破棄します。

```cs
        public void Dispose()
        {
            if (this != null && this.gameObject != null)
            {
                UnityObjectDestroyer.DestroyRuntimeOrEditor(this.gameObject);
            }
        }
```

:::tip GameObject.Destory でも破棄できます

```cs
        void OnDestroy()
        {
            foreach (var (_, obj) in _resources)
            {
                UnityObjectDestroyer.DestroyRuntimeOrEditor(obj);
            }
        }
```

:::
