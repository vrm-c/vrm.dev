---
title: "Import VRM Model at Runtime"
linkTitle: "Import VRM model at runtime"
date: 2018-04-16T16:30:00+09:00
url: "/en/dev/univrm-0.xx/programming/univrm_import_runtime/"
weight: 2
---

Examples of importing the VRM model with the latest version [can be found here](../runtime_import/).

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

            // Get a byte array
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
