"use client";
import { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// ← Deinen Calendly-Link hier eintragen (z.B. "https://calendly.com/manuel-lutter/strategie")
const CALENDLY_URL = "https://calendly.com/DEIN-LINK/strategiegesprach";

function CalendlyWidget() {
  const params = useSearchParams();
  const name = params.get("name") || "";
  const email = params.get("email") || "";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const existing = document.getElementById("calendly-widget-script");
    const init = () => {
      const cal = (window as unknown as { Calendly?: { initInlineWidget: (opts: unknown) => void } }).Calendly;
      if (!cal || !ref.current) return;
      ref.current.innerHTML = "";
      cal.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: ref.current,
        prefill: { name, email },
        utm: {},
      });
    };
    if (existing) {
      init();
    } else {
      const script = document.createElement("script");
      script.id = "calendly-widget-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = init;
      document.head.appendChild(script);
    }
  }, [name, email]);

  return (
    <div
      ref={ref}
      className="w-full rounded-none"
      style={{ minHeight: "700px" }}
    />
  );
}

export default function DankePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <nav className="w-full flex justify-center py-4 border-b border-[#1a1a1a]">
        <span className="text-white font-black uppercase tracking-widest text-sm">
          MANUEL LUTTER
        </span>
      </nav>

      <div className="flex-1 px-4 py-10 max-w-3xl mx-auto w-full">
        <div className="text-center mb-8">
          <span className="inline-flex items-center bg-[#c8f135] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4">
            FAST DA
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white mb-4">
            WÄHL DIR EINEN TERMIN.
          </h1>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            Im Gespräch schauen wir gemeinsam, wo bei dir heute Umsatz verloren geht – und welche Hebel du in welcher Reihenfolge ziehen solltest. Kein Pitch. Keine Agenda außer deiner.
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div className="bg-[#111] border border-[#222]">
          <Suspense fallback={
            <div className="flex items-center justify-center" style={{ minHeight: "700px" }}>
              <p className="text-[#555] text-sm">Kalender wird geladen …</p>
            </div>
          }>
            <CalendlyWidget />
          </Suspense>
        </div>

        <p className="text-[#555] text-xs text-center mt-6">
          Du erhältst sofort eine Bestätigungs-Mail. Bei Fragen: Antworte direkt darauf.
        </p>
      </div>

      <footer className="w-full border-t border-[#1a1a1a] py-6 text-center">
        <div className="flex justify-center gap-8 text-[#555] text-xs">
          <a href="/impressum" className="hover:text-white">Impressum</a>
          <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
