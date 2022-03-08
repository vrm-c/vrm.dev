---
tags: ["unity"]
weight: 2
description: "VRMの元になる条件"
---

# BaseModel

以下の条件を満たす `GameObject` をエクスポートして VRM にできます。

* Animator がアタッチされている
* Animator に HumanoidAvatar がセットされている

## FBX

fbx で上記の条件を満たすには、 `fbx importer` の `rig` 設定で `humanoid` 化してください。
fbx の prefab は、 humanoid 化すると Animator がアタッチされて `HumanoidAvatar` がセットされた状態になります。

fbx が humanoid 化できるには、

* [必須のボーン](https://github.com/vrm-c/vrm-specification/blob/master/specification/0.0/README.ja.md#%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%83%9C%E3%83%BC%E3%83%B3) がすべて含まれている
* ボーンの親子関係が正しい

の２つの条件が必用です。

* ボーンの名前は自由です

参考

[BlenderからUnityのHumanoid互換でfbxをエクスポートする](https://qiita.com/ousttrue/items/aead1c943855561b62e7) 

## FBX をシーン上で加工する

問題ない

* fbx prefab 内の GameObject に子 GameObject を追加する
* fbx prefab 内の GameObject を disable にする

うまくいかない場合あり

* fbx prefab 内の GameObject を削除する
* fbx prefab 内の GameObject を動かす(移動、回転、拡大・縮小、親の付け替え)

何故問題があるかというと

* HumanoidAvatar が GameObject ヒエラルキーと一致しなくなる

からです。
HumanoidAvatar にはおそらく、

* 元の姿勢
* ヒューマンボーン(hipsなど)と GameObjectの対応関係

が記録されています。
これに変更を加えた場合再作成する必用があります。
下記の HumanoidComponent で作成できます。

## GameObject から手動で HumanoidAvatar を作成する

`fbx importer` に頼らずに HumanoidAvatar を作成できます。

[HumanoidComponent](/univrm/humanoid/meshutility_humanoid)

これを使うと、

* 人型の GLTF
* シーン上でキューブを人型に積み上げる

などのヒエラルキーに対して、後付けで `HumanoidAvatar` を作成することができます。
HumanoidAvatar を作成した GameObject (シーン上、Prefabの両方) は エクスポートして VRM にすることができます。
