import pathlib
import shutil

HERE = pathlib.Path(__file__).absolute().parent


def process(dir: pathlib.Path):
    for f in dir.iterdir():
        if f.is_dir():
            process(f)
        else:
            if f.stem == '_index':
                dst = f.parent / f'index.md'
                print(f'{f} => {dst}')
                shutil.move(f, dst)


if __name__ == '__main__':
    process(HERE)
