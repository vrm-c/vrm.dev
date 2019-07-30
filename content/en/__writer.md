---
title: "VRMセクション記述メモ"
date: 2999-01-01
draft: true
---

Hugoわりと複雑なのでメモを残します。

## 更新

```
$ git checkout master 
$ git pull master master
$ git checkout -b vrm_0417
```

## ローカルサーバー

```
hugo_root> hugo.exe server -t hyde -w -D -F
```

* -w は watchで更新監視
* -t hyde はHTMLのテーマでこれはサイトで固定
* -D はDraftを表示する
* -F は未来日付を表示する

## ディレクトリ構造

```
contents
    vrm/ <= hugoのセクションになります
        xxx.md <= 各記事。htmlに変換されます

layouts
    _default
        single.html <= 各記事のテンプレート
```

## 違うテンプレートを使う

frontmatterに設定する

```
---
title: "VRM"
date: 2018-03-15T22:21:48+09:00
layout: vrm_index <= これ
---
```

```
layouts
    _default
        vrim_index.html <= layoutで指定された
```

## セクションにテンプレートを指定する

```
layouts
    _default <= セクション無かったらこっち使う
        single.html <= 各記事
        list.html <= 目次
    vrm <= section_name
        single.html <= 各記事
        list.html <= 目次
```
