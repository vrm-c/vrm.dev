---
Title: Runtime Importer
---

The followings are examples of runtime VRM import in `v0.44 and later versions`:

## LoadAsync Example 

```csharp
var bytes = File.ReadAllBytes(path);
// Get a byte array

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

        // If you do not want the program display the model's T-Pose,
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
