# Packages

## v0.125以降

:::info

`com.vrmc.vrmshaders` (VRMShaders) は `UniGLTF` などに統合されて無くなりました。

:::

```js title="v0.125.0 の例"
{
  "dependencies": {
    // ...
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.125.0",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.125.0",
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.125.0",
    // ...
}
```

### com.vrmc.gltf (UniGLTF)

`gltf`, `glb` の import / export 機能が有ります。
拡張子、 `.gltf`, `.glb` のファイルの Editor import 機能が有ります。

### com.vrmc.univrm (VRM)

`vrm-0.x` の import / export 機能が有ります。
拡張子、 `.vrm` のファイルの Editor import 機能が有ります。
もし、`vrm-1.0` だった場合は import できません。

#### VRM_Samples

`vrm-0.x` のサンプルシーンが有ります。
動作に `VRM`, `UniGLTF` が必要です。

### com.vrmc.vrm (VRM10)

`com.vrmc.gltf` に依存します。

`vrm-1.0` の import / export 機能が有ります。
拡張子、 `.vrm` のファイルの Editor import 機能が有ります。
もし、`vrm-0.x` だった場合は マイグレート が可能です。

#### VRM10_Samples

`vrm-1.0` のサンプルシーンが有ります。
動作に `VRM10`, `UniGLTF` が必要です。

### パッケージの組み合わせ

フォルダは、依存フォルダの条件を満たす範囲で組み合わせることができます。
すべてのフォルダがあると `vrm-0.x` と `vrm-1.0` の両方が動きます。
片方だけ使う場合は、不要な方を削除することができます。

#### 例: VRM-0.X だけインストールする

- UniGLTF
- VRM

#### 例: VRM-1.0 と VRM-0.X 両方 インストールする

- UniGLTF
- VRM
- VRM10

#### 例: VRM-1.0 だけインストールする

- UniGLTF
- VRM10

#### 例: UniGLTF だけインストールする

- UniGLTF

## v0.125より前

```js title="v0.119.0 の例"
{
  "dependencies": {
    // ...
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.119.0",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.119.0",
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.119.0",
    "com.vrmc.vrmshaders": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.119.0",
    // ...
}
```

### com.vrmc.vrmshaders (VRMShaders)

`gltf`, `vrm-0.x`, `vrm-1.0` に関連する `Shader` や `Material` や `Texture` に関連する機能を集めています。
`UniUnlit` `MToon` `MToon-1.0` が含まれています。

個々のシェーダーについては、https://vrm.dev/univrm/shaders/index.html を参照してください。

### com.vrmc.gltf (UniGLTF)

`com.vrmc.vrmshaders` に依存します。

`gltf`, `glb` の import / export 機能が有ります。
拡張子、 `.gltf`, `.glb` のファイルの Editor import 機能が有ります。

### com.vrmc.univrm (VRM)

`com.vrmc.vrmshaders` と `com.vrmc.gltf` に依存します。

`vrm-0.x` の import / export 機能が有ります。
拡張子、 `.vrm` のファイルの Editor import 機能が有ります。
もし、`vrm-1.0` だった場合は import できません。

#### VRM_Samples

`vrm-0.x` のサンプルシーンが有ります。
動作に `VRM`, `UniGLTF`, `VRMShaders` が必要です。

### com.vrmc.vrm (VRM10)

`com.vrmc.vrmshaders` と `com.vrmc.gltf` に依存します。

`vrm-1.0` の import / export 機能が有ります。
拡張子、 `.vrm` のファイルの Editor import 機能が有ります。
もし、`vrm-0.x` だった場合は マイグレート が可能です。

#### VRM10_Samples

`vrm-1.0` のサンプルシーンが有ります。
動作に `VRM10`, `UniGLTF`, `VRMShaders` が必要です。

### パッケージの組み合わせ

フォルダは、依存フォルダの条件を満たす範囲で組み合わせることができます。
すべてのフォルダがあると `vrm-0.x` と `vrm-1.0` の両方が動きます。
片方だけ使う場合は、不要な方を削除することができます。

#### 例: VRM-0.X だけインストールする

- VRMShaders
- UniGLTF
- VRM

#### 例: VRM-1.0 と VRM-0.X 両方 インストールする

- VRMShaders
- UniGLTF
- VRM
- VRM10

#### 例: VRM-1.0 だけインストールする

- VRMShaders
- UniGLTF
- VRM10

#### 例: UniGLTF だけインストールする

- VRMShaders
- UniGLTF

#### 動かない例: UniGLTF だけインストールする

- UniGLTF

VRMShaders が無いので動きません。

## org.khronos.unitygltf や com.atteneder.gltfast と併用する

[#2461](https://github.com/vrm-c/UniVRM/pull/2461)

## UnityPackageManager による Install

:::info git が必要です

https://git-scm.com/

Unity Manual [Requirements](https://docs.unity3d.com/Manual/upm-git.html#req) を参照してください。

> To use Git dependencies in a project,
> make sure the [Git client](https://git-scm.com/)
> is installed on your machine and that you have added the Git executable path
> to the PATH system environment variable.

- powershell からバージョンを確認した例 (20201130)

```sh
> git --version
git version 2.29.2.windows.2
```

:::

:::danger git 未インストール

> An error occurred while resolving packages:
> Project has invalid dependencies:
> com.vrmc.vrmshaders: No 'git' executable was found.
> Please install Git on your system then restart Unity and Unity Hub

というようなエラーが出ます。

:::

:::warning 他の git のトラブル

https://git-scm.com/ からインストールした
git.exe (デフォルトは、 `C:\Program Files\Git\cmd\git.exe`) が、
環境変数 PATH の中で最初に見つかるように設定してください。

:::

## UnityPackageManager ウインドウによるインストール

![UnityPackageManagerのWindow](/images/vrm10/menu_packagemanager.jpg)

![add package from git URL](/images/vrm10/from_git.jpg)

Project ウィンドウの Packages フォルダにインポートしたパッケージを確認する

![figure](/images/vrm/upm_package.jpg)
