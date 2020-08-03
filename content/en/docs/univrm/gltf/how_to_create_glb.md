---
title: GLB Export
---

## Procedure

The following is the procedure for creating the glb file with UniGLTF included in UniVRM:

1. Create an empty scene.


2. Create an empty GameObject (topmost parent). No translation, rotation and scaling.


3. Select an object you want to export and add it to the created parent GameObject.
(In this example a Cube object is created. You can add arbitrary objects such as Prefab.)

![image](/images/wiki/root_cube.png)

4. Select the topmost parent GameObject and click `Export`(`UniGLTF-1.xx`->`Export`).

![image](/images/wiki/menu_unigltf_export.png)

5. Enter the file name and the selected GameObject can be exported as the `glb` file. 

## Notes on components to be exported 

* `MeshRenderer + MeshFilter` (Please attach them to the child other than the topmost parent)
* `SkinnedMeshRenderer` (Please attach it to the child other than the topmost parent)
* `Animation` (Please attach it to the topmost parent. For rotation, please input the keyframe of Quaternion. Translation, rotation and scaling are supported. BlendShape is not supported yet)

## Available Shader

* `Standard`, `Unlit/Color`, `Unlit/Texture`, `Unlit/Transparent`, `Unlit/Transparent Cutout` and `UniGLTF/UniUnlit`
