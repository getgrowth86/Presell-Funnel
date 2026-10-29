// Danke-Seite / Kalender-Seite
export default function DankePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4">
      <nav className="w-full flex justify-center py-4 border-b border-[#1a1a1a] absolute top-0">
        <span className="text-white font-black uppercase tracking-widest text-sm">
          MANUEL LUTTER
        </span>
      </nav>

      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <span className="inline-flex items-center bg-[#c8f135] text-black text-xs font-bold uppercase tracking-widest px-3 py-1">FAST DA</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
          WÄHL DIR EINEN TERMIN.
        </h1>
        <p className="text-[#888] text-lg mb-10">
          Im Gespräch schauen wir gemeinsam, wo bei dir heute Umsatz verloren geht – und welche Hebel du in welcher Reihenfolge ziehen solltest. Am Ende hast du eine sortierte Liste. Kein Pitch, keine Agenda außer deiner.
        </p>

        {/* Calendly Placeholder */}
        <div className="bg-[#111] border border-[#222] rounded-none p-12 mb-8">
          <p className="text-[#555] text-sm mb-2">CALENDLY / TERMINBUCHUNG HIER</p>
          <p className="text-[#333] text-xs">
            Ersetze diesen Block mit deinem eingebetteten Calendly-Widget
          </p>
          <div className="mt-6">
            <a
              href="https://calendly.com/DEIN-LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c8f135] text-black font-bold uppercase tracking-wide px-8 py-4 text-lg hover:bg-[#a8cc1a] transition-colors"
            >
              TERMIN BUCHEN →
            </a>
          </div>
        </div>

        <p className="text-[#555] text-xs">
          Du wirst in wenigen Minuten eine Bestätigungs-Mail erhalten.
        </p>
      </div>

      <footer className="w-full border-t border-[#1a1a1a] py-6 text-center absolute bottom-0">
        <div className="flex justify-center gap-8 text-[#555] text-xs">
          <a href="/impressum" className="hover:text-white">Impressum</a>
          <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
