import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お客様の声",
  description: "Essential Qualitiesで実際に変化を遂げた選手たちの声。",
};

const voices = [
  { text: "「なぜ速くなるのか」を理論で説明してもらえたことで、自分でも再現できるようになった。今まで感覚だけに頼っていた自分が馬鹿らしくなるくらい、変化が明確でした。", name: "K.T さん", attr: "大学3年生 / 投手", result: "138→151 km/h" },
  { text: "身体の使い方を根本から見直してもらいました。痛みがなくなっただけでなく、むしろ以前より球が速くなった。こんな指導があったのかと衝撃を受けました。", name: "R.M さん", attr: "社会人選手 / 投手", result: "慢性的な肩痛が解消" },
  { text: "データで変化が見えるのが最高です。自分が何をすべきか、何をしているかが数字でわかる。モチベーションが落ちることなく練習を続けられています。", name: "S.H さん", attr: "高校2年生 / 内野手", result: "スイングスピード大幅改善" },
  { text: "チームで導入してもらいました。個人の課題が明確になり、全体の底上げにもつながりました。指導者として学ぶことが非常に多かったです。", name: "Y.O さん", attr: "社会人野球チーム監督", result: "チーム全体のパフォーマンス向上" },
  { text: "球速が上がったことよりも、「なぜ上がったのか」がわかることの方が大きかった。これで自分で課題を解決できるようになりました。", name: "T.K さん", attr: "高校3年生 / 投手", result: "134→148 km/h" },
  { text: "プロに入ってからも定期的にセッションをお願いしています。感覚が鈍ったとき、すぐに原因を特定して修正してくれる。唯一無二の存在です。", name: "M.S さん", attr: "現役プロ野球選手", result: "プロ入り後もレギュラー定着" },
];

export default function VoicePage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Voices</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em" }}>お客様の声</h1>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      <section style={{ padding: "100px 32px", background: "#000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "12px" }}>
          {voices.map((v) => (
            <div key={v.name} style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "32px 28px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.35),transparent)" }} />
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "36px", lineHeight: 1, color: "rgba(122,88,166,0.22)" }}>"</div>
              <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.55)", flex: 1 }}>{v.text}</p>
              <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", paddingTop: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>{v.name}</p>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.08em", color: "#7A58A6", border: "0.5px solid rgba(122,88,166,0.3)", borderRadius: "100px", padding: "2px 8px" }}>{v.result}</span>
                </div>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.28)" }}>{v.attr}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
