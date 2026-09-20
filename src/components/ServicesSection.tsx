import React, { useState } from 'react';
import { SERVICE_CATEGORIES, SALON_INFO } from '../data/salonData';
import { ServiceCategory, ServiceItem } from '../types';
import { SalonImg } from './SalonImg';
import { Sparkles, Calendar, MessageCircle, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICE_CATEGORIES[0].id);
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<ServiceCategory | null>(null);

  const activeCategory =
    SERVICE_CATEGORIES.find((cat) => cat.id === activeTab) || SERVICE_CATEGORIES[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B]/10 border border-[#064E3B]/20 text-[#064E3B] text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Salon Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#022C22] mb-4">
            Specialized Care for Men & Women
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Organized into five focused categories to deliver personalized hair, scalp, skin, and grooming treatments with professional grade products.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-12 gap-2 sm:gap-3 no-scrollbar">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`whitespace-nowrap px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-md shadow-[#064E3B]/20'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#064E3B]/50 hover:text-[#064E3B]'
                }`}
              >
                <span className="opacity-75 mr-1.5">{idx + 1}.</span>
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Showcase */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-luxury overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Category Banner & Imagery */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#022C22] p-8 flex flex-col justify-between overflow-hidden">
              <SalonImg
                src={activeCategory.image}
                fallbackSrc={activeCategory.fallbackImage}
                alt={activeCategory.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-[#022C22]/80 to-transparent" />

              <div className="relative z-10">
                <span className="text-xs font-semibold text-[#D9DEE2] tracking-wider uppercase bg-[#064E3B]/80 px-3 py-1 rounded-full border border-[#D9DEE2]/20 inline-block mb-3">
                  Category Focus
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading text-white font-semibold mb-2">
                  {activeCategory.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {activeCategory.subtitle}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#D9DEE2] bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4ade80]" />
                  <span>{activeCategory.highlight}</span>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-auto flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onSelectService(activeCategory.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9DEE2] hover:bg-white text-[#022C22] px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Book This Category
                </button>
                <a
                  href={SALON_INFO.getCustomWhatsappUrl(
                    `Hi Bouffant Salon, I would like to inquire about ${activeCategory.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#064E3B] hover:bg-[#08634b] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border border-[#D9DEE2]/30"
                >
                  <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right List of Sub-Services */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                    Included Treatments & Procedures
                  </h4>
                  <span className="text-xs text-[#064E3B] font-medium">
                    {activeCategory.services.length} Specialized Services
                  </span>
                </div>

                <div className="space-y-4">
                  {activeCategory.services.map((service) => (
                    <div
                      key={service.id}
                      className="group p-5 rounded-xl border border-gray-100 hover:border-[#064E3B]/30 hover:bg-[#F8FAFA] transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h5 className="text-base font-bold text-[#022C22] group-hover:text-[#064E3B] transition-colors">
                            {service.name}
                          </h5>
                          {service.popular && (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#064E3B]/10 text-[#064E3B] border border-[#064E3B]/20">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                          {service.description}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-2 pt-2 sm:pt-0">
                        <button
                          onClick={() => onSelectService(service.name)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-[#064E3B] text-white hover:bg-[#022C22] transition-colors cursor-pointer"
                        >
                          <span>Book Now</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Note */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500">
                <span className="text-left">Not sure which treatment suits you best?</span>
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#064E3B] hover:underline inline-flex items-center gap-1.5 shrink-0 text-left"
                >
                  <span>Ask our Stylist on WhatsApp</span> <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Category Overview Grid Below */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((cat) => (
            <div
              key={`card-${cat.id}`}
              onClick={() => {
                setActiveTab(cat.id);
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white p-6 rounded-xl border border-gray-200/70 hover:border-[#064E3B] hover:shadow-luxury transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#064E3B] tracking-wider uppercase">
                    Bouffant Specialty
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#064E3B] group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-lg font-heading text-[#022C22] font-semibold mb-2 group-hover:text-[#064E3B] transition-colors">
                  {cat.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {cat.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                {cat.services.map((s) => (
                  <span
                    key={s.id}
                    className="text-[11px] bg-gray-50 text-gray-700 px-2 py-1 rounded border border-gray-200/60"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
