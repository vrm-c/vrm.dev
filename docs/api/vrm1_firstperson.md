# `vrm-1.0` FirstPerson

[FirstPerson と Renderer の可視制御 ](/api/first_person)

:::warning VR 用の機能です

VRM モデルを VR アバターとして使用する場合、一人称視点でモデルの頭メッシュが見えてしまうと視界を遮ってしまいます。
これを解決するために、 VRHMD Camera の一人称視点 (FirstPerson) とそれ以外 (ThirdPerson) でメッシュの可視属性を変更する機能になります。
:::

## Project 設定

UniVRM の推奨する VR 向けのカメラ構成です。

ヘッドマウントディスプレイを表すカメラ と その他のカメラという２種類のカメラを想定ます。
UniVRM は、レイヤー 9 `VRMFirstPersonOnly` と レイヤー 10 `VRMThirdPersonOnly` をデフォルト値にしています。
２つのレイヤーは、ランタイムロード時の引数で任意のレイヤを指定することも可能です。

:::note VRMFirstPersonOnly
このレイヤーを指定した gameObject はその他のカメラから消えます

例: カンペなど特殊用途？
:::

:::note VRMThirdPersonOnly

このレイヤーを指定した gameObject はヘッドマウントディスプレイから消えます

例: アバターの頭、髪の毛、メガネなどの描画を抑止して前が見えるようにする
:::

`Project Settings` - `Tags and Layers` に `VRMFirstPersonOnly` と `VRMThirdPersonOnly` を
設定してください。

![Tags & Layers](./tags_layers.jpg)

:::info デフォルトのレイヤー番号

デフォルトは `FirstPerson = 9`, `ThirdPerson = 10` です。

`FirstPerson.SetupAsync` の引数で指定できます。

```csharp
var created = await controller.Vrm.FirstPerson.SetupAsync(
    controller.gameObject, firstPersonOnlyLayer: 9, thirdPersonOnlyLayer: 10);
```

:::

## カメラ構成

### FirstPerson: MainCamera の CullingMask

シーンに VR 用のカメラ(HMD)を配置して `CullingMask` の FirstPerson をチェックします。

:::info VR用のカメラ

XRRig など VR向けの1人称描画のカメラです。
通常、 `main` カメラになります。
:::

![FirstPerson](./check_firstperson.jpg)

### ThirdPerson: OtherCamera の CullingMask

シーンに HMD 以外の追加のカメラを配置して `CullingMask` の ThirdPerson をチェックします。

:::info 三人称用のカメラ

鏡や配信用の RenderTexture のカメラです。
:::

![FirstPerson](./check_thirdperson.jpg)

## Runtime に FirstPerson 機能を有効にする

VR 向け FirstPerson 設定の初期化手順です。

1. Load する
2. Vrm10Instance を取得する
3. `Vrm10Instance.Vrm.FirstPerson.SetupAsync` を呼び出す
4. ShowMeshes

```csharp
async Task<RuntimeGltfInstance> LoadAsync(string path)
{
    var data = new GlbFileParser(path).Parse();
    if (!Vrm10Data.TryParseOrMigrate(data, true, out Vrm10Data vrm))
    {
        throw new System.Exception("vrm parse error !");
    }
    using (var loader = new Vrm10Importer(vrm))
    {
        // 1.
        var instance = await loader.LoadAsync();

        // 2.
        var controller = instance.GetComponent<Vrm10Instance>();

        // 3. The headless model that created is added to instance
        await controller.Vrm.FirstPerson.SetupAsync(controller.gameObject);

        // 4.
        instance.ShowMeshes();

        return instance;
    }
}
```

## Sample

複数のカメラを配置したサンプルシーンがあります。

- `Assets/VRM10_Samples/VRM10FirstPersonSample`
