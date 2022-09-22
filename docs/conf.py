import sphinx.config
import sphinx.application
import pathlib
import sys
import shutil
import logging
import os
logger = logging.getLogger(__name__)
HERE = pathlib.Path(__file__).absolute().parent
sys.path.append(str(HERE))

import patch  # nopep8

# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'VRM'
copyright = '2022, VRM Consortium'
author = 'VRM Consortium'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'myst_parser',
    'sphinx_reredirects',
]
redirects = {
    "docs/gltf/index.html": "/gltf",
    "docs/gltf/animation_exporter/index.html": "/gltf/animation_exporter",
    "docs/gltf/emission_glow/index.html": "/gltf/emission_glow",
    "docs/gltf/glb_export/index.html": "/gltf/glb_export",
    "docs/gltf/glb_import/index.html": "/gltf/glb_import",
    "docs/gltf/mesh_utility/index.html": "/gltf/mesh_utility",
    "docs/univrm/index.html": "/univrm",
    "docs/univrm/blendshape/index.html": "/univrm/blendshape/index",
    "docs/univrm/blendshape/blendshape_setup/index.html": "/univrm/blendshape/blendshape_setup",
    "docs/univrm/blendshape/check_blendshape_normal/index.html": "/univrm/blendshape/check_blendshape_normal",
    "docs/univrm/blendshape/univrm_bake_blendshape/index.html": "/univrm/blendshape/univrm_bake_blendshape",
    "docs/univrm/blendshape/univrm_blendshape/index.html": "/univrm/blendshape/univrm_blendshape",
    "docs/univrm/export/index.html": "/univrm/export/index",
    "docs/univrm/export/univrm_export/index.html": "/univrm/export/univrm_export",
    "docs/univrm/export/vrm_size/index.html": "/univrm/export/vrm_size",
    "docs/univrm/firstperson/index.html": "/univrm/firstperson/index",
    "docs/univrm/firstperson/univrm_firstperson/index.html": "/univrm/firstperson/univrm_firstperson",
    "docs/univrm/humanoid/index.html": "/univrm/humanoid/index",
    "docs/univrm/humanoid/base_model/index.html": "/univrm/humanoid/base_model",
    "docs/univrm/humanoid/humanoid_overview/index.html": "/univrm/humanoid/humanoid_overview",
    "docs/univrm/humanoid/meshutility_humanoid/index.html": "/univrm/humanoid/meshutility_humanoid",
    "docs/univrm/import/index.html": "/univrm/import/index",
    "docs/univrm/import/prefab_importer_behaviour/index.html": "/univrm/import/prefab_importer_behaviour",
    "docs/univrm/import/univrm_import/index.html": "/univrm/import/univrm_import",
    "docs/univrm/install/index.html": "/univrm/install/index",
    "docs/univrm/install/unity_version/index.html": "/univrm/install/unity_version",
    "docs/univrm/install/univrm_install_samples/index.html": "/univrm/install/univrm_install_samples",
    "docs/univrm/install/univrm_install/index.html": "/univrm/install/univrm_install",
    "docs/univrm/install/univrm_uninstall/index.html": "/univrm/install/univrm_uninstall",
    "docs/univrm/install/univrm_upm/index.html": "/univrm/install/univrm_upm",
    "docs/univrm/install/univrm_version/index.html": "/univrm/install/univrm_version",
    "docs/univrm/lookat/index.html": "/univrm/lookat/index",
    "docs/univrm/lookat/lookat_blendshape/index.html": "/univrm/lookat/lookat_blendshape",
    "docs/univrm/lookat/lookat_bone/index.html": "/univrm/lookat/lookat_bone",
    "docs/univrm/lookat/lookat_uv/index.html": "/univrm/lookat/lookat_uv",
    "docs/univrm/lookat/univrm_lookat/index.html": "/univrm/lookat/univrm_lookat",
    "docs/univrm/meta/index.html": "/univrm/meta/index",
    "docs/univrm/meta/univrm_meta/index.html": "/univrm/meta/univrm_meta",
    "docs/univrm/programming/index.html": "/univrm/programming/index",
    "docs/univrm/shaders/index.html": "/univrm/shaders/index",
    "docs/univrm/shaders/shader_mtoon/index.html": "/univrm/shaders/shader_mtoon",
    "docs/univrm/shaders/univrm_standard/index.html": "/univrm/shaders/univrm_standard",
    "docs/univrm/shaders/univrm_unlit/index.html": "/univrm/shaders/univrm_unlit",
    "docs/univrm/springbone/univrm_secondary/index.html": "/univrm/springbone/univrm_secondary",
    "docs/vrm/how_to_make_vrm/setup_unity/index.html": "/vrm/how_to_make_vrm/setup_unity",
    "docs/vrm/vrm_development/index.html": "/vrm/vrm_development",
    "docs/vrm/vrm_meta/index.html": "/vrm/vrm_meta",
    "how_to_view_vrm/index.html": "/vrm/how_to_view_vrm",
    "how_to_make_vrm/convert_from_humanoid_model/index.html": "/vrm/how_to_make_vrm/convert_from_humanoid_model",
    "how_to_make_vrm/setup_vrm/index.html": "/vrm/how_to_make_vrm/setup_vrm",
    "how_to_make_vrm/vrm_behavior_confirmation/index.html": "/vrm/how_to_make_vrm/vrm_behavior_confirmation",
    "vrm_about/index.html": "/vrm/vrm_about",
    "vrm_applications/index.html": "/vrm/vrm_applications",
}

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'furo'
html_sidebars = {
    '**': [
        "sidebar/scroll-start.html",
        'language.html',
        "sidebar/brand.html",
        "sidebar/search.html",
        "sidebar/navigation.html",
        "sidebar/ethical-ads.html",
        "sidebar/scroll-end.html",
    ],
}

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']
html_logo = "vrm_topheader.png"
html_favicon = 'favicon.ico'

# sphinx-intl
locale_dirs = ['locale/']   # path is example but recommended.
gettext_compact = False     # optional.
language = "ja"


def setup(app: sphinx.application.Sphinx):
    '''
    https://vrm.dev/licenses/1.0/
    https://vrm.dev/licenses/1.0/en/
    https://vrm.dev/licenses/1.0/pdf/jp.pdf
    https://vrm.dev/licenses/1.0/pdf/en.pdf
    '''

    #
    # markdown の差し替え
    # gettext を使わずに全文差し替えを使うためにビルド前にファイルを入れ替える
    #
    def copy_license_md(app: sphinx.application.Sphinx, config: sphinx.config.Config):
        # ensure directory
        license_directory = pathlib.Path(app.confdir) / 'licenses/1.0'
        os.makedirs(license_directory, exist_ok=True)

        # ensure empty file if not exists
        dst = license_directory / 'index.md'
        if not os.path.isfile(dst):
            f = open(dst, 'w')
            f.close()

        if config.language == 'ja':
            src = pathlib.Path(app.confdir).parent / 'licenses/ja/1.0/_index.md'
            if src.read_bytes() != dst.read_bytes():
                logger.debug(f'copy {src} to {dst}')
                shutil.copy(src, dst)
        elif config.language == 'en':
            src = pathlib.Path(app.confdir).parent / 'licenses/en/1.0/_index.md'
            if src.read_bytes() != dst.read_bytes():
                logger.debug(f'copy {src} to {dst}')
                shutil.copy(src, dst)
            copy = {k: v for k, v in redirects.items()}
            for k, v in copy.items():
                redirects[k] = f'/en{v}'
        else:
            raise RuntimeError(f'unknown language: {config.language}')

    app.connect('config-inited', copy_license_md, priority=800)
