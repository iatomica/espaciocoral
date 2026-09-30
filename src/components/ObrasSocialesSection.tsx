import { OBRAS_SOCIALES, getWhatsAppUrl } from '../data/clinicData';
import { ShieldCheck, AlertCircle, MessageCircle } from 'lucide-react';

export const ObrasSocialesSection = () => {
  return (
    <section id="obras-sociales" className="py-16 sm:py-20 bg-[#F2F8EB]/60 border-y border-[#D5E6C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D5E6C6] text-xs font-bold text-[#4C721D] uppercase tracking-wider mb-2.5 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6DA02E]" />
            <span>Coberturas & Convenios</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
            Obras Sociales & Prepagas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Brindamos atención particular y facilidades para reintegros oficiales con las principales coberturas de salud.
          </p>
        </div>

        {/* Obras Sociales Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {OBRAS_SOCIALES.map((os, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#E1ECD4] shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F2F8EB] text-[#4C721D] flex items-center justify-center font-extrabold text-sm mb-2 group-hover:bg-[#6DA02E] group-hover:text-white transition-colors">
                {os.name.substring(0, 2).toUpperCase()}
              </div>
              <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-[#6DA02E] transition-colors">
                {os.name}
              </h3>
              <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                {os.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Cobertura Notice */}
        <div className="max-w-3xl mx-auto bg-white/90 border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-amber-900">
              Aviso sobre reintegros y alcances de cobertura
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              La modalidad de reintegro o cobertura varía de acuerdo con el plan específico contratado y el tipo de práctica odontológica requerida (prótesis, estética, ortodoncia, etc.). Podés escribirnos previamente por WhatsApp para consultar cómo presentar tu factura oficial y facilitar tu trámite.
            </p>
            <div className="pt-1.5">
              <a
                href={getWhatsAppUrl('Consulta de cobertura con mi Obra Social')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6DA02E] hover:text-[#4C721D] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Consultar por reintegros o cobertura por WhatsApp &rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
