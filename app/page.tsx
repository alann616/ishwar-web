import About from "./components/About";
import ScrollIndicator from "./components/ScrollIndicator"; 

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      
      {/* SECCIÓN 1: PORTADA */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full">
        
        <h1 className="font-serif text-5xl md:text-8xl text-center px-4 tracking-tight uppercase text-brand-white">
          ISHWAR HERNANDEZ
        </h1>
        <p className="mt-6 font-sans text-brand-bone text-xs md:text-sm tracking-ultra uppercase">
          Nomad Studio
        </p>

        {/* El botón inteligente */}
        <ScrollIndicator />

      </section>

      {/* SECCIÓN 2: ABOUT */}
      <div id="about" className="w-full">
        <About />
      </div>

    </main>
  );
}