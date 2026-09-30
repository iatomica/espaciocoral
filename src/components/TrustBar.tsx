import { Stethoscope, Leaf, Handshake, BookOpen } from 'lucide-react';
import { VALUE_PILLARS } from '../data/clinicData';

const ICONS_MAP = {
  stethoscope: Stethoscope,
  leaf: Leaf,
  handshake: Handshake,
  book: BookOpen
};

const STYLES_MAP = {
  excelencia: {
    accent: '#4C721D',
    bg: 'bg-[#F2F8EB]',
    borderHover: 'hover:border-[#6DA02E]'
  },
  ecologia: {
    accent: '#6DA02E',
    bg: 'bg-[#EBF5DE]',
    borderHover: 'hover:border-[#6DA02E]'
  },
  atencion: {
    accent: '#865AA5',
    bg: 'bg-[#F6EFFB]',
    borderHover: 'hover:border-[#865AA5]'
  },
  educacion: {
    accent: '#2B6B4F',
    bg: 'bg-[#E8F5EE]',
    borderHover: 'hover:border-[#2B6B4F]'
  }
};

export const TrustBar = () => {
  return (
    <section className="py-12 bg-white border-y border-[#E7EFE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA02E] bg-[#F2F8EB] px-3 py-1 rounded-full border border-[#D5E6C6]">
            Nuestros Pilares Fundamentales
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-2">
            El valor de una odontología más consciente
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar) => {
            const IconComponent = ICONS_MAP[pillar.iconName];
            const style = STYLES_MAP[pillar.id as keyof typeof STYLES_MAP] || STYLES_MAP.excelencia;
            return (
              <div
                key={pillar.id}
                className={`p-6 rounded-2xl bg-[#F9FAF6] border border-slate-200/80 ${style.borderHover} hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div
                    className={`w-13 h-13 rounded-2xl ${style.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 shadow-xs`}
                    style={{ color: style.accent }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#6DA02E] transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
