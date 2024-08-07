# VRMC_springBone_extended_collider

仕様: https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_springBone_extended_collider-1.0

## VRMC_springBone_extended_collider とは？

`VRMC_springBone_extended_collider` は、 [`VRMC_springBone`](..) 拡張に対して、利用できるコライダー形状を追加する拡張です。

## 追加されるコライダー拡張

`VRMC_springBone` で利用できる球コライダー・カプセルコライダーに加え、以下のコライダー形状が追加されます。

### 内部コライダー

球の内部コライダー・カプセルの内部コライダーを追加します。
通常の球コライダー・カプセルコライダーが揺れものを外側に押し出すのに対し、内部コライダーは揺れものを内側に押し込むように動作します。

### 平面コライダー

平面コライダーを追加します。
平面コライダーは無限平面として定義され、揺れものの可動範囲が平面の片側に制限されるように動作します。

## フォールバック

`VRMC_springBone_extended_collider` は、 `VRMC_springBone` に対する前方互換性を持つ拡張です。
そのため、 `VRMC_springBone_extended_collider` 拡張を利用して作成されたモデルは、既存の `VRMC_springBone` 仕様しか対応しないアプリケーションでも利用することができます。

UniVRMで出力したモデルをはじめとして多くの場合、 `VRMC_springBone_extended_collider` で定義されたコライダーを持つモデルには、従来の `VRMC_springBone` 仕様で定義されたフォールバックのコライダーが設定されています。そのため、従来のアプリケーションでも利用することができます。ただし、フォールバックのコライダーは `VRMC_springBone_extended_collider` で定義された内部コライダー・平面コライダーの挙動を完全に再現できないことに注意してください。

## 対応している実装

:::warning

`VRMC_springBone_extended_collider` は、策定されたばかりの拡張のため、多くの実装・アプリケーションがまだ対応していません。

:::

以下の実装で `VRMC_springBone_extended_collider` がサポートされています。

- [UniVRM](https://github.com/vrm_c/UniVRM)
- [@pixiv/three-vrm](https://github.com/pixiv/three-vrm)
