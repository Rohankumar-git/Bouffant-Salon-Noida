import React from 'react';
import { TESTIMONIALS, SALON_INFO } from '../data/salonData';
import { Star, CheckCircle, ExternalLink, MessageSquareQuote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Rating Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Google Style Rating Card Banner */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F8FAFA] border border-gray-200/80 shadow-sm mb-4">
            {/* Google G icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>

            <div className="flex items-center gap-1.5">
              <span className="font-bold text-gray-900 text-sm">{SALON_INFO.rating}</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Verified Google Business Reviews
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#022C22] mb-4">
            Loved by Clients Across Sector 76
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Honest feedback from men and women who trust Bouffant Salon Noida for their routine grooming, bespoke cuts, and transformative hair care.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#F8FAFA] p-7 rounded-2xl border border-gray-200/80 hover:border-[#064E3B]/30 hover:bg-white hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Review Header with Google Avatar Avatar Style */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-bold text-sm">
                      {review.author[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#022C22] flex items-center gap-1.5">
                        {review.author}
                        {review.verified && (
                          <span title="Verified Customer" className="inline-flex">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                          </span>
                        )}
                      </h4>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                  </div>

                  {/* Google G small */}
                  <div className="w-5 h-5 rounded-full bg-white p-0.5 shadow-xs border border-gray-100 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-blue-600">G</span>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{review.comment}"
                </p>
              </div>

              {/* Service Mentioned Tag */}
              {review.serviceMentioned && (
                <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-semibold text-[#064E3B]">
                    {review.serviceMentioned}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA: See More Reviews */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bouffant+Salon+Amrapali+Crystal+Homes+Sector+76+Noida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-gray-50 text-[#022C22] border border-gray-300 font-semibold text-sm transition-all shadow-xs hover:shadow-md"
          >
            <span>See More Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
