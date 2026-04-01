import horizontal from "./horizontal.png";
import logomarkGreen from "./logomarkGreen.png";
import logomarkWhite from "./logomarkWhite.png";
import whiteExtended from "./whiteExtended.png";
import whiteHorizontal from "./whiteHorizontal.png";

export const logoAssets = {
  primaryHorizontal: horizontal,
  whiteHorizontal,
  whiteTagline: whiteExtended,
  logomarkGreen,
  logomarkWhite,
} as const;

export type LogoAssetKey = keyof typeof logoAssets;
