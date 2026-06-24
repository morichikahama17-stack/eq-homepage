"use client";
import { useEffect, useRef, useState } from "react";
import EQLogo from "./EQLogo";

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fade = (delay: number) =>
    `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section ref={ref} id="about" className="relative py-40 bg-black overflow-hidden">
      {/* Thin separator */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left: text */}
        <div>
          <p
            className={`text-xs tracking-[0.28em] uppercase mb-6 ${fade(0)}`}
            style={{ color: "#7A58A6", fontFamily: "'Space Grotesk', sans-serif", transitionDelay: "0ms" }}
          >
            About
          </p>

          <h2
            className={`font-display mb-10 ${fade(1)}`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              transitionDelay: "100ms",
            }}
          >
            本質を極め、<br />
            <span style={{ color: "#7A58A6" }}>可能性を解放する。</span>
          </h2>

          <div
            className={`space-y-6 ${fade(2)}`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-white/55 leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", lineHeight: 2.0, letterSpacing: "0.04em" }}>
              Essential Qualitiesは、アスリートと経営者のための
              パフォーマンス設計機関です。
            </p>
            <p className="text-white/55 leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", lineHeight: 2.0, letterSpacing: "0.04em" }}>
              身体能力の開発にとどまらず、思考・データ・行動を統合した
              独自のアプローチで、再現性のある高パフォーマンスを設計します。
              一流の結果は、偶然ではなく設計から生まれる。
            </p>
            <p className="text-white/55 leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", lineHeight: 2.0, letterSpacing: "0.04em" }}>
              私たちは「本質」だけを扱います。
              流行や表面的な手法ではなく、真に機能する原理から構築された
              プログラムが、あなたの進化を加速させます。
            </p>
          </div>

          {/* Coach profile */}
          <div
            className={`mt-12 pt-10 border-t flex items-center gap-5 ${fade(3)}`}
            style={{ borderColor: "rgba(255,255,255,0.07)", transitionDelay: "350ms" }}
          >
            <div
              className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ background: "rgba(122,88,166,0.15)", border: "0.5px solid rgba(122,88,166,0.3)" }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#9B7CC8" }}>濱</span>
            </div>
            <div>
              <p className="text-white font-500 mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", letterSpacing: "0.04em" }}>
                濱 盛力
              </p>
              <p className="text-white/35 text-xs mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.08em" }}>
                Founder &amp; CEO, Essential Qualities
              </p>
              <a
                href="https://www.instagram.com/morichika_hama_eq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/30 hover:text-[#9B7CC8] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.06em" }}
              >
                @morichika_hama_eq · 5.9万フォロワー
              </a>
            </div>
          </div>
        </div>

        {/* Right: large logo */}
        <div
          className={`flex items-center justify-center ${fade(1)}`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="relative">
            {/* Glow behind logo */}
            <div
              className="absolute inset-0 -z-10 animate-glow-pulse"
              style={{
                background: "radial-gradient(ellipse at center, rgba(122,88,166,0.35) 0%, transparent 65%)",
                transform: "scale(1.4)",
              }}
            />
            <EQLogo size={320} animated className="opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
