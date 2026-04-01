import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { colors } from "../../theme/tokens";
import styles from "../BrandGuidePage.module.css";

type ColorSwatchProps = {
  name: string;
  hex: string;
  outlined?: boolean;
};

export function ColorSwatch({ hex, name, outlined }: ColorSwatchProps) {
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const copiedToastTimeoutRef = useRef<number | null>(null);
  const borderColor = useMemo(
    () => (outlined ? colors.grey : "rgba(0,0,0,0.05)"),
    [outlined],
  );

  useEffect(() => {
    return () => {
      if (copiedToastTimeoutRef.current !== null) {
        window.clearTimeout(copiedToastTimeoutRef.current);
      }
    };
  }, []);

  const copyHexToClipboard = useCallback(() => {
    void navigator.clipboard?.writeText(hex);
    setShowCopiedToast(true);

    if (copiedToastTimeoutRef.current !== null) {
      window.clearTimeout(copiedToastTimeoutRef.current);
    }

    copiedToastTimeoutRef.current = window.setTimeout(() => {
      setShowCopiedToast(false);
      copiedToastTimeoutRef.current = null;
    }, 1600);
  }, [hex]);

  return (
    <div className={styles.colorSwatch}>
      <button
        type="button"
        className={styles.colorSwatchPreview}
        aria-label={`Copy ${name} hex code ${hex}`}
        title={`Copy ${hex}`}
        style={{ background: hex, border: `1.5px solid ${borderColor}` }}
        onClick={copyHexToClipboard}
      />
      {showCopiedToast ? (
        <div className={styles.colorSwatchToast} role="status" aria-live="polite">
          Hex code copied
        </div>
      ) : null}
      <div className={styles.colorSwatchName}>{name}</div>
      <div className={styles.colorSwatchHex}>{hex}</div>
    </div>
  );
}
