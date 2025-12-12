## Installation

You can install UniVRM using the UnityPackage or the UPM Package.

The UniVRM supports Unity ${unity_version} or later.

### UnityPackage

Download the unitypackage, and drag and drop it to import the package into your project.

- VRM 1.0: **[Download](https://github.com/vrm-c/UniVRM/releases/download/v${version}/VRM-${version_hash}.unitypackage)**
- VRM 0.x: **[Download](https://github.com/vrm-c/UniVRM/releases/download/v${version}/UniVRM-${version_hash}.unitypackage)**

### UPM Packages

<details>
<summary>click to expand</summary>

You can install these UPM packages via Package Manager in UnityEditor.

- Open the package manager window: `Window` -> `Package Manager`
- Click `+` at the top-right of the package manager window, then select `Add package from git URL...`
- Specify UPM packages using URLs below.

> [!Warning]
> Starting with version `v0.131.0`, Assets/UniGLTF, VRM, and VRM10 have been moved to the `Packages` folder.
> Therefore, please specify `path=/Packages/UniGLTF`, `path=/Packages/VRM`, or `path=/Packages/VRM10`.

| UPM package                  | git URL                                                                 |
|:-----------------------------|:------------------------------------------------------------------------|
| com.vrmc.gltf                | https://github.com/vrm-c/UniVRM.git?path=/Packages/UniGLTF#v${version}    |
| com.vrmc.univrm (VRM 0.x)    | https://github.com/vrm-c/UniVRM.git?path=/Packages/VRM#v${version}        |
| com.vrmc.vrm (VRM 1.0)       | https://github.com/vrm-c/UniVRM.git?path=/Packages/VRM10#v${version}      |

You can also install via editing `Packages/manifest.json` directly.

```json5
// Packages/manifest.json
{
  "dependencies": {
    // ...
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Packages/UniGLTF#v${version}",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Packages/VRM#v${version}",
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Packages/VRM10#v${version}",
    // ...
  }
}
```
</details>

### Development Samples

<details>
<summary>click to expand</summary>

- via UnityPackage
  - VRM 1.0 Development Samples: [Download](https://github.com/vrm-c/UniVRM/releases/download/v${version}/VRM_Samples-${version_hash}.unitypackage)
  - VRM 0.x Development Samples: [Download](https://github.com/vrm-c/UniVRM/releases/download/v${version}/UniVRM_Samples-${version_hash}.unitypackage)
- via UPM Package
  - You can find `Samples` in the Package Manager and then submit `Import` button.
    - `Window` -> `Package Manager` -> `Packages: In Project` -> `VRM-1.0` or `VRM`
</details>

## Release Notes

- [日本語](https://vrm.dev/release/${dir}/v${version}/)
- [English](https://vrm.dev/en/release/${dir}/v${version}/)

> [!WARNING]
> from `v0.125.0`.
> `com.vrmc.vrmshaders` is removed.
> `com.vrmc.vrmshaders` is no longer required in manifest.json.
