import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { BookingProvider } from "./components/BookingContext";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishwar Hernandez | Nomad Studio",
  description: "Exclusive Tattoo Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bodoni.variable} ${jost.variable}`}>
      {/* ARQUITECTURA LIMPIA:
        Definimos el fondo y el color de texto BASE para TODA la app.
      */}
      <body className="antialiased bg-brand-black text-brand-white font-sans min-h-screen flex flex-col">
        <BookingProvider>
          <Navbar />
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
