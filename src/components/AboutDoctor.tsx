import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Leaf, CheckCircle2, MessageCircle, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const AboutDoctor = () => {
  return (
    <section id="filosofia-eco" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#6DA02E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#865AA5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Patient Transformation Case Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#F2F8EB] bg-gradient-to-b from-[#F6EFFB]/40 via-white to-[#F2F8EB]/50 p-4 sm:p-6">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#865AA5] bg-[#F6EFFB] px-3 py-1 rounded-full border border-[#E9DFEF] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Caso Clínico Real
                </span>
                <span className="text-xs font-semibold text-slate-500">Antes & Después</span>
              </div>

              {/* Main Visual: Patient Before and After */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <img
                  src="/images/eco-patient-before-after.webp"
                  alt="Transformación de sonrisa - Odontología Eco San Telmo"
                  className="w-full h-auto object-cover object-center"
                />
              </div>

              {/* Card Footer: Patient transformation commentary */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E1ECD4] shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F8EB] text-[#6DA02E] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 fill-[#6DA02E]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sonrisas que transforman vidas</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Tratamientos conservadores y estéticos con máxima biocompatibilidad
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block text-right shrink-0">
                  <span className="text-xs font-bold text-[#6DA02E] block">San Telmo</span>
                  <span className="text-[10px] text-slate-400">Estados Unidos 693</span>
                </div>
              </div>

            </div>

            {/* Stats row below image */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F2F8EB] p-4 rounded-2xl border border-[#D5E6C6] text-center">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#4C721D]">
                  {CLINIC_INFO.yearsExperience}
                </p>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">Años de Trayectoria</p>
              </div>

              <div className="bg-[#F6EFFB] p-4 rounded-2xl border border-[#E9DFEF] text-center">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#865AA5]">
                  5.0★
                </p>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">{CLINIC_INFO.reviewCount} Reseñas Google</p>
              </div>

              <div className="bg-[#F9FAF6] p-4 rounded-2xl border border-slate-200 text-center">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800">
                  100%
                </p>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">Eco Consciente</p>
              </div>
            </div>
          </div>

          {/* Right Column: Eco Philosophy & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F8EB] border border-[#D5E6C6] text-xs font-bold text-[#4C721D] uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-[#6DA02E]" />
              <span>Nuestra Propuesta de Valor</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Una nueva forma de vivir tu visita al odontólogo
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              En <strong>Odontología Eco San Telmo</strong> creemos que el cuidado de tu salud no debe estar reñido con el respeto por el medio ambiente ni con una experiencia humana y tranquila. Por eso creamos un modelo odontológico consciente centrado en las personas:
            </p>

            {/* Core Values Points */}
            <div className="space-y-4 pt-2">
              {[
                {
                  title: 'Materiales biocompatibles libres de metales',
                  desc: 'Utilizamos resinas avanzadas y cerámicas puras de zirconio que no liberan sustancias tóxicas y cuidan tus encías a largo plazo.'
                },
                {
                  title: 'Reducción activa de la huella plástica',
                  desc: 'Protocolos de esterilización certificados y sustitución de descartables plásticos por alternativas biodegradables y sostenibles.'
                },
                {
                  title: 'Odontología mínimamente invasiva',
                  desc: 'Preservamos al máximo el tejido dental biológico natural, realizando tratamientos conservadores y certeros.'
                },
                {
                  title: 'Tiempo y escucha para cada paciente',
                  desc: 'Turnos espaciados que garantizan atención sin apuros, puntualidad estricta y un ambiente relajado y reconfortante.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5DE] text-[#6DA02E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl('Consulta sobre tratamientos')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 bg-[#6DA02E] hover:bg-[#578323] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-[#6DA02E]/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#E6FFC2]" />
                <span>Consultar por WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
              </a>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#6DA02E]" />
                <span>Atención con turno previo</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
