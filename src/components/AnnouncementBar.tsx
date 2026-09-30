import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MapPin, Phone, Star, Clock } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <div className="bg-[#1D3215] text-white text-xs py-2 px-4 border-b border-[#2C4920] hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-6 text-[#D7E8C7]">
          <a
            href={CLINIC_INFO.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#8EC44A]" />
            <span>{CLINIC_INFO.address}</span>
          </a>
          <div className="hidden lg:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#A5D26C]" />
            <span>{CLINIC_INFO.hours}</span>
          </div>
        </div>

        {/* Right: Phone & Rating */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 font-semibold text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>5.0 ({CLINIC_INFO.reviewCount} opiniones Google)</span>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-bold hover:text-white text-[#D9ECD0] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#A57DC4]" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
