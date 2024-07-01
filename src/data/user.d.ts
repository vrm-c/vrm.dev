import type { Tag } from "./tag.d.ts";
import type { PlatformFlags } from "./platformflags";

export type UserInfo = {
  title?: string;
  url?: string;
  description?: string;
  // ogp image url
  preview?: string;
};

export type User = {
  flags: TagFlags;
  platforms?: PlatformFlags,
  ja?: UserInfo;
  en?: UserInfo;
  updated?: Date,
};
