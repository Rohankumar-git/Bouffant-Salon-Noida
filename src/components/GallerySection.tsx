import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { SalonImg } from './SalonImg';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Hair', 'Styling', 'Salon', 'Beauty'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentModalItem: GalleryItem | null =
    selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8FAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B]/10 border border-[#064E3B]/20 text-[#064E3B] text-xs font-semibold tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            Visual Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#022C22] mb-4">
            The Bouffant Lookbook
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Explore our signature haircuts, vibrant hair colors, restorative therapies, and luxurious salon interior in Sector 76, Noida.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-sm'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#064E3B]/50 hover:text-[#064E3B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative overflow-hidden rounded-2xl bg-white border border-silver-subtle shadow-sm hover:shadow-luxury cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container with fixed aspect ratio to prevent distortion */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                <SalonImg
                  src={item.image}
                  fallbackSrc={item.fallbackImage}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay with Emerald & Light Silver accents */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#022C22]/90 via-[#022C22]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-white mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D9DEE2] bg-[#064E3B] px-2.5 py-0.5 rounded-full border border-white/20">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-white line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-200 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Card Footer Caption (visible on mobile / non-hover) */}
              <div className="p-4 sm:hidden">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                  <span className="text-[10px] uppercase font-bold text-[#064E3B] bg-[#064E3B]/10 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImageIndex !== null && currentModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full bg-[#022C22] rounded-2xl overflow-hidden border border-[#D9DEE2]/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image viewer */}
            <div className="relative flex-1 min-h-[350px] max-h-[65vh] bg-black/50 flex items-center justify-center overflow-hidden">
              <SalonImg
                src={currentModalItem.image}
                fallbackSrc={currentModalItem.fallbackImage}
                alt={currentModalItem.title}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Info Bar */}
            <div className="p-5 sm:p-6 bg-[#022C22] border-t border-[#064E3B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D9DEE2] bg-[#064E3B] px-2.5 py-0.5 rounded-full border border-white/10">
                    {currentModalItem.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {selectedImageIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {currentModalItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                  {currentModalItem.caption}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <a
                  href={`https://wa.me/917982240842?text=${encodeURIComponent(
                    `Hi Bouffant Salon, I loved the look from your portfolio: "${currentModalItem.title}". Can I get a consultation for this?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#064E3B] hover:bg-[#08634b] text-white text-xs font-semibold border border-[#D9DEE2]/30 flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D9DEE2]" />
                  Book Similar Look
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
