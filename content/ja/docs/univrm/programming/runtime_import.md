---
title: ランタイムインポーター
aliases: ["/dev/univrm-0.xx/programming/runtime_import/"]
tags: ["api"]
aliases: ["/univrm/programming/univrm_import_runtime/"]
weight: 2
---

## `Version 0.68～`

ImporterContext を整理しました。

* ImporterContext.LoadAsync の実装が Task になりました。
* リソースの Destroy をできるようになりました。
* Parse と Load の２ステップに別れました。
* ImporterContext.Dispose でリソース(Mesh, Material, Textureなど)を破棄してください。
* DisposeOnGameObjectDestroyed で破棄の責務を GameObject に移譲できます。移譲した場合も ImporterContext.Dispose はしてください。

### 同期 sync

```cs
void Load(string path)
{
    // GltfParser が別れました。
    var parser = new GltfParser();
    parser.ParsePath(path);

    // parser を引き数に ImporterContext を作成します
    using(var context = new VRMImporterContext(parser))
    {
        context.Load();
    } // context が保持する Unity リソースが Destroy されます。
}
```

このままでロードしたヒエラルキーが即座に破棄されてしまいます。
`using` を越えるには `ImporterContext.DisposeOnGameObjectDestroyed` を使います。

```cs
GameObject Load(string path)
{
    // GltfParser が別れました。
    var parser = new GltfParser();
    parser.ParsePath(path);

    // parser を引き数に ImporterContext を作成します
    using(var context = new VRMImporterContext(parser))
    {
        context.Load();

        // この関数を呼び出すと、Destroy(context.Root) することで関連する Texture, Material, Mesh などのリソースをまとめて破棄できます
        var destroyer = context.DisposeOnGameObjectDestroyed();
        // UpdateWhenOffscreen を有効にする
        context.EnableUpdateWhenOffscreen();
        // 表示
        context.ShowMeshes();

        return destroyer.gameObject;
    } // context が保持する Unity リソースが Destroy されます。
    // DisposeOnGameObjectDestroyed により context が保持するリソースは、destroyerに移動済みです。
}
```

`DisposeOnGameObjectDestroyed` を使用した場合、
下記の様にすることで、 `OnDestroy` 経由で関連する `Mesh, Material, Texture` などまとめて Destroy されます。

```cs
UnityEngine.Object.Destroy(destroyer.gameObject);
```

### 非同期 async

```cs
async Task<GameObject> LoadVrmAsync(string path)
{
    // GltfParser が別れました。
    var parser = new GltfParser();
    await Task.Run(() => {
        var file = File.ReadAllBytes(path);
        // Unity の ScriptThread 以外でも実行できます
        parser.ParseGlb(file);
    }

    // parser を引き数に ImporterContext を作成します
    using(var context = new VRMImporterContext(parser))
    {
        await context.LoadAsync(); // 数フレームかかります
        
        // この関数を呼び出すと、Destroy(context.Root) することで関連する Texture, Material, Mesh などのリソースをまとめて破棄できます
        var destroyer = context.DisposeOnGameObjectDestroyed();
        // UpdateWhenOffscreen を有効にする
        context.EnableUpdateWhenOffscreen();
        // 表示
        context.ShowMeshes();

        return destroyer.gameObject;
    } // context が保持する Unity リソースが Destroy されます。    
    // DisposeOnGameObjectDestroyed により context が保持するリソースは、destroyerに移動済みです。
}
```

## `Version 0.44～` LoadAsyncの例 

```csharp
var bytes = File.ReadAllBytes(path);
// なんらかの方法でByte列を得る

var context = new VRMImporterContext();

context.ParseGlb(bytes);

// metaが必要な場合
bool createThumbnail=true;
var meta = context.ReadMeta(createThumbnail);
var thumbnail = meta.Thumbnail;

// modelを構築
context.LoadAsync(_ =>
{
    context.ShowMeshes();
    var go = context.Root;
    // load完了
},
Debug.LogError);
```

## LoadAsyncTaskを使う例

```csharp
#if (NET_4_6 && UNITY_2017_1_OR_NEWER)
async static Task<GameObject> LoadAsync(Byte[] bytes)
{
    var context = new VRMImporterContext();

    // GLB形式でJSONを取得しParseします
    context.ParseGlb(bytes);

    try
    {
        // ParseしたJSONをシーンオブジェクトに変換していく
        await context.LoadAsyncTask();

        // バウンディングボックスとカメラの位置関係で見切れるのを防止する
        // SkinnedMeshRenderer.updateWhenOffscreen = true
        context.EnableUpdateWhenOffscreen();

        // T-Poseのモデルを表示したくない場合、ShowMeshesする前に準備する
        // ロード後に表示する
        context.ShowMeshes();

        return context.Root;
    }
    catch(Exception ex)
    {
        Debug.LogError(ex);
        // 関連するリソースを破棄する
        context.Destroy(true);
        throw;
    }
}
#endif
```

## 関連する記事など

こちらの記事がわかりやすいです。

* [UniVRMを使ってVRMモデルをランタイムロードする方法](https://qiita.com/sh_akira/items/8155e4b69107c2a7ede6)


最新バージョンは[こちら]({{< relref "runtime_import.md" >}})をご覧ください。

Unityで実行時にモデルをインポートする方法です。

## ファイルパスからVRMを開く

{{< highlight cs >}}
var path="sample.vrm";
var go=VRM.VRMImporter.LoadFromPath(path);
Debug.LogFormat("loaded {0}", go.name);
{{< / highlight >}}

## ファイルパスから非同期にVRMを開く

{{< highlight cs >}}
var path="sample.vrm";
VRMImporter.LoadVrmAsync(path, go => {
    Debug.LogFormat("loaded {0}", go.name);
});
{{< / highlight >}}

## バイト列からVRM開く

{{< highlight cs >}}
var path="sample.vrm";
var bytes = File.ReadAllBytes(path);
var go=VRMImporter.LoadFromBytes(bytes);
{{< / highlight >}}

## バイト列から非同期にVRMを開く

{{< highlight cs >}}
VRMImporter.LoadVrmAsync(bytes, go => {
    Debug.LogFormat("loaded {0}", go.name);
});
{{< / highlight >}}

## VRMから情報を取り出す

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

            // Byte列を得る
            var bytes = File.ReadAllBytes(path);

            var context = new VRMImporterContext();

            // GLB形式をParseしてチャンクからJSONを取得しParseします
            context.ParseGlb(bytes);

            // metaを取得
            var meta = context.ReadMeta();
            Debug.LogFormat("meta: title:{0}", meta.Title);

            // もしくはこちらでパースされたGLTF全体にアクセスできます
            var vrm = context.GLTF;

            // ParseしたJSONをもとにシーンを構築します
            if (m_loadAsync)
            {
                // 非同期に実行する
                var now = Time.time;
                VRMImporter.LoadVrmAsync(context, go=> {
                    var delta = Time.time - now;
                    Debug.LogFormat("LoadVrmAsync {0:0.0} seconds", delta);
                    OnLoaded(go);
                });
            }
            else
            {
                // 同期的に実行する
                VRMImporter.LoadFromBytes(context);
                OnLoaded(context.Root);
            }
{{< / highlight >}}

## Thumbnailを取得する(v0.37から)

ReadMetaに引数を渡すことでThumbnailテクスチャを作成できます。

{{< highlight cs >}}
    var meta = context.ReadMeta(true); // Thumbnailテクスチャを作成する
    Texture2D thumbnail=meta.Thumbnail;
{{< / highlight >}}
