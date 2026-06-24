import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "実績",
  description: "Essential Qualitiesの指導実績。ドラフト1位輩出・球速150km突破・1,000名以上の指導実績。",
};

const stats = [
  { value: "1,000+", label: "指導人数", en: "Athletes Coached" },
  { value: "5.9万", label: "SNSフォロワー", en: "Followers" },
  { value: "150km+", label: "球速突破 選手多数輩出", en: "Velocity Achieved" },
  { value: "2名", label: "2024年ドラフト1位", en: "Draft #1 Picks" },
];

const milestones = [
  { year: "2023", text: "オンラインサロン開始" },
  { year: "2024.02", text: "株式会社 Essential Qualities 設立" },
  { year: "2024.03", text: "DAY ONE 開業（東大阪・布施）" },
  { year: "2024", text: "宗山塁 選手（東北楽天）・金丸夢斗 選手（中日）ドラフト1位指名" },
  { year: "2025.06", text: "DAY ONE 大阪市福島区へ移転" },
];

export default function ResultsPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Results</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em" }}>実績</h1>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      <section style={{ padding: "100px 32px", background: "#000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "12px", marginBottom: "80px" }}>
            {stats.map((s) => (
              <div key={s.en} style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "32px 28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "16px" }}>{s.en}</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em", color: "#7A58A6", marginBottom: "8px" }}>{s.value}</p>
                <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "13px", lineHeight: 1.7, letterSpacing: "0.04em", color: "rgba(255,255,255,0.42)" }}>{s.label}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "32px" }}>Timeline</p>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "80px", top: 0, bottom: 0, width: "0.5px", background: "rgba(122,88,166,0.2)" }} />
            {milestones.map((m) => (
              <div key={m.year} style={{ display: "flex", alignItems: "center", gap: "24px", padding: "20px 0", borderBottom: "0.5px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#7A58A6", letterSpacing: "0.04em", width: "80px", textAlign: "right", flexShrink: 0 }}>{m.year}</span>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", border: "0.5px solid rgba(122,88,166,0.5)", background: "#000", flexShrink: 0 }} />
                <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "15px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.55)" }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
