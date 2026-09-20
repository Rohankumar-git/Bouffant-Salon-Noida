import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { SalonImg } from './SalonImg';
import { Sparkles, Check, Users, Scissors, Award, HeartHandshake, MapPin } from 'lucide-react';

interface AboutSectionProps {
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookClick }) => {
  const highlights = [
    {
      title: 'Premium Salon Experience',
      desc: 'Spacious, air-conditioned & serene salon environment built for your relaxation.',
      icon: Sparkles,
    },
    {
      title: 'Professional Styling',
      desc: 'Skilled stylists experienced in modern cuts, styling, keratin & balayage.',
      icon: Scissors,
    },
    {
      title: 'Men & Women Services',
      desc: 'Dedicated unisex grooming, hair, skin, and beauty treatments under one roof.',
      icon: Users,
    },
    {
      title: 'Personalized Consultations',
      desc: 'Thoughtful consultations tailored to your facial structure, hair type, and lifestyle.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Salon Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-luxury border border-silver-subtle">
              <SalonImg
                src={SALON_INFO.images.about}
                fallbackSrc="/images/salon_styling.jpg"
                alt="Professional hair stylist at Bouffant Salon Noida Sector 76"
                className="w-full h-full max-h-[580px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
              />
              {/* Subtle gradient vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Location Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#022C22]/90 backdrop-blur-md p-4 rounded-xl border border-[#D9DEE2]/20 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#064E3B] flex items-center justify-center shrink-0 border border-[#D9DEE2]/20">
                    <MapPin className="w-5 h-5 text-[#D9DEE2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Amrapali Crystal Homes</h4>
                    <p className="text-xs text-gray-300">Sector 76 Road, Noida</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#064E3B] text-[#D9DEE2] border border-[#D9DEE2]/30">
                  Ground Floor
                </span>
              </div>
            </div>

            {/* Decorative background emerald accent shape */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#064E3B]/5 rounded-3xl -z-0 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#D9DEE2]/40 rounded-full -z-0 blur-2xl" />
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B]/10 border border-[#064E3B]/20 text-[#064E3B] text-xs font-semibold tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" />
              About Bouffant Salon
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#022C22] leading-tight">
              Where Craftsmanship Meets Comfort
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {SALON_INFO.aboutDetailed}
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Located conveniently in the vibrant market of Amrapali Crystal Homes, Sector 76, we prioritize hair and skin health over short-term trends. Our stylists take time to understand your individual hair texture, personal aesthetic, and daily routine to deliver looks that stay effortless between visits.
            </p>

            {/* 4 Pillars / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#F8FAFA] border border-gray-200/70 hover:border-[#064E3B]/40 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#064E3B] text-white shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-[#D9DEE2]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#022C22] group-hover:text-[#064E3B] transition-colors">
                          {h.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 leading-normal">
                          {h.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="bg-[#064E3B] hover:bg-[#022C22] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow hover:shadow-md cursor-pointer"
              >
                Book an Appointment
              </button>
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-[#064E3B] border border-[#064E3B]/40 px-5 py-3 rounded-lg text-sm font-semibold transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
