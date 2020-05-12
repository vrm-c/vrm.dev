---
title: API Changes
date: 2020-04-21T17:12:49+09:00
url: "/en/dev/univrm-1.xx/api_update_from_univrm-0.xx/"
---

## Import

* The class `VRM.VRMImporterContext`, which is used to import VRM data (`UniGLTF.ImporterContext.Load`), has been removed. In UniVRM-1.XX the UniVRM importer will first store the VRM data (`UniVRM10.VrmLoader.CreateVrmModel`) in `VrmLib.Model` then port to Unity
* `UniVRM10.UnityBuilder.ToUnityAsset` will transfer the data from `VrmLib.Model` to Unity Asset. `UniGLTF.ImporterContext.ShowMeshes` in 0.XX has been changed to a bool parameter of `ToUnityAsset`
* `UniVRM10.ComponentBuilder.Build10` will set up components (Meta, BlendShape, LookAt, etc.) for the VRM GameObject

### Example
```cs
    using System;
    using System.IO;
    using UnityEngine;

    public class MyClass : MonoBehaviour
    {
        // ...

        /**
         * VRM import
         *
         * @return vrm object
         */
        public GameObject Import()
        {
            // file path
            var path = "../YourModel.vrm";
            var model = UniVRM10.VrmLoader.CreateVrmModel(path);

            // build UniVRM-0.XX model's components
            var assets = UniVRM10.RuntimeUnityBuilder.ToUnityAsset(model, showMesh: false);
            
            // enable renderer when RuntimeUnityBuilder.ToUnity(showMesh = false)
            foreach (var renderer in assets.Renderers)
            {
                renderer.enabled = true;             
                // avoid culling
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

* The class `VRM.VRMExporter`, which is used to export VRM data (`UniGLTF.gltfExporter.Export`), has been removed. In UniVRM-1.XX the UniVRM exporter will first transfer the VRM data (`RuntimeVrmConverter.ToModelFrom10`) from the VRM GameObject to `VrmLib.Model` then save to VRM file
* `Vrm10.ModelExtensions.ToGlb` will transfer the data from `VrmLib.Model` to glb. Note that glb format is exchangeable with VRM. The coordinate transformation between Unity and GLTF is `VrmLib.ModelExtensionsForCoordinates.ConvertCoordinate`

### Example
```cs
    using System;
    using System.IO;
    using UnityEngine;

    public class MyClass : MonoBehaviour
    {
        // ...

        /**
         * VRM export
         */
        public void Export()
        {
            // file path
            var path = "../YourModel.vrm";
            var model = UniVRM10.VrmLoader.CreateVrmModel(path);
            var assets = UniVRM10.RuntimeUnityBuilder.ToUnityAsset(model, showMesh: true);
            UniVRM10.ComponentBuilder.Build10(model, assets);　
            
            // export with UniVRM1.0
            var exporter = new UniVRM10.RuntimeVrmConverter();
            var model = exporter.ToModelFrom10(asset.Root);

            // transform to right-handed coordinate system
            VrmLib.ModelExtensionsForCoordinates.ConvertCoordinate(model, VrmLib.Coordinates.Gltf);
            var exportedBytes = Vrm10.ModelExtensions.ToGlb(model);
            
            // write out VRM1.0 file
            var path = "vrm10.vrm";
            File.WriteAllBytes(path, exportedBytes);
        }

        // ...
    }
```

## LookAt

* LookAt related classes `VRM.VRMLookAtBoneApplyer`, `VRM.VRMLookAtBlendShapeApplyer` and `VRM.VRMLookAtHead` has been integrated into `UniVRM10.VRMBlendShapeProxy`
* `VRM.LookAtType` has been changed to `UniVRM10.VRMBlendShapeProxy.LookAtTypes`
* `VRMLookAtHead.Target` has been replaced with `VRMBlendShapeProxy.Gaze`
* Added `UniVRM10.VRMBlendShapeProxy.LookAtTargetTypes`. You can choose to get yaw/pitch angle relative to head automatically or specify yaw/pitch angle

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
			
            // specify LookAt target
            _vrmModel.GetComponent<VRMBlendShapeProxy>().Gaze = _targetObject.transform;

            // get yaw/pitch angle relative to head
            var (yaw, pitch) = proxy.GetLookAtYawPitch();
        }

        public void SpecifyYawPitchAngle()
        {
            var proxy = _vrmModel.GetComponent<VRMBlendShapeProxy>();
            proxy.LookAtTargetType = VRMBlendShapeProxy.LookAtTargetTypes.SetYawPitch;
			
            // specify yaw/pitch angle
            proxy.SetLookAtYawPitch(0, 0);
        }

        // ...
    }
```
