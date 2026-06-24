"use client";
import { useEffect, useRef, useState } from "react";

const keywords = [
  { en: "Reproducibility", ja: "再現性", desc: "成功は偶然ではなく設計から生まれる。" },
  { en: "Essence", ja: "本質", desc: "表面ではなく、根本に触れる。" },
  { en: "Thinking", ja: "思考", desc: "身体を動かす前に、思考を動かせ。" },
  { en: "Evolution", ja: "進化", desc: "昨日の自分が、今日の天井になるな。" },
  { en: "Potential", ja: "可能性", desc: "限界は、まだ設定されていない。" },
  { en: "Design", ja: "設計", desc: "あなたの未来は、今日の選択から設計される。" },
];

export default function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, i]));
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="philosophy" className="relative py-40 overflow-hidden" style={{ background: "#070707" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(122,88,166,0.3), transparent)" }} />

      {/* Large background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(120px, 20vw, 240px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.015)",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
        }}
      >
        PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <p
          className="text-xs tracking-[0.28em] uppercase mb-4"
          style={{ color: "#7A58A6", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Philosophy
        </p>
        <h2
          className="mb-24"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          私たちの信念
        </h2>

        <div className="space-y-0">
          {keywords.map((kw, i) => (
            <div
              key={kw.en}
              ref={(el) => { refs.current[i] = el; }}
              className={`
                group flex flex-col sm:flex-row items-start sm:items-center gap-6 py-10
                border-b transition-all duration-700 ease-out cursor-default
                ${visibleItems.has(i) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
              `}
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span
                className="flex-shrink-0 text-xs tracking-widest uppercase text-white/20 w-32"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.1em" }}
              >
                {String(i + 1).padStart(2, "0")} / {kw.en}
              </span>

              <h3
                className="flex-shrink-0 transition-colors duration-250 group-hover:text-[#9B7CC8]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(40px, 6vw, 80px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  minWidth: "200px",
                }}
              >
                {kw.ja}
              </h3>

              <p
                className="text-white/35 transition-colors duration-250 group-hover:text-white/55 ml-auto max-w-xs text-right hidden sm:block"
                style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "13px", lineHeight: 1.9, letterSpacing: "0.04em" }}
              >
                {kw.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
