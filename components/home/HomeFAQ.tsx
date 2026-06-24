"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";

const faqs = [
  { q: "野球未経験の子どもでも通えますか？", a: "はい、対応可能です。小学生から指導経験があります。年齢・レベルに関わらず、現在地から最適な指導を行います。" },
  { q: "プロを目指していない選手でも大丈夫ですか？", a: "もちろんです。「野球をもっと楽しみたい」「痛みなくプレーしたい」「チームに貢献したい」など、あらゆる目標に対応しています。" },
  { q: "遠方でも利用できますか？", a: "オンラインサロンと動画分析サービスにより、全国どこからでもご利用いただけます。また、遠征セッションも対応しております。" },
  { q: "料金はどのくらいですか？", a: "セッション内容・頻度によって異なります。詳細は料金ページ、またはLINEにてお気軽にご相談ください。" },
  { q: "一般的なジムとの違いは何ですか？", a: "身体操作の原理を科学・力学・神経科学の視点で分析する点が大きな違いです。感覚論ではなく、再現性のある変化を設計します。" },
];

function FAQItem({ q, a, isLast }: { q: string; a: string; isLast: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: isLast ? "none" : "0.5px solid rgba(255,255,255,0.06)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "15px", fontWeight: 400, letterSpacing: "0.04em", color: open ? "#fff" : "rgba(255,255,255,0.65)", transition: "color 0.2s", paddingRight: "24px" }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: open ? "#7A58A6" : "rgba(255,255,255,0.4)", fontSize: "16px", lineHeight: 1, transition: "border-color 0.2s, color 0.2s" }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.45)", paddingBottom: "24px" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomeFAQ() {
  return (
    <section style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <motion.p className="eyebrow" style={{ marginBottom: "20px" }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            よくある質問
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: EASE }}
          className="glass" style={{ borderRadius: "16px", padding: "0 32px" }}
        >
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} isLast={i === faqs.length - 1} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.65, ease: EASE }}
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <a href="/faq" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }} className="eq-view-all">
            すべての質問を見る →
          </a>
        </motion.div>
      </div>
      <style>{`.eq-view-all:hover { color: rgba(255,255,255,0.8) !important; }`}</style>
    </section>
  );
}
