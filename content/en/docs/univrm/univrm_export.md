---
title: "UniVRM Export"
date: 2020-07-16T10:23:04+09:00
url: /en/univrm/univrm_export/
weight: 2
---

## Export Dialog

v0.56

{{< img src="images/vrm/export_dialog_56.jpg" width="600"alt="vrm export" >}}
<hr>

Below is the export dialog in v0.56.
We will improve it in the later version.

| Terminology  | Meaning                       |
|--------------|-------------------------------|
| Root         | Topmost parent of an object   |
| Hierarchy    | Root's children               |

### Warning Message (marked with orange frame)

The model can be exported, but there is no guarantee that this exported model's behaviors/looking are what you expect.

Here is a list of warning messages:

#### Jaw bone is included. It may not be what you intended. Please check the humanoid avatar setting screen 

Jaw (chin) bone is included in humanoid setting.
There is a possibility that the jaw bone is automatically assigned during FBX import. 
As a result, facial parts (e.g. bangs) are mis-recognized as jaw and being assigned to Jaw bone.
Therefore, bangs movements will have weird movements due to this issue.
Please remove this setting in Inspector `FBX Importer` -> `rig`

#### This model contains vertex color

If you see this message, there are meshes that contain vertex color in Hierarchy.

| Vertex Color       | If contained | Behavior                     |
|--------------------|--------------|------------------------------|
| Before UniVRM-0.53 | not applied  | ignore vertex color effect   |
| From UniVRM-0.54   | applied      | show vertex color effect     |

If `Unlit` is used, there is no setting that can disable vertex color usage.
If necessary, please choose `Remove Vertex Color` option to direct remove vertex color data from the model.

#### unknown material '{0}' is used. this will export as `Standard` fallback 

Materials other than Standard, Unlit, MToon will be defaulted to Standard.

### Error Message (marked with red frame)

Export is not allowed. Problems shown in the red frame need to be resolved.
If Error Message is shown in the dialog, `export` button is disabled.

Here is a list of error messages:

#### Require source

Please select a valid object that can be exported as VRM file in the scene.

#### The Root transform should have Default translation, rotation and scale

Starting from v0.56, Root (topmost parent) object with non-default values for translation, rotation, and scale is not allowed to export.
In previous versions we found it would cause errors sometimes if Root's transform is not Default.
Instead, we recommend moving this object in the Hierarchy to be Root's child.

#### Require animator

Animator component cannot be found in Root (non-humanoid).

#### Require animator.avatar

avatar cannot be found in Root's Animator (non-humanoid).

#### Animator.avatar is not valid

Animator.avatar is not humanoid.

#### Animator.avatar is not humanoid. Please change model's AnimationType to humanoid

Please change the setting to `humanoid` (from Inspector: `FBX Import` -> `rig` -> `AnimationType`).

#### Find duplicate Bone names. Please check model's bone names

Export is not allowed in v0.56 if there are GameObjects with the same name in Hierarchy.
In previous versions we found it would cause errors sometimes if bones with the same name are used.
Please rename them.

#### Require Title

Please enter the title of this model in the dialog.

#### Require Version

Please enter the version of this model in the dialog.

#### Require Author

Please enter the author of this model in the dialog.

#### No active mesh

Export target doesn't have `active` mesh.

#### FileName '{0}' is too long

Material, Texture and Mesh names are too long.
Please rename them.

### Export Option (marked with blue frame)

Additional processing during export can be chosen here.

#### Force T Pose

Force T-Pose before export.
If you can manually make T-Pose for model, it's ok without selecting this option.

#### Pose Freeze

Model's normalization.
If Model's normalization is already done, there is no need to perform model normalization again. 
However, if additional parts are added into the model (not normalized yet), model normalization is required.
In Hierarchy, all GameObjects' rotation should be 0, and their scale should be 1 if a model has been normalized.

#### UseExperimentalExporter

Exporter's Serializer version.
It will not affect the output whether this option is selected or not.

#### UseSparseAccessor

If the model contains multiple BlendShapes, selecting this option can help reduce the file's size.

#### OnlyBlendshapePosition

BlendShape's Normal and Tangent will not be exported if this option is selected.
The file size can be reduced.
Be aware that errors may occur during import if the export target is made by UniVRM-0.53 or earlier versions.

#### ReduceBlendshape

BlendShapes that are not referenced by BlendShapeClips will not be exported.
The file size can be reduced.

#### ReduceBlendshapeClip

BlendShapeClip belongs to Preset.Unknown will not be exported.
Used in combination with ReduceBlendshape.

#### RemoveVertexColor

Vertex color will not be exported.
In GLTF, there is no setting that can disable the color vertex usage.
UniVRM supports vertex color for `unlit` shader.
