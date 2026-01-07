export default function Home() {
  return (
    // LIMPIEZA: Quitamos 'bg-brand-black' y 'text-brand-white'.
    // Ahora hereda lo que diga el layout.
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen">
      
      {/* Título */}
      <h1 className="font-serif text-6xl md:text-8xl text-center px-4 tracking-tighter">
        ISHWAR HERNANDEZ
      </h1>
      
      {/* Subtítulo: Este SÍ lleva color específico porque es diferente al resto */}
      <p className="mt-6 font-sans text-brand-bone text-sm md:text-base tracking-ultra uppercase">
        Nomad Studio
      </p>

    </main>
  );
}