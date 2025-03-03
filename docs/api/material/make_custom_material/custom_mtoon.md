import sg from './mtoon_shadergraph.svg'

# MToon 詳細

MToon は Lighting をカスタムするので、 URP の Unlit をベースに ShaderGraph を作成してください。

:::info mtoon 仕様
https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_materials_mtoon-1.0/README.ja.md
:::

<img src={sg} />

## BaseColor と ShadingColor を Lighting 結果に応じて混ぜ合わせる

[Implementation](https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_materials_mtoon-1.0/README.ja.md#implementation) を参考にBaseColor と ShadingColor を混ぜ合わせます。

```ts

function linearstep( a: Number, b: Number, t: Number ): Number
  return saturate( ( t - a ) / ( b - a ) )
end function

function color(N, L, shadingShiftFactor, shadingToonyFactor): ColorRGB

  let shading: Number = dot( N, L )
  shading = shading + shadingShiftFactor
  shading = shading + texture( shadingShiftTexture, uv ) * shadingShiftTexture.scale
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading )

  let baseColorTerm: ColorRGB = baseColorFactor.rgb * texture( baseColorTexture, uv ).rgb
  let shadeColorTerm: ColorRGB = shadeColorFactor.rgb * texture( shadeMultiplyTexture, uv ).rgb

  let color: ColorRGB = lerp( shadeColorTerm, baseColorTerm, shading )
  return  color * lightColor

end function
```

## Rim Lighting

TODO:

## Outline

TODO:

## UV Animation

TODO:
