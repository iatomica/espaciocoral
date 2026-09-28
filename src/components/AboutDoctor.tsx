import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Award, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';


export const AboutDoctor = () => {
  return (
    <section id="doctor" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Dr. Dorrego 3D Figurine & Real Doctor Verification Badge */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 bg-gradient-to-b from-[#FFF5F2] via-white to-[#F0FDFA]">
              
              {/* Main Visual: Dr. Dorrego in 3D Clay Toy Figurine Style */}
              <div className="relative flex justify-center items-center pt-6 pb-2 px-6">
                <img
                  src="/images/dr-dorrego-3d.webp"
                  alt="Dr. Juan Pablo Dorrego"
                  className="w-auto h-[380px] sm:h-[440px] object-contain drop-shadow-xl transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Floating Real Doctor Verification Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/images/dr-dorrego-real.webp"
                      alt="Dr. Juan Pablo Dorrego - Foto Real"
                      className="w-13 h-13 rounded-xl object-cover ring-2 ring-[#0C7C7B]/30 shadow-xs"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-slate-900">Dr. Juan Pablo Dorrego</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F0FDFA] text-[#0C7C7B] border border-teal-200">
                        Verificado
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      Director Médico · Odontólogo MP · Córdoba
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[11px] font-bold text-[#F26A51] uppercase tracking-wide block">
                    Torre Coral State
                  </span>
                  <span className="text-[10px] text-slate-500">Piso 11 H</span>
                </div>
              </div>

            </div>

            {/* Stats row below image */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F0FDFA] p-4 rounded-2xl border border-teal-100 text-center">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#0C7C7B]">
                  {CLINIC_INFO.yearsExperience}
                </p>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">Años de Trayectoria</p>
              </div>

              <div className="bg-[#FFF5F2] p-4 rounded-2xl border border-rose-100 text-center">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#F26A51]">
                  5.0★
                </p>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">{CLINIC_INFO.reviewCount} Reseñas Google</p>
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200 text-center">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800">
                  100%
                </p>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">Atención Directa</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Methodology */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDFA] border border-teal-200 text-xs font-bold text-[#0C7C7B] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#F26A51]" />
              <span>Dirección Médica</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Dr. Juan Pablo Dorrego
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Con más de 15 años de trayectoria ininterrumpida en Córdoba Capital, el Dr. Dorrego lidera <strong>Espacio Coral Odontología</strong> bajo una premisa fundamental: el paciente nunca es un número. Cada plan de tratamiento integra distintas disciplinas odontológicas para brindar una solución definitiva, mínimamente invasiva y adaptada a tus tiempos.
            </p>

            {/* Core Values */}
            <div className="space-y-3.5 pt-2">
              {[
                {
                  title: 'Integración de disciplinas',
                  desc: 'Implantes, ortodoncia, estética y rehabilitación articuladas en una sola visión para evitar retratamientos.'
                },
                {
                  title: 'Atención personalizada de principio a fin',
                  desc: 'El Dr. Dorrego realiza personalmente el diagnóstico, la planificación y cada etapa de tu evolución clínica.'
                },
                {
                  title: 'Tecnología y biomateriales de primera línea',
                  desc: 'Utilizamos implantes certificados, resinas nanohíbridas y cerámicas de alta resistencia.'
                },
                {
                  title: 'Ambiente de absoluta calma',
                  desc: 'Instalaciones ubicadas en el piso 11 de la icónica Torre Coral State, con luz natural y ambiente descontracturado.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0C7C7B] flex items-center justify-center shrink-0 mt-0.5">
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
                href={getWhatsAppUrl('Consulta con Dr. Dorrego')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 bg-[#0C7C7B] hover:bg-[#074E4E] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md shadow-[#0C7C7B]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Consultar con el Dr. Dorrego</span>
              </a>

              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm px-5 py-3 rounded-xl border border-slate-200 shadow-xs transition-colors"
              >
                <span>Perfil de Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
