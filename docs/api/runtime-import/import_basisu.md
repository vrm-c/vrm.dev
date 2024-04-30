# v0.121 KHR_texture_basisu 対応について

:::info `KHR_texture_basisu` の runtime import を試験中です
:::

[KTX for Unity](https://docs.unity3d.com/Packages/com.unity.cloud.ktx@3.4/manual/index.html) パッケージをインストールすることで、
`image/ktx2` に対応する KtxTextureDeserializer が有効化されます。

:::info `USE_COM_UNITY_CLOUD_KTX` シンボルによる有効化

https://github.com/vrm-c/UniVRM/blob/master/Assets/VRMShaders/GLTF/IO/Runtime/VRMShaders.GLTF.IO.Runtime.asmdef

:::

:::danger y-flip

Unity と glTF の仕様の相違により `KHR_texture_basisu` は上下が逆になります。
Shader 側で対応が必要です。

https://github.com/atteneder/KtxUnity/issues/18

も参照してください。

:::

:::info UV scale/offset による上下反転
`v0.122` で UV scale/offset により上限反転するオプションが追加されます。

この方法では、
mtoon の uv-animation がうまくいかない可能性に留意してください。
:::

## KHR_texture_basisu

## 関連するソースコード

### UnityTextureDeserializer

https://github.com/vrm-c/UniVRM/blob/master/Assets/VRMShaders/GLTF/IO/Runtime/Texture/Importer/UnityTextureDeserializer.cs#L25

### KtxTextureDeserializer

https://github.com/vrm-c/UniVRM/blob/master/Assets/VRMShaders/GLTF/IO/Runtime/Texture/Importer/KtxTextureDeserializer.cs
