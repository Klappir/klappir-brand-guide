import { colors } from "../theme/tokens";

export type GuideSectionId =
  | "values"
  | "logo"
  | "colours"
  | "charts"
  | "typography"
  | "writing"
  | "spacing"
  | "buttons"
  | "grid"
  | "effects"
  | "navigation"
  | "forms"
  | "channels"
  | "tone"
  | "photography"
  | "icons"
  | "a11y"
  | "email"
  | "newsletter";

export type GuideSectionMeta = {
  id: GuideSectionId;
  label: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
};

export const guideSections: GuideSectionMeta[] = [
  {
    id: "values",
    label: "Values",
    number: "01",
    eyebrow: "Brand foundation",
    title: "Our Values",
    description:
      "Three core values shape everything we build, from the platform itself to how we communicate with customers and partners.",
  },
  {
    id: "logo",
    label: "Logo",
    number: "02",
    eyebrow: "Identity",
    title: "Logo",
    description:
      'The Klappir logo centres on the leaf mark, a symbol of growth, sustainability, and circular thinking. The current tagline is "The sustainability ecosystem."',
  },
  {
    id: "colours",
    label: "Colours",
    number: "03",
    eyebrow: "Colour system",
    title: "Colours",
    description:
      "Built on green and blue to reflect sustainability and trust. Neutral tones support readability, while accent colours serve functional roles across the product.",
  },
  {
    id: "charts",
    label: "Charts",
    number: "04",
    eyebrow: "Data visualisation",
    title: "Graph and chart colours",
    description:
      "A dedicated spectrum for data visualisations. Each group provides four shades, from light backgrounds to saturated foregrounds.",
  },
  {
    id: "typography",
    label: "Typography",
    number: "05",
    eyebrow: "Typography",
    title: "IBM Plex Sans",
    description:
      "IBM Plex Sans is the sole typeface across the Klappir brand and product. Its clean, modern character balances professionalism with approachability.",
  },
  {
    id: "writing",
    label: "Writing",
    number: "06",
    eyebrow: "Writing style",
    title: "Language and formatting",
    description:
      "Consistent writing builds trust. These rules apply to all product UI, marketing materials, emails, and support conversations. We always use British English.",
  },
  {
    id: "spacing",
    label: "Spacing",
    number: "07",
    eyebrow: "Spacing",
    title: "Spacing Scale",
    description:
      "A consistent 4px base unit keeps layouts aligned and predictable. All spacing values are multiples of 4.",
  },
  {
    id: "buttons",
    label: "Buttons",
    number: "08",
    eyebrow: "Components",
    title: "Buttons",
    description:
      "Primary buttons use brand green. Secondary buttons are outlined. Danger actions use peach/red. Icons pair with labels for clarity.",
  },
  {
    id: "grid",
    label: "Grid",
    number: "09",
    eyebrow: "Layout",
    title: "Grid System",
    description:
      "Desktop uses a 12-column grid with a 288px left offset for the sidebar. The base grid unit is 8px (fluid).",
  },
  {
    id: "effects",
    label: "Effects",
    number: "10",
    eyebrow: "Effects",
    title: "Shadows and Elevation",
    description:
      "Two card shadow levels create depth. Neutral uses a subtle even shadow; hover lifts with a downward offset.",
  },
  {
    id: "navigation",
    label: "Navigation",
    number: "11",
    eyebrow: "Navigation",
    title: "Side Navigation",
    description:
      "Active states use brand green with a light green background. The nav can collapse to icon-only mode. Settings nav is a separate panel.",
  },
  {
    id: "forms",
    label: "Forms",
    number: "12",
    eyebrow: "Inputs",
    title: "Form Fields",
    description:
      "Available in 40px and 48px heights. Validation states include error, info, and success, each with a helper message below.",
  },
  {
    id: "channels",
    label: "Channels",
    number: "13",
    eyebrow: "Digital communication standards",
    title: "Channel Guidelines",
    description:
      "Every channel has a different context, but the same brand. These rules define what is appropriate for each communication tool.",
  },
  {
    id: "tone",
    label: "Tone",
    number: "14",
    eyebrow: "Communication",
    title: "Tone of Voice",
    description:
      "Klappir's voice is professional, warm, and clear. We write as experts who care. Warmth comes from the writing itself.",
  },
  {
    id: "photography",
    label: "Photography",
    number: "15",
    eyebrow: "Photography and illustration",
    title: "Visual Direction",
    description:
      "Photography and illustration shape how Klappir is perceived beyond the product. These guidelines ensure consistency across marketing, presentations, and social media.",
  },
  {
    id: "icons",
    label: "Iconography",
    number: "16",
    eyebrow: "Iconography",
    title: "Icon System",
    description:
      "Icons are outline-style, stroke-based, and drawn at a consistent 2px stroke weight. They come in three sizes to match the component scale across the product.",
  },
  {
    id: "a11y",
    label: "Accessibility",
    number: "17",
    eyebrow: "Accessibility",
    title: "Accessibility",
    description:
      "Klappir products should be usable by everyone. Colour contrast, keyboard navigation, and clear labelling are not optional.",
  },
  {
    id: "email",
    label: "Email",
    number: "18",
    eyebrow: "Templates",
    title: "Email Template",
    description:
      "Transactional emails use a clean single-column layout. No emojis, no excessive exclamation marks. Below the preview are rules for what can and cannot be customised.",
  },
  {
    id: "newsletter",
    label: "Newsletter",
    number: "19",
    eyebrow: "Newsletter Template",
    title: "Newsletter Email",
    description:
      "A recurring template for monthly or fortnightly updates. The structure stays fixed; only the content blocks change. Designed for sustainability updates, product news, and industry insights.",
  },
];

