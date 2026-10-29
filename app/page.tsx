"use client";
import { useState } from "react";
import OptinModal from "@/components/OptinModal";

export default function PresellPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Nav */}
      <nav className="flex justify-center py-4 border-b border-[#1a1a1a]">
        <span className="text-white font-black uppercase tracking-widest text-sm">
          MANUEL LUTTER
        </span>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-12 pb-8 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center bg-[#c8f135] text-black text-xs font-bold uppercase tracking-widest px-3 py-1">FÜR COACHES & PERSONENMARKEN</span>
          <span className="ml-3 text-[#888] text-sm uppercase tracking-widest">
            Ab 100.000 € Monatsumsatz
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white mb-6">
          „Du bist der Engpass in deinem eigenen Business."
        </h1>

        <p className="text-[#aaa] text-lg mb-10">
          Ich zeige dir, woran das liegt, was dagegen hilft – und ob wir zusammenpassen. 30 Minuten. Kostenlos. Auf Augenhöhe.
        </p>

        {/* Video Placeholder */}
        <div className="relative bg-[#111] border border-[#222] aspect-video mb-8 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#c8f135] flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-[#c8f135]/10 transition-colors">
              <svg className="w-6 h-6 text-[#c8f135] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-[#555] text-sm">VIDEO PLACEHOLDER</p>
            <p className="text-[#333] text-xs mt-1">Dein Video kommt hier rein</p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-[#c8f135] text-black font-bold uppercase tracking-wide px-12 py-5 text-xl hover:bg-[#a8cc1a] transition-colors w-full md:w-auto justify-center"
        >
          VIDEO ANSEHEN & TERMIN SICHERN →
        </button>
        <p className="text-[#555] text-xs mt-3">
          Video startet sofort · ~12 Minuten · Kostenlos
        </p>
      </section>

      {/* Social Proof Bar */}
      <section className="border-t border-b border-[#1a1a1a] py-8 my-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-[#c8f135]">150M+ €</p>
            <p className="text-[#888] text-sm uppercase tracking-wide mt-1">Umsatz begleitet</p>
          </div>
          <div>
            <p className="text-4xl font-black text-[#c8f135]">52M+ €</p>
            <p className="text-[#888] text-sm uppercase tracking-wide mt-1">Meta-Werbebudget verwaltet</p>
          </div>
          <div>
            <p className="text-4xl font-black text-[#c8f135]">25+</p>
            <p className="text-[#888] text-sm uppercase tracking-wide mt-1">Webinar-Funnel aufgebaut</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-2xl mx-auto px-4 py-8 text-center">
        <blockquote className="text-xl text-white italic mb-4">
          „Von 1,2 auf 5 Millionen Euro Auftragseingang – in 12 Monaten."
        </blockquote>
        <p className="text-[#888] text-sm">Unternehmerin, Coaching-Business</p>
      </section>

      {/* Second CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16 text-center">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-[#c8f135] text-black font-bold uppercase tracking-wide px-12 py-5 text-xl hover:bg-[#a8cc1a] transition-colors"
        >
          VIDEO ANSEHEN & TERMIN SICHERN →
        </button>
        <p className="text-[#555] text-xs mt-3">
          Kostenlos · 30 Minuten · Nur für Coaches & Personenmarken ab 100k€/Monat
        </p>
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
