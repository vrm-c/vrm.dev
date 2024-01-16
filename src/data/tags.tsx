export type TagType =
  | 'CharacterPlatform'
  | 'CharacterCreation'
  | 'ImporterExporter'
  | 'Broadcaster'
  | 'MotionCapture'
  | 'Animation'
  | 'Photograph'
  | 'Metaverse'
  | 'Game'
  | 'WebBrowser'
  | 'Viewer'
  | 'UsingInternal'
  | 'Other'
  ;


export type Tag = {
  ja: string,
  en: string,
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  'CharacterPlatform': {
    ja: '3Dキャラクターのプラットフォーム',
    en: '3D character platform',
    color: '#e9669e',
  },
  'CharacterCreation': {
    ja: 'キャラメイクツール',
    en: '3D character creation',
    color: '#dfd545',
  },
  'ImporterExporter': {
    ja: 'プラグイン',
    en: 'Plugin',
    color: '#39ca30',
  },
  'Broadcaster': {
    ja: '配信ツール',
    en: 'broadcaster',
    color: '#a44fb7',
  },
  'MotionCapture': {
    ja: 'モーションキャプチャー',
    en: 'MotionCapture',
    color: '#127f82',
  },
  'Animation': {
    ja: 'アニメーション',
    en: 'Animation',
    color: '#fe6829',
  },
  'Photograph': {
    ja: '撮影',
    en: 'Photograph',
    color: '#8c2f00',
  },
  'Metaverse': {
    ja: 'メタバース',
    en: 'Metaverse',
    color: '#4267b2',
  },
  'Game': {
    ja: 'ゲーム',
    en: 'Game',
    color: '#1de9ad',
  },
  'WebBrowser': {
    ja: 'ウェブブラウザー',
    en: 'WebBrowser',
    color: '#ffcfc3',
  },
  'Viewer': {
    ja: 'ビューワー',
    en: 'Viewer',
    color: '#ed62ff',
  },
  'UsingInternal': {
    ja: '内部でVrmを使っている',
    en: 'UseInternal',
    color: '#f34545',
  },
  'Other': {
    ja: 'その他',
    en: 'Other',
    color: '#6b6b6b',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
