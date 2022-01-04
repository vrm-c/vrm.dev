---
title: "VRMファイルを作ってみたい"
url: "/how_to_make_vrm/"
weight: 2
aliases: ["/docs/univrm/univrm_workflow/"]
---

```{toctree}
setup_unity
convert_from_humanoid_model
setup_vrm
vrm_behavior_confirmation
```

UniVRMを使うVRM化作業のながれは以下のようになります：

1. 元になるモデルを T-Pose にしてライセンス情報を記述。正規化を有効にしてVRMファイルを出力する
1. 上記出力した VRMファイルを読み込み、Unity上でVRM独自の設定（[ライセンス]({{< relref "univrm_meta.md" >}})・[揺れ物]({{< relref "univrm_secondary.md" >}})・[表情]({{< relref "univrm_blendshape.md" >}})・[目線]({{< relref "univrm_lookat.md" >}})・[一人称表示]({{< relref "univrm_firstperson.md" >}})など）を行い、正規化せずにVRMファイルを出力する

ポイントは、 

* **一度仮のVRMファイルを作り、それを再度読み込んでから細かい調整・設定を行う**

ところとなります。

| {{< img src="images/vrm/VRM_changeVRM_jp.png" alt="vrm workflow" >}}  |
|-----------------------------------------------------------------------|
| **VRMファイルを作るワークフロー**                                    |

---
