---
date: 2018-04-16T16:30:00+09:00
weight: 3
aliases: ["/univrm/components/univrm_firstperson/"]
tags: ["unity"]
---

# VRMFirstPerson
## 概要

VRMFirstPersonにはヘッドセットの位置指定とVRの可視設定という2種類の設定があります。  

__アプリケーション側が対応している場合のみ有効となる設定です。__

## ヘッドセットの位置指定

VRMモデル内でVRヘッドセット（HMD）位置を指定する設定です。HMDとアバターの頭の追随を調整できます。

### FirstPersonBone

一人称の際にHMDに追随させるボーンです。頭ボーンを指定してください。

### FirstPersonOffset

追随する位置をFirstPersonBoneの位置から調整します。アバターの両目の間に調整してください。

## VRの可視設定

VRアプリ向けにメッシュごとのカメラの可視設定を分ける設定です。VRアプリでは２種類のカメラが想定されます。  
この一人称カメラで自身のアバターが見えた際に起きる不都合に対処するため、メッシュごとに可視性を設定出来るようになっています。

### 一人称カメラ

HMDに出力される映像

### 三人称カメラ

HMD以外に出力される映像・配信用映像・鏡・マルチプレイでの他ユーザーのHMD

### 可視設定

| 設定            | 一人称カメラ | 三人称カメラ | 備考                                                 |
|-----------------|--------------|--------------|------------------------------------------------------|
| Auto            | △         | △         | 初期設定。詳細は後述                                         |
| Both            | 〇           | 〇           | 体・手・足など頭部から遠い部位を指定する               |
| ThirdPersonOnly |              | 〇           | 頭部・髪・帽子などを指定する |
| FirstPersonOnly | 〇           |              | 設定項目自体が不要の可能性がある                                           |

### 不都合の例

* 近平面で自分のアバターの輪切りが見える
* アバターの髪が邪魔で何も見えない
* 歯などの自身のアバターの中身が見えてしまう

## 推奨される構成

アバター作成段階で頭と体にメッシュを分割することを推奨しています。
* 頭に `ThirdPersonOnly` を指定
* 体に `Both` を指定

```{figure} /_static/images/vrm/firstperson.png
立体ちゃんは頭とそれ以外が分かれているので体をBoth、頭をThirdPersonOnlyに指定します。
```

```{figure} /_static/images/vrm/firstperson_runtime.png
動作例。ThirdPersonOnlyに設定したメッシュがFirstPersonで非表示になりました。
```

## Autoの可視設定

可視設定がAutoの場合はインポート時にメッシュが `Both` と `ThirdPersonOnly` に自動分割されます。  
分割されない場合はメッシュの全てが `Both` か `ThirdPersonOnly` になります。  
UniVRMでは [VRMFirstPerson.Setup()](https://vrm-c.github.io/UniVRM/ja/vrm0/firstperson.html#setuplayermask) を呼び出します。
Autoによる自動分割は重めの処理になります。  

### 分割基準

含まれる頂点が `head` か `head` の子孫のボーンのウェイトを持っているか

## 設定のリセット

FirstPerson は初期設定で Auto を指定しますが、エクスポートに失敗する場合はVRMFirstPerson をリセットすることで再設定することができます。
メッシュが増減するなどのアバターの構成が変わった場合に参照が `Missing` になったときなどがエクスポートに失敗する場合です。

### リセット方法

`VRM First Person (Script)` インスペクタの右上の `歯車アイコン ⚙` で表示されるメニューから `Reset` を選択してください。

```{figure} /_static/images/vrm/firstperson_reset.gif
firstperson を reset
```
