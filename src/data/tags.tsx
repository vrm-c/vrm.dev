export type TagType =
  | 'CharacterPlatform'
  | 'CharacterCreation'
  | 'ImporterExporter'
  | 'Streaming'
  | 'MotionCapture'
  | 'Animation'
  | 'Photography'
  | 'Metaverse'
  | 'Game'
  | 'WebBrowser'
  | 'Viewer'
  | 'UsingInternally'
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
    en: 'Platform for 3D models',
    color: '#e9669e',
  },
  'CharacterCreation': {
    ja: 'キャラメイクツール',
    en: 'Character maker',
    color: '#dfd545',
  },
  'ImporterExporter': {
    ja: 'プラグイン',
    en: 'Plugin',
    color: '#39ca30',
  },
  'Streaming': {
    ja: '配信ツール',
    en: 'Live streaming tool',
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
  'Photography': {
    ja: '撮影',
    en: 'Photography',
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
  'UsingInternally': {
    ja: '内部でVRMを使っている',
    en: 'Using VRM internally',
    color: '#f34545',
  },
  'Other': {
    ja: 'その他',
    en: 'Other',
    color: '#6b6b6b',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
