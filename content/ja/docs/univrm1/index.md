---
weight: 12
---

# UniVRM-1.0β

UniVRM は VRM 規格を実装した Unity のライブラリアセットです。
UniVRM を利用して、Unity から VRM ファイルを生成したり、読み込むことができます。

ここでは UniVRM を利用して VRM-1.0β 規格の VRM ファイルを扱うことを説明します。

## アセット構成
vrm-1.0 ファイルを Editor インポートした場合

* XXX.vrm (vrm-1.0 ファイル)
* XXX.vrm_assets/__vrm1__ (extract された VrmObject アセット)
* XXX.vrm_assets/preset(extract された VrmExpression アセット)

## コンポーネント構成
RunTime の VRM ヒエラルキーにアタッチされるコンポーネント

* RuntimeInstance(UniGLTF)
* VrmController
* VrmSpringBone
* VrmConstraint

```{toctree}
:maxdepth: 1
vrm1_tutorial/index
migrate_vrm0/index
import/index
```
