import { useState, useEffect } from 'react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E7EFE1] py-2.5'
          : 'bg-[#F9FAF6]/95 backdrop-blur-sm border-b border-[#E7EFE1] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center shrink-0 group">
            <img
              src="/images/logo.svg"
              alt="Odontología Eco San Telmo"
              className="h-9 sm:h-11 w-auto max-w-[210px] sm:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
            <a
              href="#especialidades"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#6DA02E] transition-colors whitespace-nowrap"
            >
              Especialidades
            </a>
            <a
              href="#filosofia-eco"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#6DA02E] transition-colors whitespace-nowrap"
            >
              Filosofía Eco & Resultados
            </a>
            <a
              href="#obras-sociales"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#6DA02E] transition-colors whitespace-nowrap"
            >
              Coberturas & Prepagas
            </a>
            <a
              href="#opiniones"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#6DA02E] transition-colors whitespace-nowrap"
            >
              Opiniones (5.0★)
            </a>
            <a
              href="#ubicacion"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#6DA02E] transition-colors whitespace-nowrap"
            >
              San Telmo (Estados Unidos 693)
            </a>
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <div className="text-right hidden xl:block">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Turnos WhatsApp
              </span>
              <span className="text-xs font-bold text-slate-800">
                {CLINIC_INFO.phoneDisplay}
              </span>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center gap-2 bg-[#6DA02E] hover:bg-[#578323] text-white font-semibold text-xs xl:text-sm px-4 xl:px-5 py-2.5 rounded-full shadow-md shadow-[#6DA02E]/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#E6FFC2]" />
              <span>Agendar Turno</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#6DA02E] rounded-full"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="lg:hidden pt-4 pb-6 border-t border-[#E7EFE1] mt-3 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <a
              href="#especialidades"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#F2F8EB] rounded-lg"
            >
              Especialidades & Tratamientos
            </a>
            <a
              href="#filosofia-eco"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#F2F8EB] rounded-lg"
            >
              Filosofía Eco & Resultados
            </a>
            <a
              href="#obras-sociales"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#F2F8EB] rounded-lg"
            >
              Coberturas & Prepagas
            </a>
            <a
              href="#opiniones"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#F2F8EB] rounded-lg"
            >
              Reseñas de Pacientes (5.0★)
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#F2F8EB] rounded-lg"
            >
              Estados Unidos 693, San Telmo
            </a>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#6DA02E] text-white font-bold py-3 rounded-xl shadow-md text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#E6FFC2]" />
                <span>Agendar por WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
