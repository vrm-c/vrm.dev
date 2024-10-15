# SpringBone

## vrm-1.0

実行システムを切り替えられるようになりました。

- `v0.86` **Vrm10FastSpringboneRuntime(default)**: Unity job system で実装されています。すべての vrm の spring bone まとめて処理するシングルトンです。
- `v0.127` **Vrm10FastSpringboneRuntimeStandalone**: Unity job system で実装されています。モデル毎に個別に実行します。

## vrm-0.x

実行システムを切り替えられるようになりました。

- **Vrm0XSpringBoneDefaultRuntime(default)**: 通常の MonoBehaviour です。
- `v0.85` **Vrm0XFastSpringboneRuntime**: Unity job system で実装されています。すべての vrm の spring bone まとめて処理するシングルトンです。

これらの実装は importer の引数で切り替え可能です。`from v0.127.0`

