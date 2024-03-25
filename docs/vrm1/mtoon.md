# VRMC_materials_mtoon

https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_materials_mtoon-1.0

- 拡張を分離 => 独立した `VRMC_materials_mtoon` 拡張

:::info gltf の material拡張

```json
{
    "materials": [
        {
            "name": "MyUnlitMaterial",
            "pbrMetallicRoughness": {
                "baseColorFactor": [ 0.5, 0.8, 0.0, 1.0 ]
                // texture
            },
            // emission

            "extensions": {
                "VRMC_materials_mtoon": { // 👈
                    "specVersion": "1.0",
                    // ...
                }
            }
        }
    ]
}
```

:::

`TODO`
