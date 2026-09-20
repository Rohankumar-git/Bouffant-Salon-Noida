import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Haircuts');

  const scrollToAppointment = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFA] text-[#1F2933] flex flex-col font-body pb-16 md:pb-0 selection:bg-[#064E3B] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onBookClick={() => scrollToAppointment()} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToAppointment()} />

        {/* 5-Category Services Section */}
        <ServicesSection onSelectService={(s) => scrollToAppointment(s)} />

        {/* About Bouffant Salon Section */}
        <AboutSection onBookClick={() => scrollToAppointment()} />

        {/* Why Choose Us Cards */}
        <WhyChooseUs onBookClick={() => scrollToAppointment()} />

        {/* Gallery Lookbook Section */}
        <GallerySection />

        {/* Customer Reviews Section */}
        <ReviewsSection />

        {/* Instagram Follow Section */}
        <InstagramSection />

        {/* High-Converting Appointment Booking Section */}
        <AppointmentSection preselectedService={selectedService} />

        {/* Contact, Directions & Google Maps Section */}
        <ContactSection />
      </main>

      {/* Luxury Footer */}
      <Footer onBookClick={() => scrollToAppointment()} />

      {/* Fixed Mobile Bottom Action Bar (WhatsApp | Call | Book) */}
      <MobileStickyBar onBookClick={() => scrollToAppointment()} />

      {/* Floating Back to Top Control */}
      <BackToTop />
    </div>
  );
}
