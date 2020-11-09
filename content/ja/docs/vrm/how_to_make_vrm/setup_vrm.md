---
title: "2. VRMをセットアップする"
date: 2020-08-26T15:52:30+09:00
url: "/how_to_make_vrm/setup_vrm/"
description: "正規化済みのモデルに BlendShape、視線、SpringBone などをセットアップして再出力する"
tags: ["unity"]
weight: 3
---

## VRMモデル

前節で VRM 出力したモデルの prefab。

**VRMファイルを、UnityのAssetsにドラッグ＆ドロップする** だけで、VRMファイルがインポートされ **モデルデータのPrefabが生成されます** 。

{{< img src="images/vrm/vrm_prefab.png" >}}
{{< img src="images/vrm/vrm_components.jpg" >}}

* 正規化されている
* VRMMeta, Animator, VRMBlendShapeProxy, VRMFirstPerson, VRMLookAtHead, VRMLookAtBoneApplyer 等がアタッチされている

## VRM の Prefabをシーンに展開する

`File` - `New Scene`

prefab をシーンに展開します。

{{< img src="images/vrm/alicia_scene2.png" >}}

## VRM独自の設定を行う
{{< img src="images/vrm/vrm_settings.png" >}}

読み込まれたモデルデータをHierarchyで選択すると、**インスペクタにさまざまな設定項目** があらわれます。また、**secondaryには揺れ物の設定**が入っています。これらを設定していきます。
**少なくとも、[タイトル・作者・ライセンス情報]({{< relref "univrm_meta.md" >}})** は埋めるようにしてください。 **特にライセンス情報は重要です！**

ほかに、

* [表情や口パクの設定（BlendShape）]({{< relref "univrm_blendshape.md" >}})
* [一人称視点の設定（一人称視点でモデルを操作する場合、邪魔になる頭などのパーツを指定する、標準の視点位置を設定する）]({{< relref "univrm_firstperson.md" >}})
* [視線・眼球の可動範囲と可動曲線の設定。ボーンによる眼球回転だけでなく、BlendShapeによる眼球アニメーションにも対応。]({{< relref "univrm_lookat.md" >}})
* [揺れ物（SpringBone/SpringBoneCollider）の設定]({{< relref "univrm_secondary.md" >}})

がありますので必要に応じて設定していきます。

### VRMファイルを出力する

{{< img src="images/vrm/UniVRMExportHumanoid.png" width="400" height="225" alt="UniVRMExportHumanoid">}}

調整が終わったら、UnityのHierarchyでモデルデータを選択し、再度メニューから``VRM -> UniVRM-0.XX -> Export humanoid``を実行します

{{% alert title="Pose Freeze" color="info" %}}
エクスポート時に正規化します。
最新版は、 `ExportRoot` をセットしたときにヒエラルキーに回転・拡縮があるかどうかを調べて、このチェックボックスを自動で設定するようになっています。
最初の正規化以降でも、

* アクセサリを追加

などの場合に必要です。 `ExportRoot` を再セットすれば自動判定します。

* [BlendShape の Bake]({{< relref "univrm_bake_blendshape.md" >}}) もあります。

{{% /alert %}}

### 完成！
これでセットアップ済のVRMファイルが出来ました。[対応アプリケーション]({{< relref "vrm_applications.md" >}})に読み込ませてみましょう！
