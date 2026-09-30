import { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, Calendar, Check, Leaf } from 'lucide-react';

const REASONS = [
  'Primera consulta / Evaluación bucal integral',
  'Estética dental o Blanqueamiento seguro',
  'Ortodoncia / Alineadores invisibles',
  'Implantes dentales biocompatibles',
  'Prótesis o restauraciones libres de metal',
  'Endodoncia mecanizada sin dolor',
  'Limpieza ultrasónica / Periodoncia',
  'Urgencia odontológica (Dolor o Molestia)'
];

export const AppointmentForm = () => {
  const [selectedReason, setSelectedReason] = useState(REASONS[0]);
  const [patientName, setPatientName] = useState('');
  const [preferredTime, setPreferredTime] = useState('Indistinto');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hola Odontología Eco San Telmo! `;
    if (patientName.trim()) {
      text += `Mi nombre es ${patientName.trim()}. `;
    }
    text += `Quisiera coordinar un turno en el consultorio de San Telmo (Estados Unidos 693) para: *${selectedReason}*. `;
    text += `Preferencia de horario: *${preferredTime}*. `;
    text += `¿Qué disponibilidad de turnos tienen? Muchas gracias!`;

    const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#F2F8EB]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#D5E6C6]">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2F8EB] border border-[#D5E6C6] text-xs font-bold text-[#4C721D] uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#865AA5]" />
              <span>Coordinación Inmediata</span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Solicitá tu turno en Odontología Eco
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              Te respondemos directamente por WhatsApp al <strong className="text-slate-900 font-semibold">{CLINIC_INFO.phoneDisplay}</strong> para coordinar tu cita en Estados Unidos 693, San Telmo.
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
                        ? 'border-[#6DA02E] bg-[#F2F8EB] text-[#4C721D] font-bold shadow-xs'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700 font-medium'
                    }`}
                  >
                    <span>{r}</span>
                    {selectedReason === r && (
                      <Check className="w-4 h-4 text-[#6DA02E] shrink-0 ml-2" />
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
                  placeholder="Ej. Lucas Fernández"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 font-medium focus:ring-2 focus:ring-[#6DA02E] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Preferencia de horario
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-[#6DA02E] focus:border-transparent outline-none"
                >
                  <option value="Indistinto">Indistinto (primer turno disponible)</option>
                  <option value="Por la mañana (09:00 a 13:00)">Por la mañana (09:00 a 13:00)</option>
                  <option value="Por la tarde (14:00 a 19:00)">Por la tarde (14:00 a 19:00)</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-tactile w-full py-4 rounded-xl bg-[#6DA02E] hover:bg-[#578323] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#6DA02E]/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#E6FFC2]" />
                <span>Enviar Solicitud a WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-2.5">
                <Leaf className="w-3.5 h-3.5 text-[#6DA02E]" />
                <span>Atención cálida, respetuosa y personalizada en San Telmo.</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
