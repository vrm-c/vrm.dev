---
title: T Pose Normalization for Model
aliases: ["/en/univrm/settings/t_pose/"]
---

## Supplementary Information regarding T-Pose
To normalize a model, the model with T-Pose is required.

If the model doesn't have T-Pose, you can make a T-Pose by doing any of the followings:

* Click `Menu` on top and select `Export humanoid` from `VRM` -> `UniVRM-0.XX` -> `Export humanoid`. The export dialog will pop up. Enable `force T-Pose` 
* Make T-Pose for the model by manually adjusting the rotation of the arm etc.

If the T-Pose made by the first option (automatic T-Pose) didn't go well, try to make T-Pose manually.

Also, if a model's normalization have been done once before, please avoid re-normalizing the model as much as you can as the accuracy may gradually deviate from standard.

The `Force T-Pose` option will be unchecked by default if the model's normalization was already done before. That being said, the system will detect whether the model contain Meta component.

## Common Issues

* Jaw's position is incorrect: during T-Pose process, there is a possibility that the jaw's position is different than before. If this is the case, please remove `jaw` (chin) bone setting from the model's (FBX) `Import setting` -> `Rig`. There is no influence on model if jaw bone is not used

* Facial parts (bangs, etc.) have weird movements: during T-Pose process, there is a possibility that the jaw's position is different than before. That is, facial parts (e.g. bangs) are mis-recognized as jaw and being assigned to Jaw bone. As such, bangs' movements become weird due to this issue. Please remove `jaw` bone setting from the model's (FBX) `Import setting` -> `Rig`.



