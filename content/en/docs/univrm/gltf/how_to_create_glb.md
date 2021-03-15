---
title: GLB Export
date: 2020-08-03T16:07:54+09:00
weight: 4
aliases: ["/en/dev/univrm-0.xx/gltf/how_to_create_glb/"]
tags: ["gltf"]
---

Starting with `v0.68.0`, the `glb` file can be create with `UniGLTF` module.

The procedure for creating a glb file is described as follows:

### 1. Open `UniGLTF/Export UniGLTF-2.X.Y`

At the top of Unity Editor, click `UniGLTF` -> `UniGLTF-2.X.Y` to open the dialog:

![image](/images/unigltf/glb_export_dialog.jpg)

### 2. Assign a GameObject to `ExportRoot`

From the Hierarchy window, drag and drop a GameObject into the `ExportRoot` field, 
or you can click ◎ button on the right of the `ExportRoot` field and select a GameObject from the dropdown list.

* Note that the root (topmost parent) of a GameObject you select should not be a `GLTF` node, but a node stored in the scene with default position, rotation and scale.

### 3. Click `Export` button

A SaveFileDialog will pop up, choose a directory and export the GameObject as GLB.

## Exportable Components for GLB

* `MeshRenderer + MeshFilter` (Attach them to the child other than the topmost parent)
* `SkinnedMeshRenderer` (Attach it to the child other than the topmost parent)
* `Animation` (Attach it to the topmost parent. For rotation, input the keyframe of Quaternion. Translation, rotation and scaling are supported. BlendShape is not supported yet)

## Available Shader

* `Standard`
* `Unlit/Color`, `Unlit/Texture`, `Unlit/Transparent`, `Unlit/Transparent Cutout`, `UniGLTF/UniUnlit`

----

# Before `v0.68.0`

## Procedure

The following is the procedure for creating the `glb` file with UniGLTF module:

### 1. Create an empty scene.


### 2. Create an empty GameObject (topmost parent). No translation, rotation and scale.

The topmost parent (root) should not be a GLTF GameObject, but a GameObject in the scene. 
Its translation, rotation and scale should be default values.

### 3. Select an object you want to export and add it to the created parent GameObject.
(In this example a Cube object is created. You can add arbitrary objects such as Prefab.)

![image](/images/wiki/root_cube.png)

### 4. Select the topmost parent GameObject and click `Export` (`UniGLTF-x.xx`->`Export`).

![image](/images/wiki/menu_unigltf_export.png)

### 5. Enter the file name and the selected GameObject can be exported as the `glb` file. 

## Exportable Components for GLB

* `MeshRenderer + MeshFilter` (Attach them to the child other than the topmost parent)
* `SkinnedMeshRenderer` (Attach it to the child other than the topmost parent)
* `Animation` (Attach it to the topmost parent. For rotation, input the keyframe of Quaternion. Translation, rotation and scaling are supported. BlendShape is not supported yet)

## Available Shader

* `Standard`, `Unlit/Color`, `Unlit/Texture`, `Unlit/Transparent`, `Unlit/Transparent Cutout` and `UniGLTF/UniUnlit`
