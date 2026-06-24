"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/lib/motion";

export default function FounderMessage() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Left — photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease: EASE }}
          >
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "16px", overflow: "hidden", background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)" }}>
              <Image src="/founder.png" alt="濱 盛力 — Essential Qualities 代表" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5) 100%)" }} />

              {/* Decorative lines */}
              <div style={{ position: "absolute", top: "20px", left: "20px", width: "40px", height: "40px", borderTop: "0.5px solid rgba(122,88,166,0.4)", borderLeft: "0.5px solid rgba(122,88,166,0.4)", borderRadius: "2px 0 0 0" }} />
              <div style={{ position: "absolute", bottom: "20px", right: "20px", width: "40px", height: "40px", borderBottom: "0.5px solid rgba(122,88,166,0.4)", borderRight: "0.5px solid rgba(122,88,166,0.4)", borderRadius: "0 0 2px 0" }} />
            </div>

            {/* Profile card */}
            <div className="glass" style={{ borderRadius: "12px", padding: "20px 24px", marginTop: "12px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(122,88,166,0.15)", border: "0.5px solid rgba(122,88,166,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "#9B7CC8" }}>濱</span>
              </div>
              <div>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", fontWeight: 500, color: "rgba(255,255,255,0.8)", marginBottom: "4px" }}>濱 盛力</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)" }}>Founder & CEO, Essential Qualities</p>
                <a href="https://www.instagram.com/morichika_hama_eq" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s" }}
                  className="eq-ig-link"
                >
                  @morichika_hama_eq · 5.9万フォロワー
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — message */}
          <div>
            <motion.p className="eyebrow" style={{ marginBottom: "20px" }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
            >
              From the Founder
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px,3.5vw,44px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "32px" }}
            >
              代表メッセージ
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "「なぜ結果が出ないのか」——その問いに、感覚ではなく科学で答えたい。それがEssential Qualitiesを立ち上げた理由です。",
                "私自身、選手として「正しい努力」がわからず、長年遠回りをしてきました。正しい原理さえ理解できれば、もっと早く変われたはず。そう強く思ったことが、この仕事の原点にあります。",
                "才能のある人だけが報われる世界ではなく、本質を追求した人が報われる世界をつくりたい。それがわたしたちのミッションです。",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.65, ease: EASE }}
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.48)" }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.a
              href="/profile"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.65, ease: EASE }}
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "36px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
              className="eq-view-all"
            >
              代表紹介を見る →
            </motion.a>
          </div>
        </div>
      </div>
      <style>{`
        .eq-ig-link:hover { color: rgba(255,255,255,0.65) !important; }
        .eq-view-all:hover { color: rgba(255,255,255,0.8) !important; }
      `}</style>
    </section>
  );
}
