import type { CSSProperties, PropsWithChildren } from "react";

import styles from "../BrandGuidePage.module.css";

type CardProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

export function Card({ children, className, style }: CardProps) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
