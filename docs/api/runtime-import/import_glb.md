# load glb

[GltfData](/api/runtime-import/gltfdata) から Unity ヒエラルキーを構築します。

<!-- truncate -->

:::info glTF形式
glTF は glb と比べてアプリケーションからの扱いが煩雑です。
複数のファイルへのアクセスが発生するためです。
mobile 環境、webgl 環境などディレクトリへの自由なアクセスが制限される環境で
は特に難しくなります。

特別な目的が無い場合は gltf よりも glb をお勧めします。
(vrm や vrma は glb の拡張子を変更したものです)
:::

[glb_import](/api/0_82_glb_import)
