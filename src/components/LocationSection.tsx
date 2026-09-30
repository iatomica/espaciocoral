import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MapPin, Phone, Clock, MessageCircle, ShieldCheck, Navigation } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-[#F9FAF6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F8EB] border border-[#D5E6C6] text-xs font-bold text-[#4C721D] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#865AA5]" />
              <span>Ubicación Estratégica</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              En el corazón histórico de San Telmo
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Nuestro consultorio está ubicado en <strong>Estados Unidos 693</strong>, en una zona de fácil acceso de la Ciudad de Buenos Aires, con múltiples conexiones de transporte y estacionamientos cercanos para tu comodidad.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F2F8EB] text-[#6DA02E] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#865AA5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dirección Exacta</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{CLINIC_INFO.address}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Entre Chacabuco y Perú · San Telmo, CABA</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F2F8EB] text-[#4C721D] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#4C721D]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Horarios de Atención</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{CLINIC_INFO.hours}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Atención programada para asegurar puntualidad sin salas de espera colmadas</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F6EFFB] text-[#865AA5] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#865AA5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Contacto Directo & WhatsApp</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Teléfono: {CLINIC_INFO.phoneDisplay}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Respuestas rápidas para coordinación de citas y consultas</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl('Consulta sobre turnos y ubicación')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 bg-[#6DA02E] hover:bg-[#578323] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-[#6DA02E]/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#E6FFC2]" />
                <span>Contactar por WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
              </a>

              <a
                href={CLINIC_INFO.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-200 shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#6DA02E]" />
                <span>Abrir en Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Clinic Ambience & Map Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <img
                src="/images/coral-clinic-room.webp"
                alt="Consultorio Odontología Eco en San Telmo"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/10 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A5D26C]">Espacio Agradable & Luminoso</span>
                  <p className="font-display text-lg font-bold">Odontología Eco San Telmo</p>
                  <p className="text-xs text-slate-200">Estados Unidos 693, CABA</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold border border-white/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#A5D26C]" />
                  <span>Ambiente Relajante</span>
                </div>
              </div>
            </div>

            {/* Quick Transport Tips */}
            <div className="p-4 rounded-2xl bg-white border border-[#E1ECD4] shadow-xs flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6DA02E]" />
                <span>Cercano a Subte Línea C (Estación San Juan / Independencia) y Metrobus del Bajo</span>
              </div>
              <span className="hidden sm:inline font-bold text-[#865AA5]">San Telmo</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
