import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Salonique - Der smarte Voice-Agent für Beauty-Salons",
  description: "Verpassen Sie nie wieder einen Anruf oder eine Terminänderung – Salonique beantwortet Anrufe, koordiniert Termine und synchronisiert Ihren Kalender.",
  keywords: ["Beauty-Salon", "Voice-Agent", "KI", "Terminverwaltung", "Treatwell", "Friseur", "Nagelstudio"],
  openGraph: {
    title: "Salonique - Der smarte Voice-Agent für Beauty-Salons",
    description: "Verpassen Sie nie wieder einen Anruf oder eine Terminänderung",
    url: "https://salonique.de",
    siteName: "Salonique",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
