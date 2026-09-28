import { HeartPulse, Cpu, UserCheck, Smile, CalendarClock } from 'lucide-react';

const PILLARS = [
  {
    icon: HeartPulse,
    title: 'Atención Integral',
    desc: 'Diagnóstico y tratamiento completo en un solo lugar con enfoque interdisciplinario.',
    accent: '#0C7C7B',
    bg: 'bg-teal-50'
  },
  {
    icon: Cpu,
    title: 'Tecnología Avanzada',
    desc: 'Equipamiento de última generación para intervenciones seguras, exactas y mínimamente invasivas.',
    accent: '#0284C7',
    bg: 'bg-sky-50'
  },
  {
    icon: UserCheck,
    title: 'Dr. Dorrego (15+ Años)',
    desc: 'Atención directa y personalizada por el profesional responsable a lo largo de todo tu tratamiento.',
    accent: '#F26A51',
    bg: 'bg-rose-50'
  },
  {
    icon: Smile,
    title: 'Confort y Cero Dolor',
    desc: 'Protocolos de sedación y anestesia localizada para que vivas una experiencia dental relajante.',
    accent: '#10B981',
    bg: 'bg-emerald-50'
  },
  {
    icon: CalendarClock,
    title: 'Turnos y Urgencias',
    desc: 'Puntualidad rigurosa en tu turno y prioridad inmediata ante molestias agudas o traumatismos.',
    accent: '#8B5CF6',
    bg: 'bg-purple-50'
  }
];

export const TrustBar = () => {
  return (
    <section className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-teal-200 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl ${pillar.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}
                    style={{ color: pillar.accent }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-[#0C7C7B] transition-colors mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
