---
title: "VRM"
date: 2018-04-16T16:30:00+09:00
layout: vrm_index
---
{{< img src="images/vrm/vrm_topheader.png" alt="VRM - humanoid 3d avatar format for VR" >}}

# VRM - VR向け3Dアバターファイルフォーマット -

「VRM」は**VRアプリケーション向けの人型3Dアバター（3Dモデル）データを扱うためのファイルフォーマット**です。[glTF2.0](https://www.khronos.org/gltf/)をベースとしており、誰でも自由に利用することができます。また、[Unity](https://unity3d.com/jp)向けのVRMファイルの読み書きを行うC#による標準実装（[UniVRM](https://github.com/dwango/UniVRM)）がオープンソースで提供されます。

---

## VRMについて

* [「VRM」って何？どんなことができる？](./vrm_about/)
	* [VRMとは](./vrm_about/#vrm-とは)
	* [VRMで何ができるの？](./vrm_about/#vrmで何ができるの)
	* [VRMの特徴](./vrm_about/#vrmの特徴)
	* [VRMファイルに設定できるライセンスデータ](./vrm_about/#vrmファイルに設定できるライセンスデータ)

* [VRMファイルを作ってみたい](./how_to_make_vrm/)
	* [VRMファイルのつくりかた（既存3Dモデルからのコンバート）](./how_to_make_vrm/#vrmファイルのつくりかた-既存3dモデルからのコンバート)

* [VRMファイルを眺めてみたい](./how_to_view_vrm/)
	* [VRMファイルの読み込みかた](./how_to_view_vrm/#vrmファイルの読み込みかた)
	* [VRMファイルの読み込みかた（簡易版）](./how_to_view_vrm/#vrmファイルの読み込みかた-簡易版)
	* [VRMファイルを投稿する・探す](./how_to_view_vrm/#vrmファイルを投稿する-探す)

* [VRMファイルが使えるアプリケーションは？](./vrm_applications/)
	* [3Dキャラクター投稿プラットフォーム](./vrm_applications/#3Dキャラクター投稿プラットフォーム)
    * [キャラメイクツール](./vrm_applications/#キャラメイクツール)
    * [配信ツール](./vrm_applications/#配信ツール)
    * [メタバース](./vrm_applications/#メタバース)
    * [ゲームなど](./vrm_applications/#ゲームなど)
    * [ビューア](./vrm_applications/#ビューア)

---

## VRMフォーマット技術仕様
* [GLTFとは](./gltf_about/)
* [VRM仕様](./vrm_spec/)
    * [Tポーズについて](./vrm_tpose/)

---

## [UniVRM](https://github.com/dwango/UniVRM)(Unity向けVRM標準実装)仕様
* [Download](https://github.com/dwango/UniVRM/releases)
* [UniVRMのインストール](./univrm/univrm_install/)
* [UniVRMのワークフロー](./univrm/univrm_workflow/)

* UniVRMのコンポーネント
    * [モデル情報](./univrm/components/univrm_meta/)
    * [BlendShape](./univrm/components/univrm_blendshape/)
    * [一人称視点](./univrm/components/univrm_firstperson/)
    * [視線制御](./univrm/components/univrm_lookat/)
    * [揺れモノ](./univrm/components/univrm_secondary/)

* [UniVRMで使えるシェーダー](./univrm/shaders/univrm_shaders/)
    * [UniVRM-0.44のマテリアル](./univrm/shaders/univrm_shaders_044/)
    * [MToonの設定](./univrm/shaders/mtoon/)

* API
    * [変更履歴](./univrm/api/univrm_api_history/)
    * [実行時にVRMモデルをインポートする](./univrm/api/univrm_import_runtime/)
    * [実行時にBlendShapeを操作する](./univrm/api/univrm_use_blendshape/)
    * [座標系の変換について](./univrm/api/univrm_coordinate/)
    * [一人称モードの使い方](./univrm/api/univrm_use_firstperson/)

* [FAQ](./univrm/univrm_faq/)