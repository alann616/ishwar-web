import About from "./components/About";
import GallerySlider from "./components/GallerySlider";
import ScrollIndicator from "./components/ScrollIndicator";
import Expertise from "./components/Expertise";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-brand-black text-brand-white selection:bg-brand-olive selection:text-black">
      
      {/* SECCIÓN 1: PORTADA */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        
        {/* Textura de fondo (Sutil) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        
        {/* TÍTULO CORREGIDO:
            1. Quitamos 'mix-blend-overlay' (esto era lo que lo hacía oscuro).
            2. Forzamos 'text-brand-bone' (Color Hueso claro).
        */}
        <h1 className="z-10 font-serif text-6xl md:text-9xl text-center px-4 tracking-tight uppercase text-brand-bone drop-shadow-2xl">
          Ishwar <br/> Hernandez
        </h1>
        
        <p className="z-10 mt-6 font-sans text-brand-olive text-xs md:text-sm tracking-[0.5em] uppercase border-b border-brand-olive/20 pb-2">
          Nomad Studio
        </p>
        
        <ScrollIndicator />
      </section>

      {/* SECCIÓN 2: ABOUT */}
      <div id="about" className="w-full relative z-10">
        <About />
      </div>

      {/* SECCIÓN 3: GALERÍA */}
      <div id="gallery" className="w-full relative z-10">
        <GallerySlider />
      </div>

      {/* SECCIÓN 4: EXPERTISE (Reemplazo de Reviews) */}
      <div id="expertise" className="w-full relative z-10">
        <Expertise />
      </div>

    </main>
  );
}