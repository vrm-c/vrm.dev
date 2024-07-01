export type Platform =
  | "Windows"
  | "Android"
  | "iOS"
  ;

export type PlatformInfo = {
  flag: PlatformFlags;
  label: string;
  color: string;
};
