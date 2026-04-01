import { logoAssets } from "../../assets/logos";
import {
  emailFixedItems,
  emailFlexibleItems,
  newsletterCategoryColors,
  newsletterFixedItems,
  newsletterFlexibleItems,
  newsletterTemplateBlocks,
  newsletterToneRules,
} from "../../content/brandGuide";
import { colors } from "../../theme/tokens";
import { Card } from "../layout/Card";
import { PageSection } from "../layout/PageSection";
import { SectionDivider } from "../layout/SectionDivider";
import { SectionHeader } from "../layout/SectionHeader";

function DotBullet({
  color,
  items,
}: {
  color: string;
  items: readonly string[];
}) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, color: colors.secondaryText, fontSize: 13, lineHeight: 2.2 }}>
      {items.map((item) => (
        <li key={item}>
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              marginRight: 10,
              borderRadius: "50%",
              background: color,
              verticalAlign: "middle",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function TemplateSections() {
  return (
    <>
      <PageSection id="email">
        <SectionHeader sectionId="email" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 32,
            padding: 36,
            background: "#f5f5f5",
            borderRadius: 14,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 500,
              padding: "40px 36px",
              background: colors.white,
              borderRadius: 10,
              boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
            }}
          >
            <img src={logoAssets.primaryHorizontal} alt="Klappir" style={{ height: 36, marginBottom: 20 }} />
            <hr style={{ margin: "14px 0 20px", border: "none", borderTop: `1px solid ${colors.grey}` }} />
            <h2 style={{ margin: "0 0 16px", fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>
              Company A has invited you to Klappir{" "}
              <span style={{ color: colors.green }}>Sustainability Platform</span>
            </h2>
            <p style={{ margin: "0 0 14px", color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
              Hello!
            </p>
            <p style={{ margin: "0 0 14px", color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
              <strong>Company A</strong> has invited you to the Klappir Sustainability Platform.
            </p>
            <p style={{ margin: "0 0 14px", color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
              <strong>Why have you received this email?</strong>
              <br />
              Company A uses Klappir&apos;s Sustainability Platform as part of their sustainability
              journey and has sent you a <strong>Sustainability Survey</strong> to support their
              ongoing commitment.
            </p>
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              style={{
                display: "inline-block",
                margin: "14px 0",
                padding: "12px 28px",
                borderRadius: 7,
                background: colors.green,
                color: colors.white,
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              Create account
            </a>
            <div style={{ marginTop: 14, color: colors.black, fontSize: 13, fontWeight: 700 }}>
              This invitation will expire in 4 weeks.
            </div>
            <p style={{ margin: "20px 0 0", color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
              <strong>Need Assistance?</strong>
              <br />
              Contact Klappir at service@klappir.com.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}>
          <Card>
            <h3 style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 12px", fontSize: 14, fontWeight: 700 }}>
              <span style={{ color: colors.peach }}>●</span>
              Fixed elements (do not change)
            </h3>
            <DotBullet color={colors.peach} items={emailFixedItems} />
          </Card>

          <Card>
            <h3 style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 12px", fontSize: 14, fontWeight: 700 }}>
              <span style={{ color: colors.green }}>●</span>
              Flexible elements (customise per email)
            </h3>
            <DotBullet color={colors.green} items={emailFlexibleItems} />
          </Card>
        </div>
      </PageSection>
      <SectionDivider />

      <PageSection id="newsletter">
        <SectionHeader sectionId="newsletter" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 32 }}>
          <div style={{ padding: 28, background: "#f5f5f5", borderRadius: 14 }}>
            <div
              style={{
                overflow: "hidden",
                background: colors.white,
                borderRadius: 10,
                boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "28px 32px",
                  background: colors.white,
                  borderBottom: `1px solid ${colors.grey}`,
                }}
              >
                <img src={logoAssets.primaryHorizontal} alt="Klappir" style={{ height: 28 }} />
                <div style={{ color: colors.secondaryText, fontSize: 11, letterSpacing: "0.04em" }}>
                  MARCH 2025
                </div>
              </div>

              <div style={{ padding: "32px 32px 24px" }}>
                <div
                  style={{
                    marginBottom: 8,
                    color: colors.green,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Featured
                </div>
                <h2 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 700, lineHeight: 1.3 }}>
                  New Scope 3 reporting tools now available
                </h2>
                <p style={{ margin: "0 0 16px", color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
                  We have launched a comprehensive suite of tools for tracking and reporting Scope
                  3 emissions across your entire value chain. Here&apos;s what changed and how to
                  get started.
                </p>
                <a
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    borderRadius: 7,
                    background: colors.green,
                    color: colors.white,
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  Read more
                </a>
              </div>

              <div style={{ margin: "0 32px", height: 1, background: colors.grey }} />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20, padding: "24px 32px" }}>
                <div>
                  <div
                    style={{
                      marginBottom: 6,
                      color: colors.purple,
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Product Update
                  </div>
                  <div style={{ marginBottom: 6, fontSize: 14, fontWeight: 700 }}>
                    Dashboard improvements
                  </div>
                  <p style={{ margin: 0, color: colors.secondaryText, fontSize: 12, lineHeight: 1.6 }}>
                    Faster load times, new chart types, and improved export options for your
                    sustainability reports.
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: 6,
                      color: colors.blue,
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Industry Insight
                  </div>
                  <div style={{ marginBottom: 6, fontSize: 14, fontWeight: 700 }}>
                    CSRD compliance update
                  </div>
                  <p style={{ margin: 0, color: colors.secondaryText, fontSize: 12, lineHeight: 1.6 }}>
                    Key deadlines approaching for European companies. What you need to know about
                    the latest regulatory changes.
                  </p>
                </div>
              </div>

              <div style={{ margin: "0 32px", height: 1, background: colors.grey }} />

              <div style={{ padding: "20px 32px" }}>
                <div
                  style={{
                    marginBottom: 12,
                    color: colors.secondaryText,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Quick Links
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                  {["Knowledge Base", "Webinars", "Release Notes", "Contact Support"].map((link) => (
                    <span key={link} style={{ color: colors.green, cursor: "pointer", fontSize: 12, fontWeight: 500 }}>
                      {link} →
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ padding: "20px 32px", background: "#f8f8f8", borderTop: `1px solid ${colors.lightGrey}` }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <span style={{ color: colors.secondaryText, fontSize: 11 }}>
                    © 2025 Klappir · The sustainability ecosystem
                  </span>
                  <span style={{ color: colors.secondaryText, fontSize: 11 }}>
                    Unsubscribe · Manage preferences
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Card>
              <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 700 }}>Template structure</h3>
              <div style={{ color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
                <p style={{ margin: "0 0 12px" }}>
                  The newsletter has a fixed structure of five blocks. Content teams fill in the
                  blocks; the layout does not change.
                </p>
                {newsletterTemplateBlocks.map(([title, description]) => (
                  <div key={title} style={{ padding: "10px 0", borderBottom: `1px solid ${colors.lightGrey}` }}>
                    <div style={{ marginBottom: 4, color: colors.black, fontWeight: 600 }}>{title}</div>
                    <div>{description}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 12px", fontSize: 14, fontWeight: 700 }}>
                <span style={{ color: colors.peach }}>●</span>
                Fixed (every issue)
              </h3>
              <DotBullet color={colors.peach} items={newsletterFixedItems} />
            </Card>

            <Card>
              <h3 style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 12px", fontSize: 14, fontWeight: 700 }}>
                <span style={{ color: colors.green }}>●</span>
                Flexible (changes per issue)
              </h3>
              <DotBullet color={colors.green} items={newsletterFlexibleItems} />
            </Card>

            <Card>
              <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700 }}>Category label colours</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {newsletterCategoryColors.map(([label, color]) => (
                  <span
                    key={label}
                    style={{
                      padding: "4px 12px",
                      borderRadius: 20,
                      background: `${color}18`,
                      color,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </Card>

            <Card>
              <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700 }}>Tone and content rules</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, color: colors.secondaryText, fontSize: 13, lineHeight: 2.2 }}>
                {newsletterToneRules.map((rule) => (
                  <li key={rule}>
                    <span style={{ marginRight: 8, color: colors.green, fontWeight: 700 }}>·</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </PageSection>
    </>
  );
}
