import type { PropsWithChildren } from "react";

import styles from "../BrandGuidePage.module.css";

export function GuideTitle({ children }: PropsWithChildren) {
  return <div className={styles.guideTitle}>{children}</div>;
}
