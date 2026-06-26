"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/lib/motion";

const services = [
  {
    en: "Personal Session",
    title: "パーソナルセッション",
    tag: "完全個別",
    body: "身体力学・神経科学を統合した完全個別指導。再現性のある動作を設計し、確実な成果へ繋げます。",
    detail: ["完全マンツーマン", "再現性のある変化設計", "成果直結型指導"],
    image: "/facility.jpg",
  },
  {
    en: "Online Salon",
    title: "オンラインサロン",
    tag: "コミュニティ",
    body: "月額制のオンラインコミュニティ。動画解説・Q&A・メンバー限定コンテンツで、毎日の練習の質を高めます。",
    detail: ["月額制（随時入退会可）", "動画コンテンツ配信", "個別質問対応"],
  },
  {
    en: "4D Stretch",
    title: "4Dストレッチ",
    tag: "施設設備",
    body: "当施設に4Dストレッチマシンを導入しています。セッションと組み合わせてご利用いただけます。",
    detail: ["施設内利用可", "セッションと組み合わせ可"],
    image: "/stretch4d.jpg",
  },
  {
    en: "Rapsodo PRO 2.0",
    title: "ラプソード PRO 2.0",
    tag: "最新機器",
    body: "投球データをリアルタイムで計測・可視化。球速・回転数・変化量・リリースポイントなどを数値化し、科学的な指導に活用します。",
    detail: ["球速・回転数・変化量を計測", "リアルタイムデータ分析", "客観指標で変化を可視化"],
    image: null,
  },
  {
    en: "Team Support",
    title: "企業・チームサポート",
    tag: "法人向け",
    body: "チーム・組織単位でのパフォーマンス最適化。選手個々の分析から組織的な課題解決まで対応します。",
    detail: ["チーム一括対応", "データ管理・分析", "定期訪問可能"],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ position: "relative", padding: "160px 32px", background: "#000", overflow: "hidden" }}>
      <div className="divider-purple" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 100% 50%, rgba(122,88,166,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "72px", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <motion.p className="eyebrow" style={{ marginBottom: "16px" }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              サービス
            </motion.h2>
          </div>
          <motion.a
            href="/services"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
            className="eq-view-all"
          >
            View All →
          </motion.a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "12px" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.en}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              className="glass card-hover"
              style={{ borderRadius: "12px", padding: "36px 28px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(122,88,166,0.45), transparent)" }} />

              {s.image ? (
                <div style={{ position: "relative", width: "100%", height: "180px", borderRadius: "8px", overflow: "hidden", marginBottom: "24px" }}>
                  <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover", objectPosition: "center" }} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)" }} />
                </div>
              ) : s.en === "Rapsodo PRO 2.0" ? (
                <div style={{ width: "100%", height: "180px", borderRadius: "8px", overflow: "hidden", marginBottom: "24px", background: "rgba(122,88,166,0.06)", border: "0.5px solid rgba(122,88,166,0.18)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 340 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
                    {/* grid lines */}
                    {[0,1,2,3,4].map(n => (
                      <line key={n} x1="20" y1={32 + n * 24} x2="320" y2={32 + n * 24} stroke="rgba(122,88,166,0.12)" strokeWidth="0.5" />
                    ))}
                    {/* ball path arc */}
                    <path d="M 40 128 Q 180 20 300 80" fill="none" stroke="rgba(122,88,166,0.55)" strokeWidth="1.5" strokeDasharray="4 3" />
                    {/* spin rings */}
                    <circle cx="300" cy="80" r="22" fill="none" stroke="rgba(122,88,166,0.25)" strokeWidth="1" />
                    <circle cx="300" cy="80" r="14" fill="none" stroke="rgba(122,88,166,0.18)" strokeWidth="0.8" />
                    <circle cx="300" cy="80" r="6" fill="rgba(122,88,166,0.5)" />
                    {/* seam line */}
                    <path d="M 294 72 Q 300 80 306 88" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
                    <path d="M 294 88 Q 300 80 306 72" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
                    {/* data labels */}
                    <text x="36" y="148" fontFamily="'Space Grotesk',sans-serif" fontSize="8" fill="rgba(255,255,255,0.28)" letterSpacing="0.08em">VELOCITY</text>
                    <text x="36" y="138" fontFamily="'Bebas Neue',sans-serif" fontSize="16" fill="rgba(255,255,255,0.75)" letterSpacing="0.04em">148</text>
                    <text x="74" y="138" fontFamily="'Space Grotesk',sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)" dy="4">km/h</text>
                    <text x="140" y="148" fontFamily="'Space Grotesk',sans-serif" fontSize="8" fill="rgba(255,255,255,0.28)" letterSpacing="0.08em">SPIN RATE</text>
                    <text x="140" y="138" fontFamily="'Bebas Neue',sans-serif" fontSize="16" fill="rgba(122,88,166,0.9)" letterSpacing="0.04em">2340</text>
                    <text x="182" y="138" fontFamily="'Space Grotesk',sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)" dy="4">rpm</text>
                    <text x="246" y="148" fontFamily="'Space Grotesk',sans-serif" fontSize="8" fill="rgba(255,255,255,0.28)" letterSpacing="0.08em">BREAK</text>
                    <text x="246" y="138" fontFamily="'Bebas Neue',sans-serif" fontSize="16" fill="rgba(255,255,255,0.75)" letterSpacing="0.04em">38</text>
                    <text x="265" y="138" fontFamily="'Space Grotesk',sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)" dy="4">cm</text>
                    {/* live dot */}
                    <circle cx="40" cy="128" r="3" fill="rgba(122,88,166,0.8)" />
                    <circle cx="40" cy="128" r="6" fill="none" stroke="rgba(122,88,166,0.35)" strokeWidth="1" />
                  </svg>
                  <div style={{ position: "absolute", top: "10px", right: "12px", fontFamily: "'Space Grotesk',sans-serif", fontSize: "7px", letterSpacing: "0.16em", color: "rgba(122,88,166,0.7)", textTransform: "uppercase" }}>● LIVE</div>
                </div>
              ) : null}

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>{s.en}</p>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.1em", color: "#7A58A6", border: "0.5px solid rgba(122,88,166,0.35)", borderRadius: "100px", padding: "3px 10px" }}>{s.tag}</span>
              </div>

              <h3 style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "18px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(255,255,255,0.85)", marginBottom: "14px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "13px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.38)", flex: 1, marginBottom: "28px" }}>{s.body}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {s.detail.map((d) => (
                  <li key={d} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Shippori Mincho', sans-serif", fontSize: "12px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.35)" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#7A58A6", flexShrink: 0 }} />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`.eq-view-all:hover { color: rgba(255,255,255,0.8) !important; }`}</style>
    </section>
  );
}
