"use client";
import { useEffect, useRef, useState } from "react";

const voices = [
  {
    quote: "「入会から半年で球速が10km/h以上アップ。フォームの根本から再設計してもらいました。身体だけでなく、思考の使い方まで変わりました。」",
    name: "T.K.",
    role: "高校2年生 / 投手",
    result: "132km → 143km",
  },
  {
    quote: "「プロになってからもオフはここで調整します。技術だけでなく、なぜそれが機能するかを徹底的に説明してくれるのが他にはない。」",
    name: "R.M.",
    role: "プロ野球選手 / 内野手",
    result: "現役NPB選手",
  },
  {
    quote: "「息子が小学5年から通い始め、3年後には中学で4番エース。数字より、自分で考えられる選手に育てていただきました。」",
    name: "保護者様",
    role: "小学生から在籍",
    result: "→ 中学4番エース",
  },
  {
    quote: "「経営者としてメンタルとフィジカルの統合を学べる場所。アスリートでなくても、Essential Qualitiesの考え方は普遍的に機能します。」",
    name: "Y.S.",
    role: "経営者 / 40代",
    result: "パフォーマンス設計",
  },
];

export default function Voice() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="voice" className="relative py-40 overflow-hidden" style={{ background: "#060606" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(122,88,166,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-8">
        <div className={`mb-20 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.28em] uppercase mb-4" style={{ color: "#7A58A6", fontFamily: "'Space Grotesk', sans-serif" }}>
            Voices
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            選手・クライアントの声
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {voices.map((v, i) => (
            <div
              key={i}
              className={`
                p-10 rounded-2xl glass transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote mark */}
              <div
                className="text-6xl leading-none mb-6 select-none"
                style={{ color: "rgba(122,88,166,0.25)", fontFamily: "Georgia, serif", lineHeight: 0.8 }}
              >
                "
              </div>

              <p
                className="text-white/60 mb-10"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "14px", lineHeight: 2.1, letterSpacing: "0.04em" }}
              >
                {v.quote}
              </p>

              <div className="flex items-center justify-between pt-6" style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}>
                <div>
                  <p className="text-white text-sm font-display font-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{v.name}</p>
                  <p className="text-white/30 text-xs mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: "0.04em" }}>{v.role}</p>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(122,88,166,0.1)",
                    border: "0.5px solid rgba(122,88,166,0.25)",
                    color: "rgba(155,124,200,0.9)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.06em",
                    fontSize: "11px",
                  }}
                >
                  {v.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
