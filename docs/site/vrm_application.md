# 対応Applicationの登録

以下の内容で [こちら](https://github.com/vrm-c/vrm.dev/issues) に `issue` で依頼をしてください。
`PullRequest` にしなくても大丈夫です。
内容がわかれば、JSON でなくても受け付けております。
英語が省略された場合は、日本語をコピーします。

```js
{
  tag: 'CharacterPlatform', // 分類。空欄であればこちらで判断します
  ja: { // 日本語
    title: 'ザ・シードオンライン',
    url: 'https://virtualcast.jp/store/',
    description: '`1.0` アップロード可。3D viewer は `1.0` 未対応', // markdown可能
  },
  en: { // english information
    title: 'The Seed Online',
    url: 'https://virtualcast.jp/store/',
    description: '`1.0` can be uploaded. 3D viewer does not support `1.0`', // markdown可能
  },
  vrm: '1.0', // vrm-1.0 の対応状況. '', '1.0', '0.x only', '1.0 only'
  // showcase の VRM カラムです
}
```

:::note tag の一覧
- CharacterPlatform
- CharacterCreation
- ImporterExporter
- Streaming
- MotionCapture
- Animation
- Photography
- Metaverse
- Game
- WebBrowser
- Viewer
- UsingInternally
- Other
:::

