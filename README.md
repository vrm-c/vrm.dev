# vrm.dev

This repository contains source files for vrm.dev.

このレポジトリはvrm.devのソースファイルを含みます。

## Contributing

vrm.dev requires [Sphinx](https://www.sphinx-doc.org/en/master/).

### dependencies

* python
* python modules: sphinx myst_parser furo

### local preview

Start a local website server by running the following commands:

```console
$ git clone --recursive https://github.com/vrm-c/vrm.dev.git
$ cd vrm.dev
$ sphinx-autobuild content/ja/docs build -b=dirhtml --open-browser
```

Access your local version of vrm.dev at http://localhost:8000/ to preview update/changes made in scripts.
