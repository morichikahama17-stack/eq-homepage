"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const methods = [
  {
    title: "身体力学解析",
    en: "Biomechanics",
    icon: "◈",
    body: "関節の動き・筋連動・重心移動を力学的に分析。投球・打撃・走行動作における最小抵抗経路を特定します。",
  },
  {
    title: "神経科学的アプローチ",
    en: "Neuroscience",
    icon: "◎",
    body: "運動学習・神経筋協調・反射系の最適化。身体が「覚える」プロセスを科学的に設計します。",
  },
  {
    title: "データ駆動型指導",
    en: "Data Analysis",
    icon: "◐",
    body: "球速・回転数・身体各部位の角速度などを計測・記録。客観指標で変化を可視化します。",
  },
  {
    title: "仮説検証サイクル",
    en: "Hypothesis Testing",
    icon: "◇",
    body: "介入前に仮説を立て、実施後に検証。このサイクルを高速で回すことで、再現性のある変化を確立します。",
  },
];

export default function Method() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.p className="eyebrow" style={{ marginBottom: "20px" }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
          >
            Methodology
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}
          >
            指導メソッド
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18, duration: 0.7, ease: EASE }}
            style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.38)", maxWidth: "520px", margin: "0 auto 40px" }}
          >
            4つの専門領域を統合した独自のアプローチで、<br />
            再現性のある進化を設計します。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28, duration: 0.7, ease: EASE }}
            style={{ maxWidth: "600px", margin: "0 auto", padding: "24px 32px", borderRadius: "12px", border: "0.5px solid rgba(122,88,166,0.25)", background: "rgba(122,88,166,0.06)", textAlign: "center" }}
          >
            <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "15px", lineHeight: 1.9, letterSpacing: "0.06em", color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}>
              "最強にたどり着くための地図を見せる"
            </p>
            <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.22)", marginTop: "12px" }}>
              技術・環境・メンタル・遊び心——4要素のかけ算で、その人が持つ最高値を引き出す
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "2px" }}>
          {methods.map((m, i) => (
            <motion.div
              key={m.en}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              className="glass card-hover"
              style={{
                borderRadius: i === 0 ? "16px 4px 4px 4px" : i === 1 ? "4px 16px 4px 4px" : i === 2 ? "4px 4px 4px 16px" : "4px 4px 16px 4px",
                padding: "40px 32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(122,88,166,0.4), transparent)" }} />
              <div style={{ fontSize: "24px", color: "#7A58A6", marginBottom: "20px", lineHeight: 1 }}>{m.icon}</div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "10px" }}>{m.en}</p>
              <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "16px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(255,255,255,0.85)", marginBottom: "16px" }}>{m.title}</p>
              <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "13px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.38)" }}>{m.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
