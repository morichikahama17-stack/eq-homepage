"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "1,000", unit: "+", label: "指導人数", en: "Athletes Coached" },
  { value: "5.9万", unit: "", label: "SNSフォロワー", en: "Followers" },
  { value: "150", unit: "km+", label: "球速突破 選手多数輩出", en: "Velocity Achieved" },
  { value: "Draft", unit: "#1", label: "ドラフト1位輩出", en: "Draft Pick" },
];

const milestones = [
  { year: "2023", text: "オンラインサロン開始" },
  { year: "2024.02", text: "株式会社 Essential Qualities 設立" },
  { year: "2024.03", text: "DAY ONE 開業（東大阪・布施）" },
  { year: "2024", text: "宗山塁 選手（東北楽天）・金丸夢斗 選手（中日）ドラフト1位指名" },
  { year: "2025.06", text: "DAY ONE 大阪市福島区へ移転" },
];

export default function Results() {
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
    <section ref={ref} id="results" className="relative py-40 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(122,88,166,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-8">
        <div className={`mb-24 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.28em] uppercase mb-4" style={{ color: "#7A58A6", fontFamily: "'Space Grotesk', sans-serif" }}>
            Results
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
            実績
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {stats.map((s, i) => (
            <div
              key={s.en}
              className={`
                relative p-8 rounded-2xl overflow-hidden
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(122,88,166,0.5), transparent)" }}
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.en}
              </p>

              <div className="flex items-end gap-1 mb-3">
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(16px, 2vw, 24px)",
                    fontWeight: 500,
                    lineHeight: 1.4,
                    color: "#7A58A6",
                  }}
                >
                  {s.unit}
                </span>
              </div>

              <p
                className="text-white/40"
                style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "12px", lineHeight: 1.7, letterSpacing: "0.04em" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div
          className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/25 mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Timeline
          </p>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: "rgba(122,88,166,0.2)" }} />
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-8 py-5 transition-all duration-500 ease-out group cursor-default ${visible ? "opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: `${600 + i * 80}ms` }}
                >
                  <span
                    className="flex-shrink-0 text-xs font-display text-white/30 group-hover:text-[#7A58A6] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", width: "64px", textAlign: "right" }}
                  >
                    {m.year}
                  </span>
                  <div
                    className="flex-shrink-0 w-2 h-2 rounded-full border transition-colors"
                    style={{ borderColor: "rgba(122,88,166,0.4)", background: "black" }}
                  />
                  <p
                    className="text-white/50 group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: "'Shippori Mincho', sans-serif", fontSize: "14px", letterSpacing: "0.04em" }}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
