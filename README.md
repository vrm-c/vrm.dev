# vrm.dev

This repository contains a source files for vrm.dev.

## Contributing

vrm.dev requires the installation of [Hugo (extended) v0.56.3](https://github.com/gohugoio/hugo/releases/tag/v0.56.3).

```console
$ git clone https://github.com/vrm-c/vrm.dev.git
$ cd vrm.dev
$ git submodule update --init --recursive
$ npm i
$ hugo server -D
$ open http://localhost:1313/
```

vrm.dev contains built HTML documents in the repository. Set environment variable `HUGO_ENV` as `production`. For example, in Windows:

```console
$ cd vrm.dev
$ set HUGO_ENV=production
```

Run `hugo` command to generate HTML documents before sending Pull Request.

vrm.dev adopts Hugo theme [docsy](https://github.com/google/docsy). Put your proposed [layout change](https://zwbetz.com/override-a-hugo-theme/) files in `vrm.dev/layouts`, if any.

<!--
## License

[UNKNOWN](LICENSE)
-->
