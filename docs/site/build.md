# ビルド

github-action でビルドしています。 

https://github.com/vrm-c/vrm.dev/blob/master/.github/workflows/docusaurus.yml

- vrm.dev の master 更新でトリガーします
- TODO: vrm.dev.en が更新された場合にトリガーする方法

## build sequence

- vrm.dev をビルド => `/build`
- vrm.dev.en をビルド => `build/en`(master head)
- gh-pages に `/build` を deploy