export const guideSectionLookup = Object.fromEntries(
  guideSections.map((section) => [section.id, section]),
) as Record<GuideSectionId, GuideSectionMeta>;

export const guideValues = [
  {
    title: "Professional",
    description:
      "We deliver with competence and reliability. Our platform, communications, and design reflect precision, clarity, and respect for our users' time.",
  },
  {
    title: "Innovative",
    description:
      "We push boundaries in sustainability technology. Our approach is forward-thinking, data-driven, and always evolving to meet the challenges of a changing world.",
  },
  {
    title: "Caring",
    description:
      "We care deeply about our planet, our customers, and each other. Empathy and responsibility run through every product decision and every message we send.",
  },
] as const;

export const logoMisuseItems = [
  "Don't stretch or distort the logo",
  "Don't change the logo colours",
  "Don't place on busy backgrounds",
  "Don't use the old tagline",
  "Don't use white logo on green background",
] as const;

export const logoSpecs = [
  {
    title: "Minimum size",
    description: "Full logo: 120px wide\nLogomark: 24×24px",
  },
  {
    title: "File formats",
    description: "SVG for digital, PNG for web\nEPS/PDF for print",
  },
  {
    title: "Background rule",
    description: "Dark logo on light BG\nWhite logo on dark BG",
  },
] as const;

export const colorGroups = [
  {
    title: "Primary",
    swatches: [
      { name: "Green", hex: colors.green },
      { name: "Light Green", hex: colors.lightGreen },
      { name: "Blue", hex: colors.blue },
      { name: "Light Blue", hex: colors.lightBlue },
    ],
  },
  {
    title: "Secondary",
    swatches: [
      { name: "Dark Green", hex: colors.darkGreen },
      { name: "Purple", hex: colors.purple },
      { name: "Yellow", hex: colors.yellow },
      { name: "Orange", hex: colors.orange },
    ],
  },
  {
    title: "Neutral",
    swatches: [
      { name: "Black", hex: colors.black },
      { name: "Secondary", hex: colors.secondaryText },
      { name: "Grey", hex: colors.grey },
      { name: "Light Grey", hex: colors.lightGrey },
      { name: "White", hex: colors.white, outlined: true },
    ],
  },
  {
    title: "Feedback",
    swatches: [
      { name: "Critical Error", hex: colors.criticalError },
      { name: "Inline Error", hex: colors.peach },
      { name: "Success", hex: colors.success },
      { name: "Warning", hex: colors.warning },
      { name: "Info", hex: colors.info },
      { name: "Light Peach", hex: colors.lightPeach },
    ],
  },
] as const;

export const chartGroups = [
  ["Red", "#FFD7D9", "#A2191F", "#FFC2C5", "#FF8389"],
  ["Magenta", "#FFD6E8", "#9F1853", "#FFBDDA", "#FF7EB6"],
  ["Purple", "#E8DAFF", "#6929C4", "#DCC7FF", "#BE95FF"],
  ["Blue", "#D0E2FF", "#0043CE", "#B8D3FF", "#78A9FF"],
  ["Cyan", "#BAE6FF", "#005577", "#99DAFF", "#33A1FF"],
  ["Teal", "#9EF0F0", "#005D5D", "#57E5E5", "#08BDBA"],
  ["Green", "#A7F0BA", "#0E6027", "#74E792", "#42BE65"],
] as const;

