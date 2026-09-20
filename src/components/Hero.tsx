import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { SalonImg } from './SalonImg';
import { Calendar, MessageCircle, MapPin, Star, Sparkles, Scissors, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-[#022C22] overflow-hidden">
      {/* Background Salon Image with Sophisticated Emerald & Charcoal Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <SalonImg
          src={SALON_INFO.images.hero}
          fallbackSrc="/images/salon_interior.jpg"
          alt="Bouffant Salon Noida Interior in Sector 76"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
        />
        {/* Layered dark emerald to deep charcoal gradient to guarantee WCAG AAA text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022C22]/95 via-[#022C22]/80 to-[#022C22]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-transparent to-[#022C22]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Location & Rating Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#064E3B]/90 border border-[#D9DEE2]/30 text-[#D9DEE2] text-xs font-semibold tracking-wide backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-[#D9DEE2]" />
              <span>{SALON_INFO.locationShort}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#022C22]/90 border border-[#D9DEE2]/20 text-[#EEF1F2] text-xs font-medium backdrop-blur-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.9</span>
              <span className="text-gray-300">Google Rating</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#064E3B]/60 border border-[#D9DEE2]/20 text-[#EEF1F2] text-xs font-medium backdrop-blur-sm hidden sm:inline-flex">
              <Scissors className="w-3 h-3 text-[#D9DEE2]" />
              <span>Men & Women Unisex Salon</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-heading text-white tracking-tight leading-[1.15] mb-6">
            Elevate Your Style at{' '}
            <span className="text-[#D9DEE2] italic font-semibold drop-shadow-sm">
              Bouffant Salon
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#EEF1F2]/90 leading-relaxed font-normal mb-8 max-w-2xl">
            {SALON_INFO.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2.5 bg-[#D9DEE2] hover:bg-white text-[#022C22] px-7 py-4 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-center"
            >
              <Calendar className="w-5 h-5 text-[#022C22]" />
              <span>Book an Appointment</span>
            </button>

            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#064E3B] hover:bg-[#08634b] text-white border border-[#D9DEE2]/40 px-7 py-4 rounded-lg font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
            >
              <MessageCircle className="w-5 h-5 text-[#4ade80]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Features Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#D9DEE2]/15 text-white/80 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D9DEE2] shrink-0" />
              <span>Personalized Styling</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D9DEE2] shrink-0" />
              <span>Premium Products</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <MapPin className="w-4 h-4 text-[#D9DEE2] shrink-0" />
              <span>Amrapali Crystal Homes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant subtle bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F8FAFA] to-transparent z-20 pointer-events-none" />
    </section>
  );
};
