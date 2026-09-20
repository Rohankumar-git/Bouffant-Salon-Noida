import React from 'react';
import { BouffantLogo } from './BouffantLogo';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { MapPin, Phone, MessageCircle, Instagram, Clock, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#022C22] text-[#D9DEE2] border-t border-[#064E3B] relative overflow-hidden">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#064E3B] via-[#D9DEE2] to-[#064E3B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#064E3B]/80">
          {/* Brand & Narrative */}
          <div className="lg:col-span-4 space-y-4">
            <BouffantLogo variant="white" size="md" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm pt-2">
              Bouffant Salon Noida provides professional hair, beauty and grooming services for men and women with a focus on personalized styling, quality products and a comfortable salon experience in Sector 76.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#064E3B] hover:bg-[#08634b] text-white flex items-center justify-center border border-[#D9DEE2]/20 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#4ade80]" />
              </a>

              <a
                href={SALON_INFO.phoneTel}
                className="w-9 h-9 rounded-full bg-[#064E3B] hover:bg-[#08634b] text-white flex items-center justify-center border border-[#D9DEE2]/20 transition-all hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-[#D9DEE2]" />
              </a>

              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#064E3B] hover:bg-[#08634b] text-white flex items-center justify-center border border-[#D9DEE2]/20 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#D9DEE2]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase border-l-2 border-[#D9DEE2] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Bouffant
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Salon Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Lookbook Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Location & Map
                </a>
              </li>
              <li>
                <button
                  onClick={onBookClick}
                  className="text-[#D9DEE2] hover:text-white font-semibold cursor-pointer text-left"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* 5 Service Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase border-l-2 border-[#D9DEE2] pl-2.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#services" className="hover:text-white transition-colors block">
                    {cat.title}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <span className="text-xs text-emerald-400 font-medium">
                  • Ammonia-free colors & salon grade hair treatments
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase border-l-2 border-[#D9DEE2] pl-2.5">
              Salon Details
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9DEE2] shrink-0 mt-0.5" />
                <span>
                  Ground Floor, Shop No. 8, Amrapali Crystal Homes, Market, Sector 76 Road, Noida 201301
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9DEE2] shrink-0" />
                <a href={SALON_INFO.phoneTel} className="hover:text-white font-medium">
                  {SALON_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D9DEE2] shrink-0" />
                <span>{SALON_INFO.openingHours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#D9DEE2] shrink-0" />
                <a
                  href={SALON_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {SALON_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Bouffant Salon Noida. All Rights Reserved.</p>

          <div className="flex items-center space-x-6">
            <span className="text-gray-400">
              Sector 76, Noida • Hair, Beauty & Grooming
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#064E3B] hover:bg-[#08634b] text-[#D9DEE2] hover:text-white transition-all cursor-pointer flex items-center gap-1 text-xs"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
