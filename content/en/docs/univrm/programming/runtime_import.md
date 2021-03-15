---
title: Runtime Importer
aliases: ["/en/dev/univrm-0.xx/programming/runtime_import/", 
          "/en/docs/univrm/programming/univrm_import_runtime/"]
weight: 2
tags: ["api"]
---

WIP

## `Version 0.68~`

ImporterContext has been reworked.

### sync

```cs
void Load(string path)
{
    // GltfParser has been separated from ImporterContext
    var parser = new GltfParser();
    parser.ParsePath(path);

    // Initialize a new VRMImporterContext object and pass `parser` as an argument to it
    using(var context = new VRMImporterContext(parser))
    {
        context.Load();
    } // Unity resources held by context are destroyed
}
```

As shown above, once the gltf hierarchy is loaded, it will be destroyed immediately.
To destroy resources such as textures, materials, meshes, etc., use `ImporterContext.DisposeOnGameObjectDestroyed` function.

```cs
GameObject Load(string path)
{
    // GltfParser has been separated from ImporterContext
    var parser = new GltfParser();
    parser.ParsePath(path);

    // Initialize a new VRMImporterContext object and pass `parser` as an argument to it
    using(var context = new VRMImporterContext(parser))
    {
        context.Load();

        // By calling this function, context.Root (all related resources such as Texture, Material, Mesh, etc.) can be destroyed
        var destroyer = context.DisposeOnGameObjectDestroyed();
        // Enable UpdateWhenOffscreen
        context.EnableUpdateWhenOffscreen();
        // Display the model
        context.ShowMeshes();

        return destroyer.gameObject;
    } // Unity resources held by context are destroyed
    // Resources held by context by DisposeOnGameObjectDestroyed have been moved to destroyer
}
```

When `DisposeOnGameObjectDestroyed` is used, by calling the `Object.Destroy` function,
objects related to `Mesh, Material, Texture...` will be destroyed via `OnDestroy`:

```cs
UnityEngine.Object.Destroy(destroyer.gameObject);
```

### async

```cs
async Task<GameObject> LoadVrmAsync(string path)
{
    // GltfParser has been separated from ImporterContext
    var parser = new GltfParser();
    await Task.Run(() => {
        var file = File.ReadAllBytes(path);
        // Executable without Unity's ScriptThread
        parser.ParseGlb(file);
    }

    // Initialize a new VRMImporterContext object and pass `parser` as an argument to it 
    using(var context = new VRMImporterContext(parser))
    {
        await context.LoadAsync(); // take several frames per second
        
        // By calling this function, context.Root (all related resources such as Texture, Material, Mesh, etc.) can be destroyed
        var destroyer = context.DisposeOnGameObjectDestroyed();
        // Enable UpdateWhenOffscreen
        context.EnableUpdateWhenOffscreen();
        // Display the model
        context.ShowMeshes();

        return destroyer.gameObject;
    } // Unity resources held by context are destroyed
    // Resources held by context by DisposeOnGameObjectDestroyed have been moved to destroyer
}
```

## `Version 0.44~` LoadAsync Example 

```csharp
// Get the byte array
var bytes = File.ReadAllBytes(path);

var context = new VRMImporterContext();
context.ParseGlb(bytes);

// When meta is needed
bool createThumbnail=true;
var meta = context.ReadMeta(createThumbnail);
var thumbnail = meta.Thumbnail;

// Construct a model
context.LoadAsync(_ =>
{
    context.ShowMeshes();
    var go = context.Root;
    // Load completed
},
Debug.LogError);
```

## LoadAsyncTask Example

```csharp
#if (NET_4_6 && UNITY_2017_1_OR_NEWER)
async static Task<GameObject> LoadAsync(Byte[] bytes)
{
    var context = new VRMImporterContext();

    // Get JSON in GLB format and parse it
    context.ParseGlb(bytes);

    try
    {
        // Convert the parsed JSON to the scene object
        await context.LoadAsyncTask();

        // Prevent the model's surface from being penetrated by
        // the positional relation between the bounding box and the camera
        // SkinnedMeshRenderer.updateWhenOffscreen = true
        context.EnableUpdateWhenOffscreen();

        // If you do not want the program displaying the model's T-Pose,
        // prepare it before ShowMeshes
        // Display the model when the loading is finished
        context.ShowMeshes();

        return context.Root;
    }
    catch(Exception ex)
    {
        Debug.LogError(ex);
        // Destroy related resources
        context.Destroy(true);
        throw;
    }
}
#endif
```

## Related-Article

More details can be found in the link below (written in Japanese):

* [UniVRMを使ってVRMモデルをランタイムロードする方法](https://qiita.com/sh_akira/items/8155e4b69107c2a7ede6)


Examples of importing the VRM model with the latest version [can be found here]({{< relref "runtime_import.md" >}}).

The followings are the methods to import a VRM model at runtime in Unity:

## Open VRM from a file path

{{< highlight cs >}}
var path="sample.vrm";
var go=VRM.VRMImporter.LoadFromPath(path);
Debug.LogFormat("loaded {0}", go.name);
{{< / highlight >}}

## Open VRM asynchronously from a file path

{{< highlight cs >}}
var path="sample.vrm";
VRMImporter.LoadVrmAsync(path, go => {
    Debug.LogFormat("loaded {0}", go.name);
});
{{< / highlight >}}

## Open VRM from a byte array 

{{< highlight cs >}}
var path="sample.vrm";
var bytes = File.ReadAllBytes(path);
var go=VRMImporter.LoadFromBytes(bytes);
{{< / highlight >}}

## Open VRM asynchronously from a byte array

{{< highlight cs >}}
VRMImporter.LoadVrmAsync(bytes, go => {
    Debug.LogFormat("loaded {0}", go.name);
});
{{< / highlight >}}

## Get the information form VRM

{{< highlight cs >}}
#if UNITY_STANDALONE_WIN
            var path = FileDialogForWindows.FileDialog("open VRM", ".vrm");
#else
            var path = Application.dataPath + "/default.vrm";
#endif
            if (string.IsNullOrEmpty(path))
            {
                return;
            }

            // Get the byte array
            var bytes = File.ReadAllBytes(path);

            var context = new VRMImporterContext();

            // Get JSON in GLB format and parse it
            context.ParseGlb(bytes);

            // Get the meta
            var meta = context.ReadMeta();
            Debug.LogFormat("meta: title:{0}", meta.Title);

            // You can access the entire parsed GLTF here
            var vrm = context.GLTF;

            // Convert the parsed JSON to the Scene Object
            if (m_loadAsync)
            {
                // Run asynchronously
                var now = Time.time;
                VRMImporter.LoadVrmAsync(context, go=> {
                    var delta = Time.time - now;
                    Debug.LogFormat("LoadVrmAsync {0:0.0} seconds", delta);
                    OnLoaded(go);
                });
            }
            else
            {
                // Run synchronously
                VRMImporter.LoadFromBytes(context);
                OnLoaded(context.Root);
            }
{{< / highlight >}}

## Get the thumbnail (From v0.37)

A thumbnail texture can be created by passing arguments to ReadMeta. 

{{< highlight cs >}}
    var meta = context.ReadMeta(true); // Make a thumbnail texture
    Texture2D thumbnail=meta.Thumbnail;
{{< / highlight >}}
