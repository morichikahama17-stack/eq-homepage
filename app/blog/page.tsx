import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ",
  description: "Essential Qualitiesのブログ。野球・身体操作・パフォーマンス向上に関する科学的知見を発信。",
};

const posts = [
  { title: "球速アップに本当に必要なこと——感覚論から科学へ", category: "パフォーマンス", date: "2025.06.01", readTime: "5分" },
  { title: "神経系トレーニングとは何か？身体が「覚える」メカニズム", category: "科学・理論", date: "2025.05.20", readTime: "7分" },
  { title: "投球動作の力学的分析——なぜフォームが崩れるのか", category: "身体力学", date: "2025.05.10", readTime: "6分" },
  { title: "データで見えるもの、データでは見えないもの", category: "コーチング", date: "2025.04.28", readTime: "4分" },
  { title: "再現性とは何か——「たまたま」を「必ず」に変える思考法", category: "理念", date: "2025.04.15", readTime: "5分" },
  { title: "高校生が1ヶ月で球速を8km/h上げた話——何を変えたのか", category: "実例", date: "2025.04.02", readTime: "8分" },
];

export default function BlogPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Blog</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em" }}>ブログ</h1>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      <section style={{ padding: "100px 32px", background: "#000" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2px" }}>
          {posts.map((p, i) => (
            <div key={p.title} style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: i === 0 ? "12px 12px 2px 2px" : i === posts.length - 1 ? "2px 2px 12px 12px" : "2px", padding: "28px 32px", cursor: "pointer", position: "relative", transition: "border-color 0.25s" }} className="eq-blog-card">
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.25),transparent)" }} />
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "20px" }}>
                <div>
                  <div style={{ display: "flex", gap: "12px", marginBottom: "12px", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.12em", color: "#7A58A6", border: "0.5px solid rgba(122,88,166,0.3)", borderRadius: "100px", padding: "2px 8px" }}>{p.category}</span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.22)" }}>{p.date}</span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.22)" }}>読了 {p.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "17px", fontWeight: 500, letterSpacing: "0.04em", color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>{p.title}</h2>
                </div>
                <span style={{ flexShrink: 0, color: "rgba(255,255,255,0.22)", fontSize: "18px", paddingTop: "4px" }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <style>{`.eq-blog-card:hover { border-color: rgba(122,88,166,0.3) !important; }`}</style>
    </div>
  );
}
