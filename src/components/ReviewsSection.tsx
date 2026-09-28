import { REVIEWS, CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Star, CheckCircle } from 'lucide-react';


export const ReviewsSection = () => {
  return (
    <section id="opiniones" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Valoración Perfecta 5.0 en Google</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              La experiencia de nuestros pacientes
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-xl">
              Más de 75 personas compartieron su experiencia destacando el trato humano, la precisión clínica y la puntualidad del Dr. Juan Pablo Dorrego.
            </p>
          </div>

          <div className="bg-[#F0FDFA] p-4 rounded-2xl border border-teal-100 flex items-center gap-4">
            <div className="text-center pr-4 border-r border-teal-200/60">
              <p className="font-display text-3xl font-extrabold text-[#0C7C7B]">5.0</p>
              <div className="flex items-center text-amber-400 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">{CLINIC_INFO.reviewCount} Reseñas Verificadas</p>
              <p className="text-[11px] text-slate-500">Google Business Profile</p>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  </h4>
                  <span className="text-[10px] font-medium text-[#0C7C7B]">
                    {review.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0C7C7B] to-[#074E4E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              ¿Querés vivir una experiencia odontológica diferente?
            </h3>
            <p className="text-teal-100 text-xs sm:text-sm mt-1">
              Agendá tu consulta en Torre Coral State y conocé nuestro enfoque sin dolor.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Solicitud de turno')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile whitespace-nowrap bg-white hover:bg-teal-50 text-[#0C7C7B] font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all"
          >
            <span>Reservar Turno por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
