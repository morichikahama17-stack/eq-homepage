"use client";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ position: "relative", padding: "140px 32px 100px", background: "#000", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,88,166,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.32em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Contact</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "24px" }}>お問い合わせ</h1>
          <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "15px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.42)", maxWidth: "520px" }}>
            LINEから直接ご連絡ください。お友だち追加後にメッセージを送るだけで、無料相談を受け付けています。
          </p>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.4),transparent)" }} />

      <section style={{ padding: "100px 32px", background: "#000" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>

          {/* Main LINE CTA */}
          <div style={{ background: "rgba(122,88,166,0.08)", border: "0.5px solid rgba(122,88,166,0.25)", borderRadius: "16px", padding: "48px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5px", background: "linear-gradient(90deg,transparent,rgba(122,88,166,0.6),transparent)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(122,88,166,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#7A58A6", marginBottom: "20px" }}>Free Consultation</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "16px" }}>
              まずは無料相談から
            </h2>
            <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", lineHeight: 2.0, letterSpacing: "0.04em", color: "rgba(255,255,255,0.42)", marginBottom: "36px" }}>
              現状の課題・目標をお聞きし、<br />あなたに最適なアプローチをご提案します。
            </p>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", textDecoration: "none", padding: "18px 48px", borderRadius: "100px", background: "linear-gradient(135deg,#7A58A6,#5A3E88)", border: "0.5px solid rgba(122,88,166,0.7)", transition: "opacity 0.2s, transform 0.2s" }}
                className="eq-line-cta"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.630 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINEで無料相談する
              </a>

              <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer">
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" style={{ height: "40px", borderRadius: "4px" }} />
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[
              { icon: "⏱", title: "返信速度", body: "通常1〜2時間以内に返信します" },
              { icon: "💬", title: "相談内容", body: "課題・目標・サービスについて何でも" },
            ].map((item) => (
              <div key={item.title} style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "24px 20px" }}>
                <p style={{ fontSize: "20px", marginBottom: "10px" }}>{item.icon}</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", color: "rgba(255,255,255,0.65)", marginBottom: "6px" }}>{item.title}</p>
                <p style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "12px", lineHeight: 1.8, letterSpacing: "0.04em", color: "rgba(255,255,255,0.35)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`.eq-line-cta:hover { opacity: 0.87; transform: translateY(-2px); }`}</style>
    </div>
  );
}
