import React from "react";

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-24 gap-12 md:gap-24 bg-brand-black">
      
      {/* 1. LADO IZQUIERDO: El Marco de la Foto (Placeholder) */}
      <div className="flex-1 w-full max-w-md aspect-[3/4] border border-brand-olive bg-brand-gray/10 flex items-center justify-center relative">
        {/* Este texto solo es para que sepas qué va ahí, luego lo quitamos */}
        <span className="font-sans text-brand-olive text-xs tracking-widest uppercase">
          [ Artist Portrait ]
        </span>
        
        {/* Decoración: Un segundo borde desplazado para efecto elegante */}
        <div className="absolute top-4 left-4 w-full h-full border border-brand-olive/30 -z-10"></div>
      </div>

      {/* 2. LADO DERECHO: El Manifiesto (Texto) */}
      <div className="flex-1 max-w-lg flex flex-col justify-center text-center md:text-left">
        
        <h2 className="font-serif text-4xl md:text-5xl text-brand-white mb-8 tracking-tight uppercase">
          The Alchemist <br /> of Realism
        </h2>

        <p className="font-sans text-brand-bone text-sm md:text-base leading-relaxed tracking-wide mb-6 text-justify opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <p className="font-sans text-brand-bone text-sm md:text-base leading-relaxed tracking-wide text-justify opacity-90">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* Firma o detalle final */}
        <div className="mt-8">
            <span className="font-serif italic text-brand-olive text-xl">
                - Ishwar H.
            </span>
        </div>
      </div>

    </section>
  );
}