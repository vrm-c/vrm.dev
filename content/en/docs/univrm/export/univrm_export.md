---
title: "UniVRM Export"
date: 2020-07-16T10:23:04+09:00
weight: 2
aliases: ["/en/univrm/univrm_export/", "/en/univrm/export/univrm_export/"]
---

| Terminology  | Meaning                     |
|--------------|-----------------------------|
| Root         | Topmost parent of an object |
| Hierarchy    | Root and its children       |

## v0.58~

{{< img src="images/vrm/export058_dialog.jpg" width="600" alt="vrm export" >}}

The export dialog is based on Unity's [EditorWindow](https://docs.unity3d.com/ScriptReference/EditorWindow.html)

### How to use

#### VRM Exporter Window

Open VRM Exporter Window by `VRM` -> `UniVRM-0.XX` -> `Export humanoid`

{{< img src="images/vrm/export058_menu.jpg" width="600" alt="vrm export" >}}

* You can directly pick up exportable target in the Project Window now. There is no need to put the Prefab in the scene first. 

#### Export Target Setup

* Drag the export target

{{< img src="images/vrm/export058_drag.gif" width="600" alt="vrm export" >}}

* Select the export target in the list

{{< img src="images/vrm/export058_select.gif" width="600" alt="vrm export" >}}

#### Conditions for Valid ExportRoot

{{< img src="images/vrm/export058_empty.jpg" width="600" alt="vrm export" >}}

The setting screen for ExportRoot will show up if the following conditions are satisfied:

* Must be topmost parent
* Root's Rotation and Scaling are Default (changing Translation is allowable)
* Has Animator component attached and Animator.avatar is humanoid
* Faces the positive Z-axis (identified by the bone positions of left and right feet)
* Contains active mesh in the Hierarchy

#### Exporter Interface

Please set up `Meta` and `ExportSettings`.
If you get warning messages, it is optional for you to correct those warnings or not.
If there is no error messages shown, you can go ahead and press `export` button at the lower right of the dialog.
Details about VRM size calculation [can be found here]({{< relref "vrm_size.md" >}}).

## Export Option

Here is a list of additional processing during export:

### Force T Pose

Force T-Pose before export.
If you can manually make T-Pose for model, it's ok without selecting this option.

### Pose Freeze

Model's normalization.
If Model's normalization is already done, there is no need to perform model normalization again. 
However, if additional parts are added into the model (not normalized yet), model normalization is required.
In Hierarchy, all GameObjects' rotation should be 0, and their scale should be 1 if a model has been normalized.

> In v0.58, the system can automatically identify whether the export target needs PoseFreeze

### UseExperimentalExporter

Exporter's Serializer version.
It will not affect the output whether this option is selected or not.

### UseSparseAccessor

Uses Sparse Accessor feature in GLTF: only records BlendShape vertices with non-zero value.

If the model contains multiple BlendShapes, enabling this can help reduce the file size.

### OnlyBlendshapePosition

BlendShape's Normal and Tangent will not be exported if this option is selected.
The file size can be reduced.
Be aware that errors may occur during import if the export target is made by UniVRM-0.53 or earlier versions.

### ReduceBlendshape

BlendShapes that are not referenced by BlendShapeClips will not be exported.
The file size can be reduced.

### ReduceBlendshapeClip

BlendShapeClip belonging to Preset.Unknown will not be exported.
Used in combination with ReduceBlendshape.

### RemoveVertexColor

Vertex color will not be exported.
In GLTF, there is no setting that can disable the color vertex usage.
UniVRM supports vertex color for `unlit` shader.

## List of Error Messages

Table for Error Messages in v0.56, v0.57 and v0.58

| message                                                  | 0.56  | 0.57               | 0.58                               |
|----------------------------------------------------------|-------|--------------------|------------------------------------|
| The Root translation, rotation and scale will be dropped | error | warn               | error (changing translation is OK) |
| Jaw bone                                                 | warn  | warn               | warn                               |
| Same name bone                                           | error | warn (auto-rename) | warn                               |
| Vertex color                                             | warn  | warn               | warn                               |
| Unknown shader                                           | warn  | warn               | warn                               |
| Require source                                           | error | error              | error                              |
| Require no parent                                        | ok    | ok                 | error (new)                        |
| Require Z+ forward                                       | ok    | ok                 | error (new)                        |
| Require animator                                         | error | error              | error                              |
| Require humanoid avatar                                  | error | error              | error                              |
| Require Title/Version/Author                             | error | error              | error                              |
| No active mesh                                           | error | error              | error                              |
| Prefab export                                            | error | error              | ok                                 |
| Springbone validation                                    | ok    | ok                 | warn                               |

### Require source

Please select a valid object that can be exported as VRM file in the scene.

### Require animator

Animator component cannot be found in Root (non-humanoid).

### Require animator.avatar

avatar cannot be found in Root's Animator (non-humanoid).

### Animator.avatar is not valid

Animator.avatar is not humanoid.

### Animator.avatar is not humanoid. Please change model's AnimationType to humanoid

Please change the setting to `humanoid` (from Inspector: `FBX Import` -> `rig` -> `AnimationType`).

### Require Title

Please enter the title of this model in the dialog.

### Require Version

Please enter the version of this model in the dialog.

### Require Author

Please enter the author of this model in the dialog.

### No active mesh

Export target doesn't have `active` mesh.

### FileName '{0}' is too long

Material, Texture and Mesh names are too long.
Please rename them.

### The Root translation, rotation and scale will be dropped

A model is allowed to export if Root's translation, rotation and scale are not Default values. 
However, those values will be lost.
We recommend moving this object in the Hierarchy to be Root's child.

### Jaw bone is included. It may not what you intended. Please check the humanoid avatar setting screen

Jaw (chin) bone is included in humanoid setting.
There is a possibility that the jaw bone is automatically assigned during FBX import. 
As a result, facial parts (e.g. bangs) are mis-recognized as jaw and being assigned to Jaw bone.
Therefore, bangs will have weird movements due to this issue.
Please remove this setting in Inspector `FBX Importer` -> `rig`

### There are bones with the same name in the hierarchy. They will be automatically renamed after export

A model is allowed to export if there are bones with the same name in this model. 
Only the warning message will be given in Export dialog. 
Those bones will be renamed automatically.

### This model contains vertex color

If you see this message, there are meshes that contain vertex color in the Hierarchy.

| Vertex Color       | If contained | Behavior                     |
|--------------------|--------------|------------------------------|
| Before UniVRM-0.53 | not applied  | ignore vertex color effect   |
| From UniVRM-0.54   | applied      | show vertex color effect     |

If `Unlit` is used, there is no setting that can disable vertex color usage.
If necessary, please choose `Remove Vertex Color` option to direct remove vertex color data from the model.

### unknown material '{0}' is used. this will export as `Standard` fallback 

Materials other than Standard, Unlit, MToon will be defaulted to Standard.

## v0.57

{{< img src="images/vrm/export_dialog_56.jpg" width="600"alt="vrm export" >}}
<hr>

The export dialog is based on Unity's [ScriptableWizard](https://docs.unity3d.com/ScriptReference/ScriptableWizard.html).
We will improve it in the later version.
