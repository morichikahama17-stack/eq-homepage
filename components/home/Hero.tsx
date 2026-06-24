"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import EQLogo from "../EQLogo";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} style={{ position: "relative", height: "100vh", minHeight: "700px", overflow: "hidden", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Grid bg */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

      {/* Radial glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(122,88,166,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Parallax decorative logo — top right */}
      <motion.div style={{ position: "absolute", top: "-80px", right: "-120px", y: bgY, opacity: 0.06, pointerEvents: "none" }}>
        <EQLogo size={520} />
      </motion.div>

      {/* Parallax decorative logo — bottom left */}
      <motion.div style={{ position: "absolute", bottom: "-100px", left: "-100px", y: bgY, opacity: 0.04, pointerEvents: "none" }}>
        <EQLogo size={360} />
      </motion.div>

      {/* Horizontal thin lines */}
      <div style={{ position: "absolute", top: "30%", left: 0, right: 0, height: "0.5px", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "70%", left: 0, right: 0, height: "0.5px", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity, position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "900px" }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "36px" }}
        >
          <EQLogo size={80} className="animate-hex-float" />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
          style={{ marginBottom: "28px" }}
        >
          Essential Qualities
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(44px, 7.5vw, 96px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            margin: "0 0 28px",
          }}
        >
          才能ではなく、<br />
          <span style={{ color: "#7A58A6" }}>再現性を設計する。</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "clamp(14px, 1.6vw, 17px)",
            lineHeight: 2.0,
            letterSpacing: "0.06em",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "540px",
            margin: "0 auto 48px",
          }}
        >
          身体操作を科学・力学・神経学の視点から分析し、<br />
          あなただけの最適解を設計する。
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer"
            className="eq-btn-primary"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", textDecoration: "none", padding: "16px 36px", borderRadius: "100px", background: "linear-gradient(135deg,#7A58A6,#5A3E88)", border: "0.5px solid rgba(122,88,166,0.8)", transition: "opacity 0.25s, transform 0.25s" }}
          >
            無料相談を予約する
          </a>
          <a href="#services"
            className="eq-btn-secondary"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", textDecoration: "none", padding: "16px 36px", borderRadius: "100px", border: "0.5px solid rgba(255,255,255,0.16)", transition: "border-color 0.25s, color 0.25s" }}
          >
            サービスを見る
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginTop: "28px" }}
        >
          {["甲子園優勝投手", "大学日本一投手", "NPB選手", "日本代表選手"].map((label) => (
            <span key={label} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "10px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.38)", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: "100px", padding: "5px 14px", whiteSpace: "nowrap", background: "rgba(255,255,255,0.03)" }}>
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
      >
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(122,88,166,0.6), transparent)", overflow: "hidden" }}>
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeIn" }}
            style={{ width: "100%", height: "40%", background: "rgba(122,88,166,0.9)" }}
          />
        </div>
      </motion.div>

      <style>{`
        .eq-btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }
        .eq-btn-secondary:hover { border-color: rgba(255,255,255,0.4) !important; color: #fff !important; }
      `}</style>
    </section>
  );
}
