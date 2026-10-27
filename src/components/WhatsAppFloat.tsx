import React from 'react';
import { CLINIC_INFO } from '../data/clinicalData';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá, Andréia! Gostaria de agendar uma consulta psicológica.')}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-4 py-3 bg-[#1a9b4b] hover:bg-[#14793b] text-white font-semibold text-sm rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a9b4b]"
      aria-label="Falar com a psicóloga Andréia pelo WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
      </div>
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
};
