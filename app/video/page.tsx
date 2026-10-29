"use client";
import Link from "next/link";

const chapters = [
  { time: "0:00", title: "[KAPITEL 1 – z.B. Das Problem]" },
  { time: "2:00", title: "[KAPITEL 2 – z.B. Wer bin ich?]" },
  { time: "5:00", title: "[KAPITEL 3 – z.B. Die Methode]" },
  { time: "8:00", title: "[KAPITEL 4 – z.B. Schritt 1]" },
  { time: "11:00", title: "[KAPITEL 5 – z.B. Schritt 2]" },
  { time: "14:00", title: "[KAPITEL 6 – z.B. Die Ergebnisse]" },
  { time: "17:00", title: "[KAPITEL 7 – z.B. Die zwei Wege]" },
  { time: "19:00", title: "[KAPITEL 8 – z.B. Für wen das ist]" },
];

const proof = [
  {
    label: "KUNDE · [BRANCHE]",
    stat: "[ERGEBNIS IN ZAHLEN]",
    desc: "[Name, Kontext]: [1-Satz-Ergebnis]. [Quelle / Beleg].",
  },
  {
    label: "KUNDE · [BRANCHE]",
    stat: "[ERGEBNIS IN ZAHLEN]",
    desc: "[Name, Kontext]: [1-Satz-Ergebnis]. [Quelle / Beleg].",
  },
  {
    label: "KUNDE · [BRANCHE]",
    stat: "[ERGEBNIS IN ZAHLEN]",
    desc: "[Name, Kontext]: [1-Satz-Ergebnis]. [Quelle / Beleg].",
  },
];

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <nav className="flex justify-center py-4 border-b border-[#1a1a1a]">
        <span className="text-white font-black uppercase tracking-widest text-sm">
          MANUEL LUTTER
        </span>
      </nav>

      <section className="max-w-3xl mx-auto px-4 pt-10 pb-6 text-center">
        <p className="text-[#c8f135] text-sm uppercase tracking-widest mb-4">
          [VORNAME], dein [Video/Freebie] ist freigeschaltet.
        </p>
        <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white mb-8">
          WENN DU DAS HEUTE SCHAUST,<br />
          KANNST DU[<span className="text-[#c8f135]">VERSPRECHEN IN ZEITRAUM</span>].
        </h1>

        {/* Video */}
        <div className="relative bg-[#111] border border-[#222] aspect-video mb-4 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#c8f135] flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#c8f135] ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-[#555] text-sm">DEIN HAUPTVIDEO KOMMT HIER REIN</p>
          <p className="text-[#333] text-xs mt-1">[Ca. X Minuten]</p>
        </div>

        {/* Chapters */}
        <div className="flex gap-0 overflow-x-auto pb-2 mb-8 border-b border-[#1a1a1a] text-xs text-left">
          {chapters.map((c, i) => (
            <div key={i} className="flex-shrink-0 px-3 py-2 border-r border-[#1a1a1a] last:border-r-0">
              <span className="text-[#c8f135] block">{c.time}</span>
              <span className="text-[#888]">{c.title}</span>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="bg-[#111] border border-[#222] p-8 mb-12">
          <h2 className="text-2xl font-black uppercase text-white mb-2">
            [DEIN CTA-HEADING]
          </h2>
          <p className="text-[#888] mb-6">[30 Minuten · vorher X kurze Fragen · was sie erwarten]</p>
          <Link href="/bewerbung" className="inline-flex items-center gap-2 bg-[#c8f135] text-black font-bold uppercase tracking-wide px-10 py-4 text-lg hover:bg-[#a8cc1a] transition-colors">
            [CTA-TEXT] →
          </Link>
          <p className="text-[#555] text-xs mt-3">[Vertrauens-Zeile]</p>
        </div>
      </section>

      {/* Proof Section */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-black uppercase text-white text-center mb-2">
          ICH WÜRDE MIR AUCH NICHTS GLAUBEN.<br />
          ALSO GUCK SELBST.
        </h2>
        <p className="text-[#888] text-center text-sm mb-8">
          [DEINE BELEG-EINLEITUNG – was du hier zeigst und warum es glaubwürdig ist]
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {proof.map((p, i) => (
            <div key={i} className="bg-[#111] border border-[#222] p-6">
              <span className="text-[#c8f135] text-xs uppercase tracking-widest block mb-2">
                {p.label}
              </span>
              <p className="text-3xl font-black text-white mb-3">{p.stat}</p>
              <p className="text-[#888] text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Fit Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#111] border border-[#1a2a00] p-6">
            <h3 className="font-black uppercase text-[#c8f135] mb-4">DAS IST FÜR DICH, WENN</h3>
            <ul className="space-y-2 text-sm text-[#aaa]">
              {["[Kriterium 1]", "[Kriterium 2]", "[Kriterium 3]", "[Kriterium 4]", "[Kriterium 5]"].map((k, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#c8f135] mt-0.5">✓</span> {k}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border border-[#2a1a1a] p-6">
            <h3 className="font-black uppercase text-[#888] mb-4">NICHTS FÜR DICH, WENN</h3>
            <ul className="space-y-2 text-sm text-[#888]">
              {["[Ausschluss 1]", "[Ausschluss 2]", "[Ausschluss 3]", "[Ausschluss 4]", "[Ausschluss 5]"].map((k, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#555] mt-0.5">✕</span> {k}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase text-white text-center mb-6">
            KEINE FAQ. DIE DREI FRAGEN, DIE WIRKLICH KOMMEN.
          </h2>
          {[
            { q: "[HÄUFIGSTER EINWAND 1]", a: "[Deine Antwort – direkt, ehrlich, ohne Weichspüler]" },
            { q: "[HÄUFIGSTER EINWAND 2 – meist Preis]", a: "[Deine Antwort]" },
            { q: "[HÄUFIGSTER EINWAND 3 – meist 'kann ich das selbst?']", a: "[Deine Antwort]" },
          ].map((f, i) => (
            <div key={i} className="border-b border-[#1a1a1a] py-5">
              <h4 className="font-black uppercase text-white mb-2">{f.q}</h4>
              <p className="text-[#888] text-sm">{f.a}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-[#888] text-sm mb-4">
            DU HAST BIS HIER GELESEN. DANN GEHÖRST DU WAHRSCHEINLICH IN DIE ERSTE GRUPPE.
          </p>
          <Link href="/bewerbung" className="inline-flex items-center gap-2 bg-[#c8f135] text-black font-bold uppercase tracking-wide px-10 py-4 text-lg hover:bg-[#a8cc1a] transition-colors">
            [CTA-TEXT] →
          </Link>
          <p className="text-[#555] text-xs mt-3">[Vertrauens-Zeile]</p>
        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] py-6 text-center">
        <div className="flex justify-center gap-8 text-[#555] text-xs">
          <a href="/impressum" className="hover:text-white">Impressum</a>
          <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
