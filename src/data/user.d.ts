import type { Tag } from "./tag.d.ts";

export type UserInfo = {
  title: string;
  url: string;
  description?: string;
  // ogp image url
  preview?: string;
};

export type User = {
  tag: Tag;
  ja: UserInfo;
  en?: UserInfo;
  // `1.0 support` or `1.0 only` or `0.x only` else ?
  vrm?: string;
};
