import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { SalonImg } from './SalonImg';
import { MapPin, Phone, MessageCircle, Instagram, Navigation, Clock, ExternalLink, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B]/10 border border-[#064E3B]/20 text-[#064E3B] text-xs font-semibold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Visit Our Salon
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#022C22] mb-4">
            Contact & Location
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Amrapali Crystal Homes Market on Sector 76 Road, Noida. Walk-ins and pre-booked appointments welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Business Details & Instant Action Buttons */}
          <div className="lg:col-span-5 bg-[#F8FAFA] p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-luxury flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B]">
                  Noida Location
                </span>
                <h3 className="text-2xl font-heading font-bold text-[#022C22] mt-1">
                  Bouffant Salon Noida
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Sector 76, Noida, Uttar Pradesh
                </p>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/70 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#064E3B] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D9DEE2]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase">Address</h4>
                  <p className="text-sm font-medium text-gray-800 mt-1 leading-snug">
                    Ground Floor, Shop No. 8, Amrapali Crystal Homes, Market, Sector 76 Road, Amarpali Silicon City, Sector 76, Noida, Uttar Pradesh 201301
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/70 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#064E3B] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#D9DEE2]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase">Phone & WhatsApp</h4>
                  <a
                    href={SALON_INFO.phoneTel}
                    className="text-base font-bold text-[#022C22] hover:text-[#064E3B] transition-colors mt-1 block"
                  >
                    {SALON_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-gray-500">Available for calls & WhatsApp queries</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/70 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#064E3B] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#D9DEE2]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase">Salon Timings</h4>
                  <p className="text-sm font-semibold text-gray-800 mt-1">
                    {SALON_INFO.openingHours}
                  </p>
                  <p className="text-xs text-emerald-700 font-medium">Open All 7 Days</p>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/70 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#064E3B] text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-[#D9DEE2]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase">Official Instagram</h4>
                  <a
                    href={SALON_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#064E3B] hover:underline mt-1 block"
                  >
                    {SALON_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-8 border-t border-gray-200 grid grid-cols-2 gap-3 mt-6">
              <a
                href={SALON_INFO.phoneTel}
                className="py-3 px-4 rounded-lg bg-[#064E3B] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#022C22] transition-colors shadow-xs text-center"
              >
                <Phone className="w-4 h-4 text-[#D9DEE2]" />
                <span>Call Now</span>
              </a>

              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-lg bg-[#022C22] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#064E3B] transition-colors shadow-xs text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={SALON_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors col-span-2 text-center"
              >
                <Navigation className="w-4 h-4 text-[#064E3B]" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>
            </div>
          </div>

          {/* Right Column: Real Storefront Photo + Google Maps Interactive Embed */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Storefront Visual Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm bg-gray-100 h-48 sm:h-52">
              <SalonImg
                src={SALON_INFO.images.exterior}
                fallbackSrc="/images/salon_interior.jpg"
                alt="Bouffant Salon Storefront Shop No. 8 Amrapali Crystal Homes Noida"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-5">
                <div className="text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#064E3B] text-[#D9DEE2] border border-white/20 inline-block mb-1.5">
                    Storefront Entrance • Shop No. 8
                  </span>
                  <h4 className="text-base sm:text-lg font-heading font-semibold text-white">
                    Bouffant Salon — Crystal Homes Market
                  </h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Look for the green and gold Bouffant signage right on the ground floor.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-gray-200 shadow-luxury relative bg-gray-100">
              <iframe
                title="Bouffant Salon Noida Location Map"
                src="https://maps.google.com/maps?q=Amrapali+Crystal+Homes+Sector+76+Noida&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[280px] rounded-2xl"
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-gray-200 shadow-md flex items-center gap-2.5 pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
                <div>
                  <p className="text-xs font-bold text-gray-900">Bouffant Salon</p>
                  <p className="text-[10px] text-gray-500">Shop No. 8, Crystal Homes Market</p>
                </div>
              </div>
            </div>

            {/* Quick Amenities Pill Bar */}
            <div className="bg-[#F8FAFA] p-4 rounded-2xl border border-gray-200/70 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
              <span className="flex items-center gap-1.5 font-medium">
                ✓ Ground Floor Accessible
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                ✓ Ample Market Parking
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                ✓ Air Conditioned & Hygienic
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                ✓ Unisex Salon Setup
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