export const appNavigationItems = [
  "Home",
  "Assets",
  "Value Chain",
  "Surveys",
  "Data",
  "Dashboard",
  "Insights",
  "KPIs",
  "Reports",
] as const;

export const appNavigationIcons = [
  "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
  "M12 2L2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "M12 9a3 3 0 100 6 3 3 0 000-6z",
  "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z",
  "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "M18 20V10M12 20V4M6 20v-6",
  "M12 2a10 10 0 100 20 10 10 0 000-20zM12 16v-4M12 8h.01",
  "M3 12h18M12 3v18",
  "M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
] as const;

export const typographyGroups = [
  {
    title: "Headlines",
    rows: [
      { weight: 700, sizeLabel: "32px", size: 32, sample: "Headline 1" },
      { weight: 700, sizeLabel: "24px", size: 24, sample: "Headline 2" },
      { weight: 700, sizeLabel: "20px", size: 20, sample: "Headline 3" },
    ],
  },
  {
    title: "Body",
    rows: [
      {
        weight: 400,
        sizeLabel: "16px",
        size: 16,
        sample: "Body text for primary content and paragraph copy.",
      },
      {
        weight: 700,
        sizeLabel: "16px",
        size: 16,
        sample: "Body bold for emphasis within running text.",
      },
      {
        weight: 400,
        sizeLabel: "14px",
        size: 14,
        sample: "Secondary information and supporting content.",
      },
      {
        weight: 700,
        sizeLabel: "14px",
        size: 14,
        sample: "Labels and compact emphasis.",
      },
      {
        weight: 400,
        sizeLabel: "12px",
        size: 12,
        sample: "Captions, metadata, and auxiliary info.",
      },
      {
        weight: 700,
        sizeLabel: "12px",
        size: 12,
        sample: "Small labels and badges.",
      },
    ],
  },
  {
    title: "Alternative Label",
    rows: [
      { weight: 400, sizeLabel: "14px", size: 14, sample: "Alt Label at 14px" },
      { weight: 400, sizeLabel: "13px", size: 13, sample: "Alt Label at 13px" },
    ],
  },
] as const;

export const britishVsAmericanSpelling = [
  ["colour", "color"],
  ["organise", "organize"],
  ["analyse", "analyze"],
  ["centre", "center"],
  ["licence (noun)", "license"],
  ["customise", "customize"],
  ["behaviour", "behavior"],
  ["recognise", "recognize"],
  ["favourite", "favorite"],
  ["catalogue", "catalog"],
] as const;

export const britishConventions = [
  ["Dates", "DD MMM YYYY (15 Jan 2025)"],
  ["Quotation marks", 'Use double quotes: "example"'],
  ["Oxford comma", "Use it: red, green, and blue"],
  ["s vs. z", "Use -ise, -yse endings"],
  ["Collective nouns", 'Singular: "the team is" (not "are")'],
  ["Full stops", "No full stop after Mr, Mrs, Dr"],
] as const;

export const writingRuleCards = [
  {
    title: "Product naming",
    rows: [
      ["Full name", "Klappir Sustainability Platform"],
      ["Short form", 'Klappir (never "the Klappir")'],
      ["Tagline", "The sustainability ecosystem"],
      ["In a sentence", '"Sign in to Klappir to view your data."'],
      ["Never", '"the Klappir app" or "Klappir software"'],
    ],
  },
  {
    title: "Capitalisation",
    rows: [
      ["General rule", "Sentence case everywhere"],
      ["Feature names", "Capitalised as proper nouns: Value Chain, Due Diligence"],
      ["UI labels", 'Sentence case: "Select all"'],
      ["Headlines", "Sentence case in product and marketing"],
      ["Buttons", '"Create account", "Export"'],
      ["Acronyms", "All caps: KPI, ESG, GHG"],
    ],
  },
  {
    title: "Numbers and formatting",
    rows: [
      ["Dates", "DD MMM YYYY (15 Jan 2025)"],
      ["Numbers < 10", 'Spell out: "three surveys"'],
      ["Numbers ≥ 10", 'Digits: "12 companies"'],
      ["Percentages", 'Digits + symbol: "42%"'],
      ["Large numbers", 'Commas: "1,250 tonnes"'],
      ["Units", 'Space: "10 kg", "5 MWh"'],
    ],
  },
] as const;

