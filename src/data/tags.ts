import type { Tag, TagInfo } from "./tag.d.ts";

export const tags: TagInfo[] = [
  // service...blue
  {
    tag: "CharacterPlatform",
    ja: "3Dキャラクターのプラットフォーム",
    en: "Platform for 3D models",
    color: "#2f62fc",
  },
  { tag: "Metaverse", ja: "メタバース", en: "Metaverse", color: "#4267b2" },
  {
    tag: "UsingInternally",
    ja: "内部でVRMを使っている",
    en: "Using VRM internally",
    color: "#42b2a3",
  },
  // character make / devlopment...green
  {
    tag: "CharacterCreation",
    ja: "キャラメイクツール",
    en: "Character maker",
    color: "#127f82",
  },
  { tag: "ImporterExporter", ja: "プラグイン", en: "Plugin", color: "#21731b" },
  // animation / capture / streaming...red
  { tag: "Game", ja: "ゲーム", en: "Game", color: "#f34545" },
  {
    tag: "Streaming",
    ja: "配信ツール",
    en: "Live streaming tool",
    color: "#801cea",
  },
  { tag: "Photography", ja: "撮影", en: "Photography", color: "#73df45" },
  {
    tag: "MotionCapture",
    ja: "モーションキャプチャー",
    en: "MotionCapture",
    color: "#ffb300",
  },
  { tag: "Animation", ja: "アニメーション", en: "Animation", color: "#fe6829" },
  {
    tag: "WebBrowser",
    ja: "ウェブブラウザー",
    en: "WebBrowser",
    color: "#ffcfc3",
  },
  { tag: "Viewer", ja: "ビューワー", en: "Viewer", color: "#ed62ff" },
  // {
  //   tag: "VrmAnimation",
  //   ja: "Vrmアニメーション",
  //   en: "VrmAnimation",
  //   color: "#8c2f00",
  // },
  { tag: "Other", ja: "その他", en: "Other", color: "#6b6b6b" },
];
