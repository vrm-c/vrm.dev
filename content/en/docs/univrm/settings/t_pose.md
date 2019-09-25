---
Title: T Pose Normalization for Model
---

Work In Progress

## Supplementary Information about T-Pose
When normalizing a model, the system requires the model posing as T-Pose. Therefore, to make a model in a T-Pose:

* Navigate to `UniVRM-0.XX` -> `Export humanoid` from the menu bar and check `force T-Pose`
* Another option is adjusting the rotation of the arm etc. manually to make a T-Pose (without checking the `force T-Pose` box)

Either one described above is OK. If the result made by the first option (automatic T-Pose) is not looking well, you can try the second one, which is the method for making a T-Pose manually.

Also, please avoid repeatedly normalizing a model that was already normalized before as much as you can. Errors after T-Pose process might be accumulated if you do so.

The `Force T-Pose` box becomes unchecked by default if the model's normalization is already done before. That said, the system will detect whether the Meta component is attached to the model.

## Common Problems

* The position of the jaw changes: There is a possibility that the position of the jaw changes during the T-Pose process. If this is the case, please unassign the `jaw` (chin) bone from the model's (FBX) `Import setting` -> `Rig`. For VRM, there is no problem with the program when unassinging the jawbone that is not used by the model.

* Facial parts (bangs, etc.) move instead of jaw: Please check whether the bone (bangs, etc.) is misassigned to the `jaw` (chin) in the model's (FBX) `Import setting` -> `Rig`. There is a possibility that the position of the jaw changes during the T-Pose process. As a result, bangs, etc. move unexpectedly.
