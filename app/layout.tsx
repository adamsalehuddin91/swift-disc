import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "DISC for Kids - Kenal Karakter Kanak-Kanan",
  description: "Web app interaktif 8-bit untuk memahami kecenderungan karakter kanak-kanak secara positif dan menyeronokkan. Untuk ibu bapa, guru, dan kanak-kanak umur 5-12 tahun.",
  keywords: "DISC, kids, personality, karakter anak, pendidikan, parenting, Malaysia",
  authors: [{ name: "SwiftApps" }],
  openGraph: {
    title: "DISC for Kids - Kenal Karakter Kanak-Kanak",
    description: "Aplikasi 8-bit interaktif untuk memahami karakter anak-anak",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className="antialiased flex flex-col min-h-screen">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
