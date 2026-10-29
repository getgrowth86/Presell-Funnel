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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
