import type { Tag } from "./tag.d.ts";

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
