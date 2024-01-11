# vrm.dev

This repository contains source files for vrm.dev.

このレポジトリはvrm.devのソースファイルを含みます。

## 更新

- 20240111 英語版を sphinx gettext から [fork](https://github.com/vrm-c/vrm.dev.en) に変更

## Contributing

vrm.dev requires [Sphinx](https://www.sphinx-doc.org/en/master/).

### requirements

* Python 3.10
* pip
  * sphinx
  * myst_parser
  * furo

### setup
We recommend using a virtual environment of Python (e.g. venv, anaconda).

```shell
$ python
Python 3.10.6

$ pip install --requirement ./requirement.txt
```

### local preview

Start a local website server by running the following commands:

```console
$ sphinx-autobuild docs build -b=dirhtml --open-browser
```

Access your local version of vrm.dev at http://localhost:8000/ to preview update/changes made in scripts.
