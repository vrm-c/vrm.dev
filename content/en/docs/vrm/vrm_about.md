---
title: "What is \"VRM\"? What can VRM do?"
linkTitle: "What is “VRM”? What can VRM do?"
date: 2018-04-16T16:30:00+09:00
url: "/en/vrm_about/"
weight: 1
---

## What is VRM?
In the past, when trying to handle the **3D humanoid avatar (3D model)** in Virtual Reality, Virtual YouTuber, etc., it was necessary to develop an unique system for applications and fine-tune the 3D model data due to...

* The output data is depend on how creators make the 3D model and what modeling tools are used
    * The coordinate system is different. The scale is different. The initial pose is different. The expression is different...
    * Needless to say, the way bones put into the 3D model is also different

* The format of handling the 3D model data is different. Each company has its own specifications, which are way more complex than necessary. Also, the necessary information about their file formats is not fully provided
    * Whether the FBX file, which is compatible with various software, is viable for an application and which version of the application can process the FBX file are main issues concerned by most of the users.

* There is not enough necessary information available from the viewpoint of using the 3D model data as the Avatar
	* For example, in the first-person view, how to obtain the right position, how to get rid of the head display, which part of the body should be excluded and so on

With the use of avatar in VR applications grows up very fast, if the situations mentioned above remain unchanged, application developers and 3D model creators will have to spend double or triple effort. To improve the current situation, based on the humanoid character and avatar, the first step is to:

* Effectively absorb and unify the differences from the model data
* Make handling the 3D model easy on the application side

Here we propose a **platform-independent 3D avatar file format** that possesses the above characteristics called **VRM**.

---
## What can you do with VRM?
{{< img src="images/vrm/VRM_WorldConnect_EN.png" alt="VRM applications" >}}

**The same avatar (VRM model) data can be used in any application that supports VRM**. As long as various VR applications are ready, the future will look like the one described below for sure...

* Create your own avatar with character maker tools that support VRM
* Use your own avatar to host a live streaming event and show up on your friends' live channels
* After the live streaming, start a VR game to explore the VR world with your own avatar 
* Move to the chat room in the VR world after getting tired of the game. Use the same avatar character to hang out with friends
* Tomorrow join the VR study group in VR. Of course, the same avatar appearance

**By using your own avatar (VRM 3D model), you can easily access to various VRM-compatible applications and games**.

Live streaming, video creation, games, chat.... Now the virtual worlds are separated. The first step to connect the separated virtual worlds is VRM.

---
## VRM features
VRM can handle the humanoid character and avatar. **Although the current provided software to import and export VRM is for Unity, VRM itself is platform-independent**, which means VRM is also applicable to other engines and environments.

* Available to handle the humanoid character (3D model data) without limiting to a specific platform.
* VRM is based on the 3D standard format **glTF2.0**, which is the format added with constraints and extensions for handling the humanoid model. Ease of implementation as it is based on this standard format.
* All data including textures and materials is compacted as one file. To import a VRM model, only one single file needs to be handled.
* Based on the standard of the scale (1.00 = 1 m), the coordinate system (Y-up, -Z) and the bone structure (conforming to Unity Humanoid, T-Stance, no local rotation for each bone), a 3D model made by different modeling tools will not cause differences on the exported VRM model.
* Various techniques such as the BlendShape and the material transparency can be used to handle Avatar expressions. The difference in a technique can be absorbed and unified through API operation on the VRM side.
* For the use of avatar in VR, VRM supports **first-person view**.
* A standard implementation of the object swaying that does not rely on the physical engine is available for users to set up the character's hair, clothes and so on.
* A standard implementation of the PBR shader is provided. Beside the standard PBR, users can also choose the Toon shader or the Unlit shader.
* Not only the meta information such as the title and the author name, but also the thumbnail and the **license information specialized for avatars in the VR era** can be included in the VRM file.

VRM is assumed to be a 3D avatar format in the VR era and to be used in multiple applications. For example, when it comes to "VR communications with avatars online", it is possible to **send your own avatar data to your partners as they can see your avatar appearance in a shared virtual space**. However, there may be situations that cannot be handled by just redistribution rules based on conventional thinkings. Therefore, VRM has:

* Modification / Redistribution rules for the avatar（configurable from Creative Commons, etc.）

in addition to

* Permission to use the avatar and perform various acts

The new adding above is assumed to be the format in VR era.

---
## License data settings in VRM file
### Personation / Characterization Permission
#### A person who can perform with this avatar
* Only Author
* Explicitly Licensed Person
* Everyone

#### Permission to perform violent acts with this avatar
* Disallow
* Allow

#### Permission to perform sexual acts with this avatar
* Disallow
* Allow

#### For commercial use
* Disallow
* Allow

#### Other License Url
If there are any conditions not mentioned above, put the URL link of the license document here.

### License redistribution / modification
#### License Type
* Redistribution Prohibited
* [Copyright wavier (CC0)](https://creativecommons.org/publicdomain/zero/1.0/deed.en)
* [Creative Commons CC BY License(CC_BY)](https://creativecommons.org/licenses/by/4.0/deed.en)
* [Creative Commons CC BY NC License(CC_BY_NC)](https://creativecommons.org/licenses/by-nc/4.0/deed.en)
* [Creative Commons CC BY SA License(CC_BY_SA)](https://creativecommons.org/licenses/by-sa/4.0/deed.en)
* [Creative Commons CC BY NC SA License(CC_BY_NC_SA)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en)
* [Creative Commons CC BY ND License(CC_BY_ND)](https://creativecommons.org/licenses/by-nd/4.0/deed.en)
* [Creative Commons CC BY NC ND License(CC_BY_NC_ND)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en)
* Other

#### Other License Url
If “Other” is selected, put the URL link of the license document here.