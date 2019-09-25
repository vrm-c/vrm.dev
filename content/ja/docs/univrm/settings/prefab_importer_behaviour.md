---
Title: PrefabがImportされるタイミングと上書きの注意
---

## 0.49

Material, BlendShapeAvatarを上書きしなかったときに既存のアセット参照をセットするようにしました。

## 0.46

Material, BlendShapeAvatar, BlendShapeClip は既存のファイルがあったときに上書きしないようにしました。

## 0.45以前

Assets化のフォルダに対してVRMが

* 新規に作成されたとき
* ExporterでAssets下を指定したとき(能動的Importを呼び出しあり)
* ProjectのLibraryに該当するファイルが無い時(git等でcloneしたとき)

にImportされ付随するアセット(Mesh, Texture, Material, BlendShape, Prefabなど)が上書きされます。
