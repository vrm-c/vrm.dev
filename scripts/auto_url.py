import pathlib
HERE = pathlib.Path(__file__).absolute().parent


def update_url(root: pathlib.Path, path: pathlib.Path):
    if path.name == '_index.md':
        url = f'{path.parent.relative_to(root)}/'
    else:
        url = f'{path.parent.relative_to(root)}/{path.stem}/'
    print(root, url)


def traverse(root: pathlib.Path, path: pathlib.Path):

    for f in path.iterdir():
        if f.is_dir():
            traverse(root, f)
        else:
            if f.suffix == '.md':
                update_url(root, f)


def process(root: pathlib.Path, child: str):
    traverse(root, root / child)


if __name__ == '__main__':
    process(HERE.parent / 'content/ja/docs', 'univrm')
