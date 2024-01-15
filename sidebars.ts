import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  vrmSidebar: [{
    type: 'category',
    label: 'vrmについて',
    items: [
      { type: 'doc', id: 'vrm/vrm_about' },
      {
        type: 'category',
        label: 'VRMファイルを作ってみたい',
        link: { type: 'doc', id: 'vrm/how_to_make_vrm/index' },
        items: [
          { type: 'doc', id: 'vrm/how_to_make_vrm/setup_unity' },
          { type: 'doc', id: 'vrm/how_to_make_vrm/convert_from_humanoid_model' },
          { type: 'doc', id: 'vrm/how_to_make_vrm/setup_vrm' },
          { type: 'doc', id: 'vrm/how_to_make_vrm/vrm_behavior_confirmation' },
        ],
      },
      { type: 'doc', id: 'vrm/how_to_view_vrm' },
      { type: 'doc', id: 'vrm/vrm_applications' },
      { type: 'doc', id: 'vrm/vrm_meta' },
      { type: 'doc', id: 'vrm/vrm_development' },
    ],
  }],
  univrmSidebar: [{
    type: 'category',
    label: 'UniVRM',
    link: { type: 'doc', id: 'univrm/index' },
    items: [
      {
        type: 'category',
        label: 'Install方法',
        items: [
          { type: 'doc', id: 'univrm/install/unity_version' },
          { type: 'doc', id: 'univrm/install/univrm_install' },
          { type: 'doc', id: 'univrm/install/univrm_upm' },
          { type: 'doc', id: 'univrm/install/univrm_install_samples' },
          { type: 'doc', id: 'univrm/install/univrm_uninstall' },
          { type: 'doc', id: 'univrm/install/univrm_version' },
        ],
      },
      {
        type: 'category',
        label: 'Export',
        items: [
          { type: 'doc', id: 'univrm/export/univrm_export' },
          { type: 'doc', id: 'univrm/export/vrm_size' },
        ],
      },
      {
        type: 'category',
        label: 'Import',
        items: [
          { type: 'doc', id: 'univrm/import/univrm_import' },
          { type: 'doc', id: 'univrm/import/prefab_importer_behaviour' },
        ],
      },
      {
        type: 'category',
        label: 'BlendShape',
        items: [
          { type: 'doc', id: 'univrm/blendshape/univrm_blendshape' },
          { type: 'doc', id: 'univrm/blendshape/blendshape_setup' },
          { type: 'doc', id: 'univrm/blendshape/univrm_bake_blendshape' },
          { type: 'doc', id: 'univrm/blendshape/check_blendshape_normal' },
        ],
      },
      {
        type: 'category',
        label: 'Material',
        link: { type: 'doc', id: 'univrm/shaders/index' },
        items: [
          { type: 'doc', id: 'univrm/shaders/univrm_unlit' },
          { type: 'doc', id: 'univrm/shaders/univrm_standard' },
          { type: 'doc', id: 'univrm/shaders/shader_mtoon' },
        ],
      },
      {
        type: 'category',
        label: 'LookAt',
        items: [
          { type: 'doc', id: 'univrm/lookat/univrm_lookat' },
          { type: 'doc', id: 'univrm/lookat/lookat_bone' },
          { type: 'doc', id: 'univrm/lookat/lookat_blendshape' },
          { type: 'doc', id: 'univrm/lookat/lookat_uv' },
        ],
      },
      {
        type: 'category',
        label: 'SpringBone',
        items: [
          { type: 'doc', id: 'univrm/springbone/univrm_secondary' },
        ],
      },
      {
        type: 'category',
        label: 'Humanoid',
        items: [
          { type: 'doc', id: 'univrm/humanoid/humanoid_overview' },
          { type: 'doc', id: 'univrm/humanoid/base_model' },
          { type: 'doc', id: 'univrm/humanoid/meshutility_humanoid' },
        ],
      },
      {
        type: 'category',
        label: 'Meta',
        items: [
          { type: 'doc', id: 'univrm/meta/univrm_meta' },
        ],
      },
      {
        type: 'category',
        label: 'FirstPerson',
        items: [
          { type: 'doc', id: 'univrm/firstperson/univrm_firstperson' },
        ],
      },
      {
        type: 'category',
        label: 'Programming',
        link: { type: 'doc', id: 'univrm/programming/index' },
        items: [
        ],
      },
    ],
  }],
  gltfSidebar: [{
    type: 'category',
    label: 'glTF',
    link: { type: 'doc', id: 'gltf/index' }, items: [
      { type: 'doc', id: 'gltf/glb_import' },
      { type: 'doc', id: 'gltf/glb_export' },
      { type: 'doc', id: 'gltf/animation_exporter' },
      { type: 'doc', id: 'gltf/emission_glow' },
      { type: 'doc', id: 'gltf/mesh_utility' },
    ]
  }],
  vrm1Sidebar: [{
    type: 'category',
    label: 'Vrm-1.0',
    link: { type: 'doc', id: 'vrm1/index' },
    items: [
      { type: 'doc', id: 'vrm1/changed' },
    ],
  }],
  univrm1Sidebar: [{
    type: 'category',
    label: 'UniVRM-1.0',
    link: { type: 'doc', id: 'univrm1/index' },
    items: [
      { type: 'doc', id: 'univrm1/folder_structure' },
      {
        type: 'category',
        label: 'VRM-1.0モデルを作成する',
        link: { type: 'doc', id: 'univrm1/vrm1_tutorial/index' },
        items: [
          { type: 'doc', id: 'univrm1/vrm1_tutorial/first_export_from_fbx' },
          { type: 'doc', id: 'univrm1/vrm1_tutorial/vrm_object' },
          { type: 'doc', id: 'univrm1/vrm1_tutorial/meta' },
          { type: 'doc', id: 'univrm1/vrm1_tutorial/expression' },
          { type: 'doc', id: 'univrm1/vrm1_tutorial/lookat' },
          { type: 'doc', id: 'univrm1/vrm1_tutorial/firstperson' },
          { type: 'doc', id: 'univrm1/vrm1_tutorial/springbone' },
          { type: 'doc', id: 'univrm1/vrm1_tutorial/material' },
          { type: 'doc', id: 'univrm1/vrm1_tutorial/constraint' },
        ]
      },
      {
        type: 'category',
        label: 'VRM-0.x モデルを VRM-1.0 モデルにアップグレードする',
        link: { type: 'doc', id: 'univrm1/migrate_vrm0/index' },
        items: [
          { type: 'doc', id: 'univrm1/migrate_vrm0/feature' },
          { type: 'doc', id: 'univrm1/migrate_vrm0/migrate_editor' },
        ]
      },
      { type: 'doc', id: 'univrm1/import/index' },
    ],
  }],


  unihumanoidSidebar: [{ type: 'autogenerated', dirName: 'unihumanoid' }],
  apiSidebar: [{
    type: 'category',
    label: 'UniVRM API',
    link: { type: 'doc', id: 'api/index' },
    items: [
      {
        type: 'category',
        label: 'Sample',
        items: [
          { type: 'doc', id: 'api/sample/SimpleViewer' },
          { type: 'doc', id: 'api/sample/RuntimeExporterSample' },
          { type: 'doc', id: 'api/sample/FirstPersonSample' },
          { type: 'doc', id: 'api/sample/AnimationBridgeSample' },
        ],
      },
      { type: 'doc', id: 'api/firstperson' },
      { type: 'doc', id: 'api/0_36_update' },
      { type: 'doc', id: 'api/0_44_runtime_import' },
      { type: 'doc', id: 'api/0_58_blendshape' },
      { type: 'doc', id: 'api/how_to_impl_extension' },
      { type: 'doc', id: 'api/0_68_runtime_import' },
      { type: 'doc', id: 'api/0_76_texture_deserializer' },
      { type: 'doc', id: 'api/0_77_runtime_import' },
      { type: 'doc', id: 'api/0_79_runtime_import' },
      { type: 'doc', id: 'api/0_82_glb_import' },
      { type: 'doc', id: 'api/0_82_runtime_import' },
      { type: 'doc', id: 'api/how_to_customize_material_import' },
      { type: 'doc', id: 'api/fast_spring_bone' },
      { type: 'doc', id: 'api/0_87_runtime_import' },
      { type: 'doc', id: 'api/0_95_dispose' },
      { type: 'doc', id: 'api/0_95_highlevel' },
      { type: 'doc', id: 'api/0_96_1_use_gamma_colorspace' },
      { type: 'doc', id: 'api/0_106_spring_manual_update' },
      { type: 'doc', id: 'api/0_112_urp' },
      { type: 'doc', id: 'api/api_update' },
      { type: 'doc', id: 'api/vrm1_controlrig' },
      { type: 'doc', id: 'api/vrm1_firstperson' },
      { type: 'doc', id: 'api/vrm1_load' },
      { type: 'doc', id: 'api/vrm1_migration' },
      { type: 'doc', id: 'api/vrm1_springbone' },
      { type: 'doc', id: 'api/runtime_resource_management' },
      { type: 'doc', id: 'api/texture_manipulation' },
      { type: 'doc', id: 'api/coordinate' },
      { type: 'doc', id: 'api/first_person' },
      { type: 'doc', id: 'api/scripted_importer' },
      { type: 'doc', id: 'api/transparent_zwrite' },
      { type: 'doc', id: 'api/format' },
    ]
  }],
  releaseSidebar: [{
    type: 'category',
    label: 'ReleaseNote',
    link: { type: 'doc', id: 'release/index' },
    items: [
      { type: 'doc', id: 'release/unitypackage' },
      {
        type: 'category',
        label: '~v0.55',
        // link: { type: 'doc', id: 'release/055/index' },
        items: [{ type: 'autogenerated', dirName: 'release/055' }]
      },
      {
        type: 'category',
        label: 'v0.56~',
        // link: { type: 'doc', id: 'release/056/index' },
        items: [{ type: 'autogenerated', dirName: 'release/056' }],
      },
      {
        type: 'category',
        label: 'v0.68~',
        // link: { type: 'doc', id: 'release/068/index' },
        items: [{ type: 'autogenerated', dirName: 'release/068' }]
      },
      {
        type: 'category',
        label: 'v0.75~',
        // link: { type: 'doc', id: 'release/079/index' },
        items: [{ type: 'autogenerated', dirName: 'release/079' }]
      },
      {
        type: 'category',
        label: 'v0.100~',
        // link: { type: 'doc', id: 'release/100/index' },
        items: [{ type: 'autogenerated', dirName: 'release/100' }]
      },
      {
        type: 'category',
        label: 'v0.112~',
        // link: { type: 'doc', id: 'release/112/index' },
        items: [{ type: 'autogenerated', dirName: 'release/112' }]
      },
      { type: 'doc', id: 'release/how_to_release' },
      { type: 'doc', id: 'release/how_to_translation' },
    ],
  }],
};

export default sidebars;
