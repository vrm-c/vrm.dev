---
url: "/how_to_make_vrm/"
weight: 2
aliases: ["/docs/univrm/univrm_workflow/"]
---

# VRMファイルを作ってみたい

```{toctree}
setup_unity
convert_from_humanoid_model
setup_vrm
vrm_behavior_confirmation
```

UniVRMを使うVRM化作業のながれは以下のようになります：

1. 元になるモデルを T-Pose にしてライセンス情報を記述。正規化を有効にしてVRMファイルを出力する
1. 上記出力した VRMファイルを読み込み、Unity上でVRM独自の設定（[ライセンス](/univrm/meta/univrm_meta)・[揺れ物](/univrm/springbone/univrm_secondary)・[表情](/univrm/blendshape/univrm_blendshape)・[目線](/univrm/lookat/univrm_lookat)・[一人称表示](/univrm/firstperson/univrm_firstperson)など）を行い、正規化せずにVRMファイルを出力する

ポイントは、 

* **一度仮のVRMファイルを作り、それを再度読み込んでから細かい調整・設定を行う**

ところとなります。

```{figure} /_static/images/vrm/VRM_changeVRM_jp.png

**VRMファイルを作るワークフロー**
```
