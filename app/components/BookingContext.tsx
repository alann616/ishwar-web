"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Definimos qué funciones tendrá nuestro contexto
interface BookingContextType {
  isModalOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

// 2. El Hook para usarlo en cualquier botón
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking debe usarse dentro de un BookingProvider");
  }
  return context;
};

// 3. El Proveedor + El Modal Visual
export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBooking = () => setIsModalOpen(true);
  const closeBooking = () => setIsModalOpen(false);

  return (
    <BookingContext.Provider value={{ isModalOpen, openBooking, closeBooking }}>
      {children}

      {/* --- AQUÍ ESTÁ EL MODAL VISUAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
          
          {/* Overlay Oscuro con Blur */}
          <div 
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-md transition-opacity"
            onClick={closeBooking}
          ></div>

          {/* Tarjeta del Modal */}
          <div className="relative w-full max-w-lg bg-[#1a1a14] border border-brand-white/10 shadow-2xl p-8 md:p-12 animate-in fade-in zoom-in duration-300">
            
            {/* Botón Cerrar (X) */}
            <button 
                onClick={closeBooking}
                className="absolute top-6 right-6 text-brand-bone/50 hover:text-brand-olive transition-colors"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Header */}
            <div className="mb-8 text-center md:text-left">
                <span className="font-sans text-brand-olive text-[10px] tracking-[0.2em] uppercase">
                    Start your Project
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-bone mt-2 uppercase">
                    Request <span className="italic text-brand-olive">Session</span>
                </h2>
            </div>

            {/* Formulario Estilo Lujo (Inputs de solo borde) */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-2 gap-6">
                    <div className="group">
                        <label className="block font-sans text-[10px] text-brand-bone/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-olive transition-colors">Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-brand-white/20 py-2 text-brand-bone font-serif focus:outline-none focus:border-brand-olive transition-colors" placeholder="Your Name" />
                    </div>
                    <div className="group">
                        <label className="block font-sans text-[10px] text-brand-bone/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-olive transition-colors">City</label>
                        <input type="text" className="w-full bg-transparent border-b border-brand-white/20 py-2 text-brand-bone font-serif focus:outline-none focus:border-brand-olive transition-colors" placeholder="Where are you from?" />
                    </div>
                </div>

                <div className="group">
                    <label className="block font-sans text-[10px] text-brand-bone/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-olive transition-colors">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-brand-white/20 py-2 text-brand-bone font-serif focus:outline-none focus:border-brand-olive transition-colors" placeholder="your@email.com" />
                </div>

                <div className="group">
                    <label className="block font-sans text-[10px] text-brand-bone/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-olive transition-colors">Concept Idea</label>
                    <textarea rows={3} className="w-full bg-transparent border-b border-brand-white/20 py-2 text-brand-bone font-serif focus:outline-none focus:border-brand-olive transition-colors resize-none" placeholder="Describe your tattoo idea, placement and size..."></textarea>
                </div>

                {/* Botón Submit */}
                <button className="w-full bg-brand-bone text-brand-black font-sans text-xs font-bold tracking-[0.2em] uppercase py-4 mt-4 hover:bg-brand-olive hover:text-white transition-all duration-300">
                    Send Request ↗
                </button>
                
                <p className="text-center font-sans text-[9px] text-brand-bone/30 uppercase tracking-widest mt-4">
                    Appointments are limited. Please allow 24-48h for response.
                </p>

            </form>

          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
};