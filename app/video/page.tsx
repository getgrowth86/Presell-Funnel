"use client";
import Link from "next/link";

const chapters = [
  { time: "0:00", title: "Du bist der Engpass" },
  { time: "0:35", title: "Wer ist Manuel?" },
  { time: "0:58", title: "Das echte Problem" },
  { time: "1:40", title: "Dein typischer Dienstag" },
  { time: "2:15", title: "Warum Ads nicht reichen" },
  { time: "2:50", title: "Die 4 Schritte" },
  { time: "5:10", title: "Case Study: 1,2 → 5 Mio." },
  { time: "9:10", title: "Ist das was für dich?" },
];

const proof = [
  {
    label: "UNTERNEHMERIN · COACHING",
    stat: "5 Mio. €",
    desc: "Von 1,2 auf 5 Millionen Euro Auftragseingang in 12 Monaten – durch Webinar-Funnel und skalierbare Prozesse.",
  },
  {
    label: "SECRET CREATORS CLUB · COMMUNITY",
    stat: "1,1 Mio. €",
    desc: "Monatsumsatz im Juli 2024 – bei 40 Grad Außentemperatur. System läuft, auch wenn du nicht da bist.",
  },
  {
    label: "HOSS & HOPF, BASTIAN BARAMI U. A.",
    stat: "150M+ €",
    desc: "Umsatz, den ich als Stratege, CMO und Media Buyer über mehrere Marken mit siebenstelligem Monatsumsatz begleitet habe.",
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
          Dein Video ist freigeschaltet.
        </p>
        <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white mb-8">
          SCHAU DAS JETZT.<br />
          <span className="text-[#c8f135]">DANACH WEISST DU, WO DEIN UMSATZ VERLOREN GEHT.</span>
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
            WELCHE HEBEL HOLEN BEI DIR DEN NÄCHSTEN SCHRITT?
          </h2>
          <p className="text-[#888] mb-6">30 Minuten · 5 kurze Fragen zur Vorqualifikation · kein Verkaufsgespräch mit Druck</p>
          <Link href="/bewerbung" className="inline-flex items-center gap-2 bg-[#c8f135] text-black font-bold uppercase tracking-wide px-10 py-4 text-lg hover:bg-[#a8cc1a] transition-colors">
            JETZT BEWERBUNG STARTEN →
          </Link>
          <p className="text-[#555] text-xs mt-3">Nur für Coaches & Personenmarken ab 100.000 € Monatsumsatz</p>
        </div>
      </section>

      {/* Proof Section */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-black uppercase text-white text-center mb-2">
          ICH WÜRDE MIR AUCH NICHTS GLAUBEN.<br />
          ALSO GUCK SELBST.
        </h2>
        <p className="text-[#888] text-center text-sm mb-8">
          Keine Screenshots von Dashboards, die jeder faken kann. Nur Zahlen, die ich dir im Gespräch belegen kann.
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
              {["Du machst monatlich 100.000 € oder mehr Umsatz.", "Du hast ein erprobtes Angebot, das sich verkauft.", "Du willst skalieren und weißt, dass dein Setup das nicht trägt.", "Du bist bereit, Verantwortung abzugeben und Prozesse zu verändern.", "Du triffst Entscheidungen schnell und stehst dir nicht selbst im Weg."].map((k, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#c8f135] mt-0.5">✓</span> {k}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border border-[#2a1a1a] p-6">
            <h3 className="font-black uppercase text-[#888] mb-4">NICHTS FÜR DICH, WENN</h3>
            <ul className="space-y-2 text-sm text-[#888]">
              {["Du machst unter 100.000 € im Monat.", "Du hast noch kein bewährtes Angebot.", "Du erwartest, dass jemand anderes dein Business baut.", "Du willst Garantien, ohne selbst dabei zu sein.", "Du suchst eine Agentur, die dir Reports schickt."].map((k, i) => (
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
            { q: "Ich hatte schon eine Agentur. Warum sollte das hier anders sein?", a: "Weil ich keine Agentur bin. Ich baue das System mit dir, nicht für dich. Du verstehst jeden Schritt. Kein ausgelagertes Team, das Reports schickt – sondern eine Strategie, die dein Team umsetzt und die dir gehört." },
            { q: "Was kostet das?", a: "Das besprechen wir erst, wenn klar ist, welche Hebel zu dir passen. Ich will dir keine Zahl hinwerfen, die nicht zu deinem Fall passt. Im Erstgespräch schauen wir zuerst, ob es überhaupt Sinn macht." },
            { q: "Brauche ich dafür ein großes Team?", a: "Nein. Die meisten starten mit dem Team, das sie bereits haben. Das Team wächst mit dem System – nicht davor. Der erste Schritt ist immer der Engpass, nicht die Teamgröße." },
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
            JETZT BEWERBUNG STARTEN →
          </Link>
          <p className="text-[#555] text-xs mt-3">Nur für Coaches & Personenmarken ab 100.000 € Monatsumsatz</p>
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
