---
title: ランタイムインポーター
aliases: ["/dev/univrm-0.xx/programming/runtime_import/"]
---

この記事は `Version 0.44以降` のAPIについてです。

## LoadAsyncの例 

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
