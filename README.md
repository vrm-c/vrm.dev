# vrm.dev

This repository contains source files for vrm.dev.

このレポジトリはvrm.devのソースファイルを含みます。

## Contributing

vrm.dev requires [Hugo (extended) v0.74.3](https://github.com/gohugoio/hugo/releases/tag/v0.74.3).
Make sure `hugo.exe` is put in the `/vrm.dev/` directory.

Start a local website server by running the following commands:

```console
$ git clone --recursive https://github.com/vrm-c/vrm.dev.git
$ cd vrm.dev
$ npm i
$ hugo server -w --disableFastRender -D -F
# -w watch
# -D include content marked as draft
# -F include content with publishdate in the future
```

Access your local version of vrm.dev at http://localhost:1313/ to preview update/changes made in scripts.

vrm.dev adopts Hugo theme [Docsy](https://github.com/google/docsy). Refer to [the Docsy's documentation](https://www.docsy.dev/docs/adding-content/lookandfeel/) for extending the layout.

<!--
## License

[UNKNOWN]({{< relref "LICENSE.md" >}})
-->
