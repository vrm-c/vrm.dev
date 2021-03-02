---
title: "Mesh Utility"
date: 2021-03-02T12:22:00+09:00
weight: 6
tags: ["gltf"]
---

# MeshUtility

Mesh processing tool in Unity platform.

Current available functions: `MeshSeparator`, `MeshIntegrator`, `StaticMeshIntegrator` and `BoneMeshEraser`.

## Example of Usage

Here we show how to use `MeshSeparator`. The usages for all the functions are roughly the same.

Suppose we want to split meshes contained BlendShape.
We first select a model GameObject (or drag and drop a GameObject to TargetObject field shown below):

{{< img src="images/vrm/mesh_utility_exp1.jpg" width="200" >}}
<hr>

At the top of Unity Editor, click `UniGLTF` -> `MeshUtility` -> `MeshProcessing Wizard` to display Mesh Processing Window:

{{< img src="images/vrm/mesh_utility_en_exp2.jpg" width="800" >}}
<hr>

Click `Process` to generate the output (GameObject) and export it by `VRM0` -> `Export UniVRM-0.xx`:

{{< img src="images/vrm/mesh_utility_exp3.jpg" width="300" >}}
<hr>

The split meshes are also saved in the `Assets` folder.

In this example, the model's mesh are split into two parts: face and body:

Face: with BlendShape      | Body: without BlendShape
:-------------------------:|:-------------------------:
{{< img src="images/vrm/mesh_sep_result_1.jpg" width="200" >}} | {{< img src="images/vrm/mesh_sep_result_2.jpg" width="200" >}}

### MeshSeparator

Separate meshes contained BlendShape. The BlendShape size can be potentially reduced.

### MeshIntegrator

Integrate all the meshes of a (prefab) GameObject.

### StaticMeshIntegrator

Integrate all the static meshes of a (prefab) GameObject (Root and its children).

### BoneMeshEraser

Eliminate meshes associated with the bones in EraseRoot hierarchy. For instance, First-Person usage for VR applications.