export const phrasingColumns = {
  preferred: [
    '"Sign in" (not "log in" in customer-facing copy)',
    '"Sustainability survey" (lowercase "survey")',
    '"Your value chain" (not "the value chain")',
    '"We" when speaking as Klappir',
    '"You" when addressing the user',
  ],
  avoid: [
    '"Click here" (use descriptive link text)',
    '"Please" in every sentence (once is enough)',
    "Double exclamation marks (!!)",
    "Jargon without explanation on first use",
    "Passive voice when active is clearer",
  ],
} as const;

export const spacingScale = [
  [4, "xs"],
  [8, "sm"],
  [12, "md"],
  [16, "lg"],
  [24, "xl"],
  [32, "2xl"],
  [48, "3xl"],
  [64, "4xl"],
] as const;

export const spacingPatterns = [
  ["Card padding", "24px (internal), 16px (compact)"],
  ["Section spacing", "48px between major sections"],
  ["Component gap", "8px within, 16px between groups"],
  ["Button padding", "10px 24px (40h), 14px 28px (48h)"],
  ["Input height", "40px (standard), 48px (large)"],
  ["Border radius", "8px (buttons/inputs), 16px (cards)"],
] as const;

export const buttonShowcase = [
  ["Primary, 40px", "primary"],
  ["Primary, 48px", "primaryLarge"],
  ["Secondary, 40px", "secondary"],
  ["Secondary, 48px", "secondaryLarge"],
  ["With Icon", "withIcon"],
  ["Danger", "danger"],
] as const;

export const notificationBadges = [
  ["✓ Success message", "#e6f7ed", "#0e6027"],
  ["⚠ Error message", "#fff1f1", "#da1e28"],
  ["⚠ Warning message", "#fdf6e3", "#b28600"],
  ["ⓘ Info message", "#e8f1ff", "#0043ce"],
] as const;

export const gridMetrics = [
  ["288px", "Left Offset"],
  ["96px", "Column Width"],
  ["24px", "Gutter"],
  ["64px", "Top Nav"],
  ["8px", "Base Unit"],
] as const;

export const effectCards = [
  ["Card Neutral", "X 0 · Y 0\nBlur 20 · #000 @10%", "0 0 20px rgba(0,0,0,0.1)"],
  ["Card Hover", "X 0 · Y 16\nBlur 30 · #000 @10%", "0 16px 30px rgba(0,0,0,0.1)"],
] as const;

export const settingsNavigationItems = [
  "Profile",
  "My System Info",
  "Account",
  "Billing and Plans",
  "Users",
] as const;

export const formStates = [
  { label: "Label", placeholder: "Text here" },
  { label: "Focus State", value: "Focus state", borderColor: colors.green },
  {
    label: "Error State",
    value: "Error state",
    borderColor: colors.peach,
    background: colors.lightPeach,
    message: "⚠ Error message",
    messageColor: colors.peach,
  },
  {
    label: "Info State",
    value: "Info state",
    borderColor: colors.info,
    message: "ⓘ Info message",
    messageColor: colors.info,
  },
  {
    label: "Success State",
    value: "Success state",
    borderColor: colors.success,
    message: "✓ Success message",
    messageColor: colors.success,
  },
] as const;

export const channelGuidelines = [
  {
    title: "Email",
    tag: "Formal",
    tagColors: { background: colors.lightGreen, color: colors.darkGreen },
    description:
      "All outbound email must follow the Klappir email template. Use the approved logo, brand green CTA, and IBM Plex Sans. No emojis.",
    items: [
      "Subject lines: clear, under 60 characters",
      "One CTA per email (two max for long-form)",
      "Always include a plain-text alternative",
      'Sign off: "The Klappir Team" or named individual',
    ],
  },
  {
    title: "Intercom / live chat",
    tag: "Formal",
    tagColors: { background: colors.lightGreen, color: colors.darkGreen },
    description:
      "Intercom is often a customer's first real-time interaction. Professional, helpful, calm. No emojis, no slang.",
    items: [
      "Greet by name when available",
      "Acknowledge the question before answering",
      "Offer a next step or follow-up timeline",
      '"Is there anything else I can help with?"',
    ],
  },
  {
    title: "Social media",
    tag: "Semi-formal",
    tagColors: { background: colors.lightBlue, color: colors.blue },
    description:
      "Social channels allow a warmer voice, but still no emojis. Personality comes from the writing, not symbols.",
    items: [
      "Active, confident language",
      "Link to data or reports when possible",
      "Three hashtags maximum",
      "Reply promptly and constructively",
    ],
  },
  {
    title: "Internal (Slack, Teams)",
    tag: "Relaxed",
    tagColors: { background: "#FFF8E1", color: "#B28600" },
    description:
      "Internal communication is more flexible. Emojis and reactions are acceptable. Content that may be forwarded to a customer should follow external rules.",
    items: [
      "Professional when discussing customer issues",
      "Use threads to keep channels clean",
      "If it might be forwarded, write it carefully",
    ],
  },
] as const;

