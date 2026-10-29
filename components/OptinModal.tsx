"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OptinModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [form, setForm] = useState({ vorname: "", email: "", telefon: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: CRM/Webhook hier eintragen (z.B. KlickTipp, ActiveCampaign, Make)
    await new Promise((r) => setTimeout(r, 500));
    router.push("/video");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-[#111] border border-[#222] w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#555] hover:text-white text-xl"
        >
          ×
        </button>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#555] mb-2">
            <span>Schritt 2 von 2</span>
            <span>Fast geschafft!</span>
          </div>
          <div className="h-1 bg-[#222]">
            <div className="h-1 bg-[#c8f135] w-3/4" />
          </div>
        </div>

        <h2 className="text-2xl font-black uppercase text-white mb-2">
          Noch 3 Felder.<br />Dann startet dein [FREEBIE/VIDEO].
        </h2>
        <p className="text-[#888] text-sm mb-6">
          [KURZE ERKLÄRUNG WAS SIE ALS NÄCHSTES ERWARTET]
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wide text-[#888] mb-1">
              Vorname
            </label>
            <input
              type="text"
              required
              placeholder="Dein Vorname"
              value={form.vorname}
              onChange={(e) => setForm({ ...form, vorname: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c8f135]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide text-[#888] mb-1">
              Deine Mailadresse
            </label>
            <input
              type="email"
              required
              placeholder="name@email.de"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c8f135]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide text-[#888] mb-1">
              Handynummer
            </label>
            <input
              type="tel"
              placeholder="+49 …"
              value={form.telefon}
              onChange={(e) => setForm({ ...form, telefon: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#c8f135]"
            />
            <p className="text-[#555] text-xs mt-1">Für die Bestätigung per WhatsApp</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-[#c8f135] text-black font-bold uppercase tracking-wide px-8 py-4 text-lg hover:bg-[#a8cc1a] transition-colors w-full justify-center disabled:opacity-50"
          >
            {loading ? "Wird geladen …" : "[CTA TEXT] →"}
          </button>
          <p className="text-[#555] text-xs text-center">
            Mit der Anmeldung bekommst du gelegentlich Mails von Manuel Lutter.
            Abmelden jederzeit möglich.{" "}
            <a href="/datenschutz" className="underline">Datenschutz</a>
          </p>
        </form>
      </div>
    </div>
  );
}
