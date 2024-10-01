# FastSpringBone(Unity job)について

`from v0.85`

## 概要

UniVRMでは、DOTSを利用した高速なSpringBone実装である「FastSpringBone」を用意しています。

揺れ物の各房を並列処理・最適化することで1フレームあたりの処理時間を大幅に抑えます。

## Burstの導入について

Burst を別途導入すると、 FastSpringBone が Burst によって高速化されます。

Burst の導入方法は [こちら](https://docs.unity3d.com/ja/2019.4/Manual/upm-ui-install.html) をご参照ください。
