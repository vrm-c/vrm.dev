---
date: 2024-02-09
---

# ShowCase の登録/更新について

以下の内容を [issues](https://github.com/vrm-c/vrm.dev/issues) に作ってください。
PullRequest でなくても大丈夫です。

## 登録/更新

| 項目        |                                                   |
| ----------- | ------------------------------------------------- |
| title       | 必須                                              |
| url         | 必須                                              |
| description | オプション                                        |
| preview     | オプション                                        |
| tag         | オプション[showcase](/showcase)から選んでください |

- 日本または英語片方だけの場合はコピーします
- description と preview が無い場合は、初回登録時にスクリプトで OGP を取得します

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
  "tag": "CharacterPlatform",
  "ja": {
    "title": "ザ・シードオンライン",
    "url": "https://virtualcast.jp/store/",
    "description": "`1.0` アップロード可。3D viewer は `1.0` 未対応",
    "preview": "https://virtualcast.jp/img/common/logo/virtual_cast_570_270_white.png"
  },
  "en": {
    "title": "The Seed Online",
    "url": "https://virtualcast.jp/store/",
    "description": "`1.0` can be uploaded. 3D viewer does not support `1.0`",
    "preview": "https://virtualcast.jp/img/common/logo/virtual_cast_570_270_white.png"
  },
  "vrm": "1.0"
}
```

https://github.com/vrm-c/vrm.dev/blob/master/src/data/users.ts
