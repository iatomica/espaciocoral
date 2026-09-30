import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MessageCircle, ArrowRight, Star, ShieldCheck, Leaf, Sparkles, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-8 sm:pt-14 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F2F8EB]/70 via-[#F9FAF6] to-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#6DA02E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-36 right-10 w-80 h-80 bg-[#865AA5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D5E6C6] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#6DA02E] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-[#4C721D] tracking-wide uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#865AA5]" />
                San Telmo · Estados Unidos 693
              </span>
            </div>

            {/* Display Headline con el lema del flyer */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Cuidar tu sonrisa y el planeta,{' '}
              <span className="text-[#6DA02E] relative inline-block">
                es amor propio.
                <svg className="absolute -bottom-1 left-0 w-full text-[#865AA5]/40" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Bienvenido a <strong className="text-slate-800 font-bold">Odontología Eco</strong>. Odontología integral de vanguardia en el corazón de San Telmo, donde combinamos materiales biocompatibles, respeto ambiental y una atención cálida, humana y 100% libre de dolor.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={getWhatsAppUrl('Consulta inicial')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center justify-center gap-2.5 bg-[#6DA02E] hover:bg-[#578323] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#6DA02E]/25 transition-all text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#E6FFC2]" />
                <span>Agendar por WhatsApp</span>
              </a>

              <a
                href="#filosofia-eco"
                className="btn-tactile inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2F8EB] text-slate-800 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs transition-colors"
              >
                <Leaf className="w-4 h-4 text-[#6DA02E]" />
                <span>Nuestra Filosofía</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social Proof & Location Tag */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80">
              <div className="flex -space-x-2">
                <img
                  src="/images/coral-hero-patient.webp"
                  alt="Paciente"
                  className="w-10 h-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                />
                <img
                  src="/images/coral-estetica.webp"
                  alt="Paciente"
                  className="w-10 h-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                />
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-[#865AA5] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  ECO
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="font-bold text-slate-900 text-sm ml-1.5">{CLINIC_INFO.rating}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {CLINIC_INFO.reviewCount} opiniones verificadas · Consultorio en San Telmo
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase with Brand Flyer & Live Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="/images/eco-hero-smile.webp"
                alt="Odontología Eco - Cuidar tu sonrisa y el planeta es amor propio"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Bottom tag on image */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A5D26C] flex items-center gap-1">
                    <Leaf className="w-3.5 h-3.5" /> Odontología Sostenible
                  </span>
                  <p className="font-display font-bold text-lg leading-tight">Estados Unidos 693 · San Telmo</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-white/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Sin Dolor</span>
                </div>
              </div>
            </div>

            {/* Floating feature pills matching the flyer theme */}
            <div className="hidden sm:flex flex-col gap-2.5 absolute -right-3 top-8 z-20">
              <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-[#E1ECD4] flex items-center gap-2.5 animate-in slide-in-from-right-4 duration-500">
                <div className="w-7 h-7 rounded-lg bg-[#6DA02E] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Leaf className="w-4 h-4 text-[#E6FFC2]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Compromiso Ecológico</p>
                  <p className="text-[10px] text-slate-500">Biomateriales y reducción de residuos</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-[#E9DFEF] flex items-center gap-2.5 animate-in slide-in-from-right-6 duration-700">
                <div className="w-7 h-7 rounded-lg bg-[#865AA5] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Atención Personalizada</p>
                  <p className="text-[10px] text-slate-500">Planes a medida sin prisas</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
