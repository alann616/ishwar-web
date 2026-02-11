import React from "react";

export default function VIPServices() {
  const clients = [
    "Professional Athletes",
    "Chart-Topping Musicians",
    "Private Collectors",
    "Film Industry",
    "High-Profile Executives",
  ];

  return (
    <section className="w-full bg-brand-black border-t border-brand-white/5 py-24 px-6 md:px-24 overflow-hidden">
      {/* HEADER */}
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="font-sans text-brand-olive text-[10px] tracking-[0.3em] uppercase block mb-4">
            Beyond the Studio
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-bone uppercase leading-none">
            Exclusive <br /> Services
          </h2>
        </div>
        <p className="font-sans text-brand-bone/60 text-xs md:text-sm max-w-sm tracking-wide leading-relaxed text-justify md:text-left">
          For clients who require absolute discretion and flexibility. We bring
          the art to your environment.
        </p>
      </div>

      {/* GRID DE SERVICIOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* CARD 1: GLOBAL TRAVEL (Texto Corregido) */}
        <div className="border border-brand-white/10 bg-brand-gray/5 p-8 md:p-12 relative group hover:border-brand-olive/30 transition-colors duration-500">
          <div className="absolute top-8 right-8 text-brand-bone/20 group-hover:text-brand-olive transition-colors">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="1"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h3 className="font-serif text-2xl text-brand-bone mb-4">
            Global Commission
          </h3>

          {/* AQUÍ ESTÁ EL CAMBIO DE TEXTO: Claro y Directo */}
          <p className="font-sans text-brand-bone/60 text-xs leading-relaxed mb-8 max-w-xs">
            Available for travel worldwide. Whether it's your residence in Los
            Angeles or a yacht in the Mediterranean.
            <span className="block mt-2 text-brand-bone/80">
              We coordinate the logistics; travel and accommodation expenses are
              covered by the collector.
            </span>
          </p>

          <div className="inline-flex items-center gap-2 border border-brand-white/20 px-4 py-2 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-sans text-[9px] uppercase tracking-widest text-brand-bone">
              Passport Ready
            </span>
          </div>
        </div>

        {/* CARD 2: NDA / PRIVACIDAD */}
        <div className="border border-brand-white/10 bg-brand-gray/5 p-8 md:p-12 relative group hover:border-brand-olive/30 transition-colors duration-500">
          <div className="absolute top-8 right-8 text-brand-bone/20 group-hover:text-brand-olive transition-colors">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="1"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          <h3 className="font-serif text-2xl text-brand-bone mb-4">
            Privacy & NDA
          </h3>
          <p className="font-sans text-brand-bone/60 text-xs leading-relaxed mb-8 max-w-xs">
            Your privacy is paramount. We are accustomed to working under strict
            Non-Disclosure Agreements. No photos will be taken or published
            without explicit written consent.
          </p>

          <div className="inline-flex items-center gap-2 border border-brand-white/20 px-4 py-2 rounded-full">
            <svg
              className="w-3 h-3 text-brand-olive"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <span className="font-sans text-[9px] uppercase tracking-widest text-brand-bone">
              NDA Available
            </span>
          </div>
        </div>
      </div>

      {/* MARQUEE DE CLIENTES (VERSIÓN PRO: CSS MASK) */}

      <div className="w-full mt-24 bg-brand-black">
        {/* 1. SEPARADOR ESTRUCTURAL */}
        <div className="flex items-center justify-center w-full">
          <div className="h-px bg-brand-white/10 w-full"></div>
          <span className="shrink-0 px-6 font-sans text-[9px] text-brand-olive tracking-widest uppercase">
            Trusted Industry Leaders
          </span>
          <div className="h-px bg-brand-white/10 w-full"></div>
        </div>

        {/* 2. CONTENIDO CON MÁSCARA (La Magia) */}
        {/* '[mask-image:...]' le dice al navegador: Se transparente al inicio, sólido en medio, transparente al final. */}
        <div className="w-full border-b border-brand-white/10 overflow-hidden py-10 relative flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* NOTA: Ya no hay divs de gradiente aquí. La máscara lo hace todo. */}

          <div className="flex w-full">
            {/* LISTA 1 */}
            <div className="flex shrink-0 items-center animate-infinite-scroll min-w-full justify-around pr-0 will-change-transform">
              {clients.map((client, i) => (
                <div
                  key={`list1-${i}`}
                  className="flex items-center group cursor-default"
                >
                  <span className="font-serif text-xl md:text-2xl text-brand-bone/40 group-hover:text-brand-bone transition-colors uppercase whitespace-nowrap">
                    {client}
                  </span>
                  <span className="text-brand-olive/40 mx-8 md:mx-12">•</span>
                </div>
              ))}
            </div>

            {/* LISTA 2 */}
            <div
              className="flex shrink-0 items-center animate-infinite-scroll min-w-full justify-around pr-0 will-change-transform"
              aria-hidden="true"
            >
              {clients.map((client, i) => (
                <div
                  key={`list2-${i}`}
                  className="flex items-center group cursor-default"
                >
                  <span className="font-serif text-xl md:text-2xl text-brand-bone/40 group-hover:text-brand-bone transition-colors uppercase whitespace-nowrap">
                    {client}
                  </span>
                  <span className="text-brand-olive/40 mx-8 md:mx-12">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
