# SpringBone

## vrm-1.0

- **Vrm10FastSpringboneRuntime(default)**: Unity job system で実装されています。シーンすべての vrm の spring bone まとめて処理するシングルトンです。`from v0.86`
- **Vrm10FastSpringboneRuntimeStandalone**: Unity job system で実装されています。`from v0.127.0`

これらの実装は importer の引数で切り替え可能です。`from v0.127.0`
これらの実装は IVrm10SpringBoneRuntimeProvider で切り替え可能です。`from v0.127.0`

## vrm-0.x

- **Vrm0XSpringBoneDefaultRuntime(default)**: 通常の MonoBehaviour です。
- **Vrm0XFastSpringboneRuntime**: Unity job system で実装されています。シーンすべての vrm の spring bone まとめて処理するシングルトンです。`from v0.85`

これらの実装は importer の引数で切り替え可能です。`from v0.127.0`

