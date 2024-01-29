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
  tag: Tag;
  ja: string;
  en: string;
  color: string;
};
