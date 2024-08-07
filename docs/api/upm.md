# UnityPackageManager による Install

:::warning `v0.125.0` から `com.vrmc.vrmshaders` は無くなります
:::

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

## UniVRM の UPM package

`v0.125.0` の例

https://github.com/vrm-c/UniVRM/releases

| name                | url                                                                  | note                                               |
| ------------------- | -------------------------------------------------------------------- | -------------------------------------------------- |
| com.vrmc.vrmshaders | https://github.com/vrm-c/UniVRM.git?path=/Assets/VRMShaders#v0.125.0 | Material関連。`v0.125.0` から `UniGLTF` に統合されて無くなります |
| com.vrmc.gltf       | https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.125.0    | UniGLTF                                            |
| com.vrmc.univrm     | https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.125.0        | VRM-0.x                                            |
| com.vrmc.vrm        | https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.125.0      | VRM-1.0                                            |

## UnityPackageManager ウインドウによるインストール

![UnityPackageManagerのWindow](/images/vrm10/menu_packagemanager.jpg)

![add package from git URL](/images/vrm10/from_git.jpg)

Project ウィンドウの Packages フォルダにインポートしたパッケージを確認する

![figure](/images/vrm/upm_package.jpg)

## packages/manifest.json 直接編集によるインストール

以下の内容を追記してください。

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

:::warning `v0.125.0` から `com.vrmc.vrmshaders` は無くなります
:::

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
