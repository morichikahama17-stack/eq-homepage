import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サービス",
  description: "Essential Qualitiesのサービス一覧。パーソナルセッション・オンラインサロン・4Dストレッチ・企業チームサポート。",
};

const services = [
  {
    en: "Personal Session",
    title: "パーソナルセッション",
    tag: "完全個別",
    body: "身体力学・神経科学を統合した完全個別指導。再現性のある動作を設計し、確実な成果へ繋げます。課題の特定から改善プランの設計まで、1対1で行います。",
    features: ["完全マンツーマン指導", "再現性のある変化設計", "成果直結型指導", "継続フォローアップ", "動画撮影・分析"],
  },
  {
    en: "Online Salon",
    title: "オンラインサロン",
    tag: "コミュニティ",
    body: "月額制のオンラインコミュニティ。毎週配信される動画コンテンツ、個別質問対応、メンバー同士の交流など、日常的な成長をサポートします。",
    features: ["月額制（随時入退会可）", "週次動画コンテンツ配信", "個別チャット質問", "メンバー限定ライブ配信", "過去コンテンツアーカイブ"],
  },
  {
    en: "4D Stretch",
    title: "4Dストレッチ",
    tag: "最新機器",
    body: "当施設に4Dストレッチマシンを導入しています。パーソナルセッションと組み合わせてご利用いただけます。",
    features: ["施設内利用可", "セッションとの組み合わせ可"],
  },
  {
    en: "Team & Corporate",
    title: "企業・チームサポート",
    tag: "法人向け",
    body: "チーム・組織単位でのパフォーマンス最適化プログラム。選手個々の分析からチーム全体の底上げ、指導者へのアドバイスまで対応します。",
    features: ["チーム一括対応", "指導者向けセミナー", "定期訪問プログラム", "データ管理・分析", "カスタムプログラム設計"],
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section className="eq-page-hero" style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Services</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "28px" }}>サービス</h1>
          <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "16px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.45)", maxWidth: "560px" }}>
            あらゆる目標に対応する、本質に特化したサービスを提供します。
          </p>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      <section style={{ padding: "100px 32px", background: "#000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2px" }}>
          {services.map((s, i) => (
            <div key={s.en} className="eq-service-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: i === 0 ? "16px 16px 2px 2px" : i === services.length - 1 ? "2px 2px 16px 16px" : "2px", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.35),transparent)" }} />
              <div style={{ padding: "48px 40px", borderRight: "0.5px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>{s.en}</p>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.1em", color: "#7A58A6", border: "0.5px solid rgba(122,88,166,0.35)", borderRadius: "100px", padding: "3px 10px" }}>{s.tag}</span>
                </div>
                <h2 style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "20px" }}>{s.title}</h2>
                <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.42)" }}>{s.body}</p>
                <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", marginTop: "28px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", textDecoration: "none", padding: "12px 28px", borderRadius: "100px", background: "linear-gradient(135deg,#7A58A6,#5A3E88)", border: "0.5px solid rgba(122,88,166,0.7)" }}
                >
                  相談する
                </a>
              </div>
              <div style={{ padding: "48px 40px" }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "20px" }}>Features</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {s.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.5)" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#7A58A6", flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
