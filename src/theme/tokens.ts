export const colors = {
  green: "#3C9E76",
  lightGreen: "#E2EDE8",
  blue: "#3F6F96",
  lightBlue: "#DCE7EF",
  darkGreen: "#075A38",
  purple: "#62469F",
  yellow: "#E8AC58",
  orange: "#E88358",
  peach: "#FA4D56",
  lightPeach: "#FFEDEE",
  black: "#000000",
  secondaryText: "#666666",
  grey: "#E1E1E1",
  lightGrey: "#EFEFEF",
  white: "#FFFFFF",
  criticalError: "#DA1E28",
  success: "#42BE65",
  warning: "#F1C21B",
  info: "#0043CE",
  pageBackground: "#FAFAFA",
  darkSurface: "#1A1A1A",
} as const;

export const spacing = {
  navHeight: 60,
  sectionPaddingY: 90,
  sectionPaddingX: 48,
  pageMaxWidth: 1200,
  heroTopPadding: 110,
  heroBottomPadding: 90,
  sectionGap: 48,
  cardPadding: 28,
  cardRadius: 14,
  controlRadius: 8,
} as const;

export const shadows = {
  cardNeutral: "0 0 20px rgba(0, 0, 0, 0.1)",
  cardHover: "0 16px 30px rgba(0, 0, 0, 0.1)",
  floatingCard: "0 4px 18px rgba(0, 0, 0, 0.05)",
  colorSwatchHover: "0 6px 18px rgba(0, 0, 0, 0.1)",
  logoCardHover: "0 8px 28px rgba(0, 0, 0, 0.06)",
} as const;

export const typography = {
  fontFamily: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

export const motion = {
  sectionObserverRootMargin: "-30% 0px -60% 0px",
  scrollOffset: 70,
} as const;
