"use client";

import React from "react";

export default function ScrollIndicator() {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // <--- EL SECRETO: Evita que se ponga #about en la URL
    
    // Busca la sección manualmente y desliza
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a 
      href="#about"
      onClick={handleScroll}
      className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce cursor-pointer z-10 opacity-80 hover:opacity-100 transition-opacity"
      aria-label="Scroll to About section"
    >
      <span className="font-sans text-[10px] text-brand-bone tracking-[0.2em] uppercase">
        Explore
      </span>
      <svg 
        className="w-4 h-4 text-brand-bone" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M19 9l-7 7-7-7"></path>
      </svg>
    </a>
  );
}