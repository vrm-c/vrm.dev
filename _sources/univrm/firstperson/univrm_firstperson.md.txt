---
date: 2018-04-16T16:30:00+09:00
weight: 3
aliases: ["/univrm/components/univrm_firstperson/"]
tags: ["unity"]
---

# VRMFirstPerson

２系統の設定があります。

* VRMモデル内で、VRヘッドセット位置を指定する
* VRで、メッシュごとにカメラの可視設定を分ける

※ アプリケーション側でこれらのパラメーターを使っている場合のみ有効です

## ヘッドセットの位置指定

ヘッドの動きの頭部への反映を微調整できます。

### FirstPersonBone

通常頭ボーンを指定します。
一人称時にヘッドセットに追随させるボーンです。

### FirstPersonOffset

追随する位置をFirstPersonBoneの位置からオフセットします。
デフォルト値[0, 0.06, 0]は、Headから両目の間へのオフセットを想定しています。

## VRの可視設定

VRアプリでの可視設定です。
VRアプリでは２種類のカメラが想定されます。

* 一人称(HMDにレンダリングされる)
* 三人称(HMD以外。配信用、鏡、マルチユーザーの他のユーザーのHMD)

です。
このとき、一人称で普通に自身のモデルがすべて見えると不都合があります。

* 近平面で自分の輪切りが見える
* 髪が邪魔で何も見えない
* 自分モデルの頭部の中身が見えてしまう(歯とか)

など。
これらの自体に対処するために、メッシュ毎に２種類のカメラに対する可視性を設定できます。

| 設定            | 一人称カメラ | 三人称カメラ | 備考                                                 |
|-----------------|--------------|--------------|------------------------------------------------------|
| Both            | 〇           | 〇           | 体、手、足など頭部から遠い部位を指する               |
| FirstPersonOnly | 〇           |              | 使わない？                                           |
| ThirdPersonOnly |              | 〇           | 外部カメラしか見えない。頭部、髪、帽子などを指定する |
| Auto            | 後述         | 後述         | デフォルト                                           |

### 設定のリセット

FirstPerson は、最初に自動で Auto の設定になるようになっています。
Mesh が増減するなどでモデルの構成が変わった場合に、参照が `Missing` になるなどエクスポートできない状態になる場合があります。
VRMFirstPerson をリセットすることで再設定することができます。
リセットする方法は、

`VRM First Person(Script)` インスペクタの右上角の `歯車アイコン ⚙` で表示されるメニューから `Reset` を選択してください。

```{figure} /_static/images/vrm/firstperson_reset.gif
firstperson reset
```

### Auto による Both と ThirdPersonOnly への自動分割

設定をAutoにしておくと、ロード時にメッシュを自動で `Both` と `ThirdPersonOnly` に分離することを指示できます。
UniVRMでは [VRMFirstPerson.Setup()](https://vrm-c.github.io/UniVRM/ja/vrm0/firstperson.html#setuplayermask) を呼び出します。
Autoによる自動分割は、重めの処理になります。

分割基準は、

* 含まれる頂点が `head` か `head` の子孫の weight を持っているか否か

です。
すべて同じ側の場合は分割せずに、`Both` か `ThirdPersonOnly` として扱います。

### 推奨される構成

あらかじめ、頭と体にモデルを分割しておき

* 頭に `ThirdPersonOnly` を指定
* 体に `Both` を指定

```{figure} /_static/images/vrm/firstperson.png
立体ちゃんは頭とそれ以外が分かれているので体をBoth、頭をThirdPersonOnlyに設定します。
```

```{figure} /_static/images/vrm/firstperson_runtime.png
動作例。ThirdPersonOnlyに設定したメッシュがFirstPersonで非表示になりました。
```
