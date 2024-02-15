# VRMC_vrm: expression

BlendShape は、Expression に名称を変更します。

:::warning BlendShape

BlendShape は Unity の MorphTarget 機能のことで、区別が付きにくかったためです。

:::

preset の見直し

|     | VRM0                          | VRM1      |
| --- | ----------------------------- | --------- |
| 喜  | joy(joy と fun が曖昧)        | happy     |
| 怒  | angry                         | angry     |
| 哀  | sorrow(文語)                  | sad       |
| 楽  | fun(joy と fun が曖昧)        | relaxed   |
| 驚  | (新規追加)                    | surprised |
| あ  | a(非日本語で自然なように変更) | aa        |
| い  | i(非日本語で自然なように変更) | ih        |
| う  | u(非日本語で自然なように変更) | ou        |
| え  | e(非日本語で自然なように変更) | ee        |
| お  | o(非日本語で自然なように変更) | oh        |

- overrideMouse, overrideLipSync, overrideBlink 設定の追加
- VRM0 の materialBind から MaterialColorBind と TextureTransformBind に整理
