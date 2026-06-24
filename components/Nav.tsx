"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import EQLogo from "./EQLogo";

const mainLinks = [
  { label: "理念", href: "/philosophy" },
  { label: "サービス", href: "/services" },
  { label: "代表", href: "/profile" },
  { label: "実績", href: "/results" },
  { label: "ブログ", href: "/blog" },
];

const allLinks = [
  ...mainLinks,
  { label: "お客様の声", href: "/voice" },
  { label: "料金", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "会社概要", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          height: "64px", display: "flex", alignItems: "center",
          transition: "background 0.5s ease, border-color 0.5s ease",
          background: scrolled ? "rgba(0,0,0,0.78)" : "transparent",
          backdropFilter: scrolled ? "blur(28px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px)" : "none",
          borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.07)" : "0.5px solid transparent",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <EQLogo size={30} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.82)" }}>
              Essential Qualities
            </span>
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="eq-nav-desktop">
            {mainLinks.map((l) => (
              <Link key={l.href} href={l.href} className="eq-nav-link"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.42)", textDecoration: "none", transition: "color 0.2s" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer"
              className="eq-nav-desktop eq-cta-pill"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", textDecoration: "none", padding: "8px 20px", border: "0.5px solid rgba(122,88,166,0.55)", borderRadius: "100px", background: "rgba(122,88,166,0.1)", transition: "background 0.25s, border-color 0.25s" }}
            >
              無料相談
            </a>

            <button onClick={() => setOpen(!open)} aria-label="メニュー"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-end" }}
            >
              <motion.span animate={open ? { rotate: 45, y: 7, width: "22px" } : { rotate: 0, y: 0, width: "22px" }} transition={{ duration: 0.25 }}
                style={{ display: "block", height: "1px", background: "rgba(255,255,255,0.7)", transformOrigin: "center" }} />
              <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }}
                style={{ display: "block", width: "14px", height: "1px", background: "rgba(255,255,255,0.7)" }} />
              <motion.span animate={open ? { rotate: -45, y: -7, width: "22px" } : { rotate: 0, y: 0, width: "22px" }} transition={{ duration: 0.25 }}
                style={{ display: "block", height: "1px", background: "rgba(255,255,255,0.7)", transformOrigin: "center" }} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99, background: "rgba(0,0,0,0.96)", backdropFilter: "blur(36px)", WebkitBackdropFilter: "blur(36px)", borderBottom: "0.5px solid rgba(255,255,255,0.07)", padding: "32px" }}
          >
            <nav style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0" }}>
              {allLinks.map((l, i) => (
                <motion.div key={l.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.035, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                  <Link href={l.href} onClick={() => setOpen(false)}
                    style={{ display: "block", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "15px", fontWeight: 300, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", textDecoration: "none", padding: "14px 0", borderBottom: "0.5px solid rgba(255,255,255,0.05)", transition: "color 0.2s" }}
                    className="eq-menu-link"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div style={{ marginTop: "28px" }}>
                <a href="https://lin.ee/CjN1xSW" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", textDecoration: "none", padding: "14px 36px", border: "0.5px solid rgba(122,88,166,0.6)", borderRadius: "100px", background: "rgba(122,88,166,0.16)" }}
                >
                  無料相談はこちら
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .eq-nav-desktop { display: flex !important; }
        }
        @media (max-width: 899px) {
          .eq-nav-desktop { display: none !important; }
        }
        .eq-nav-link:hover { color: rgba(255,255,255,0.88) !important; }
        .eq-cta-pill:hover { background: rgba(122,88,166,0.22) !important; border-color: rgba(122,88,166,0.85) !important; }
        .eq-menu-link:hover { color: rgba(255,255,255,0.9) !important; }
      `}</style>
    </>
  );
}
