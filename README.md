# vrm.dev

This repository contains source files for vrm.dev.

このレポジトリはvrm.devのソースファイルを含みます。

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
$ git clone --recursive https://github.com/vrm-c/vrm.dev.git
$ cd vrm.dev
$ sphinx-autobuild content/ja/docs build -b=dirhtml --open-browser
```

Access your local version of vrm.dev at http://localhost:8000/ to preview update/changes made in scripts.
