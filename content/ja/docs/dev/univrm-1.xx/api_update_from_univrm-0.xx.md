---
title: APIの変更点
date: 2020-04-21T17:12:49+09:00
url: "/dev/univrm-1.xx/api_update_from_univrm-0.xx/"
---

## Import

* VRMをインポートするために（`UniGLTF.ImporterContext.Load`）使用されるクラス`VRM.VRMImporterContext`は削除されました。UniVRMインポーターはVRMデータ（`UniVRM10.VrmLoader.CreateVrmModel`）を`VrmLib.Model`に保存してからUnityに構築します
* `UniVRM10.UnityBuilder.ToUnityAsset`は`VrmLib.Model`からUnity Assetにデータを転送します。0.XXの `UniGLTF.ImporterContext.ShowMeshes`が`ToUnityAsset`のboolパラメータに変更されました
* `UniVRM10.ComponentBuilder.Build10`はVRM GameObjectに対してMeta, BlendShape, LookAtなどのコンポーネントをセットアップします

### Example
```cs
    using System;
    using System.IO;
    using UnityEngine;

    public class MyClass : MonoBehaviour
    {
        // ...

        /**
         * VRMインポート
         *
         * @return vrmオブジェクト
         */
        public GameObject Import()
        {
            // ファイルパス
            var path = "../YourModel.vrm";
            var model = UniVRM10.VrmLoader.CreateVrmModel(path);

            // UniVRM-0.XXのコンポーネントを構築する
            var assets = UniVRM10.RuntimeUnityBuilder.ToUnityAsset(model, showMesh: false);

            // showRenderer = false のときに後で表示する例
            foreach (var renderer in assets.Renderers)
            {
                renderer.enabled = true;             
                // カリングを避ける
                if (renderer is SkinnedMeshRenderer skinned)
                {
                    skinned.updateWhenOffscreen = true;
                }
            }

            UniVRM10.ComponentBuilder.Build10(model, assets);
            var vrmObject = assets.Root; 　　　　　　 

            return vrmObject;
        }

        // ...
    }
```

## Export

* VRMをエクスポートするために（`UniGLTF.gltfExporter.Export`）使用されるクラス`VRM.VRMExporter`は削除されました。UniVRMエクスポーターはVRMデータ（`RuntimeVrmConverter.ToModelFrom10`）をVRM GameObjectから`VrmLib.Model`に転送してVRMファイルに保存します
* `Vrm10.ModelExtensions.ToGlb`はデータを`VrmLib.Model`からglbに転送します。`.glb`ファイルは`.vrm`と交換可能です。UnityとGLTF間の座標変換は `VrmLib.ModelExtensionsForCoordinates.ConvertCoordinate`です

### Example
```cs
    using System;
    using System.IO;
    using UnityEngine;

    public class MyClass : MonoBehaviour
    {
        // ...

        /**
         * VRMエクスポート
         */
        public void Export()
        {
            // ファイルパス
            var path = "../YourModel.vrm";
            var model = UniVRM10.VrmLoader.CreateVrmModel(path);
            var assets = UniVRM10.RuntimeUnityBuilder.ToUnityAsset(model, showMesh: true);
            UniVRM10.ComponentBuilder.Build10(model, assets);　
            
            // 1.0でエクスポート
            var exporter = new UniVRM10.RuntimeVrmConverter();
            var model = exporter.ToModelFrom10(asset.Root);

            // 右手系に変換
            VrmLib.ModelExtensionsForCoordinates.ConvertCoordinate(model, VrmLib.Coordinates.Gltf);
            var exportedBytes = Vrm10.ModelExtensions.ToGlb(model);
            
            // 1.0モデルを書き出す
            var path = "vrm10.vrm";
            File.WriteAllBytes(path, exportedBytes);
        }

        // ...
    }
```

## LookAt

* LookAt関連クラス`VRM.VRMLookAtBoneApplyer`、`VRM.VRMLookAtBlendShapeApplyer`、`VRM.VRMLookAtHead`が`UniVRM10.VRMBlendShapeProxy`に統合されました
* `VRM.LookAtType`は`UniVRM10.VRMBlendShapeProxy.LookAtTypes`に変更されました
* `VRMLookAtHead.Target`は`VRMBlendShapeProxy.Gaze`に置き換えられました
* `UniVRM10.VRMBlendShapeProxy.LookAtTargetTypes`を追加しました。自動で頭に対するyaw・pitch角度を取得するか、yaw・pitch角度をセットするの選択肢があります

### Example
```cs
    using System;
    using System.IO;
    using UnityEngine;
    using UniVRM10;

    public class MyClass : MonoBehaviour
    {
        [SerializeField]
        private GameObject _vrmModel;
        
        [SerializeField]
        private GameObject _targetObject;

        // ...

        public void SpecifyLookAtTarget()
        {
            var proxy = _vrmModel.GetComponent<VRMBlendShapeProxy>();
            proxy.LookAtTargetType = VRMBlendShapeProxy.LookAtTargetTypes.CalcYawPitchToGaze;
			
            // LookAtターゲットを指定する
            _vrmModel.GetComponent<VRMBlendShapeProxy>().Gaze = _targetObject.transform;
            
            // 頭に対するyaw・pitch角度を取得する
            var (yaw, pitch) = proxy.GetLookAtYawPitch();
        }

        public void SpecifyYawPitchAngle()
        {
            var proxy = _vrmModel.GetComponent<VRMBlendShapeProxy>();
            proxy.LookAtTargetType = VRMBlendShapeProxy.LookAtTargetTypes.SetYawPitch;
			
            // yaw・pitch角度をセットする
            proxy.SetLookAtYawPitch(0, 0);
        }

        // ...
    }
```
