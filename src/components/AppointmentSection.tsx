import React, { useState, useEffect } from 'react';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { AppointmentFormData } from '../types';
import { Calendar, Clock, User, Phone, Sparkles, MessageSquare, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

interface AppointmentSectionProps {
  preselectedService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    service: preselectedService || 'Haircuts',
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Flatten all services for dropdown selection
  const allServices = SERVICE_CATEGORIES.flatMap((cat) =>
    cat.services.map((s) => `${s.name} (${cat.title})`)
  );

  const timeSlots = [
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:30 PM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
    '06:00 PM',
    '07:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!formData.preferredDate) {
      setErrorMsg('Please select your preferred appointment date.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const details = `Hi Bouffant Salon Noida, I would like to request an appointment:
• Name: ${formData.name || 'Guest'}
• Phone: ${formData.phone || 'N/A'}
• Service: ${formData.service}
• Preferred Date: ${formData.preferredDate || 'Earliest available'}
• Preferred Time: ${formData.preferredTime}
${formData.message ? `• Note: ${formData.message}` : ''}
Please confirm availability. Thank you!`;

    window.open(SALON_INFO.getCustomWhatsappUrl(details), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#F8FAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200/80 shadow-luxury overflow-hidden">
          {/* Header Banner */}
          <div className="bg-[#022C22] p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B] border border-[#D9DEE2]/20 text-[#D9DEE2] text-xs font-semibold tracking-widest uppercase mb-3">
                <Calendar className="w-3.5 h-3.5" />
                Schedule Your Visit
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-3">
                Ready for Your Next Look?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Book your appointment with Bouffant Salon Noida today. We confirm slots promptly and ensure personalized attention for every guest.
              </p>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-[#064E3B]/40 blur-3xl" />
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            {submitted ? (
              /* Success State */
              <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#064E3B]/10 rounded-full flex items-center justify-center mx-auto text-[#064E3B]">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-[#022C22]">
                    Appointment Request Received!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-[#022C22]">{formData.name}</span>. Our desk at Bouffant Salon Noida has received your request for{' '}
                    <span className="font-semibold text-[#064E3B]">{formData.service}</span> on{' '}
                    <span className="font-semibold text-[#022C22]">{formData.preferredDate}</span> at{' '}
                    <span className="font-semibold text-[#022C22]">{formData.preferredTime}</span>.
                  </p>
                  <p className="text-xs text-gray-500">
                    We will contact you shortly at <span className="font-semibold">{formData.phone}</span> to confirm your slot.
                  </p>
                </div>

                {/* Direct WhatsApp Confirmation Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#064E3B] hover:bg-[#08634b] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                    <span>Instant Confirm via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: 'Haircuts',
                        preferredDate: '',
                        preferredTime: '11:00 AM',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-lg text-sm font-semibold text-gray-600 hover:text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Book Another Service
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rohan Sharma"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 text-sm transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Phone Number (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 text-sm transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Select Service / Treatment <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 text-sm bg-white transition-all outline-none"
                      >
                        <optgroup label="Hair & Styling">
                          <option value="Haircuts">Haircuts (Men / Women)</option>
                          <option value="Hair Styling">Hair Styling & Blowouts</option>
                          <option value="Women's Hair & Beauty Services">Women's Hair & Beauty Services</option>
                          <option value="Men's Grooming">Men's Grooming & Beard Shaping</option>
                        </optgroup>
                        <optgroup label="Hair Color & Treatments">
                          <option value="Hair Coloring">Hair Coloring & Balayage</option>
                          <option value="Keratin Treatment">Keratin Treatment & Smoothing</option>
                          <option value="Hair Spa">Nourishing Hair Spa</option>
                        </optgroup>
                        <optgroup label="Scalp & Hair Care">
                          <option value="Scalp Treatment">Scalp Treatment & Clarification</option>
                          <option value="Scalp Revitalization">Scalp Revitalization Therapy</option>
                        </optgroup>
                        <optgroup label="Skin & Facials">
                          <option value="Skin Care">Skin Care & Detan Clean-up</option>
                          <option value="Facials">Radiance & Hydrating Facials</option>
                        </optgroup>
                        <optgroup label="Other">
                          <option value="Consultation">General Consultation & Multiple Services</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 text-sm transition-all outline-none bg-white"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 text-sm bg-white transition-all outline-none"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Special Requests / Notes (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us if you need multiple services, hair length, or specific timing..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 text-sm transition-all outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submission CTA + WhatsApp shortcut */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-gray-100">
                  <button
                    type="submit"
                    className="bg-[#064E3B] hover:bg-[#022C22] text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <span>Or book directly via</span>
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="font-semibold text-[#064E3B] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#4ade80]" />
                      WhatsApp Chat
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
