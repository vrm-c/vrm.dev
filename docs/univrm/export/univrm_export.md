---
date: 2020-07-08
weight: 2
aliases: ["/univrm/univrm_export/", "/univrm/export/univrm_export/"]
tags: ["unity"]
---

# VRM Export Dialog

| Terminology         | Meaning                                                   |
|--------------|--------------------------------------------------------|
| Root         | Topmost parent of an object |
| Hierarchy    | Root and its children                                     |
## v0.58~

![vrm export](/images/vrm/export062_dialog.png)

The export dialog is based on Unity's [EditorWindow](https://docs.unity3d.com/ScriptReference/EditorWindow.html)

### How to use

#### VRM Exporter Window

Open VRM Exporter Window by `VRM0 -> Export UniVRM-0.XX`

![vrm_menu](/images/vrm/vrm_menu.jpg)

Previous versions:

![UniVRMExportHumanoid](/images/vrm/UniVRMExportHumanoid.jpg)

* You can directly pick up exportable target in the Project Window. There is no need to put the Prefab in the scene first. 

#### Export Target Setup

* Drag

![vrm export](/images/vrm/export058_drag.gif)

* Selector

![vrm export](/images/vrm/export058_select.gif)

#### Conditions for Valid ExportRoot

![vrm export](/images/vrm/export058_empty.jpg)

The setting screen for ExportRoot will show up if the following conditions are satisfied:

* Must be topmost parent
*"Root's Rotation and Scaling are Default (changing Translation is allowable)
* Has Animator component attached and Animator.avatar is humanoid
* Faces the positive Z-axis (identified by the bone positions of left and right feet)
* Contains active mesh in the Hierarchy

#### Exporter Interface

Please set up `Meta` and `ExportSettings`.If you get warning messages, it is optional for you to correct those warnings or not.If there is no error messages shown, you can go ahead and press `export` button at the lower right corner of the dialog.Details about VRM size calculation [can be found here](/univrm/export/vrm_size).

## Export Option

Here is a list of additional processing during export:

### Force T Pose

Force T-Pose before export.If you can manually make T-Pose for model, it's ok without selecting this option.

### Pose Freeze

Model's normalization.If Model's normalization is already done, there is no need to perform model normalization again. However, if additional parts are added into the model (not normalized yet), model normalization is required.In Hierarchy, all GameObjects' rotation should be 0, and their scale should be 1 if a model has been normalized.

> In v0.58, the system can automatically identify whether the export target

### UseExperimentalExporter

Exporter's Serializer version.It will not affect the output whether this option is selected or not.

### UseSparseAccessor

Uses Sparse Accessor feature in GLTF: only records BlendShape vertices with non-zero value.If the model contains multiple BlendShapes, enabling 

### OnlyBlendshapePosition

BlendShape's Normal and Tangent will not be exported if this option is selected.The file size can be reduced.Be aware that errors may occur during import if the export target is made by UniVRM-0.53 or earlier versions.

### ReduceBlendshape

BlendShapes that are not referenced by BlendShapeClips will not be exported.The file size can be reduced.

### ReduceBlendshapeClip

BlendShapeClip belonging to Preset.Unknown will not be exported.Used in combination with ReduceBlendshape.

### RemoveVertexColor

Vertex color will not be exported.In GLTF, there is no setting that can disable the color vertex usage.UniVRM supports vertex color for `unlit` shader.

## List of Error Messages

| message                                                  | 0.56  | 0.57               | 0.58                     |
|----------------------------------------------------------|-------|--------------------|--------------------------|
| The Root translation, rotation and scale will be dropped | error | warn               | error (changing translation is OK)          |
| Jaw bone                                                 | warn  | warn               | warn                     |
| Same name bone                                           | error | warn (auto-rename) | warn                     |
| Vertex color                                             | warn  | warn               | warn                     |
| Unknown shader                                           | warn  | warn               | warn                     |
| Require source                                           | error | error              | error                    |
| Require no parent                                        | ok    | ok                 | error(new)              |
| Require Z+ forward                                       | ok    | ok                 | error(new)              |
| Require animator                                         | error | error              | error                    |
| Require humanoid avatar                                  | error | error              | error                    |
| Require Title/Version/Author                             | error | error              | error                    |
| No active mesh                                           | error | error              | error                    |
| Prefab export                                            | error | error              | No active mesh |
| Springbone validation                                    | ok    | ok                 | warn                     |

### Require source

Please select a valid object that can be exported as VRM file in the scene.

### Require animator.

Animator component cannot be found in Root (non-humanoid).

### Require animator.avatar

avatar cannot be found in Root's Animator (non-humanoid).

### Animator.avatar is not valid.

Animator.avatar is not humanoid.

### Animator.avatar is not humanoid. Please change model's AnimationType to humanoid.

Please change the setting to `humanoid` (from Inspector: `FBX Import` -> `rig` -> `AnimationType`).

### Require Title.

Please enter the title of this model in the dialog.

### Require Version.

Please enter the version of this model in the dialog.

### Require Author.

Please enter the author of this model in the dialog.

### No active mesh

No active mesh in hierarchy.

### FileName '{0}' is too long.

Material, Texture and Mesh names are too long. Please rename them.

### The Root translation, rotation and scale will be dropped

A model is allowed to export if Root's translation, rotation and scale are not Default values. However, those values will be lost.We recommend moving this object in the Hierarchy to be Root's child.

### Jaw bone is included. It may not what you intended. Please check the humanoid avatar setting screen 

The humanoid setting includes a jaw.
It may be automatically assigned unintentionally when importing FBX.
If you make a mistake and your bangs are part of your chin, and you input a pose to the chin, it may move slightly.
We recommend going back to the FBX importer's rig settings and unsetting it.
### There are bones with the same name in the hierarchy. They will be automatically renamed after export

A model is allowed to export if there are bones with the same name in this model. Only the warning message will be given in Export dialog. Those bones will be renamed automatically.

### This model contains vertex color

If you see this message, there are meshes that contain vertex color in the Hierarchy.

| Vertex Color    | If contained     | Behavior                     |
|-----------------|------------------|------------------------------|
| before UniVRM-0.53 | not applied   | ignore vertex color effect   |
| UniVRM-0.54~    | applied          | show vertex color effect     |

Although vertex colors are included in Unlit, there is no setting to not use them. If you don't need it, you can remove it with the `Remove Vertex Color` option.

### unknown material '{0}' is used. this will export as `Standard` fallback 
Materials other than Standard, Unlit, MToon will be defaulted to Standard.

## v0.57

![vrm export](/images/vrm/export_dialog_56.jpg)

The export dialog is based on Unity's [ScriptableWizard](https://docs.unity3d.com/ScriptReference/ScriptableWizard.html).We will improve it in the later version.

