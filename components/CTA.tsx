"use client";
import { useEffect, useRef, useState } from "react";
import EQLogo from "./EQLogo";

export default function CTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="contact" className="relative py-48 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(122,88,166,0.12) 0%, transparent 70%)" }}
      />

      {/* Large decorative hex */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
        <EQLogo size={600} animated />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        <div
          className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <EQLogo size={64} className="mx-auto mb-12" />
        </div>

        <p
          className={`text-xs tracking-[0.28em] uppercase mb-8 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ color: "#7A58A6", fontFamily: "'Space Grotesk', sans-serif", transitionDelay: "100ms" }}
        >
          Start Your Evolution
        </p>

        <h2
          className={`mb-8 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            transitionDelay: "160ms",
          }}
        >
          あなたの可能性は、
          <br />
          まだ眠っている。
        </h2>

        <p
          className={`text-white/40 mb-14 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            fontFamily: "'Shippori Mincho', sans-serif",
            fontSize: "15px",
            lineHeight: 2.0,
            letterSpacing: "0.06em",
            transitionDelay: "240ms",
          }}
        >
          まずは無料相談から。
          <br />
          あなたの現状と目標を聞かせてください。
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "340ms" }}
        >
          <a
            href="https://lin.ee/CjN1xSW"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 text-sm tracking-widest uppercase text-white rounded-full overflow-hidden"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.16em",
              background: "linear-gradient(135deg, #7A58A6 0%, #5A3E82 100%)",
              transition: "box-shadow 0.3s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 50px rgba(122,88,166,0.55), 0 0 100px rgba(122,88,166,0.2)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }}
          >
            無料相談 / Session 予約
          </a>
        </div>

        {/* Line add button */}
        <div
          className={`mt-8 flex justify-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "440ms" }}
        >
          <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer">
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              height="40"
              className="opacity-60 hover:opacity-100 transition-opacity duration-250"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
