---
title: ランタイムインポーター
aliases: ["/dev/univrm-0.xx/programming/runtime_import/"]
tags: ["api"]
aliases: ["/univrm/programming/univrm_import_runtime/"]
weight: 2
---

## `Version 0.68～`

### 過去バージョンからの仕様変更

`ImporterContext` の仕様を変更しました。

* ロード処理が Parse と Load の 2 ステップに分かれました。
    * Parse 処理をメインスレッド以外で処理することができます。
* 非同期ロード関数 `ImporterContext.LoadAsync` の実装を `Task` に変更しました。
* これまで明示的に破棄できなかった `UnityEngine.Object` リソースを破棄できるようになりました。
    * リソースのリークを防ぐことができます。
* `ImporterContext.Dispose` を呼び出すべきタイミングを「ロード処理終了時」に変更しました。
    * 呼び出して破棄する前に、後述の `ImporterContext.DisposeOnGameObjectDestroyed` を呼び出してください。
    * 以前の仕様は「生成したモデルの破棄時」に呼び出すべき関数でした。
* `ImporterContext.DisposeOnGameObjectDestroyed` 関数を追加しました。
    * VRM モデルが必要とするリソース (Texture, Material, Mesh, etc) を破棄する責務を GameObject に移譲できます。
    * VRM の GameObject の破棄タイミングでリソース (Texture, Material, Mesh, etc) を破棄します。


### サンプルコード（同期的ロード）

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
        // 1. GltfParser を呼び出します。
        //    GltfParser はファイルから JSON 情報とバイナリデータを読み出します。
        var parser = new GltfParser();
        parser.ParsePath(vrmFilePath);

        // 2. GltfParser のインスタンスを引数にして VRMImporterContext を作成します。
        //    VRMImporterContext は VRM のロードを実際に行うクラスです。
        using(var context = new VRMImporterContext(parser))
        {
            // 3. Load 関数を呼び出し、VRM の GameObject を生成します。
            context.Load();

            // 4. VRM の GameObject が実際に使用している UnityEngine.Object リソースの寿命を VRM の GameObject に紐付けます。
            //    つまり VRM の GameObject の破棄時に、実際に使用しているリソース (Texture, Material, Mesh, etc) をまとめて破棄することができます。
            context.DisposeOnGameObjectDestroyed();

            // 5. （任意） SkinnedMeshRenderer の UpdateWhenOffscreen を有効にできる便利関数です。
            //    https://docs.unity3d.com/2019.4/Documentation/ScriptReference/SkinnedMeshRenderer-updateWhenOffscreen.html
            context.EnableUpdateWhenOffscreen();

            // 6. VRM モデルを表示します。
            context.ShowMeshes();

            // 7. Root の GameObject を return します。
            //    Root の GameObject とは VRMMeta コンポーネントが付与されている GameObject のことです。
            return context.Root;
        }
        // 8. using スコープを抜けて context が破棄されると、 VRMImporterContext が保持する UnityEngine.Object リソースが破棄されます。
        //    このとき破棄されるリソースは、 glTF ファイルには含まれているが VRM の GameObject には割り当てられていないテクスチャなどです。
        //    手順 4. で VRM の GameObject に紐付けたリソースは、ここでは破棄されません。
    }

    private void DestroyVrm(GameObject vrmGameObject)
    {
        // 9. 生成された VRM の GameObject を破棄します。
        //    GameObject を破棄すれば、紐づくリソース (Texture, Material, Mesh, etc) も破棄されます。
        UnityEngine.Object.Destroy(vrmGameObject);
    }
}
```

### サンプルコード（非同期ロード）

```cs
public sealed class LoadVrmAsyncSample : MonoBehaviour
{
    [SerializeField] private string _vrmFilePath;
    private GameObject _vrmGameObect;

    private async void Start()
    {
        // 簡便のため、このサンプルではキャンセル処理などは考慮しません。
        _vrmGameObject = await LoadVrmAsync(_vrmFilePath);
    }

    private void OnDestroy()
    {
        DestroyVrm(_vrmGameObject);
    }

    private async Task<GameObject> LoadVrmAsync(string vrmFilePath)
    {
        // 1. GltfParser を呼び出します。
        //    GltfParser はファイルから JSON 情報とバイナリデータを読み出します。
        //    GltfParser は Unity のメインスレッド以外で実行できます。
        var parser = new GltfParser();
        await Task.Run(() => {
            var file = File.ReadAllBytes(path);
            parser.ParseGlb(file);
        }

        // 2. GltfParser のインスタンスを引数にして VRMImporterContext を作成します。
        //    VRMImporterContext は VRM のロードを実際に行うクラスです。
        using(var context = new VRMImporterContext(parser))
        {
            // 3. Load 関数を呼び出し、VRM の GameObject を生成します。
            //    Load 処理は数フレームの時間を要します。
            await context.LoadAsync();

            // 4. VRM の GameObject が実際に使用している UnityEngine.Object リソースの寿命を VRM の GameObject に紐付けます。
            //    つまり VRM の GameObject の破棄時に、実際に使用しているリソース (Texture, Material, Mesh, etc) をまとめて破棄することができます。
            context.DisposeOnGameObjectDestroyed();

            // 5. （任意） SkinnedMeshRenderer の UpdateWhenOffscreen を有効にできる便利関数です。
            //    https://docs.unity3d.com/2019.4/Documentation/ScriptReference/SkinnedMeshRenderer-updateWhenOffscreen.html
            context.EnableUpdateWhenOffscreen();

            // 6. VRM モデルを表示します。
            context.ShowMeshes();

            // 7. Root の GameObject を return します。
            //    Root の GameObject とは VRMMeta コンポーネントが付与されている GameObject のことです。
            return context.Root;
        }
        // 8. using スコープを抜けて context が破棄されると、 VRMImporterContext が保持する UnityEngine.Object リソースが破棄されます。
        //    このとき破棄されるリソースは、 glTF ファイルには含まれているが VRM の GameObject には割り当てられていないテクスチャなどです。
        //    手順 4. で VRM の GameObject に紐付けたリソースは、ここでは破棄されません。
    }

    private void DestroyVrm(GameObject vrmGameObject)
    {
        // 9. 生成された VRM の GameObject を破棄します。
        // GameObject を破棄すれば、紐づくリソース (Texture, Material, Mesh, etc) も破棄されます。
        UnityEngine.Object.Destroy(vrmGameObject);
    }
}
```

----

# 過去バージョンの情報

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
