---
title: "MToon"
linkTitle: "MToon setting"
date: 2018-04-16T16:30:00+09:00
weight: 1
url: "univrm/shaders/mtoon/"
---

[How to use MToon](https://www.slideshare.net/VirtualCast/vrm-mtoon)

# About MToon
MToon aims for making Japanese anime expressions. It is achieved by mixing `Lit Color` and `Shade Color` based on Lighting parameters and light source environment. 

|{{< img src="images/vrm/mtoon_about.png" alt="alicia MToon" >}}|
|-----|
|Apply MToon to the 3D model``Alicia``|

# For users who want to have a quick setup
## Common items
- Select the target material and change the shader to `VRM/MToon`
- Click the shader panel and set the same texture in `Color->Lit Color, Alpha` and `Color->Shade Color`
- Set white color in `Color->Lit Color, Alpha` and set the preference shade color in `Color->Shade Color`
- Set the preference value in `Shading->Toony`. Make the lit color and shade color sharp:`1`
- Set the texture in `Rim->Additive` (equivalent to `sphere map` or `Matcap`)
- If outline is necessary, select `WorldCoordinates` in `Outline->Width->Mode`. Select `None` if outline is not needed
- Set the value with good appearance in `Outline->Width->Width`

## General material
- Choose `Shading Shift` and set `0`
- Choose `Shading Toony->Shadow Receive Multiplier` and set `1`

## Set materials not being shadowed too much such as the character's face
- Choose `Shading Shift` and set a negative value
- Choose `Shading Toony->Shadow Receive Multiplier` and set `0`

# Setting items
## Preliminary
Select the target material and change the shader to VRM/MToon.

|{{< img src="images/vrm/set_mtoon.png" alt="select MToon" >}}|
|-----|
|Change the material shader to VRM/MToon|

## Rendering
|{{< img src="images/vrm/mtoon_inspector_rendering.png" alt="MToon Rendering" >}}|
|-----|
|The items included in the Rendering Inspector|

Set the rendering type and cull mode in `Rendering`.

### Rendering Type
Set whether the material is opaque or semi-transparent.

- Opaque
    - For rendering performance, it is recommended to set `Opaque`.
- Cutout
    - Although it is opaque, it refers to the alpha value in `Color->Lit Color, Alpha`. Therefore, it skips rendering for places having smaller value than `Color->Alpha->Cutoff`.

- Transparent
    - The opacity based on the alpha value in `Color->Lit Color, Alpha`. 
    - The downside is that outline rendering cannot be performed correctly.

### Cull Mode
Set which side of the polygon to be rendered.

- Back
    - Render the front side. Generally selecting "Back" is recommended.
- Front
    - Render the back side.
- None
    - Render the both sides.

### Alpha
Required if choosing `Rendering Type->Cutout`.

- Cutoff (`Color->Alpha`)
    - Set the threshold value for not rendering.

## Color
Set the rendering color.
The texture and color are multiplied.
Set the color hit by the light ray in `Lit Color, Alpha` and set the color not hit by the light ray in `Shade Color`.  
Also, set the the alpha value in `Lit Color, Alpha` for opacity information.

## Lighting
### Shading Shift
Adjust the threshold value of the lit color and shade color for how the light ray hits the object.
When the value is `0`, it is the normal lighting.
When the value is negative, it becomes the lighting with anime-like, wide range of lit color. 
It is necessary to disable the self-shadow with setting the value to `0` in `Shadow Receive Multiplier` according to the displayed warning message.

### Shading Toony
Set whether to smoothly change the lit color and shade color around the threshold value in `Shade Shift`.
When the value is `0`, it becomes realistically smooth like a general Lambert model.
When the value is `1`, it becomes animation-style lighting. The lit color and shade color change rapidly around the threshold value.

### Shadow Receive Multiplier
Set the influence of the self-shadow and shadow.
``0``: Not affected.
``1``: Affected.

### LightColor Attenuation
Set the influence of the light source color.
``0``: Affected by the light source color.
``1``: Not affected by the light source color. It only reflects the luminance of the light source color.

### Rim Additive
Display additional light sources based on the relationship between the camera and the normal.
In general it is called sphere map or matcap.

### Emission
Set the constant color regardless of the light source environment.

### Normal Map
Set the normal map.
Set the strength value in the box on the right.

## Outline
Set the outline.

### Width Mode
- None
    - The outline is not rendered
- WorldCoordinates
    - Render the outline of the constant width for the world coordinate
- ScreenCoordinates
    - Render the outline of the constant width for the screen coordinate

### Width
Set the width of the outline.
The unit of distance is meter when `Width Mode->WorldCoordinates` is chosen.

### Color Mode
- FixedColor
    - Render with the fixed color
- MixedLighting
    - Multiply the influence of Lighting

### Color
Set the outline color.

### Color Lighting Mix
Set the multiplier coefficient when `Color Mode->MixedLighting` is chosen.
