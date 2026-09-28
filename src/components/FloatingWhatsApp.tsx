import { getWhatsAppUrl } from '../data/clinicData';

import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  return (
    <aside aria-label="Contacto directo WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl shadow-emerald-700/30 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Abrir WhatsApp para turnos"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Turnos WhatsApp
        </span>
      </a>
    </aside>
  );
};
