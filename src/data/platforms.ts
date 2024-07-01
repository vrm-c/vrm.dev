import type { PlatformInfo } from "./platform.d.ts";
import { PlatformFlags } from "./platformflags";

export const platforms: PlatformInfo[] = [
  {
    flag: PlatformFlags.Windows,
    label: "Windows",
    color: "#888888",
  },
  {
    flag: PlatformFlags.macOS,
    label: "macOS",
    color: "#888888",
  },
  {
    flag: PlatformFlags.Android,
    label: "Android",
    color: "#888888",
  },
  {
    flag: PlatformFlags.iOS,
    label: "iOS",
    color: "#888888",
  },
  {
    flag: PlatformFlags.WebBrowser,
    label: "WebBrowser",
    color: "#888888",
  },
];
