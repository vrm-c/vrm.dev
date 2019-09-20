---
title: UniVRM workflow
linkTitle: Workflow
date: 2018-04-16T16:30:00+09:00
lastmod: 2019-09-20T13:00:00Z
url: /en/univrm/workflow/
weight: 2
aliases:
- /en/univrm/univrm_workflow/
---

## Workflow

{{< imgproc vrm_workflow Fit "960x540"/ >}}

## Prepare a 3D model that can be handled as "Humanoid" in Unity

Prepare a 3D model that can be [imported](https://docs.unity3d.com/2019.3/Documentation/Manual/HOWTO-importObject.html) into Unity such as FBX format. The model's bones must be set.

{{< imgproc drag_imported_model Fit "300x749"/ >}}

{{< imgproc model_conversion_menu Fit "900x214"/ >}}

First, drag the imported humanoid 3D model from the Project window to the Hierarchy window. Click the 3D model in the Hierarchy window then you will see the menu as shown in the Figure above. Click `Select` and then click `Rig`. Set `Animation Type` as `Humanoid`, and then click `Configure` button. A message box will pop up asking whether you want to save the current scene. Click `Save` to save it.

{{< imgproc set_model_as_humanoid Fit "900x178" >}}
Select <code>Humanoid</code> and click <code>Configure</code>
{{< /imgproc >}}

Now you will see the bone mapping details for this model. Unity will perform auto-mapping for each bone initially. You can check the model's Body, Head, etc. if an assigned component fits, the leftmost icon will show as green, otherwise it will show as red.

{{< imgproc bone_mapping Fit "600x722"/ >}}

### Correct bone mapping with rig configuration

To corrent bone mapping errors, click rightmost icon for a bone that has the failure bone mapping and select a component you think it fits this bone. To re-map the bones automatically, simply click `Mapping` in the lowerleft of the interface, click `clear` and then click `Automap`.

{{< imgproc bone_assignment Fit "900x630" >}}
Choose a right component to fit a bone
{{< /imgproc >}}

However, in some cases the bone mapping results are not reasonable even all of them appear as green as shown in the figure below:

{{< imgproc fix_eye Fit "271x139"/ >}}

We can see the Jaw and Eyes are assigned by the wrong components. As mentioned above, we can fix them by assigning the right corresponding components manually (e.g. eye_light_L will be replaced with eye_L). If the bone mappings are all right, click `Done` button to proceed to the next step.

## Export from menu

{{< imgproc univrm_export_humanoid Fit "400x225" >}}
In the Hierarchy window, if 3D model data with a setup-completed humanoid is selected, the <code>Export humanoid</code> option will become available (<code>VRM -&gt; UniVRM-0.53.0 -&gt; Export humanoid</code>). The file will be saved in the <code>Assets</code> folder by default.
{{< /imgproc >}}

{{< imgproc vrm_exporter Fit "245x450" >}}
Enter your name in the <code>Author</code> field and click the <code>Export</code> button.
{{< /imgproc >}}

### Force T Pose

Force the model pose to become [T-Pose](/en/docs/dev/vrm/vrm_tpose/) before removing rotation / scale.

#### Change to T Pose manually

You can manually change the model pose to [T-Pose](/en/docs/dev/vrm/vrm_tpose/) (done automatically by default). Make sure to deselect the `Force T Pose` checkbox.

### Pose Freeze

Whether the rotation / scale removal processing should be performed. It is **the process of normalizing model** for conforming to the VRM rules. Please make sure to check the boxes at the **first time of use**. After this process is done, all the components can work correctly.

#### Hierarchy normalization

{{< imgproc rot Fit "316x16" >}}
The model that has the bone rotation.
{{< /imgproc >}}

{{< imgproc rot_scale Fit "423x74" >}}
The model made by Z-UP coordinate system. The unit of distance is non-meter (Blender default).
{{< /imgproc >}}

Remove rotation and scale

{{< imgproc without_rot_scale Fit "423x37" >}}
Normalization completed.
{{< /imgproc >}}

#### Mesh normalization

{{< imgproc zup_mesh Fit "313x306" >}}
The mesh with non T-pose is stored in Z-UP coordinate system.
{{< /imgproc >}}

Use `SkinnedMeshRenderer.BakeMesh` to change the mesh to T-pose state and change the coordinate to Y-Up through the coordinate operation.

{{< imgproc yup_mesh Fit "321x305" >}}
The mesh with T-pose is stored in Y-UP coordinate system.
{{< /imgproc >}}

## Import

Please import VRM file into Assets folder

{{< imgproc alicia_imported Fit "254x688" >}}
Import the VRM model <code>Alicia</code>
{{< /imgproc >}}

Texture, Material and Prefab are automatically generated from VRM.

{{< imgproc vrm_prefab Fit "445x307"/ >}}

- If the VRM file is not shown in the project view, right click and select `refresh`
- If the Prefab file cannot be generated, right click the VRM file and select `reimport`
