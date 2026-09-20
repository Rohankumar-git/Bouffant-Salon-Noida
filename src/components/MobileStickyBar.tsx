import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#022C22] border-t border-[#064E3B] px-3 py-2.5 shadow-2xl safe-bottom">
      <div className="grid grid-cols-3 gap-2">
        {/* WhatsApp */}
        <a
          href={SALON_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#064E3B] text-white text-xs font-semibold border border-[#D9DEE2]/20 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-[#4ade80] shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={SALON_INFO.phoneTel}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#064E3B] text-white text-xs font-semibold border border-[#D9DEE2]/20 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#D9DEE2] shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        {/* Book */}
        <button
          onClick={onBookClick}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#D9DEE2] text-[#022C22] text-xs font-bold active:scale-95 transition-all cursor-pointer text-center shadow"
        >
          <Calendar className="w-4 h-4 text-[#022C22] shrink-0" />
          <span className="truncate">Book</span>
        </button>
      </div>
    </div>
  );
};
