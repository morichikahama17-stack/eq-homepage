"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";

const categories = [
  {
    label: "利用について",
    faqs: [
      { q: "野球未経験の子どもでも通えますか？", a: "はい、対応可能です。小学生から指導経験があります。年齢・レベルに関わらず、現在地から最適な指導を行います。初回体験で現状を確認したうえで、最適なプランをご提案します。" },
      { q: "プロを目指していない選手でも大丈夫ですか？", a: "もちろんです。「野球をもっと楽しみたい」「痛みなくプレーしたい」「チームに貢献したい」など、あらゆる目標に対応しています。" },
      { q: "女性でも利用できますか？", a: "はい、性別は問いません。身体の構造に合わせた個別対応を行います。" },
    ],
  },
  {
    label: "遠方・オンライン",
    faqs: [
      { q: "遠方でも利用できますか？", a: "オンラインサロンと動画分析サービスにより、全国どこからでもご利用いただけます。また、遠征セッションも一部対応しております。詳細はLINEにてご相談ください。" },
      { q: "オンラインサロンとは何ですか？", a: "月額制のオンラインコミュニティです。週次配信の動画コンテンツ、個別質問対応、メンバー限定ライブ配信などが含まれます。いつでも入退会可能です。" },
    ],
  },
  {
    label: "料金・体験",
    faqs: [
      { q: "料金はどのくらいですか？", a: "セッション内容・頻度によって異なります。詳細は料金ページ、またはLINEにてお気軽にご相談ください。" },
      { q: "体験セッションはありますか？", a: "はい、初回体験セッションをご用意しております。まずは現状の身体分析と課題の特定を行い、継続するかどうかはその後にご判断いただけます。" },
    ],
  },
  {
    label: "指導内容",
    faqs: [
      { q: "一般的なジムとの違いは何ですか？", a: "身体操作の原理を科学・力学・神経科学の視点で分析する点が大きな違いです。感覚論ではなく、再現性のある変化を設計し、成果に繋げます。指導者の経験則ではなく、原理に基づいた指導を行います。" },
      { q: "球速アップ以外にも対応していますか？", a: "はい。打撃・守備・走塁・身体ケア・パフォーマンス維持など、幅広い課題に対応しています。また、野球以外の競技やビジネスパーソンのパフォーマンス向上も対応可能です。" },
    ],
  },
];

function FAQItem({ q, a, isLast }: { q: string; a: string; isLast: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: isLast ? "none" : "0.5px solid rgba(255,255,255,0.06)" }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", fontWeight: 400, letterSpacing: "0.04em", color: open ? "#fff" : "rgba(255,255,255,0.65)", transition: "color 0.2s", paddingRight: "20px" }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.22 }}
          style={{ flexShrink: 0, width: "20px", height: "20px", borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: open ? "#7A58A6" : "rgba(255,255,255,0.35)", fontSize: "16px", lineHeight: 1 }}
        >+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: EASE }} style={{ overflow: "hidden" }}>
            <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.45)", paddingBottom: "22px" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section className="eq-page-hero" style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>FAQ</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em" }}>よくある質問</h1>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      <section style={{ padding: "100px 32px", background: "#000" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
          {categories.map((cat) => (
            <div key={cat.label}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>{cat.label}</p>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "0 28px" }}>
                {cat.faqs.map((f, i) => (
                  <FAQItem key={f.q} q={f.q} a={f.a} isLast={i === cat.faqs.length - 1} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
