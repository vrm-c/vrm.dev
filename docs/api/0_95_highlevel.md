# `v0.95` 簡単API

API が複雑化してきたので、よくある用途を簡単にできる高レベル API を追加しました。
`GltfUtility` と `VrmUtility` が中で using してくれるので await で呼び出すだけで使えます。

:::warning 以下の例は Unity-2023.1向けです

古いUnityでは GetAwaiter を自前で用意すると動きます。

[UnityWebRequestでasync awaitする メモ](https://qiita.com/satotin/items/579fa3b9da0ad0d899e8)

:::

## GLTF

```cs title="SendWebRequest から bytes を得る例"
using System.IO;
using UniGLTF;
using UnityEngine;
using UnityEngine.Networking;

public class VrmLoader : MonoBehaviour
{
    public string Url = "https://raw.GithubUserContent.com/KhronosGroup/glTF-Sample-Assets/main/./Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb";

    // Start is called before the first frame update
    async void Start()
    {
        var req = UnityWebRequest.Get(Url);
        await req.SendWebRequest();

        var bytes = req.downloadHandler.data;
        var loaded = await GltfUtility.LoadBytesAsync(Path.GetFileName(Url), bytes);

        loaded.ShowMeshes();
    }
}
```

## VRM

```cs title="SendWebRequest から bytes を得る例"
using System.IO;
using UnityEngine;
using UnityEngine.Networking;
using VRM;

public class VrmLoader : MonoBehaviour
{
    public string Url = "https://raw.GithubUserContent.com/vrm-c/UniVRM/master/./Tests/Models/Alicia_vrm-0.51/AliciaSolid_vrm-0.51.vrm";

    // Start is called before the first frame update
    async void Start()
    {
        var req = UnityWebRequest.Get(Url);
        await req.SendWebRequest();

        var bytes = req.downloadHandler.data;

        var loaded = await VrmUtility.LoadBytesAsync(Path.GetFileName(Url), bytes);

        loaded.ShowMeshes();
    }
}
```

## 使用例

`Assets/VRM_Samples/SimpleViewer/ViewerUI.cs`
