import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manuel Lutter – Skalierung für Coaches & Personenmarken",
  description: "Ich zeige dir, woran das liegt, was dagegen hilft – und ob wir zusammenpassen. 30 Minuten. Kostenlos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
