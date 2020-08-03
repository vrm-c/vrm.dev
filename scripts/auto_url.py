import pathlib
HERE = pathlib.Path(__file__).absolute().parent


def update_url(root: pathlib.Path, path: pathlib.Path):
    if path.name == '_index.md':
        url = f'{path.parent.relative_to(root)}/'
    else:
        url = f'{path.parent.relative_to(root)}/{path.stem}/'

    frontmatter = []
    lines = []
    delemeter = 0
    for l in path.read_text().split('\n'):
        if l.startswith('---'):
            delemeter += 1
        else:
            if delemeter == 0:
                raise Exception('no frontmatter')
            elif delemeter == 1:
                frontmatter.append(l)
            elif delemeter == 2:
                lines.append(l)
            else:
                raise Exception('too many ---')
    if lines and lines[-1] == '':
        lines.pop()

    with path.open('w') as f:
        f.write('---\n')
        url_found = False
        for l in frontmatter:
            if l.startswith('url:'):
                f.write(f'url: "{url}"\n')
                url_found = True
            else:
                f.write(l + '\n')
        if not url_found:
            f.write(f'url: "{url}"\n')
        f.write('---\n')
        for l in lines:
            f.write(l + '\n')
    print(f'{url}')


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
    process(HERE.parent / 'content/en/docs', 'univrm')
