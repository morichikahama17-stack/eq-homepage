"use client";
import { motion } from "framer-motion";
import { fadeUp, EASE } from "@/lib/motion";

export default function BrandMessage() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Background large text */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", whiteSpace: "nowrap", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(80px,16vw,200px)", fontWeight: 700, letterSpacing: "-0.04em", color: "rgba(255,255,255,0.018)", pointerEvents: "none", userSelect: "none" }}>
        ESSENTIAL
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.p className="eyebrow" style={{ marginBottom: "40px" }} {...fadeUp}>
          Brand Philosophy
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            margin: 0,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 4.5vw, 60px)",
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: "#fff",
          }}
        >
          感覚論ではなく、<br />
          <span style={{ color: "#7A58A6" }}>本質を。</span>
        </motion.blockquote>

        <div className="sep" style={{ margin: "48px 0" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "40px" }}>
          {[
            {
              title: "科学的根拠",
              body: "感覚ではなく、力学・神経科学・データに基づく指導。再現性のある変化だけを扱います。",
            },
            {
              title: "個別最適化",
              body: "同じ「速い球」を目指す選手でも、最適な身体操作の経路は一人ひとり異なります。",
            },
            {
              title: "本質の追求",
              body: "表面的なテクニックではなく、パフォーマンスを支配する根本原理を解明します。",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: EASE }}
            >
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.06em", color: "rgba(255,255,255,0.75)", marginBottom: "12px" }}>
                {item.title}
              </p>
              <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.38)" }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
