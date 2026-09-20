import React from 'react';
import { INSTAGRAM_POSTS, SALON_INFO } from '../data/salonData';
import { SalonImg } from './SalonImg';
import { Instagram, Heart, ExternalLink } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#022C22] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B] border border-[#D9DEE2]/20 text-[#D9DEE2] text-xs font-semibold tracking-widest uppercase mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#D9DEE2]" />
              Social Spotlight
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white">
              Follow Bouffant Salon
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-xl">
              Stay inspired with daily hair transformations, styling tips & behind-the-scenes moments from our Sector 76 salon.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D9DEE2] hover:bg-white text-[#022C22] px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer text-center"
            >
              <Instagram className="w-4 h-4 text-[#022C22]" />
              <span>Follow Us on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Instagram Grid of 6 curated photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-black/40 border border-white/10 block"
            >
              <SalonImg
                src={post.image}
                fallbackSrc="/images/salon_interior.jpg"
                alt="Bouffant Salon Instagram Post"
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#022C22]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <Instagram className="w-6 h-6 text-[#D9DEE2] mb-2" />
                <div className="flex items-center gap-1 text-xs text-white font-medium mb-2">
                  <Heart className="w-3.5 h-3.5 fill-red-400 text-red-400" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-[10px] text-gray-200 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Profile Handle Bar */}
        <div className="mt-8 text-center">
          <a
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#D9DEE2] hover:text-white font-medium transition-colors"
          >
            <span>{SALON_INFO.instagramHandle}</span>
            <span className="text-gray-500">•</span>
            <span className="text-xs text-gray-400">Amrapali Crystal Homes, Sector 76 Noida</span>
          </a>
        </div>
      </div>
    </section>
  );
};
