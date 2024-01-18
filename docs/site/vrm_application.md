# Registration of VRM applications

Please submit a request via `issue` to [here](https://github.com/vrm-c/vrm.dev/issues) with the following content.
You don't have to use `PullRequest`.
If we understand the content, we will accept it even if it is not JSON.
If Japanese is omitted, copy English.

```js
{
  tag: 'CharacterPlatform', // Classification. If it is blank, we will judge here.
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
  vrm: '1.0', // vrm-1.0 status. '', '1.0', '0.x only', '1.0 only'
  // This is the VRM column of showcase.
}
```

:::note list of tags
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

