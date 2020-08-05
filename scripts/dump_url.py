import pathlib
HERE = pathlib.Path(__file__).absolute().parent


def process(path: pathlib.Path):
    url = None
    delemeter = 0
    for l in path.read_text().split('\n'):
        if l.startswith('---'):
            delemeter += 1
            if delemeter == 2:
                break
        else:
            if l.startswith('url:'):
                url = l[4:].strip()
                if url[0] == '"':
                    url = url[1:-1]
    print(f'{path}: {url}')


def traverse(path: pathlib.Path):
    for child in path.iterdir():
        if child.is_dir():
            traverse(child)
        else:
            if child.suffix == '.md':
                process(child)


if __name__ == '__main__':
    traverse(HERE / 'content/ja/docs/univrm')
    traverse(HERE / 'content/en/docs/univrm')
