import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金",
  description: "Essential Qualitiesの料金プラン。パーソナルセッション・オンラインサロン・4Dストレッチ。",
};

const plans = [
  {
    en: "Personal Session",
    title: "パーソナルセッション",
    price: "お問い合わせください",
    period: "",
    desc: "初回体験セッション後、継続プランをご提案します。セッション回数・頻度により料金が変わります。",
    features: ["初回体験セッション（要相談）", "完全マンツーマン", "データ分析込み", "継続サポート"],
    cta: "料金を相談する",
    highlight: false,
  },
  {
    en: "Online Salon",
    title: "オンラインサロン",
    price: "月額料金",
    period: "詳細はLINEにて",
    desc: "月額制のオンラインコミュニティ。いつでも入退会可能です。",
    features: ["週次動画コンテンツ", "個別質問対応", "メンバー限定ライブ", "アーカイブ閲覧"],
    cta: "詳細を聞く",
    highlight: true,
  },
  {
    en: "4D Stretch",
    title: "4Dストレッチ",
    price: "1回から",
    period: "回数券あり",
    desc: "単発・継続どちらも対応。パーソナルセッションとの組み合わせも可能です。",
    features: ["4D専用マシン使用", "可動域改善", "単発・継続選択可", "セッション併用可"],
    cta: "詳細を聞く",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Pricing</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "24px" }}>料金</h1>
          <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.42)", maxWidth: "500px" }}>
            詳細な料金はLINEにてお問い合わせください。まずは無料相談から始められます。
          </p>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      <section style={{ padding: "100px 32px", background: "#000" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "12px" }}>
          {plans.map((p) => (
            <div key={p.en} style={{ background: p.highlight ? "rgba(122,88,166,0.08)" : "rgba(255,255,255,0.02)", border: p.highlight ? "0.5px solid rgba(122,88,166,0.3)" : "0.5px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "36px 28px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: p.highlight ? "linear-gradient(90deg,transparent,rgba(122,88,166,0.6),transparent)" : "linear-gradient(90deg,transparent,rgba(122,88,166,0.3),transparent)" }} />
              {p.highlight && <span style={{ position: "absolute", top: "16px", right: "16px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.1em", color: "#7A58A6", border: "0.5px solid rgba(122,88,166,0.4)", borderRadius: "100px", padding: "3px 10px" }}>人気</span>}
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "10px" }}>{p.en}</p>
                <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "18px", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "16px" }}>{p.title}</h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 600, color: p.highlight ? "#9B7CC8" : "rgba(255,255,255,0.75)", marginBottom: "4px" }}>{p.price}</p>
                {p.period && <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{p.period}</p>}
              </div>
              <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.4)", flex: 1 }}>{p.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#7A58A6", flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", textAlign: "center", fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", textDecoration: "none", padding: "14px", borderRadius: "100px", background: p.highlight ? "linear-gradient(135deg,#7A58A6,#5A3E88)" : "rgba(255,255,255,0.06)", border: p.highlight ? "0.5px solid rgba(122,88,166,0.7)" : "0.5px solid rgba(255,255,255,0.12)" }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.25)", marginTop: "40px" }}>
          法人・チーム向けのお問い合わせは別途ご相談ください
        </p>
      </section>
    </div>
  );
}
