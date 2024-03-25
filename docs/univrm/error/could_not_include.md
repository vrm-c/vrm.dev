# Shader error in 'VRM10/Universal Render Pipeline/MToon10': Couldn't open include file

```txt
Shader error in 'VRM10/Universal Render Pipeline/MToon10': Couldn't open include file 'Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl'. at /My project/Library/PackageCache/com.vrmc.vrmshaders@c684b72477/VRM10/MToon10/Resources/VRM10/vrmc_materials_mtoon_depthnormals_vertex.hlsl(5)
```

:::warning Universal RP がインストールされていません
:::

:::tip URP を使っていない場合は無視して問題ありません

URP 版 MToon の参照するファイルが見つからないエラーです。

:::

- [プロジェクトに URP Package を導入していないときに URP 版 MToon がエラーになる · Issue #2065 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2065)
- [Shader error when installing uniVRM · Issue #2204 · vrm-c/UniVRM · GitHub](https://github.com/vrm-c/UniVRM/issues/2204)

- ![img](https://github.com/vrm-c/UniVRM/assets/68057/a48816d7-7db2-469e-b762-a0951fa8a670)

**エラーメッセージ**

<details>
Shader error in 'VRM10/Universal Render Pipeline/MToon10': Couldn't open include file 'Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl'. at /ghq/github.com/ousttrue/UniVRM-UPM/Library/PackageCache/com.vrmc.vrmshaders@b4130b9e5d/VRM10/MToon10/Resources/VRM10/vrmc_materials_mtoon_render_pipeline.hlsl(5)
Compiling Subshader: 0, Pass: UniversalForward, Vertex program with DIRECTIONAL
Platform defines: SHADER_API_DESKTOP UNITY_ENABLE_DETAIL_NORMALMAP UNITY_ENABLE_REFLECTION_BUFFERS UNITY_LIGHTMAP_FULL_HDR UNITY_LIGHT_PROBE_PROXY_VOLUME UNITY_PBS_USE_BRDF1 UNITY_SPECCUBE_BLENDING UNITY_SPECCUBE_BOX_PROJECTION UNITY_USE_DITHER_MASK_FOR_ALPHABLENDED_SHADOWS
Disabled keywords: FOG_EXP FOG_EXP2 FOG_LINEAR INSTANCING_ON LIGHTMAP_SHADOW_MIXING LIGHTPROBE_SH SHADER_API_GLES30 SHADOWS_SCREEN SHADOWS_SHADOWMASK UNITY_ASTC_NORMALMAP_ENCODING UNITY_COLORSPACE_GAMMA UNITY_ENABLE_NATIVE_SHADOW_LOOKUPS UNITY_FRAMEBUFFER_FETCH_AVAILABLE UNITY_HALF_PRECISION_FRAGMENT_SHADER_REGISTERS UNITY_HARDWARE_TIER1 UNITY_HARDWARE_TIER2 UNITY_HARDWARE_TIER3 UNITY_LIGHTMAP_DLDR_ENCODING UNITY_LIGHTMAP_RGBM_ENCODING UNITY_METAL_SHADOWS_USE_POINT_FILTERING UNITY_NO_DXT5nm UNITY_NO_FULL_STANDARD_SHADER UNITY_NO_SCREENSPACE_SHADOWS UNITY_PBS_USE_BRDF2 UNITY_PBS_USE_BRDF3 UNITY_PRETRANSFORM_TO_DISPLAY_ORIENTATION UNITY_UNIFIED_SHADER_PRECISION_MODEL UNITY_VIRTUAL_TEXTURING _ADDITIONAL_LIGHTS _ADDITIONAL_LIGHTS_VERTEX _ALPHABLEND_ON _ALPHATEST_ON _MAIN_LIGHT_SHADOWS _MAIN_LIGHT_SHADOWS_CASCADE _MTOON_EMISSIVEMAP _MTOON_PARAMETERMAP _MTOON_RIMMAP _NORMALMAP
</details>
