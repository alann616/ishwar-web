import React from "react";

export default function GallerySlider() {
  const works = [
    { id: "01", title: "Zeus", subtitle: "Full Sleeve Realism", type: "Mythology" },
    { id: "02", title: "Katrina", subtitle: "Portrait", type: "Dark Art" },
    { id: "03", title: "Lion", subtitle: "Back Piece", type: "Nature" },
    { id: "04", title: "Clock", subtitle: "Forearm", type: "Surrealism" },
  ];

  return (
    <section className="w-full bg-brand-black py-24 border-t border-brand-white/5 overflow-hidden">
      
      {/* HEADER */}
      <div className="px-6 md:px-24 mb-12 md:mb-24">
        <h2 className="font-serif text-[12vw] md:text-8xl lg:text-[10rem] leading-none text-brand-bone opacity-90 uppercase mix-blend-difference md:text-left">
          Selected <br />
          <span className="ml-12 md:ml-24 italic text-brand-olive">Works</span>
        </h2>
      </div>

      {/* --- CONTENEDOR HÍBRIDO --- */}
      <div className="
        flex w-full overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 no-scrollbar
        md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-24 md:overflow-visible md:snap-none md:px-24 md:pb-0
      ">
        
        {works.map((work, index) => (
          // CARD
          <div 
            key={work.id} 
            className={`relative snap-center shrink-0 group overflow-hidden border border-brand-bone/10 bg-brand-gray/5
              w-[85vw] aspect-3/4
              md:w-full md:aspect-4/5
              ${index % 2 !== 0 ? 'md:mt-32' : ''} 
            `}
          >
            
            {/* IMAGEN DE FONDO */}
            <div className="absolute inset-0 bg-brand-gray/20 group-hover:bg-brand-gray/30 md:grayscale group-hover:md:grayscale-0 transition-all duration-500">
               <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            </div>

            {/* NÚMERO DE FONDO */}
            <div className="absolute -top-10 -right-4 font-serif text-[12rem] text-brand-olive/10 italic leading-none select-none">
              {work.id}
            </div>

            {/* --- CAPAS DE TEXTO (CORREGIDO) --- */}
            
            {/* 1. El "Piso" Negro (Gradiente para contraste) */}
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-t from-black/95 via-black/50 to-transparent pointer-events-none z-10"></div>

            {/* 2. El Texto (Ahora sí en color BONE para que brille) */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
              <div className="flex items-center gap-3 mb-2 drop-shadow-md">
                <div className="w-8 h-px bg-brand-bone"></div>
                <span className="text-[10px] tracking-ultra uppercase text-brand-bone/80">
                  {work.type}
                </span>
              </div>
              
              {/* AQUÍ ESTABA EL ERROR: Cambié 'text-brand-white' por 'text-brand-bone' */}
              <h3 className="font-serif text-4xl text-brand-bone italic mb-1 drop-shadow-md">
                {work.title}
              </h3>
              
              <p className="font-sans text-xs text-brand-olive uppercase tracking-widest drop-shadow-sm">
                {work.subtitle}
              </p>
            </div>

            {/* Botón Ver */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-brand-bone/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-black/50 backdrop-blur-sm z-30">
               <svg className="w-4 h-4 text-brand-bone" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </div>

          </div>
        ))}

        {/* CARD FINAL (Móvil) */}
        <div className="relative snap-center shrink-0 w-[85vw] aspect-3/4 flex items-center justify-center border border-brand-olive/30 bg-brand-olive/5 md:hidden">
            <button className="text-center group">
                <span className="block font-serif text-3xl text-brand-bone italic mb-2 group-hover:scale-110 transition-transform">
                    View Archive
                </span>
                <span className="text-[10px] tracking-ultra uppercase text-brand-olive border-b border-brand-olive pb-1">
                    See All
                </span>
            </button>
        </div>

      </div>

      {/* BOTÓN PC */}
      <div className="hidden md:flex justify-center mt-32">
         <button className="px-12 py-4 border border-brand-bone/30 text-brand-bone font-sans text-xs tracking-ultra uppercase hover:bg-brand-bone hover:text-brand-black transition-all duration-500">
            View Full Archive
        </button>
      </div>
    </section>
  );
}