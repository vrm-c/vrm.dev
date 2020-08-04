import pathlib
import io
HERE = pathlib.Path(__file__).absolute().parent

DATA = {
    '/ja/docs/univrm/_index.md': '/univrm/',
    '/ja/docs/univrm/components/_index.md': '/univrm/components/',
    '/ja/docs/univrm/components/univrm_blendshape.md':
    '/univrm/components/univrm_blendshape/',
    '/ja/docs/univrm/components/univrm_firstperson.md':
    '/univrm/components/univrm_firstperson/',
    '/ja/docs/univrm/components/univrm_lookat.md':
    '/univrm/components/univrm_lookat/',
    '/ja/docs/univrm/components/univrm_meta.md':
    '/univrm/components/univrm_meta/',
    '/ja/docs/univrm/components/univrm_secondary.md':
    '/univrm/components/univrm_secondary/',
    '/ja/docs/univrm/gltf/_index.md': '/dev/univrm-0.xx/gltf/',
    '/ja/docs/univrm/gltf/animation_exporter.md':
    '/dev/univrm-0.xx/gltf/animation_exporter/',
    '/ja/docs/univrm/gltf/gltf_about.md': '/dev/univrm-0.xx/gltf/gltf_about/',
    '/ja/docs/univrm/gltf/how_to_create_glb.md':
    '/dev/univrm-0.xx/gltf/how_to_create_glb/',
    '/ja/docs/univrm/gltf/material_export_import.md':
    '/dev/univrm-0.xx/gltf/material_export_import/',
    '/ja/docs/univrm/settings/_index.md': '/univrm/settings/',
    '/ja/docs/univrm/settings/blendshape_setup.md':
    '/univrm/settings/blendshape_setup/',
    '/ja/docs/univrm/settings/lookat_settings.md':
    '/univrm/settings/lookat_settings/',
    '/ja/docs/univrm/settings/material_settings.md':
    '/univrm/settings/material_settings/',
    '/ja/docs/univrm/settings/prefab_importer_behaviour.md':
    '/univrm/settings/prefab_importer_behaviour/',
    '/ja/docs/univrm/settings/t_pose.md': '/univrm/settings/t_pose/',
    '/ja/docs/univrm/shaders/_index.md': '/univrm/shaders/univrm_shaders/',
    '/ja/docs/univrm/shaders/mtoon.md': '/univrm/shaders/mtoon/',
    '/ja/docs/univrm/shaders/univrm_shaders_044.md':
    '/univrm/shaders/univrm_shaders_044/',
    '/ja/docs/univrm/univrm_bake_blendshape.md':
    '/univrm/univrm_bake_blendshape/',
    '/ja/docs/univrm/univrm_export.md': '/univrm/univrm_export/',
    '/ja/docs/univrm/univrm_faq.md': '/univrm/univrm_faq/',
    '/ja/docs/univrm/univrm_install.md': '/univrm/univrm_install/',
    '/ja/docs/univrm/univrm_upm.md': '/univrm/univrm_upm/',
    '/ja/docs/univrm/univrm_workflow.md': '/univrm/univrm_workflow/',
    '/en/docs/univrm/_index.md': '/en/univrm/',
    '/en/docs/univrm/components/_index.md': '/en/univrm/components/',
    '/en/docs/univrm/components/univrm_blendshape.md':
    '/en/univrm/components/univrm_blendshape/',
    '/en/docs/univrm/components/univrm_firstperson.md':
    '/en/univrm/components/univrm_firstperson/',
    '/en/docs/univrm/components/univrm_lookat.md':
    '/en/univrm/components/univrm_lookat/',
    '/en/docs/univrm/components/univrm_meta.md':
    '/en/univrm/components/univrm_meta/',
    '/en/docs/univrm/components/univrm_secondary.md':
    '/en/univrm/components/univrm_secondary/',
    '/en/docs/univrm/gltf/_index.md': '/en/dev/univrm-0.xx/gltf/',
    '/en/docs/univrm/gltf/animation_exporter.md':
    '/en/dev/univrm-0.xx/gltf/animation_exporter/',
    '/en/docs/univrm/gltf/gltf_about.md':
    '/en/dev/univrm-0.xx/gltf/gltf_about/',
    '/en/docs/univrm/gltf/how_to_create_glb.md':
    '/en/dev/univrm-0.xx/gltf/how_to_create_glb/',
    '/en/docs/univrm/gltf/material_export_import.md':
    '/en/dev/univrm-0.xx/gltf/material_export_import/',
    '/en/docs/univrm/settings/_index.md': '/en/univrm/settings/',
    '/en/docs/univrm/settings/blendshape_setup.md':
    '/en/univrm/settings/blendshape_setup/',
    '/en/docs/univrm/settings/lookat_settings.md':
    '/en/univrm/settings/lookat_settings/',
    '/en/docs/univrm/settings/material_settings.md':
    '/en/univrm/settings/material_settings/',
    '/en/docs/univrm/settings/prefab_importer_behaviour.md':
    '/en/univrm/settings/prefab_importer_behaviour/',
    '/en/docs/univrm/settings/t_pose.md': '/en/univrm/settings/t_pose/',
    '/en/docs/univrm/shaders/_index.md': '/en/univrm/shaders/univrm_shaders/',
    '/en/docs/univrm/shaders/mtoon.md': '/en/univrm/shaders/mtoon/',
    '/en/docs/univrm/shaders/univrm_shaders_044.md':
    '/en/univrm/shaders/univrm_shaders_044/',
    '/en/docs/univrm/univrm_export.md': '/en/univrm/univrm_export/',
    '/en/docs/univrm/univrm_faq.md': '/en/univrm/univrm_faq/',
    '/en/docs/univrm/univrm_install.md': '/en/univrm/univrm_install/',
    '/en/docs/univrm/univrm_upm.md': '/en/univrm/univrm_upm/',
    '/en/docs/univrm/univrm_workflow.md': '/en/univrm/univrm_workflow/',
}


def get_lang(path: pathlib.Path) -> str:
    if '/ja/' in str(path):
        return 'ja'
    elif '/en/' in str(path):
        return 'en'
    raise Exception()


def get_entry(lang: str, path: pathlib.Path):
    lang = f'/{lang}/'
    for k, v in DATA.items():
        if k.startswith(lang) and k.endswith(path.name):
            return v


def update_aliases(path: pathlib.Path, url: str):
    # print(f'{path} => {url}')
    buffer = io.StringIO()
    for l in path.read_text().split('\n'):
        if l.startswith('aliases:'):
            buffer.write(f'aliases: ["{url}"]\n')
        else:
            buffer.write(l + '\n')
    path.write_text(buffer.getvalue())


def process(path: pathlib.Path):
    lang = get_lang(path)
    url = get_entry(lang, path)
    if not url:
        print(f'{path} not found')
        return
    update_aliases(path, url)


def traverse(path: pathlib.Path):
    for f in path.iterdir():
        if f.is_dir():
            traverse(f)
        else:
            if f.suffix == '.md':
                process(f)


if __name__ == '__main__':
    root = HERE.parent
    traverse(root / 'content/ja/docs/univrm')
    traverse(root / 'content/en/docs/univrm')
