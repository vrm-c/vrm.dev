# vrm.dev サイトの翻訳作業について

20240115 から `sphinx + gettext` 方式から、
`docusaurus + git fork` 方式に手法を変更しました。

- [オープンソースドキュメント翻訳プラットフォームとしての GitHub (React 日本語ドキュメントの例)](https://zenn.dev/smikitky/articles/0d250f7367eda9)

を参考にして fork 方式にしました。
英訳側の追随作業はまだ手動です。

[英語版](https://github.com/vrm-c/vrm.dev.en)

## 英語側の更新手順

1. `日本版 master` が前進する
2. 英語版ローカル。最新の `英語版master` から作業ブランチを作る
3. `英語版作業ブランチ` に `日本語版 master` を `fetch + merge` する
4. conflict した場合、解決する
5. 翻訳作業をする
6. `英語版作業ブランチ` を PullRequest する

(1~3) cron で自動マージするなどを検討中です。

## docusaurus の日本語/英語スイッチ

`src/theme/NavbarItem` です。
`docusaurus` の `swizle` 機能でコンポーネントを差しかえています。
`docusaurus` の翻訳機能をバイパスして、 `baseUrl` を置換するリンクになっています。

