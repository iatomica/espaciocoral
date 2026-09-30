import { SPECIALTIES, getWhatsAppUrl } from '../data/clinicData';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section id="especialidades" className="py-16 sm:py-24 bg-[#F9FAF6] border-b border-[#E7EFE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D5E6C6] text-xs font-bold text-[#4C721D] uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#865AA5]" />
            <span>Tratamientos & Especialidades</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Soluciones integrales para tu salud bucal
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Enfoque interdisciplinario con materiales biocompatibles y procedimientos mínimamente invasivos. Cada plan de tratamiento es único, transparente y pensado para durar.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#D5E6C6] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Subtle Badge */}
                  <div className="absolute bottom-2.5 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#4C721D] px-2.5 py-0.5 rounded-full shadow-xs">
                      {spec.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-2.5">
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#6DA02E] transition-colors leading-snug">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {spec.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium bg-[#F2F8EB] text-[#4C721D] px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href={getWhatsAppUrl(spec.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-[#6DA02E] hover:text-[#4C721D] pt-2 transition-colors group/link cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#6DA02E]" />
                    Consultar por WhatsApp
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
