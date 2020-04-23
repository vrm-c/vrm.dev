---
title: API
date: 2020-04-21T17:12:49+09:00
url: "/dev/univrm-1.xx/api/"
---

https://github.com/vrm-c/UniVRM_1_0/blob/master/Assets/UniVRM-1.0/PlayModeTests/ApiSampleTests.cs

にあります。

```cs
using System;
using System.IO;
using UnityEngine;
```

## VRM to Model

```cs
        VrmLib.Model ReadModel(string path)
        {
            var bytes = File.ReadAllBytes(path);

            if (!VrmLib.Glb.TryParse(bytes, out VrmLib.Glb glb, out Exception ex))
            {
                Debug.LogError($"fail to Glb.TryParse: {path} => {ex}");
                return null;
            }

            // both VRM-0.X and VRM-1.0
            var model = UniVRM10.VrmLoader.CreateVrmModel(path); 
            return model;
        }
```

### This is possible on a thread

```cs
return Task.Run(()=>{
    return ReadModel(path);
});
```

## Model to GameObject

This requires a ScriptThread.

```cs
        ModelAsset BuildGameObject(VrmLib.Model model, bool showMesh)
        {
            var importer = new UniVRM10.RuntimeUnityBuilder();
            var assets = importer.ToUnityAsset(model, showMesh);
            UniVRM10.ComponentBuilder.Build10(model, importer, assets);
            return assets;
        }
```

### ロード後にレンダラーを設定する

ModelAsset に各種アセットが格納されています。

```cs
            var asset = BuildGameObject(srcModel, false);

            // renderer setting
            foreach (var render in asset.Renderers)
            {
                // show when RuntimeUnityBuilder.ToUnity(showMesh = false)
                render.enabled = true;
                // avoid culling
                if (render is SkinnedMeshRenderer skinned)
                {
                    skinned.updateWhenOffscreen = true;
                }
            }
```

### フレームレートが落ちないようにする(TODO)

１フレームの処理を小さく小出しにして、スパイクを少なくする場合。

## GameObject to Model

```cs
        VrmLib.Model ToModel(UnityEngine.GameObject target)
        {
            var exporter = new UniVRM10.RuntimeVrmConverter();
            var model = exporter.ToModelFrom10(target);
            return model;
        }
```

## Model to VRM

```cs
        byte[] ToVrm10(VrmLib.Model model)
        {
            // 右手系に変換
            VrmLib.ModelExtensionsForCoordinates.ConvertCoordinate(model, VrmLib.Coordinates.Gltf);
            var bytes = Vrm10.ModelExtensions.ToGlb(model);
            return bytes;
        }
```
