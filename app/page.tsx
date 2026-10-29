"use client";
import { useState } from "react";
import OptinModal from "@/components/OptinModal";

const LOGOS = [
  "Hoss & Hopf", "Bastian Barami", "Secret Creators Club",
  "Coaching-Unternehmerin · 5 Mio. €", "Personal Brand · 8-stellig",
  "Hoss & Hopf", "Bastian Barami", "Secret Creators Club",
  "Coaching-Unternehmerin · 5 Mio. €", "Personal Brand · 8-stellig",
];

export default function PresellPage() {
  const [open, setOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "#070d0a" }}>
      {/* ── Nav ───────────────────────────────────────────── */}
      <nav className="flex justify-center py-5">
        <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "15px", letterSpacing: "0.12em" }}>
          <span style={{ color: "#f1f0e8" }}>MANUEL </span>
          <span style={{ color: "#c8f135" }}>LUTTER</span>
        </span>
      </nav>

      {/* ── Hero / Bühne ──────────────────────────────────── */}
      <div style={{ backgroundColor: "#0b2a14", paddingBottom: "60px" }}>
        <div className="max-w-2xl mx-auto px-5 pt-10 text-center">

          {/* Badge row */}
          <div className="flex items-center justify-center gap-2 mb-7" style={{ fontSize: "13px" }}>
            <span style={{
              width: "8px", height: "8px", borderRadius: "50%",
              backgroundColor: "#c8f135", flexShrink: 0, display: "inline-block"
            }} />
            <span style={{
              backgroundColor: "#c8f135", color: "#070d0a",
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "11px", fontWeight: 900,
              letterSpacing: "0.1em", padding: "2px 8px", borderRadius: "4px"
            }}>NEU</span>
            <span style={{ color: "#c8f135", letterSpacing: "0.05em", fontWeight: 500 }}>
              Stratege hinter 150M+ € Markenumsatz packt aus
            </span>
          </div>

          {/* Headline */}
          <h1
            className="headline mb-5"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#f1f0e8" }}
          >
            „Übernimm das Skalierungssystem, mit dem Coaches&nbsp;&amp; Personenmarken{" "}
            <span style={{ color: "#c8f135" }}>
              von 100k€/Monat auf den nächsten Meilenstein wachsen
            </span>
            {" "}– ohne sich selbst zum Engpass zu machen"
          </h1>

          {/* Sub */}
          <p style={{ color: "#8fa89a", fontSize: "17px", lineHeight: 1.55, marginBottom: "28px" }}>
            Während ein Strategiegespräch{" "}
            <strong style={{ color: "#f1f0e8" }}>kostenlos</strong>{" "}
            ist und der erste Hebel in{" "}
            <strong style={{ color: "#f1f0e8" }}>30 Minuten</strong>{" "}
            identifiziert wird!
          </p>

          {/* Video thumbnail */}
          <div
            onClick={() => setOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
              backgroundColor: "#040f08",
              border: "1px solid #1a3020",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              marginBottom: "12px",
            }}
            aria-label="Video ansehen"
          >
            {/* Subtle gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, #040f08 100%)"
            }} />

            {/* Center content */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "16px"
            }}>
              {/* Play button */}
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                border: "2px solid #c8f135",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s"
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#c8f135" style={{ marginLeft: "4px" }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Video overlay text */}
              <div style={{ textAlign: "center" }}>
                <p className="headline" style={{ color: "#f1f0e8", fontSize: "clamp(18px, 3vw, 28px)", opacity: 0.9 }}>
                  KEIN ZUFALL.
                </p>
                <p className="headline" style={{ color: "#c8f135", fontSize: "clamp(18px, 3vw, 28px)" }}>
                  SYSTEM.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setOpen(true)}
            style={{
              display: "flex",
              alignItems: "stretch",
              width: "100%",
              backgroundColor: "#c8f135",
              borderRadius: "12px",
              overflow: "hidden",
              border: "none",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            {/* Left: text */}
            <div style={{ flex: 1, padding: "16px 20px 16px 28px", textAlign: "left" }}>
              <div style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "17px",
                fontWeight: 900,
                color: "#08110c",
                lineHeight: 1.1,
                marginBottom: "3px"
              }}>
                Zeig mir das System
              </div>
              <div style={{ fontSize: "12px", color: "#3a5a30", fontWeight: 500 }}>
                Video startet sofort · ~12 Minuten · kostenlos
              </div>
            </div>
            {/* Right: arrow */}
            <div style={{
              backgroundColor: "#a8cc1a",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "0 20px",
              flexShrink: 0
            }}>
              <svg viewBox="0 0 20 20" fill="none" stroke="#08110c" strokeWidth="2.4"
                strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <path d="M4 10h11M11 5l5 5-5 5" />
              </svg>
            </div>
          </button>

          {/* Differentiator */}
          <p style={{ color: "#5a7060", fontSize: "14px" }}>
            Strategie statt Coaching oder Beratung. Ich baue das System mit dir – und dein Team setzt es um.
          </p>
        </div>
      </div>

      {/* ── Social Proof Bar ──────────────────────────────── */}
      <div style={{ backgroundColor: "#070d0a", padding: "48px 20px" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              stat: "5 Mio. €",
              label: "Auftragseingang",
              sub: "Coaching-Business · +317% in 12 Monaten",
            },
            {
              stat: "1,1 Mio. €",
              label: "Monatsumsatz",
              sub: "Secret Creators Club · Juli 2024",
            },
            {
              stat: "150M+ €",
              label: "Markenumsatz begleitet",
              sub: "Hoss & Hopf, Bastian Barami u. a.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#0b1a0f",
                border: "1px solid #1a2e1a",
                borderRadius: "12px",
                padding: "24px 20px",
                textAlign: "center",
              }}
            >
              <p className="headline" style={{ color: "#f1f0e8", fontSize: "clamp(24px, 4vw, 36px)", marginBottom: "4px" }}>
                {item.stat}
              </p>
              <p style={{ color: "#c8f135", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                {item.label}
              </p>
              <p style={{ color: "#5a7060", fontSize: "13px", lineHeight: 1.4 }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonial ───────────────────────────────────── */}
      <div style={{ backgroundColor: "#070d0a", padding: "0 20px 56px" }}>
        <div className="max-w-xl mx-auto text-center">
          <p style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(18px, 3vw, 26px)",
            color: "#f1f0e8",
            lineHeight: 1.2,
            marginBottom: "12px"
          }}>
            „Von 1,2 auf 5 Millionen Euro Auftragseingang – in 12 Monaten."
          </p>
          <p style={{ color: "#5a7060", fontSize: "14px" }}>
            Unternehmerin, Coaching-Business · Durch Webinar-Funnel und skalierbare Prozesse
          </p>
        </div>
      </div>

      {/* ── Logos / Partner ───────────────────────────────── */}
      <div style={{ borderTop: "1px solid #111d14", borderBottom: "1px solid #111d14", padding: "28px 0", overflow: "hidden" }}>
        <p style={{
          textAlign: "center",
          color: "#3a4f3e",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "20px"
        }}>
          Kunden und Partner
        </p>
        <div style={{ display: "flex", overflow: "hidden" }}>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              style={{
                display: "flex",
                gap: "56px",
                alignItems: "center",
                whiteSpace: "nowrap",
                animation: "marquee 28s linear infinite",
                paddingRight: "56px",
                flexShrink: 0,
              }}
            >
              {LOGOS.map((name, i) => (
                <span key={i} style={{ color: "#2d3d30", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer style={{ padding: "24px 20px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "32px" }}>
          <a href="/impressum" style={{ color: "#3a4f3e", fontSize: "13px", textDecoration: "none" }}>Impressum</a>
          <a href="/datenschutz" style={{ color: "#3a4f3e", fontSize: "13px", textDecoration: "none" }}>Datenschutz</a>
        </div>
      </footer>

      {open && <OptinModal onClose={() => setOpen(false)} />}
    </main>
  );
}
