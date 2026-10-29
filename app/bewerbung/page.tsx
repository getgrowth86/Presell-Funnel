"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    id: "timing",
    question: "OKAY, KURZ UND SCHMERZLOS. WANN WILLST DU LOSLEGEN?",
    type: "radio" as const,
    options: ["Sofort", "In den nächsten 4 Wochen", "In 1 bis 3 Monaten", "Ich schaue mich erst mal um"],
  },
  {
    id: "ticketpreis",
    question: "WAS ZAHLT EIN KUNDE BEI DIR IM SCHNITT?",
    hint: "Wir fragen das, weil sich ein Funnel unter einem bestimmten Kundenwert nicht rechnet.",
    type: "radio" as const,
    options: ["Unter 1.000 €", "1.000 bis 3.000 €", "3.000 bis 10.000 €", "Über 10.000 €"],
  },
  {
    id: "umsatz",
    question: "WIE VIEL UMSATZ MACHT DEIN UNTERNEHMEN IM MONAT?",
    hint: "Ehrlich ist hier besser als hoch. Danach richtet sich der Plan.",
    type: "radio" as const,
    options: ["Unter 10.000 €", "10.000 bis 30.000 €", "30.000 bis 100.000 €", "100.000 bis 250.000 €", "Über 250.000 €"],
  },
  {
    id: "budget",
    question: "WIE VIEL KANNST DU IM MONAT IN WERBUNG STECKEN, OHNE DASS ES WEHTUT?",
    hint: "Die Rechnung machen wir im Gespräch mit deinen Zahlen.",
    type: "radio" as const,
    options: ["Unter 1.000 €", "1.000 bis 3.000 €", "3.000 bis 10.000 €", "Über 10.000 €"],
  },
  {
    id: "angebot",
    question: "WAS VERKAUFST DU? AN WEN?",
    type: "textarea" as const,
    placeholder: "Kurze Beschreibung deines Angebots und deiner Zielgruppe …",
  },
  {
    id: "kontakt",
    question: "WIE ERREICHEN WIR DICH?",
    hint: "Damit füllen wir den Kalender gleich für dich aus.",
    type: "contact" as const,
  },
];

export default function BewerbungPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ vorname: "", email: "", telefon: "", website: "" });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const q = questions[step];
  const progress = Math.round((step / questions.length) * 100);

  function selectOption(val: string) {
    setAnswers({ ...answers, [q.id]: val });
  }

  function next() {
    if (step < questions.length - 1) setStep(step + 1);
  }

  async function submit() {
    setLoading(true);
    // TODO: Daten an CRM/Webhook senden
    await new Promise((r) => setTimeout(r, 600));
    router.push("/danke");
  }

  const canProceed =
    q.type === "contact"
      ? contact.vorname && contact.email && agreed
      : q.type === "textarea"
      ? (answers[q.id] || "").trim().length > 3
      : !!answers[q.id];

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <nav className="flex justify-center py-4 border-b border-[#1a1a1a]">
        <span className="text-white font-black uppercase tracking-widest text-sm">
          MANUEL LUTTER
        </span>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-[#888] text-xs uppercase tracking-widest mb-2">
              Letzter Schritt vor dem Kalender
            </p>
            <h1 className="text-2xl font-black uppercase text-white mb-2">
              5 FRAGEN. WENN ES PASST,<br />SIEHST DU DIREKT MEINEN KALENDER.
            </h1>
            <p className="text-[#888] text-sm">
              Ich nehme nicht jeden. Wenn die Voraussetzungen stimmen, sprechen wir 30 Minuten auf Augenhöhe.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-[#555] mb-2">
              <span>Frage {step + 1} von {questions.length}</span>
              <span>{progress} %</span>
            </div>
            <div className="h-1 bg-[#222]">
              <div
                className="h-1 bg-[#c8f135] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="bg-[#111] border border-[#222] p-8">
            <h2 className="text-xl font-black uppercase text-white mb-2">{q.question}</h2>
            {("hint" in q && q.hint) && (
              <p className="text-[#888] text-sm mb-6">{q.hint}</p>
            )}
            {!("hint" in q) && <div className="mb-6" />}

            {q.type === "radio" && (
              <div className="space-y-3">
                {q.options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => selectOption(opt)}
                    className={`w-full text-left px-4 py-3 border text-sm transition-colors ${
                      answers[q.id] === opt
                        ? "border-[#c8f135] bg-[#c8f135]/10 text-white"
                        : "border-[#333] text-[#888] hover:border-[#555]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {q.type === "textarea" && (
              <textarea
                rows={4}
                placeholder={q.placeholder}
                value={answers[q.id] || ""}
                onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c8f135] resize-none text-sm"
              />
            )}

            {q.type === "contact" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#888] mb-1">Vorname *</label>
                  <input
                    type="text"
                    required
                    value={contact.vorname}
                    onChange={(e) => setContact({ ...contact, vorname: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c8f135] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#888] mb-1">Mailadresse *</label>
                  <input
                    type="email"
                    required
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c8f135] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#888] mb-1">Handynummer</label>
                  <input
                    type="tel"
                    value={contact.telefon}
                    onChange={(e) => setContact({ ...contact, telefon: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c8f135] text-sm"
                  />
                  <p className="text-[#555] text-xs mt-1">Für die Terminbestätigung per WhatsApp.</p>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#888] mb-1">Website (freiwillig)</label>
                  <input
                    type="url"
                    value={contact.website}
                    onChange={(e) => setContact({ ...contact, website: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c8f135] text-sm"
                    placeholder="https://..."
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 accent-[#c8f135]"
                  />
                  <span className="text-[#888] text-xs">
                    Ich bin einverstanden, dass Manuel Lutter meine Angaben zur Vorbereitung
                    des Gesprächs speichert und mich dafür per Telefon, WhatsApp oder Mail
                    kontaktiert.{" "}
                    <a href="/datenschutz" className="underline hover:text-white">Datenschutz</a>
                  </span>
                </label>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 mt-6">
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-[#333] text-[#888] text-sm hover:border-white hover:text-white transition-colors"
                >
                  Zurück
                </button>
              )}
              {step < questions.length - 1 ? (
                <button
                  onClick={next}
                  disabled={!canProceed}
                  className="inline-flex items-center gap-2 bg-[#c8f135] text-black font-bold uppercase tracking-wide px-6 py-3 hover:bg-[#a8cc1a] transition-colors flex-1 justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  WEITER
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={!canProceed || loading}
                  className="inline-flex items-center gap-2 bg-[#c8f135] text-black font-bold uppercase tracking-wide px-6 py-3 hover:bg-[#a8cc1a] transition-colors flex-1 justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {loading ? "Einen Moment …" : "WEITER ZU DEN TERMINEN →"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-[#1a1a1a] py-6 text-center">
        <div className="flex justify-center gap-8 text-[#555] text-xs">
          <a href="/impressum" className="hover:text-white">Impressum</a>
          <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
