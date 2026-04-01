import { useCallback, useEffect, useMemo, useState } from "react";

import { motion } from "../theme/tokens";

export function useSectionSpy(sectionIds: string[]) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] ?? "");

  const ids = useMemo(() => sectionIds, [sectionIds]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: motion.sectionObserverRootMargin },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [ids]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const top = element.getBoundingClientRect().top + window.scrollY - motion.scrollOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return {
    activeSectionId,
    scrollToSection,
    scrollToTop,
  };
}
