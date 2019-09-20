---
Title: マテリアル設定
---

## トラブルシューティング

* ピカピカに反射してしまう。
    * Shaderの種類が `Standard` (Unityの標準) で `metallilc` と `smooth` 値が高い状態になっています。 マテリアルのシェーダーを `Unlit/UniUnlit` にするとテクスチャがそのまま表示できます。
    * Shaderの種類が、`VRM` のサポートしてないシェーダーになっています。サポート外シェーダーロード時は `Standard` として処理する関係でピカピカに反射する場合があります。マテリアルのシェーダーを `Unlit/UniUnlit` にするとテクスチャがそのまま表示できます。

## Standard
UnityのデフォルトでGLTF標準のPBRマテリアルとほぼ互換性があります。

`WIP`

## Unlit系
Unityでは、`Unlit/Color`, `Unlit/Texture`, `Unlit/Transparent`, `Unilt/Transparent Cutout` があります。
GLTFでは、 `KHR_material_unlit` 拡張でサポートしています。

GLTFでは、`doubleSided`、`Texture`と`Color`の乗算、`VertexColor`, `Color` のアルファモードが表現できますが Unityでは対応するシェーダーがありませんでした。
まとめて対応するために `UniGLTF/Unlit` シェーダーを追加しました(v0.44)。

`WIP`

## MToon
* https://niconare.nicovideo.jp/watch/kn3485
* https://dwango.github.io/vrm/univrm/shaders/mtoon/
