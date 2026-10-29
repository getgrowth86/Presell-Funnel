"use client";
import { useState } from "react";
import OptinModal from "@/components/OptinModal";

const CLIENTS = [
  "Hoss & Hopf", "Bastian Barami", "Secret Creators Club",
  "Coaching-Unternehmerin (5 Mio. €)", "Personal Brand (8-stellig)",
  "Hoss & Hopf", "Bastian Barami", "Secret Creators Club",
  "Coaching-Unternehmerin (5 Mio. €)", "Personal Brand (8-stellig)",
];

export default function PresellPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Nav */}
      <nav className="flex justify-center py-5 border-b border-[#1a1a1a]">
        <span className="text-white font-black uppercase tracking-widest text-sm">
          MANUEL LUTTER
        </span>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-10 pb-6 text-center">
        {/* Badge row */}
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          <span className="bg-[#c8f135] text-black text-xs font-black uppercase tracking-widest px-3 py-1">
            NEU
          </span>
          <span className="text-[#c8f135] text-xs font-bold uppercase tracking-widest">
            Stratege hinter 150M+ € Markenumsatz packt aus
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white mb-5">
          „Übernimm das Skalierungssystem, mit dem Coaches & Personenmarken von 100k€/Monat auf{" "}
          <span className="text-[#c8f135]">den nächsten Meilenstein wachsen</span>{" "}
          – ohne sich selbst zum Engpass zu machen"
        </h1>

        {/* Sub headline */}
        <p className="text-[#aaa] text-base md:text-lg mb-8">
          Während ein Strategiegespräch{" "}
          <strong className="text-white">kostenlos</strong>{" "}
          ist und der erste Hebel in{" "}
          <strong className="text-white">30 Minuten</strong>{" "}
          identifiziert wird!
        </p>

        {/* Video */}
        <div
          onClick={() => setOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
          className="relative w-full bg-[#111] border border-[#222] mb-2 cursor-pointer hover:border-[#c8f135] transition-colors group overflow-hidden"
          style={{ paddingBottom: "56.25%" }}
          aria-label="Video ansehen"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-[#c8f135] flex items-center justify-center mb-4 group-hover:bg-[#c8f135]/10 transition-colors">
              <svg className="w-8 h-8 text-[#c8f135] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white font-black text-2xl md:text-3xl uppercase tracking-wide">
              KEIN ZUFALL,
            </p>
            <p className="text-white font-black text-2xl md:text-3xl uppercase tracking-wide">
              SONDERN SYSTEM.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setOpen(true)}
          className="w-full flex items-center justify-between gap-4 bg-[#c8f135] text-black font-black uppercase tracking-wide px-8 py-5 text-lg hover:bg-[#b0d620] transition-colors mb-2"
        >
          <span>Zeig mir das System</span>
          <span className="text-2xl">→</span>
        </button>
        <p className="text-[#555] text-xs mb-3">
          Video startet sofort · ~12 Minuten · dazu mein Analyse-Framework für deinen Engpass
        </p>

        {/* Differentiator */}
        <p className="text-[#777] text-sm">
          Strategie statt Coaching oder Beratung. Ich baue das System mit dir – und dein Team setzt es um.
        </p>
      </section>

      {/* Social Proof Bar */}
      <section className="border-t border-b border-[#1a1a1a] py-8 my-4">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left: Calendly-style proof */}
          <div className="text-center">
            <div className="bg-[#111] border border-[#222] p-4 mb-3 inline-block w-full">
              <p className="text-3xl font-black text-white">5 MIO. €</p>
              <p className="text-[#c8f135] text-xs uppercase tracking-widest mt-1">
                Auftragseingang · Coaching-Business
              </p>
            </div>
            <p className="text-[#666] text-xs">
              Von 1,2 auf 5 Millionen in 12 Monaten. Echte Zahlen.
            </p>
          </div>

          {/* Center: Award/credential */}
          <div className="text-center">
            <div className="bg-[#111] border border-[#222] p-4 mb-3 inline-block w-full">
              <p className="text-3xl font-black text-white">1,1 MIO. €</p>
              <p className="text-[#c8f135] text-xs uppercase tracking-widest mt-1">
                Monatsumsatz · Juli 2024
              </p>
            </div>
            <p className="text-[#666] text-xs">
              Secret Creators Club. System läuft, auch wenn du nicht da bist.
            </p>
          </div>

          {/* Right: Credential */}
          <div className="text-center">
            <div className="bg-[#111] border border-[#222] p-4 mb-3 inline-block w-full">
              <p className="text-3xl font-black text-white">150M+ €</p>
              <p className="text-[#c8f135] text-xs uppercase tracking-widest mt-1">
                Markenumsatz begleitet
              </p>
            </div>
            <p className="text-[#666] text-xs">
              Als Stratege, CMO & Media Buyer bei Hoss & Hopf, Bastian Barami u. a.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-2xl mx-auto px-4 py-10 text-center">
        <blockquote className="text-xl md:text-2xl text-white font-black uppercase mb-4 leading-snug">
          „Von 1,2 auf 5 Millionen Euro Auftragseingang – in 12 Monaten."
        </blockquote>
        <p className="text-[#888] text-sm">
          Unternehmerin, Coaching-Business · Durch Webinar-Funnel und skalierbare Prozesse
        </p>
      </section>

      {/* Client Logo Marquee */}
      <section className="border-t border-[#1a1a1a] py-8 overflow-hidden">
        <p className="text-center text-[#555] text-xs uppercase tracking-widest mb-6">
          Kunden und Partner
        </p>
        <div className="relative flex">
          <div className="flex gap-12 items-center animate-marquee whitespace-nowrap pr-12">
            {CLIENTS.map((name, i) => (
              <span key={i} className="text-[#444] text-sm font-bold uppercase tracking-widest flex-shrink-0">
                {name}
              </span>
            ))}
          </div>
          <div className="flex gap-12 items-center animate-marquee whitespace-nowrap pr-12" aria-hidden>
            {CLIENTS.map((name, i) => (
              <span key={i} className="text-[#444] text-sm font-bold uppercase tracking-widest flex-shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-6 text-center">
        <div className="flex justify-center gap-8 text-[#555] text-xs">
          <a href="/impressum" className="hover:text-white">Impressum</a>
          <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
        </div>
      </footer>

      {open && <OptinModal onClose={() => setOpen(false)} />}
    </main>
  );
}
