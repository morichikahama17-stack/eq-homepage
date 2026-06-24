import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社Essential Qualitiesの会社概要。所在地・設立年・事業内容など。",
};

const info = [
  { label: "会社名", value: "株式会社 Essential Qualities" },
  { label: "代表取締役", value: "濱 盛力（Morichika Hama）" },
  { label: "設立", value: "2024年2月" },
  { label: "所在地", value: "〒553-0006\n大阪府大阪市福島区吉野2−3−14 DAY ONE" },
  { label: "事業内容", value: "野球・スポーツパフォーマンス指導\nオンラインサロン運営\n企業・チームサポート\n身体操作コンサルティング" },
  { label: "Instagram", value: "@morichika_hama_eq" },
  { label: "LINE公式", value: "lin.ee/CjN1xSW" },
];

export default function CompanyPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Company</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em" }}>会社概要</h1>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      <section style={{ padding: "100px 32px", background: "#000" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden" }}>
            {info.map((item, i) => (
              <div key={item.label} style={{ display: "grid", gridTemplateColumns: "180px 1fr", borderBottom: i === info.length - 1 ? "none" : "0.5px solid rgba(255,255,255,0.05)" }}>
                <div style={{ padding: "24px 28px", borderRight: "0.5px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.3)" }}>
                  <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.38)" }}>{item.label}</p>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  {item.value.split("\n").map((line, j) => (
                    <p key={j} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.65)", lineHeight: 1.9 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "48px", background: "rgba(122,88,166,0.06)", border: "0.5px solid rgba(122,88,166,0.2)", borderRadius: "12px", padding: "28px 32px" }}>
            <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.45)" }}>
              ご不明な点がございましたら、LINE公式アカウントよりお気軽にお問い合わせください。
            </p>
            <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: "16px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", textDecoration: "none", padding: "12px 28px", borderRadius: "100px", background: "linear-gradient(135deg,#7A58A6,#5A3E88)", border: "0.5px solid rgba(122,88,166,0.7)" }}
            >
              LINEで問い合わせる
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
