import { logoAssets } from "../assets/logos";
import { guideSections } from "../content/brandGuide";
import { useSectionSpy } from "../hooks/useSectionSpy";
import { colors } from "../theme/tokens";
import styles from "./BrandGuidePage.module.css";
import { BrandCoreSections } from "./sections/BrandCoreSections";
import { CommunicationSections } from "./sections/CommunicationSections";
import { SystemSections } from "./sections/SystemSections";
import { TemplateSections } from "./sections/TemplateSections";

export function BrandGuidePage() {
  const sectionIds = guideSections.map((section) => section.id);
  const { activeSectionId, scrollToSection, scrollToTop } = useSectionSpy(sectionIds);

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <img
          src={logoAssets.primaryHorizontal}
          alt="Klappir"
          className={styles.navBrand}
          onClick={scrollToTop}
        />
        <div className={styles.navButtons}>
          {guideSections.map((section) => {
            const isActive = activeSectionId === section.id;

            return (
              <button
                key={section.id}
                type="button"
                aria-current={isActive ? "page" : undefined}
                className={`${styles.navButton} ${isActive ? styles.navButtonActive : ""}`.trim()}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.heroRing} />
        <div className={styles.heroEyebrow}>Brand Guidelines, 2026</div>
        <h1 className={styles.heroTitle}>
          Klappir <span className={styles.heroAccent}>The Sustainability Ecosystem</span>
        </h1>
        <p className={styles.heroDescription}>
          This guide defines the visual language, components, tone of voice, and standards for the
          Klappir brand and product.
        </p>
      </div>

      <BrandCoreSections />
      <CommunicationSections />
      <SystemSections />
      <TemplateSections />

      <footer className={styles.footer}>
        <img src={logoAssets.whiteTagline} alt="Klappir" className={styles.footerLogo} />
        <p className={styles.footerText}>Klappir Brand Guidelines · The sustainability ecosystem</p>
        <p className={styles.footerText}>© 2025 Klappir. All rights reserved.</p>
      </footer>
    </div>
  );
}
