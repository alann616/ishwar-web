import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
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
         Aquí definimos el fondo y el color de texto BASE para TODA la app.
         Si mañana quieres cambiar el fondo a rojo, SOLO lo cambias aquí.
      */}
      <body className="antialiased bg-brand-black text-brand-white font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}