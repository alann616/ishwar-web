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
    <section className="w-full bg-brand-black py-24 px-6 md:px-24">
      
      {/* HEADER */}
      {/* CAMBIO: Reduje 'mb-24' a 'mb-12' para pegar el título a la tabla y que no se vea "despegado" */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
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

      {/* GRID DE ESTILOS (TABLA SÓLIDA) */}
      {/* CAMBIO CLAVE: 'border-y' (arriba Y ABAJO). Ahora la línea inferior EXISTE. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-brand-white/10">
        
        {styles.map((style) => (
          <div key={style.id} className="group relative p-8 md:p-12 min-h-87.5 flex flex-col justify-end hover:bg-brand-white/5 transition-colors duration-500 border-b md:border-b-0 md:border-r border-brand-white/10 last:border-b-0 last:md:border-r-0">
            
            {/* NOTA TÉCNICA SOBRE BORDES INTERNOS: 
                - Móvil: border-b en cada item (menos el último).
                - Desktop: border-r en cada item (menos el último).
                Esto crea la cuadrícula perfecta sin líneas dobles.
            */}

            {/* 1. NÚMERO */}
            <div className="mb-4">
                <span className="font-serif text-6xl text-brand-bone/10 group-hover:text-brand-olive/20 transition-colors duration-500 block leading-none">
                {style.id}
                </span>
            </div>

            {/* 2. TEXTO */}
            <div className="relative z-10">
               <h3 className="font-serif text-3xl text-brand-bone mb-4 group-hover:translate-x-2 transition-transform duration-500">
                 {style.title}
               </h3>
               <p className="font-sans text-xs text-brand-bone/60 leading-relaxed group-hover:text-brand-bone/80 transition-colors max-w-xs">
                 {style.description}
               </p>
            </div>

            {/* FLECHA */}
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