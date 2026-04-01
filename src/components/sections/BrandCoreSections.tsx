import { logoAssets } from "../../assets/logos";
import {
  chartGroups,
  colorGroups,
  guideValues,
  logoMisuseItems,
  logoSpecs,
  typographyGroups,
} from "../../content/brandGuide";
import { colors } from "../../theme/tokens";
import styles from "../BrandGuidePage.module.css";
import { Card } from "../layout/Card";
import { PageSection } from "../layout/PageSection";
import { SectionDivider } from "../layout/SectionDivider";
import { SectionHeader } from "../layout/SectionHeader";
import { ColorSwatch } from "../ui/ColorSwatch";
import { GuideTitle } from "../ui/GuideTitle";
import { LogoPreviewCard } from "../ui/LogoPreviewCard";

export function BrandCoreSections() {
  return (
    <>
      <PageSection id="values">
        <SectionHeader sectionId="values" />
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}
        >
          {guideValues.map((value) => (
            <div
              key={value.title}
              style={{
                position: "relative",
                overflow: "hidden",
                padding: 36,
                background: colors.white,
                border: `1px solid ${colors.grey}`,
                borderRadius: 14,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0 0 auto 0",
                  height: 3,
                  background: colors.green,
                }}
              />
              <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 700 }}>{value.title}</h3>
              <p
                style={{
                  margin: 0,
                  color: colors.secondaryText,
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </PageSection>
      <SectionDivider />

      <PageSection id="logo">
        <SectionHeader sectionId="logo" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <LogoPreviewCard label="Primary, Dark Text" span={2}>
            <img
              src={logoAssets.primaryHorizontal}
              alt=""
              style={{ maxWidth: 260, maxHeight: 100, objectFit: "contain" }}
            />
          </LogoPreviewCard>
          <LogoPreviewCard label="White, With Tagline" background="dark">
            <img
              src={logoAssets.whiteTagline}
              alt=""
              style={{ maxWidth: 260, maxHeight: 100, objectFit: "contain" }}
            />
          </LogoPreviewCard>
          <LogoPreviewCard label="White, Without Tagline" background="dark" span={2}>
            <img
              src={logoAssets.whiteHorizontal}
              alt=""
              style={{ maxWidth: 240, objectFit: "contain" }}
            />
          </LogoPreviewCard>
        </div>

        <GuideTitle>Logomark</GuideTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <LogoPreviewCard label="Green on Light">
            <img src={logoAssets.logomarkGreen} alt="" style={{ maxWidth: 90 }} />
          </LogoPreviewCard>
          <LogoPreviewCard label="Green on Dark" background="dark">
            <img src={logoAssets.logomarkGreen} alt="" style={{ maxWidth: 90 }} />
          </LogoPreviewCard>
          <LogoPreviewCard label="White on Dark" background="dark">
            <img src={logoAssets.logomarkWhite} alt="" style={{ maxWidth: 90 }} />
          </LogoPreviewCard>
        </div>

        <GuideTitle>Clear space</GuideTitle>
        <Card style={{ padding: 36, marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 40,
              marginBottom: 24,
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px 56px",
                  border: `2px dashed ${colors.green}`,
                  borderRadius: 8,
                }}
              >
                <img src={logoAssets.primaryHorizontal} alt="" style={{ maxWidth: 200 }} />
              </div>
              {[
                { top: -16, left: "50%", transform: "translateX(-50%)" },
                { bottom: -16, left: "50%", transform: "translateX(-50%)" },
                { top: "50%", left: -14, transform: "translateY(-50%)" },
                { top: "50%", right: -14, transform: "translateY(-50%)" },
              ].map((position, index) => (
                <span
                  key={index}
                  style={{
                    position: "absolute",
                    color: colors.green,
                    fontSize: 10,
                    fontWeight: 600,
                    ...position,
                  }}
                >
                  X
                </span>
              ))}
            </div>
            <div style={{ maxWidth: 400 }}>
              <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 600 }}>
                Minimum clear space = &quot;X&quot;
              </p>
              <p style={{ margin: 0, color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
                &quot;X&quot; is defined as the height of the leaf mark. This space must be kept
                free of other text, graphics, or visual elements on all sides. When space is
                constrained, the logomark alone may be used at a minimum size of 24×24px.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
              fontSize: 13,
            }}
          >
            {logoSpecs.map((spec) => (
              <div
                key={spec.title}
                style={{
                  padding: 16,
                  textAlign: "center",
                  whiteSpace: "pre-line",
                  background: colors.lightGreen,
                  borderRadius: 10,
                }}
              >
                <strong style={{ color: colors.green }}>{spec.title}</strong>
                <br />
                <span style={{ color: colors.secondaryText }}>{spec.description}</span>
              </div>
            ))}
          </div>
        </Card>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: 20,
          }}
        >
          {logoMisuseItems.map((item) => (
            <div
              key={item}
              style={{
                padding: 20,
                textAlign: "center",
                background: colors.white,
                border: `1px solid ${colors.grey}`,
                borderRadius: 10,
              }}
            >
              <div style={{ marginBottom: 6, color: colors.peach, fontSize: 18, fontWeight: 700 }}>
                ✕
              </div>
              <p
                style={{
                  margin: 0,
                  color: colors.secondaryText,
                  fontSize: 12,
                  lineHeight: 1.5,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </PageSection>
      <SectionDivider />

      <PageSection id="colours">
        <SectionHeader sectionId="colours" />
        {colorGroups.map((group) => (
          <div key={group.title} style={{ marginBottom: 40 }}>
            <GuideTitle>{group.title}</GuideTitle>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              {group.swatches.map((swatch) => (
                <ColorSwatch
                  key={`${swatch.name}-${swatch.hex}`}
                  hex={swatch.hex}
                  name={swatch.name}
                  outlined={"outlined" in swatch ? swatch.outlined : undefined}
                />
              ))}
            </div>
          </div>
        ))}
      </PageSection>
      <SectionDivider />

      <PageSection id="charts">
        <SectionHeader sectionId="charts" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: 10 }}>
          {chartGroups.map(([label, ...shades]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  marginBottom: 6,
                  color: colors.secondaryText,
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                {shades.map((shade) => (
                  <div
                    key={shade}
                    style={{
                      width: 42,
                      height: 42,
                      cursor: "pointer",
                      border: "1px solid rgba(0,0,0,0.04)",
                      borderRadius: "50%",
                      background: shade,
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.transform = "scale(1.15)";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>
      <SectionDivider />

      <PageSection id="typography">
        <SectionHeader sectionId="typography" />
        {typographyGroups.map((group) => (
          <Card key={group.title} style={{ marginBottom: 36, padding: 36 }}>
            <h3
              style={{
                margin: "0 0 20px",
                color: colors.green,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {group.title}
            </h3>
            {group.rows.map((row, index) => (
              <div
                key={`${group.title}-${row.sample}`}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 28,
                  padding: "14px 0",
                  borderBottom:
                    index < group.rows.length - 1 ? `1px solid ${colors.lightGrey}` : "none",
                }}
              >
                <div style={{ width: 140, flexShrink: 0 }}>
                  <div style={{ color: colors.secondaryText, fontSize: 11 }}>
                    {row.weight === 700 ? "Bold (700)" : "Regular (400)"}
                  </div>
                  <div style={{ color: colors.secondaryText, fontFamily: "monospace", fontSize: 11 }}>
                    {row.sizeLabel}
                  </div>
                </div>
                <div style={{ fontSize: row.size, fontWeight: row.weight }}>{row.sample}</div>
              </div>
            ))}
          </Card>
        ))}
      </PageSection>
      <SectionDivider />
    </>
  );
}
