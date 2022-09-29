# Editor でアップグレードする

UniVRM は従来の VRM-0.x モデルを VRM-1.0 モデルにアップグレードすることができます。
手順を説明します。

## 動作確認環境
- Unity 2020.3.34f1
- UniVRM 0.103.0

## Asset のアップグレード

以下の手順でアップグレードできます。

1. vrm0.x の vrm ファイルを Unity Project Asset に投入
1. インスペクタで Migration フラグを有効にし Apply
1. ライセンスなどを適切に修正する
1. Prefab を vrm1.0 としてそのまま Export する

## Asset の Inspector によるアップグレード

```{admonition} Editor
:class: info

`VRM-0.XXX.0_faa1.unitypackage` の機能です。
UPM では `com.vrmc.univrm1`
```

Asset に `vrm-0.x` を投入してください。
Inspector に migration ボタンが表示されます。

```{figure} /_static/images/vrm10/editor_migration.jpg
Migrate to Vrm1
```

cehckbox を有効にして `apply` ボタンを押します。

```{figure} /_static/images/vrm10/editor_migrated.jpg
Migrated
```

`vrm-1.0` の prefab が生成されます。
