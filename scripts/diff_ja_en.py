# 日本語ページと英語ページが対応とれているか確認するスクリプト(python3)
#
# usage:
# $ cd vrm.dev
# $ python diff_ja_en.py

import pathlib
HERE = pathlib.Path(__file__).absolute().parent


def diff_dir(l_root: pathlib.Path, lhs: pathlib.Path, r_root: pathlib.Path,
             rhs: pathlib.Path) -> None:
    right = [x.relative_to(r_root) for x in rhs.iterdir()]
    for l in lhs.iterdir():
        relative = l.relative_to(l_root)
        if relative in right:
            right.remove(relative)

            if l.is_dir():
                diff_dir(l_root, l, r_root, r_root / relative)
        else:
            # only left
            print(f'<only(ja) {l}')
    # only right
    for r in right:
        print(f'>only(en) {r}')


def main(ws: pathlib.Path):
    ja = ws / 'content/ja'
    en = ws / 'content/en'
    diff_dir(ja, ja, en, en)


if __name__ == '__main__':
    main(HERE)
