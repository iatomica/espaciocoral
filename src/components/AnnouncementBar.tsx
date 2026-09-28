import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MapPin, Phone, Star, Clock } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <div className="bg-[#074E4E] text-white text-xs py-2 px-4 border-b border-teal-800/60 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-6 text-teal-100/90">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#F26A51]" />
            <span>Coral State Loft In Tower — Blvr. Mitre 517 11 H, Córdoba</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-300" />
            <span>{CLINIC_INFO.hours}</span>
          </div>
        </div>

        {/* Right: Phone & Rating */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 font-semibold text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>5.0 ({CLINIC_INFO.reviewCount} opiniones verificadas)</span>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-bold hover:text-white text-teal-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#F26A51]" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
