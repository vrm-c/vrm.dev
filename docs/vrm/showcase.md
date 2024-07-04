---
date: 2024-02-09
---

# ShowCase の登録/更新について

- [issues](https://github.com/vrm-c/vrm.dev/issues) または [pull request](https://github.com/vrm-c/vrm.dev/pulls) してください
- 既存の項目の更新もどうぞ(更新時に updated を更新すると上に上がってきます)

## 依頼例

```md
# ShowCase 登録依頼

## title

ザ・シードオンライン

## url

https://virtualcast.jp/store/
```

:::tip 日本語または英語片方だけでOKです。
:::

## json で依頼

```json
  {
    "flags": F.Metaverse | F.Vrm10,
    "platforms": P.WindowsVR | P.MetaQuest,
    "ja": {
      "title": "バーチャルキャスト",
      "url": "https://virtualcast.jp/",
      "description": " [Windows VR](https://store.steampowered.com/app/947890/VirtualCast/), [Oculus Quest](https://www.oculus.com/experiences/quest/4174249979259348/)",
      "preview": "https://virtualcast.jp/img/common/logo/virtual_cast_570_270_white.png"
    },
    "en": {
      "title": "VirtualCast",
      "description": "[Windows VR](https://store.steampowered.com/app/947890/VirtualCast/), [Oculus Quest](https://www.oculus.com/experiences/quest/4174249979259348/)",
    },
    "updated": new Date("2024-07-01"),
  },
```

## 登録項目

| 項目        |                                                                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | 必須                                                                                                                                              |
| url         | オプション(descriptionかurlのどちらかで辿り着けるようにしてください)                                                                              |
| description | オプション(markdownを記述できます)                                                                                                                |
| preview     | オプション(画像へのURL)                                                                                                                           |
| flags       | 👉 複数 flag になりました。 ひとつ以上選んでください(2024/03/18)                                                                                  |
| platforms   | 👉 Windows や iOS を指定できます。(2024/07)                                                                                                       |
| updated     | 👉 日付の新しい順に表示するようになりました(2024/03/18)。日付が無い場合は書いてある順なので下に行きます。更新時に日付を更新すると上に上がります。 |

## flags

```typescript
export enum TagFlags {
  None = 0,
  CharacterPlatform = 1 << 0,
  VrmAnimation = 1 << 1,
  CharacterCreation = 1 << 2,
  ImporterExporter = 1 << 3,
  Streaming = 1 << 4,
  MotionCapture = 1 << 5,
  Animation = 1 << 6,
  Photography = 1 << 7,
  Metaverse = 1 << 8,
  Game = 1 << 9,
  WebBrowser = 1 << 10,
  Viewer = 1 << 11,
  UsingInternally = 1 << 12,
  VrmHelper = 1 << 13,
  Vrm10 = 1 << 14,
  FaceTracking = 1 << 15,

  Other = 1 << 31,
}
```

## platforms

```typescript
export enum PlatformFlags {
  None = 0,
  Windows = 1 << 0,
  macOS = 1 << 1,
  Android = 1 << 2,
  iOS = 1 << 3,
  WebBrowser = 1 << 4,
  WindowsVR = 1 << 5,
  MetaQuest = 1 << 6,
  Linux = 1 << 7,
  WebXR = 1 << 8,
}
```

## json format

https://github.com/vrm-c/vrm.dev/blob/master/src/data/users.ts

## sort order 参考

```ts
function cmpUser(a: User, b: User): number {
  if (a.updated) {
    if (b.updated) {
      return b.updated.getTime() - a.updated.getTime();
    } else {
      // left
      return -1;
    }
  } else {
    if (b.updated) {
      // right
      return 1;
    } else {
      return 0;
    }
  }
}
```
