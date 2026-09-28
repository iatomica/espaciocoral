import { OBRAS_SOCIALES, getWhatsAppUrl } from '../data/clinicData';
import { ShieldCheck, AlertCircle, MessageCircle } from 'lucide-react';

export const ObrasSocialesSection = () => {
  return (
    <section id="obras-sociales" className="py-16 sm:py-20 bg-[#F0FDFA] border-y border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-200 text-xs font-bold text-[#0C7C7B] uppercase tracking-wider mb-2.5 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Coberturas & Convenios</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
            Obras Sociales & Prepagas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Trabajamos con las principales empresas de medicina privada y brindamos facilidades de reintegro oficial para tu tratamiento.
          </p>
        </div>

        {/* Obras Sociales Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {OBRAS_SOCIALES.map((os, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-teal-100/80 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0C7C7B] flex items-center justify-center font-extrabold text-sm mb-2 group-hover:bg-[#0C7C7B] group-hover:text-white transition-colors">
                {os.name.substring(0, 2).toUpperCase()}
              </div>
              <h3 className="font-display font-bold text-slate-900 text-sm group-hover:text-[#0C7C7B] transition-colors">
                {os.name}
              </h3>
              <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                {os.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Explicit Warning & Notice Box Required by User */}
        <div className="max-w-3xl mx-auto bg-amber-50/90 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-amber-900">
              Aviso importante sobre tu cobertura
            </h4>
            <p className="text-xs text-amber-800/90 leading-relaxed">
              La cobertura puede variar según el consultorio, el plan contratado y el tipo de servicio odontológico específico (prótesis, ortodoncia, cirugía, etc.). Sugerimos escribirnos previamente por WhatsApp indicando tu prepaga o plan para validar los alcances y aranceles antes de tu visita.
            </p>
            <div className="pt-1.5">
              <a
                href={getWhatsAppUrl('Consulta de cobertura con mi Obra Social')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C7C7B] hover:text-[#074E4E] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Consultar validez de mi cobertura por WhatsApp &rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