export const toneGuidelines = [
  {
    recommended: true,
    title: "Be warm and clear",
    description:
      "Write with empathy and clarity. Use plain language that respects the reader's time.",
    example:
      '"Hi Anna, your survey has been sent successfully. You\'ll receive a notification once the first responses come in."',
  },
  {
    recommended: false,
    title: "No emojis in communication",
    description:
      "Emojis are not appropriate in customer-facing communication. Express warmth through words.",
    example: '"Hey! 👋 Your survey is live! 🎉 Let us know if you need anything 😊"',
  },
  {
    recommended: true,
    title: "Be specific and helpful",
    description:
      "Give concrete information. If something went wrong, explain what happened and what the user can do next.",
    example:
      '"We weren\'t able to process your upload because the file exceeds 10 MB. Try compressing it or splitting it into smaller files."',
  },
  {
    recommended: false,
    title: "Don't be overly casual",
    description:
      "Avoid slang, excessive exclamation marks, and language that could feel dismissive.",
    example: '"Oops! Something went wrong lol. Give it another shot!"',
  },
] as const;

export const communicationPrinciples = {
  weAre: [
    "Professional but approachable",
    "Clear and specific",
    "Empathetic and supportive",
    "Confident without being arrogant",
  ],
  weAreNot: [
    "Stiff or impersonal",
    "Vague or hand-wavy",
    "Overly casual or emoji-heavy",
    "Dismissive of user concerns",
  ],
} as const;

export const photographyGuidelines = [
  {
    recommended: true,
    title: "Preferred subjects",
    description:
      "Show real people in real work environments. Sustainability is about action, so imagery should convey progress, collaboration, and purpose.",
    tags: [
      "People collaborating",
      "Data on screens",
      "Nature and environment",
      "Modern workplaces",
      "Industrial sites",
      "Renewable energy",
    ],
  },
  {
    recommended: false,
    title: "Avoid",
    description:
      'Steer clear of stock photo clichés, especially the "hands holding a globe" genre. Avoid overly saturated colours and compositions that feel artificial.',
    tags: [
      "Hands holding earth",
      "Single green leaf on white",
      "Generic handshake shots",
      "Overly retouched faces",
      "Dark or dystopian imagery",
    ],
  },
  {
    recommended: true,
    title: "Illustration style",
    description:
      "Illustrations should be clean, line-based, and use the brand colour palette. The leaf mark's circular, flowing quality is a good reference.",
    tags: ["Line art", "Brand colour palette", "Simple iconography", "Flat, no 3D"],
  },
  {
    recommended: true,
    title: "Colour treatment",
    description:
      "Photos should feel natural and slightly cool-toned. Green overlay at 10-20% opacity is acceptable. Never apply heavy filters.",
    tags: ["Natural tones", "Cool temperature", "Light green overlay OK"],
  },
] as const;

export const iconSizeGuidelines = [
  [
    16,
    "Small",
    "Used in compact UI elements, inline with 12px text, notification badges, and table rows.",
  ],
  [
    24,
    "Medium (default)",
    "Primary icon size for navigation items, buttons with icons, form field prefixes, and action menus.",
  ],
  [
    48,
    "Large",
    "Used for empty states, onboarding illustrations, import category icons, and feature highlights.",
  ],
] as const;

