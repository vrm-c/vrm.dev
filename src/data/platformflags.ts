export enum PlatformFlags {
  None = 0,
  Windows = 1 << 0,
  macOS = 1 << 1,
  Android = 1 << 2,
  iOS = 1 << 3,
  WebBrowser = 1 << 4,
  WindowsVR = 1 << 5,
  MetaQuest = 1 << 6,
  Linux = 1 << 7,
  WebXR = 1 << 8,
}
