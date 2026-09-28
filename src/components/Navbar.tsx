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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo.svg"
              alt="Espacio Coral Odontología"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#especialidades"
              className="text-sm font-semibold text-slate-600 hover:text-[#0C7C7B] transition-colors"
            >
              Especialidades
            </a>
            <a
              href="#doctor"
              className="text-sm font-semibold text-slate-600 hover:text-[#0C7C7B] transition-colors"
            >
              Dr. Dorrego
            </a>
            <a
              href="#obras-sociales"
              className="text-sm font-semibold text-slate-600 hover:text-[#0C7C7B] transition-colors"
            >
              Obras Sociales
            </a>
            <a
              href="#opiniones"
              className="text-sm font-semibold text-slate-600 hover:text-[#0C7C7B] transition-colors"
            >
              Opiniones (5.0★)
            </a>
            <a
              href="#ubicacion"
              className="text-sm font-semibold text-slate-600 hover:text-[#0C7C7B] transition-colors"
            >
              Torre Coral State
            </a>
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="text-right hidden xl:block">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Atención Telefónica
              </span>
              <span className="text-xs font-bold text-slate-800">
                {CLINIC_INFO.phoneDisplay}
              </span>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center gap-2 bg-[#0C7C7B] hover:bg-[#074E4E] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#0C7C7B]/25 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Agendar Turno</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#0C7C7B] rounded-full"
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
          <div className="lg:hidden pt-4 pb-6 border-t border-slate-100 mt-3 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <a
              href="#especialidades"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Especialidades & Tratamientos
            </a>
            <a
              href="#doctor"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Dr. Juan Pablo Dorrego (15+ años)
            </a>
            <a
              href="#obras-sociales"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Obras Sociales & Coberturas
            </a>
            <a
              href="#opiniones"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Reseñas de Pacientes (5.0★)
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Cómo llegar a Torre Coral State
            </a>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0C7C7B] text-white font-bold py-3 rounded-xl shadow-md text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Agendar por WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
