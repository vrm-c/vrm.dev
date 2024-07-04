import type { TagInfo } from "./tag.d.ts";
import { TagFlags } from "./tagflags";

export const tags: TagInfo[] = [
  // service...blue
  {
    flag: TagFlags.CharacterPlatform,
    ja: "3Dキャラクターのプラットフォーム",
    en: "Platform for 3D models",
    color: "#2f62fc",
  },
  {
    flag: TagFlags.Metaverse,
    ja: "メタバース",
    en: "Metaverse",
    color: "#4267b2",
  },
  {
    flag: TagFlags.UsingInternally,
    ja: "内部でVRMを使っている",
    en: "Using VRM internally",
    color: "#42b2a3",
  },
  // character make / devlopment...green
  {
    flag: TagFlags.CharacterCreation,
    ja: "Vrm作成(キャラメイクツール)",
    en: "MakeVrm(Character maker)",
    color: "#127f82",
  },
  {
    flag: TagFlags.ImporterExporter,
    ja: "プラグイン",
    en: "Plugin",
    color: "#21731b"
  },
  // animation / capture / streaming...red
  {
    flag: TagFlags.Game,
    ja: "ゲーム",
    en: "Game",
    color: "#f34545"
  },
  {
    flag: TagFlags.Streaming,
    ja: "配信ツール",
    en: "Live streaming tool",
    color: "#801cea",
  },
  {
    flag: TagFlags.Photography,
    ja: "撮影",
    en: "Photography",
    color: "#73df45"
  },
  {
    flag: TagFlags.MotionCapture,
    ja: "モーションキャプチャー",
    en: "MotionCapture",
    color: "#ffb300",
  },
  {
    flag: TagFlags.Animation,
    ja: "アニメーション",
    en: "Animation",
    color: "#fe6829"
  },
  {
    flag: TagFlags.WebBrowser,
    ja: "ウェブブラウザー",
    en: "WebBrowser",
    color: "#ffcfc3",
  },
  {
    flag: TagFlags.Viewer,
    ja: "ビューワー",
    en: "Viewer",
    color: "#ed62ff"
  },
  //
  {
    flag: TagFlags.VrmAnimation,
    ja: "Vrmアニメーション",
    en: "VrmAnimation",
    color: "#8c2f00",
  },
  {
    flag: TagFlags.Vrm10,
    ja: "Vrm-1.0",
    en: "Vrm-1.0",
    color: "#8c2f00",
  },
  {
    flag: TagFlags.FaceTracking,
    ja: "フェイストラッキング",
    en: "FaceTracking",
    color: "#ffb300"
  },
  {
    flag: TagFlags.VrmHelper,
    ja: "Vrm作成(Baseモデルが必要)",
    en: "VrmMakeHelper(Requires base model)",
    color: "#127f82"
  },
  //
  {
    flag: TagFlags.Other,
    ja: "その他",
    en: "Other",
    color: "#6b6b6b"
  },
];
