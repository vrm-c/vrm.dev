---
title: Runtime Importer
aliases: ["/en/dev/univrm-0.xx/programming/runtime_import/", 
          "/en/docs/univrm/programming/univrm_import_runtime/"]
weight: 2
tags: ["api"]
---

## `Version 0.68~`

### API Changes

ImporterContext has been reworked.

* Loading processing has been divided into two steps: `Parse` and `Load`
    * `Parse` processing can be processed by other than the main thread
* The implementation of asynchronous loading function `ImporterContext.LoadAsync` has changed to `Task`
* The method of explicitly destroying `UnityEngine.Object` resources is now available. As such, resource leaks can be prevented
* The timing of calling `ImporterContext.Dispose` has been changed to when the loading process ends
    * Call `ImporterContext.DisposeOnGameObjectDestroyed` function (described below) before `ImporterContext.Dispose` function is called
    * In the previous versions, `ImporterContext.Dispose` is called when the generated VRM model is destroyed
* Added `ImporterContext.DisposeOnGameObjectDestroyed` function
    * The duty of destroying VRM resources (Texture, Material, Mesh, etc) has been transferred to GameObject
    * The resources (Texture, Material, Mesh, etc) will be destroyed when VRM's GameObject is destroyed


### Sample Codes (Synchronous Loading)

```cs
public sealed class LoadVrmSample : MonoBehaviour
{
    [SerializeField] private string _vrmFilePath;
    private GameObject _vrmGameObect;

    private void Start()
    {
        _vrmGameObject = LoadVrm(_vrmFilePath);
    }

    private void OnDestroy()
    {
        DestroyVrm(_vrmGameObject);
    }

    private GameObject LoadVrm(string vrmFilePath)
    {
        // 1. Call GltfParser function (it has been separated from ImporterContext)
        //    We use GltfParser to obtain JSON information and binary data from the VRM file
        var parser = new GltfParser();
        parser.ParsePath(vrmFilePath);

        // 2. Initialize a new VRMImporterContext object and pass `parser` as an argument to it
        //    VRMImporterContext is the class for loading VRM
        using(var context = new VRMImporterContext(parser))
        {
            // 3. Call Load function to create a VRM GameObject
            context.Load();

            // 4. Enable UpdateWhenOffscreen
            //    https://docs.unity3d.com/2019.4/Documentation/ScriptReference/SkinnedMeshRenderer-updateWhenOffscreen.html
            context.EnableUpdateWhenOffscreen();

            // 5. Display the model
            context.ShowMeshes();

            // 6. By calling this function, unity resources such as Texture, Material, Mesh, etc. used by VRM GameObject can be associated
            //    In other words, when the VRM GameObject is destroyed, resources (Texture, Material, Mesh, etc) that are actually used by the VRM GameObject can be destroyed
            context.DisposeOnGameObjectDestroyed();

            // 7. Return Root GameObject (VRM model)
            //    Root GameObject is where VRMMeta component is attached
            return context.Root;
        }
        // 8. When using statement ends, UnityEngine.Object resources held by VRMImporterContext are destroyed
        //    As mentioned in step 4, the resources associated with the VRM GameObject will not be destroyed
        //    The unused resources (not used by the VRM GameObject), i.e. unassigned textures, will be destroyed
    }

    private void DestroyVrm(GameObject vrmGameObject)
    {
        // 9. Destroy the generated VRM GameObject
        //    If the VRM GameObject is destroyed, the associated unity resources (Texture, Material, Mesh, etc) will be destroyed, too
        UnityEngine.Object.Destroy(vrmGameObject);
    }
}
```

### Sample Codes (Asynchronous Loading)

```cs
public sealed class LoadVrmAsyncSample : MonoBehaviour
{
    [SerializeField] private string _vrmFilePath;
    private GameObject _vrmGameObect;

    private async void Start()
    {
        _vrmGameObject = await LoadVrmAsync(_vrmFilePath);
    }

    private void OnDestroy()
    {
        DestroyVrm(_vrmGameObject);
    }

    private async Task<GameObject> LoadVrmAsync(string vrmFilePath)
    {
        // 1. Call GltfParser function (it has been separated from ImporterContext)
        //    We use GltfParser to obtain JSON information and binary data from the VRM file
        //    GltfParser can be run by other than the Unity's main thread
        var parser = new GltfParser();
        await Task.Run(() => {
            var file = File.ReadAllBytes(path);
            parser.ParseGlb(file);
        }

        // 2. Initialize a new VRMImporterContext object and pass `parser` as an argument to it
        //    VRMImporterContext is the class for loading VRM
        using(var context = new VRMImporterContext(parser))
        {
            // 3. Call LoadAsync function to create a VRM GameObject
            //    For loading process it will take several frames
            await context.LoadAsync();

            // 4. Enable UpdateWhenOffscreen
            //    https://docs.unity3d.com/2019.4/Documentation/ScriptReference/SkinnedMeshRenderer-updateWhenOffscreen.html
            context.EnableUpdateWhenOffscreen();

            // 5. Display the model
            context.ShowMeshes();

            // 6. By calling this function, unity resources such as Texture, Material, Mesh, etc. used by VRM GameObject can be associated
            //    In other words, when the VRM GameObject is destroyed, resources (Texture, Material, Mesh, etc) that are actually used by the VRM GameObject can be destroyed
            context.DisposeOnGameObjectDestroyed();

            // 7. Return Root GameObject (VRM model)
            //    Root GameObject is where VRMMeta component is attached
            return context.Root;
        }
        // 8. When using statement ends, UnityEngine.Object resources held by VRMImporterContext are destroyed
        //    As mentioned in step 4, the resources associated with the VRM GameObject will not be destroyed
        //    The unused resources (not used by the VRM GameObject), i.e. unassigned textures, will be destroyed
    }

    private void DestroyVrm(GameObject vrmGameObject)
    {
        // 9. Destroy the generated VRM GameObject
        //    If the VRM GameObject is destroyed, the associated unity resources (Texture, Material, Mesh, etc) will be destroyed, too
        UnityEngine.Object.Destroy(vrmGameObject);
    }
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
