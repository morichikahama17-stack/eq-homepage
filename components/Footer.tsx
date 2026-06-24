"use client";
import Link from "next/link";
import EQLogo from "./EQLogo";

const col1 = [
  { label: "理念", href: "/philosophy" },
  { label: "サービス", href: "/services" },
  { label: "代表紹介", href: "/profile" },
  { label: "実績", href: "/results" },
  { label: "お客様の声", href: "/voice" },
];
const col2 = [
  { label: "料金", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "ブログ", href: "/blog" },
  { label: "会社概要", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ position: "relative", background: "#000", paddingTop: "96px", paddingBottom: "48px", overflow: "hidden" }}>
      <div className="divider-purple" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "56px", paddingBottom: "64px", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <EQLogo size={34} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>Essential Qualities</span>
            </div>
            <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.28)", maxWidth: "280px" }}>
              才能ではなく、再現性を設計する。<br />
              身体・思考・データを統合し、<br />
              圧倒的な進化を生み出す。
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
              <a href="https://www.instagram.com/morichika_hama_eq" target="_blank" rel="noopener noreferrer"
                className="eq-social-btn"
                style={{ width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "border-color 0.25s, color 0.25s" }}
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer"
                className="eq-social-btn"
                style={{ width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "border-color 0.25s, color 0.25s" }}
                aria-label="LINE"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.630 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav col 1 */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "20px" }}>Company</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {col1.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }} className="eq-footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav col 2 */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "20px" }}>Info</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {col2.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }} className="eq-footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "20px" }}>Location</p>
            <address style={{ fontStyle: "normal", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "13px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.35)" }}>
              〒553-0006<br />
              大阪府大阪市福島区<br />
              吉野2−3−14 DAY ONE
            </address>
          </div>
        </div>

        <div style={{ paddingTop: "32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.18)" }}>
            © 2025 株式会社 Essential Qualities. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[{ label: "利用規約", href: "#" }, { label: "プライバシーポリシー", href: "#" }, { label: "特定商取引法", href: "#" }].map((l) => (
              <a key={l.label} href={l.href} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.2)", textDecoration: "none", transition: "color 0.2s" }} className="eq-footer-link">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .eq-footer-link:hover { color: rgba(255,255,255,0.7) !important; }
        .eq-social-btn:hover { border-color: rgba(122,88,166,0.5) !important; color: #9B7CC8 !important; }
      `}</style>
    </footer>
  );
}