export const iconSamples = [
  ["Home", "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"],
  ["Export", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"],
  ["Delete", "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"],
  ["Settings", "M12 9a3 3 0 100 6 3 3 0 000-6z"],
  ["Chart", "M18 20V10M12 20V4M6 20v-6"],
  ["Document", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"],
  ["Info", "M12 2a10 10 0 100 20 10 10 0 000-20zM12 16v-4M12 8h.01"],
  ["Alert", "M12 2L1 21h22L12 2zM12 14V9M12 18h.01"],
] as const;

export const iconRules = [
  "Always use 2px stroke weight",
  "Rounded line caps and joins",
  "Use brand green (#3C9E76) for active/selected states",
  "Use secondary grey (#666666) for default/inactive states",
  "Maintain consistent optical size across the set",
  "Keep a 2px inner padding within the bounding box",
] as const;

export const iconAvoids = [
  "Filled/solid icons (use outline only)",
  "Mixing icon styles from different sets",
  "Icons smaller than 16px",
  "Colour icons except for status indicators (success, error, warning)",
  "Decorative icons without functional purpose",
  "Custom one-off icons that don't match the set",
] as const;

export const accessibilityCards = [
  {
    title: "Colour contrast",
    description:
      "All text must meet WCAG 2.1 AA: 4.5:1 for body text, 3:1 for large text (18px+ bold or 24px+). Never rely on colour alone to convey meaning.",
    callouts: [
      {
        text: "Green on White: 3.4:1 (large text only)",
        background: colors.green,
        color: colors.white,
      },
      {
        text: "Dark Green on White: 7.2:1 ✓",
        background: colors.darkGreen,
        color: colors.white,
      },
    ],
  },
  {
    title: "Keyboard and screen readers",
    description:
      "All interactive elements must be reachable by keyboard. Focus states should be clearly visible using the brand green outline. Use semantic HTML and ARIA labels where native elements are insufficient.",
  },
  {
    title: "Touch targets",
    description:
      "Minimum touch target of 44×44px on mobile and 32×32px on desktop. Buttons and nav items already meet this through their defined heights (40px, 48px).",
  },
  {
    title: "Motion and animation",
    description:
      "Respect the prefers-reduced-motion media query. All decorative animations should be suppressible. Never use flashing or strobing effects.",
  },
] as const;

export const emailFixedItems = [
  "Klappir logo in the header (position and size)",
  "Horizontal rule below the logo",
  "CTA button colour (brand green #3C9E76)",
  "CTA button border radius (8px)",
  "Font: IBM Plex Sans (or system fallback)",
  "Footer contact information",
  "Single-column layout",
  "White background, no background images",
] as const;

export const emailFlexibleItems = [
  "Headline text and company name",
  "Body copy (follow tone of voice guidelines)",
  "CTA button label (short and action-oriented)",
  "Expiry date or urgency messaging",
  "Number of body paragraphs",
  "Whether to include a 'Why received' section",
  "Support contact address",
] as const;

export const newsletterTemplateBlocks = [
  [
    "1. White header",
    "Logo + issue date on a white background with a bottom border. Clean and consistent with the transactional email style.",
  ],
  [
    "2. Featured story",
    "One lead article with a headline, 2-3 sentence summary, and a single CTA button. This is the main reason to open the email.",
  ],
  [
    "3. Two-column cards",
    "Two shorter updates side by side. Each gets a coloured category label, a headline, and a brief description. No CTA buttons here, just text.",
  ],
  [
    "4. Quick links",
    "A row of 3-5 text links to evergreen resources. These rarely change between issues.",
  ],
  [
    "5. Footer",
    "Copyright, unsubscribe link, and preference management. Required by law in most jurisdictions.",
  ],
] as const;

export const newsletterFixedItems = [
  "White header with dark logo and border",
  "Layout: hero + two cards + links + footer",
  "CTA button style (brand green, 8px radius)",
  "Category label colours (green, purple, blue)",
  "Font: IBM Plex Sans throughout",
  "Unsubscribe and preference links in footer",
  "Single-column max-width of 600px",
] as const;

export const newsletterFlexibleItems = [
  "Issue date in the header",
  "Featured story headline, summary, and CTA label",
  "Card headlines and descriptions",
  "Category labels (pick from: Product Update, Industry Insight, Event, Case Study, Tip)",
  "Quick links (swap in seasonal or campaign links)",
  "Preheader text (the preview line in inboxes)",
] as const;

export const newsletterCategoryColors = [
  ["Product Update", colors.green],
  ["Industry Insight", colors.blue],
  ["Event", colors.purple],
  ["Case Study", colors.orange],
  ["Tip", colors.yellow],
] as const;

export const newsletterToneRules = [
  "No emojis (same as all external communication)",
  "Subject lines: under 50 characters, no clickbait",
  "Preheader: complements the subject, not repeats it",
  "Featured story: informative, not salesy",
  "Card descriptions: 2 sentences maximum",
  "One CTA per email (the featured story button)",
  "Send frequency: monthly or fortnightly, never more",
] as const;
