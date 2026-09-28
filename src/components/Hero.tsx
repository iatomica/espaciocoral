import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MessageCircle, ArrowRight, Star, ShieldCheck, Cpu, Award } from 'lucide-react';


export const Hero = () => {
  return (
    <section className="relative pt-8 sm:pt-14 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F0FDFA] via-[#F8FAFC] to-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0C7C7B]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-[#F26A51]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200/70 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F26A51] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-[#0C7C7B] tracking-wide uppercase">
                {CLINIC_INFO.yearsExperience} Años de Trayectoria · Torre Coral State
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Cuidamos tu salud bucal con{' '}
              <span className="text-[#0C7C7B] relative inline-block">
                precisión, tecnología
                <svg className="absolute -bottom-1 left-0 w-full text-[#F26A51]/40" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{' '}
              y calidez.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Tratamientos odontológicos integrales y personalizados a cargo del <strong className="text-slate-800 font-semibold">{CLINIC_INFO.doctorName}</strong>. Un espacio moderno con vistas panorámicas de Córdoba pensado para que tu experiencia sea confortable y sin dolor.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={getWhatsAppUrl('Consulta inicial')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center justify-center gap-2.5 bg-[#0C7C7B] hover:bg-[#074E4E] text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#0C7C7B]/25 transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>Agendar Turno WhatsApp</span>
              </a>

              <a
                href="#especialidades"
                className="btn-tactile inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs transition-colors"
              >
                <span>Nuestros Tratamientos</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social Proof Rating Card */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80">
              <div className="flex -space-x-2">
                {['/images/coral-hero-patient.webp', '/images/coral-estetica.webp', '/images/coral-ortodoncia.webp'].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Paciente"
                    className="w-9 h-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="font-bold text-slate-900 text-sm ml-1.5">5.0</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Más de 75 reseñas verificadas de pacientes satisfechos
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/images/coral-hero-patient.webp"
                alt="Atención Odontológica en Espacio Coral"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Bottom tag on image */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300">Consultorio de Alta Gama</span>
                  <p className="font-display font-bold text-lg leading-tight">Torre Coral State · Piso 11 H</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-white/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sin Dolor</span>
                </div>
              </div>
            </div>

            {/* Floating feature pills inspired by the reference image */}
            <div className="hidden sm:flex flex-col gap-2.5 absolute -right-3 top-8 z-20">
              <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-teal-100 flex items-center gap-2.5 animate-in slide-in-from-right-4 duration-500">
                <div className="w-7 h-7 rounded-lg bg-[#0C7C7B] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Cpu className="w-4 h-4 text-teal-200" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Tecnología de Vanguardia</p>
                  <p className="text-[10px] text-slate-500">Diagnóstico digital de precisión</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-teal-100 flex items-center gap-2.5 animate-in slide-in-from-right-6 duration-700">
                <div className="w-7 h-7 rounded-lg bg-[#F26A51] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">15+ Años de Trayectoria</p>
                  <p className="text-[10px] text-slate-500">Atención personalizada y continua</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
