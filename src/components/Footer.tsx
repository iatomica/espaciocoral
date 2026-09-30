import { CLINIC_INFO, getWhatsAppUrl, SPECIALTIES } from '../data/clinicData';
import { MessageCircle, Star, MapPin, Globe, Leaf } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#172911] text-[#D7E8C7] pt-16 pb-12 border-t border-[#263F1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C4822]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.svg"
                alt="Odontología Eco San Telmo"
                className="h-10 w-auto object-contain brightness-125"
              />
            </div>
            
            <p className="text-xs sm:text-sm text-[#C8DCB6] leading-relaxed pr-4">
              {CLINIC_INFO.slogan}. Consultorio odontológico integral de alta gama en San Telmo, enfocado en biomateriales, sustentabilidad, cero dolor y calidez humana.
            </p>

            <div className="space-y-1.5 text-xs text-[#BED4AA]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8EC44A]" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#A57DC4]" />
                <a href={CLINIC_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">
                  {CLINIC_INFO.website}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6DA02E] hover:bg-[#578323] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#E6FFC2]" />
                <span>WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>


          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#BED4AA]">
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Especialidades & Tratamientos
                </a>
              </li>
              <li>
                <a href="#filosofia-eco" className="hover:text-white transition-colors">
                  Filosofía Eco & Resultados
                </a>
              </li>
              <li>
                <a href="#obras-sociales" className="hover:text-white transition-colors">
                  Coberturas & Prepagas
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-white transition-colors">
                  Opiniones de Pacientes (5.0★)
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">
                  San Telmo (Estados Unidos 693)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Tratamientos Principales
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#BED4AA]">
              {SPECIALTIES.map((spec) => (
                <a
                  key={spec.id}
                  href={getWhatsAppUrl(spec.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors truncate"
                  title={spec.title}
                >
                  &bull; {spec.title}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#2C4822] text-xs text-[#D9ECD0] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Calificación Google: <strong>5.0 / 5.0</strong> ({CLINIC_INFO.reviewCount} reseñas)</span>
              </div>
              <div className="flex items-center gap-1 text-[#8EC44A]">
                <Leaf className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">Odontología Eco</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9BB784] gap-4">
          <p>&copy; {new Date().getFullYear()} Odontología Eco San Telmo. Todos los derechos reservados.</p>
          <p>Estados Unidos 693 · San Telmo, Ciudad Autónoma de Buenos Aires</p>
        </div>

      </div>
    </footer>
  );
};
