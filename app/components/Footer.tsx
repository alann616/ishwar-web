"use client";

import React from "react";
import { useBooking } from "./BookingContext"; // <--- IMPORTAR HOOK

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openBooking } = useBooking(); // <--- USAR HOOK

  return (
    <footer className="w-full bg-brand-black text-brand-bone border-t border-brand-white/10 pt-24 overflow-hidden relative">
      
      <div className="px-6 md:px-12 mb-24">
        <div className="w-full border-b border-brand-white/20 pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
                <span className="block font-sans text-brand-olive text-xs tracking-[0.3em] uppercase mb-2">
                    Accepting New Projects
                </span>
                <h2 className="font-serif text-5xl md:text-7xl uppercase leading-none tracking-tight">
                    Ready to <br/> <span className="text-brand-olive italic">Transform?</span>
                </h2>
            </div>

            {/* BOTÓN CON LA ACCIÓN DE ABRIR */}
            <button 
                onClick={openBooking} 
                className="w-full md:w-auto bg-brand-bone text-brand-black px-12 py-6 font-sans text-sm font-bold tracking-[0.25em] uppercase hover:bg-brand-olive hover:text-white transition-all duration-500"
            >
                Book Session ↗
            </button>
        </div>
      </div>

      {/* ... (El resto del footer igual que antes con tu firma) ... */}
      <div className="w-full border-b border-brand-white/10">
        <h1 className="font-serif text-[13vw] leading-[0.8] text-center uppercase tracking-tighter text-brand-bone opacity-90 select-none mix-blend-screen">
          Ishwar<span className="text-brand-olive">.</span>Hdz
        </h1>
      </div>

      <div className="px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-4">
             <span className="font-serif text-4xl md:text-6xl text-brand-olive opacity-50 italic">
                {currentYear}
             </span>
             <div className="flex flex-col">
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-bone/60">
                    All Rights Reserved
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-bone/60">
                    Mexico City
                </span>
             </div>
        </div>

        <div className="flex flex-col md:items-end gap-2">
            <div className="flex gap-6">
                <a 
                    href="https://www.instagram.com/ishwarhernandez?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs uppercase tracking-widest hover:text-brand-olive transition-colors">Instagram</a>
                <a 
                    href="https://wa.me/+527731633225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs uppercase tracking-widest hover:text-brand-olive transition-colors">WhatsApp</a>
            </div>
            
            <a 
                href="https://www.linkedin.com/in/alan-de-jesus-corona-velazquez-73b975320" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 mt-2"
            >
                <span className="font-sans text-[10px] text-brand-bone/40 uppercase tracking-widest group-hover:text-brand-bone transition-colors">
                    Digital Architecture by
                </span>
                <span className="font-sans text-[10px] text-brand-olive uppercase tracking-widest border-b border-brand-olive group-hover:text-brand-bone group-hover:border-brand-bone transition-colors">
                    Alan Corona
                </span>
            </a>
        </div>
      </div>
    </footer>
  );
}