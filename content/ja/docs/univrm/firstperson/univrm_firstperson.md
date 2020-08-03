---
title: "一人称表示"
date: 2018-04-16T16:30:00+09:00
weight: 3
---

# VRMFirstPerson

一人称表示に関連する設定です。


## FirstPersonBone
通常頭ボーンを指定します。
一人称時にヘッドセットに追随させるボーンです。

## FirstPersonOffset
追随する位置をFirstPersonBoneの位置からオフセットします。
デフォルト値[0, 0.06, 0]は、Headから両目の間へのオフセットを想定しています。

## Renderers
一人称描画時のメッシュのOn/Offをコントロールする設定です。

VRアプリでは、自分モデルの頭部の見えなくていい部分が見えてしまう問題があります。
VRMFirstPersonでは一人称時に頭を描画しないようにすることを支援する機能を用意しています。

### 頭が分かれている場合

頭に**ThirdPersonOnly**を指定します。
その他の部分に**Both**を指定します。

|{{< img src="images/vrm/firstperson.png" >}}|
|-----|
|立体ちゃんは頭とそれ以外が分かれているので体をBoth、頭をThirdPersonOnlyに設定します。|

|{{< img src="images/vrm/firstperson_runtime.png" alt="firstperson" >}}|
|-----|
|動作例。ThirdPersonOnlyに設定したメッシュがFirstPersonで非表示になりました。|

### 頭が分かれていない場合

Autoを指定します。
実行時に頭以外をコピーしたモデルを複製して、これを**FirstPersonOnly**として扱います。
元のモデルは**ThirdPersonOnly**として扱います。
頭ボーンのとその子孫のウェイトを持っている部分が削除対象になります。

### 特に設定しない場合

Bothを設定してください。
