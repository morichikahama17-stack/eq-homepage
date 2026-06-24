"use client";
import { useEffect, useRef, useState } from "react";
import EQLogo from "./EQLogo";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeClass = (delay: number) =>
    `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(122,88,166,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Decorative hex — large, top-right */}
      <div className="absolute top-[-80px] right-[-80px] opacity-10 pointer-events-none">
        <EQLogo size={480} animated />
      </div>
      {/* Decorative hex — small, bottom-left */}
      <div className="absolute bottom-[-60px] left-[-60px] opacity-8 pointer-events-none">
        <EQLogo size={300} animated />
      </div>

      {/* Thin horizontal rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(122,88,166,0.5) 50%, transparent 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        {/* Logo */}
        <div
          className={fadeClass(0)}
          style={{ transitionDelay: "0ms" }}
        >
          <EQLogo size={96} animated className="mx-auto mb-10" />
        </div>

        {/* Eyebrow */}
        <p
          className={`text-xs tracking-[0.3em] uppercase mb-8 ${fadeClass(1)}`}
          style={{
            transitionDelay: "120ms",
            color: "#7A58A6",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Essential Qualities
        </p>

        {/* Main headline */}
        <h1
          className={`font-display text-gradient-white mb-6 ${fadeClass(2)}`}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(52px, 8vw, 104px)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            transitionDelay: "220ms",
          }}
        >
          進化を、
          <br />
          <span style={{ color: "#7A58A6" }}>設計する。</span>
        </h1>

        {/* Sub headline */}
        <p
          className={`max-w-lg mx-auto text-white/45 mb-14 ${fadeClass(3)}`}
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "clamp(13px, 1.6vw, 16px)",
            lineHeight: 2.0,
            letterSpacing: "0.06em",
            transitionDelay: "340ms",
          }}
        >
          データ・思考・身体を統合し、
          <br />
          再現性のある進化を生み出す。
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 items-center ${fadeClass(4)}`}
          style={{ transitionDelay: "460ms" }}
        >
          <a
            href="#contact"
            className="group relative px-10 py-4 text-sm tracking-widest uppercase text-white rounded-full overflow-hidden transition-all duration-250"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.16em",
              background: "linear-gradient(135deg, #7A58A6 0%, #5A3E82 100%)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(122,88,166,0.5), 0 0 80px rgba(122,88,166,0.2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Session 予約
          </a>
          <a
            href="#services"
            className="px-10 py-4 text-sm tracking-widest uppercase text-white/60 hover:text-white border border-white/14 hover:border-white/35 rounded-full transition-all duration-250"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.16em",
            }}
          >
            Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${fadeClass(5)}`}
        style={{ transitionDelay: "700ms" }}
      >
        <span className="text-[10px] tracking-[0.22em] uppercase text-white/25">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
