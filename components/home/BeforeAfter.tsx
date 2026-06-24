"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const cases = [
  {
    profile: "中学3年生 / 投手",
    before: { value: "115 km/h", sub: "スピードが出ず、思うような投球ができなかった" },
    after: { value: "142 km/h", sub: "1年間で27km/hアップ。身体の連動を根本から再設計" },
    delta: "+27 km/h",
    period: "期間：1年",
  },
  {
    profile: "大学生 / 投手",
    before: { value: "142 km/h", sub: "伸び悩みを感じ、上限に達したと思っていた" },
    after: { value: "151 km/h", sub: "たった1時間のセッションで9km/hアップを記録" },
    delta: "+9 km/h",
    period: "期間：1時間（！）",
  },
  {
    profile: "高校3年生 / 投手",
    before: { value: "138 km/h", sub: "フォームの課題が解決できず停滞していた" },
    after: { value: "144 km/h", sub: "半年で6km/hアップ。力学的な投球動作を習得" },
    delta: "+6 km/h",
    period: "期間：半年",
  },
  {
    profile: "高校3年生 / 投手",
    before: { value: "135 km/h", sub: "努力しているのに結果が出ない時期が続いた" },
    after: { value: "146 km/h", sub: "11km/hアップ。身体の本質的な使い方を習得" },
    delta: "+11 km/h",
    period: "期間：指導継続中",
  },
];

export default function BeforeAfter() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.p className="eyebrow" style={{ marginBottom: "20px" }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
          >
            Transformation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            ビフォーアフター
          </motion.h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "12px" }}>
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.75, ease: EASE }}
              className="glass card-hover"
              style={{ borderRadius: "12px", padding: "36px 28px", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(122,88,166,0.4), transparent)" }} />

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>{c.profile}</p>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.22)", letterSpacing: "0.06em" }}>{c.period}</span>
              </div>

              {/* Delta badge */}
              <div style={{ textAlign: "center", marginBottom: "20px", padding: "14px 0", borderRadius: "8px", background: "rgba(122,88,166,0.12)", border: "0.5px solid rgba(122,88,166,0.25)" }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, color: "#9B7CC8", letterSpacing: "-0.02em" }}>{c.delta}</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div style={{ padding: "16px 14px", borderRadius: "8px", background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "8px" }}>Before</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>{c.before.value}</p>
                  <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "11px", lineHeight: 1.7, letterSpacing: "0.04em", color: "rgba(255,255,255,0.26)" }}>{c.before.sub}</p>
                </div>
                <div style={{ padding: "16px 14px", borderRadius: "8px", background: "rgba(122,88,166,0.07)", border: "0.5px solid rgba(122,88,166,0.2)" }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "8px" }}>After</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: 600, color: "#9B7CC8", marginBottom: "6px" }}>{c.after.value}</p>
                  <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "11px", lineHeight: 1.7, letterSpacing: "0.04em", color: "rgba(255,255,255,0.42)" }}>{c.after.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
