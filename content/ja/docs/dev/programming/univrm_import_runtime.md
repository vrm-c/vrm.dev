---
title: "VRMモデルを実行時にインポートする"
linkTitle: "実行時にVRMモデルをインポートする"
date: 2018-04-16T16:30:00+09:00
weight: 2
---

最新バージョンは[こちら](../runtime_import/)をご覧ください。

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
