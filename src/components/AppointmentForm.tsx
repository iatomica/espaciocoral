import { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, Calendar, Check } from 'lucide-react';


const REASONS = [
  'Primera consulta / Evaluación general',
  'Implantes odontológicos',
  'Ortodoncia / Alineadores transparentes',
  'Estética dental o Blanqueamiento',
  'Endodoncia (Tratamiento de conducto)',
  'Cirugía odontológica',
  'Urgencia odontológica (Dolor o Fractura)',
  'Prótesis dental / Rehabilitación'
];

export const AppointmentForm = () => {
  const [selectedReason, setSelectedReason] = useState(REASONS[0]);
  const [patientName, setPatientName] = useState('');
  const [preferredTime, setPreferredTime] = useState('Indistinto');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hola Dr. Juan Pablo Dorrego (Espacio Coral)! `;
    if (patientName.trim()) {
      text += `Mi nombre es ${patientName.trim()}. `;
    }
    text += `Quisiera coordinar un turno en el consultorio de Torre Coral State para: *${selectedReason}*. `;
    text += `Preferencia de horario: *${preferredTime}*. `;
    text += `¿Qué días y horarios tienen disponibles? Muchas gracias!`;

    const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#F0FDFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-100">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-[#0C7C7B] uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#F26A51]" />
              <span>Coordinación Inmediata</span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Solicitá tu turno con el Dr. Juan Pablo Dorrego
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              Respondemos directamente por WhatsApp al <strong className="text-slate-900 font-semibold">{CLINIC_INFO.phoneDisplay}</strong> para coordinar tu cita con rapidez.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Reason */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                1. Motivo principal de tu consulta
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {REASONS.map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => setSelectedReason(r)}
                    className={`text-left text-xs sm:text-sm p-3 rounded-xl border transition-all flex items-center justify-between ${
                      selectedReason === r
                        ? 'border-[#0C7C7B] bg-[#F0FDFA] text-[#0C7C7B] font-bold shadow-xs'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700 font-medium'
                    }`}
                  >
                    <span>{r}</span>
                    {selectedReason === r && (
                      <Check className="w-4 h-4 text-[#0C7C7B] shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Name & Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. Tu Nombre y Apellido (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Martín Gómez"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 font-medium focus:ring-2 focus:ring-[#0C7C7B] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Preferencia de horario
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-[#0C7C7B] focus:border-transparent outline-none"
                >
                  <option value="Indistinto">Indistinto (primer turno disponible)</option>
                  <option value="Por la mañana (09:00 a 13:00)">Por la mañana (09:00 a 13:00)</option>
                  <option value="Por la tarde (14:00 a 19:30)">Por la tarde (14:00 a 19:30)</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-tactile w-full py-4 rounded-xl bg-[#0C7C7B] hover:bg-[#074E4E] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#0C7C7B]/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>Enviar Solicitud a WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
              </button>
              <p className="text-center text-[11px] text-slate-500 mt-2">
                Atención ágil y confidencial. Sin llamadas automáticas ni esperas.
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
