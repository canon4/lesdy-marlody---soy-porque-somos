import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/573107799507"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-105 group border-2 border-white/20 animate-fade-in-up cursor-pointer decoration-none"
    >
      <MessageCircle size={28} fill="white" className="text-[#25D366]" />
      <span className="font-bold text-sm md:text-base hidden sm:inline-block">
        Habla con el equipo de Lesdy
      </span>
      {/* Mobile abbreviated text if needed, or keep full */}
      <span className="font-bold text-sm sm:hidden">
        Equipo Lesdy
      </span>
    </a>
  );
};

export default FloatingWhatsApp;