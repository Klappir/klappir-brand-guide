import type { PropsWithChildren } from "react";

import styles from "../BrandGuidePage.module.css";

type PageSectionProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export function PageSection({ children, className, id }: PageSectionProps) {
  return (
    <section id={id} className={[styles.section, className].filter(Boolean).join(" ")}>
      {children}
    </section>
  );
}
