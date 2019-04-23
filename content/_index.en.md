---
title: "VRM"
date: 2018-04-16T16:30:00+09:00
layout: vrm_index
---
{{< img src="images/vrm/vrm_topheader.png" alt="VRM - humanoid 3d avatar format for VR" >}}

# VRM - 3D Avatar File Format for VR -

"VRM" is **a file format for handling 3D humanoid avatar (3D model) data for VR applications**. It is based on glTF 2.0. Anyone is free to use it. In addition, a standard implementation ([UniVRM](https://github.com/vrm-c/UniVRM)) in c# that can import and export VRM file in [Unity](https://unity3d.com) is released as open source.

---

## About VRM

* [What is "VRM"? What can VRM do?](./vrm_about/)
	* [What is VRM?](./vrm_about/#what-is-vrm)
	* [What can you do with VRM?](./vrm_about/#what-can-you-do-with-vrm)
	* [VRM features](./vrm_about/#vrm-features)
	* [License data settings in VRM file](./vrm_about/#license-data-settings-in-vrm-file)

* [How to make VRM file](./how_to_make_vrm/)
	* [Conversion from existing 3D model](./how_to_make_vrm/#conversion-from-existing-3d-model)

* [How to view VRM file](./how_to_view_vrm/)
    * [Import VRM file into VRM Viewer](./how_to_view_vrm/#import-vrm-file-into-vrm-viewer)
	* [Import VRM file into Unity Project](./how_to_view_vrm/#import-vrm-file-into-unity-project)
	* [Import VRM file into 3D Builder](./how_to_view_vrm/#import-vrm-file-into-3d-builder)
	* [Upload / Download VRM file](./how_to_view_vrm/#upload-download-vrm-file)

* [What applications that support VRM?](./vrm_applications/)
	* [3D model submission platform](./vrm_applications/#3d-model-submission-platform)
    * [Character maker](./vrm_applications/#character-maker)
    * [Live streaming tool](./vrm_applications/#live-streaming-tool)
    * [Metaverse](./vrm_applications/#metaverse)
    * [Game](./vrm_applications/#game)
    * [Viewer](./vrm_applications/#viewer)

---

## VRM Format Technical Specifications
* [What is GLTF?](./gltf_about/)
* [VRM specifications](./vrm_spec/)
    * [About T-pose](./vrm_tpose/)

---

## [UniVRM](https://github.com/vrm-c/UniVRM) (VRM standard implementation for Unity) Specifications
* [Download](https://github.com/vrm-c/UniVRM/releases)
* [Install UniVRM](./univrm/univrm_install/)
* [UniVRM workflow](./univrm/univrm_workflow/)

* UniVRM components
    * [Model information](./univrm/components/univrm_meta/)
    * [BlendShape](./univrm/components/univrm_blendshape/)
    * [First-person view](./univrm/components/univrm_firstperson/)
    * [Eye control](./univrm/components/univrm_lookat/)
    * [Spring bone](./univrm/components/univrm_secondary/)

* [Available shaders in UniVRM](./univrm/shaders/univrm_shaders/)
    * [UniVRM-0.44 material](./univrm/shaders/univrm_shaders_044/) 
    * [MToon setting](./univrm/shaders/mtoon/)

* API
    * [API change history](./univrm/api/univrm_api_history/)
    * [Import VRM model at runtime](./univrm/api/univrm_import_runtime/)
    * [Use BlendShape at runtime](./univrm/api/univrm_use_blendshape/)
    * [Coordinate transformations](./univrm/api/univrm_coordinate/)
    * [How to use first-person mode](./univrm/api/univrm_use_firstperson/)
    
* [FAQ](./univrm/univrm_faq/)