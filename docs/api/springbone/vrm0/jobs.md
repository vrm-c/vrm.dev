# FastSpringBone(Unity job)について

:::info job版のロジックは vrm-0.x と vrm-1.0 で共通化されました

- https://github.com/vrm-c/UniVRM/issues/2422

:::

:::note job は房並列です

joint 毎ではなく房(根元 から末端まで)単位の並列です。
根元から順番に長さで拘束して位置を確定させる都合で親の位置・方向が先に決まる必要があるためです。

- 伸縮せずに見た目がきれい
- 並列化できない

というトレードオフがあります。

:::


`from v0.85`

## 概要

UniVRMでは、DOTSを利用した高速なSpringBone実装である「FastSpringBone」を用意しています。

揺れ物の各房を並列処理・最適化することで1フレームあたりの処理時間を大幅に抑えます。

## Burstの導入について

Burst を別途導入すると、 FastSpringBone が Burst によって高速化されます。

Burst の導入方法は [こちら](https://docs.unity3d.com/ja/2019.4/Manual/upm-ui-install.html) をご参照ください。
