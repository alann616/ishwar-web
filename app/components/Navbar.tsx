"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-brand-black/80 backdrop-blur-md border-b border-brand-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group"
        >
          <span className="font-serif text-xl md:text-2xl text-brand-bone tracking-tighter uppercase group-hover:text-brand-olive transition-colors drop-shadow-sm">
            Ishwar<span className="text-brand-olive">.</span>
          </span>
        </div>

        {/* MENÚ ACTUALIZADO: Artist | Portfolio | Styles */}
        <div className="hidden md:flex gap-10 items-center">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-[11px] font-sans font-medium text-brand-bone hover:text-brand-olive tracking-[0.2em] uppercase transition-colors"
          >
            The Artist
          </button>
          
          <button 
            onClick={() => scrollToSection('gallery')} 
            className="text-[11px] font-sans font-medium text-brand-bone hover:text-brand-olive tracking-[0.2em] uppercase transition-colors"
          >
            Portfolio
          </button>

          {/* NUEVO ENLACE A "EXPERTISE" */}
          <button 
            onClick={() => scrollToSection('expertise')} 
            className="text-[11px] font-sans font-medium text-brand-bone hover:text-brand-olive tracking-[0.2em] uppercase transition-colors"
          >
            Styles
          </button>
        </div>

        {/* BOTÓN BOOK NOW */}
        <button className={`
            px-8 py-3 border font-sans text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-500
            ${isScrolled 
                ? "bg-brand-bone text-brand-black border-brand-bone hover:bg-transparent hover:text-brand-bone" 
                : "bg-transparent text-brand-bone border-brand-bone/50 hover:bg-brand-bone hover:text-brand-black hover:border-brand-bone"
            }
        `}>
          Book Now
        </button>

      </div>
    </nav>
  );
}