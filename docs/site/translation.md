# 翻訳

言語ごとに 別の docusaurus リポジトリを個別に運営しています。
日本語を原本として、英語版を fork しています。

:::note sphinx の gettext 方式を fork 方式に変更しました

参考 [オープンソースドキュメント翻訳プラットフォームとしての GitHub (React 日本語ドキュメントの例)](https://zenn.dev/smikitky/articles/0d250f7367eda9)

:::

## 日本語

https://github.com/vrm-c/vrm.dev

日本語を原本サイトとして https://vrm.dev にデプロイします。

## 英語

https://github.com/vrm-c/vrm.dev.en

英語版を https://vrm.dev/en にデプロイします。

:::note github-action でまとめてビルド

日本語サイトをビルド時に
`/en` ディレクトリにビルドしています。

:::

## 翻訳手順

- vrm.dev の内容が更新される
- vrm.dev の更新を vrm.dev.en に反映する(fetch merge して push する)。この作業は、`vrm.dev` の管理者が定期的(毎週？)に実行します
  - 未訳部分が増えます
  - conflict する場合があるが、docusaurus のビルドが通る場合は そのまま commit してよい。TODO: 自動化
- vrm.dev.en に未訳部分を英訳したり、英文の更新 PullReq を送る

## 作業例(github の website 上)

TODO: markdown ひとつだけならこれでもできるはず。

## 作業例(ローカル)

### preview を起動

```sh
$ git clone https://github.com/vrm-c/vrm.dev.en.git
$ git switch -c fix/EN_TOPIC # 適当な重複しない branch 名をつけてください
$ cd vrm.dev.en
$ npm install
$ npm run dev

# https://localhost:3000 にアクセス。翻訳記事を見る。
```

### エディターで翻訳

push して `pull request`

## 作業例(管理者向け。日本語への追随)

TODO: bot で自動化

```sh
$ git clone https://github.com/vrm-c/vrm.dev.en.git
$ cd vrm.dev.en
$ git remote add ja https://github.com/vrm-c/vrm.dev

$ git switch -c merge/topic
$ git fetch ja master
$ git merge ja master
$ npm run build

# エラーがある場合は conflict を解決してビルドを通す。
# build が透る場合は merge を commit して先に進めてよい。

$ git commit
$ git push
```

