from typing import Iterable
import io
import re
import pathlib

HERE = pathlib.Path(__file__).absolute().parent

MD_RELREF = re.compile(r'\({{<\s+relref\s+([^>]+) >}}\)')
RELREF = re.compile(r'{{<\s+relref\s+([^>]+) >}}')
ALERT = re.compile(
    r'{{%\s+alert\s+title="([^"]+)"\s+color="([^"]+)"\s+%}}(.*?){{%\s+/alert\s+%}}', re.DOTALL)
TABLE_IMAGE = re.compile(r'\|{{<\s*img\s+(.*?)\s*>}}', re.DOTALL)
IMAGE = re.compile(r'{{<\s*img\s+(.*?)\s*>}}', re.DOTALL)
KEY_VALUE = re.compile(r'(\w+)="([^"]+)"')
MD_IMAGE = re.compile(r'!\[([^\]]+)\]\(([^\)]+)\)')

FRONT_TITLE = re.compile(r'^---\n(.*?)\n---\n', re.DOTALL)


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
            src = f.read_text(encoding='utf-8')

            # [xxx]({{< relref "" >}}) の修正
            def rep_md(m):
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
            dst = re.sub(MD_RELREF, rep_md, src)

            # {{< relref "" >}} の修正
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
                return f'{{doc}}`{result}`'
            dst = re.sub(RELREF, rep, dst)

            # alert
            def rep_alert(m):
                level = m.group(2)
                if level == 'info':
                    level = 'note'

                print(m.group(1), level)
                # return m.group(0)
                return f'''```{{admonition}} {m.group(1)}
:class: {level}

{m.group(3)}
```
'''
            dst = re.sub(ALERT, rep_alert, dst)

            # # md image
            # def rep_md_image(m: re.Match):
            #     result = f'![{m.group(1)}](/_static{m.group(2)})'
            #     print(result)
            #     return result
            # dst = re.sub(MD_IMAGE, rep_md_image, dst)

            # image
            def rep_image(m):
                attr_map = {}
                for kv in re.finditer(KEY_VALUE, m.group(1)):
                    attr_map[kv.group(1)] = kv.group(2)
                # print(attr_map)
                src = attr_map["src"]
                alt = attr_map.get('alt', 'img')
                print(attr_map)
                return f'![{alt}](/_static/{src})'
            dst = re.sub(IMAGE, rep_image, dst)

            def rep_title(m):
                sio = io.StringIO()
                title = None
                for l in m.group(0).splitlines():
                    if l.startswith('title:'):
                        title = l[len('title:'):].strip()
                        if title[0] == '"':
                            # unquote
                            title = title[1:-1]
                    else:
                        sio.write(l)
                        sio.write('\n')

                if title:
                    return sio.getvalue() + f'\n# {title}\n'
                else:
                    print(m)
                    return m.group(0)
            dst = re.sub(FRONT_TITLE, rep_title, dst)

            if dst != src:
                f.write_text(dst, encoding='utf-8')
