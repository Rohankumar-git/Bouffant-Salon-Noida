import React from 'react';
import { WHY_CHOOSE_ITEMS, SALON_INFO } from '../data/salonData';
import { Award, Sparkles, Gem, ShieldCheck, Users, MessageCircle, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Award,
  Sparkles,
  Gem,
  ShieldCheck,
  Users,
};

interface WhyChooseUsProps {
  onBookClick?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#022C22] text-white relative">
      {/* Background silver shimmer accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#064E3B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9DEE2] px-3.5 py-1 rounded-full bg-[#064E3B] border border-[#D9DEE2]/20 inline-block mb-3">
            The Bouffant Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-4 font-normal">
            Why Choose Bouffant Salon
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We hold ourselves to the highest standards of hygiene, technique, and customer hospitality for every guest walking through our doors.
          </p>
        </div>

        {/* 5 Cards Grid (Without Sector 76 text underneath) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-[#064E3B]/40 hover:bg-[#064E3B]/70 border border-[#D9DEE2]/20 hover:border-[#D9DEE2]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#022C22] border border-[#D9DEE2]/20 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-[#D9DEE2] transition-all">
                    <IconComponent className="w-6 h-6 text-[#D9DEE2]" />
                  </div>

                  <h3 className="text-lg font-heading font-semibold text-white mb-2.5 group-hover:text-[#D9DEE2] transition-colors text-left">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visually Prominent & Premium Booking CTA Section */}
        <div className="mt-14 pt-8 border-t border-[#064E3B]/80">
          <div className="bg-gradient-to-r from-[#064E3B]/90 via-[#064E3B] to-[#022C22] border border-[#D9DEE2]/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9DEE2]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center lg:text-left max-w-2xl flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#022C22]/80 border border-[#D9DEE2]/30 text-[#D9DEE2] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#D9DEE2]" />
                Personalized Styling Consultation
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-normal text-white mb-3">
                Ready to Experience the Bouffant Difference?
              </h3>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4">
                Connect directly with our master stylists on WhatsApp for instant slot availability, styling advice, or immediate appointment booking.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-[#D9DEE2]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  Instant WhatsApp Confirmation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  Zero Waiting Time
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                  Unisex Services
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#4ade80] hover:bg-[#22c55e] text-[#022C22] px-8 py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-center"
              >
                <MessageCircle className="w-5 h-5 text-[#022C22]" />
                <span>Book Now on WhatsApp</span>
              </a>

              {onBookClick && (
                <button
                  onClick={onBookClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#022C22]/80 hover:bg-[#022C22] text-[#D9DEE2] hover:text-white border border-[#D9DEE2]/40 px-6 py-4 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer text-center"
                >
                  <Calendar className="w-4 h-4 text-[#D9DEE2]" />
                  <span>Book Online</span>
                  <ArrowRight className="w-4 h-4 text-[#D9DEE2]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

