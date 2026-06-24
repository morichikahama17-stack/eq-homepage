"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const voices = [
  {
    text: "中学生の頃から球速が伸び悩んでいましたが、身体の連動を根本から見直してもらいました。1年間で27km/hアップは自分でも信じられない結果です。",
    name: "中学3年生",
    attr: "投手",
    result: "+27 km/h（115→142 km/h）",
    period: "1年間",
  },
  {
    text: "142km/hで限界だと思っていたところ、たった1時間のセッションで151km/hを計測しました。身体の使い方がこんなに変わるとは思っていませんでした。",
    name: "大学生",
    attr: "投手",
    result: "+9 km/h（142→151 km/h）",
    period: "1時間",
  },
  {
    text: "フォームの課題を感覚ではなく力学的に説明してもらえたことで、再現性が一気に上がりました。半年でしっかり結果が出せてよかったです。",
    name: "高校3年生",
    attr: "投手",
    result: "+6 km/h（138→144 km/h）",
    period: "半年",
  },
  {
    text: "努力しているのに結果が出ない時期が続いていましたが、身体の本質的な使い方を学んでから変化が出始めました。11km/hアップできたことが自信になっています。",
    name: "高校3年生",
    attr: "投手",
    result: "+11 km/h（135→146 km/h）",
    period: "指導継続中",
  },
];

export default function Voices() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider-purple" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(122,88,166,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "72px", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <motion.p className="eyebrow" style={{ marginBottom: "16px" }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
            >
              Voices
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              お客様の声
            </motion.h2>
          </div>
          <motion.a href="/voice"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }}
            className="eq-view-all"
          >
            View All →
          </motion.a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "12px" }}>
          {voices.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              className="glass card-hover"
              style={{ borderRadius: "12px", padding: "32px 28px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(122,88,166,0.4), transparent)" }} />

              {/* Quote mark */}
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "40px", lineHeight: 1, color: "rgba(122,88,166,0.25)", marginBottom: "-8px" }}>"</div>

              <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "13px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.55)", flex: 1 }}>
                {v.text}
              </p>

              <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", paddingTop: "16px" }}>
                <div style={{ marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#9B7CC8" }}>
                    {v.result}
                  </span>
                  <span style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.25)", marginLeft: "8px" }}>/ {v.period}</span>
                </div>
                <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "11px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.28)" }}>{v.name} · {v.attr}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`.eq-view-all:hover { color: rgba(255,255,255,0.8) !important; }`}</style>
    </section>
  );
}
