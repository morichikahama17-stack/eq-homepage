import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "理念",
  description: "Essential Qualitiesの理念——才能ではなく、再現性を設計する。感覚論を排し、科学と論理で身体の可能性を解き放つ。",
};

const pillars = [
  {
    title: "本質の追求",
    body: "流行や表面的なテクニックには頼りません。身体操作・力学・神経科学の根本原理から出発し、真に機能するものだけを扱います。表面を変えても本質は変わりません。本質を変えれば、すべてが変わります。",
  },
  {
    title: "再現性の設計",
    body: "一度変化が起きた——それだけでは不十分です。なぜ変化したのかを解明し、誰もが再現できる形にまで落とし込む。再現できないことに価値はありません。",
  },
  {
    title: "個別最適化",
    body: "同じ「150km/h」を目指すにも、あなたの身体・神経系・癖・環境は唯一無二です。一般論ではなく、あなただけの最適解を設計します。",
  },
  {
    title: "仮説検証の徹底",
    body: "感覚ではなく、仮説を立て、実施し、検証する。このサイクルを高速で回すことで、変化の精度と速度を最大化します。",
  },
];

export default function PhilosophyPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      {/* Hero */}
      <section style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Philosophy</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "28px" }}>
            才能ではなく、<br /><span style={{ color: "#7A58A6" }}>再現性を設計する。</span>
          </h1>
          <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "16px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.45)", maxWidth: "560px" }}>
            Essential Qualitiesが信じるのは、「才能」という言葉の先にある、設計可能な変化です。感覚論を排し、本質を追求する——それが私たちの存在理由です。
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      {/* Pillars */}
      <section style={{ padding: "120px 32px", background: "#000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2px" }}>
            {pillars.map((p, i) => (
              <div key={p.title} style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: i === 0 ? "16px 4px 4px 4px" : i === 1 ? "4px 16px 4px 4px" : i === 2 ? "4px 4px 4px 16px" : "4px 4px 16px 4px", padding: "40px 32px", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.35),transparent)" }} />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.2em", color: "rgba(122,88,166,0.6)", marginBottom: "12px" }}>{String(i + 1).padStart(2, "0")}</p>
                <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "20px", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "16px" }}>{p.title}</h3>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.42)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
