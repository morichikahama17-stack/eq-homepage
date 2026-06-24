import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "代表紹介",
  description: "Essential Qualities 代表・濱盛力のプロフィール。広陵高校→同志社大学→2カ国・独立リーグを経て指導者の道へ。",
};

export default function ProfilePage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section className="eq-page-hero" style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Profile</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em" }}>代表紹介</h1>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      <section className="eq-section" style={{ padding: "100px 32px", background: "#000" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="eq-profile-grid" style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: "80px", alignItems: "start" }}>

            {/* Left */}
            <div>
              <div style={{ aspectRatio: "4/5", borderRadius: "12px", overflow: "hidden", position: "relative", border: "0.5px solid rgba(255,255,255,0.07)" }}>
                <Image src="/founder.png" alt="濱 盛力" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.45) 100%)" }} />
                <div style={{ position: "absolute", top: "16px", left: "16px", width: "32px", height: "32px", borderTop: "0.5px solid rgba(122,88,166,0.5)", borderLeft: "0.5px solid rgba(122,88,166,0.5)" }} />
                <div style={{ position: "absolute", bottom: "16px", right: "16px", width: "32px", height: "32px", borderBottom: "0.5px solid rgba(122,88,166,0.5)", borderRight: "0.5px solid rgba(122,88,166,0.5)" }} />
              </div>

              <div style={{ marginTop: "16px", background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "24px 20px" }}>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "20px", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "4px" }}>濱 盛力</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}>Morichika Hama</p>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em", marginBottom: "4px" }}>株式会社 Essential Qualities</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "rgba(122,88,166,0.85)", letterSpacing: "0.08em", marginBottom: "20px" }}>Founder & CEO</p>

                <div style={{ padding: "14px 16px", background: "rgba(122,88,166,0.08)", border: "0.5px solid rgba(122,88,166,0.22)", borderRadius: "8px", marginBottom: "20px" }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>Current MAX</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: 700, color: "#9B7CC8", letterSpacing: "-0.02em" }}>151 km/h</p>
                </div>

                <div style={{ paddingTop: "16px", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
                  <a href="https://www.instagram.com/morichika_hama_eq" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.3)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                    @morichika_hama_eq · 5.9万フォロワー
                  </a>
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              {/* Philosophy quote */}
              <div style={{ position: "relative", padding: "28px 32px", marginBottom: "48px", background: "rgba(122,88,166,0.06)", border: "0.5px solid rgba(122,88,166,0.2)", borderRadius: "12px" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.5),transparent)" }} />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "28px", color: "rgba(122,88,166,0.2)", lineHeight: 1, marginBottom: "12px" }}>"</p>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "16px", lineHeight: 1.9, letterSpacing: "0.04em", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                  "最強"にたどり着くための地図を見せる。
                </p>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", lineHeight: 1.8, letterSpacing: "0.04em", color: "rgba(255,255,255,0.35)", marginTop: "10px" }}>
                  技術、環境、メンタル、遊び心——その人が持つ最高値を引き出すため、何をかけ合わせるかを考え抜く。
                </p>
              </div>

              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "24px" }}>Biography</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "56px" }}>
                {[
                  "大阪出身。広島の名門・広陵高校へ進学。入学時は部員170人・4軍構成という環境の中、「身体能力では勝てない」と早々に覚悟を決め、1年時から格闘技や古武術など独自の視点で身体の最大出力を追求した。2年秋には右肩を脱臼するも、自ら治してしまうほどの探究心を持つ。",
                  "1年間の浪人を経て同志社大学スポーツ健康科学部へ進学。学術的に運動を探求しながら、個人でSNSを通じた発信活動を開始。大学4年間のうちに2カ国と国内独立リーグ2チームを渡り歩き、自らの身体でパフォーマンスを追求し続けた。最終的なMAX球速は151km/hに達し、大学4年時はプロ注目選手として調査書を取得。しかしドラフト指名漏れを経験し、プレイヤーとしての区切りをつけ指導者の道へ。",
                  "指導の軸は「かけ算」。技術だけでなく、環境・メンタル・遊び心——選手が化けるために何をかけ合わせるかを徹底的に考える。マーケティング思考や心理学への関心も取り入れながら、その人の性格や身体に合った完全個別型の指導を行う。ジムにはラプソードを設置し、18.44mのブルペンと打撃スペースを完備。約1時間のセッションをほとんど会話だけで終えることもある。",
                  "2023年にオンラインサロンを開始し、2024年2月に株式会社Essential Qualitiesを設立。大阪にDAY ONEを開業し、宗山塁選手（東北楽天）・金丸夢斗選手（中日）・渡部聖弥選手（大商大出身）、広島・中村奨選手など多数の選手を指導。2024年ドラフトでは2名がドラフト1位指名を受けた。",
                ].map((text, i) => (
                  <p key={i} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", lineHeight: 2.1, letterSpacing: "0.04em", color: "rgba(255,255,255,0.5)" }}>{text}</p>
                ))}
              </div>

              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "20px" }}>Career</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { year: "大阪", text: "出身" },
                  { year: "広陵高校", text: "広島の名門校。170人・4軍構成の中、独学で身体の最大出力を追求。2年秋に右肩脱臼→自己治癒" },
                  { year: "浪人1年", text: "1年間の浪人を経て同志社大学へ" },
                  { year: "同志社大学", text: "スポーツ健康科学部。2カ国・国内独立リーグ2チームで活動。MAX 151km/h到達" },
                  { year: "大学4年", text: "プロ注目（調査書取得）→ドラフト指名漏れ→指導者の道へ" },
                  { year: "2023", text: "オンラインサロン開始" },
                  { year: "2024.02", text: "株式会社 Essential Qualities 設立" },
                  { year: "2024.03", text: "DAY ONE 開業（東大阪・布施）" },
                  { year: "2024", text: "宗山塁（楽天）・金丸夢斗（中日）ドラフト1位指名" },
                  { year: "2025.06", text: "DAY ONE 大阪市福島区へ移転" },
                ].map((m, i) => (
                  <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "14px 0", borderBottom: "0.5px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", color: "#7A58A6", letterSpacing: "0.04em", minWidth: "80px", flexShrink: 0, paddingTop: "2px" }}>{m.year}</span>
                    <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", lineHeight: 1.8, letterSpacing: "0.04em", color: "rgba(255,255,255,0.5)" }}>{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Media Section */}
      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.3),transparent)" }} />
      <section style={{ padding: "80px 32px 100px", background: "#000" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "32px" }}>Media Coverage</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px" }}>
            {[
              {
                pub: "スポーツ報知",
                pubEn: "Sports Hochi",
                date: "2026.01.24",
                title: "楽天・宗山、中日・金丸らが大学時から通った野球特化ジム「DAY ONE」。トレーナー濱盛力さんが語る「最強」のつくり方",
                url: "https://hochi.news/articles/20260124-OHT1T51233.html",
              },
              {
                pub: "デイリースポーツ",
                pubEn: "Daily Sports",
                date: "2024.03.10",
                title: "23歳の元独立リーガーが経営者兼パーソナルトレーナーに。ドラフト1位候補を輩出する新進気鋭コーチの指導哲学",
                url: "https://www.daily.co.jp/opinion-d/2024/03/10/0017414566.shtml",
              },
            ].map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "28px 24px", background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "12px", textDecoration: "none", transition: "border-color 0.2s, background 0.2s", position: "relative", overflow: "hidden" }}
                className="eq-media-card"
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.35),transparent)" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7A58A6" }} />
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "#9B7CC8", textTransform: "uppercase" }}>{item.pubEn}</span>
                  </div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>{item.date}</span>
                </div>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", lineHeight: 1.85, letterSpacing: "0.03em", color: "rgba(255,255,255,0.6)", flex: 1 }}>
                  {item.title}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.22)" }}>{item.pub}</span>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
                    <path d="M2 10L10 2M10 2H5M10 2V7"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <style>{`.eq-media-card:hover { border-color: rgba(122,88,166,0.35) !important; background: rgba(122,88,166,0.04) !important; }`}</style>

      {/* Staff Section */}
      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.3),transparent)" }} />
      <section style={{ padding: "80px 32px 120px", background: "#000" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "48px" }}>Staff</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {/* 池端航洋 */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

              {/* Profile header */}
              <div style={{ padding: "32px 28px 24px", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "0.5px solid rgba(122,88,166,0.3)", flexShrink: 0, position: "relative" }}>
                  <Image src="/ikebata2.png" alt="池端 航洋" fill style={{ objectFit: "cover", objectPosition: "center center" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "18px", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "4px" }}>池端 航洋</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(122,88,166,0.85)", marginBottom: "8px" }}>Staff Coach</p>
                  <a href="https://www.instagram.com/koyo_ikebata_eq" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.28)", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                    @koyo_ikebata_eq
                  </a>
                </div>
              </div>

              {/* Bio */}
              <div style={{ padding: "0 28px 28px", borderTop: "0.5px solid rgba(255,255,255,0.05)" }}>
                <div style={{ paddingTop: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "大阪府出身。土佐高校を経て関西学院大学準硬式野球部へ進学。大学では投手に転向し、初登板完全試合・タイトル獲得・全日本出場を経験。",
                    "「全力・感謝・笑顔」をモットーに、選手一人ひとりに寄り添ったコーチングを実践。",
                  ].map((text, i) => (
                    <p key={i} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.42)" }}>{text}</p>
                  ))}
                </div>

                {/* Career tags */}
                <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["土佐高校", "関西学院大学", "準硬式野球部", "投手"].map((tag) => (
                    <span key={tag} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: "100px", padding: "3px 10px" }}>{tag}</span>
                  ))}
                </div>

                {/* Article links */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "20px" }}>
                  {[
                    { href: "https://note.com/kgjunko_89/n/neb8ec91c6ace", label: "俺の・私の野球史 ── 池端航洋｜関西学院大学準硬式野球部", source: "Note" },
                    { href: "https://4years.asahi.com/article/15172094", label: "朝日新聞 4years. 掲載記事", source: "朝日新聞" },
                    { href: "https://readyfor.jp/projects/2024junkoh/announcements/348223", label: "READYFOR 2024 準硬式野球プロジェクト", source: "READYFOR" },
                    { href: "https://www.kochinews.co.jp/article/detail/731861", label: "高知新聞 掲載記事", source: "高知新聞" },
                    { href: "https://www.iblj.co.jp/news/19127/", label: "独立リーグ・ジャパン 掲載記事", source: "IBL Japan" },
                  ].map(({ href, label, source }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", background: "rgba(122,88,166,0.06)", border: "0.5px solid rgba(122,88,166,0.18)", borderRadius: "8px", textDecoration: "none" }}
                      className="eq-staff-article"
                    >
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#7A58A6", flexShrink: 0 }} />
                      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "11px", lineHeight: 1.5, color: "rgba(255,255,255,0.45)", flex: 1 }}>{label}</p>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                        <path d="M2 10L10 2M10 2H5M10 2V7"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .eq-media-card:hover { border-color: rgba(122,88,166,0.35) !important; background: rgba(122,88,166,0.04) !important; }
        .eq-staff-article:hover { border-color: rgba(122,88,166,0.35) !important; background: rgba(122,88,166,0.1) !important; }
      `}</style>
    </div>
  );
}
