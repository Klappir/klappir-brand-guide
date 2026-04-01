import {
  britishConventions,
  britishVsAmericanSpelling,
  channelGuidelines,
  communicationPrinciples,
  phrasingColumns,
  photographyGuidelines,
  toneGuidelines,
  writingRuleCards,
} from "../../content/brandGuide";
import { colors } from "../../theme/tokens";
import { Card } from "../layout/Card";
import { PageSection } from "../layout/PageSection";
import { SectionDivider } from "../layout/SectionDivider";
import { SectionHeader } from "../layout/SectionHeader";
import { GuideTitle } from "../ui/GuideTitle";

function BulletList({
  items,
  markerColor,
}: {
  items: readonly string[];
  markerColor: string;
}) {
  return (
    <ul style={{ listStyle: "none", margin: "10px 0 0", padding: 0, fontSize: 13, color: colors.secondaryText, lineHeight: 2 }}>
      {items.map((item) => (
        <li key={item}>
          <span style={{ marginRight: 8, color: markerColor, fontWeight: 700 }}>·</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function InfoTable({
  rows,
  firstColumnColor,
}: {
  rows: readonly (readonly [string, string])[];
  firstColumnColor?: string;
}) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
      <tbody>
        {rows.map(([left, right], index) => (
          <tr key={`${left}-${right}`}>
            <td
              style={{
                width: "45%",
                padding: "6px 0",
                verticalAlign: "top",
                fontWeight: 600,
                color: firstColumnColor ?? colors.black,
                borderBottom: index < rows.length - 1 ? `1px solid ${colors.lightGrey}` : "none",
              }}
            >
              {left}
            </td>
            <td
              style={{
                padding: "6px 0",
                verticalAlign: "top",
                color: colors.secondaryText,
                borderBottom: index < rows.length - 1 ? `1px solid ${colors.lightGrey}` : "none",
              }}
            >
              {right}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function CommunicationSections() {
  return (
    <>
      <PageSection id="writing">
        <SectionHeader sectionId="writing" />

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
            marginBottom: 32,
            padding: "24px 28px",
            background: colors.lightGreen,
            border: "1px solid rgba(60,158,118,0.2)",
            borderRadius: 14,
          }}
        >
          <div style={{ marginTop: 2, flexShrink: 0, fontSize: 20 }}>🇬🇧</div>
          <div>
            <div style={{ marginBottom: 4, color: colors.darkGreen, fontSize: 14, fontWeight: 700 }}>
              British English only
            </div>
            <div style={{ color: colors.secondaryText, fontSize: 13, lineHeight: 1.6 }}>
              All Klappir content uses British English spelling and grammar. This applies to the
              product UI, marketing, emails, support, and documentation. Use &quot;colour&quot; not
              &quot;color&quot;, &quot;organise&quot; not &quot;organize&quot;, &quot;centre&quot; not
              &quot;center&quot;, &quot;licence&quot; (noun) not &quot;license&quot;, and so on. When
              in doubt, check the Oxford English Dictionary.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 24,
            marginBottom: 24,
          }}
        >
          <Card>
            <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700 }}>
              British vs. American spelling
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <tbody>
                {britishVsAmericanSpelling.map(([preferred, avoid], index) => (
                  <tr key={`${preferred}-${avoid}`}>
                    <td
                      style={{
                        width: "50%",
                        padding: "6px 0",
                        color: colors.darkGreen,
                        fontWeight: 600,
                        borderBottom:
                          index < britishVsAmericanSpelling.length - 1
                            ? `1px solid ${colors.lightGrey}`
                            : "none",
                      }}
                    >
                      ✓ {preferred}
                    </td>
                    <td
                      style={{
                        padding: "6px 0",
                        color: colors.peach,
                        borderBottom:
                          index < britishVsAmericanSpelling.length - 1
                            ? `1px solid ${colors.lightGrey}`
                            : "none",
                      }}
                    >
                      ✕ {avoid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card>
            <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700 }}>
              Other British conventions
            </h3>
            <InfoTable rows={britishConventions} />
          </Card>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24,
            marginBottom: 40,
          }}
        >
          {writingRuleCards.map((card) => (
            <Card key={card.title}>
              <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700 }}>{card.title}</h3>
              <InfoTable rows={card.rows} />
            </Card>
          ))}
        </div>

        <Card>
          <GuideTitle>Common phrasing</GuideTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 20,
              fontSize: 13,
            }}
          >
            <div>
              <div style={{ marginBottom: 8, color: colors.green, fontWeight: 600 }}>Preferred</div>
              <div style={{ color: colors.secondaryText, lineHeight: 2.2 }}>
                {phrasingColumns.preferred.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 8, color: colors.peach, fontWeight: 600 }}>Avoid</div>
              <div style={{ color: colors.secondaryText, lineHeight: 2.2 }}>
                {phrasingColumns.avoid.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </PageSection>
      <SectionDivider />

      <PageSection id="channels">
        <SectionHeader sectionId="channels" />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
            marginBottom: 32,
            padding: "24px 28px",
            background: colors.lightPeach,
            border: "1px solid rgba(250,77,86,0.2)",
            borderRadius: 14,
          }}
        >
          <div style={{ marginTop: 2, flexShrink: 0, fontSize: 20 }}>⚠</div>
          <div>
            <div style={{ marginBottom: 4, color: colors.criticalError, fontSize: 14, fontWeight: 700 }}>
              No emojis in any customer-facing communication
            </div>
            <div style={{ color: colors.secondaryText, fontSize: 13, lineHeight: 1.6 }}>
              This applies to emails, Intercom, social media, and any channel where we represent
              Klappir to customers, partners, or the public. Warmth comes from thoughtful
              language, not symbols. No exceptions.
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}>
          {channelGuidelines.map((channel) => (
            <Card key={channel.title}>
              <h3 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700 }}>{channel.title}</h3>
              <span
                style={{
                  display: "inline-block",
                  marginBottom: 12,
                  padding: "3px 10px",
                  borderRadius: 20,
                  background: channel.tagColors.background,
                  color: channel.tagColors.color,
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {channel.tag}
              </span>
              <p style={{ margin: 0, color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
                {channel.description}
              </p>
              <BulletList items={channel.items} markerColor={colors.green} />
            </Card>
          ))}
        </div>
      </PageSection>
      <SectionDivider />

      <PageSection id="tone">
        <SectionHeader sectionId="tone" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 24,
            marginBottom: 40,
          }}
        >
          {toneGuidelines.map((guideline) => (
            <Card key={guideline.title}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  margin: "0 0 10px",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: guideline.recommended ? colors.success : colors.peach,
                  }}
                />
                {guideline.title}
              </h3>
              <p style={{ margin: 0, color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
                {guideline.description}
              </p>
              <div
                style={{
                  marginTop: 14,
                  padding: "14px 18px",
                  borderLeft: `3px solid ${guideline.recommended ? colors.green : colors.peach}`,
                  borderRadius: 8,
                  background: guideline.recommended ? "#f0f8f3" : "#fef5f5",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                <div
                  style={{
                    marginBottom: 6,
                    color: guideline.recommended ? colors.green : colors.peach,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {guideline.recommended ? "Recommended" : "Avoid"}
                </div>
                {guideline.example}
              </div>
            </Card>
          ))}
        </div>

        <Card style={{ padding: 32 }}>
          <GuideTitle>Communication Principles</GuideTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 20,
            }}
          >
            <div>
              <div style={{ marginBottom: 8, color: colors.green, fontSize: 13, fontWeight: 600 }}>
                We are
              </div>
              <div style={{ color: colors.secondaryText, fontSize: 13, lineHeight: 2 }}>
                {communicationPrinciples.weAre.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 8, color: colors.peach, fontSize: 13, fontWeight: 600 }}>
                We are not
              </div>
              <div style={{ color: colors.secondaryText, fontSize: 13, lineHeight: 2 }}>
                {communicationPrinciples.weAreNot.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </PageSection>
      <SectionDivider />

      <PageSection id="photography">
        <SectionHeader sectionId="photography" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}>
          {photographyGuidelines.map((guideline) => (
            <Card key={guideline.title}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  margin: "0 0 6px",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: guideline.recommended ? colors.success : colors.peach,
                  }}
                />
                {guideline.title}
              </h3>
              <p style={{ margin: 0, color: colors.secondaryText, fontSize: 13, lineHeight: 1.7 }}>
                {guideline.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                {guideline.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 12px",
                      borderRadius: 20,
                      background: guideline.recommended ? colors.lightGreen : colors.lightPeach,
                      color: guideline.recommended ? colors.darkGreen : colors.peach,
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </PageSection>
      <SectionDivider />
    </>
  );
}
