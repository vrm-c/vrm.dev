from typing import Iterable
import io
import re
import pathlib

HERE = pathlib.Path(__file__).absolute().parent

MD_RELREF = re.compile(r'\({{<\s+relref\s+([^>]+) >}}\)')
RELREF = re.compile(r'{{<\s+relref\s+([^>]+) >}}')


def traverse(dir: pathlib.Path) -> Iterable[pathlib.Path]:
    for f in dir.iterdir():
        if f.is_dir():
            for x in traverse(f):
                yield x
        else:
            yield f


if __name__ == '__main__':
    md_map = {}
    for f in traverse(HERE):

        if f.is_file:
            rel = str(f.relative_to(HERE)).replace('\\', '/')
            if f.name == 'index.md':
                md_map[f.parent.name] = rel
            elif f.suffix == '.md':
                md_map[f.stem] = rel

    for f in traverse(HERE):
        if f.is_file and f.suffix == '.md':
            def rep(m):
                target: str = m.group(1)[1:-1]

                try:
                    target, hash = target.split('#', maxsplit=1)
                    hash = '#' + hash
                except:
                    hash = ''

                if target.endswith('.md'):
                    target = target[:-3]

                result = ''
                if target.startswith('/'):
                    result = target
                else:
                    try:
                        result = md_map[target]
                    except KeyError as ex:
                        result = target

                if result.endswith('.md'):
                    result = result[:-3]
                if not result.startswith('/'):
                    result = '/' + result

                print(f'{m.group(1)} => {result}: {hash}')
                # return result + hash
                return f'({result}{hash})'
            src = f.read_text(encoding='utf-8')
            dst = re.sub(MD_RELREF, rep, src)
            if dst != src:
                f.write_text(dst, encoding='utf-8')
