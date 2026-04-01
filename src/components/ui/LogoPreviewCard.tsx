import type { CSSProperties, PropsWithChildren } from "react";

import { colors } from "../../theme/tokens";
import styles from "../BrandGuidePage.module.css";

type LogoPreviewCardProps = PropsWithChildren<{
  label: string;
  background?: "default" | "dark" | "green";
  span?: 1 | 2;
}>;

export function LogoPreviewCard({
  background = "default",
  children,
  label,
  span = 1,
}: LogoPreviewCardProps) {
  const isDark = background === "dark" || background === "green";
  const style: CSSProperties = {
    background:
      background === "dark"
        ? colors.darkSurface
        : background === "green"
          ? colors.green
          : colors.white,
    gridColumn: span === 2 ? "span 2" : undefined,
  };

  return (
    <div className={styles.logoPreviewCard} style={style}>
      <span
        className={styles.logoPreviewLabel}
        style={{ color: isDark ? "rgba(255,255,255,0.5)" : colors.secondaryText }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}
