import {
  accessibilityCards,
  appNavigationIcons,
  appNavigationItems,
  buttonShowcase,
  effectCards,
  formStates,
  gridMetrics,
  iconAvoids,
  iconRules,
  iconSamples,
  iconSizeGuidelines,
  notificationBadges,
  settingsNavigationItems,
  spacingPatterns,
  spacingScale,
} from "../../content/brandGuide";
import { colors } from "../../theme/tokens";
import { Card } from "../layout/Card";
import { PageSection } from "../layout/PageSection";
import { SectionDivider } from "../layout/SectionDivider";
import { SectionHeader } from "../layout/SectionHeader";
import { GuideTitle } from "../ui/GuideTitle";

function DotList({ items, markerColor }: { items: readonly string[]; markerColor: string }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, color: colors.secondaryText, fontSize: 13, lineHeight: 2.2 }}>
      {items.map((item) => (
        <li key={item}>
          <span style={{ marginRight: 8, color: markerColor, fontWeight: 700 }}>·</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ButtonPreview({ variant }: { variant: (typeof buttonShowcase)[number][1] }) {
  const isPrimary = variant === "primary" || variant === "primaryLarge" || variant === "withIcon";
  const isSecondary = variant === "secondary" || variant === "secondaryLarge";
  const isLarge = variant === "primaryLarge" || variant === "secondaryLarge";
  const isDanger = variant === "danger";
  const withIcon = variant === "withIcon" || variant === "danger";

  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: isLarge ? "13px 26px" : "10px 22px",
        border: isSecondary ? `1.5px solid ${colors.grey}` : "none",
        borderRadius: 8,
        background: isPrimary ? colors.green : isSecondary ? colors.white : colors.lightPeach,
        color: isPrimary ? colors.white : isSecondary ? colors.black : colors.peach,
        fontFamily: "inherit",
        fontSize: isLarge ? 15 : 14,
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {withIcon && (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            d={
              variant === "danger"
                ? "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"
                : "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
            }
          />
        </svg>
      )}
      {variant === "withIcon" ? "Export" : variant === "danger" ? "Delete" : "Button"}
    </button>
  );
}

export function SystemSections() {
  return (
    <>
      <PageSection id="spacing">
        <SectionHeader sectionId="spacing" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
            gap: 12,
            marginBottom: 32,
          }}
        >
          {spacingScale.map(([size, token]) => (
            <div key={token} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: size,
                  height: size,
                  margin: "0 auto 8px",
                  borderRadius: 4,
                  background: colors.green,
                }}
              />
              <div style={{ color: colors.green, fontSize: 11, fontWeight: 600 }}>{size}px</div>
              <div style={{ color: colors.secondaryText, fontSize: 10 }}>{token}</div>
            </div>
          ))}
        </div>
        <Card>
          <GuideTitle>Common patterns</GuideTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
              color: colors.secondaryText,
              fontSize: 13,
            }}
          >
            {spacingPatterns.map(([title, description]) => (
              <div key={title}>
                <strong style={{ color: colors.black }}>{title}</strong>
                <br />
                {description}
              </div>
            ))}
          </div>
        </Card>
      </PageSection>
      <SectionDivider />

      <PageSection id="buttons">
        <SectionHeader sectionId="buttons" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
            gap: 20,
          }}
        >
          {buttonShowcase.map(([label, variant]) => (
            <Card key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  marginBottom: 14,
                  color: colors.secondaryText,
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
              <ButtonPreview variant={variant} />
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <GuideTitle>Notification badges</GuideTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 14,
              marginTop: 14,
            }}
          >
            {notificationBadges.map(([label, background, color]) => (
              <div
                key={label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 7,
                  background,
                  color,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </PageSection>
      <SectionDivider />

      <PageSection id="grid">
        <SectionHeader sectionId="grid" />
        <Card style={{ marginBottom: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 4, marginBottom: 14 }}>
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 52,
                  borderRadius: 4,
                  background: "rgba(60,158,118,0.1)",
                  color: colors.green,
                  fontSize: 10,
                  fontWeight: 600,
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </Card>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 20 }}>
          {gridMetrics.map(([value, label]) => (
            <div
              key={label}
              style={{
                padding: 18,
                textAlign: "center",
                background: colors.lightGreen,
                borderRadius: 10,
              }}
            >
              <div style={{ color: colors.green, fontSize: 26, fontWeight: 700 }}>{value}</div>
              <div style={{ marginTop: 3, color: colors.secondaryText, fontSize: 11 }}>{label}</div>
            </div>
          ))}
        </div>
      </PageSection>
      <SectionDivider />

      <PageSection id="effects">
        <SectionHeader sectionId="effects" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, marginBottom: 40 }}>
          {effectCards.map(([label, spec, shadow]) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 190,
                height: 150,
                background: colors.white,
                borderRadius: 14,
                boxShadow: shadow,
              }}
            >
              <div style={{ marginBottom: 3, fontSize: 12, fontWeight: 600 }}>{label}</div>
              <div
                style={{
                  color: colors.secondaryText,
                  fontSize: 10,
                  lineHeight: 1.5,
                  textAlign: "center",
                  whiteSpace: "pre-line",
                }}
              >
                {spec}
              </div>
            </div>
          ))}
        </div>
        <GuideTitle>Tabs</GuideTitle>
        <Card>
          <div style={{ display: "flex", borderBottom: `2px solid ${colors.grey}` }}>
            {["Selected Tab", "Tab", "Tab"].map((tab, index) => (
              <div
                key={`${tab}-${index}`}
                style={{
                  marginBottom: -2,
                  padding: "10px 20px",
                  borderBottom: `2px solid ${index === 0 ? colors.green : "transparent"}`,
                  color: index === 0 ? colors.green : colors.secondaryText,
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: index === 0 ? 700 : 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {tab}
              </div>
            ))}
          </div>
        </Card>
      </PageSection>
      <SectionDivider />

      <PageSection id="navigation">
        <SectionHeader sectionId="navigation" />
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            marginBottom: 28,
            background: colors.white,
            border: `1px solid ${colors.grey}`,
            borderRadius: 14,
          }}
        >
          <div style={{ width: 220, padding: "20px 14px", borderRight: `1px solid ${colors.grey}` }}>
            {appNavigationItems.map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 3,
                  padding: "9px 14px",
                  borderRadius: 7,
                  background: index === 0 ? colors.lightGreen : "transparent",
                  color: index === 0 ? colors.green : colors.secondaryText,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: index === 0 ? 600 : 400,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={appNavigationIcons[index]} />
                </svg>
                {item}
              </div>
            ))}
            <div style={{ margin: "12px 0", borderTop: `1px solid ${colors.grey}` }} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 14px",
                color: colors.secondaryText,
                fontSize: 13,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Knowledge Base
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 14px",
                color: colors.secondaryText,
                fontSize: 13,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
              </svg>
              Account Settings
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              background: colors.pageBackground,
              color: colors.secondaryText,
              fontSize: 13,
            }}
          >
            Main content area
          </div>
        </div>

        <GuideTitle>Settings navigation</GuideTitle>
        <Card style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {settingsNavigationItems.map((item, index) => (
              <div
                key={item}
                style={{
                  padding: "8px 16px",
                  border: `1px solid ${index === 0 ? colors.green : colors.grey}`,
                  borderRadius: 7,
                  background: index === 0 ? colors.lightGreen : "transparent",
                  color: index === 0 ? colors.green : colors.secondaryText,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: index === 0 ? 600 : 400,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </Card>

        <GuideTitle>Breadcrumbs</GuideTitle>
        <Card style={{ padding: 20 }}>
          <div style={{ marginBottom: 3, fontSize: 18, fontWeight: 700 }}>Due Diligence</div>
          <div style={{ color: colors.secondaryText, fontSize: 12 }}>
            Sent surveys <span style={{ margin: "0 5px" }}>›</span>
            <span style={{ color: colors.green, fontWeight: 500 }}>Dashboard</span>
          </div>
        </Card>
      </PageSection>
      <SectionDivider />

      <PageSection id="forms">
        <SectionHeader sectionId="forms" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
          {formStates.map((field) => (
            <div key={field.label} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <label style={{ fontSize: 12, fontWeight: 600 }}>{field.label}</label>
              <input
                type="text"
                defaultValue={"value" in field ? field.value : ""}
                placeholder={"placeholder" in field ? field.placeholder : undefined}
                readOnly={"value" in field}
                style={{
                  padding: "10px 12px",
                  border: `1.5px solid ${"borderColor" in field ? field.borderColor : colors.grey}`,
                  borderRadius: 7,
                  outline: "none",
                  background: "background" in field ? field.background : colors.white,
                  fontFamily: "inherit",
                  fontSize: 13,
                }}
              />
              {"message" in field ? (
                <div style={{ color: field.messageColor, fontSize: 11 }}>{field.message}</div>
              ) : null}
            </div>
          ))}
        </div>
      </PageSection>
      <SectionDivider />

      <PageSection id="icons">
        <SectionHeader sectionId="icons" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24,
            marginBottom: 40,
          }}
        >
          {iconSizeGuidelines.map(([size, label, description]) => (
            <Card key={size}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 64,
                    height: 64,
                    background: colors.lightGreen,
                    borderRadius: 12,
                  }}
                >
                  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={colors.green} strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path d="M9 22V12h6v10" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: colors.green, fontSize: 28, fontWeight: 700 }}>{size}px</div>
                  <div style={{ color: colors.secondaryText, fontSize: 13 }}>{label}</div>
                </div>
              </div>
              <p style={{ margin: 0, color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
                {description}
              </p>
            </Card>
          ))}
        </div>

        <GuideTitle>Icon samples</GuideTitle>
        <Card>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
            {iconSamples.map(([name, path]) => (
              <div key={name} style={{ width: 64, textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    margin: "0 auto 6px",
                    background: colors.lightGreen,
                    borderRadius: 10,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.green} strokeWidth="2">
                    <path d={path} />
                  </svg>
                </div>
                <div style={{ color: colors.secondaryText, fontSize: 10 }}>{name}</div>
              </div>
            ))}
          </div>
        </Card>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 24,
            marginTop: 24,
          }}
        >
          <Card>
            <h3 style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 10px", fontSize: 14, fontWeight: 700 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: colors.success }} />
              Icon Rules
            </h3>
            <DotList items={iconRules} markerColor={colors.green} />
          </Card>
          <Card>
            <h3 style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 10px", fontSize: 14, fontWeight: 700 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: colors.peach }} />
              Avoid
            </h3>
            <DotList items={iconAvoids} markerColor={colors.peach} />
          </Card>
        </div>
      </PageSection>
      <SectionDivider />

      <PageSection id="a11y">
        <SectionHeader sectionId="a11y" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}>
          {accessibilityCards.map((card) => (
            <Card key={card.title}>
              <h3 style={{ margin: "0 0 10px", fontSize: 15, fontWeight: 700 }}>{card.title}</h3>
              <p style={{ margin: 0, color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
                {card.title === "Motion and animation" ? (
                  <>
                    Respect the{" "}
                    <code
                      style={{
                        padding: "2px 6px",
                        background: colors.lightGrey,
                        borderRadius: 3,
                        fontSize: 12,
                      }}
                    >
                      prefers-reduced-motion
                    </code>{" "}
                    media query. All decorative animations should be suppressible. Never use
                    flashing or strobing effects.
                  </>
                ) : (
                  card.description
                )}
              </p>
              {"callouts" in card ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 14 }}>
                  {card.callouts.map((callout: (typeof card.callouts)[number]) => (
                    <div
                      key={callout.text}
                      style={{
                        padding: "12px 20px",
                        borderRadius: 8,
                        background: callout.background,
                        color: callout.color,
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {callout.text}
                    </div>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </PageSection>
      <SectionDivider />
    </>
  );
}
