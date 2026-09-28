import { CLINIC_INFO, getWhatsAppUrl, SPECIALTIES } from '../data/clinicData';
import { MessageCircle, Star } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#062E2E] text-slate-300 pt-16 pb-12 border-t border-teal-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-teal-900/50">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.svg"
                alt="Espacio Coral Odontología"
                className="h-10 w-auto object-contain brightness-125"
              />
            </div>
            
            <p className="text-xs sm:text-sm text-teal-100/70 leading-relaxed pr-4">
              Consultorio odontológico de alta gama en Torre Coral State, Córdoba. Más de 15 años de trayectoria a cargo del <strong>Dr. Juan Pablo Dorrego</strong>, ofreciendo tratamientos integrales de vanguardia y calidez humana.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0C7C7B] hover:bg-[#0E8A85] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </a>

              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-teal-900/60 hover:bg-teal-800 text-teal-200 transition-colors"
                title="Página de Facebook"
                aria-label="Facebook Dr. Dorrego"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>


          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-teal-100/70">
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Especialidades & Tratamientos
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-white transition-colors">
                  Dr. Juan Pablo Dorrego
                </a>
              </li>
              <li>
                <a href="#obras-sociales" className="hover:text-white transition-colors">
                  Obras Sociales & Prepagas
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-white transition-colors">
                  Opiniones de Pacientes (5.0★)
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">
                  Torre Coral State (Piso 11 H)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Tratamientos Principales
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-teal-100/70">
              {SPECIALTIES.map((spec) => (
                <a
                  key={spec.id}
                  href={getWhatsAppUrl(spec.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-200 transition-colors truncate"
                  title={spec.title}
                >
                  &bull; {spec.title}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-teal-900/60 text-xs text-teal-200/90 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Calificación Google: <strong>5.0 / 5.0</strong> ({CLINIC_INFO.reviewCount} reseñas)</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-teal-200/60 gap-4">
          <p>&copy; {new Date().getFullYear()} Espacio Coral Odontología. Todos los derechos reservados.</p>
          <p>Coral State Loft In Tower · Blvr. Mitre 517 11 H, Córdoba</p>
        </div>

      </div>
    </footer>
  );
};
