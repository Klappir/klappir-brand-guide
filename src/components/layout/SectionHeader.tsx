import { guideSectionLookup, type GuideSectionId } from "../../content/brandGuide";
import styles from "../BrandGuidePage.module.css";

type SectionHeaderProps = {
  sectionId: GuideSectionId;
};

export function SectionHeader({ sectionId }: SectionHeaderProps) {
  const section = guideSectionLookup[sectionId];

  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionEyebrow}>
        {section.number} / {section.eyebrow}
      </div>
      <h2 className={styles.sectionTitle}>{section.title}</h2>
      <p className={styles.sectionDescription}>{section.description}</p>
    </div>
  );
}
