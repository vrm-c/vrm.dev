---
title: "What is \"VRM\"? What can VRM do?"
linkTitle: "What is “VRM”? What can VRM do?"
date: 2018-04-16T16:30:00+09:00
url: "/en/vrm_about/"
weight: 1
---

## What is VRM?

**VRM is a [GLTF](https://www.khronos.org/gltf/)-based, cross-platform file format that can handle the humanoid character/avatar (3D model data).**
The VRM file can be accessed in different environments such as game engines, Web, etc.
The current provided software, [UniVRM](https://github.com/vrm-c/UniVRM), can import and export VRM in Unity.

* VRM is formulated on top of the 3D standard format **glTF2.0** to handle the humanoid model 
* The humanoid motion (e.g. from motion capture) can be reproduced based on defined Humanoid bones in VRM
* All data including textures and materials is compacted as one file. To import the VRM model into applications, only one single file is needed 
* Facial expressions such as joy, angry, sorrow, fun, eye blinking and Japanese あいうえお are defined. They can be manipulated via the controller, facial capture, lip-sync from the audio. The eye blinking can be reflected periodically ➡️ [BlendShape]({{< relref "univrm_blendshape.md" >}})
* Support three types of shaders ➡️ [MToon]({{< relref "shader_mtoon.md" >}}), [Unlit]({{< relref "univrm_unlit.md" >}}), [PBR]({{< relref "univrm_standard.md" >}})
* Standardize eye gaze control to handle the different types of models ➡️ [eye gaze controlled by Bone]({{< relref "lookat_bone.md" >}}), [eye gaze controlled by BlendShape]({{< relref "lookat_blendshape.md" >}}), [eye gaze controlled by UV]({{< relref "lookat_uv.md" >}})
* An implementation of spring physics that does not rely on the physical engine is provided for setting up the model's hairs, clothes and so forth. ➡️ [SpringBone]({{< relref "univrm_secondary.md" >}})
* Avatar's **first-person view** is available in VR ➡️ [FirstPerson]({{< relref "univrm_firstperson.md" >}})
* Despite the Meta information such as Model Title and Author Name, with the advent of the VR era, Thumbnail and **License Information** are also included in the VRM file ➡️ [Meta]({{< relref "vrm_meta.md" >}})

As described above, VRM is not just a 3D model data. It is designed for being able to be used immediately after being loaded into applications.

## What can you do with VRM?

**The same avatar (VRM model) data can be used in any application that supports VRM**. As long as various VRM applications are made, the future will look like the one described below for sure...

* Create your own avatar with the character maker in VRM format 
* Use your own avatar to host a live streaming event and show up on your friends' live channels
* After the live streaming, start a VR game to explore the VR world with your own avatar 
* After the game, move to the chat room in the VR world. Use the same avatar character to hang out with friends
* Tomorrow join the VR study group in VR. Of course, the same avatar appearance

**By using your own avatar (3D model data) in VRM format, you can access various applications and games that support VRM**.

Live streaming, video creation, games, chat.... The virtual worlds are not connected with each other. Using VRM is the first step to bridge those virtual worlds.

{{< img src="images/vrm/VRM_WorldConnect_EN.png" alt="VRM applications" >}}

---

➡️ [Applications that support VRM]({{< relref "vrm_applications.md" >}})

## VRM features

In the past, handling **3D humanoid avatar (3D model)** in Virtual Reality, Virtual YouTuber, etc. was not trivial as it was necessary to develop unique systems for applications and fine-tune the 3D model data due to...

* The output data is depend on how creators make the 3D model and what modeling tools are used
    * The coordinate system, scale, initial pose, and the way to express expressions are all different...
    * Needless to say, the way bones put into the 3D model is also different

* Each company has its own specifications for handling the 3D model data, which are way more complex than usual. Also, the necessary information about their file formats is not fully provided
    * Whether the FBX file, which is compatible with various software, is viable for an application and which version of the application can process the FBX file are main issues concerned by most of the users.

* There is not enough necessary information available from the viewpoint of using the 3D model data as Avatar
	* For example, in the first-person view, how to get the right viewpoint position, how to exclude head due to the view blocking issue and so on

With the use of avatar in VR applications grows exponentially, if the situations mentioned above remain unchanged, application developers and 3D model creators will have to spend double or triple effort. To improve the current situation, based on the humanoid character and avatar, we can do the followings:

* Effectively absorb and unify the differences from the model data
* Make handling the 3D model easy on the application side

Here we propose a **platform-independent, 3D avatar file format** called **VRM** that has the above features.

## Upload / Download VRM file

Currently you can submit your VRM files to [THE SEED ONLINE](https://seed.online/en/), [VRoid Hub](https://hub.vroid.com/en/) or [Nikoni 3D](https://3d.nicovideo.jp/). For Nikoni 3D, the submitted VRM file [can be found here](https://3d.nicovideo.jp/search?word_type=tag&word=VRM). Please check license information and try out those VRM models.
Also, when uploading a VRM file to Nikoni 3D, there is an option「バーチャルキャスト連携」(virtual cast cooperation) which can let users use the VRM model in [Virtual Cast](https://virtualcast.jp/).

## VRM application development

 ➡️ [VRM development]({{< relref "vrm_development.md" >}})
