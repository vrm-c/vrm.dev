---
date: 2024-02-09
---

# ShowCase の登録/更新について

以下の内容を [issues](https://github.com/vrm-c/vrm.dev/issues) に作ってください。
PullRequest でなくても受け付けております。

## 登録/更新

| 項目        |                                                                  |
| ----------- | ---------------------------------------------------------------- |
| title       | 必須                                                             |
| url         | 必須                                                             |
| description | オプション                                                       |
| preview     | オプション                                                       |
| flag        | 👉 複数 flag になりました。 ひとつ以上選んでください(2024/03/18) |
| updated     | 👉 日付の新しい順に表示するようになりました(2024/03/18)          |

:::tip flags

bit 演算で連結します。

```js
    "flags": F.Metaverse | F.Vrm10,
```

:::

:::tip 日本または英語片方だけの場合はコピーします
:::

:::tip description と preview が無い場合は、メンテナンス時にスクリプトで OGP を取得する予定
:::

## 例

```md
# ShowCase 登録依頼

## title

ザ・シードオンライン

## url

https://virtualcast.jp/store/
```

## json format

```json
  {
    "flags": F.Metaverse | F.Vrm10, // 変更
    "ja": {
      "title": "バーチャルキャスト",
      "url": "https://virtualcast.jp/",
      "description": " [Windows VR](https://store.steampowered.com/app/947890/VirtualCast/), [Oculus Quest](https://www.oculus.com/experiences/quest/4174249979259348/)",
      "preview": "https://virtualcast.jp/img/common/logo/virtual_cast_570_270_white.png"
    },
    "en": {
      "title": "VirtualCast",
      "url": "https://virtualcast.jp/",
      "description": "[Windows VR](https://store.steampowered.com/app/947890/VirtualCast/), [Oculus Quest](https://www.oculus.com/experiences/quest/4174249979259348/)",
      "preview": "https://virtualcast.jp/img/common/logo/virtual_cast_570_270_white.png"
    },
    "updated": new Date("2023-01-01"), // 追加
  },
```

https://github.com/vrm-c/vrm.dev/blob/master/src/data/users.ts

:::info sort order

```ts
function cmpUser(a: User, b: User): number {
  if (a.updated) {
    if (b.updated) {
      return b.updated.getTime() - a.updated.getTime();
    }
    else {
      // left
      return -1;
    }
  }
  else {
    if (b.updated) {
      // right
      return 1;
    }
    else {
      return 0;
    }
  }
}
```

:::
