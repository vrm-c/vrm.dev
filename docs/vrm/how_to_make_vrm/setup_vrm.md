---
date: 2020-08-26T15:52:30+09:00
url: "/how_to_make_vrm/setup_vrm/"
description: "正規化済みのモデルに BlendShape、視線、SpringBone などをセットアップして再出力する"
tags: ["unity"]
weight: 3
---

# 2. VRMをセットアップする

## VRMモデル

前節で VRM 出力したモデルの prefab。

**VRMファイルを、UnityのAssetsにドラッグ＆ドロップする** だけで、VRMファイルがインポートされ **モデルデータのPrefabが生成されます** 。

![img](/_static/images/vrm/vrm_prefab.png)
![img](/_static/images/vrm/vrm_components.jpg)

* 正規化されている
* VRMMeta, Animator, VRMBlendShapeProxy, VRMFirstPerson, VRMLookAtHead, VRMLookAtBoneApplyer 等がアタッチされている

## VRM の Prefabをシーンに展開する

`File` - `New Scene`

prefab をシーンに展開します。

```{figure} /_static/images/vrm/alicia_scene2.png
```

## VRM独自の設定を行う

```{figure} /_static/images/vrm/vrm_settings.png
```

読み込まれたモデルデータをHierarchyで選択すると、**インスペクタにさまざまな設定項目** があらわれます。また、**secondaryには揺れ物の設定**が入っています。これらを設定していきます。
**少なくとも、[タイトル・作者・ライセンス情報](/univrm/meta/univrm_meta)** は埋めるようにしてください。 **特にライセンス情報は重要です！**

ほかに、

* [表情や口パクの設定（BlendShape）](/univrm/blendshape/univrm_blendshape)
* [一人称視点の設定（一人称視点でモデルを操作する場合、邪魔になる頭などのパーツを指定する、標準の視点位置を設定する）](/univrm/firstperson/univrm_firstperson)
* [視線・眼球の可動範囲と可動曲線の設定。ボーンによる眼球回転だけでなく、BlendShapeによる眼球アニメーションにも対応。](/univrm/lookat/univrm_lookat)
* [揺れ物（SpringBone/SpringBoneCollider）の設定](/univrm/springbone/univrm_secondary)

がありますので必要に応じて設定していきます。

### VRMファイルを出力する

調整が終わったら、UnityのHierarchyでモデルデータを選択し、再度メニューから`VRM0` - `Export UniVRM-0.XX`を実行します。

```{figure} /_static/images/vrm/vrm_menu.jpg
vrm_menu
```

前のバージョンは `VRM` - `UniVRM-0.XX` - `Export humanoid`。

```{figure} /_static/images/vrm/UniVRMExportHumanoid.jpg
UniVRMExportHumanoid
```

```{admonition} Pose Freeze
:class: note


エクスポート時に正規化します。
最新版は、 `ExportRoot` をセットしたときにヒエラルキーに回転・拡縮があるかどうかを調べて、このチェックボックスを自動で設定するようになっています。
最初の正規化以降でも、

* アクセサリを追加

などの場合に必要です。 `ExportRoot` を再セットすれば自動判定します。

* [BlendShape の Bake](/univrm/blendshape/univrm_bake_blendshape) もあります。
```

### 完成！
これでセットアップ済のVRMファイルが出来ました。[対応アプリケーション](/vrm/vrm_applications)に読み込ませてみましょう！
