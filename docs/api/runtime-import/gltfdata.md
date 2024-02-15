# GltfData

`.glb`, `.vrm`, `.vrma` など から GltfData をロードします。

## `byte[]` からロードする

## TextAsset からロードする

## filepath からロードする

## WebGL で url からロードする

## GltfData から GameObject を生成する。

GltfData が入手できたら中身に合わせた GameObject 生成へと分岐してください。

:::info UniGLTF.GltfData は vrm-0, vrm-1, glb, gltf で共通です
:::

:::tip UniGLTF.GltfData の生成はスレッドセーフです
Unity にアクセスしません。
:::

## GltfData から vrm-0.x, vrm-1.0 vrma を判別する

