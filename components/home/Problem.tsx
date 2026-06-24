"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const problems = [
  {
    num: "01",
    title: "感覚論に頼った指導",
    body: "「こんな感じで」「もっと強く」——感覚的な言語では、再現できる変化は生まれません。指導者自身の経験則が、選手の成長を制限しています。",
  },
  {
    num: "02",
    title: "個別最適化の欠如",
    body: "同じメニューを100人にやらせても、変化するのは一部だけ。身体の構造・神経系・癖は一人ひとり異なります。一般論では限界があります。",
  },
  {
    num: "03",
    title: "仮説検証のないトレーニング",
    body: "なぜ変化したのか、なぜ変化しないのか——原因を特定できなければ、成功を再現することも失敗から学ぶこともできません。",
  },
];

export default function Problem() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Decorative number bg */}
      <div style={{ position: "absolute", bottom: "-40px", right: "-20px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(160px,25vw,360px)", fontWeight: 800, color: "rgba(255,255,255,0.012)", letterSpacing: "-0.05em", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
        WHY
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "120px" }}>
            <motion.p className="eyebrow" style={{ marginBottom: "20px" }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
            >
              The Problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "28px" }}
            >
              あなたが<br />
              結果を出せない<br />
              <span style={{ color: "#7A58A6" }}>本当の理由</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.38)" }}
            >
              努力が足りないのではありません。<br />
              正しい問いを立てられていないだけです。
            </motion.p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {problems.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.14, duration: 0.75, ease: EASE }}
                className="glass card-hover"
                style={{ borderRadius: i === 0 ? "16px 16px 4px 4px" : i === problems.length - 1 ? "4px 4px 16px 16px" : "4px", padding: "36px 32px", position: "relative", overflow: "hidden" }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(122,88,166,0.35), transparent)" }} />
                <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(122,88,166,0.5)", flexShrink: 0, paddingTop: "3px" }}>{p.num}</span>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", fontWeight: 600, letterSpacing: "0.02em", marginBottom: "12px", color: "rgba(255,255,255,0.82)" }}>{p.title}</p>
                    <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.38)" }}>{p.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
