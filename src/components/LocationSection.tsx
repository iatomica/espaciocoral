import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MapPin, Phone, Clock, MessageCircle, ShieldCheck } from 'lucide-react';


export const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-[#0C7C7B] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#F26A51]" />
              <span>Cómo Llegar</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Torre Coral State · Piso 11 H
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              El consultorio se encuentra en una de las torres más representativas de Córdoba Capital, sobre Boulevard Mitre junto al cauce del río Suquía, ofreciendo un entorno premium, seguro y de fácil acceso.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0C7C7B] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#F26A51]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dirección Exacta</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{CLINIC_INFO.address}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Ingreso por recepción principal · Ascensores de alta velocidad</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0C7C7B] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Horarios de Atención</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{CLINIC_INFO.hours}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Turnos programados para garantizar puntualidad sin esperas</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0C7C7B] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0C7C7B]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Contacto Directo</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Teléfono: {CLINIC_INFO.phoneDisplay}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">WhatsApp activo para consultas y confirmaciones</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Consulta sobre ubicación y turnos')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 bg-[#0C7C7B] hover:bg-[#074E4E] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-[#0C7C7B]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Consultar por WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Tower View */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="/images/coral-tower-interior.webp"
                alt="Vista y Consultorio Torre Coral State"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">Entorno Confortable</span>
                  <p className="font-display text-lg font-bold">Torre Coral State</p>
                  <p className="text-xs text-slate-200">Blvr. Mitre 517, Córdoba</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold border border-white/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Seguridad 24 hs</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
