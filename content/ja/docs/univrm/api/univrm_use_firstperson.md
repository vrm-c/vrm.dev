---
title: "VRMFirstPersonの使い方"
linkTitle: "一人称モードの使い方"
date: 2018-05-29T10:00:00+09:00
url: /univrm/api/univrm_use_firstperson/
weight: 5
---

# [VRMFirstPersonの設定](../univrm_firstperson/)
VRMFirstPersonではRendererに対して設定があります。

|FirstPersonFlag               |レイヤー               |備考                                        |
|------------------------------|----------------------|--------------------------------------------|
|Both                          |default               |一人称と三人称で分ける必要のない部分に指定します|
|ThirdPersonOnly               |THIRDPERSON_ONLY_LAYER|一人称時に描画したくない部分に指定します        |
|FirstPersonOnly               |FIRSTPERSON_ONLY_LAYER|三人称時に描画したくない部分に指定します。自動作成した頭部無しモデルが使います|
|Auto                          |THIRDPERSON_ONLY_LAYER|実行時に一人称用モデルを自動で作成し、それをFIRSTPERSON_ONLY_LAYERに設定します|

実行時に**VRMFirstPerson.Setup**を呼び出すことで、上記のレイヤー設定を行うことができます。明示的に外部から呼び出してください。

# アプリケーションに追加の描画レイヤーを指定する

定数で以下のレイヤーを定義しています。

{{< highlight cs >}}
public class VRMFirstPerson : MonoBehaviour
{
    public const int FIRSTPERSON_ONLY_LAYER = 9;
    public const int THIRDPERSON_ONLY_LAYER = 10;

    // 省略
}
{{< / highlight >}}

|{{< img src="images/vrm/layer_setting.png" >}}|
|-----|
|9番と１０番にLayerを設定|

# 実行時にSetupを呼び出して、カメラにLayerMaskを設定する

* VRMFirstPerson.Setupの呼び出し
* 一人称カメラとその他のカメラに対してLayerMask

{{< highlight cs >}}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using VRM;

public class SetupExample : MonoBehaviour
{
    [SerializeField]
    Camera m_firstPersonCamera; // HMDのカメラ

    [SerializeField]
    LayerMask m_firstPersonMask; // HMDのカメラにセットするマスク default | FIRSTPERSON_ONLY_LAYER など

    [SerializeField]
    LayerMask m_otherMask; // HMDのカメラにセットするマスク default | THIRDPERSON_ONLY_LAYER など

    [SerializeField]
    VRMFirstPerson m_firstPerson;

    void Reset()
    {
        m_firstPerson = GameObject.FindObjectOfType<VRMFirstPerson>();
    }

    void Start()
    {
        foreach (var camera in GameObject.FindObjectsOfType<Camera>())
        {
            camera.cullingMask = (camera == m_firstPersonCamera)
                ? m_firstPersonMask
                : m_otherMask
                ;
        }

        // VRMFirstPersonの初期化
        if (m_firstPerson != null)
        {
            m_firstPerson.Setup();
        }
    }
}
{{< / highlight >}}
