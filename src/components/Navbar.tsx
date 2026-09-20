import React, { useState, useEffect } from 'react';
import { BouffantLogo } from './BouffantLogo';
import { SALON_INFO } from '../data/salonData';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin, Clock } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-bar with opening hours & location */}
      <div className="bg-[#022C22] text-[#D9DEE2] text-xs py-2 px-4 border-b border-[#064E3B]/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#D9DEE2]" />
              {SALON_INFO.locationShort}
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#D9DEE2]" />
              {SALON_INFO.openingHours}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={SALON_INFO.phoneTel}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SALON_INFO.phoneDisplay}</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#4ade80] hover:text-white transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#022C22]/95 backdrop-blur-md shadow-lg border-b border-[#064E3B]/80 py-3'
            : 'bg-[#022C22] py-4 border-b border-[#064E3B]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center focus:outline-none" aria-label="Bouffant Salon Homepage">
              <BouffantLogo variant="white" size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-[#EEF1F2] hover:text-[#D9DEE2] relative py-1 transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9DEE2] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2.5 rounded-full bg-[#064E3B] text-white hover:bg-[#075e47] border border-[#D9DEE2]/20 transition-all hover:scale-105"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#D9DEE2]" />
              </a>

              <a
                href={SALON_INFO.phoneTel}
                className="inline-flex items-center justify-center p-2.5 rounded-full bg-[#064E3B] text-white hover:bg-[#075e47] border border-[#D9DEE2]/20 transition-all hover:scale-105"
                title="Call Bouffant Salon"
                aria-label="Call Bouffant Salon"
              >
                <Phone className="w-4 h-4 text-[#D9DEE2]" />
              </a>

              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 bg-[#D9DEE2] text-[#022C22] hover:bg-white px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#022C22]" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onBookClick}
                className="bg-[#D9DEE2] text-[#022C22] px-3.5 py-1.5 rounded text-xs font-semibold sm:hidden"
              >
                Book
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-[#D9DEE2] hover:text-white hover:bg-[#064E3B] focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#022C22] border-b border-[#064E3B] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#EEF1F2] hover:text-white px-3 py-2 rounded-md hover:bg-[#064E3B]/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#064E3B] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 bg-[#D9DEE2] text-[#022C22] font-semibold rounded-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#064E3B] text-white rounded text-center text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#D9DEE2]/20"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#4ade80]" />
                  WhatsApp
                </a>
                <a
                  href={SALON_INFO.phoneTel}
                  className="py-2.5 px-3 bg-[#064E3B] text-white rounded text-center text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#D9DEE2]/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D9DEE2]" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
