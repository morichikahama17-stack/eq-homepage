"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import EQLogo from "../EQLogo";

export default function CTA() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider-purple" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Glow */}
      <div className="animate-glow-pulse" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse at center, rgba(122,88,166,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Background logo */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.04, pointerEvents: "none" }}>
        <EQLogo size={500} />
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: EASE }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}
        >
          <EQLogo size={56} />
        </motion.div>

        <motion.p className="eyebrow" style={{ marginBottom: "24px" }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
        >
          Start Your Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18, duration: 0.8, ease: EASE }}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,5vw,64px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "24px" }}
        >
          あなたの可能性は、<br />
          <span style={{ color: "#7A58A6" }}>まだ眠っている。</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28, duration: 0.7, ease: EASE }}
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.42)", marginBottom: "52px" }}
        >
          まずは無料相談から。<br />
          あなたの現状と目標をお聞きし、<br />
          最適なアプローチをご提案します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.38, duration: 0.7, ease: EASE }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}
        >
          <a
            href="https://lin.ee/CjN1xSW"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", textDecoration: "none", padding: "18px 48px", borderRadius: "100px", background: "linear-gradient(135deg,#7A58A6,#5A3E88)", border: "0.5px solid rgba(122,88,166,0.7)", transition: "opacity 0.25s, transform 0.25s" }}
            className="eq-cta-main"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.630 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEで無料相談する
          </a>

          <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer">
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              style={{ height: "36px", borderRadius: "4px", opacity: 0.7, transition: "opacity 0.2s" }}
              className="eq-line-btn"
            />
          </a>
        </motion.div>
      </div>
      <style>{`
        .eq-cta-main:hover { opacity: 0.87; transform: translateY(-2px); }
        .eq-line-btn:hover { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
