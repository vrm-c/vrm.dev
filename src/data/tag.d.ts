export type Tag =
  | "CharacterPlatform"
  | "VrmAnimation"
  | "CharacterCreation"
  | "ImporterExporter"
  | "Streaming"
  | "MotionCapture"
  | "Animation"
  | "Photography"
  | "Metaverse"
  | "Game"
  | "WebBrowser"
  | "Viewer"
  | "UsingInternally"
  | "Other";

export type TagInfo = {
  flag: TagFlags;
  ja: string;
  en: string;
  color: string;
};
