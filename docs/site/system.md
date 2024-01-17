# サイト構成

## documents

:::note sphinx の markdown を引き継ぎ

先代の sphinx 、その前の hugo の markdown 記事をそのまま引き継いでいます。

:::

`/docs/**/*.md`

## pages

### `/`

React

`/src/pages/index.ts`

### /showcase/

VRM 対応アプリケーション

React

`/src/pages/showcase/index.tsx`
`/src/data/tags.tsx`
`/src/data/users.tsx`

## customize

言語切り替えメニューを改造しています。

[Swizzling | Docusaurus](https://docusaurus.io/docs/swizzling)

https://github.com/vrm-c/vrm.dev/blob/master/src/theme/NavbarItem/LocaleDropdownNavbarItem/index.js
