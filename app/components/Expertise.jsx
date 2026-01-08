import React from "react";

export default function Expertise() {
  const styles = [
    {
      id: "01",
      title: "Black & Grey Realism",
      description: "Mastery of light and shadow creates depth that brings tattoos to life without the need for color.",
    },
    {
      id: "02",
      title: "Portraiture",
      description: "Capturing the soul and exact likeness of the subject with photographic precision and emotional weight.",
    },
    {
      id: "03",
      title: "Surrealism",
      description: "Dreamlike imagery blending reality with fantasy. Complex compositions for the imaginative mind.",
    }
  ];

  return (
    <section className="w-full bg-brand-black py-24 md:py-32 px-6 md:px-24 border-t border-brand-white/5">
      
      {/* Encabezado inspirado en Ganga */}
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
           <span className="font-sans text-brand-olive text-[10px] tracking-[0.3em] uppercase block mb-4">
              Technical Mastery
           </span>
           <h2 className="font-serif text-5xl md:text-7xl text-brand-bone uppercase leading-none">
              Signature <br/> Styles
           </h2>
        </div>
        <p className="font-sans text-brand-bone/60 text-xs md:text-sm max-w-sm tracking-wide leading-relaxed text-justify md:text-left">
           Specializing in large-scale projects that require patience, precision, and an artistic eye for composition on the human canvas.
        </p>
      </div>

      {/* Grid de Estilos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-brand-white/10">
        {styles.map((style) => (
          <div key={style.id} className="group relative border-b md:border-b-0 md:border-r border-brand-white/10 p-8 md:p-12 min-h-[300px] flex flex-col justify-between hover:bg-brand-white/5 transition-colors duration-500 last:border-r-0 last:border-b-0">
            
            {/* Número decorativo */}
            <span className="font-serif text-6xl text-brand-bone/5 group-hover:text-brand-olive/20 transition-colors duration-500">
              {style.id}
            </span>

            {/* Contenido */}
            <div className="relative z-10">
               <h3 className="font-serif text-2xl text-brand-bone mb-4 group-hover:translate-x-2 transition-transform duration-500">
                 {style.title}
               </h3>
               <p className="font-sans text-xs text-brand-bone/60 leading-relaxed group-hover:text-brand-bone/80 transition-colors">
                 {style.description}
               </p>
            </div>

            {/* Icono flecha sutil */}
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-6 h-6 text-brand-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}