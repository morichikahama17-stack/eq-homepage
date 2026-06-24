"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const stats = [
  { value: "1,000", unit: "+", label: "指導人数", en: "Athletes Coached" },
  { value: "5.9万", unit: "", label: "SNSフォロワー", en: "Followers" },
  { value: "150", unit: "km+", label: "球速突破 選手多数輩出", en: "Velocity Achieved" },
  { value: "Draft", unit: "#1", label: "2024年 2名ドラフト1位輩出", en: "Draft Pick" },
];

const milestones = [
  { year: "2023", text: "オンラインサロン開始" },
  { year: "2024.02", text: "株式会社 Essential Qualities 設立" },
  { year: "2024.03", text: "DAY ONE 開業（東大阪・布施）" },
  { year: "2024", text: "宗山塁 選手（東北楽天）・金丸夢斗 選手（中日）ドラフト1位指名" },
  { year: "2025.06", text: "DAY ONE 大阪市福島区へ移転" },
];

export default function Stats() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(122,88,166,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.p className="eyebrow" style={{ marginBottom: "16px" }}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
        >
          Results
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "72px" }}
        >
          実績
        </motion.h2>

        {/* Athlete credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
          style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "48px" }}
        >
          {["甲子園優勝投手", "大学日本一投手", "NPB選手", "日本代表選手"].map((label) => (
            <div key={label} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "100px", border: "0.5px solid rgba(122,88,166,0.4)", background: "rgba(122,88,166,0.08)" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#7A58A6", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "12px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.65)" }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px", marginBottom: "80px" }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.en}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              className="glass card-hover"
              style={{ position: "relative", padding: "32px 28px", borderRadius: "16px", overflow: "hidden" }}
            >
              <div className="divider-purple" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "20px" }}>{s.en}</p>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "10px" }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px,2vw,22px)", fontWeight: 500, lineHeight: 1.4, color: "#7A58A6" }}>{s.unit}</span>
              </div>
              <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "12px", lineHeight: 1.7, letterSpacing: "0.04em", color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Media */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: "80px" }}
        >
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "20px" }}>Media Coverage</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["スポーツ報知 掲載", "デイリースポーツ 掲載"].map((m) => (
              <div key={m} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "100px", border: "0.5px solid rgba(122,88,166,0.25)", background: "rgba(122,88,166,0.06)" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#7A58A6", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "12px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.5)" }}>{m}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
        >
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "32px" }}>Timeline</p>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "72px", top: 0, bottom: 0, width: "0.5px", background: "rgba(122,88,166,0.2)" }} />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
                style={{ display: "flex", alignItems: "center", gap: "24px", padding: "16px 0", cursor: "default" }}
                className="eq-timeline-row"
              >
                <span style={{ flexShrink: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", width: "72px", textAlign: "right", color: "rgba(255,255,255,0.28)", letterSpacing: "0.04em", transition: "color 0.2s" }} className="eq-timeline-year">
                  {m.year}
                </span>
                <div style={{ flexShrink: 0, width: "6px", height: "6px", borderRadius: "50%", border: "0.5px solid rgba(122,88,166,0.5)", background: "#000" }} />
                <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }} className="eq-timeline-text">
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        .eq-timeline-row:hover .eq-timeline-year { color: #7A58A6 !important; }
        .eq-timeline-row:hover .eq-timeline-text { color: rgba(255,255,255,0.82) !important; }
      `}</style>
    </section>
  );
}
