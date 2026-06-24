"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    en: "Personal Session",
    ja: "パーソナルセッション",
    desc: "身体・思考・データを統合した完全個別設計のトレーニングプログラム。あなた固有の課題を解析し、最短経路で進化を設計します。",
    tags: ["1 on 1", "Data Analysis", "Custom Program"],
  },
  {
    id: "02",
    en: "Online Salon",
    ja: "オンラインサロン",
    desc: "知識・思考・コミュニティを通じて、個人の限界を超える。一流に触れ続ける環境が、あなたの基準を書き換えます。",
    tags: ["Community", "Knowledge", "Mindset"],
  },
  {
    id: "03",
    en: "4D Stretch",
    ja: "4Dストレッチ",
    desc: "独自開発の4次元ストレッチメソッド。可動域・神経伝達・筋連鎖・意識を同時に最適化し、身体パフォーマンスを根本から再構築します。",
    tags: ["Mobility", "Neural", "Recovery"],
  },
  {
    id: "04",
    en: "Team & Corporate",
    ja: "企業・チームサポート",
    desc: "組織全体のパフォーマンスを設計する。チームの本質的な課題を解析し、再現性ある成果を生む組織基盤を構築します。",
    tags: ["Team", "Organization", "Performance"],
  },
];

export default function Services() {
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
    <section ref={ref} id="services" className="relative py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      {/* Subtle bg glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(122,88,166,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-8">
        <div
          className={`mb-20 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs tracking-[0.28em] uppercase mb-4" style={{ color: "#7A58A6", fontFamily: "'Space Grotesk', sans-serif" }}>
            Services
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
            提供するサービス
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`
                group relative p-10 rounded-2xl glass card-hover cursor-default
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Purple line on hover */}
              <div
                className="absolute top-0 left-8 right-8 h-px transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(122,88,166,0), transparent)",
                }}
                onMouseEnter={() => {}}
              />
              <div
                className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, #7A58A6, transparent)",
                  boxShadow: "0 0 12px rgba(122,88,166,0.6)",
                }}
              />

              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-5xl font-display font-700 leading-none"
                  style={{ color: "rgba(122,88,166,0.2)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                >
                  {s.id}
                </span>
                <div
                  className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                  style={{ color: "#7A58A6" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>

              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.en}
              </p>
              <h3
                className="text-xl font-display font-600 mb-5 text-white"
                style={{ fontFamily: "'Shippori Mincho', sans-serif", fontWeight: 700, letterSpacing: "0.02em" }}
              >
                {s.ja}
              </h3>
              <p
                className="text-white/45 leading-relaxed mb-8"
                style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", lineHeight: 1.9, letterSpacing: "0.03em" }}
              >
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] tracking-widest uppercase rounded-full"
                    style={{
                      background: "rgba(122,88,166,0.1)",
                      border: "0.5px solid rgba(122,88,166,0.25)",
                      color: "rgba(122,88,166,0.8)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
