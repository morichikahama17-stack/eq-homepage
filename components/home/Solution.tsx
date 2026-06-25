"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import EQLogo from "../EQLogo";

const points = [
  { label: "仮説を立てる", body: "身体の動きを観察・計測し、パフォーマンスを制限している要因を特定します。" },
  { label: "原理を解明する", body: "力学・神経科学・解剖学の知見から、問題の根本原因を科学的に分析します。" },
  { label: "解決策を設計する", body: "あなたの身体・思考・環境に最適化されたプログラムを個別に設計します。" },
  { label: "再現性を確立する", body: "継続的な検証と修正により、誰もが再現できる変化のプロセスを確立します。" },
];

export default function Solution() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider-purple" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(122,88,166,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="eq-solution-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Right — Logo visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.85, ease: EASE }}
            className="eq-solution-logo"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", order: 2 }}
          >
            <div style={{ position: "relative" }}>
              <div className="animate-glow-pulse" style={{ position: "absolute", inset: "-40%", background: "radial-gradient(ellipse at center, rgba(122,88,166,0.28) 0%, transparent 65%)", zIndex: 0 }} />
              <EQLogo size={300} className="animate-hex-float" />
            </div>
          </motion.div>

          {/* Left — Text */}
          <div style={{ order: 1 }}>
            <motion.p className="eyebrow" style={{ marginBottom: "20px" }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
            >
              The Solution
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(26px,4vw,50px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}
            >
              Essential Qualitiesの<br />
              <span style={{ color: "#7A58A6" }}>アプローチ</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18, duration: 0.7, ease: EASE }}
              style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.4)", marginBottom: "44px" }}
            >
              感覚論を排し、科学と論理だけを武器に。<br />
              あなたの身体に内在するポテンシャルを<br />
              再現性のある形で引き出します。
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {points.map((pt, i) => (
                <motion.div
                  key={pt.label}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.65, ease: EASE }}
                  style={{ display: "flex", gap: "20px", padding: "20px 0", borderBottom: "0.5px solid rgba(255,255,255,0.05)" }}
                >
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", color: "rgba(122,88,166,0.7)", letterSpacing: "0.06em", flexShrink: 0, paddingTop: "3px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.78)", marginBottom: "6px", letterSpacing: "0.02em" }}>{pt.label}</p>
                    <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "13px", lineHeight: 1.95, letterSpacing: "0.04em", color: "rgba(255,255,255,0.36)" }}>{pt.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
